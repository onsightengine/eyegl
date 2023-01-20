import { Program } from '../../core/Program.js';
import { Texture } from '../../core/Texture.js';

class InstancedBillboard extends Program {

    constructor({
        texture,
        ...programProps
    } = {}) {
        super({
            ...programProps,
            vertex: defaultVertex,
            fragment: defaultFragment,
            uniforms: {
                tDiffuse: { value: texture },
            },
        });
    }


}

export { InstancedBillboard };

/***** Internal *****/

const defaultVertex = /* glsl */ `#version 300 es
    in vec2 uv;
    in vec3 position;
    in vec3 normal;

    in vec4 m1;
    in vec4 m2;
    in vec4 m3;
    in vec4 m4;

    uniform mat3 normalMatrix;
    uniform mat4 modelMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    out vec3 vNormal;
    out vec2 vUv;

    void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);

        mat4 tsr = mat4(m1.x, m1.y, m1.z, m1.w,
                        m2.x, m2.y, m2.z, m2.w,
                        m3.x, m3.y, m3.z, m3.w,
                        m4.x, m4.y, m4.z, m4.w);

        vec4 mvPosition = modelViewMatrix * tsr * vec4(0.0, 0.0, 0.0, 1.0);
        mvPosition.xy += position.xy;
        gl_Position = projectionMatrix * mvPosition;

        // vec3 pos = position;
        // gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const defaultFragment = /* glsl */ `#version 300 es
    precision highp float;

    uniform sampler2D tDiffuse;

    in vec2 vUv;

    layout(location = 0) out highp vec4 pc_fragColor;

    void main() {

        // ----- Diffuse -----
        vec4 tex = texture(tDiffuse, vUv);

        vec3 diffuse = tex.rgb;
        float alpha = tex.a;

        // ----- Output -----
        if (alpha < 0.01) discard;
        diffuse *= alpha;

        pc_fragColor = vec4(diffuse, alpha);
    }
`;
