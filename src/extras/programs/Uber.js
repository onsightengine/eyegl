import { Program } from '../../core/Program.js';
import { Texture } from '../../core/Texture.js';

let _texture;
function emptyTexture() {
    if (!_texture || !_texture.isTexture) _texture = new Texture();
    return _texture;
}

class Uber extends Program {

    #flatShading = false;

    #mapDiffuse = 0;

    #normalIntensity = 0.0;
    #opacity = 1.0;
    #tint = [ 1, 1, 1 ];
    #tintIntensity = 0.0;
    #wireIntensity = 0.0;

    constructor({
        texture = emptyTexture(),
        textureNormal = emptyTexture(),

        flatShading = false,
        normalIntensity = 0.0,
        normalScale = 0.0,
        opacity = 1.0,
        tint = [ 1, 1, 1 ],
        tintIntensity = 0.0,
        wireIntensity = 0.0,
        ...programProps
    } = {}) {
        super({
            ...programProps,
            vertex: defaultVertex,
            fragment: defaultFragment,
            uniforms: {
                tDiffuse: { value: texture },
                tNormal: { value: textureNormal },
                uNormalScale: { value: normalScale },
                uNormalUVScale: { value: 1 },
                uNormalIntensity: { value: normalIntensity },
                uOpacity: { value: opacity },
                uTime: { value: 0 },
                uTint: { value: tint },
                uTintIntensity: { value: tintIntensity },
                uWireIntensity: { value: wireIntensity },
            },
            defines: {
                FLAT_SHADED: flatShading,
            }
        });

        this.#flatShading = flatShading;
        this.#mapDiffuse = texture;
        this.#normalIntensity = normalIntensity
        this.#opacity = opacity
        this.#tint = tint
        this.#tintIntensity = tintIntensity
        this.#wireIntensity = wireIntensity
    }

    rebuildProgram() {
        this.buildProgram({
            vertex: defaultVertex,
            fragment: defaultFragment,
            uniforms: {
                tDiffuse: { value: this.#mapDiffuse },
                uNormalIntensity: { value: this.#normalIntensity },
                uOpacity: { value: this.#opacity },
                uTint: { value: this.#tint },
                uTintIntensity: { value: this.#tintIntensity },
                uWireIntensity: { value: this.#wireIntensity },
            },
            defines: {
                FLAT_SHADED: this.#flatShading,
            }
        });
    }

    get flatShading() { return this.#flatShading; }

    set flatShading(flatShading) {
        if (this.#flatShading === flatShading) return;
        this.#flatShading = flatShading;
        this.rebuildProgram();
    }

    get normalIntensity() { return this.#normalIntensity; }

    set normalIntensity(normalIntensity) {
        this.uniforms.uNormalIntensity.value = normalIntensity;
    }

    get opacity() { return this.#opacity; }

    set opacity(opacity) {
        this.uniforms.uOpacity.value = opacity;
    }

    get tint() { return this.#tint; }

    set tint(tint) {
        this.uniforms.uTint.value = tint;
    }

    get tintIntensity() { return this.#tintIntensity; }

    set tintIntensity(tintIntensity) {
        this.uniforms.uTintIntensity.value = tintIntensity;
    }

    get wireIntensity() { return this.#wireIntensity; }

    set wireIntensity(wireIntensity) {
        this.uniforms.uWireIntensity.value = wireIntensity;
    }

}

export { Uber };

/******************** INTERNAL ********************/

const defaultVertex = /* glsl */ `#version 300 es
    in vec2 uv;
    in vec3 position;
    in vec3 normal;

    vec3 bary[3] = vec3[](vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0));

    uniform mat3 normalMatrix;
    uniform mat4 modelMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    #ifdef FLAT_SHADED
        flat out vec3 vNormal;
    #else
        out vec3 vNormal;
    #endif

    out vec3 vBary;
    out vec3 vMPos;
    out vec2 vUv;

    void main() {
        vBary = bary[int(mod(float(gl_VertexID), 3.0))];
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vMPos = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const defaultFragment = /* glsl */ `#version 300 es
    precision highp float;

    uniform float uNormalIntensity;
    uniform float uOpacity;
    uniform vec3 uTint;
    uniform float uTintIntensity;
    uniform float uWireIntensity;

    uniform sampler2D tDiffuse;
    uniform sampler2D tNormal;
    uniform float uNormalScale;
    uniform float uNormalUVScale;

    uniform mat4 viewMatrix;
    uniform float uTime;

    #ifdef FLAT_SHADED
        flat in vec3 vNormal;
    #else
        in vec3 vNormal;
    #endif

    in vec3 vBary;
    in vec3 vMPos;
    in vec2 vUv;

    layout(location = 0) out highp vec4 pc_fragColor;

    void main() {
        float alpha = uOpacity;

        // ----- Normal -----
        vec3 plainNormal = normalize(vNormal);
        vec3 textNormal = mix(vec3(1.0), texture(tNormal, vUv).rgb * 2.0 - 1.0, uNormalScale);
        vec3 normal = normalize(plainNormal * textNormal);

        // ----- Diffuse -----
        vec4 tex = texture(tDiffuse, vUv);
        alpha *= tex.a;

        vec3 light = vec3(0.0);//normalize(vec3(sin(uTime), 1.0, cos(uTime)));
        float shading = dot(normal, light) * 0.25;

        vec3 diffuse = tex.rgb + shading;

        // ----- Color Tint -----
        diffuse = mix(diffuse, uTint, uTintIntensity);

        // ----- Normal Tint -----
        diffuse = mix(diffuse, normal, uNormalIntensity);

        // ----- Barycentric -----
        vec3 baryDiffuse = diffuse;
        float baryAlpha = 1.0;

        float lineWidth = 5.0; // line thickness - in pixels
        float lineHalf = lineWidth / 2.0;
        vec3 d = fwidth(vBary);
        vec3 s = smoothstep(d * (lineWidth + lineHalf), d * (lineWidth - lineHalf), vBary);
        baryAlpha *= max(max(s.x, s.y), s.z);

        // // Dashes
        // baryAlpha *= step(0.0, sin(max(vBary.x, vBary.y) * 3.14 * 5.0));

        // Back face shading
        baryDiffuse = mix(vec3(0, 0, 0), baryDiffuse, vec3(gl_FrontFacing));
        baryAlpha = mix(baryAlpha * 0.1 + 0.02, baryAlpha, float(gl_FrontFacing));

        diffuse = mix(diffuse, baryDiffuse, uWireIntensity);
        alpha = mix(alpha, baryAlpha, uWireIntensity);
        if (alpha < 0.01) discard;
        diffuse *= alpha;

        // ----- Output -----
        pc_fragColor = vec4(diffuse, alpha);

    }
`;
