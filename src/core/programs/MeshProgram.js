import { Program } from '../Program.js';

class MeshProgram extends Program {

    static vertex = /* glsl */ `#version 300 es
        in vec2 uv;
        in vec3 position;
        in vec3 normal;

        vec3 bary[3] = vec3[](vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0));

        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform mat3 normalMatrix;

        #ifdef FLAT_SHADED
            flat out vec3 vNormal;
        #else
            out vec3 vNormal;
        #endif

        out vec3 vBary;
        out vec2 vUv;

        void main() {
            vBary = bary[int(mod(float(gl_VertexID), 3.0))];
            vNormal = normalize(normalMatrix * normal);
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    static fragment = /* glsl */ `#version 300 es
        precision highp float;

        uniform float uNormalIntensity;
        uniform float uOpacity;
        uniform sampler2D tMap;

        #ifdef FLAT_SHADED
            flat in vec3 vNormal;
        #else
            in vec3 vNormal;
        #endif

        in vec3 vBary;
        in vec2 vUv;

        layout(location = 0) out highp vec4 pc_fragColor;

        void main() {


            vec3 bary = vBary;

            // vec3 color = normalize(vNormal); // vec3(0);
            // float alpha = 1.0;

            // // Line thickness - in pixels
            // float width = 5.0 * 0.5;
            // vec3 d = fwidth(bary);
            // vec3 s = smoothstep(d * (width + 0.5), d * (width - 0.5), bary);
            // alpha *= max(max(s.x, s.y), s.z);

            // // Dashes
            // alpha *= step(0.0, sin(max(bary.x, bary.y) * 3.14 * 5.0));

            // // Back face shading
            // color = mix(vec3(1, 0, 0), color, vec3(gl_FrontFacing));
            // alpha = mix(alpha * 0.1 + 0.02, alpha, float(gl_FrontFacing));

            // pc_fragColor.rgb = color;
            // pc_fragColor.a = alpha;


            vec3 normal = normalize(vNormal);

            vec3 tex = texture(tMap, vUv).rgb;
            vec3 light = normalize(vec3(0.5, 1.0, -0.3));
            float shading = dot(normal, light) * 0.15;
            vec3 diffuse = mix(tex + shading, normal, uNormalIntensity);

            pc_fragColor = vec4(diffuse, uOpacity);

            // pc_fragColor = vec4(normalize(vNormal), 1.0);
        }
    `;

    #flatShading = false;

    #mapDiffuse = 0;
    #normalIntensity = 0.0;
    #opacity = 1.0;

    constructor({
        flatShading = false,
        normalIntensity = 0.0,
        opacity = 1.0,
        texture = 0,
        ...programProps
    } = {}) {

        super({
            ...programProps,
            vertex: MeshProgram.vertex,
            fragment: MeshProgram.fragment,
            uniforms: {
                uNormalIntensity: { value: normalIntensity },
                uOpacity: { value: opacity },
                tMap: { value: texture },
            },
            defines: {
                FLAT_SHADED: flatShading,
            }
        });

        this.#flatShading = flatShading;
        this.#mapDiffuse = texture;
        this.#opacity = opacity
    }

    rebuildProgram() {
        this.buildProgram({
            vertex: MeshProgram.vertex,
            fragment: MeshProgram.fragment,
            uniforms: {
                uNormalIntensity: { value: this.#normalIntensity },
                uOpacity: { value: this.#opacity },
                tMap: { value: this.#mapDiffuse },
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

}

export { MeshProgram };
