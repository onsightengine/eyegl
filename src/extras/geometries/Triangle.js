/** /////////////////////////////////////////////////////////////////////////////////
//
// @description EyeGL
// @about       WebGL graphics library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine
//
///////////////////////////////////////////////////////////////////////////////////*/

import { Geometry } from '../../core/Geometry.js';

class Triangle extends Geometry {

    constructor({
        attributes = {}
    } = {}) {
        Object.assign(attributes, {
            position: { size: 2, data: new Float32Array([ -1, -1, 3, -1, -1, 3 ]) },
            uv: { size: 2, data: new Float32Array([ 0, 0, 2, 0, 0, 2 ]) },
        });

        super(attributes);
    }

}

export { Triangle };
