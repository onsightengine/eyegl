import { Mesh } from '../../core/Mesh.js';
import { Program } from '../../core/Program.js';
import { Geometry } from '../../core/Geometry.js';
import { Vec3 } from '../../math/Vec3.js';

import * as GeomUtils from '../../utils/GeomUtils.js';
import { Standard } from '../programs/Standard.js';

class WireMesh extends Mesh {

    constructor({
        geometry,
        wireColor = new Vec3(0, 0.75, 0.5),
        wireTint = 1.0,
        ...meshProps
    } = {}) {

        GeomUtils.toNonIndexed(geometry);

        const program = new Standard({
            tint: wireColor,
            tintIntensity: wireTint,
        });

        super({
            ...meshProps,
            geometry: geometry,
            program: program
        });
    }

}

export { WireMesh };
