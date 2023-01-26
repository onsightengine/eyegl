import { Geometry } from '../../core/Geometry.js';
import { Program } from '../../core/Program.js';
import { Mesh } from '../../core/Mesh.js';

import { Color } from '../../math/Color.js';
import { Vec2 } from '../../math/Vec2.js';
import { Vec3 } from '../../math/Vec3.js';

const tmp = new Vec3();

class Polygon {

    constructor({
        points,                         // Array of Vec3s
        color = new Vec3(1, 1, 1),
        outline = new Vec3(1, 0, 0),
        radius = 0,
    } = {}) {

        const count = points.length;

        // Create buffers
        const position = new Float32Array(this.count * 3 * 2);
        const uv = new Float32Array(this.count * 2 * 2);
        const radius = new Float32Array(this.count * 1 * 2);
        const index = new Uint16Array((this.count - 1) * 3 * 2);

        // Set static buffers
        for (let i = 0; i < this.count; i++) {
            side.set([-1, 1], i * 2);
            const v = i / (this.count - 1);
            uv.set([0, v, 1, v], i * 4);

            if (i === this.count - 1) continue;
            const ind = i * 2;
            index.set([ind + 0, ind + 1, ind + 2], (ind + 0) * 3);
            index.set([ind + 2, ind + 1, ind + 3], (ind + 1) * 3);
        }

        const geometry = (this.geometry = new Geometry(Object.assign(attributes, {
            position: { size: 3, data: this.position },
            prev: { size: 3, data: this.prev },
            next: { size: 3, data: this.next },
            side: { size: 1, data: side },
            uv: { size: 2, data: uv },
            index: { size: 1, data: index },
        })));

        // Populate dynamic buffers
        this.updateGeometry();

        if (! uniforms.uResolution) this.resolution = uniforms.uResolution = { value: new Vec2() };
        if (! uniforms.uDPR) this.dpr = uniforms.uDPR = { value: 1 };
        if (! uniforms.uThickness) this.thickness = uniforms.uThickness = { value: 1 };
        if (! uniforms.uColor) this.color = uniforms.uColor = { value: new Color('#000') };
        if (! uniforms.uMiter) this.miter = uniforms.uMiter = { value: 1 };

        const program = (this.program = new Program({
            vertex,
            fragment,
            uniforms,
        }));

        this.mesh = new Mesh({ geometry, program });
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
