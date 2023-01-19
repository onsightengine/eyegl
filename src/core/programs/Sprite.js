import { Program } from '../Program.js';
import { Texture } from '../Texture.js';

class Sprite extends Program {

    static vertex = /* glsl */ `#version 300 es
        in vec2 uv;
        in vec3 position;
        in vec3 normal;

        uniform mat3 normalMatrix;
        uniform mat4 modelMatrix;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;

        out vec2 vUv;

        void main() {
            vUv = uv;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    static fragment = /* glsl */ `#version 300 es
        precision highp float;

        uniform sampler2D tDiffuse;

        in vec2 vUv;

        layout(location = 0) out highp vec4 pc_fragColor;

        void main() {

            // ----- Diffuse -----
            vec3 tex = texture(tDiffuse, vUv).rgb;

            // ----- Output -----
            pc_fragColor = vec4(diffuse, alpha);

        }
    `;

    constructor({
        texture,
        ...programProps
    } = {}) {
        super({
            ...programProps,
            vertex: Standard.vertex,
            fragment: Standard.fragment,
            uniforms: {
                tDiffuse: { value: texture },
            },
        });
    }


}

export { Sprite };
