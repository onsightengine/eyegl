import { Geometry } from '../../core/Geometry.js';
import { Program } from '../../core/Program.js';
import { Mesh } from '../../core/Mesh.js';

import { Color } from '../../math/Color.js';
import { Vec2 } from '../../math/Vec2.js';
import { Vec3 } from '../../math/Vec3.js';

const tmp = new Vec3();

class Polygon {

    static Circle({
        point = new Vec3(0, 0, 0),
        color = new Vec3(1, 1, 1),
        outline = new Vec3(1, 0, 0),
        radius = 1,
        attributes = {},
    } = {}) {

        const count = 4;
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
            uv: { size: 2, data: uv },
            index: { data: index },
        });

        return new Geometry(attributes);
    }

    static FatSegment({
        a = new Vec3(0, 0, 0),
        b = new Vec3(0, 0, 0),
        color = new Vec3(1, 1, 1),
        outline = new Vec3(1, 0, 0),
        radius = 1,
        attributes = {},
    } = {}) {

        const count = 8;
        const position = new Float32Array(count * 3);
        const uv = new Float32Array(count * 2);
        const index = new Uint16Array(18);

        function setIndex(i, x, y, z, u, v) {
            position[i * 3 + 0] = x;
            position[i * 3 + 1] = y;
            position[i * 3 + 2] = z;
            uv[i * 2 + 0] = u;
            uv[i * 2 + 1] = v;
        }

        const t = b.sub(a).normalize();

        console.log(t);

        setIndex(0, a.x, a.y, 0, (-t.x + t.y), (-t.x - t.y));
	    setIndex(1, a.x, a.y, 0, (-t.x - t.y), (+t.x - t.y));
	    setIndex(2, a.x, a.y, 0, (-0.0 + t.y), (-t.x + 0.0));
	    setIndex(3, a.x, a.y, 0, (-0.0 - t.y), (+t.x + 0.0));
	    setIndex(4, b.x, b.y, 0, (+0.0 + t.y), (-t.x - 0.0));
	    setIndex(5, b.x, b.y, 0, (+0.0 - t.y), (+t.x - 0.0));
	    setIndex(6, b.x, b.y, 0, (+t.x + t.y), (-t.x + t.y));
	    setIndex(7, b.x, b.y, 0, (+t.x - t.y), (+t.x + t.y));

        index.set([ 0, 1, 2, 1, 3, 2, /**/ 2, 3, 4, 3, 5, 4, /**/ 4, 5, 6, 5, 7, 6 ]);

        Object.assign(attributes, {
            position: { size: 3, data: position },
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
