import { Program } from '../Program.js';

class MeshNormalProgram extends Program {

    static vertex = /* glsl */ `#version 300 es
        in vec3 position;
        in vec3 normal;

        uniform mat3 normalMatrix;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;

        flat out vec3 vNormal;

        void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    static fragment = /* glsl */ `#version 300 es
        precision highp float;

        flat in vec3 vNormal;

        layout(location = 0) out highp vec4 pc_fragColor;

        void main() {
            pc_fragColor = vec4(normalize(vNormal), 1.0);
        }
    `;

    constructor({
        flatShading = false,
        ...programProps
    } = {}) {

        super({
            ...programProps,
            vertex: MeshNormalProgram.vertex,
            fragment: MeshNormalProgram.fragment,
            defines: {
                FLAT_SHADING: flatShading,
            }
        });
    }

}

export { MeshNormalProgram };
