import { Program } from '../Program.js';

class MeshNormalProgram extends Program {

    static vertex = /* glsl */ `#version 300 es

        vec3 bary[3] = vec3[](vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0));

        in vec3 position;
        in vec3 normal;

        uniform mat3 normalMatrix;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;

        #ifdef FLAT_SHADED
            flat out vec3 vNormal;
        #else
            out vec3 vNormal;
        #endif

        out vec3 vBary;

        void main() {
            vBary = bary[int(mod(float(gl_VertexID), 3.0))];
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    static fragment = /* glsl */ `#version 300 es
        precision highp float;

        #ifdef FLAT_SHADED
            flat in vec3 vNormal;
        #else
            in vec3 vNormal;
        #endif

        in vec3 vBary;

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



            pc_fragColor = vec4(normalize(vNormal), 1.0);
        }
    `;

    #flatShading = false;

    constructor({
        flatShading = false,
        ...programProps
    } = {}) {

        super({
            ...programProps,
            vertex: MeshNormalProgram.vertex,
            fragment: MeshNormalProgram.fragment,
            defines: {
                FLAT_SHADED: flatShading,
            }
        });

        this.#flatShading = flatShading;
    }

    get flatShading() { return this.#flatShading; }

    set flatShading(flatShading) {
        if (this.#flatShading === flatShading) return;
        this.#flatShading = flatShading;
        this.buildProgram({
            vertex: MeshNormalProgram.vertex,
            fragment: MeshNormalProgram.fragment,
            defines: {
                FLAT_SHADED: flatShading,
            }
        });
    }

}

export { MeshNormalProgram };
