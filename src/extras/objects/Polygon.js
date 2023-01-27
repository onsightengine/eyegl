import { Geometry } from '../../core/Geometry.js';
import { Program } from '../../core/Program.js';
import { Mesh } from '../../core/Mesh.js';

import { Color } from '../../math/Color.js';
import { Vec2 } from '../../math/Vec2.js';
import { Vec3 } from '../../math/Vec3.js';

const tmp = new Vec3();

// seee https://github.com/slembcke/Chipmunk2D/blob/master/demo/ChipmunkDebugDraw.c

class Polygon {

    static Circle ({
        point = new Vec3(0, 0, 0),
        color = new Vec3(1, 1, 1),
        outline = new Vec3(1, 0, 0),
        radius = 0,
        attributes = {},
    } = {}) {

        const count = 4;

        // Create buffers
        const position = new Float32Array(count * 3);
        const uv = new Float32Array(count * 2);
        // const radius = new Float32Array(count * 1);
        const index = new Uint16Array(6);
        // const index = count > 65536 ? new Uint32Array(count) : new Uint16Array(count);

        function setIndex(i, x, y, z, u, v) {
            position[i * 3 + 0] = x;
            position[i * 3 + 1] = y;
            position[i * 3 + 2] = z;

            uv[i * 2 + 0] = u;
            uv[i * 2 + 1] = v;
        }

        setIndex(0, point.x, point.y, 0, -1, -1);
        setIndex(1, point.x, point.y, 0, -1, +1);
        setIndex(2, point.x, point.y, 0, +1, +1);
        setIndex(3, point.x, point.y, 0, +1, -1);

        index.set([ 0, 1, 2, 0, 2, 3 ]);

        Object.assign(attributes, {
            position: { size: 3, data: position },
            // normal: { size: 3, data: normal },
            uv: { size: 2, data: uv },
            index: { data: index },
        });

        return new Geometry(attributes);
    }

}

export { Polygon };

/***** Internal *****/

const defaultVertex = /* glsl */ `#version 300 es
    precision highp float;

    in vec3 position;
    in vec2 uv;
    in float radius;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    out vec2 vUv;

    void main() {
        vUv = uv;

        vec3 smoothPosition = vec3(position.xy + (uv * radius), 0);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(smoothPosition, 1.0);
    }
`;

const defaultFragment = /* glsl */ `#version 300 es
    precision highp float;

    uniform vec3 uColor;
    uniform vec3 uOutline;
    uniform float uAlpha;

    in vec2 vUv;

    layout(location = 0) out highp vec4 pc_fragColor;

    void main() {


        pc_fragColor = vec4(uColor, 1.0);
    }
`;
