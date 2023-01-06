/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Onsight Engine
// @about       Easy to use 2D / 3D JavaScript game engine.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Geometry } from '../../core/Geometry.js';

class Triangle extends Geometry {

    constructor(gl, {
        attributes = {}
    } = {}) {
        Object.assign(attributes, {
            position: { size: 2, data: new Float32Array([ -1, -1, 3, -1, -1, 3 ]) },
            uv: { size: 2, data: new Float32Array([ 0, 0, 2, 0, 0, 2 ]) },
        });

        super(gl, attributes);
    }

}

export { Triangle };
