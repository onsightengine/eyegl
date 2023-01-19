import { Vec3 } from '../../math/Vec3.js';

class Curve {

    constructor({
        points = [ new Vec3(0, 0, 0), new Vec3(0, 1, 0), new Vec3(1, 1, 0), new Vec3(1, 0, 0) ],
        divisions = 12,
        type = Curve.CATMULLROM
    } = {}) {

        this.points = points;
        this.divisions = divisions;
        this.type = type;
    }

    getPoints({ divisions = this.divisions, type = this.type, a = 0.168, b = 0.168 } = {}) {
        if (type === Curve.QUADRATICBEZIER) return Curve.getQuadraticBezierPoints(this.points, divisions);
        else if (type === Curve.CUBICBEZIER) return Curve.getCubicBezierPoints(this.points, divisions);
        else if (type === Curve.CATMULLROM) return Curve.getCatmullRomPoints(this.points, divisions, a, b);
        else return this.points;
    }

    /***** Static *****/

    static CATMULLROM = 'catmullrom';
    static CUBICBEZIER = 'cubicbezier';
    static QUADRATICBEZIER = 'quadraticbezier';

    static getQuadraticBezierPoints(points = [], divisions = 12) {
        const count = points.length;
        if (count < 3) {
            console.warn('Curve.getQuadraticBezierPoints: Not enough points provided');
            return [];
        }

        const newPoints = [];
        let p0 = points[0];
        let c0 = points[1];
        let p1 = points[2];

        divisions = Math.max(1, Math.ceil(divisions));
        for (let i = 0; i <= divisions; i++) {
            const p = getQuadraticBezierPoint(i / divisions, p0, c0, p1);
            newPoints.push(p);
        }

        let offset = 3;
        while (count - offset > 0) {
            p0.copy(p1);
            c0 = p1.scale(2).sub(c0);
            p1 = points[offset];
            for (let i = 1; i <= divisions; i++) {
                const p = getQuadraticBezierPoint(i / divisions, p0, c0, p1);
                newPoints.push(p);
            }
            offset++;
        }

        return newPoints;
    }

    static getCubicBezierPoints(points = [], divisions = 12) {
        const count = points.length;
        if (count < 4) {
            console.warn('Curve.getCubicBezierPoints: Not enough points provided');
            return [];
        }

        const newPoints = [];
        let p0 = points[0];
        let c0 = points[1];
        let c1 = points[2];
        let p1 = points[3];

        divisions = Math.max(1, Math.ceil(divisions));
        for (let i = 0; i <= divisions; i++) {
            const p = getCubicBezierPoint(i / divisions, p0, c0, c1, p1);
            newPoints.push(p);
        }

        let offset = 4;
        while (count - offset > 1) {
            p0.copy(p1);
            c0 = p1.scale(2).sub(c1);
            c1 = points[offset];
            p1 = points[offset + 1];
            for (let i = 1; i <= divisions; i++) {
                const p = getCubicBezierPoint(i / divisions, p0, c0, c1, p1);
                newPoints.push(p);
            }
            offset += 2;
        }

        return newPoints;
    }

    static getCatmullRomPoints(points = [], divisions = 12, a = 0.168, b = 0.168) {
        const count = points.length;
        if (count <= 2) {
            console.warn('Curve.getCatmullRomPoints: Not enough points provided');
            return [];
        }

        const newPoints = [];
        let p0;
        points.forEach((p, i) => {
            if (i === 0) {
                p0 = p;
            } else {
                const [ c0, c1 ] = getCtrlPoint(points, i - 1, a, b);
                const c = new Curve({
                    points: [ p0, c0, c1, p ],
                    divisions: Math.max(1, Math.ceil(divisions / points.length)),
                    type: Curve.CUBICBEZIER,
                });
                newPoints.pop();
                newPoints.push(...c.getPoints());
                p0 = p;
            }
        });

        return newPoints;
    }

}

export { Curve };

/***** Internal *****/

const _a0 = new Vec3(), _a1 = new Vec3(), _a2 = new Vec3(), _a3 = new Vec3();

/**
 * Get the control points of cubic bezier curve.
 *
 * @param {*} points
 * @param {*} i
 * @param {*} a
 * @param {*} b
 */
function getCtrlPoint(points, i, a = 0.168, b = 0.168) {
    if (i < 1) {
        _a0.sub(points[1], points[0]).scale(a).add(points[0]);
    } else {
        _a0.sub(points[i + 1], points[i - 1])
            .scale(a)
            .add(points[i]);
    }
    if (i > points.length - 3) {
        const last = points.length - 1;
        _a1.sub(points[last - 1], points[last])
            .scale(b)
            .add(points[last]);
    } else {
        _a1.sub(points[i], points[i + 2])
            .scale(b)
            .add(points[i + 1]);
    }
    return [ _a0.clone(), _a1.clone() ];
}

function getQuadraticBezierPoint(t, p0, c0, p1) {
    const k = 1 - t;
    _a0.copy(p0).scale(k ** 2);
    _a1.copy(c0).scale(2 * k * t);
    _a2.copy(p1).scale(t ** 2);
    const ret = new Vec3();
    ret.add(_a0, _a1).add(_a2);
    return ret;
}

function getCubicBezierPoint(t, p0, c0, c1, p1) {
    const k = 1 - t;
    _a0.copy(p0).scale(k ** 3);
    _a1.copy(c0).scale(3 * k ** 2 * t);
    _a2.copy(c1).scale(3 * k * t ** 2);
    _a3.copy(p1).scale(t ** 3);
    const ret = new Vec3();
    ret.add(_a0, _a1).add(_a2).add(_a3);
    return ret;
}
