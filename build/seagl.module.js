/**
 * @description SeaGL
 * @about       Fast WebGL 2 graphics library built for games.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/salinityengine/seagl
 * @version     v0.0.9
 */
const EPSILON$5 = 0.000001;

/**
 * Calculates the length of a Vec3
 *
 * @param {Vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length$3(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Copy the values from one Vec3 to another
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the source vector
 * @returns {Vec3} out
 */
function copy$5(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}

/**
 * Set the components of a Vec3 to the given values
 *
 * @param {Vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {Vec3} out
 */
function set$5(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}

/**
 * Adds two Vec3's
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Vec3} out
 */
function add$5(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Vec3} out
 */
function subtract$3(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
}

/**
 * Multiplies two Vec3's
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Vec3} out
 */
function multiply$4(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
}

/**
 * Divides two Vec3's
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Vec3} out
 */
function divide$1(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
}

/**
 * Scales a Vec3 by a scalar number
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {Vec3} out
 */
function scale$5(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
}

/**
 * Calculates the euclidian distance between two Vec3's
 *
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance$1(a, b) {
    let x = b[0] - a[0];
    let y = b[1] - a[1];
    let z = b[2] - a[2];
    return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared euclidian distance between two Vec3's
 *
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance$1(a, b) {
    let x = b[0] - a[0];
    let y = b[1] - a[1];
    let z = b[2] - a[2];
    return x * x + y * y + z * z;
}

/**
 * Calculates the squared length of a Vec3
 *
 * @param {Vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength$1(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    return x * x + y * y + z * z;
}

/**
 * Negates the components of a Vec3
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a vector to negate
 * @returns {Vec3} out
 */
function negate$1(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
}

/**
 * Returns the inverse of the components of a Vec3
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a vector to invert
 * @returns {Vec3} out
 */
function inverse$1(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
}

/**
 * Normalize a Vec3
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a vector to normalize
 * @returns {Vec3} out
 */
function normalize$3(out, a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let len = x * x + y * y + z * z;
    if (len > 0) {
        // TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
    }
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
    return out;
}

/**
 * Calculates the dot product of two Vec3's
 *
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot$3(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two Vec3's
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @returns {Vec3} out
 */
function cross$1(out, a, b) {
    let ax = a[0], ay = a[1], az = a[2];
    let bx = b[0], by = b[1], bz = b[2];

    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
}

/**
 * Performs a linear interpolation between two Vec3's
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the first operand
 * @param {Vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {Vec3} out
 */
function lerp$4(out, a, b, t) {
    let ax = a[0];
    let ay = a[1];
    let az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
}

/**
 * Transforms the Vec3 with a Mat4
 * 4th vector component is implicitly '1'
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the vector to transform
 * @param {Mat4} m matrix to transform with
 * @returns {Vec3} out
 */
function transformMat4$1(out, a, m) {
    let x = a[0],
        y = a[1],
        z = a[2];
    let w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
}

/**
 * Same as above but doesn't apply translation
 * Useful for rays
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the vector to transform
 * @param {Mat4} m matrix to transform with
 * @returns {Vec3} out
 */
function scaleRotateMat4(out, a, m) {
    let x = a[0],
        y = a[1],
        z = a[2];
    let w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
    return out;
}

/**
 * Transforms the Vec3 with a Mat3
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the vector to transform
 * @param {Mat3} m the 3x3 matrix to transform with
 * @returns {Vec3} out
 */
function transformMat3$1(out, a, m) {
    let x = a[0],
        y = a[1],
        z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
}

/**
 * Transforms the Vec3 with a Quat
 *
 * @param {Vec3} out the receiving vector
 * @param {Vec3} a the vector to transform
 * @param {Quat} q quaternion to transform with
 * @returns {Vec3} out
 */
function transformQuat(out, a, q) {
    // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
    let x = a[0],
        y = a[1],
        z = a[2];
    let qx = q[0],
        qy = q[1],
        qz = q[2],
        qw = q[3];

    let uvx = qy * z - qz * y;
    let uvy = qz * x - qx * z;
    let uvz = qx * y - qy * x;

    let uuvx = qy * uvz - qz * uvy;
    let uuvy = qz * uvx - qx * uvz;
    let uuvz = qx * uvy - qy * uvx;

    let w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;

    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;

    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
}

/**
 * Get the angle between two 3D vectors
 *
 * @param {Vec3} a The first operand
 * @param {Vec3} b The second operand
 * @returns {Number} The angle in radians
 */
const angle = (function() {
    const tempA = [ 0, 0, 0 ];
    const tempB = [ 0, 0, 0 ];

    return function(a, b) {
        copy$5(tempA, a);
        copy$5(tempB, b);

        normalize$3(tempA, tempA);
        normalize$3(tempB, tempB);

        let cosine = dot$3(tempA, tempB);

        if (cosine > 1.0) {
            return 0;
        } else if (cosine < -1.0) {
            return Math.PI;
        } else {
            return Math.acos(cosine);
        }
    };
})();

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {Vec3} a The first vector
 * @param {Vec3} b The second vector
 * @returns {Boolean} True if the vectors are equal, false otherwise
 */
function exactEquals$1(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether the vectors have approximately the same values
 *
 * @param {Vec3} a
 * @param {Vec3} b
 * @param {Number} tolerance
 * @returns {Boolean} True is vectors are equal +/- tolerance
 */
function fuzzyEquals(a, b, tolerance = 0.001) {
    if (fuzzyFloat$1(a[0], b[0], tolerance) === false) return false;
    if (fuzzyFloat$1(a[1], b[1], tolerance) === false) return false;
    if (fuzzyFloat$1(a[2], b[2], tolerance) === false) return false;
    return true;
}

/**
 * Calculates the normal of a triangle
 *
 * @param {Vec3} out Vector which will store the normal
 * @param {Vec3} a
 * @param {Vec3} b
 * @param {Vec3} c
 */
const calculateNormal = (function() {
    const temp = [ 0, 0, 0 ];

    return function(out, a, b, c) {
        subtract$3(temp, a, b);
        subtract$3(out, b, c);
        cross$1(out, temp, out);
        normalize$3(out, out);
    };
})();

/******************** INTERNAL ********************/

/**
 * Compares two decimal numbers to see if they're almost the same
 *
 * @param {Number} a
 * @param {Number} b
 * @param {Number} tolerance
 * @returns {Boolean}
 */
function fuzzyFloat$1(a, b, tolerance = 0.001) {
    return ((a < (b + tolerance)) && (a > (b - tolerance)));
}

var Vec3Func$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    add: add$5,
    angle: angle,
    calculateNormal: calculateNormal,
    copy: copy$5,
    cross: cross$1,
    distance: distance$1,
    divide: divide$1,
    dot: dot$3,
    exactEquals: exactEquals$1,
    fuzzyEquals: fuzzyEquals,
    inverse: inverse$1,
    length: length$3,
    lerp: lerp$4,
    multiply: multiply$4,
    negate: negate$1,
    normalize: normalize$3,
    scale: scale$5,
    scaleRotateMat4: scaleRotateMat4,
    set: set$5,
    squaredDistance: squaredDistance$1,
    squaredLength: squaredLength$1,
    subtract: subtract$3,
    transformMat3: transformMat3$1,
    transformMat4: transformMat4$1,
    transformQuat: transformQuat
});

// fuzzyFloat()
// isPowerOf2()
// triangleArea()
// uuid()

const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];

/**
 * Compares two decimal numbers to see if they're almost the same
 *
 * @param {Number} a
 * @param {Number} b
 * @param {Number} tolerance
 * @returns {Boolean}
 */
function fuzzyFloat(a, b, tolerance = 0.001) {
    return ((a < (b + tolerance)) && (a > (b - tolerance)));
}

/**
 * Determins if value is a power of 2
 *
 * @param {Number} value number to check
 * @returns {Boolean} is value power of 2?
 */
function isPowerOf2(value) {
    // // OPTION: And
    return (value & (value - 1)) === 0;
    // OPTION: Log2
    // return Math.log2(value) % 1 === 0;
}

/**
 * Computes the area of a triangle defined by 3 points (points as arrays [x, y, z])
 *
 * @param {Vec3} a
 * @param {Vec3} b
 * @param {Vec3} c
 * @returns {Number} area of the triangle
 */
const triangleArea = (function() {
    const v0 = [ 0, 0, 0 ];
    const v1 = [ 0, 0, 0 ];
    const vc = [ 0, 0, 0 ];

    return function(a, b, c) {
        subtract$3(v0, c, b);
        subtract$3(v1, a, b);
        cross$1(vc, v0, v1);
        return (length$3(vc) * 0.5);
    };
})();

/**
 * Returns randomized UUID
 *
 * @returns {String} randomized UUID
 */
function uuid() {
    if (window.crypto && window.crypto.randomUUID) return crypto.randomUUID();

    // https://github.com/mrdoob/three.js/blob/dev/src/math/MathUtils.js
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
    const d0 = Math.random() * 0xffffffff | 0;
    const d1 = Math.random() * 0xffffffff | 0;
    const d2 = Math.random() * 0xffffffff | 0;
    const d3 = Math.random() * 0xffffffff | 0;
    const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
        _lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
        _lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
        _lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];
    return uuid.toLowerCase(); // .toLowerCase() flattens concatenated strings to save heap memory space
}

var MathUtils$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    fuzzyFloat: fuzzyFloat,
    isPowerOf2: isPowerOf2,
    triangleArea: triangleArea,
    uuid: uuid
});

class ImageLoader {

    static load(src, onLoad) {
        const image = new Image();
        image.crossOrigin = '';
        image.uuid = uuid();
        image.src = src;
        if (typeof onLoad === 'function') image.addEventListener('load', onLoad);
        return image;
    }

}

// TODO: delete (flush)  texture
// TODO: use texSubImage2D for updates (video or onLoad)
// TODO: need? encoding = linearEncoding
// TODO: support non-compressed mipmaps uploads

const _emptyPixel = new Uint8Array(4);
let _canvas$1, _ctx$1;
let _idGenerator$4 = 1;

class Texture {

    #image;

    constructor({
        image,
        target = renderer.gl.TEXTURE_2D,
        type = renderer.gl.UNSIGNED_BYTE,
        format = renderer.gl.RGBA,
        internalFormat = format,
        wrapS = renderer.gl.CLAMP_TO_EDGE,
        wrapT = renderer.gl.CLAMP_TO_EDGE,
        generateMipmaps = true,
        minFilter = generateMipmaps ? renderer.gl.NEAREST_MIPMAP_LINEAR : renderer.gl.LINEAR,
        magFilter = renderer.gl.LINEAR,
        premultiplyAlpha = false,
        unpackAlignment = 4,
        flipY = (target == renderer.gl.TEXTURE_2D) ? true : false,
        anisotropy = 0,
        level = 0,
        width, // used for RenderTargets or Data Textures
        height = width,
    } = {}) {
        if (!renderer) console.error(`Texture: Renderer not found`);
        const gl = renderer.gl;

        this.isTexture = true;

        this.uuid = uuid();
        this.id = _idGenerator$4++;

        this.image = image;
        this.target = target;
        this.type = type;
        this.format = format;
        this.internalFormat = internalFormat;
        this.wrapS = wrapS;
        this.wrapT = wrapT;
        this.generateMipmaps = generateMipmaps;
        this.minFilter = minFilter;
        this.magFilter = magFilter;
        this.premultiplyAlpha = premultiplyAlpha;
        this.unpackAlignment = unpackAlignment;
        this.flipY = flipY;
        this.anisotropy = Math.min(anisotropy, renderer.maxAnisotropy);
        this.level = level;
        this.width = width;
        this.height = height;

        this.texture = gl.createTexture();
        renderer.info.textures++;

        // Alias for state store to avoid redundant calls for global state
        renderer.glState = renderer.state;

        // State store to avoid redundant calls for per-texture state
        this.state = {};
        this.state.minFilter = gl.NEAREST_MIPMAP_LINEAR;
        this.state.magFilter = gl.LINEAR;
        this.state.wrapS = gl.REPEAT;
        this.state.wrapT = gl.REPEAT;
        this.state.anisotropy = 0;

        // Need update
        this.needsUpdate = true;
    }

    bind() {
        // Already bound to active texture unit
        if (renderer.glState.textureUnits[renderer.glState.activeTextureUnit] === this.id) return;

        // Bind
        renderer.gl.bindTexture(this.target, this.texture);
        renderer.glState.textureUnits[renderer.glState.activeTextureUnit] = this.id;
    }

    update(textureUnit = 0 /* gl.TEXTURE0 */) {
        const gl = renderer.gl;
        const self = this;

        // Update?
        let needsUpdate = this.needsUpdate || (this.image !== this.#image);
        let needsBind = needsUpdate || (renderer.glState.textureUnits[textureUnit] !== this.id);
        if (needsBind) {
            renderer.activeTexture(textureUnit);
            this.bind();
        }
        if (!needsUpdate) return;
        this.needsUpdate = false;

        // Pixel source can be of object type:
        // - Uint8Array / Uint16Array / Uint32Array / Float32Array
        // - ImageBitmap (TODO)
        // - ImageData (TODO)
        // - HTMLCanvasElement
        // - HTMLImageElement
        // - HTMLVideoElement
        // https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D
        let loaded = false;
        function checkImage(image) {
            if (!image) return;
            if (image instanceof Uint8Array ||
                image instanceof Uint16Array ||
                image instanceof Uint32Array ||
                image instanceof Float32Array) return;
            if (image instanceof HTMLImageElement && !image.complete) return;
            if (image instanceof HTMLImageElement ||
                image instanceof HTMLCanvasElement) {
                self.width = image.width;
                self.height = image.height;
                loaded = true;
            } else if (image instanceof HTMLVideoElement) {
                self.generateMipmaps = false;
                if (self.minFilter === gl.NEAREST_MIPMAP_LINEAR) self.minFilter = gl.LINEAR;
                if (!self.width) self.width = image.videoWidth;
                if (!self.height) self.height = image.videoHeight;
                loaded = true;
            }
        }

        let images = this.image;
        if (Array.isArray(images)) {
            for (let i = 0; i < images.length; i++) checkImage(images[i]);
        } else {
            checkImage(images);
        }

        if (this.flipY !== renderer.glState.flipY) {
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this.flipY);
            renderer.glState.flipY = this.flipY;
        }
        if (this.premultiplyAlpha !== renderer.glState.premultiplyAlpha) {
            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
            renderer.glState.premultiplyAlpha = this.premultiplyAlpha;
        }
        if (this.unpackAlignment !== renderer.glState.unpackAlignment) {
            gl.pixelStorei(gl.UNPACK_ALIGNMENT, this.unpackAlignment);
            renderer.glState.unpackAlignment = this.unpackAlignment;
        }
        if (this.minFilter !== this.state.minFilter) {
            gl.texParameteri(this.target, gl.TEXTURE_MIN_FILTER, this.minFilter);
            this.state.minFilter = this.minFilter;
        }
        if (this.magFilter !== this.state.magFilter) {
            gl.texParameteri(this.target, gl.TEXTURE_MAG_FILTER, this.magFilter);
            this.state.magFilter = this.magFilter;
        }
        if (this.wrapS !== this.state.wrapS) {
            gl.texParameteri(this.target, gl.TEXTURE_WRAP_S, this.wrapS);
            this.state.wrapS = this.wrapS;
        }
        if (this.wrapT !== this.state.wrapT) {
            gl.texParameteri(this.target, gl.TEXTURE_WRAP_T, this.wrapT);
            this.state.wrapT = this.wrapT;
        }
        if (this.anisotropy && this.anisotropy !== this.state.anisotropy) {
            gl.texParameterf(
                this.target,
                renderer.getExtension('EXT_texture_filter_anisotropic').TEXTURE_MAX_ANISOTROPY_EXT,
                this.anisotropy
            );
            this.state.anisotropy = this.anisotropy;
        }

        // Image(s) Loaded
        if (loaded) {
            // Texture Array
            if (this.target === gl.TEXTURE_2D_ARRAY) {
                images = Array.isArray(images) ? images : [ images ];

                // Copy Images
                const pixels = new Uint8Array(this.width * this.height * images.length * 4);
                let index = 0;
                for (let i = 0; i < images.length; i++) {
                    const image = images[i];
                    if (!image) continue;
                    let ctx;
                    if (image instanceof HTMLCanvasElement) {
                        ctx = image.getContext('2d');
                    } else if (image instanceof HTMLImageElement && image.complete) {
                        if (!_canvas$1) _canvas$1 = document.createElement('canvas');
                        if (!_ctx$1) _ctx$1 = _canvas$1.getContext('2d', { willReadFrequently: true });
                        _canvas$1.width = this.width;
                        _canvas$1.height = this.height;
                        ctx = _ctx$1;
                        ctx.clearRect(0, 0, this.width, this.height);
                        ctx.drawImage(images[i], 0, 0);
                    }
                    if (!ctx) continue;
                    const imageData = ctx.getImageData(0, 0, this.width, this.height);
                    for (let j = 0; j < this.width * this.height * 4; j += 4) {
                        pixels[index + 0] = imageData.data[j + 0]; // red
                        pixels[index + 1] = imageData.data[j + 1]; // green
                        pixels[index + 2] = imageData.data[j + 2]; // blue
                        pixels[index + 3] = imageData.data[j + 3]; // alpha
                        index += 4;
                    }
                }
                // Create Texture Array
                gl.texImage3D(gl.TEXTURE_2D_ARRAY, this.level, this.internalFormat, this.width, this.height, images.length, 0, this.format, this.type, pixels);
            // Cube Map
            } else if (this.target === gl.TEXTURE_CUBE_MAP) {
                for (let i = 0; i < 6; i++) {
                    if (!images[i].complete) continue;
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, this.level, this.internalFormat, this.format, this.type, images[i]);
                }
            // Data
            } else if (ArrayBuffer.isView(images)) {
                gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, images);
            // Compressed
            } else if (images.isCompressedTexture) {
                for (let level = 0; level < images.length; level++) {
                    gl.compressedTexImage2D(this.target, level, this.internalFormat, images[level].width, images[level].height, 0, images[level].data);
                }
            // Standard
            } else {
                gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, images);
            }

            // Mipmaps
            if (this.generateMipmaps) gl.generateMipmap(this.target);

            // Callback for when data is pushed to GPU
            if (typeof this.onUpdate === 'function') this.onUpdate();

        // No Image
        } else {
            // Texture Array
            if (this.target === gl.TEXTURE_2D_ARRAY) {
                gl.texImage3D(this.target, 0, gl.RGBA, 1, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, _emptyPixel);
            // Cube Map
            } else if (this.target === gl.TEXTURE_CUBE_MAP) {
                // Upload empty pixel for each side while no image to avoid errors while image or video loading
                for (let i = 0; i < 6; i++) {
                    gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, _emptyPixel);
                }
            // Render Target
            } else if (!this.image && this.width) {
                // Image intentionally left null for RenderTarget
                gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
            // Standard
            } else {
                const image = images;
                if (image instanceof Uint8Array ||
                    image instanceof Uint16Array ||
                    image instanceof Uint32Array ||
                    image instanceof Float32Array) {
                    // Load array
                    const w = this.width || 1;
                    const h = this.height || 1;
                    gl.texImage2D(this.target, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, image);
                } else {
                    // Upload empty pixel if no image to avoid errors while image or video loading
                    gl.texImage2D(this.target, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, _emptyPixel);
                }
            }
        }

        // Save Last Known Image(s)
        this.#image = this.image;
    }

    flush() {

        // TODO

        renderer.info.textures--;

    }

}

class TextureLoader {

    static #cache = {};
    static #extensions = [ 'webp', 'jpg', 'jpeg', 'png', 'gif', 'svg' ];

    static load({
        src, /* i.e. src: './dragon.png' OR src: { jpg: 'dragon.jpg', png: 'dragon.png' } */
        format = renderer.gl.RGBA,
        internalFormat = format,
        generateMipmaps = true,
        wrapS = renderer.gl.CLAMP_TO_EDGE,
        wrapT = renderer.gl.CLAMP_TO_EDGE,
        anisotropy = 0,
        minFilter = generateMipmaps ? renderer.gl.NEAREST_MIPMAP_LINEAR : renderer.gl.LINEAR,
        magFilter = renderer.gl.LINEAR,
        premultiplyAlpha = false,
        unpackAlignment = 4,
        flipY = true,
        onLoad, /* on load callback */
    } = {}) {
        if (!src || src === '') {
            console.warn(`TextureLoader: No source provided`);
            return new Texture();
        }

        // Extension
        let ext = 'unknown';
        if (typeof src === 'string') {
            ext = src.split('.').pop().split('?')[0].toLowerCase();
        } else if (typeof src === 'object') {
            for (const filetype in src) {
                if (TextureLoader.#extensions.includes(filetype.toLowerCase())) {
                    ext = filetype.toLowerCase();
                    src = src[filetype];
                    break;
                }
            }
        }

        // Check cache for existing texture
        const cacheID = src;// + renderer.id;
        if (TextureLoader.#cache[cacheID]) return TextureLoader.#cache[cacheID];

        let texture;
        switch (ext) {
            case 'webp':
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
            case 'svg':
                texture = new Texture({
                    format,
                    internalFormat,
                    generateMipmaps,
                    wrapS, wrapT,
                    anisotropy,
                    minFilter, magFilter,
                    premultiplyAlpha,
                    unpackAlignment,
                    flipY,
                });
                const nameFromUrl = new String(src.replace(/^.*[\\\/]/, ''));   /* filename only */
                texture.name = nameFromUrl.replace(/\.[^/.]+$/, );              /* remove extension */
                texture.image = ImageLoader.load(src, () => {
                    texture.needsUpdate = true;
                    if (typeof onLoad === 'function') onLoad();
                });
                break;
            default:
                console.warn(`TextureLoader: Format not supported - '.${ext}'`);
                texture = new Texture();
        }

        texture.ext = ext;
        TextureLoader.#cache[cacheID] = texture;
        return texture;
    }

    static removeFromCache(texture) {
        for (let url in TextureLoader.#cache) {
            if (TextureLoader.#cache[url].uuid === texture.uuid) {
                delete TextureLoader.#cache[url];
            }
        }
    }

}

class Assets {

    #assets = {};

    constructor() {}

    /********** LIBRARY **********/

    library(type) {
        function checkAssetType(asset) {
            if (asset.isGeometry) return 'geometry';
            if (asset.isTexture) return 'texture';
            if (asset.isImage) return 'image';
            return 'asset';
        }

        const library = [];
        for (const [uuid, asset] of Object.entries(this.#assets)) {
            if (checkAssetType(asset) === type) library.push(asset);
        }
        return library;
    }

    /********** ACCESS **********/

    add(/* assets, seperated by commas */) {
        for (let i = 0; i < arguments.length; i++) {
            const asset = arguments[i];
            if (!asset || !asset.uuid) continue;
            if (!asset.name || asset.name === '') asset.name = asset.constructor.name;
            this.#assets[asset.uuid] = asset;
        }
    }

    get(uuid) {
        if (!uuid) return;
        if (uuid.uuid) uuid = uuid.uuid;
        return this.#assets[uuid];
    }

    load(src, options = {}) {
        if (typeof src !== 'string') {
            console.warn('Assets.load: Source not provided');
            return;
        }

        let asset;
        const ext = src.split('.').pop().split('?')[0].toLowerCase();
        switch (ext) {
            // Image
            case 'webp':
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
            case 'svg':
                const args = Object.assign({ src }, options);
                asset = TextureLoader.load(args);
                break;
            default:
                asset = undefined;
        }
        if (asset) this.add(asset);
        return asset;
    }

    remove(assetOrArray, flush = true) {
        if (!assetOrArray) return;
        const assetArray = (Array.isArray(assetOrArray)) ? assetOrArray : [ assetOrArray ];

        for (let i = 0; i < assetArray.length; i++) {
            const asset = assetArray[i];
            if (this.#assets[asset.uuid]) {
                // Remove textures from cache
                if (asset.isTexture) TextureLoader.removeFromCache(asset);

                // Flush & Delete
                if (flush) asset.flush && asset.flush();
                delete this.#assets[asset.uuid];
            }
        }
    }

    /********** JSON **********/

    clear() {
        for (let uuid in _assets) {
            this.removeAsset(_assets[uuid], true);
        }
    }

    fromJSON(json) {

        // Clear Assets
        this.clear();

        // Add to Assets
        function addLibraryToAssets(library) {
            for (const [uuid, asset] of Object.entries(library)) {
                this.addAsset(asset);
            }
        }

        // // Load Assets
        // const objectLoader = new THREE.ObjectLoader();
        // const geometries = objectLoader.parseGeometries(json.geometries, {});
        // const images = objectLoader.parseImages(json.images);
        // const textures = objectLoader.parseTextures(json.textures, images);

        // addLibraryToAssets(geometries);
        // addLibraryToAssets(images);
        // addLibraryToAssets(textures);

    }

    toJSON(meta) {

        const json = {};

        // if (!meta) meta = {};
        // if (!meta.geometries) meta.geometries = {};
        // if (!meta.images) meta.images = {};
        // if (!meta.textures) meta.textures = {};

        // const stopRoot = {
        //     images: {},
        //     textures: {},
        //     materials: {},
        // };

        // // Geometries
        // const geometries = Assets.library('geometry');
        // for (let i = 0; i < geometries.length; i++) {
        //     const geometry = geometries[i];
        //     if (!meta.geometries[geometry.uuid]) meta.geometries[geometry.uuid] = geometry.toJSON(meta);
        // }

        // // Textures
        // const textures = Assets.library('texture');
        // for (let i = 0; i < textures.length; i++) {
        //     const texture = textures[i];
        //     if (!meta.textures[texture.uuid]) meta.textures[texture.uuid] = texture.toJSON(meta);
        // }

        // // Add 'meta' caches to 'json' as arrays
        // for (const library in meta) {
        //     const valueArray = [];
        //     for (const key in meta[library]) {
        //         const data = meta[library][key];
        //         delete data.metadata;
        //         valueArray.push(data);
        //     }
        //     if (valueArray.length > 0) json[library] = valueArray;
        // }

        return json;
    }

}

/**
 * Assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)
 *
 * @param {Euler} out
 * @param {Mat4} m
 * @param {String} order
 * @returns
 */
function fromRotationMatrix(out, m, order = 'YXZ') {
    if (order === 'XYZ') {
        out[1] = Math.asin(Math.min(Math.max(m[8], -1), 1));
        if (Math.abs(m[8]) < 0.99999) {
            out[0] = Math.atan2(-m[9], m[10]);
            out[2] = Math.atan2(-m[4], m[0]);
        } else {
            out[0] = Math.atan2(m[6], m[5]);
            out[2] = 0;
        }
    } else if (order === 'YXZ') {
        out[0] = Math.asin(-Math.min(Math.max(m[9], -1), 1));
        if (Math.abs(m[9]) < 0.99999) {
            out[1] = Math.atan2(m[8], m[10]);
            out[2] = Math.atan2(m[1], m[5]);
        } else {
            out[1] = Math.atan2(-m[2], m[0]);
            out[2] = 0;
        }
    } else if (order === 'ZXY') {
        out[0] = Math.asin(Math.min(Math.max(m[6], -1), 1));
        if (Math.abs(m[6]) < 0.99999) {
            out[1] = Math.atan2(-m[2], m[10]);
            out[2] = Math.atan2(-m[4], m[5]);
        } else {
            out[1] = 0;
            out[2] = Math.atan2(m[1], m[0]);
        }
    } else if (order === 'ZYX') {
        out[1] = Math.asin(-Math.min(Math.max(m[2], -1), 1));
        if (Math.abs(m[2]) < 0.99999) {
            out[0] = Math.atan2(m[6], m[10]);
            out[2] = Math.atan2(m[1], m[0]);
        } else {
            out[0] = 0;
            out[2] = Math.atan2(-m[4], m[5]);
        }
    } else if (order === 'YZX') {
        out[2] = Math.asin(Math.min(Math.max(m[1], -1), 1));
        if (Math.abs(m[1]) < 0.99999) {
            out[0] = Math.atan2(-m[9], m[5]);
            out[1] = Math.atan2(-m[2], m[0]);
        } else {
            out[0] = 0;
            out[1] = Math.atan2(m[8], m[10]);
        }
    } else if (order === 'XZY') {
        out[2] = Math.asin(-Math.min(Math.max(m[4], -1), 1));
        if (Math.abs(m[4]) < 0.99999) {
            out[0] = Math.atan2(m[6], m[5]);
            out[1] = Math.atan2(m[8], m[0]);
        } else {
            out[0] = Math.atan2(-m[9], m[10]);
            out[1] = 0;
        }
    }
    return out;
}

var EulerFunc$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    fromRotationMatrix: fromRotationMatrix
});

const EPSILON$4 = 0.000001;

/**
 * Copy the values from one Mat4 to another
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the source matrix
 * @returns {Mat4} out
 */
function copy$4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}

/**
 * Set the components of a Mat4 to the given values
 *
 * @param {Mat4} out the receiving matrix
 * @returns {Mat4} out
 */
function set$4(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}

/**
 * Set a Mat4 to the identity matrix
 *
 * @param {Mat4} out the receiving matrix
 * @returns {Mat4} out
 */
function identity$3(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Transpose the values of a Mat4
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the source matrix
 * @returns {Mat4} out
 */
function transpose$1(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        let a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        let a12 = a[6],
            a13 = a[7];
        let a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }

    return out;
}

/**
 * Inverts a Mat4
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the source matrix
 * @returns {Mat4} out
 */
function invert$2(out, a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    let a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    let a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

    return out;
}

/**
 * Calculates the determinant of a Mat4
 *
 * @param {Mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant$1(a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    let a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    let a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two Mat4s
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the first operand
 * @param {Mat4} b the second operand
 * @returns {Mat4} out
 */
function multiply$3(out, a, b) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    let a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    let a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    // Cache only the current line of the second matrix
    let b0 = b[0],
        b1 = b[1],
        b2 = b[2],
        b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}

/**
 * Translate a Mat4 by the given vector
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the matrix to translate
 * @param {Vec3} v vector to translate by
 * @returns {Mat4} out
 */
function translate$1(out, a, v) {
    let x = v[0],
        y = v[1],
        z = v[2];
    let a00, a01, a02, a03;
    let a10, a11, a12, a13;
    let a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];

        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
}

/**
 * Scales the Mat4 by the dimensions in the given Vec3 not using vectorization
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the matrix to scale
 * @param {Vec3} v the Vec3 to scale the matrix by
 * @returns {Mat4} out
 **/
function scale$4(out, a, v) {
    let x = v[0],
        y = v[1],
        z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}

/**
 * Rotates a Mat4 by the given angle around the given axis
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {Vec3} axis the axis to rotate around
 * @returns {Mat4} out
 */
function rotate$1(out, a, rad, axis) {
    let x = axis[0],
        y = axis[1],
        z = axis[2];
    let len = Math.hypot(x, y, z);
    let s, c, t;
    let a00, a01, a02, a03;
    let a10, a11, a12, a13;
    let a20, a21, a22, a23;
    let b00, b01, b02;
    let b10, b11, b12;
    let b20, b21, b22;

    if (Math.abs(len) < EPSILON$4) {
        return null;
    }

    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;

    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;

    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];

    // Construct the elements of the rotation matrix
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c;

    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;

    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param {Vec3} out Vector to receive translation component
 * @param {Mat4} mat Matrix to be decomposed (input)
 * @return {Vec3} out
 */
function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];

    return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param {Vec3} out Vector to receive scaling factor component
 * @param {Mat4} mat Matrix to be decomposed (input)
 * @return {Vec3} out
 */
function getScaling(out, mat) {
    let m11 = mat[0];
    let m12 = mat[1];
    let m13 = mat[2];
    let m21 = mat[4];
    let m22 = mat[5];
    let m23 = mat[6];
    let m31 = mat[8];
    let m32 = mat[9];
    let m33 = mat[10];

    out[0] = Math.hypot(m11, m12, m13);
    out[1] = Math.hypot(m21, m22, m23);
    out[2] = Math.hypot(m31, m32, m33);

    return out;
}

function getMaxScaleOnAxis(mat) {
    let m11 = mat[0];
    let m12 = mat[1];
    let m13 = mat[2];
    let m21 = mat[4];
    let m22 = mat[5];
    let m23 = mat[6];
    let m31 = mat[8];
    let m32 = mat[9];
    let m33 = mat[10];

    const x = m11 * m11 + m12 * m12 + m13 * m13;
    const y = m21 * m21 + m22 * m22 + m23 * m23;
    const z = m31 * m31 + m32 * m32 + m33 * m33;

    return Math.sqrt(Math.max(x, y, z));
}

/**
 * Returns a quaternion representing the rotational component of a transformation matrix.
 * If a matrix is built with fromRotationTranslation, the returned quaternion will be the
 * same as the quaternion originally supplied.
 *
 * @param {Quat} out Quaternion to receive the rotation component
 * @param {Mat4} mat Matrix to be decomposed (input)
 * @return {Quat} out
 */
const getRotation = (function() {
    const temp = [ 0, 0, 0 ];

    return function(out, mat) {
        let scaling = temp;
        getScaling(scaling, mat);

        let is1 = 1 / scaling[0];
        let is2 = 1 / scaling[1];
        let is3 = 1 / scaling[2];

        let sm11 = mat[0] * is1;
        let sm12 = mat[1] * is2;
        let sm13 = mat[2] * is3;
        let sm21 = mat[4] * is1;
        let sm22 = mat[5] * is2;
        let sm23 = mat[6] * is3;
        let sm31 = mat[8] * is1;
        let sm32 = mat[9] * is2;
        let sm33 = mat[10] * is3;

        let trace = sm11 + sm22 + sm33;
        let S = 0;

        if (trace > 0) {
            S = Math.sqrt(trace + 1.0) * 2;
            out[3] = 0.25 * S;
            out[0] = (sm23 - sm32) / S;
            out[1] = (sm31 - sm13) / S;
            out[2] = (sm12 - sm21) / S;
        } else if (sm11 > sm22 && sm11 > sm33) {
            S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
            out[3] = (sm23 - sm32) / S;
            out[0] = 0.25 * S;
            out[1] = (sm12 + sm21) / S;
            out[2] = (sm31 + sm13) / S;
        } else if (sm22 > sm33) {
            S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
            out[3] = (sm31 - sm13) / S;
            out[0] = (sm12 + sm21) / S;
            out[1] = 0.25 * S;
            out[2] = (sm23 + sm32) / S;
        } else {
            S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
            out[3] = (sm12 - sm21) / S;
            out[0] = (sm31 + sm13) / S;
            out[1] = (sm23 + sm32) / S;
            out[2] = 0.25 * S;
        }

        return out;
    };
})();

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     Mat4.identity(dest);
 *     Mat4.translate(dest, vec);
 *     let quatMat = Mat4.create();
 *     Quat.toMat4(Quat, quatMat);
 *     Mat4.multiply(dest, quatMat);
 *     Mat4.scale(dest, scale)
 *
 * @param {Mat4} out Mat4 receiving operation result
 * @param {Quat} q Rotation quaternion
 * @param {Vec3} v Translation vector
 * @param {Vec3} s Scaling vector
 * @returns {Mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
    // Quaternion math
    let x = q[0],
        y = q[1],
        z = q[2],
        w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;

    let xx = x * x2;
    let xy = x * y2;
    let xz = x * z2;
    let yy = y * y2;
    let yz = y * z2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;
    let sx = s[0];
    let sy = s[1];
    let sz = s[2];

    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;

    return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {Mat4} out Mat4 receiving operation result
 * @param {Quat} q Quaternion to create matrix from
 * @returns {Mat4} out
 */
function fromQuat$1(out, q) {
    let x = q[0],
        y = q[1],
        z = q[2],
        w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;

    let xx = x * x2;
    let yx = y * x2;
    let yy = y * y2;
    let zx = z * x2;
    let zy = z * y2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;

    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;

    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;

    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;

    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;

    return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {Mat4} out Mat4 frustum matrix will be written into
 * @param {Number} fovy Vertical field of view in radians
 * @param {Number} aspect Aspect ratio. typically viewport width/height
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {Mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
    let f = 1.0 / Math.tan(fovy / 2);
    let nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = 2 * far * near * nf;
    out[15] = 0;
    return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {Mat4} out Mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {Mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
    let lr = 1 / (left - right);
    let bt = 1 / (bottom - top);
    let nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {Mat4} out Mat4 frustum matrix will be written into
 * @param {Vec3} eye Position of the viewer
 * @param {Vec3} target Point the viewer is looking at
 * @param {Vec3} up Vec3 pointing up
 * @returns {Mat4} out
 */
function targetTo(out, eye, target, up) {
    let eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2];

    let z0 = eyex - target[0],
        z1 = eyey - target[1],
        z2 = eyez - target[2];

    let len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len === 0) {
        // eye and target are in the same position
        z2 = 1;
    } else {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
    }

    let x0 = upy * z2 - upz * z1,
        x1 = upz * z0 - upx * z2,
        x2 = upx * z1 - upy * z0;

    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len === 0) {
        // up and z are parallel
        if (upz) {
            upx += 1e-6;
        } else if (upy) {
            upz += 1e-6;
        } else {
            upy += 1e-6;
        }
        (x0 = upy * z2 - upz * z1), (x1 = upz * z0 - upx * z2), (x2 = upx * z1 - upy * z0);

        len = x0 * x0 + x1 * x1 + x2 * x2;
    }

    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;

    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
}

/**
 * Adds two Mat4's
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the first operand
 * @param {Mat4} b the second operand
 * @returns {Mat4} out
 */
function add$4(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the first operand
 * @param {Mat4} b the second operand
 * @returns {Mat4} out
 */
function subtract$2(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {Mat4} out the receiving matrix
 * @param {Mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {Mat4} out
 */
function multiplyScalar$1(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
}

var Mat4Func$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    add: add$4,
    copy: copy$4,
    determinant: determinant$1,
    fromQuat: fromQuat$1,
    fromRotationTranslationScale: fromRotationTranslationScale,
    getMaxScaleOnAxis: getMaxScaleOnAxis,
    getRotation: getRotation,
    getScaling: getScaling,
    getTranslation: getTranslation,
    identity: identity$3,
    invert: invert$2,
    multiply: multiply$3,
    multiplyScalar: multiplyScalar$1,
    ortho: ortho,
    perspective: perspective,
    rotate: rotate$1,
    scale: scale$4,
    set: set$4,
    subtract: subtract$2,
    targetTo: targetTo,
    translate: translate$1,
    transpose: transpose$1
});

class Mat4 extends Array {

    constructor(
        m00 = 1,
        m01 = 0,
        m02 = 0,
        m03 = 0,
        m10 = 0,
        m11 = 1,
        m12 = 0,
        m13 = 0,
        m20 = 0,
        m21 = 0,
        m22 = 1,
        m23 = 0,
        m30 = 0,
        m31 = 0,
        m32 = 0,
        m33 = 1
    ) {
        super(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
    }

    get x() {
        return this[12];
    }

    get y() {
        return this[13];
    }

    get z() {
        return this[14];
    }

    get w() {
        return this[15];
    }

    set x(v) {
        this[12] = v;
    }

    set y(v) {
        this[13] = v;
    }

    set z(v) {
        this[14] = v;
    }

    set w(v) {
        this[15] = v;
    }

    set(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        if (m00.length) return this.copy(m00);
        set$4(this, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
        return this;
    }

    translate(v, m = this) {
        translate$1(this, m, v);
        return this;
    }

    rotate(v, axis, m = this) {
        rotate$1(this, m, v, axis);
        return this;
    }

    scale(v, m = this) {
        scale$4(this, m, typeof v === 'number' ? [v, v, v] : v);
        return this;
    }

    add(ma, mb) {
        if (mb) {
            add$4(this, ma, mb);
        } else {
            add$4(this, this, ma);
        }
        return this;
    }

    sub(ma, mb) {
        if (mb) {
            subtract$2(this, ma, mb);
        } else {
            subtract$2(this, this, ma);
        }
        return this;
    }

    multiply(ma, mb) {
        if (!ma.length) {
            multiplyScalar$1(this, this, ma);
        } else if (mb) {
            multiply$3(this, ma, mb);
        } else {
            multiply$3(this, this, ma);
        }
        return this;
    }

    identity() {
        identity$3(this);
        return this;
    }

    copy(m) {
        copy$4(this, m);
        return this;
    }

    fromPerspective({ fov, aspect, near, far } = {}) {
        perspective(this, fov, aspect, near, far);
        return this;
    }

    fromOrthogonal({ left, right, bottom, top, near, far }) {
        ortho(this, left, right, bottom, top, near, far);
        return this;
    }

    fromQuaternion(q) {
        fromQuat$1(this, q);
        return this;
    }

    setPosition(v) {
        this.x = v[0];
        this.y = v[1];
        this.z = v[2];
        return this;
    }

    inverse(m = this) {
        invert$2(this, m);
        return this;
    }

    compose(q, pos, scale) {
        fromRotationTranslationScale(this, q, pos, scale);
        return this;
    }

    getRotation(q) {
        getRotation(q, this);
        return this;
    }

    getTranslation(pos) {
        getTranslation(pos, this);
        return this;
    }

    getScaling(scale) {
        getScaling(scale, this);
        return this;
    }

    getMaxScaleOnAxis() {
        return getMaxScaleOnAxis(this);
    }

    lookAt(eye, target, up) {
        targetTo(this, eye, target, up);
        return this;
    }

    determinant() {
        return determinant$1(this);
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        this[4] = a[o + 4];
        this[5] = a[o + 5];
        this[6] = a[o + 6];
        this[7] = a[o + 7];
        this[8] = a[o + 8];
        this[9] = a[o + 9];
        this[10] = a[o + 10];
        this[11] = a[o + 11];
        this[12] = a[o + 12];
        this[13] = a[o + 13];
        this[14] = a[o + 14];
        this[15] = a[o + 15];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        a[o + 4] = this[4];
        a[o + 5] = this[5];
        a[o + 6] = this[6];
        a[o + 7] = this[7];
        a[o + 8] = this[8];
        a[o + 9] = this[9];
        a[o + 10] = this[10];
        a[o + 11] = this[11];
        a[o + 12] = this[12];
        a[o + 13] = this[13];
        a[o + 14] = this[14];
        a[o + 15] = this[15];
        return a;
    }

}

const tempMat4$3 = new Mat4();

class Euler extends Array {

    constructor(x = 0, y = x, z = x, order = 'YXZ') {
        super(x, y, z);
        this.order = order;
        this.onChange = () => {};
        return this;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    get z() {
        return this[2];
    }

    set x(v) {
        this[0] = v;
        this.onChange();
    }

    set y(v) {
        this[1] = v;
        this.onChange();
    }

    set z(v) {
        this[2] = v;
        this.onChange();
    }

    set(x, y = x, z = x) {
        if (x.length) return this.copy(x);
        this[0] = x;
        this[1] = y;
        this[2] = z;
        this.onChange();
        return this;
    }

    copy(v) {
        this[0] = v[0];
        this[1] = v[1];
        this[2] = v[2];
        this.onChange();
        return this;
    }

    reorder(order) {
        this.order = order;
        this.onChange();
        return this;
    }

    fromRotationMatrix(m, order = this.order) {
        fromRotationMatrix(this, m, order);
        this.onChange();
        return this;
    }

    fromQuaternion(q, order = this.order) {
        tempMat4$3.fromQuaternion(q);
        return this.fromRotationMatrix(tempMat4$3, order);
    }

    fromArray(a = [ 0, 0, 0 ], o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        return a;
    }

}

const EPSILON$3 = 0.000001;

/**
 * Copy the values from one Vec4 to another
 *
 * @param {Vec4} out the receiving vector
 * @param {Vec4} a the source vector
 * @returns {Vec4} out
 */
function copy$3(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}

/**
 * Set the components of a Vec4 to the given values
 *
 * @param {Vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {Vec4} out
 */
function set$3(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}

/**
 * Adds two Vec4's
 *
 * @param {Vec4} out the receiving vector
 * @param {Vec4} a the first operand
 * @param {Vec4} b the second operand
 * @returns {Vec4} out
 */
function add$3(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
}

/**
 * Scales a Vec4 by a scalar number
 *
 * @param {Vec4} out the receiving vector
 * @param {Vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {Vec4} out
 */
function scale$3(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}

/**
 * Calculates the length of a Vec4
 *
 * @param {Vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length$2(a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let w = a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Normalize a Vec4
 *
 * @param {Vec4} out the receiving vector
 * @param {Vec4} a vector to normalize
 * @returns {Vec4} out
 */
function normalize$2(out, a) {
    let x = a[0];
    let y = a[1];
    let z = a[2];
    let w = a[3];
    let len = x * x + y * y + z * z + w * w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
    }
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
    return out;
}

/**
 * Calculates the dot product of two Vec4's
 *
 * @param {Vec4} a the first operand
 * @param {Vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot$2(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two Vec4's
 *
 * @param {Vec4} out the receiving vector
 * @param {Vec4} a the first operand
 * @param {Vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {Vec4} out
 */
function lerp$3(out, a, b, t) {
    let ax = a[0];
    let ay = a[1];
    let az = a[2];
    let aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
}

var Vec4Func$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    add: add$3,
    copy: copy$3,
    dot: dot$2,
    length: length$2,
    lerp: lerp$3,
    normalize: normalize$2,
    scale: scale$3,
    set: set$3
});

/**
 * Set a Quat to the identity quaternion
 *
 * @param {Quat} out the receiving quaternion
 * @returns {Quat} out
 */
function identity$2(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}

/**
 * Sets a Quat from the given angle and rotation axis, then returns it.
 *
 * @param {Quat} out the receiving quaternion
 * @param {Vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {Quat} out
 **/
function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    let s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
}

/**
 * Multiplies two Quats
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @returns {Quat} out
 */
function multiply$2(out, a, b) {
    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let bx = b[0],
        by = b[1],
        bz = b[2],
        bw = b[3];

    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {Quat} out Quat receiving operation result
 * @param {Quat} a Quat to rotate
 * @param {Number} rad angle (in radians) to rotate
 * @returns {Quat} out
 */
function rotateX(out, a, rad) {
    rad *= 0.5;

    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let bx = Math.sin(rad),
        bw = Math.cos(rad);

    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {Quat} out Quat receiving operation result
 * @param {Quat} a Quat to rotate
 * @param {Number} rad angle (in radians) to rotate
 * @returns {Quat} out
 */
function rotateY(out, a, rad) {
    rad *= 0.5;

    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let by = Math.sin(rad),
        bw = Math.cos(rad);

    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {Quat} out Quat receiving operation result
 * @param {Quat} a Quat to rotate
 * @param {Number} rad angle (in radians) to rotate
 * @returns {Quat} out
 */
function rotateZ(out, a, rad) {
    rad *= 0.5;

    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let bz = Math.sin(rad),
        bw = Math.cos(rad);

    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
}

/**
 * Performs a spherical linear interpolation between two Quat
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {Quat} out
 */
function slerp(out, a, b, t) {
    // benchmarks: http://jsperf.com/quaternion-slerp-implementations
    let ax = a[0],
        ay = a[1],
        az = a[2],
        aw = a[3];
    let bx = b[0],
        by = b[1],
        bz = b[2],
        bw = b[3];

    let omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
    }
    // calculate coefficients
    if (1.0 - cosom > 0.000001) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;

    return out;
}

/**
 * Calculates the inverse of a Quat
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a Quat to calculate inverse of
 * @returns {Quat} out
 */
function invert$1(out, a) {
    let a0 = a[0],
        a1 = a[1],
        a2 = a[2],
        a3 = a[3];
    let dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    let invDot = dot ? 1.0 / dot : 0;

    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
}

/**
 * Calculates the conjugate of a Quat.
 * If the quaternion is normalized, this function is faster than Quat.inverse and produces the same result.
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a Quat to calculate conjugate of
 * @returns {Quat} out
 */
function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {Quat} out the receiving quaternion
 * @param {Mat3} m rotation matrix
 * @returns {Quat} out
 * @function
 */
function fromMat3(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    let fTrace = m[0] + m[4] + m[8];
    let fRoot;

    if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)
        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
    } else {
        // |w| <= 1/2
        let i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        let j = (i + 1) % 3;
        let k = (i + 2) % 3;

        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }

    return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z
 *
 * @param {Quat} out the receiving quaternion
 * @param {Vec3} euler Angles to rotate around each axis in degrees.
 * @param {String} order detailing order of operations. Default 'XYZ'.
 * @returns {Quat} out
 * @function
 */
function fromEuler(out, euler, order = 'YXZ') {
    let sx = Math.sin(euler[0] * 0.5);
    let cx = Math.cos(euler[0] * 0.5);
    let sy = Math.sin(euler[1] * 0.5);
    let cy = Math.cos(euler[1] * 0.5);
    let sz = Math.sin(euler[2] * 0.5);
    let cz = Math.cos(euler[2] * 0.5);

    if (order === 'XYZ') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === 'YXZ') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    } else if (order === 'ZXY') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === 'ZYX') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    } else if (order === 'YZX') {
        out[0] = sx * cy * cz + cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz - sx * sy * sz;
    } else if (order === 'XZY') {
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz - sx * cy * sz;
        out[2] = cx * cy * sz + sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
    }

    return out;
}

/**
 * Copy the values from one Quat to another
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a the source quaternion
 * @returns {Quat} out
 * @function
 */
const copy$2 = copy$3;

/**
 * Set the components of a Quat to the given values
 *
 * @param {Quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {Quat} out
 * @function
 */
const set$2 = set$3;

/**
 * Adds two Quat's
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @returns {Quat} out
 * @function
 */
const add$2 = add$3;

/**
 * Scales a Quat by a scalar Number
 *
 * @param {Quat} out the receiving vector
 * @param {Quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {Quat} out
 * @function
 */
const scale$2 = scale$3;

/**
 * Calculates the dot product of two Quat's
 *
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
const dot$1 = dot$2;

/**
 * Performs a linear interpolation between two Quat's
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a the first operand
 * @param {Quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {Quat} out
 * @function
 */
const lerp$2 = lerp$3;

/**
 * Calculates the length of a Quat
 *
 * @param {Quat} a vector to calculate length of
 * @returns {Number} length of a
 */
const length$1 = length$2;

/**
 * Normalize a Quat
 *
 * @param {Quat} out the receiving quaternion
 * @param {Quat} a quaternion to normalize
 * @returns {Quat} out
 * @function
 */
const normalize$1 = normalize$2;

var QuatFunc$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    add: add$2,
    conjugate: conjugate,
    copy: copy$2,
    dot: dot$1,
    fromEuler: fromEuler,
    fromMat3: fromMat3,
    identity: identity$2,
    invert: invert$1,
    length: length$1,
    lerp: lerp$2,
    multiply: multiply$2,
    normalize: normalize$1,
    rotateX: rotateX,
    rotateY: rotateY,
    rotateZ: rotateZ,
    scale: scale$2,
    set: set$2,
    setAxisAngle: setAxisAngle,
    slerp: slerp
});

class Quat extends Array {

    constructor(x = 0, y = 0, z = 0, w = 1) {
        super(x, y, z, w);
        this.onChange = () => {};
        return this;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    get z() {
        return this[2];
    }

    get w() {
        return this[3];
    }

    set x(v) {
        this[0] = v;
        this.onChange();
    }

    set y(v) {
        this[1] = v;
        this.onChange();
    }

    set z(v) {
        this[2] = v;
        this.onChange();
    }

    set w(v) {
        this[3] = v;
        this.onChange();
    }

    identity() {
        identity$2(this);
        this.onChange();
        return this;
    }

    set(x, y, z, w) {
        if (x.length) return this.copy(x);
        set$2(this, x, y, z, w);
        this.onChange();
        return this;
    }

    rotateX(a) {
        rotateX(this, this, a);
        this.onChange();
        return this;
    }

    rotateY(a) {
        rotateY(this, this, a);
        this.onChange();
        return this;
    }

    rotateZ(a) {
        rotateZ(this, this, a);
        this.onChange();
        return this;
    }

    inverse(q = this) {
        invert$1(this, q);
        this.onChange();
        return this;
    }

    conjugate(q = this) {
        conjugate(this, q);
        this.onChange();
        return this;
    }

    copy(q) {
        copy$2(this, q);
        this.onChange();
        return this;
    }

    normalize(q = this) {
        normalize$1(this, q);
        this.onChange();
        return this;
    }

    multiply(qA, qB) {
        if (qB) {
            multiply$2(this, qA, qB);
        } else {
            multiply$2(this, this, qA);
        }
        this.onChange();
        return this;
    }

    dot(v) {
        return dot$1(this, v);
    }

    fromMatrix3(matrix3) {
        fromMat3(this, matrix3);
        this.onChange();
        return this;
    }

    fromEuler(euler) {
        fromEuler(this, euler, euler.order);
        return this;
    }

    fromAxisAngle(axis, a) {
        setAxisAngle(this, axis, a);
        this.onChange();
        return this;
    }

    slerp(q, t) {
        slerp(this, this, q, t);
        this.onChange();
        return this;
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        this.onChange();
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        return a;
    }

}

class Vec3 extends Array {

    constructor(x = 0, y = x, z = x) {
        super(x, y, z);
        return this;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    get z() {
        return this[2];
    }

    set x(v) {
        this[0] = v;
    }

    set y(v) {
        this[1] = v;
    }

    set z(v) {
        this[2] = v;
    }

    set(x, y = x, z = x) {
        if (x.length) return this.copy(x);
        set$5(this, x, y, z);
        return this;
    }

    copy(v) {
        copy$5(this, v);
        return this;
    }

    add(va, vb) {
        if (vb) add$5(this, va, vb);
        else add$5(this, this, va);
        return this;
    }

    sub(va, vb) {
        if (vb) subtract$3(this, va, vb);
        else subtract$3(this, this, va);
        return this;
    }

    multiply(v) {
        if (v.length) multiply$4(this, this, v);
        else scale$5(this, this, v);
        return this;
    }

    divide(v) {
        if (v.length) divide$1(this, this, v);
        else scale$5(this, this, 1 / v);
        return this;
    }

    inverse(v = this) {
        inverse$1(this, v);
        return this;
    }

    // Can't use 'length' as Array.prototype uses it
    len() {
        return length$3(this);
    }

    distance(v) {
        if (v) return distance$1(this, v);
        else return length$3(this);
    }

    squaredLen() {
        return squaredLength$1(this);
    }

    squaredDistance(v) {
        if (v) return squaredDistance$1(this, v);
        else return squaredLength$1(this);
    }

    negate(v = this) {
        negate$1(this, v);
        return this;
    }

    cross(va, vb) {
        if (vb) cross$1(this, va, vb);
        else cross$1(this, this, va);
        return this;
    }

    scale(multiplier) {
        scale$5(this, this, multiplier);
        return this;
    }

    normalize() {
        normalize$3(this, this);
        return this;
    }

    dot(v) {
        return dot$3(this, v);
    }

    equals(v) {
        return exactEquals$1(this, v);
    }

    fuzzyEquals(v, tolerance) {
        return fuzzyEquals(this, v, tolerance);
    }

    applyMatrix3(mat3) {
        transformMat3$1(this, this, mat3);
        return this;
    }

    applyMatrix4(mat4) {
        transformMat4$1(this, this, mat4);
        return this;
    }

    scaleRotateMatrix4(mat4) {
        scaleRotateMat4(this, this, mat4);
        return this;
    }

    applyQuaternion(q) {
        transformQuat(this, this, q);
        return this;
    }

    angle(v) {
        return angle(this, v);
    }

    lerp(v, t) {
        lerp$4(this, this, v, t);
        return this;
    }

    clone() {
        return new Vec3(this[0], this[1], this[2]);
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        return a;
    }

    transformDirection(mat4) {
        const x = this[0];
        const y = this[1];
        const z = this[2];

        this[0] = mat4[0] * x + mat4[4] * y + mat4[8] * z;
        this[1] = mat4[1] * x + mat4[5] * y + mat4[9] * z;
        this[2] = mat4[2] * x + mat4[6] * y + mat4[10] * z;

        return this.normalize();
    }

    log(description = '') {
        if (description !== '') description += ' - ';
        console.log(`${description}X: ${this.x}, Y: ${this.y}, Z: ${this.z}`);
    }

}

let _idGenerator$3 = 1;

class Transform {

    constructor() {
        this.isTransform = true;

        this.uuid = uuid();
        this.id = _idGenerator$3++;

        this.parent = null;
        this.children = [];
        this.visible = true;

        this.matrix = new Mat4();
        this.worldMatrix = new Mat4();
        this.matrixAutoUpdate = true;

        this.position = new Vec3();
        this.quaternion = new Quat();
        this.scale = new Vec3(1);
        this.rotation = new Euler();
        this.up = new Vec3(0, 1, 0);

        this.rotation.onChange = () => this.quaternion.fromEuler(this.rotation);
        this.quaternion.onChange = () => this.rotation.fromQuaternion(this.quaternion);
    }

    setParent(parent) {
        if (this.parent && parent === this.parent) return this;
        parent.addChild(this);
        return this;
    }

    addChild(child, /* child, child, ... */) {
        if (arguments.length > 1) {
            for (let i = 0; i < arguments.length; i++) this.addChild(arguments[i]);
            return this;
        }
        if (!child || child === this) return this;
        if (child.parent) {
            if (child.parent === this) return this;
            child.parent.removeChild(child);
        }
        child.parent = this;
        this.children.push(child);
        return this;
    }

    removeChild(child) {
        if (arguments.length > 1) {
            for (let i = 0; i < arguments.length; i++) this.removeChild(arguments[i]);
            return this;
        }
        if (!child || child === this) return this;
        const index = this.children.indexOf(child);
        if (index !== -1) {
            child.parent = null;
            this.children.splice(index, 1);
        }
        return this;
    }

    updateMatrixWorld(force) {
        if (this.matrixAutoUpdate) this.updateMatrix();
        if (this.worldMatrixNeedsUpdate || force) {
            if (this.parent === null) this.worldMatrix.copy(this.matrix);
            else this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
            this.worldMatrixNeedsUpdate = false;
            force = true;
        }

        for (let i = 0, l = this.children.length; i < l; i++) {
            this.children[i].updateMatrixWorld(force);
        }
        return this;
    }

    updateMatrix() {
        this.matrix.compose(this.quaternion, this.position, this.scale);
        this.worldMatrixNeedsUpdate = true;
        return this;
    }

    /** Return true in callback to stop traversing children */
    traverse(callback) {
        if (callback(this)) return;
        for (let i = 0, l = this.children.length; i < l; i++) this.children[i].traverse(callback);
    }

    traverseVisible(callback) {
        if (!this.visible) return;
        callback(this);
        for (let i = 0, l = this.children.length; i < l; i++) this.children[i].traverseVisible(callback);
    }

    traverseAncestors(callback) {
        if (!this.parent) return;
        callback(this.parent);
        this.parent.traverseAncestors(callback);
    }

    decompose() {
        this.matrix.getTranslation(this.position);
        this.matrix.getRotation(this.quaternion);
        this.matrix.getScaling(this.scale);
        this.rotation.fromQuaternion(this.quaternion);
        return this;
    }

    lookAt(target, invert = false) {
        if (invert) this.matrix.lookAt(this.position, target, this.up);
        else this.matrix.lookAt(target, this.position, this.up);
        this.matrix.getRotation(this.quaternion);
        this.rotation.fromQuaternion(this.quaternion);
        return this;
    }

}

const _tempMat4 = new Mat4();
const _tempVec3a = new Vec3();
const _tempVec3b = new Vec3();

class Camera extends Transform {

    constructor({
        near = 0.1,
        far = 100,
        // Perspective
        fov = 45,
        aspect = 1,
        // Orthographic
        left,
        right,
        bottom,
        top,
        zoom = 1,
        // Starting
        position,
        lookAt,
    } = {}) {
        super();
        this.isCamera = true;

        Object.assign(this, { near, far, fov, aspect, left, right, bottom, top, zoom });

        this.projectionMatrix = new Mat4();
        this.viewMatrix = new Mat4();
        this.projectionViewMatrix = new Mat4();
        this.worldPosition = new Vec3();

        // Use orthographic if left/right set, else default to perspective camera
        this.type = (left || right) ? 'orthographic' : 'perspective';
        if (this.type === 'orthographic') {
            this.orthographic();
        } else {
            this.perspective();
        }

        if (Array.isArray(position)) this.position.set(position);
        if (Array.isArray(lookAt)) this.lookAt(lookAt);
    }

    perspective({
        near = this.near,
        far = this.far,
        fov = this.fov,
        aspect = this.aspect
    } = {}) {
        Object.assign(this, { near, far, fov, aspect });
        this.projectionMatrix.fromPerspective({ fov: fov * (Math.PI / 180), aspect, near, far });
        this.type = 'perspective';
        return this;
    }

    orthographic({
        near = this.near,
        far = this.far,
        left = this.left,
        right = this.right,
        bottom = this.bottom,
        top = this.top,
        zoom = this.zoom,
    } = {}) {
        Object.assign(this, { near, far, left, right, bottom, top, zoom });
        left /= zoom;
        right /= zoom;
        bottom /= zoom;
        top /= zoom;
        this.projectionMatrix.fromOrthogonal({ left, right, bottom, top, near, far });
        this.type = 'orthographic';
        return this;
    }

    updateMatrixWorld() {
        super.updateMatrixWorld();
        this.viewMatrix.inverse(this.worldMatrix);
        this.worldMatrix.getTranslation(this.worldPosition);

        // Used for sorting
        this.projectionViewMatrix.multiply(this.projectionMatrix, this.viewMatrix);
        return this;
    }

    lookAt(target) {
        super.lookAt(target, true);
        return this;
    }

    // Project 3D coordinate to 2D point
    project(v) {
        v.applyMatrix4(this.viewMatrix);
        v.applyMatrix4(this.projectionMatrix);
        return this;
    }

    // Unproject 2D point to 3D coordinate
    unproject(v) {
        v.applyMatrix4(_tempMat4.inverse(this.projectionMatrix));
        v.applyMatrix4(this.worldMatrix);
        return this;
    }

    updateFrustum() {
        if (!this.frustum) {
            this.frustum = [ new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3(), new Vec3() ];
        }

        const m = this.projectionViewMatrix;
        this.frustum[0].set(m[3] - m[0], m[7] - m[4], m[11] - m[8]).constant = m[15] - m[12]; // -x
        this.frustum[1].set(m[3] + m[0], m[7] + m[4], m[11] + m[8]).constant = m[15] + m[12]; // +x
        this.frustum[2].set(m[3] + m[1], m[7] + m[5], m[11] + m[9]).constant = m[15] + m[13]; // +y
        this.frustum[3].set(m[3] - m[1], m[7] - m[5], m[11] - m[9]).constant = m[15] - m[13]; // -y
        this.frustum[4].set(m[3] - m[2], m[7] - m[6], m[11] - m[10]).constant = m[15] - m[14]; // +z (far)
        this.frustum[5].set(m[3] + m[2], m[7] + m[6], m[11] + m[10]).constant = m[15] + m[14]; // -z (near)

        for (let i = 0; i < 6; i++) {
            const invLen = 1.0 / this.frustum[i].distance();
            this.frustum[i].multiply(invLen);
            this.frustum[i].constant *= invLen;
        }
    }

    frustumIntersectsMesh(node, worldMatrix = node.worldMatrix) {
        // ??add?? if (!node.geometry) return true;

        // If no geometry, or no position attribute, treat as frustumCulled false
        if (!node.geometry.attributes.position) return true;

        if (!node.geometry.bounds || node.geometry.bounds.radius === Infinity) node.geometry.computeBoundingSphere();
        if (!node.geometry.bounds) return true;

        const center = _tempVec3a;
        center.copy(node.geometry.bounds.center);
        center.applyMatrix4(worldMatrix);

        const radius = node.geometry.bounds.radius * worldMatrix.getMaxScaleOnAxis();

        return this.frustumIntersectsSphere(center, radius);
    }

    frustumIntersectsSphere(center, radius) {
        const normal = _tempVec3b;

        for (let i = 0; i < 6; i++) {
            const plane = this.frustum[i];
            const distance = normal.copy(plane).dot(center) + plane.constant;
            if (distance < -radius) return false;
        }

        return true;
    }

}

// TODO: fit in transform feedback

const _tempVec3$2 = new Vec3();
let _idGenerator$2 = 1;

class Geometry {

    constructor(attributes = {}) {
        if (!renderer) console.error(`Geometry: Renderer not found`);

        this.isGeometry = true;

        this.uuid = uuid();
        this.id = _idGenerator$2++;
        this.attributes = {};

        this.VAOs = {}; /* store one VAO per program attribute locations order */
        this.drawRange = { start: 0, count: 0 };
        this.instancedCount = 0;
        this.glState = renderer.state; /* alias for renderer.state to avoid redundant calls for global state */

        renderer.info.geometries++;

        // Create the buffers
        for (let key in attributes) {
            this.addAttribute(key, attributes[key]);
        }
    }

    /***** Attributes *****/

    // attribute params {
    //      data - typed array (e.g. UInt16Array for index, Float32Array for position, normal, uv)
    //      size - int, default 1 (e.g. index: 1, uv: 2, position, normal: 3)
    //      instanced - default null, pass divisor amount
    //      type - gl enum default gl.UNSIGNED_SHORT for 'index', gl.FLOAT for others
    //      normalized - boolean default false
    //
    //      buffer - gl buffer, if buffer exists, don't need to provide data - although needs position data for bounds calculation
    //      stride - default 0 - for when passing in buffer
    //      offset - default 0 - for when passing in buffer
    //      count - default null - for when passing in buffer
    //      min - array - for when passing in buffer
    //      max - array - for when passing in buffer
    // }

    addAttribute(key, attr) {
        if (!attr) return console.warn(`Geometry.addAttribute: Attribute for '${key}' missing`);
        if (!attr.data) return console.warn(`Geometry.addAttribute: Attribute '${key}' missing data`);
        const gl = renderer.gl;

        // Unbind current VAO so that new buffers don't get added to active mesh
        renderer.clearActiveGeometry();

        // Adding attribute requires rebuilding vertex array object, clear existing if any
        this.clearVertexArrayObjects();

        // Add Attribute
        this.attributes[key] = attr;

        // Set options
        attr.key = key;
        attr.size = attr.size || 1;
        if (!attr.type) {
            switch (attr.data.constructor) {
                case Float32Array: attr.type = gl.FLOAT; break;
                case Uint16Array: attr.type = gl.UNSIGNED_SHORT; break;
                case Uint32Array: default: attr.type = gl.UNSIGNED_INT;
            }
        }
        attr.target = (key === 'index') ? gl.ELEMENT_ARRAY_BUFFER : gl.ARRAY_BUFFER;
        attr.normalized = attr.normalized || false;
        attr.stride = attr.stride || 0;
        attr.offset = attr.offset || 0;
        attr.count = attr.count || ((attr.stride) ? attr.data.byteLength / attr.stride : attr.data.length / attr.size);
        attr.divisor = attr.instanced || 0;

        attr.needsUpdate = false;
        attr.usage = attr.usage || gl.STATIC_DRAW;

        // Push data to buffer
        if (!attr.buffer) this.updateAttribute(attr);

        // Update geometry counts - if indexed, ignore regular attributes
        if (attr.divisor) {
            this.isInstanced = true;
            if (this.instancedCount && this.instancedCount !== attr.count * attr.divisor) {
                console.warn('Geometry.addAttribute: Geometry has multiple instanced buffers of different length');
                return (this.instancedCount = Math.min(this.instancedCount, attr.count * attr.divisor));
            }
            this.instancedCount = attr.count * attr.divisor;
        } else if (key === 'index') {
            this.drawRange.count = attr.count;
        } else if (!this.attributes.index) {
            this.drawRange.count = Math.max(this.drawRange.count, attr.count);
        }
    }

    deleteAttribute(attr) {
        if (this.attributes[attr.key]) {
            renderer.gl.deleteBuffer(attr.buffer);
            delete this.attributes[attr.key];
        }
    }

    updateAttribute(attr) {
        const gl = renderer.gl;

        // New Buffer
        if (!attr.buffer) {
            attr.buffer = gl.createBuffer();
            gl.bindBuffer(attr.target, attr.buffer);
            gl.bufferData(attr.target, attr.data, attr.usage);
        // Existing Buffer
        } else {
            if (this.glState.boundBuffer !== attr.buffer) gl.bindBuffer(attr.target, attr.buffer);
            gl.bufferSubData(attr.target, 0, attr.data);
        }
        this.glState.boundBuffer = attr.buffer;
        attr.needsUpdate = false;
    }

    bindAttributes(program) {
        const gl = renderer.gl;

        // Link all attributes to program using gl.vertexAttribPointer
        program.attributeLocations.forEach((location, { name, type }) => {
            // Missing a required shader attribute
            if (!this.attributes[name]) {
                console.warn(`Geometry.bindAttributes: Active attribute '${name}' not being supplied`);
                return;
            }

            const attr = this.attributes[name];
            gl.bindBuffer(attr.target, attr.buffer);
            this.glState.boundBuffer = attr.buffer;

            // For matrix attributes, buffer needs to be defined per column
            let numLoc = 1;
            if (type === 35674) numLoc = 2; // Mat2
            if (type === 35675) numLoc = 3; // Mat3
            if (type === 35676) numLoc = 4; // Mat4

            const size = attr.size / numLoc;
            const stride = numLoc === 1 ? 0 : numLoc * numLoc * 4;
            const offset = numLoc === 1 ? 0 : numLoc * 4;

            for (let i = 0; i < numLoc; i++) {
                gl.vertexAttribPointer(location + i, size, attr.type, attr.normalized, attr.stride + stride, attr.offset + i * offset);
                gl.enableVertexAttribArray(location + i);

                // For instanced attributes, divisor needs to be set.
                // For firefox, need to set back to 0 if non-instanced drawn after instanced, else won't render.
                gl.vertexAttribDivisor(location + i, attr.divisor);
            }
        });

        // Bind indices if geometry indexed
        if (this.attributes.index) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
        }
    }

    getPosition() {
        const positionAttribute = this.attributes.position;
        if (positionAttribute && positionAttribute.data) return positionAttribute;
        console.warn('Geometry.getPosition: No position attribute found');
        return null;
    }

    /***** Draw *****/

    setDrawRange(start, count) {
        this.drawRange.start = start;
        this.drawRange.count = count;
    }

    setInstancedCount(value) {
        this.instancedCount = value;
    }

    draw({ program, mode = renderer.gl.TRIANGLES }) {
        const gl = renderer.gl;

        // Make sure current geometry attributes are bound
        if (renderer.currentGeometry !== `${this.id}_${program.attributeOrder}`) {
            // Need to create vertex array object, bind attribute buffers
            if (!this.VAOs[program.attributeOrder]) {
                this.VAOs[program.attributeOrder] = gl.createVertexArray();
                gl.bindVertexArray(this.VAOs[program.attributeOrder]);
                this.bindAttributes(program);
            // Rebind existing vertex array object
            } else {
                gl.bindVertexArray(this.VAOs[program.attributeOrder]);
            }
            renderer.currentGeometry = `${this.id}_${program.attributeOrder}`;
        }

        // Check if index needs updating
        if (this.attributes.index && this.attributes.index.needsUpdate) {
            this.updateAttribute(this.attributes.index);
        }

        // For drawElements, offset needs to be multiple of type size
        let indexBytesPerElement = 2;
        if (this.attributes.index && this.attributes.index.type === gl.UNSIGNED_INT) indexBytesPerElement = 4;

        // Check if program bound attributes need updating
        program.attributeLocations.forEach((location, { name }) => {
            const attr = this.attributes[name];
            if (attr && attr.needsUpdate) this.updateAttribute(attr);
        });

        if (this.isInstanced) {
            if (this.attributes.index) {
                gl.drawElementsInstanced(
                    mode,
                    this.drawRange.count,
                    this.attributes.index.type,
                    this.attributes.index.offset + this.drawRange.start * indexBytesPerElement,
                    this.instancedCount,
                );
            } else {
                gl.drawArraysInstanced(mode, this.drawRange.start, this.drawRange.count, this.instancedCount);
            }
        } else {
            if (this.attributes.index) {
                gl.drawElements(
                    mode,
                    this.drawRange.count,
                    this.attributes.index.type,
                    this.attributes.index.offset + this.drawRange.start * indexBytesPerElement
                );
            } else {
                gl.drawArrays(mode, this.drawRange.start, this.drawRange.count);
            }
        }

        // Increment draw count
        renderer.drawCallCount++;
    }

    /***** Bounding Box *****/

    computeBoundingBox(attr) {
        if (!attr) attr = this.getPosition();
        if (!attr) return;
        const array = attr.data;
        const stride = attr.size;

        if (!this.bounds) {
            this.bounds = {
                min: new Vec3(),
                max: new Vec3(),
                center: new Vec3(),
                scale: new Vec3(),
                radius: Infinity,
            };
        }

        const min = this.bounds.min;
        const max = this.bounds.max;
        const center = this.bounds.center;
        const scale = this.bounds.scale;

        min.set(+Infinity);
        max.set(-Infinity);

        // TODO: check size of position (e.g. triangle with Vec2)
        for (let i = 0, l = array.length; i < l; i += stride) {
            const x = array[i];
            const y = array[i + 1];
            const z = array[i + 2];

            min.x = Math.min(x, min.x);
            min.y = Math.min(y, min.y);
            min.z = Math.min(z, min.z);

            max.x = Math.max(x, max.x);
            max.y = Math.max(y, max.y);
            max.z = Math.max(z, max.z);
        }

        scale.sub(max, min);
        center.add(min, max).divide(2);
    }

    computeBoundingSphere(attr) {
        if (!attr) attr = this.getPosition();
        if (!attr) return;
        const array = attr.data;
        const stride = attr.size;

        if (!this.bounds) this.computeBoundingBox(attr);

        let maxRadiusSq = 0;
        for (let i = 0, l = array.length; i < l; i += stride) {
            _tempVec3$2.fromArray(array, i);
            maxRadiusSq = Math.max(maxRadiusSq, this.bounds.center.squaredDistance(_tempVec3$2));
        }

        this.bounds.radius = Math.sqrt(maxRadiusSq);
    }

    /***** Cleanup *****/

    clearVertexArrayObjects() {
        for (let key in this.VAOs) {
            renderer.gl.deleteVertexArray(this.VAOs[key]);
            delete this.VAOs[key];
        }
    }

    flush() {
        this.clearVertexArrayObjects();
        for (let key in this.attributes) {
            this.deleteAttribute(this.attributes[key]);
        }
        renderer.info.geometries--;
    }

    /***** Copy / Clone *****/

    clone() {
        const newAttributes = {};
        for (const attributeName in this.attributes) {
            const attr = this.attributes[attributeName];
            const array2 = new attr.data.constructor(attr.data);
            newAttributes[attributeName] = {
                size: attr.size,
                data: array2
            };
        }
        const geometry = new Geometry(newAttributes);
        return geometry;
    }

}

const EPSILON$2 = 0.000001;

/**
 * Copies the upper-left 3x3 values into the given Mat3
 *
 * @param {Mat3} out the receiving 3x3 matrix
 * @param {Mat4} a   the source 4x4 matrix
 * @returns {Mat3} out
 */
function fromMat4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
}

/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {Mat3} out Mat3 receiving operation result
 * @param {Quat} q Quaternion to create matrix from
 * @returns {Mat3} out
 */
function fromQuat(out, q) {
    let x = q[0],
        y = q[1],
        z = q[2],
        w = q[3];
    let x2 = x + x;
    let y2 = y + y;
    let z2 = z + z;

    let xx = x * x2;
    let yx = y * x2;
    let yy = y * y2;
    let zx = z * x2;
    let zy = z * y2;
    let zz = z * z2;
    let wx = w * x2;
    let wy = w * y2;
    let wz = w * z2;

    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;

    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;

    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;

    return out;
}

/**
 * Copy the values from one Mat3 to another
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the source matrix
 * @returns {Mat3} out
 */
function copy$1(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}

/**
 * Set the components of a Mat3 to the given values
 *
 * @param {Mat3} out the receiving matrix
 * @returns {Mat3} out
 */
function set$1(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}

/**
 * Set a Mat3 to the identity matrix
 *
 * @param {Mat3} out the receiving matrix
 * @returns {Mat3} out
 */
function identity$1(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}

/**
 * Transpose the values of a Mat3
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the source matrix
 * @returns {Mat3} out
 */
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        let a01 = a[1],
            a02 = a[2],
            a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }

    return out;
}

/**
 * Inverts a Mat3
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the source matrix
 * @returns {Mat3} out
 */
function invert(out, a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2];
    let a10 = a[3],
        a11 = a[4],
        a12 = a[5];
    let a20 = a[6],
        a21 = a[7],
        a22 = a[8];

    let b01 = a22 * a11 - a12 * a21;
    let b11 = -a22 * a10 + a12 * a20;
    let b21 = a21 * a10 - a11 * a20;

    // Calculate the determinant
    let det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
}

/**
 * Calculates the determinant of a Mat3
 *
 * @param {Mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2];
    let a10 = a[3],
        a11 = a[4],
        a12 = a[5];
    let a20 = a[6],
        a21 = a[7],
        a22 = a[8];

    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two Mat3's
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the first operand
 * @param {Mat3} b the second operand
 * @returns {Mat3} out
 */
function multiply$1(out, a, b) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2];
    let a10 = a[3],
        a11 = a[4],
        a12 = a[5];
    let a20 = a[6],
        a21 = a[7],
        a22 = a[8];

    let b00 = b[0],
        b01 = b[1],
        b02 = b[2];
    let b10 = b[3],
        b11 = b[4],
        b12 = b[5];
    let b20 = b[6],
        b21 = b[7],
        b22 = b[8];

    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;

    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;

    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
}

/**
 * Translate a Mat3 by the given vector
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the matrix to translate
 * @param {Vec2} v vector to translate by
 * @returns {Mat3} out
 */
function translate(out, a, v) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a10 = a[3],
        a11 = a[4],
        a12 = a[5],
        a20 = a[6],
        a21 = a[7],
        a22 = a[8],
        x = v[0],
        y = v[1];

    out[0] = a00;
    out[1] = a01;
    out[2] = a02;

    out[3] = a10;
    out[4] = a11;
    out[5] = a12;

    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
}

/**
 * Rotates a Mat3 by the given angle
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {Mat3} out
 */
function rotate(out, a, rad) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a10 = a[3],
        a11 = a[4],
        a12 = a[5],
        a20 = a[6],
        a21 = a[7],
        a22 = a[8],
        s = Math.sin(rad),
        c = Math.cos(rad);

    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;

    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;

    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
}

/**
 * Scales the Mat3 by the dimensions in the given Vec2
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the matrix to rotate
 * @param {Vec2} v the vector to scale the matrix by
 * @returns {Mat3} out
 **/
function scale$1(out, a, v) {
    let x = v[0],
        y = v[1];

    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];

    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];

    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}

/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {Mat3} out Mat3 receiving operation result
 * @param {Mat4} a Mat4 to derive the normal matrix from
 * @returns {Mat3} out
 */
function normalFromMat4(out, a) {
    let a00 = a[0],
        a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    let a10 = a[4],
        a11 = a[5],
        a12 = a[6],
        a13 = a[7];
    let a20 = a[8],
        a21 = a[9],
        a22 = a[10],
        a23 = a[11];
    let a30 = a[12],
        a31 = a[13],
        a32 = a[14],
        a33 = a[15];

    let b00 = a00 * a11 - a01 * a10;
    let b01 = a00 * a12 - a02 * a10;
    let b02 = a00 * a13 - a03 * a10;
    let b03 = a01 * a12 - a02 * a11;
    let b04 = a01 * a13 - a03 * a11;
    let b05 = a02 * a13 - a03 * a12;
    let b06 = a20 * a31 - a21 * a30;
    let b07 = a20 * a32 - a22 * a30;
    let b08 = a20 * a33 - a23 * a30;
    let b09 = a21 * a32 - a22 * a31;
    let b10 = a21 * a33 - a23 * a31;
    let b11 = a22 * a33 - a23 * a32;

    // Calculate the determinant
    let det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

    if (!det) {
        return null;
    }
    det = 1.0 / det;

    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

    return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {Mat3} out Mat3 frustum matrix will be written into
 * @param {Number} width Width of your gl context
 * @param {Number} height Height of gl context
 * @returns {Mat3} out
 */
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}

/**
 * Adds two Mat3's
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the first operand
 * @param {Mat3} b the second operand
 * @returns {Mat3} out
 */
function add$1(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the first operand
 * @param {Mat3} b the second operand
 * @returns {Mat3} out
 */
function subtract$1(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {Mat3} out the receiving matrix
 * @param {Mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {Mat3} out
 */
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    return out;
}

var Mat3Func$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    add: add$1,
    copy: copy$1,
    determinant: determinant,
    fromMat4: fromMat4,
    fromQuat: fromQuat,
    identity: identity$1,
    invert: invert,
    multiply: multiply$1,
    multiplyScalar: multiplyScalar,
    normalFromMat4: normalFromMat4,
    projection: projection,
    rotate: rotate,
    scale: scale$1,
    set: set$1,
    subtract: subtract$1,
    translate: translate,
    transpose: transpose
});

class Mat3 extends Array {

    constructor(m00 = 1, m01 = 0, m02 = 0, m10 = 0, m11 = 1, m12 = 0, m20 = 0, m21 = 0, m22 = 1) {
        super(m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this;
    }

    set(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        if (m00.length) return this.copy(m00);
        set$1(this, m00, m01, m02, m10, m11, m12, m20, m21, m22);
        return this;
    }

    translate(v, m = this) {
        translate(this, m, v);
        return this;
    }

    rotate(v, m = this) {
        rotate(this, m, v);
        return this;
    }

    scale(v, m = this) {
        scale$1(this, m, v);
        return this;
    }

    multiply(ma, mb) {
        if (mb) {
            multiply$1(this, ma, mb);
        } else {
            multiply$1(this, this, ma);
        }
        return this;
    }

    identity() {
        identity$1(this);
        return this;
    }

    copy(m) {
        copy$1(this, m);
        return this;
    }

    fromMatrix4(m) {
        fromMat4(this, m);
        return this;
    }

    fromQuaternion(q) {
        fromQuat(this, q);
        return this;
    }

    fromBasis(vec3a, vec3b, vec3c) {
        this.set(vec3a[0], vec3a[1], vec3a[2], vec3b[0], vec3b[1], vec3b[2], vec3c[0], vec3c[1], vec3c[2]);
        return this;
    }

    inverse(m = this) {
        invert(this, m);
        return this;
    }

    getNormalMatrix(m) {
        normalFromMat4(this, m);
        return this;
    }

}

class Mesh extends Transform {

    constructor({
        geometry,
        program,
        mode = renderer.gl.TRIANGLES,
        frustumCulled = true,
        renderOrder = 0
    } = {}) {
        if (!renderer) console.error(`Mesh: Renderer not found`);

        super();
        this.isMesh = true;

        this.geometry = geometry;
        this.program = program;
        this.mode = mode;

        // Used to skip frustum culling
        this.frustumCulled = frustumCulled;

        // Override sorting to force an order
        this.renderOrder = renderOrder;
        this.modelViewMatrix = new Mat4();
        this.normalMatrix = new Mat3();
        this.beforeRenderCallbacks = [];
        this.afterRenderCallbacks = [];
    }

    onBeforeRender(f) {
        this.beforeRenderCallbacks.push(f);
        return this;
    }

    onAfterRender(f) {
        this.afterRenderCallbacks.push(f);
        return this;
    }

    draw({ camera } = {}) {
        // Set camera uniforms
        if (camera) {
            // Add empty matrix uniforms to program if unset
            if (!this.program.uniforms.modelMatrix) {
                Object.assign(this.program.uniforms, {
                    modelMatrix: { value: null },
                    viewMatrix: { value: null },
                    modelViewMatrix: { value: null },
                    normalMatrix: { value: null },
                    projectionMatrix: { value: null },
                    cameraPosition: { value: null },
                });
            }

            // Set the matrix uniforms
            this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
            this.program.uniforms.cameraPosition.value = camera.worldPosition;
            this.program.uniforms.viewMatrix.value = camera.viewMatrix;
            this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
            this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
            this.program.uniforms.modelMatrix.value = this.worldMatrix;
            this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
            this.program.uniforms.normalMatrix.value = this.normalMatrix;
        }

        // Before render
        this.beforeRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));

        // Determine if faces need to be flipped (when mesh scaled negatively)
        const flipFaces = this.program.cullFace && this.worldMatrix.determinant() < 0;

        // Set program and render
        this.program.use({ flipFaces });
        this.geometry.draw({ mode: this.mode, program: this.program });

        // After render
        this.afterRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));
    }
}

// TODO: upload empty texture if null ? maybe not
// TODO: upload identity matrix if null ?
// TODO: sampler Cube

const _arrayCacheF32 = {};   // cache of typed arrays used to flatten uniform arrays
let _idGenerator$1 = 1;

class Program {

    constructor({
        vertex,
        fragment,
        uniforms = {},
        defines = {},

        transparent = false,
        cullFace = renderer.gl.BACK, // FRONT, BACK, FRONT_AND_BACK
        frontFace = renderer.gl.CCW,
        depthTest = true,
        depthWrite = true,
        depthFunc = renderer.gl.LESS,
    } = {}) {
        if (!renderer) console.error(`Program: Renderer not found`);
        if (!vertex) console.warn('Program: Vertex shader not supplied');
        if (!fragment) console.warn('Program: Fragment shader not supplied');
        const gl = renderer.gl;

        this.uuid = uuid();
        this.id = _idGenerator$1++;
        this.uniforms = uniforms;

        // Store program state
        this.transparent = transparent;
        this.cullFace = cullFace;
        this.frontFace = frontFace;
        this.depthTest = depthTest;
        this.depthWrite = depthWrite;
        this.depthFunc = depthFunc;
        this.blendFunc = {};
        this.blendEquation = {};

        // Default blendFunc
        this.setBlendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        // this.setBlendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        // Incerase program count
        renderer.info.programs++;

        // Compile shaders, build program
        this.buildProgram({ vertex, fragment, defines });
    }

    buildProgram({ vertex, fragment, defines } = {}) {
        const gl = renderer.gl;

        // Add defines to shaders
        const customDefines = generateDefines(defines);

        let prefixVertex = [
            customDefines
        ].filter(filterEmptyLine).join('\n');
        if (prefixVertex.length > 0) prefixVertex += '\n';

        let prefixFragment = [
            customDefines
        ].filter(filterEmptyLine).join('\n');
        if (prefixFragment.length > 0) prefixFragment += '\n';

        let vertexGlsl, fragmentGlsl;
        if (vertex.includes('#version 300 es')) {
            vertexGlsl = '#version 300 es\n' + prefixVertex + vertex.replace('#version 300 es', '');
        } else vertexGlsl = prefixVertex + vertex;
        if (fragment.includes('#version 300 es')) {
            fragmentGlsl = '#version 300 es\n' + prefixFragment + fragment.replace('#version 300 es', '');
        } else fragmentGlsl = prefixFragment + fragment;

        // Compile vertex shader and log errors
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexGlsl);
        gl.compileShader(vertexShader);
        if (gl.getShaderInfoLog(vertexShader) !== '') {
            console.warn(`${gl.getShaderInfoLog(vertexShader)}\nVertex Shader\n${addLineNumbers(vertex)}`);
        }

        // Compile fragment shader and log errors
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentGlsl);
        gl.compileShader(fragmentShader);
        if (gl.getShaderInfoLog(fragmentShader) !== '') {
            console.warn(`${gl.getShaderInfoLog(fragmentShader)}\nFragment Shader\n${addLineNumbers(fragment)}`);
        }

        // Check if was built before, if so delete
        if (this.program) {
            gl.deleteProgram(this.program);
            renderer.state.currentProgram = -1; // force gl program update 'this.use()'
        }

        // Compile program and log errors
        this.program = gl.createProgram();
        gl.attachShader(this.program, vertexShader);
        gl.attachShader(this.program, fragmentShader);
        gl.linkProgram(this.program);
        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
            return console.warn(gl.getProgramInfoLog(this.program));
        }

        renderer.programs[this.id] = this.program;

        // Remove shader once linked
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);

        // Get active uniform locations
        this.uniformLocations = new Map();
        const numUniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
        for (let uIndex = 0; uIndex < numUniforms; uIndex++) {
            const uniform = gl.getActiveUniform(this.program, uIndex);
            this.uniformLocations.set(uniform, gl.getUniformLocation(this.program, uniform.name));

            // split uniforms' names to separate array and struct declarations
            const split = uniform.name.match(/(\w+)/g);

            uniform.uniformName = split[0];

            if (split.length === 3) {
                uniform.isStructArray = true;
                uniform.structIndex = Number(split[1]);
                uniform.structProperty = split[2];
            } else if (split.length === 2 && isNaN(Number(split[1]))) {
                uniform.isStruct = true;
                uniform.structProperty = split[1];
            }
        }

        // Get active attribute locations
        this.attributeLocations = new Map();
        const locations = [];
        const numAttribs = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);
        for (let aIndex = 0; aIndex < numAttribs; aIndex++) {
            const attribute = gl.getActiveAttrib(this.program, aIndex);
            const location = gl.getAttribLocation(this.program, attribute.name);
            if (location === -1) continue; // Ignore special built-in inputs. eg gl_VertexID, gl_InstanceID
            locations[location] = attribute.name;
            this.attributeLocations.set(attribute, location);
        }
        this.attributeOrder = locations.join('');

        // // DEBUG
        // console.log(this.attributeOrder);
    }

    setBlendFunc(src, dst, srcAlpha, dstAlpha) {
        this.blendFunc.src = src;
        this.blendFunc.dst = dst;
        this.blendFunc.srcAlpha = srcAlpha;
        this.blendFunc.dstAlpha = dstAlpha;
        if (src) this.transparent = true;
    }

    setBlendEquation(modeRGB, modeAlpha) {
        this.blendEquation.modeRGB = modeRGB;
        this.blendEquation.modeAlpha = modeAlpha;
    }

    applyState() {
        const gl = renderer.gl;

        if (this.depthTest) renderer.enable(gl.DEPTH_TEST);
        else renderer.disable(gl.DEPTH_TEST);

        if (this.cullFace) renderer.enable(gl.CULL_FACE);
        else renderer.disable(gl.CULL_FACE);

        if (this.blendFunc.src) renderer.enable(gl.BLEND);
        else renderer.disable(gl.BLEND);

        if (this.cullFace) renderer.setCullFace(this.cullFace);
        renderer.setFrontFace(this.frontFace);
        renderer.setDepthMask(this.depthWrite);
        renderer.setDepthFunc(this.depthFunc);
        if (this.blendFunc.src) renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
        renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
    }

    use({ flipFaces = false } = {}) {
        const gl = renderer.gl;
        let textureUnit = -1;

        // Avoid gl call if program already in use
        const programActive = (renderer.state.currentProgram === this.id);
        if (!programActive) {
            gl.useProgram(this.program);
            renderer.state.currentProgram = this.id;
        }

        // Set only the active uniforms found in the shader
        this.uniformLocations.forEach((location, activeUniform) => {
            let name = activeUniform.uniformName;

            // Get supplied uniform
            let uniform = this.uniforms[name];

            // For structs, get the specific property instead of the entire object
            if (activeUniform.isStruct) {
                uniform = uniform[activeUniform.structProperty];
                name += `.${activeUniform.structProperty}`;
            }
            if (activeUniform.isStructArray) {
                uniform = uniform[activeUniform.structIndex][activeUniform.structProperty];
                name += `[${activeUniform.structIndex}].${activeUniform.structProperty}`;
            }

            if (!uniform) {
                return warn(`Active uniform ${name} has not been supplied`);
            }

            if (uniform && uniform.value === undefined) {
                return warn(`${name} uniform is missing a value parameter`);
            }

            if (uniform.value.texture) {
                textureUnit = textureUnit + 1;

                // Check if texture needs to be updated
                uniform.value.update(textureUnit);
                return setUniform(gl, activeUniform.type, location, textureUnit);
            }

            // For texture arrays, set uniform as an array of texture units instead of just one
            if (uniform.value.length && uniform.value[0].texture) {
                const textureUnits = [];
                uniform.value.forEach((value) => {
                    textureUnit = textureUnit + 1;
                    value.update(textureUnit);
                    textureUnits.push(textureUnit);
                });

                return setUniform(gl, activeUniform.type, location, textureUnits);
            }

            setUniform(gl, activeUniform.type, location, uniform.value);
        });

        this.applyState();
        if (flipFaces) renderer.setFrontFace(this.frontFace === gl.CCW ? gl.CW : gl.CCW);
    }

    flush() {
        renderer.gl.deleteProgram(this.program);
        this.program = undefined;
        renderer.info.programs--;
    }

}

/******************** INTERNAL ********************/

function setUniform(gl, type, location, value) {
    value = value.length ? flatten(value) : value;
    const setValue = renderer.state.uniformLocations.get(location);

    // Avoid redundant uniform commands
    if (value.length) {
        if (setValue === undefined || setValue.length !== value.length) {
            // Clone array to store as cache
            renderer.state.uniformLocations.set(location, value.slice(0));
        } else {
            if (arraysEqual(setValue, value)) return;

            // Update cached array values
            setValue.set ? setValue.set(value) : setArray(setValue, value);
            renderer.state.uniformLocations.set(location, setValue);
        }
    } else {
        if (setValue === value) return;
        renderer.state.uniformLocations.set(location, value);
    }

    // TYPES, https://registry.khronos.org/webgl/specs/latest/1.0/#DOM-WebGLActiveInfo-type
    switch (type) {
        case 5126: // FLOAT
            if (value.length) return gl.uniform1fv(location, value);
            return gl.uniform1f(location, value);
        case 35664: // FLOAT_VEC2       0x8B50
            return gl.uniform2fv(location, value);
        case 35665: // FLOAT_VEC3       0x8B51
            return gl.uniform3fv(location, value);
        case 35666: // FLOAT_VEC4       0x8B52
            return gl.uniform4fv(location, value);
        case 35667: // INT_VEC2         0x8B53
        case 35671: // BOOL_VEC2        0x8B57
            return gl.uniform2iv(location, value);
        case 35668: // INT_VEC3         0x8B54
        case 35672: // BOOL_VEC3        0x8B58
            return gl.uniform3iv(location, value);
        case 35669: // INT_VEC4         0x8B55
        case 35673: // BOOL_VEC4        0x8B59
            return gl.uniform4iv(location, value);
        case 35674: // FLOAT_MAT2       0x8B5A
            return gl.uniformMatrix2fv(location, false, value);
        case 35675: // FLOAT_MAT3       0x8B5B
            return gl.uniformMatrix3fv(location, false, value);
        case 35676: // FLOAT_MAT4       0x8B5C
            return gl.uniformMatrix4fv(location, false, value);
        case 5124:  // INT
        case 35670: // BOOL             0x8B56
        case 35678: // SAMPLER_2D       0x8B5E
        case 35680: // SAMPLER_CUBE     0x8B60
            if (value.length) return gl.uniform1iv(location, value); /* is array */
            return gl.uniform1i(location, value); /* not array */
    }
}

function addLineNumbers(string) {
    let lines = string.split('\n');
    for (let i = 0; i < lines.length; i++) {
        lines[i] = i + 1 + ': ' + lines[i];
    }
    return lines.join('\n');
}

function flatten(a) {
    const arrayLen = a.length;
    const valueLen = a[0].length;
    if (valueLen === undefined) return a;
    const length = arrayLen * valueLen;
    let value = _arrayCacheF32[length];
    if (!value) _arrayCacheF32[length] = value = new Float32Array(length);
    for (let i = 0; i < arrayLen; i++) value.set(a[i], i * valueLen);
    return value;
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0, l = a.length; i < l; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function setArray(a, b) {
    for (let i = 0, l = a.length; i < l; i++) {
        a[i] = b[i];
    }
}

let warnCount = 0;
function warn(message) {
    if (warnCount > 100) return;
    console.warn(message);
    warnCount++;
    if (warnCount > 100) console.warn('Program: More than 100 program warnings - stopping logs');
}

/**
 * Generates a string list of defines from an object ({ FLAT_SHADING: true, etc. });
 * @param {Object} defines
 * @returns {String}
 */
function generateDefines(defines) {
    const chunks = [];
    for (const name in defines) {
        const value = defines[name];
        if (value === false) continue;
        chunks.push('#define ' + name + ' ' + value);
    }
    return chunks.join('\n');
}

function filterEmptyLine(string) {
    return string !== '';
}

const NAMES = {
    black: '#000000',
    gray: '#808080',
    grey: '#808080',
    white: '#ffffff',
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    fuchsia: '#ff00ff',
    pink: '#ff00ff',
    purple: '#8000ff',
    cyan: '#00ffff',
    yellow: '#ffff00',
    orange: '#ff8000',
};

/**
 * Converts hex string to Color
 *
 * @param {String} hex
 * @returns {Color}
 */
function hexToRGB(hex) {
    if (hex.length === 4) hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!rgb) console.warn(`ColorFunc.hexToRGB: Unable to convert hex string ${hex} to rgb values`);
    return [ parseInt(rgb[1], 16) / 255, parseInt(rgb[2], 16) / 255, parseInt(rgb[3], 16) / 255 ];
}

/**
 * Converts integer to Color
 *
 * @param {Number} num
 * @returns {Color}
 */
function numberToRGB(num) {
    num = parseInt(num);
    return [ ((num >> 16) & 255) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255 ];
}

/**
 * Attempts to convert input ('color') to a Color object
 *
 * @param {any} color
 * @returns {Color}
 */
function parseColor(color) {
    // Empty ()
    if (color === undefined) return [ 0, 0, 0 ];

    // RGB (1.0, 0.0, 0.0) or (255, 0, 0);
    if (arguments.length === 3) {
        if (arguments[0] > 1 || arguments[1] > 1 || arguments[2] > 1) {
            arguments[0] /= 255;
            arguments[1] /= 255;
            arguments[2] /= 255;
        }
        return [...arguments];
    }

    // Number (16711680)
    if (!isNaN(color)) return numberToRGB(color);

    // Hex String (#ff0000)
    if (color[0] === '#') return hexToRGB(color);

    // Names ('red')
    if (NAMES[color.toLowerCase()]) return hexToRGB(NAMES[color.toLowerCase()]);

    // Unknown
    console.warn(`ColorFunc.parseColor: Format not recognized, color: ${color}`);
    return [ 0, 0, 0 ];
}

var ColorFunc$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hexToRGB: hexToRGB,
    numberToRGB: numberToRGB,
    parseColor: parseColor
});

// - Color stored as an array of RGB decimal values (between 0 > 1)
// - Constructor / set method accept following formats:
// new Color()                 Empty (defaults to black)
// new Color([0.2, 0.4, 1.0])  Decimal Array (or another Color instance)
// new Color(0.7, 0.0, 0.1)    Decimal RGB values
// new Color('#ff0000')        Hex string
// new Color('#ccc')           Short-hand Hex string
// new Color(0x4f27e8)         Number
// new Color('red')            Color name string (short list in ColorFunc.js)

class Color extends Array {

    constructor(color) {
        if (Array.isArray(color)) return super(...color);
        return super(...parseColor(...arguments));
    }

    get r() {
        return this[0];
    }

    get g() {
        return this[1];
    }

    get b() {
        return this[2];
    }

    set r(v) {
        this[0] = v;
    }

    set g(v) {
        this[1] = v;
    }

    set b(v) {
        this[2] = v;
    }

    set(color) {
        if (Array.isArray(color)) return this.copy(color);
        return this.copy(parseColor(...arguments));
    }

    copy(v) {
        this[0] = v[0];
        this[1] = v[1];
        this[2] = v[2];
        return this;
    }

}

// NOTE: Must use these methods manually
// gl.clearColor( r, g, b, a );
// gl.colorMask( colorMask, colorMask, colorMask, colorMask );
// gl.stencilMask( stencilMask );
// gl.stencilFunc( stencilFunc, stencilRef, stencilMask );
// gl.stencilOp( stencilFail, stencilZFail, stencilZPass );
// gl.clearStencil( stencil );

// TODO: Handle context loss https://www.khronos.org/webgl/wiki/HandlingContextLost

const _tempVec3$1 = new Vec3();
let _idGenerator = 1;

class Renderer {

    static #idGenerator = 1;

    #contextLost = false;

    constructor({
        depth = true,                               // drawing buffer has depth buffer (at least 16 bits)?
        stencil = false,                            // drawing buffer has stencil buffer (at least 8 bits)?
        antialias = false,                          // perform anti-aliasing if possible?
        powerPreference = 'default',                // 'default', 'low-power', 'high-performance'
        preserveDrawingBuffer = false,              // true is slower, mostly not needed
        canvas = document.createElement('canvas'),  // canvas to use
        dpr = 1,                                    // window.devicePixelRatio
    } = {}) {

        this.uuid = uuid();
        this.id = _idGenerator++;
        this.dpr = dpr;

        this.color = true;
        this.depth = depth;
        this.stencil = stencil;

        // Draw info
        this.currentGeometry = null;                // active geometry
        this.drawCallCount = 0;                     // count draw calls in frame
        this.lastScene = null;                      // last rendered scene

        this.info = {
            programs: 0,
            geometries: 0,
            textures: 0,
        };

        // WebGL attributes
        const attributes = {
            // NOTE: About 'alpha', here we force canvas to have alpha buffer for performance reasons
            // If using destination blending (such as with weighted, blended order independent transparency),
            // will need to set alpha channel to 1.0 to avoid color errors.
            // https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices#avoid_alphafalse_which_can_be_expensive
            alpha: true,
            depth,
            stencil,
            antialias,
            failIfMajorPerformanceCaveat: true,
            powerPreference,
            preserveDrawingBuffer,
        };

        /** @type {WebGL2RenderingContext} */
        let gl;

        // WebGL2 Context
        gl = canvas.getContext('webgl2', attributes);
        if (!gl) console.error('Renderer: Unable to create WebGL 2 context');
        this.gl = gl;

        // GLOBAL: So all classes have access to internal state functions
        window.renderer = this;

        // WebGL state stores to avoid redundant calls on methods used internally
        this.state = {};
        this.state.blendFunc = { src: gl.ONE, dst: gl.ZERO };
        this.state.blendEquation = { modeRGB: gl.FUNC_ADD };
        this.state.cullFace = null;
        this.state.frontFace = gl.CCW;
        this.state.depthMask = true;
        this.state.depthFunc = gl.LESS;
        this.state.premultiplyAlpha = false;
        this.state.flipY = false;
        this.state.unpackAlignment = 4;
        this.state.framebuffer = null;
        this.state.viewport = { x: 0, y: 0, width: null, height: null };
        this.state.textureUnits = [];
        this.state.activeTextureUnit = 0;
        this.state.boundBuffer = null;
        this.state.uniformLocations = new Map();
        this.state.currentProgram = null;

        // Programs
        this.programs = {};

        // Context
        function initContext(self) {
            self.extensions = {};
            self.getExtension('EXT_color_buffer_float');
            self.getExtension('EXT_color_buffer_half_float');
            self.getExtension('EXT_texture_compression_bptc');
            self.getExtension('OES_texture_float_linear');
            self.getExtension('WEBGL_compressed_texture_astc');
            self.getExtension('WEBGL_compressed_texture_etc1');
            self.getExtension('WEBGL_compressed_texture_s3tc');
            self.getExtension('WEBGL_compressed_texture_pvrtc');
            self.getExtension('WEBGL_multisampled_render_to_texture');

            self.maxAnisotropy = 0;
            if (self.extensions['EXT_texture_filter_anisotropic']) {
                const extension = self.extensions['EXT_texture_filter_anisotropic'];
                this.maxAnisotropy = gl.getParameter(extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            }
        };
        initContext(this);

        // Context lost
        self.loseContext = this.getExtension('WEBGL_lose_context');
        gl.canvas.addEventListener('webglcontextlost', function(event) {
            event.preventDefault();
            console.log('Renderer: Context lost');
            this.#contextLost = true;
        }.bind(this));

        gl.canvas.addEventListener('webglcontextrestored', function(event) {
            console.log('Renderer: Context restored');
            initContext(this);
            this.#contextLost = false;
        }.bind(this));
    }

    getExtension(name, logWarning = false) {
        if (!this.extensions[name]) this.extensions[name] = this.gl.getExtension(name);
        if (!this.extensions[name] && logWarning) {
            console.warn(`Renderer.getExtension: ${name} extension not supported.`);
        }
        return this.extensions[name];
    }

    /** Typically (window.innerWidth, window.innerHeight) */
    setSize(width, height, updateStyle = true) {
        this.width = width;
        this.height = height;

        if (this.gl.canvas.width !== width || this.gl.canvas.height !== height) {
            this.gl.canvas.width = width * this.dpr;
            this.gl.canvas.height = height * this.dpr;

            if (updateStyle && this.gl.canvas.style) {
                this.gl.canvas.style.width = width + 'px';
                this.gl.canvas.style.height = height + 'px';
            }
        }
    }

    setViewport(width, height, x = 0, y = 0) {
        if (this.state.viewport.width === width && this.state.viewport.height === height) return;
        this.state.viewport.width = width;
        this.state.viewport.height = height;
        this.state.viewport.x = x;
        this.state.viewport.y = y;
        this.gl.viewport(x, y, width, height);
    }

    setScissor(width, height, x = 0, y = 0) {
        this.gl.scissor(x, y, width, height);
    }

    enable(id) {
        if (this.state[id] === true) return;
        this.gl.enable(id);
        this.state[id] = true;
    }

    disable(id) {
        if (this.state[id] === false) return;
        this.gl.disable(id);
        this.state[id] = false;
    }

    setBlendFunc(src, dst, srcAlpha, dstAlpha) {
        if (
            this.state.blendFunc.src === src &&
            this.state.blendFunc.dst === dst &&
            this.state.blendFunc.srcAlpha === srcAlpha &&
            this.state.blendFunc.dstAlpha === dstAlpha
        ) return;
        this.state.blendFunc.src = src;
        this.state.blendFunc.dst = dst;
        this.state.blendFunc.srcAlpha = srcAlpha;
        this.state.blendFunc.dstAlpha = dstAlpha;
        if (srcAlpha !== undefined) this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);
        else this.gl.blendFunc(src, dst);
    }

    setBlendEquation(modeRGB, modeAlpha) {
        modeRGB = modeRGB || this.gl.FUNC_ADD;
        if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha) return;
        this.state.blendEquation.modeRGB = modeRGB;
        this.state.blendEquation.modeAlpha = modeAlpha;
        if (modeAlpha !== undefined) this.gl.blendEquationSeparate(modeRGB, modeAlpha);
        else this.gl.blendEquation(modeRGB);
    }

    setCullFace(value) {
        if (this.state.cullFace === value) return;
        this.state.cullFace = value;
        this.gl.cullFace(value);
    }

    setFrontFace(value) {
        if (this.state.frontFace === value) return;
        this.state.frontFace = value;
        this.gl.frontFace(value);
    }

    setDepthMask(value) {
        if (this.state.depthMask === value) return;
        this.state.depthMask = value;
        this.gl.depthMask(value);
    }

    setDepthFunc(value) {
        if (this.state.depthFunc === value) return;
        this.state.depthFunc = value;
        this.gl.depthFunc(value);
    }

    activeTexture(value) {
        if (this.state.activeTextureUnit === value) return;
        this.state.activeTextureUnit = value;
        this.gl.activeTexture(this.gl.TEXTURE0 + value);
    }

    bindFramebuffer({ target = this.gl.FRAMEBUFFER, buffer = null } = {}) {
        if (this.state.framebuffer === buffer) return;
        this.state.framebuffer = buffer;
        this.gl.bindFramebuffer(target, buffer);
    }

    clearActiveGeometry() {
        this.gl.bindVertexArray(null);
        this.currentGeometry = null;
    }

    sortOpaque(a, b) {
        if (a.renderOrder !== b.renderOrder) {
            return a.renderOrder - b.renderOrder;
        } else if (a.program.id !== b.program.id) {
            return a.program.id - b.program.id;
        } else if (a.zDepth !== b.zDepth) {
            return a.zDepth - b.zDepth;
        } else {
            return b.id - a.id;
        }
    }

    sortTransparent(a, b) {
        if (a.renderOrder !== b.renderOrder) {
            return a.renderOrder - b.renderOrder;
        }
        if (a.zDepth !== b.zDepth) {
            return b.zDepth - a.zDepth;
        } else {
            return b.id - a.id;
        }
    }

    sortUI(a, b) {
        if (a.renderOrder !== b.renderOrder) {
            return a.renderOrder - b.renderOrder;
        } else if (a.program.id !== b.program.id) {
            return a.program.id - b.program.id;
        } else {
            return b.id - a.id;
        }
    }

    getRenderList({
        scene,
        camera,
        frustumCull,
        sort
    } = {}) {
        if (camera && frustumCull) camera.updateFrustum();

        // Get visible objects
        let renderList = [];
        scene.traverse((node) => {
            if (!node.visible) return true; /* stop traversing children (all children become invisible) */
            if (!node.draw) return;
            if (frustumCull && node.frustumCulled && camera && !camera.frustumIntersectsMesh(node)) return;
            renderList.push(node);
        });

        // Sort? (sorting opaque objects is still desired to stop overdraw)
        if (sort) {
            const opaque = [];
            const transparent = [];     // depthTest true
            const ui = [];              // depthTest false

            renderList.forEach((node) => {
                // Split into the 3 render groups
                if (!node.program.transparent) {
                    opaque.push(node);
                } else if (node.program.depthTest) {
                    transparent.push(node);
                } else {
                    ui.push(node);
                }

                node.zDepth = 0;

                // Only calculate z-depth if renderOrder unset and depthTest is true
                if (node.renderOrder !== 0 || !node.program.depthTest || !camera) return;

                // Update z-depth
                node.worldMatrix.getTranslation(_tempVec3$1);
                _tempVec3$1.applyMatrix4(camera.projectionViewMatrix);
                node.zDepth = _tempVec3$1.z;
            });

            opaque.sort(this.sortOpaque);
            transparent.sort(this.sortTransparent);
            ui.sort(this.sortUI);

            renderList = opaque.concat(transparent, ui);
        }

        return renderList;
    }

    prepRender({
        scene,
        camera,
        target = null,
        update = true,
        clear = true,
    } = {}) {
        if (!target) {
            this.bindFramebuffer();         // to screen
            this.setViewport(this.width * this.dpr, this.height * this.dpr);
        } else {
            this.bindFramebuffer(target);   // to framebuffer
            this.setViewport(target.width, target.height);
        }

        if (clear) {
            // Ensure depth buffer writing is enabled so it can be cleared
            if (this.depth && (!target || target.depth)) {
                this.enable(this.gl.DEPTH_TEST);
                this.setDepthMask(true);
            }
            const clearColor = (this.color) ? this.gl.COLOR_BUFFER_BIT : 0;
            const clearDepth = (this.depth) ? this.gl.DEPTH_BUFFER_BIT : 0;
            const clearStencil = (this.stencil) ? this.gl.STENCIL_BUFFER_BIT : 0;
            this.gl.clear(clearColor | clearDepth | clearStencil);
        }

        // Update all scene graph matrices
        if (update) scene.updateMatrixWorld();

        // Update camera separately (in case not in scene graph)
        if (camera) camera.updateMatrixWorld();
    };

    render({
        scene,
        camera,
        target = null,
        update = true,
        sort = true,
        frustumCull = true,
        clear = true,
        draw = true,
    } = {}) {
        if (this.#contextLost) return;

        // Clear / update
        this.prepRender({ scene, camera, target, update, clear });

        // Get render list (entails culling and sorting)
        const renderList = this.getRenderList({ scene, camera, frustumCull, sort });

        // Render objects
        if (draw) renderList.forEach(node => node.draw({ camera }));

        // Return list
        this.lastScene = scene;
        return renderList;
    }

}

// TODO: test stencil and depth

class RenderTarget {

    constructor({
        width = renderer.gl.canvas.width,
        height = renderer.gl.canvas.height,
        target = renderer.gl.FRAMEBUFFER,
        color = 1,                  // number of color attachments
        depth = true,
        stencil = false,
        depthTexture = false,       // note - stencil breaks
        wrapS = renderer.gl.CLAMP_TO_EDGE,
        wrapT = renderer.gl.CLAMP_TO_EDGE,
        minFilter = renderer.gl.LINEAR,
        magFilter = minFilter,
        type = renderer.gl.UNSIGNED_BYTE,
        format = renderer.gl.RGBA,
        internalFormat = format,
        unpackAlignment,
        premultiplyAlpha,
    } = {}) {
        const gl = renderer.gl;

        this.width = width;
        this.height = height;
        this.depth = depth;
        this.buffer = gl.createFramebuffer();
        this.target = target;
        renderer.bindFramebuffer(this);

        this.textures = [];
        const drawBuffers = [];

        // Create and attach required num of color textures
        for (let i = 0; i < color; i++) {
            this.textures.push(
                new Texture({
                    width,
                    height,
                    wrapS,
                    wrapT,
                    minFilter,
                    magFilter,
                    type,
                    format,
                    internalFormat,
                    unpackAlignment,
                    premultiplyAlpha,
                    flipY: false,
                    generateMipmaps: false,
                })
            );
            this.textures[i].update();
            gl.framebufferTexture2D(this.target, gl.COLOR_ATTACHMENT0 + i, gl.TEXTURE_2D, this.textures[i].texture, 0 /* level */);
            drawBuffers.push(gl.COLOR_ATTACHMENT0 + i);
        }

        // For multi-render targets shader access
        if (drawBuffers.length > 1) gl.drawBuffers(drawBuffers);

        // Alias for majority of use cases
        this.texture = this.textures[0];

        // Note depth textures break stencil - so can't use together
        if (depthTexture) {
            this.depthTexture = new Texture({
                width,
                height,
                minFilter: gl.NEAREST,
                magFilter: gl.NEAREST,
                format: gl.DEPTH_COMPONENT,
                internalFormat: gl.DEPTH_COMPONENT16,
                type: gl.UNSIGNED_INT,
            });
            console.log('Depth!');
            this.depthTexture.update();
            gl.framebufferTexture2D(this.target, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture.texture, 0 /* level */);
        } else {
            // Render buffers
            if (depth && !stencil) {
                this.depthBuffer = gl.createRenderbuffer();
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthBuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
                gl.framebufferRenderbuffer(this.target, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthBuffer);
            }

            if (stencil && !depth) {
                this.stencilBuffer = gl.createRenderbuffer();
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencilBuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.STENCIL_INDEX8, width, height);
                gl.framebufferRenderbuffer(this.target, gl.STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.stencilBuffer);
            }

            if (depth && stencil) {
                this.depthStencilBuffer = gl.createRenderbuffer();
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthStencilBuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
                gl.framebufferRenderbuffer(this.target, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.depthStencilBuffer);
            }
        }

        renderer.bindFramebuffer({ target: this.target });
    }

    setSize(width, height) {
        if (this.width === width && this.height === height) return;

        const gl = renderer.gl;
        this.width = width;
        this.height = height;
        renderer.bindFramebuffer(this);

        for (let i = 0; i < this.textures.length; i++) {
            this.textures[i].width = width;
            this.textures[i].height = height;
            this.textures[i].needsUpdate = true;
            this.textures[i].update();
            gl.framebufferTexture2D(this.target, gl.COLOR_ATTACHMENT0 + i, gl.TEXTURE_2D, this.textures[i].texture, 0 /* level */);
        }

        if (this.depthTexture) {
            this.depthTexture.width = width;
            this.depthTexture.height = height;
            this.depthTexture.needsUpdate = true;
            this.depthTexture.update();
            gl.framebufferTexture2D(this.target, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture.texture, 0 /* level */);
        } else {
            if (this.depthBuffer) {
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthBuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
            }

            if (this.stencilBuffer) {
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencilBuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.STENCIL_INDEX8, width, height);
            }

            if (this.depthStencilBuffer) {
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthStencilBuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
            }
        }

        renderer.bindFramebuffer({ target: this.target });
    }

    flush() {

        // TODO

    }

}

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

// TODO: Destroy render targets if size changed and exists

class Post {

    constructor({
        width,
        height,
        dpr,
        wrapS = renderer.gl.CLAMP_TO_EDGE,
        wrapT = renderer.gl.CLAMP_TO_EDGE,
        minFilter = renderer.gl.LINEAR,
        magFilter = renderer.gl.LINEAR,
        geometry = new Triangle(),
        targetOnly = null,
    } = {}) {

        this.options = { wrapS, wrapT, minFilter, magFilter };

        this.passes = [];

        this.geometry = geometry;

        this.uniform = { value: null };
        this.targetOnly = targetOnly;

        const fbo = (this.fbo = {
            read: null,
            write: null,
            swap: () => {
                let temp = fbo.read;
                fbo.read = fbo.write;
                fbo.write = temp;
            },
        });

        this.resize({ width, height, dpr });
    }

    addPass({
        vertex = defaultVertex$6,
        fragment = defaultFragment$6,
        uniforms = {},
        textureUniform = 'tDiffuse',
        enabled = true
    } = {}) {
        uniforms[textureUniform] = { value: this.fbo.read.texture };

        const program = new Program({ vertex, fragment, uniforms });
        const mesh = new Mesh({ geometry: this.geometry, program });

        const pass = {
            mesh,
            program,
            uniforms,
            enabled,
            textureUniform,
        };

        this.passes.push(pass);
        return pass;
    }

    resize({ width, height, dpr } = {}) {
        if (dpr) this.dpr = dpr;
        if (width) {
            this.width = width;
            this.height = height || width;
        }

        dpr = this.dpr || renderer.dpr;
        width = Math.floor((this.width || renderer.width) * dpr);
        height = Math.floor((this.height || renderer.height) * dpr);

        this.options.width = width;
        this.options.height = height;

        this.fbo.read = new RenderTarget(this.options);
        this.fbo.write = new RenderTarget(this.options);
    }

    // Uses same arguments as renderer.render, with addition of optional texture passed in to avoid scene render
    render({ scene, camera, texture, target = null, update = true, sort = true, frustumCull = true }) {
        const enabledPasses = this.passes.filter((pass) => pass.enabled);

        if (!texture) {
            renderer.render({
                scene,
                camera,
                target: enabledPasses.length || (!target && this.targetOnly) ? this.fbo.write : target,
                update,
                sort,
                frustumCull,
            });
            this.fbo.swap();
        }

        enabledPasses.forEach((pass, i) => {
            pass.mesh.program.uniforms[pass.textureUniform].value = !i && texture ? texture : this.fbo.read.texture;
            renderer.render({
                scene: pass.mesh,
                target: i === enabledPasses.length - 1 && (target || !this.targetOnly) ? target : this.fbo.write,
                clear: true,
            });
            this.fbo.swap();
        });

        this.uniform.value = this.fbo.read.texture;
    }

}

/******************** INTERNAL ********************/

const defaultVertex$6 = /* glsl */ `
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`;

const defaultFragment$6 = /* glsl */ `
    precision highp float;

    uniform sampler2D tDiffuse;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tDiffuse, vUv);
    }
`;

const EPSILON$1 = 0.000001;

/**
 * Copy the values from one Vec2 to another
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the source vector
 * @returns {Vec2} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
}

/**
 * Set the components of a Vec2 to the given values
 *
 * @param {Vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {Vec2} out
 */
function set(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
}

/**
 * Adds two Vec2's
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Vec2} out
 */
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Vec2} out
 */
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
}

/**
 * Multiplies two Vec2's
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Vec2} out
 */
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
}

/**
 * Divides two Vec2's
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Vec2} out
 */
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
}

/**
 * Scales a Vec2 by a scalar number
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {Vec2} out
 */
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
}

/**
 * Calculates the euclidian distance between two Vec2's
 *
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared euclidian distance between two Vec2's
 *
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
    var x = b[0] - a[0],
        y = b[1] - a[1];
    return x * x + y * y;
}

/**
 * Calculates the length of a Vec2
 *
 * @param {Vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
    var x = a[0],
        y = a[1];
    return Math.sqrt(x * x + y * y);
}

/**
 * Calculates the squared length of a Vec2
 *
 * @param {Vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
    var x = a[0],
        y = a[1];
    return x * x + y * y;
}

/**
 * Negates the components of a Vec2
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a vector to negate
 * @returns {Vec2} out
 */
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
}

/**
 * Returns the inverse of the components of a Vec2
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a vector to invert
 * @returns {Vec2} out
 */
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    return out;
}

/**
 * Normalize a Vec2
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a vector to normalize
 * @returns {Vec2} out
 */
function normalize(out, a) {
    var x = a[0],
        y = a[1];
    var len = x * x + y * y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
    }
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    return out;
}

/**
 * Calculates the dot product of two Vec2's
 *
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
}

/**
 * Computes the cross product of two Vec2's
 * Note that the cross product returns a scalar
 *
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @returns {Number} cross product of a and b
 */
function cross(a, b) {
    return a[0] * b[1] - a[1] * b[0];
}

/**
 * Performs a linear interpolation between two Vec2's
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the first operand
 * @param {Vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {Vec2} out
 */
function lerp$1(out, a, b, t) {
    var ax = a[0],
        ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
}

/**
 * Transforms the Vec2 with a Mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the vector to transform
 * @param {Mat3} m matrix to transform with
 * @returns {Vec2} out
 */
function transformMat3(out, a, m) {
    var x = a[0],
        y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
}

/**
 * Transforms the Vec2 with a Mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {Vec2} out the receiving vector
 * @param {Vec2} a the vector to transform
 * @param {Mat4} m matrix to transform with
 * @returns {Vec2} out
 */
function transformMat4(out, a, m) {
    let x = a[0];
    let y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {Vec2} a The first vector.
 * @param {Vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1];
}

var Vec2Func$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    add: add,
    copy: copy,
    cross: cross,
    distance: distance,
    divide: divide,
    dot: dot,
    exactEquals: exactEquals,
    inverse: inverse,
    length: length,
    lerp: lerp$1,
    multiply: multiply,
    negate: negate,
    normalize: normalize,
    scale: scale,
    set: set,
    squaredDistance: squaredDistance,
    squaredLength: squaredLength,
    subtract: subtract,
    transformMat3: transformMat3,
    transformMat4: transformMat4
});

class Vec2 extends Array {

    constructor(x = 0, y = x) {
        super(x, y);
        return this;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    set x(v) {
        this[0] = v;
    }

    set y(v) {
        this[1] = v;
    }

    set(x, y = x) {
        if (x.length) return this.copy(x);
        set(this, x, y);
        return this;
    }

    copy(v) {
        copy(this, v);
        return this;
    }

    add(va, vb) {
        if (vb) add(this, va, vb);
        else add(this, this, va);
        return this;
    }

    sub(va, vb) {
        if (vb) subtract(this, va, vb);
        else subtract(this, this, va);
        return this;
    }

    multiply(v) {
        if (v.length) multiply(this, this, v);
        else scale(this, this, v);
        return this;
    }

    divide(v) {
        if (v.length) divide(this, this, v);
        else scale(this, this, 1 / v);
        return this;
    }

    inverse(v = this) {
        inverse(this, v);
        return this;
    }

    // Can't use 'length' as Array.prototype uses it
    len() {
        return length(this);
    }

    distance(v) {
        if (v) return distance(this, v);
        else return length(this);
    }

    squaredLen() {
        return this.squaredDistance();
    }

    squaredDistance(v) {
        if (v) return squaredDistance(this, v);
        else return squaredLength(this);
    }

    negate(v = this) {
        negate(this, v);
        return this;
    }

    cross(va, vb) {
        if (vb) return cross(va, vb);
        return cross(this, va);
    }

    scale(v) {
        scale(this, this, v);
        return this;
    }

    normalize() {
        normalize(this, this);
        return this;
    }

    dot(v) {
        return dot(this, v);
    }

    equals(v) {
        return exactEquals(this, v);
    }

    applyMatrix3(mat3) {
        transformMat3(this, this, mat3);
        return this;
    }

    applyMatrix4(mat4) {
        transformMat4(this, this, mat4);
        return this;
    }

    lerp(v, a) {
        lerp$1(this, this, v, a);
        return this;
    }

    clone() {
        return new Vec2(this[0], this[1]);
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        return a;
    }

    log(description = '') {
        if (description !== '') description += ' - ';
        console.log(`${description}X: ${this.x}, Y: ${this.y}`);
    }

}

// TODO: barycentric code shouldn't be here, but where?
// TODO: SphereCast?

const tempVec2a = new Vec2();
const tempVec2b = new Vec2();
const tempVec2c = new Vec2();

const tempVec3a = new Vec3();
const tempVec3b = new Vec3();
const tempVec3c = new Vec3();
const tempVec3d = new Vec3();
const tempVec3e = new Vec3();
const tempVec3f = new Vec3();
const tempVec3g = new Vec3();
const tempVec3h = new Vec3();
const tempVec3i = new Vec3();
const tempVec3j = new Vec3();
const tempVec3k = new Vec3();

const tempMat4$2 = new Mat4();

class Raycast {

    constructor() {
        this.origin = new Vec3();
        this.direction = new Vec3();
    }

    // Set ray from mouse unprojection
    castMouse(camera, mouse = [ 0, 0 ]) {
        if (camera.type === 'orthographic') {
            // Set origin
            // Since camera is orthographic, origin is not the camera position
            const { left, right, bottom, top, zoom } = camera;
            const x = left / zoom + ((right - left) / zoom) * (mouse[0] * 0.5 + 0.5);
            const y = bottom / zoom + ((top - bottom) / zoom) * (mouse[1] * 0.5 + 0.5);
            this.origin.set(x, y, 0);
            this.origin.applyMatrix4(camera.worldMatrix);

            // Set direction
            // https://community.khronos.org/t/get-direction-from-transformation-matrix-or-quat/65502/2
            this.direction.x = -camera.worldMatrix[8];
            this.direction.y = -camera.worldMatrix[9];
            this.direction.z = -camera.worldMatrix[10];
        } else {
            // Set origin
            camera.worldMatrix.getTranslation(this.origin);

            // Set direction
            this.direction.set(mouse[0], mouse[1], 0.5);
            camera.unproject(this.direction);
            this.direction.sub(this.origin).normalize();
        }
    }

    intersectBounds(meshes, { maxDistance, output = [] } = {}) {
        if (!Array.isArray(meshes)) meshes = [ meshes ];

        const invWorldMat4 = tempMat4$2;
        const origin = tempVec3a;
        const direction = tempVec3b;

        const hits = output;
        hits.length = 0;

        meshes.forEach((mesh) => {

            // Create bounds
            if (!mesh.geometry.bounds || mesh.geometry.bounds.radius === Infinity) mesh.geometry.computeBoundingSphere();
            const bounds = mesh.geometry.bounds;
            invWorldMat4.inverse(mesh.worldMatrix);

            // Get max distance locally
            let localMaxDistance;
            if (maxDistance) {
                direction.copy(this.direction).scaleRotateMatrix4(invWorldMat4);
                localMaxDistance = maxDistance * direction.len();
            }

            // Take world space ray and make it object space to align with bounding box
            origin.copy(this.origin).applyMatrix4(invWorldMat4);
            direction.copy(this.direction).transformDirection(invWorldMat4);

            // Break out early if bounds too far away from origin
            if (maxDistance) {
                if (origin.distance(bounds.center) - bounds.radius > localMaxDistance) return;
            }

            let localDistance = 0;

            // Check origin isn't inside bounds before testing intersection
            if (mesh.geometry.raycast === 'sphere') {
                if (origin.distance(bounds.center) > bounds.radius) {
                    localDistance = this.intersectSphere(bounds, origin, direction);
                    if (!localDistance) return;
                }
            } else {
                if (
                    origin.x < bounds.min.x ||
                    origin.x > bounds.max.x ||
                    origin.y < bounds.min.y ||
                    origin.y > bounds.max.y ||
                    origin.z < bounds.min.z ||
                    origin.z > bounds.max.z
                ) {
                    localDistance = this.intersectBox(bounds, origin, direction);
                    if (!localDistance) return;
                }
            }

            if (maxDistance && localDistance > localMaxDistance) return;

            // Create object on mesh to avoid generating lots of objects
            if (!mesh.hit) mesh.hit = { localPoint: new Vec3(), point: new Vec3() };

            mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
            mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
            mesh.hit.distance = mesh.hit.point.distance(this.origin);

            hits.push(mesh);
        });

        hits.sort((a, b) => a.hit.distance - b.hit.distance);
        return hits;
    }

    intersectMeshes(meshes, { cullFace = true, maxDistance, includeUV = true, includeNormal = true, output = [] } = {}) {
        // Test bounds first before testing geometry
        const hits = this.intersectBounds(meshes, { maxDistance, output });
        if (!hits.length) return hits;

        const invWorldMat4 = tempMat4$2;
        const origin = tempVec3a;
        const direction = tempVec3b;
        const a = tempVec3c;
        const b = tempVec3d;
        const c = tempVec3e;
        const closestFaceNormal = tempVec3f;
        const faceNormal = tempVec3g;
        const barycoord = tempVec3h;
        const uvA = tempVec2a;
        const uvB = tempVec2b;
        const uvC = tempVec2c;

        for (let i = hits.length - 1; i >= 0; i--) {
            const mesh = hits[i];
            invWorldMat4.inverse(mesh.worldMatrix);

            // Get max distance locally
            let localMaxDistance;
            if (maxDistance) {
                direction.copy(this.direction).scaleRotateMatrix4(invWorldMat4);
                localMaxDistance = maxDistance * direction.len();
            }

            // Take world space ray and make it object space to align with bounding box
            origin.copy(this.origin).applyMatrix4(invWorldMat4);
            direction.copy(this.direction).transformDirection(invWorldMat4);

            let localDistance = 0;
            let closestA, closestB, closestC;

            const geometry = mesh.geometry;
            const attributes = geometry.attributes;
            const index = attributes.index;
            const position = attributes.position;

            const start = Math.max(0, geometry.drawRange.start);
            const end = Math.min(index ? index.count : position.count, geometry.drawRange.start + geometry.drawRange.count);
            const stride = position.size;

            for (let j = start; j < end; j += 3) {
                // Position attribute indices for each triangle
                const ai = index ? index.data[j] : j;
                const bi = index ? index.data[j + 1] : j + 1;
                const ci = index ? index.data[j + 2] : j + 2;

                a.fromArray(position.data, ai * stride);
                b.fromArray(position.data, bi * stride);
                c.fromArray(position.data, ci * stride);

                const distance = this.intersectTriangle(a, b, c, cullFace, origin, direction, faceNormal);
                if (!distance) continue;

                // Too far away
                if (maxDistance && distance > localMaxDistance) continue;

                if (!localDistance || distance < localDistance) {
                    localDistance = distance;
                    closestA = ai;
                    closestB = bi;
                    closestC = ci;
                    closestFaceNormal.copy(faceNormal);
                }
            }

            if (!localDistance) hits.splice(i, 1);

            // Update hit values from bounds-test
            mesh.hit.localPoint.copy(direction).multiply(localDistance).add(origin);
            mesh.hit.point.copy(mesh.hit.localPoint).applyMatrix4(mesh.worldMatrix);
            mesh.hit.distance = mesh.hit.point.distance(this.origin);

            // Add unique hit objects on mesh to avoid generating lots of objects
            if (!mesh.hit.faceNormal) {
                mesh.hit.localFaceNormal = new Vec3();
                mesh.hit.faceNormal = new Vec3();
                mesh.hit.uv = new Vec2();
                mesh.hit.localNormal = new Vec3();
                mesh.hit.normal = new Vec3();
            }

            // Add face normal data which is already computed
            mesh.hit.localFaceNormal.copy(closestFaceNormal);
            mesh.hit.faceNormal.copy(mesh.hit.localFaceNormal).transformDirection(mesh.worldMatrix);

            // Optional data, opt out to optimise a bit if necessary
            if (includeUV || includeNormal) {
                // Calculate barycoords to find uv values at hit point
                a.fromArray(position.data, closestA * 3);
                b.fromArray(position.data, closestB * 3);
                c.fromArray(position.data, closestC * 3);
                this.getBarycoord(mesh.hit.localPoint, a, b, c, barycoord);
            }

            if (includeUV && attributes.uv) {
                uvA.fromArray(attributes.uv.data, closestA * 2);
                uvB.fromArray(attributes.uv.data, closestB * 2);
                uvC.fromArray(attributes.uv.data, closestC * 2);
                mesh.hit.uv.set(
                    uvA.x * barycoord.x + uvB.x * barycoord.y + uvC.x * barycoord.z,
                    uvA.y * barycoord.x + uvB.y * barycoord.y + uvC.y * barycoord.z
                );
            }

            if (includeNormal && attributes.normal) {
                a.fromArray(attributes.normal.data, closestA * 3);
                b.fromArray(attributes.normal.data, closestB * 3);
                c.fromArray(attributes.normal.data, closestC * 3);
                mesh.hit.localNormal.set(
                    a.x * barycoord.x + b.x * barycoord.y + c.x * barycoord.z,
                    a.y * barycoord.x + b.y * barycoord.y + c.y * barycoord.z,
                    a.z * barycoord.x + b.z * barycoord.y + c.z * barycoord.z
                );

                mesh.hit.normal.copy(mesh.hit.localNormal).transformDirection(mesh.worldMatrix);
            }
        }

        hits.sort((a, b) => a.hit.distance - b.hit.distance);
        return hits;
    }

    intersectSphere(sphere, origin = this.origin, direction = this.direction) {
        const ray = tempVec3c;
        ray.sub(sphere.center, origin);
        const tca = ray.dot(direction);
        const d2 = ray.dot(ray) - tca * tca;
        const radius2 = sphere.radius * sphere.radius;
        if (d2 > radius2) return 0;
        const thc = Math.sqrt(radius2 - d2);
        const t0 = tca - thc;
        const t1 = tca + thc;
        if (t0 < 0 && t1 < 0) return 0;
        if (t0 < 0) return t1;
        return t0;
    }

    // Ray AABB - Ray Axis aligned bounding box testing
    intersectBox(box, origin = this.origin, direction = this.direction) {
        let tmin, tmax, tYmin, tYmax, tZmin, tZmax;
        const invdirx = 1 / direction.x;
        const invdiry = 1 / direction.y;
        const invdirz = 1 / direction.z;
        const min = box.min;
        const max = box.max;
        tmin = ((invdirx >= 0 ? min.x : max.x) - origin.x) * invdirx;
        tmax = ((invdirx >= 0 ? max.x : min.x) - origin.x) * invdirx;
        tYmin = ((invdiry >= 0 ? min.y : max.y) - origin.y) * invdiry;
        tYmax = ((invdiry >= 0 ? max.y : min.y) - origin.y) * invdiry;
        if (tmin > tYmax || tYmin > tmax) return 0;
        if (tYmin > tmin) tmin = tYmin;
        if (tYmax < tmax) tmax = tYmax;
        tZmin = ((invdirz >= 0 ? min.z : max.z) - origin.z) * invdirz;
        tZmax = ((invdirz >= 0 ? max.z : min.z) - origin.z) * invdirz;
        if (tmin > tZmax || tZmin > tmax) return 0;
        if (tZmin > tmin) tmin = tZmin;
        if (tZmax < tmax) tmax = tZmax;
        if (tmax < 0) return 0;
        return tmin >= 0 ? tmin : tmax;
    }

    intersectTriangle(a, b, c, backfaceCulling = true, origin = this.origin, direction = this.direction, normal = tempVec3g) {
        // from https://github.com/mrdoob/three.js/blob/master/src/math/Ray.js
        // which is from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h
        const edge1 = tempVec3h;
        const edge2 = tempVec3i;
        const diff = tempVec3j;
        edge1.sub(b, a);
        edge2.sub(c, a);
        normal.cross(edge1, edge2);
        let DdN = direction.dot(normal);
        if (!DdN) return 0;
        let sign;
        if (DdN > 0) {
            if (backfaceCulling) return 0;
            sign = 1;
        } else {
            sign = -1;
            DdN = -DdN;
        }
        diff.sub(origin, a);
        let DdQxE2 = sign * direction.dot(edge2.cross(diff, edge2));
        if (DdQxE2 < 0) return 0;
        let DdE1xQ = sign * direction.dot(edge1.cross(diff));
        if (DdE1xQ < 0) return 0;
        if (DdQxE2 + DdE1xQ > DdN) return 0;
        let QdN = -sign * diff.dot(normal);
        if (QdN < 0) return 0;
        return QdN / DdN;
    }

    getBarycoord(point, a, b, c, target = tempVec3h) {
        // From https://github.com/mrdoob/three.js/blob/master/src/math/Triangle.js
        // static / instance method to calculate barycentric coordinates
        // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
        const v0 = tempVec3i;
        const v1 = tempVec3j;
        const v2 = tempVec3k;
        v0.sub(c, a);
        v1.sub(b, a);
        v2.sub(point, a);
        const dot00 = v0.dot(v0);
        const dot01 = v0.dot(v1);
        const dot02 = v0.dot(v2);
        const dot11 = v1.dot(v1);
        const dot12 = v1.dot(v2);
        const denom = dot00 * dot11 - dot01 * dot01;
        if (denom === 0) return target.set(-2, -1, -1);
        const invDenom = 1 / denom;
        const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
        const v = (dot00 * dot12 - dot01 * dot02) * invDenom;
        return target.set(1 - u - v, v, u);
    }

}

// Based from ThreeJS' OrbitControls class, rewritten using es6 with some additions and subtractions.

// TODO: focus on target
// TODO: abstract event handlers so can be fed from other sources
// TODO: make scroll zoom more accurate than just >/< zero
// TODO: be able to pass in new camera position

const STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, DOLLY_PAN: 3 };

const _tempVec3 = new Vec3();
const _tempVec2a = new Vec2();
const _tempVec2b = new Vec2();

class Orbit {

    constructor(object, {
        element,
        enabled = true,
        target = new Vec3(),
        ease = 0.25,
        inertia = 0.85,
        enableRotate = true,
        rotateSpeed = 0.1,
        autoRotate = false,
        autoRotateSpeed = 1.0,
        enableZoom = true,
        zoomSpeed = 1,
        zoomStyle = 'dolly',
        enablePan = true,
        panSpeed = 0.1,
        minPolarAngle = 0,
        maxPolarAngle = Math.PI,
        minAzimuthAngle = -Infinity,
        maxAzimuthAngle = Infinity,
        minDistance = 0,
        maxDistance = Infinity,
    } = {}) {
        if (!element) {
            if (window.renderer) element = renderer.gl.canvas;
            else element = document.body;
        }

        this.enabled = enabled;
        this.target = target;
        this.zoomStyle = zoomStyle;

        // Catch attempts to disable - set to 1 so has no effect
        ease = ease || 1;
        inertia = inertia || 0;

        this.minDistance = minDistance;
        this.maxDistance = maxDistance;

        // Current position in sphericalTarget coordinates
        const sphericalDelta = { radius: 1, phi: 0, theta: 0 };
        const sphericalTarget = { radius: 1, phi: 0, theta: 0 };
        const spherical = { radius: 1, phi: 0, theta: 0 };
        const panDelta = new Vec3();

        // Grab initial position values
        const offset = new Vec3();
        offset.copy(object.position).sub(this.target);
        spherical.radius = sphericalTarget.radius = offset.distance();
        spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
        spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));

        this.offset = offset;

        this.update = () => {
            if (autoRotate) {
                handleAutoRotate();
            }

            // apply delta
            sphericalTarget.radius *= sphericalDelta.radius;
            sphericalTarget.theta += sphericalDelta.theta;
            sphericalTarget.phi += sphericalDelta.phi;

            // apply boundaries
            sphericalTarget.theta = Math.max(minAzimuthAngle, Math.min(maxAzimuthAngle, sphericalTarget.theta));
            sphericalTarget.phi = Math.max(minPolarAngle, Math.min(maxPolarAngle, sphericalTarget.phi));
            sphericalTarget.radius = Math.max(this.minDistance, Math.min(this.maxDistance, sphericalTarget.radius));

            // ease values
            spherical.phi += (sphericalTarget.phi - spherical.phi) * ease;
            spherical.theta += (sphericalTarget.theta - spherical.theta) * ease;
            spherical.radius += (sphericalTarget.radius - spherical.radius) * ease;

            // apply pan to target. As offset is relative to target, it also shifts
            this.target.add(panDelta);

            // apply rotation to offset
            let sinPhiRadius = spherical.radius * Math.sin(Math.max(0.000001, spherical.phi));
            offset.x = sinPhiRadius * Math.sin(spherical.theta);
            offset.y = spherical.radius * Math.cos(spherical.phi);
            offset.z = sinPhiRadius * Math.cos(spherical.theta);

            // Apply updated values to object
            object.position.copy(this.target).add(offset);
            object.lookAt(this.target);

            // Apply inertia to values
            sphericalDelta.theta *= inertia;
            sphericalDelta.phi *= inertia;
            panDelta.multiply(inertia);

            // Reset scale every frame to avoid applying scale multiple times
            sphericalDelta.radius = 1;
        };

        // Updates internals with new position
        this.forcePosition = () => {
            offset.copy(object.position).sub(this.target);
            spherical.radius = sphericalTarget.radius = offset.distance();
            spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
            spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));
            object.lookAt(this.target);
        };

        // Everything below here just updates panDelta and sphericalDelta
        // Using those two objects' values, the orbit is calculated

        const rotateStart = new Vec2();
        const panStart = new Vec2();
        const dollyStart = new Vec2();

        let state = STATE.NONE;
        this.mouseButtons = { ORBIT: 0, ZOOM: 1, PAN: 2 };

        function getZoomScale() {
            return Math.pow(0.95, zoomSpeed);
        }

        function panLeft(distance, m) {
            _tempVec3.set(m[0], m[1], m[2]);
            _tempVec3.multiply(-distance);
            panDelta.add(_tempVec3);
        }

        function panUp(distance, m) {
            _tempVec3.set(m[4], m[5], m[6]);
            _tempVec3.multiply(distance);
            panDelta.add(_tempVec3);
        }

        const pan = (deltaX, deltaY) => {
            _tempVec3.copy(object.position).sub(this.target);
            let targetDistance = _tempVec3.distance();
            targetDistance *= Math.tan((((object.fov || 45) / 2) * Math.PI) / 180.0);
            panLeft((2 * deltaX * targetDistance) / element.clientHeight, object.matrix);
            panUp((2 * deltaY * targetDistance) / element.clientHeight, object.matrix);
        };

        const dolly = (dollyScale) => {
            if (this.zoomStyle === 'dolly') sphericalDelta.radius /= dollyScale;
            else {
                object.fov /= dollyScale;
                if (object.type === 'orthographic') object.orthographic();
                else object.perspective();
            }
        };

        function handleAutoRotate() {
            const angle = ((2 * Math.PI) / 60 / 60) * autoRotateSpeed;
            sphericalDelta.theta -= angle;
        }

        function handleMoveRotate(x, y) {
            _tempVec2a.set(x, y);
            _tempVec2b.sub(_tempVec2a, rotateStart).multiply(rotateSpeed);
            sphericalDelta.theta -= (2 * Math.PI * _tempVec2b.x) / element.clientHeight;
            sphericalDelta.phi -= (2 * Math.PI * _tempVec2b.y) / element.clientHeight;
            rotateStart.copy(_tempVec2a);
        }

        function handleMouseMoveDolly(event) {
            _tempVec2a.set(event.clientX, event.clientY);
            _tempVec2b.sub(_tempVec2a, dollyStart);
            if (_tempVec2b.y > 0) {
                dolly(getZoomScale());
            } else if (_tempVec2b.y < 0) {
                dolly(1 / getZoomScale());
            }
            dollyStart.copy(_tempVec2a);
        }

        function handleMovePan(x, y) {
            _tempVec2a.set(x, y);
            _tempVec2b.sub(_tempVec2a, panStart).multiply(panSpeed);
            pan(_tempVec2b.x, _tempVec2b.y);
            panStart.copy(_tempVec2a);
        }

        function handleTouchStartDollyPan(event) {
            if (enableZoom) {
                let dx = event.touches[0].pageX - event.touches[1].pageX;
                let dy = event.touches[0].pageY - event.touches[1].pageY;
                let distance = Math.sqrt(dx * dx + dy * dy);
                dollyStart.set(0, distance);
            }

            if (enablePan) {
                let x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
                let y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
                panStart.set(x, y);
            }
        }

        function handleTouchMoveDollyPan(event) {
            if (enableZoom) {
                let dx = event.touches[0].pageX - event.touches[1].pageX;
                let dy = event.touches[0].pageY - event.touches[1].pageY;
                let distance = Math.sqrt(dx * dx + dy * dy);
                _tempVec2a.set(0, distance);
                _tempVec2b.set(0, Math.pow(_tempVec2a.y / dollyStart.y, zoomSpeed));
                dolly(_tempVec2b.y);
                dollyStart.copy(_tempVec2a);
            }

            if (enablePan) {
                let x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
                let y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
                handleMovePan(x, y);
            }
        }

        const onMouseDown = (event) => {
            if (!this.enabled) return;

            switch (event.button) {
                case this.mouseButtons.ORBIT:
                    if (enableRotate === false) return;
                    rotateStart.set(event.clientX, event.clientY);
                    state = STATE.ROTATE;
                    break;
                case this.mouseButtons.ZOOM:
                    if (enableZoom === false) return;
                    dollyStart.set(event.clientX, event.clientY);
                    state = STATE.DOLLY;
                    break;
                case this.mouseButtons.PAN:
                    if (enablePan === false) return;
                    panStart.set(event.clientX, event.clientY);
                    state = STATE.PAN;
                    break;
            }

            if (state !== STATE.NONE) {
                window.addEventListener('pointermove', onMouseMove, false);
                window.addEventListener('pointerup', onMouseUp, false);
            }
        };

        const onMouseMove = (event) => {
            if (!this.enabled) return;

            switch (state) {
                case STATE.ROTATE:
                    if (enableRotate === false) return;
                    handleMoveRotate(event.clientX, event.clientY);
                    break;
                case STATE.DOLLY:
                    if (enableZoom === false) return;
                    handleMouseMoveDolly(event);
                    break;
                case STATE.PAN:
                    if (enablePan === false) return;
                    handleMovePan(event.clientX, event.clientY);
                    break;
            }
        };

        const onMouseUp = () => {
            window.removeEventListener('pointermove', onMouseMove, false);
            window.removeEventListener('pointerup', onMouseUp, false);
            state = STATE.NONE;
        };

        const onMouseWheel = (event) => {
            if (!this.enabled || !enableZoom || (state !== STATE.NONE && state !== STATE.ROTATE)) return;
            event.stopPropagation();
            event.preventDefault();

            if (event.deltaY < 0) {
                dolly(1 / getZoomScale());
            } else if (event.deltaY > 0) {
                dolly(getZoomScale());
            }
        };

        const onTouchStart = (event) => {
            if (!this.enabled) return;
            event.preventDefault();

            switch (event.touches.length) {
                case 1:
                    if (enableRotate === false) return;
                    rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
                    state = STATE.ROTATE;
                    break;
                case 2:
                    if (enableZoom === false && enablePan === false) return;
                    handleTouchStartDollyPan(event);
                    state = STATE.DOLLY_PAN;
                    break;
                default:
                    state = STATE.NONE;
            }
        };

        const onTouchMove = (event) => {
            if (!this.enabled) return;
            event.preventDefault();
            event.stopPropagation();

            switch (event.touches.length) {
                case 1:
                    if (enableRotate === false) return;
                    handleMoveRotate(event.touches[0].pageX, event.touches[0].pageY);
                    break;
                case 2:
                    if (enableZoom === false && enablePan === false) return;
                    handleTouchMoveDollyPan(event);
                    break;
                default:
                    state = STATE.NONE;
            }
        };

        const onTouchEnd = () => {
            if (!this.enabled) return;
            state = STATE.NONE;
        };

        const onContextMenu = (event) => {
            if (!this.enabled) return;
            event.preventDefault();
        };

        function addHandlers() {
            element.addEventListener('contextmenu', onContextMenu, false);
            element.addEventListener('pointerdown', onMouseDown, false);
            element.addEventListener('wheel', onMouseWheel, { passive: false });
            element.addEventListener('touchstart', onTouchStart, { passive: false });
            element.addEventListener('touchend', onTouchEnd, false);
            element.addEventListener('touchmove', onTouchMove, { passive: false });
        }

        this.flush = function() {
            element.removeEventListener('contextmenu', onContextMenu);
            element.removeEventListener('pointerdown', onMouseDown);
            element.removeEventListener('wheel', onMouseWheel);
            element.removeEventListener('touchstart', onTouchStart);
            element.removeEventListener('touchend', onTouchEnd);
            element.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('pointermove', onMouseMove);
            window.removeEventListener('pointerup', onMouseUp);
        };

        addHandlers();

    }

}

// cleanAttributes()
// computeVertexNormals()
// toIndexed()
// toNonIndexed()

// TODO: mergeGeometries()

const EPSILON = 0.000001;
const POSITION_DECIMALS = 6;
const POSITION_SHIFT = Math.pow(10, POSITION_DECIMALS);

/**
 * Cleans up geometry attributes:
 * - removes zero size triangles
 * - remove duplicate positions from indexed geometry
 *
 * @param {Geometry} geometry
 */
function cleanAttributes(geometry) {

    // Temp Variables
    const pA = new Vec3(), pB = new Vec3(), pC = new Vec3();
    const vA = new Vec3(), vB = new Vec3(), vC = new Vec3();

    // Remove zero sized triangles
    if (geometry.attributes.position) {
        // Indexed
        if (geometry.attributes.index) {
            const removeIndices = [];
            const indices = geometry.attributes.index.data;
            const positions = geometry.attributes.position.data;
            for (let i = 0; i < indices.length; i += 3) {
                pA.fromArray(positions, indices[i + 0] * 3);
                pB.fromArray(positions, indices[i + 1] * 3);
                pC.fromArray(positions, indices[i + 2] * 3);
                const area = triangleArea(pA, pB, pC);
                if (fuzzyFloat(area, 0.0, EPSILON)) removeIndices.push(i, i + 1, i + 2);
            }
            removeIndexValues(geometry, removeIndices);

        // Non indexed
        } else {
            const removeIndices = [];
            const positions = geometry.attributes.position.data;
            for (let i = 0; i < positions.length; i += 9) {
                const index = i / 3;
                pA.fromArray(positions, i);
                pB.fromArray(positions, i + 3);
                pC.fromArray(positions, i + 6);
                const area = triangleArea(pA, pB, pC);
                if (fuzzyFloat(area, 0.0, EPSILON)) removeIndices.push(index, index + 1, index + 2);
            }
            removeIndexValues(geometry, removeIndices);
        }
    }
}

/**
 * Calculates vertex normals based on position triangles
 *
 * @param {Geometry} geometry
 */
function computeVertexNormals(geometry) {
    const positionAttribute = geometry.getPosition();
    if (!positionAttribute) return;

    const positions = positionAttribute.data;
    const normals = new Float32Array(positions.length);
    const countHashes = {};
    const positionNormals = {};

    // Temp Vec3s
    const pA = new Vec3(), pB = new Vec3(), pC = new Vec3();
    const nA = new Vec3(), nB = new Vec3(), nC = new Vec3();
    const cb = new Vec3();

    // Adds position hash to counter
    function addPositionHashes(position, normal) {
        const hash = hashFromVector(position);

        if (!countHashes[hash]) countHashes[hash] = 0;
        countHashes[hash]++;

        if (!positionNormals[hash]) positionNormals[hash] = new Vec3();
        positionNormals[hash].add(normal);
    }

    // Indexed, need to calculate smooth normals
    if (geometry.attributes.index) {
        const indices = geometry.attributes.index.data;

        // Calculate normals for each triangle
        for (let i = 0; i < indices.length; i += 3) {
            const idx0 = indices[i + 0] * 3;
            const idx1 = indices[i + 1] * 3;
            const idx2 = indices[i + 2] * 3;
            pA.fromArray(positions, idx0);
            pB.fromArray(positions, idx1);
            pC.fromArray(positions, idx2);
            calculateNormal(cb, pA, pB, pC);
            addPositionHashes(pA, cb);
            addPositionHashes(pB, cb);
            addPositionHashes(pC, cb);
        }

        // Divide normals by index counts
        for (const hash in countHashes) {
            positionNormals[hash].divide(countHashes[hash]).normalize();
        }

        // Set normals by position
        for (let i = 0; i < normals.length; i += 3) {
            pA.fromArray(positions, i);
            const hash = hashFromVector(pA);
            normals.set(positionNormals[hash], i);
        }

    // Non indexed, unique flat normal for each triangle
    } else {
        // Calculate normals for each triangle
        for (let i = 0; i < positions.length; i += 9) {
            pA.fromArray(positions, i + 0);
            pB.fromArray(positions, i + 3);
            pC.fromArray(positions, i + 6);
            calculateNormal(cb, pA, pB, pC);
            for (let j = 0; j < 3; j++) {
                normals[i + (j * 3) + 0] = cb[0];
                normals[i + (j * 3) + 1] = cb[1];
                normals[i + (j * 3) + 2] = cb[2];
            }
        }
    }

    // Update attribute
    if (geometry.attributes.normal) {
        geometry.attributes.normal.data = normals;
        geometry.attributes.normal.needsUpdate = true;
    // Add attribute
    } else {
        geometry.addAttribute('normal', { size: 3, data: normals });
    }
}

/**
 * Converts geometry from non indexed to indexed, vertices that share data will be collapsed
 *
 * @param {Geometry} geometry
 * @param {Array} ignoreAttributes attributes to ignore during vertex comparison (e.g. 'normal', 'uv', etc)
 */
function toIndexed(geometry, ignoreAttributes = []) {
    const positionAttribute = geometry.getPosition();
    if (!positionAttribute) return;
    if (geometry.attributes.index) toNonIndexed(geometry);

    const attributes = geometry.attributes;
    const positions = attributes.position.data;
    const indices = [];
    const arrays = {};
    const keys = [];
    for (const key in attributes) {
        arrays[key] = [];
        if (!ignoreAttributes.includes(key) || key === 'position') keys.push(key);
    }

    // Process vertices
    for (let i = 0; i < positions.length; i += 3) {
        const currentIndex = i / 3;

        // Check if exists
        let foundVertex = -1;
        for (let idx = 0; idx < indices.length; idx++) {
            for (const key of keys) {
                let matchingKey = true;

                // Current values of attributes[key], compared to stored index values
                const attribute = attributes[key];
                for (let j = 0; j < attributes[key].size; j++) {
                    let current = attribute.data[(currentIndex * attribute.size) + j];
                    let compare = arrays[key][(indices[idx] * attribute.size) + j];
                    if (!fuzzyFloat(current, compare, 0.0001)) {//EPSILON)) {
                        matchingKey = false;
                        break;
                    }
                }

                if (matchingKey) {
                    foundVertex = idx;
                } else {
                    foundVertex = -1;
                    break;
                }
            }

            if (foundVertex !== -1) break;
        }

        // Add Vertex
        if (foundVertex === -1) {
            for (const attributeName in attributes) {
                const attribute = attributes[attributeName];
                for (let j = 0; j < attribute.size; j++) {
                    const current = attribute.data[(currentIndex * attribute.size) + j];
                    arrays[attributeName].push(current);
                }
            }
            indices.push((arrays['position'].length / 3) - 1);
        } else {
            indices.push(indices[foundVertex]);
        }
    };

    // Replace non indexed attributes with new, indexed attributes
    for (const attributeName in attributes) {
        if (attributeName === 'index') continue;
        const attribute = attributes[attributeName];
        const itemSize = attribute.size;
        const newAttribute = {
            size: itemSize,
            data: new attribute.data.constructor(arrays[attributeName])
        };
        geometry.deleteAttribute(attribute);
        geometry.addAttribute(attributeName, newAttribute);
    }

    // Add index attribute
    const indexData = (indices > 65536) ? new Uint32Array(indices) : new Uint16Array(indices);
    geometry.addAttribute('index', { data: indexData });
}

/**
 * Converts geometry from indexed to non indexed
 *
 * @param {Geometry} geometry
 * @returns non-indexed geometry
 */
function toNonIndexed(geometry) {
    if (!geometry.attributes.index) toIndexed(geometry);

    function convertBufferAttribute(attribute, indices) {
        const itemSize = attribute.size;
        const array = attribute.data;
        const array2 = new array.constructor(indices.length * itemSize);
        let index = 0;
        let index2 = 0;
        for (let i = 0; i < indices.length; i++) {
            index = indices[i] * itemSize;
            for (let j = 0; j < itemSize; j++) {
                array2[index2++] = array[index++];
            }
        }
        return array2;
    }

    const indices = geometry.attributes.index.data;
    const attributes = geometry.attributes;
    for (const attributeName in attributes) {
        if (attributeName === 'index') continue;
        const attribute = attributes[attributeName];
        const newAttribute = { size: attribute.size, data: convertBufferAttribute(attribute, indices) };
        geometry.deleteAttribute(attribute);
        geometry.addAttribute(attributeName, newAttribute);
    }
    geometry.deleteAttribute(geometry.attributes.index);
}

/******************** INTERNAL ********************/

/**
 * Remove values (by index) from geometry.attributes
 *
 * @param {Geometry} geometry geometry to remove indices from
 * @param {Array} removeIndices array of integer index values to remove
 * @returns
 */
function removeIndexValues(geometry, removeIndices = []) {
    if (removeIndices.length === 0) return;

    // Indexed (remove index only)
    if (geometry.attributes.index) {
        const attribute = geometry.attributes.index;
        const array2 = [];
        for (let i = 0; i < attribute.data.length; i++) {
            if (removeIndices.includes(i)) continue;
            array2.push(attribute.data[i]);
        }
        attribute.data = new attribute.data.constructor(array2);
        attribute.needsUpdate = true;

    // Non indexed (remove all attributes at index)
    } else {
        // Build new data array, only include un-skipped index values
        for (const attributeName in geometry.attributes) {
            const attribute = geometry.attributes[attributeName];
            const array2 = [];
            for (let i = 0; i < attribute.data.length; i += attribute.size) {
                if (removeIndices.includes(i / attribute.size)) continue;
                for (let j = 0; j < attribute.size; j++) array2.push(attribute.data[i + j]);
            }
            attribute.data = new attribute.data.constructor(array2);
            attribute.needsUpdate = true;
        }
    }
}

/**
 * Generates hash string from Number
 *
 * @param {*} num
 * @param {*} shift
 * @returns
 */
function hashFromNumber(num, shift = POSITION_SHIFT) {
    let roundedNumber = round(num * shift);
    if (roundedNumber == 0) roundedNumber = 0; /* prevent -0 (signed 0 can effect Math.atan2(), etc.) */
    return `${roundedNumber}`;
}

/**
 * Generates hash string from Vector3
 *
 * @param {Vec3} vector
 * @param {*} shift
 * @returns
 */
function hashFromVector(vector, shift = POSITION_SHIFT) {
    return `${hashFromNumber(vector[0], shift)},${hashFromNumber(vector[1], shift)},${hashFromNumber(vector[2], shift)}`;
}

/**
 * Rounds x to integer
 *
 * @param {Number} x
 * @returns
 */
function round(x) {
    return (x + ((x > 0) ? 0.5 : -0.5)) << 0;
}

var GeomUtils$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    cleanAttributes: cleanAttributes,
    computeVertexNormals: computeVertexNormals,
    toIndexed: toIndexed,
    toNonIndexed: toNonIndexed
});

class Plane extends Geometry {

    constructor({
        width = 1,
        height = 1,
        widthSegments = 1,
        heightSegments = 1,
        attributes = {}
    } = {}) {
        const wSegs = widthSegments;
        const hSegs = heightSegments;

        // Determine length of arrays
        const num = (wSegs + 1) * (hSegs + 1);
        const numIndices = wSegs * hSegs * 6;

        // Generate empty arrays once
        const position = new Float32Array(num * 3);
        const normal = new Float32Array(num * 3);
        const uv = new Float32Array(num * 2);
        const index = numIndices > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

        Plane.buildPlane(position, normal, uv, index, width, height, 0, wSegs, hSegs);

        Object.assign(attributes, {
            position: { size: 3, data: position },
            normal: { size: 3, data: normal },
            uv: { size: 2, data: uv },
            index: { data: index },
        });

        super(attributes);
    }

    static buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, u = 0, v = 1, w = 2, uDir = 1, vDir = -1, i = 0, ii = 0) {
        const io = i;
        const segW = width / wSegs;
        const segH = height / hSegs;

        for (let iy = 0; iy <= hSegs; iy++) {
            let y = iy * segH - height / 2;
            for (let ix = 0; ix <= wSegs; ix++, i++) {
                let x = ix * segW - width / 2;

                position[i * 3 + u] = x * uDir;
                position[i * 3 + v] = y * vDir;
                position[i * 3 + w] = depth / 2;

                normal[i * 3 + u] = 0;
                normal[i * 3 + v] = 0;
                normal[i * 3 + w] = depth >= 0 ? 1 : -1;

                uv[i * 2] = ix / wSegs;
                uv[i * 2 + 1] = 1 - iy / hSegs;

                if (iy === hSegs || ix === wSegs) continue;
                let a = io + ix + iy * (wSegs + 1);
                let b = io + ix + (iy + 1) * (wSegs + 1);
                let c = io + ix + (iy + 1) * (wSegs + 1) + 1;
                let d = io + ix + iy * (wSegs + 1) + 1;

                index[ii * 6] = a;
                index[ii * 6 + 1] = b;
                index[ii * 6 + 2] = d;
                index[ii * 6 + 3] = b;
                index[ii * 6 + 4] = c;
                index[ii * 6 + 5] = d;
                ii++;
            }
        }
    }

}

class Box extends Geometry {

    constructor({
        width = 1,
        height = 1,
        depth = 1,
        widthSegments = 1,
        heightSegments = 1,
        depthSegments = 1,
        attributes = {}
    } = {}) {
        const wSegs = widthSegments;
        const hSegs = heightSegments;
        const dSegs = depthSegments;

        const num = (wSegs + 1) * (hSegs + 1) * 2 + (wSegs + 1) * (dSegs + 1) * 2 + (hSegs + 1) * (dSegs + 1) * 2;
        const numIndices = (wSegs * hSegs * 2 + wSegs * dSegs * 2 + hSegs * dSegs * 2) * 6;

        const position = new Float32Array(num * 3);
        const normal = new Float32Array(num * 3);
        const uv = new Float32Array(num * 2);
        const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

        let i = 0;
        let ii = 0;

        // left, right
        Plane.buildPlane(position, normal, uv, index, depth, height, width, dSegs, hSegs, 2, 1, 0, -1, -1, i, ii);
        i += (dSegs + 1) * (hSegs + 1);
        ii += dSegs * hSegs;
        Plane.buildPlane(position, normal, uv, index, depth, height, -width, dSegs, hSegs, 2, 1, 0, 1, -1, i, ii);
        i += (dSegs + 1) * (hSegs + 1);
        ii += dSegs * hSegs;

        // top, bottom
        Plane.buildPlane(position, normal, uv, index, width, depth, height, dSegs, wSegs, 0, 2, 1, 1, 1, i, ii);
        i += (wSegs + 1) * (dSegs + 1);
        ii += wSegs * dSegs;
        Plane.buildPlane(position, normal, uv, index, width, depth, -height, dSegs, wSegs, 0, 2, 1, 1, -1, i, ii);
        i += (wSegs + 1) * (dSegs + 1);
        ii += wSegs * dSegs;

        // front, back
        Plane.buildPlane(position, normal, uv, index, width, height, -depth, wSegs, hSegs, 0, 1, 2, -1, -1, i, ii);
        i += (wSegs + 1) * (hSegs + 1);
        ii += wSegs * hSegs;
        Plane.buildPlane(position, normal, uv, index, width, height, depth, wSegs, hSegs, 0, 1, 2, 1, -1, i, ii);

        Object.assign(attributes, {
            position: { size: 3, data: position },
            normal: { size: 3, data: normal },
            uv: { size: 2, data: uv },
            index: { data: index },
        });

        super(attributes);
    }

}

class Cylinder extends Geometry {

    constructor({
        radiusTop = 0.5,
        radiusBottom = 0.5,
        height = 1,
        radialSegments = 8,
        heightSegments = 1,
        openEnded = false,
        thetaStart = 0,
        thetaLength = Math.PI * 2,
        attributes = {},
    } = {}) {
        const rSegs = radialSegments;
        const hSegs = heightSegments;
        const tStart = thetaStart;
        const tLength = thetaLength;

        const numCaps = openEnded ? 0 : radiusBottom && radiusTop ? 2 : 1;
        const num = (rSegs + 1) * (hSegs + 1 + numCaps) + numCaps;
        const numIndices = rSegs * hSegs * 6 + numCaps * rSegs * 3;

        const position = new Float32Array(num * 3);
        const normal = new Float32Array(num * 3);
        const uv = new Float32Array(num * 2);
        const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

        let i = 0;
        let ii = 0;
        const indexArray = [];

        addHeight();
        if (!openEnded) {
            if (radiusTop) addCap(true);
            if (radiusBottom) addCap(false);
        }

        function addHeight() {
            let x, y;
            const n = new Vec3();
            const slope = (radiusBottom - radiusTop) / height;

            for (y = 0; y <= hSegs; y++) {
                const indexRow = [];
                const v = y / hSegs;

                const r = v * (radiusBottom - radiusTop) + radiusTop;
                for (x = 0; x <= rSegs; x++) {
                    const u = x / rSegs;
                    const theta = u * tLength + tStart;
                    const sinTheta = Math.sin(theta);
                    const cosTheta = Math.cos(theta);

                    position.set([ r * sinTheta, (0.5 - v) * height, r * cosTheta ], i * 3);
                    n.set(sinTheta, slope, cosTheta).normalize();
                    normal.set([ n.x, n.y, n.z ], i * 3);
                    uv.set([ u, 1 - v ], i * 2);
                    indexRow.push(i++);
                }
                indexArray.push(indexRow);
            }

            for (x = 0; x < rSegs; x++) {
                for (y = 0; y < hSegs; y++) {
                    const a = indexArray[y][x];
                    const b = indexArray[y + 1][x];
                    const c = indexArray[y + 1][x + 1];
                    const d = indexArray[y][x + 1];

                    index.set([ a, b, d, b, c, d ], ii * 3);
                    ii += 2;
                }
            }
        }

        function addCap(isTop) {
            let x;
            const r = isTop === true ? radiusTop : radiusBottom;
            const sign = isTop === true ? 1 : -1;

            const centerIndex = i;
            position.set([ 0, 0.5 * height * sign, 0 ], i * 3);
            normal.set([ 0, sign, 0 ], i * 3);
            uv.set([ 0.5, 0.5 ], i * 2);
            i++;

            for (x = 0; x <= rSegs; x++) {
                const u = x / rSegs;
                const theta = u * tLength + tStart;
                const cosTheta = Math.cos(theta);
                const sinTheta = Math.sin(theta);

                position.set([ r * sinTheta, 0.5 * height * sign, r * cosTheta ], i * 3);
                normal.set([ 0, sign, 0 ], i * 3);
                uv.set([ cosTheta * 0.5 + 0.5, sinTheta * 0.5 * sign + 0.5 ], i * 2);
                i++;
            }

            for (x = 0; x < rSegs; x++) {
                const j = centerIndex + x + 1;
                if (isTop) {
                    index.set([ j, j + 1, centerIndex ], ii * 3);
                } else {
                    index.set([ j + 1, j, centerIndex ], ii * 3);
                }
                ii++;
            }
        }

        Object.assign(attributes, {
            position: { size: 3, data: position },
            normal: { size: 3, data: normal },
            uv: { size: 2, data: uv },
            index: { data: index },
        });

        super(attributes);
    }
}

class Sphere extends Geometry {

    constructor({
        radius = 0.5,
        widthSegments = 16,
        heightSegments = Math.ceil(widthSegments * 0.5),
        phiStart = 0,
        phiLength = Math.PI * 2,
        thetaStart = 0,
        thetaLength = Math.PI,
        attributes = {},
    } = {}) {
        const wSegs = widthSegments;
        const hSegs = heightSegments;
        const pStart = phiStart;
        const pLength = phiLength;
        const tStart = thetaStart;
        const tLength = thetaLength;

        const num = (wSegs + 1) * (hSegs + 1);
        const numIndices = wSegs * hSegs * 6;

        const position = new Float32Array(num * 3);
        const normal = new Float32Array(num * 3);
        const uv = new Float32Array(num * 2);
        const index = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

        let i = 0;
        let iv = 0;
        let ii = 0;
        let te = tStart + tLength;
        const grid = [];

        let n = new Vec3();

        for (let iy = 0; iy <= hSegs; iy++) {
            let vRow = [];
            let v = iy / hSegs;
            for (let ix = 0; ix <= wSegs; ix++, i++) {
                let u = ix / wSegs;
                let x = -radius * Math.cos(pStart + u * pLength) * Math.sin(tStart + v * tLength);
                let y = radius * Math.cos(tStart + v * tLength);
                let z = radius * Math.sin(pStart + u * pLength) * Math.sin(tStart + v * tLength);

                position[i * 3] = x;
                position[i * 3 + 1] = y;
                position[i * 3 + 2] = z;

                n.set(x, y, z).normalize();
                normal[i * 3] = n.x;
                normal[i * 3 + 1] = n.y;
                normal[i * 3 + 2] = n.z;

                uv[i * 2] = u;
                uv[i * 2 + 1] = 1 - v;

                vRow.push(iv++);
            }

            grid.push(vRow);
        }

        for (let iy = 0; iy < hSegs; iy++) {
            for (let ix = 0; ix < wSegs; ix++) {
                let a = grid[iy][ix + 1];
                let b = grid[iy][ix];
                let c = grid[iy + 1][ix];
                let d = grid[iy + 1][ix + 1];

                if (iy !== 0 || tStart > 0) {
                    index[ii * 3] = a;
                    index[ii * 3 + 1] = b;
                    index[ii * 3 + 2] = d;
                    ii++;
                }
                if (iy !== hSegs - 1 || te < Math.PI) {
                    index[ii * 3] = b;
                    index[ii * 3 + 1] = c;
                    index[ii * 3 + 2] = d;
                    ii++;
                }
            }
        }

        Object.assign(attributes, {
            position: { size: 3, data: position },
            normal: { size: 3, data: normal },
            uv: { size: 2, data: uv },
            index: { data: index },
        });

        super(attributes);
    }

}

// https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js


class Torus extends Geometry {

    constructor({
        radius = 0.5,
        tube = 0.2,
        radialSegments = 8,
        tubularSegments = 6,
        arc = Math.PI * 2,
        attributes = {}
    } = {}) {
        const num = (radialSegments + 1) * (tubularSegments + 1);
        const numIndices = radialSegments * tubularSegments * 6;

        const vertices = new Float32Array(num * 3);
        const normals = new Float32Array(num * 3);
        const uvs = new Float32Array(num * 2);
        const indices = num > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

        const center = new Vec3();
        const vertex = new Vec3();
        const normal = new Vec3();

        // Generate vertices, normals and uvs
        let idx = 0;
        for (let j = 0; j <= radialSegments; j++) {
            for (let i = 0; i <= tubularSegments; i++, idx++) {
                const u = (i / tubularSegments) * arc;
                const v = (j / radialSegments) * Math.PI * 2;

                // vertex
                vertex.x = (radius + tube * Math.cos(v)) * Math.cos(u);
                vertex.y = (radius + tube * Math.cos(v)) * Math.sin(u);
                vertex.z = tube * Math.sin(v);
                vertices.set([ vertex.x, vertex.y, vertex.z ], idx * 3);

                // normal
                center.x = radius * Math.cos(u);
                center.y = radius * Math.sin(u);
                normal.sub(vertex, center).normalize();
                normals.set([ normal.x, normal.y, normal.z ], idx * 3);

                // uv
                uvs.set([ i / tubularSegments, j / radialSegments ], idx * 2);
            }
        }

        // Generate indices
        idx = 0;
        for (let j = 1; j <= radialSegments; j++) {
            for (let i = 1; i <= tubularSegments; i++) {
                // indices
                const a = (tubularSegments + 1) * j + i - 1;
                const b = (tubularSegments + 1) * (j - 1) + i - 1;
                const c = (tubularSegments + 1) * (j - 1) + i;
                const d = (tubularSegments + 1) * j + i;

                // faces
                indices.set([ a, b, d ], (idx * 6));
                indices.set([ b, c, d ], (idx * 6) + 3);

                idx++;
            }
        }

        Object.assign(attributes, {
            position: { size: 3, data: vertices },
            normal: { size: 3, data: normals },
            uv: { size: 2, data: uvs },
            index: { data: indices },
        });

        super(attributes);
    }

}

// helper variables
const vertex = new Vec3();
const normal = new Vec3();
const uv = new Vec2();
const point = new Vec3();

class Tube extends Geometry {

    constructor({
        path,
        radius = 1,
        tubularSegments = 64,
        radialSegments = 8,
        closed = false,
        attributes = {}
    } = {}) {
        super(attributes);

        this.path = path;
        this.radius = radius;
        this.tubularSegments = tubularSegments;
        this.radialSegments = radialSegments;
        this.closed = closed;

        this.frenetFrames = path.computeFrenetFrames(tubularSegments, closed);

        const numVertices = (tubularSegments + 1) * (radialSegments + 1);
        const numIndices = tubularSegments * radialSegments * 6;
        this.positions = new Float32Array(numVertices * 3);
        this.normals = new Float32Array(numVertices * 3);
        this.uvs = new Float32Array(numVertices * 2);
        this.indices = numVertices > 65536 ? new Uint32Array(numIndices) : new Uint16Array(numIndices);

        // create buffer data
        this.#generateAttributes();
        this.#generateIndices();

        this.addAttribute('position', { size: 3, data: this.positions });
        this.addAttribute('normal', { size: 3, data: this.normals });
        this.addAttribute('uv', { size: 2, data: this.uvs });
        this.addAttribute('index', { size: 1, data: this.indices });
    }

    #generateAttributes() {
        for (let i = 0; i <= this.tubularSegments; i++) {
            let ci = i;
            if (i === this.tubularSegments) {
                // if the geometry is not closed, generate the last row of vertices and normals
                // at the regular position on the given path
                // if the geometry is closed, duplicate the first row of vertices and normals (uvs will differ)
                ci = this.closed ? 0 : this.tubularSegments;
            }

            this.path.getPointAt(ci / this.tubularSegments, point);
            // retrieve corresponding normal and binormal
            const N = this.frenetFrames.normals[ci];
            const B = this.frenetFrames.binormals[ci];

            // generate normals and vertices for the current segment
            for (let j = 0; j <= this.radialSegments; j++) {
                const v = (j / this.radialSegments) * Math.PI * 2;
                const sin = Math.sin(v);
                const cos = -Math.cos(v);

                const idx = i * (this.radialSegments + 1) + j;

                // normal
                normal.x = cos * N.x + sin * B.x;
                normal.y = cos * N.y + sin * B.y;
                normal.z = cos * N.z + sin * B.z;
                // normal.normalize(); // ???
                this.normals.set(normal, idx * 3);

                // vertex
                vertex.x = point.x + this.radius * normal.x;
                vertex.y = point.y + this.radius * normal.y;
                vertex.z = point.z + this.radius * normal.z;
                this.positions.set(vertex, idx * 3);

                // uv
                uv.x = i / this.tubularSegments;
                uv.y = j / this.radialSegments;
                this.uvs.set(uv, idx * 2);
            }
        }
    }

    #generateIndices() {
        for (let j = 1; j <= this.tubularSegments; j++) {
            for (let i = 1; i <= this.radialSegments; i++) {
                const a = (this.radialSegments + 1) * (j - 1) + (i - 1);
                const b = (this.radialSegments + 1) * j + (i - 1);
                const c = (this.radialSegments + 1) * j + i;
                const d = (this.radialSegments + 1) * (j - 1) + i;

                const idx = (j - 1) * this.radialSegments + (i - 1);
                this.indices.set([ a, b, d, b, c, d ], idx * 6);
            }
        }
    }

}

/**
 * @description bin-packing
 * @about       Binary tree based 2D bin-packing
 * @author      jakesgordon
 * @license     MIT - Copyright (c) 2016 Jake Gordon
 * @source      https://github.com/jakesgordon/bin-packing
 * @version:    Jan 4, 2016
 */

class Packer {

    constructor(w, h) {
        this.root = { x: 0, y: 0, w: w, h: h };
    }

    fit(blocks) {
        let node, block;
        for (let n = 0; n < blocks.length; n++) {
            block = blocks[n];
            node = this.findNode(this.root, block.w, block.h);
            if (!node) continue;
            block.fit = this.splitNode(node, block.w, block.h);
        }
    }

    findNode(root, w, h) {
        if (root.used) return (this.findNode(root.right, w, h) || this.findNode(root.down, w, h));
        else if ((w <= root.w) && (h <= root.h)) return root;
        else return null;
    }

    splitNode(node, w, h) {
        node.used = true;
        node.down  = { x: node.x,     y: node.y + h, w: node.w,     h: node.h - h };
        node.right = { x: node.x + w, y: node.y,     w: node.w - w, h: h          };
        return node;
    }

}

const MAX_SIZE = 4096;

class Atlas {

    #boxes = [];
    #images = [];
    #layers = 0;
    #size = 1;

    constructor(border = 1) {
        const gl = renderer.gl;

        this.border = border;
        this.texture = new Texture({
            image: [],
            target: gl.TEXTURE_2D_ARRAY
        });
    }

    length() {
        return this.#layers;
    }

    add(image) {
        if (!image) return;

        // Load from String
        if (typeof image === 'string') image = ImageLoader.load(image);

        // Add to Images
        if (!this.#images.includes(image)) this.#images.push(image);

        // Image Loaded?
        if (!image.complete) {
            const self = this;
            const onload = image.onload;
            image.onload = function() {
                if (typeof onload === 'function') onload();
                self.add(image);
            };
            return;
        }

        // Boxes
        const boxes = [];
        for (let i = 0; i < this.#images.length; i++) {
            const img = this.#images[i];
            if (!img.complete || !img.naturalWidth || !img.naturalHeight) continue;
            if (img.naturalWidth > MAX_SIZE || img.naturalHeight > MAX_SIZE) continue;
            boxes.push({
                w: img.width + (this.border * 2),
                h: img.height + (this.border * 2),
                image: img,
                fit: undefined,
            });
        }

        // Pack
        this.#boxes.length = 0;
        this.#layers = 0;
        while (boxes.length > 0) {
            // Sort
            boxes.sort((a, b) => { return Math.max(b.w, b.h) - Math.max(a.w, a.h); });
            boxes.sort((a, b) => { return Math.min(b.w, b.h) - Math.min(a.w, a.h); });
            boxes.sort((a, b) => { return b.h - a.h; });
            boxes.sort((a, b) => { return b.w - a.w; });

            // Pack
            let increaseSize;
            do {
                const packer = new Packer(this.#size, this.#size);
                packer.fit(boxes);

                // Increase Size
                increaseSize = false;
                if (this.#size < MAX_SIZE) {
                    let allFit = true;
                    for (let i = 0; i < boxes.length; i++) allFit = allFit && boxes[i].fit;
                    if (!allFit) {
                        increaseSize = true;
                        this.#size = Math.min(this.#size + this.#size, MAX_SIZE);
                    }
                }
                if (increaseSize) {
                    for (let i = 0; i < boxes.length; i++) boxes[i].fit = undefined;
                }
            } while (increaseSize);

            // Layer
            for (let i = boxes.length - 1; i >= 0; i--) {
                const box = boxes[i];
                if (box.fit) {
                    const index = this.#images.indexOf(box.image);
                    if (index < 0) continue;
                    this.#boxes[index] = {
                        x: box.fit.x,
                        y: box.fit.y,
                        w: box.w,
                        h: box.h,
                        image: box.image,
                        layer: this.#layers,
                    };
                    boxes.splice(i, 1);
                }
            }

            // Count
            this.#layers++;
        }

        renderCanvas(this, this.#size, this.#boxes);
    }

}

/******************** INTERNAL ********************/

let _canvas;
let _ctx;

function renderCanvas(atlas, size, boxes) {
    if (!_canvas) _canvas = document.createElement('canvas');
    if (!_ctx) _ctx = _canvas.getContext('2d');
    const canvas = _canvas;
    const ctx = _ctx;
    canvas.width = size;
    canvas.height = size;

    const texture = atlas.texture;
    texture.image = [];
    for (let i = 0; i < atlas.length(); i++) {

        // Draw
        ctx.clearRect(0, 0, size, size);
        for (let j = 0; j < boxes.length; j++) {
            const box = boxes[j];
            if (box.layer !== i) continue;
            ctx.fillStyle = `rgb(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`;
            ctx.fillRect(box.x, box.y, box.w, box.h);
            ctx.drawImage(box.image,
                box.x + (atlas.border),
                box.y + (atlas.border),
                box.w - (atlas.border * 2),
                box.h - (atlas.border * 2)
            );
        }

        // Atlas
        const image = new Image(size, size);
        texture.image.push(image);
        image.src = canvas.toDataURL();
        image.onload = () => texture.needsUpdate = true;

    }
}

const tmpVec3A = new Vec3();
const tmpVec3B = new Vec3();
const tmpVec3C = new Vec3();
const tmpVec3D = new Vec3();

const tmpQuatA = new Quat();
const tmpQuatB = new Quat();
const tmpQuatC = new Quat();
const tmpQuatD = new Quat();

class GLTFAnimation {
    constructor(data, weight = 1) {
        this.data = data;
        this.elapsed = 0;
        this.weight = weight;

        // Set to false to not apply modulo to elapsed against duration
        this.loop = true;

        // Find starting time as exports from blender (perhaps others too) don't always start from 0
        this.startTime = data.reduce((a, { times }) => Math.min(a, times[0]), Infinity);
        // Get largest final time in all channels to calculate duration
        this.endTime = data.reduce((a, { times }) => Math.max(a, times[times.length - 1]), 0);
        this.duration = this.endTime - this.startTime;
    }

    update(totalWeight = 1, isSet) {
        const weight = isSet ? 1 : this.weight / totalWeight;
        const elapsed = !this.duration
            ? 0
            : (this.loop ? this.elapsed % this.duration : Math.min(this.elapsed, this.duration - 0.001)) + this.startTime;

        this.data.forEach(({ node, transform, interpolation, times, values }) => {
            if (!this.duration) {
                let val = tmpVec3A;
                let size = 3;
                if (transform === 'quaternion') {
                    val = tmpQuatA;
                    size = 4;
                }
                val.fromArray(values, 0);
                if (size === 4) node[transform].slerp(val, weight);
                else node[transform].lerp(val, weight);
                return;
            }

            // Get index of two time values elapsed is between
            const prevIndex =
                Math.max(
                    1,
                    times.findIndex((t) => t > elapsed)
                ) - 1;
            const nextIndex = prevIndex + 1;

            // Get linear blend/alpha between the two
            let alpha = (elapsed - times[prevIndex]) / (times[nextIndex] - times[prevIndex]);
            if (interpolation === 'STEP') alpha = 0;

            let prevVal = tmpVec3A;
            let prevTan = tmpVec3B;
            let nextTan = tmpVec3C;
            let nextVal = tmpVec3D;
            let size = 3;

            if (transform === 'quaternion') {
                prevVal = tmpQuatA;
                prevTan = tmpQuatB;
                nextTan = tmpQuatC;
                nextVal = tmpQuatD;
                size = 4;
            }

            if (interpolation === 'CUBICSPLINE') {
                // Get the prev and next values from the indices
                prevVal.fromArray(values, prevIndex * size * 3 + size * 1);
                prevTan.fromArray(values, prevIndex * size * 3 + size * 2);
                nextTan.fromArray(values, nextIndex * size * 3 + size * 0);
                nextVal.fromArray(values, nextIndex * size * 3 + size * 1);

                // interpolate for final value
                prevVal = this.cubicSplineInterpolate(alpha, prevVal, prevTan, nextTan, nextVal);
                if (size === 4) prevVal.normalize();
            } else {
                // Get the prev and next values from the indices
                prevVal.fromArray(values, prevIndex * size);
                nextVal.fromArray(values, nextIndex * size);

                // interpolate for final value
                if (size === 4) prevVal.slerp(nextVal, alpha);
                else prevVal.lerp(nextVal, alpha);
            }

            // interpolate between multiple possible animations
            if (size === 4) node[transform].slerp(prevVal, weight);
            else node[transform].lerp(prevVal, weight);
        });
    }

    cubicSplineInterpolate(t, prevVal, prevTan, nextTan, nextVal) {
        const t2 = t * t;
        const t3 = t2 * t;

        const s2 = 3 * t2 - 2 * t3;
        const s3 = t3 - t2;
        const s0 = 1 - s2;
        const s1 = s3 - t2 + t;

        for (let i = 0; i < prevVal.length; i++) {
            prevVal[i] = s0 * prevVal[i] + s1 * (1 - t) * prevTan[i] + s2 * nextVal[i] + s3 * t * nextTan[i];
        }

        return prevVal;
    }
}

class Vec4 extends Array {

    constructor(x = 0, y = x, z = x, w = x) {
        super(x, y, z, w);
        return this;
    }

    get x() {
        return this[0];
    }

    get y() {
        return this[1];
    }

    get z() {
        return this[2];
    }

    get w() {
        return this[3];
    }

    set x(v) {
        this[0] = v;
    }

    set y(v) {
        this[1] = v;
    }

    set z(v) {
        this[2] = v;
    }

    set w(v) {
        this[3] = v;
    }

    set(x, y = x, z = x, w = x) {
        if (x.length) return this.copy(x);
        set$3(this, x, y, z, w);
        return this;
    }

    copy(v) {
        copy$3(this, v);
        return this;
    }

    normalize() {
        normalize$2(this, this);
        return this;
    }

    multiply(v) {
        scale$3(this, this, v);
        return this;
    }

    dot(v) {
        return dot$2(this, v);
    }

    fromArray(a, o = 0) {
        this[0] = a[o];
        this[1] = a[o + 1];
        this[2] = a[o + 2];
        this[3] = a[o + 3];
        return this;
    }

    toArray(a = [], o = 0) {
        a[o] = this[0];
        a[o + 1] = this[1];
        a[o + 2] = this[2];
        a[o + 3] = this[3];
        return a;
    }

    log(description = '') {
        if (description !== '') description += ' - ';
        console.log(`${description}X: ${this.x}, Y: ${this.y}, Z: ${this.z}, W: ${this.w}`);
    }

}

class InstancedMesh extends Mesh {

    constructor(...args) {
        super(...args);

        // Skip renderer frustum culling
        this.frustumCulled = false;
        this.isInstancedMesh = true;
    }

    addFrustumCull() {
        this.instanceTransforms = null;
        this.instanceLightmapScaleOffset = null;
        this.totalInstanceCount = 0;
        this.frustumCullFunction = null;
        this.instanceRenderList = null;

        // Get instanced mesh
        if (!this.geometry.attributes.instanceMatrix) {
            const name = this.name ?? '';
            console.error(`InstanceMesh.addFrustumCull: Mesh "${name}" missing instanceMatrix attribute, unable to frustum cull`);
        }

        // Make list of transforms from instanceMatrix
        const matrixData = this.geometry.attributes.instanceMatrix.data;
        this.instanceTransforms = [];
        for (let i = 0, j = 0; i < matrixData.length; i += 16, j++) {
            const transform = new Transform();
            transform.index = j;
            transform.matrix.fromArray(matrixData, i);
            transform.decompose();
            this.instanceTransforms.push(transform);
            // Add transforms to parent to update world matrices
            transform.setParent(this.parent);
        }
        this.totalInstanceCount = this.instanceTransforms.length;

        // Check for lightmap attributes - attach to transform
        if (!!this.geometry.attributes.lightmapScaleOffset) {
            const lightmapData = this.geometry.attributes.lightmapScaleOffset.data;
            for (let i = 0, j = 0; i < lightmapData.length; i += 4, j++) {
                this.instanceTransforms[j].lightmapData = new Vec4().fromArray(lightmapData, i);
            }
        }

        this.frustumCullFunction = ({ camera }) => {
            // Frustum cull transforms each frame - pass world matrix
            this.instanceRenderList = [];
            this.instanceTransforms.forEach((transform) => {
                if (!camera.frustumIntersectsMesh(this, transform.worldMatrix)) return;
                this.instanceRenderList.push(transform);
            });

            // Update instanceMatrix and instancedCount with visible
            this.instanceRenderList.forEach((transform, i) => {
                transform.matrix.toArray(this.geometry.attributes.instanceMatrix.data, i * 16);

                // Update lightmap attr
                if (transform.lightmapData) {
                    transform.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data, i * 4);
                    this.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
                }
            });
            this.geometry.instancedCount = this.instanceRenderList.length;
            this.geometry.attributes.instanceMatrix.needsUpdate = true;
        };

        this.onBeforeRender(this.frustumCullFunction);
    }

    removeFrustumCull() {
        this.offBeforeRender(this.frustumCullFunction);
        this.geometry.instancedCount = this.totalInstanceCount;
        this.instanceTransforms.forEach((transform, i) => {
            transform.matrix.toArray(this.geometry.attributes.instanceMatrix.data, i * 16);

            // Update lightmap attribute
            if (transform.lightmapData) {
                transform.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data, i * 4);
                this.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
            }
        });
        this.geometry.attributes.instanceMatrix.needsUpdate = true;
    }
}

let _texture$1;
function emptyTexture$1() {
    if (!_texture$1 || !_texture$1.isTexture) _texture$1 = new Texture();
    return _texture$1;
}

class Uber extends Program {

    #flatShading = false;

    #mapDiffuse = 0;

    #normalIntensity = 0.0;
    #opacity = 1.0;
    #tint = [ 1, 1, 1 ];
    #tintIntensity = 0.0;
    #wireIntensity = 0.0;

    constructor({
        texture = emptyTexture$1(),
        textureNormal = emptyTexture$1(),

        flatShading = false,
        normalIntensity = 0.0,
        normalScale = 0.0,
        opacity = 1.0,
        tint = [ 1, 1, 1 ],
        tintIntensity = 0.0,
        wireIntensity = 0.0,
        ...programProps
    } = {}) {
        super({
            ...programProps,
            vertex: defaultVertex$5,
            fragment: defaultFragment$5,
            uniforms: {
                tDiffuse: { value: texture },
                tNormal: { value: textureNormal },
                uNormalScale: { value: normalScale },
                uNormalUVScale: { value: 1 },
                uNormalIntensity: { value: normalIntensity },
                uOpacity: { value: opacity },
                uTime: { value: 0 },
                uTint: { value: tint },
                uTintIntensity: { value: tintIntensity },
                uWireIntensity: { value: wireIntensity },
            },
            defines: {
                FLAT_SHADED: flatShading,
            }
        });

        this.#flatShading = flatShading;
        this.#mapDiffuse = texture;
        this.#normalIntensity = normalIntensity;
        this.#opacity = opacity;
        this.#tint = tint;
        this.#tintIntensity = tintIntensity;
        this.#wireIntensity = wireIntensity;
    }

    rebuildProgram() {
        this.buildProgram({
            vertex: defaultVertex$5,
            fragment: defaultFragment$5,
            uniforms: {
                tDiffuse: { value: this.#mapDiffuse },
                uNormalIntensity: { value: this.#normalIntensity },
                uOpacity: { value: this.#opacity },
                uTint: { value: this.#tint },
                uTintIntensity: { value: this.#tintIntensity },
                uWireIntensity: { value: this.#wireIntensity },
            },
            defines: {
                FLAT_SHADED: this.#flatShading,
            }
        });
    }

    get flatShading() { return this.#flatShading; }

    set flatShading(flatShading) {
        if (this.#flatShading === flatShading) return;
        this.#flatShading = flatShading;
        this.rebuildProgram();
    }

    get normalIntensity() { return this.#normalIntensity; }

    set normalIntensity(normalIntensity) {
        this.uniforms.uNormalIntensity.value = normalIntensity;
    }

    get opacity() { return this.#opacity; }

    set opacity(opacity) {
        this.uniforms.uOpacity.value = opacity;
    }

    get tint() { return this.#tint; }

    set tint(tint) {
        this.uniforms.uTint.value = tint;
    }

    get tintIntensity() { return this.#tintIntensity; }

    set tintIntensity(tintIntensity) {
        this.uniforms.uTintIntensity.value = tintIntensity;
    }

    get wireIntensity() { return this.#wireIntensity; }

    set wireIntensity(wireIntensity) {
        this.uniforms.uWireIntensity.value = wireIntensity;
    }

}

/******************** INTERNAL ********************/

const defaultVertex$5 = /* glsl */ `#version 300 es
    in vec2 uv;
    in vec3 position;
    in vec3 normal;

    vec3 bary[3] = vec3[](vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0));

    uniform mat3 normalMatrix;
    uniform mat4 modelMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    #ifdef FLAT_SHADED
        flat out vec3 vNormal;
    #else
        out vec3 vNormal;
    #endif

    out vec3 vBary;
    out vec3 vMPos;
    out vec2 vUv;

    void main() {
        vBary = bary[int(mod(float(gl_VertexID), 3.0))];
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vMPos = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const defaultFragment$5 = /* glsl */ `#version 300 es
    precision highp float;

    uniform float uNormalIntensity;
    uniform float uOpacity;
    uniform vec3 uTint;
    uniform float uTintIntensity;
    uniform float uWireIntensity;

    uniform sampler2D tDiffuse;
    uniform sampler2D tNormal;
    uniform float uNormalScale;
    uniform float uNormalUVScale;

    uniform mat4 viewMatrix;
    uniform float uTime;

    #ifdef FLAT_SHADED
        flat in vec3 vNormal;
    #else
        in vec3 vNormal;
    #endif

    in vec3 vBary;
    in vec3 vMPos;
    in vec2 vUv;

    layout(location = 0) out highp vec4 pc_fragColor;

    void main() {
        float alpha = uOpacity;

        // ----- Normal -----
        vec3 plainNormal = normalize(vNormal);
        vec3 textNormal = mix(vec3(1.0), texture(tNormal, vUv).rgb * 2.0 - 1.0, uNormalScale);
        vec3 normal = normalize(plainNormal * textNormal);

        // ----- Diffuse -----
        vec4 tex = texture(tDiffuse, vUv);
        alpha *= tex.a;

        vec3 light = vec3(0.0);//normalize(vec3(sin(uTime), 1.0, cos(uTime)));
        float shading = dot(normal, light) * 0.25;

        vec3 diffuse = tex.rgb + shading;

        // ----- Color Tint -----
        diffuse = mix(diffuse, uTint, uTintIntensity);

        // ----- Normal Tint -----
        diffuse = mix(diffuse, normal, uNormalIntensity);

        // ----- Barycentric -----
        vec3 baryDiffuse = diffuse;
        float baryAlpha = 1.0;

        float lineWidth = 5.0; // line thickness - in pixels
        float lineHalf = lineWidth / 2.0;
        vec3 d = fwidth(vBary);
        vec3 s = smoothstep(d * (lineWidth + lineHalf), d * (lineWidth - lineHalf), vBary);
        baryAlpha *= max(max(s.x, s.y), s.z);

        // // Dashes
        // baryAlpha *= step(0.0, sin(max(vBary.x, vBary.y) * 3.14 * 5.0));

        // Back face shading
        baryDiffuse = mix(vec3(0, 0, 0), baryDiffuse, vec3(gl_FrontFacing));
        baryAlpha = mix(baryAlpha * 0.1 + 0.02, baryAlpha, float(gl_FrontFacing));

        diffuse = mix(diffuse, baryDiffuse, uWireIntensity);
        alpha = mix(alpha, baryAlpha, uWireIntensity);
        if (alpha < 0.01) discard;
        diffuse *= alpha;

        // ----- Output -----
        pc_fragColor = vec4(diffuse, alpha);

    }
`;

const tempMat4$1 = new Mat4();
const identity = new Mat4();

class GLTFSkin extends Mesh {
    constructor({
        skeleton,
        geometry,
        program,
        mode
    } = {}) {
        mode = mode ?? renderer.gl.TRIANGLES;

        super({ geometry, program, mode });

        this.skeleton = skeleton;
        this.program = program;
        this.createBoneTexture();
        this.animations = [];
    }

    createBoneTexture() {
        const gl = renderer.gl;

        if (!this.skeleton.joints.length) return;
        const size = Math.max(4, Math.pow(2, Math.ceil(Math.log(Math.sqrt(this.skeleton.joints.length * 4)) / Math.LN2)));
        this.boneMatrices = new Float32Array(size * size * 4);
        this.boneTextureSize = size;
        this.boneTexture = new Texture({
            image: this.boneMatrices,
            generateMipmaps: false,
            type: gl.FLOAT,
            internalFormat: gl.RGBA32F,
            minFilter: gl.NEAREST,
            magFilter: gl.NEAREST,
            flipY: false,
            width: size,
        });
    }

    // addAnimation(data) {
    //     const animation = new Animation({ objects: this.bones, data });
    //     this.animations.push(animation);
    //     return animation;
    // }

    // updateAnimations() {
    //     // Calculate combined animation weight
    //     let total = 0;
    //     this.animations.forEach((animation) => (total += animation.weight));

    //     this.animations.forEach((animation, i) => {
    //         // force first animation to set in order to reset frame
    //         animation.update(total, i === 0);
    //     });
    // }

    updateUniforms() {
        // Update bone texture
        this.skeleton.joints.forEach((bone, i) => {
            // Find difference between current and bind pose
            tempMat4$1.multiply(bone.worldMatrix, bone.bindInverse);
            this.boneMatrices.set(tempMat4$1, i * 16);
        });
        if (this.boneTexture) this.boneTexture.needsUpdate = true;
    }

    draw({ camera } = {}) {
        if (!this.program.uniforms.boneTexture) {
            Object.assign(this.program.uniforms, {
                boneTexture: { value: this.boneTexture },
                boneTextureSize: { value: this.boneTextureSize },
            });
        }

        this.updateUniforms();

        // Switch the world matrix with identity to ignore any transforms
        // on the mesh itself - only use skeleton's transforms
        const _worldMatrix = this.worldMatrix;
        this.worldMatrix = identity;

        super.draw({ camera });

        // Switch back to leave identity untouched
        this.worldMatrix = _worldMatrix;
    }
}

// Supports
// [x] glb
// [x] Geometry
// [x] Nodes and Hierarchy
// [x] Instancing
// [x] Skins
// [x] Textures
// [x] Animation
// [x] GLB support
// [x] Basis/ktx2
// [x] KHR_lights_punctual lights
// [ ] Morph Targets
// [ ] Materials
// [ ] Cameras

// TODO: Sparse accessor packing? For morph targets basically
// TODO: init accessor missing bufferView with 0s
// TODO: morph target animations
// TODO: option to turn off GPU instancing

const TYPE_ARRAY = {
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
    'image/jpeg': Uint8Array,
    'image/png': Uint8Array,
};

const TYPE_SIZE = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16,
};

const ATTRIBUTES = {
    POSITION: 'position',
    NORMAL: 'normal',
    TANGENT: 'tangent',
    TEXCOORD_0: 'uv',
    TEXCOORD_1: 'uv2',
    COLOR_0: 'color',
    WEIGHTS_0: 'skinWeight',
    JOINTS_0: 'skinIndex',
};

const TRANSFORMS = {
    translation: 'position',
    rotation: 'quaternion',
    scale: 'scale',
};

class GLTFLoader {
    static setBasisManager(manager) {
        this.basisManager = manager;
    }

    static async load(src) {
        const dir = src.split('/').slice(0, -1).join('/') + '/';

        // load main description json
        const desc = await this.parseDesc(src);

        return await this.parse(desc, dir);
    }

    static async parse(desc, dir) {
        if (desc.asset === undefined || desc.asset.version[0] < 2) {
            console.warn('GLTFLoader.parse: Only GLTF >=2.0 supported. Attempting to parse.');
        }

        if (desc.extensionsRequired?.includes('KHR_texture_basisu') && !this.basisManager)
            console.warn('GLTFLoader.parse:  KHR_texture_basisu extension required but no manager supplied. Use .setBasisManager()');

        // Load buffers async
        const buffers = await this.loadBuffers(desc, dir);

        // Unbind current VAO so that new buffers don't get added to active mesh
        renderer.gl.bindVertexArray(null);

        // Create gl buffers from bufferViews
        const bufferViews = this.parseBufferViews(desc, buffers);

        // Create images from either bufferViews or separate image files
        const images = await this.parseImages(desc, dir, bufferViews);

        const textures = this.parseTextures(desc, images);

        // Just pass through material data for now
        const materials = this.parseMaterials(desc, textures);

        // Fetch the inverse bind matrices for skeleton joints
        const skins = this.parseSkins(desc, bufferViews);

        // Create geometries for each mesh primitive
        const meshes = this.parseMeshes(desc, bufferViews, materials, skins);

        // Create transforms, meshes and hierarchy
        const nodes = this.parseNodes(desc, meshes, skins, images);

        // Place nodes in skeletons
        this.populateSkins(skins, nodes);

        // Create animation handlers
        const animations = this.parseAnimations(desc, nodes, bufferViews);

        // Get top level nodes for each scene
        const scenes = this.parseScenes(desc, nodes);
        const scene = scenes[desc.scene];

        // Create uniforms for scene lights (TODO: light linking?)
        const lights = this.parseLights(desc, nodes, scenes);

        // Remove null nodes (instanced transforms)
        for (let i = nodes.length; i >= 0; i--) if (!nodes[i]) nodes.splice(i, 1);

        return {
            json: desc,
            buffers,
            bufferViews,
            images,
            textures,
            materials,
            meshes,
            nodes,
            lights,
            animations,
            scenes,
            scene,
        };
    }

    static async parseDesc(src) {
        if (!src.match(/\.glb/)) {
            return await fetch(src).then((res) => res.json());
        } else {
            return await fetch(src)
                .then((res) => res.arrayBuffer())
                .then((glb) => this.unpackGLB(glb));
        }
    }

    // From https://github.com/donmccurdy/glTF-Transform/blob/e4108cc/packages/core/src/io/io.ts#L32
    static unpackGLB(glb) {
        // Decode and verify GLB header.
        const header = new Uint32Array(glb, 0, 3);
        if (header[0] !== 0x46546c67) {
            throw new Error('Invalid glTF asset.');
        } else if (header[1] !== 2) {
            throw new Error(`Unsupported glTF binary version, "${header[1]}".`);
        }
        // Decode and verify chunk headers.
        const jsonChunkHeader = new Uint32Array(glb, 12, 2);
        const jsonByteOffset = 20;
        const jsonByteLength = jsonChunkHeader[0];
        if (jsonChunkHeader[1] !== 0x4e4f534a) {
            throw new Error('Unexpected GLB layout.');
        }

        // Decode JSON.
        const jsonText = new TextDecoder().decode(glb.slice(jsonByteOffset, jsonByteOffset + jsonByteLength));
        const json = JSON.parse(jsonText);
        // JSON only
        if (jsonByteOffset + jsonByteLength === glb.byteLength) return json;

        const binaryChunkHeader = new Uint32Array(glb, jsonByteOffset + jsonByteLength, 2);
        if (binaryChunkHeader[1] !== 0x004e4942) {
            throw new Error('Unexpected GLB layout.');
        }
        // Decode content.
        const binaryByteOffset = jsonByteOffset + jsonByteLength + 8;
        const binaryByteLength = binaryChunkHeader[0];
        const binary = glb.slice(binaryByteOffset, binaryByteOffset + binaryByteLength);
        // Attach binary to buffer
        json.buffers[0].binary = binary;
        return json;
    }

    // Threejs GLTF Loader https://github.com/mrdoob/three.js/blob/master/examples/js/loaders/GLTFLoader.js#L1085
    static resolveURI(uri, dir) {
        // Invalid URI
        if (typeof uri !== 'string' || uri === '') return '';

        // Host Relative URI
        if (/^https?:\/\//i.test(dir) && /^\//.test(uri)) {
            dir = dir.replace(/(^https?:\/\/[^\/]+).*/i, '$1');
        }

        // Absolute URI http://, https://, //
        if (/^(https?:)?\/\//i.test(uri)) return uri;

        // Data URI
        if (/^data:.*,.*$/i.test(uri)) return uri;

        // Blob URI
        if (/^blob:.*$/i.test(uri)) return uri;

        // Relative URI
        return dir + uri;
    }

    static async loadBuffers(desc, dir) {
        if (!desc.buffers) return null;
        return await Promise.all(
            desc.buffers.map((buffer) => {
                // For GLB, binary buffer ready to go
                if (buffer.binary) return buffer.binary;
                const uri = this.resolveURI(buffer.uri, dir);
                return fetch(uri).then((res) => res.arrayBuffer());
            })
        );
    }

    static parseBufferViews(desc, buffers) {
        const gl = renderer.gl;

        if (!desc.bufferViews) return null;
        // Clone to leave description pure
        const bufferViews = desc.bufferViews.map((o) => Object.assign({}, o));

        desc.meshes &&
            desc.meshes.forEach(({ primitives }) => {
                primitives.forEach(({ attributes, indices }) => {
                    // Flag bufferView as an attribute, so it knows to create a gl buffer
                    for (let attr in attributes) bufferViews[desc.accessors[attributes[attr]].bufferView].isAttribute = true;

                    if (indices === undefined) return;
                    bufferViews[desc.accessors[indices].bufferView].isAttribute = true;

                    // Make sure indices bufferView have a target property for gl buffer binding
                    bufferViews[desc.accessors[indices].bufferView].target = gl.ELEMENT_ARRAY_BUFFER;
                });
            });

        // Get componentType of each bufferView from the accessors
        desc.accessors.forEach(({ bufferView: i, componentType }) => {
            bufferViews[i].componentType = componentType;
        });

        // Get mimetype of bufferView from images
        desc.images &&
            desc.images.forEach(({ uri, bufferView: i, mimeType }) => {
                if (i === undefined) return;
                bufferViews[i].mimeType = mimeType;
            });

        // Push each bufferView to the GPU as a separate buffer
        bufferViews.forEach(
            (
                {
                    buffer: bufferIndex, // required
                    byteOffset = 0, // optional
                    byteLength, // required
                    byteStride, // optional
                    target = gl.ARRAY_BUFFER, // optional, added above for elements
                    name, // optional
                    extensions, // optional
                    extras, // optional

                    componentType, // optional, added from accessor above
                    mimeType, // optional, added from images above
                    isAttribute,
                },
                i
            ) => {
                bufferViews[i].data = buffers[bufferIndex].slice(byteOffset, byteOffset + byteLength);

                if (!isAttribute) return;
                // Create gl buffers for the bufferView, pushing it to the GPU
                const buffer = gl.createBuffer();
                gl.bindBuffer(target, buffer);
                renderer.state.boundBuffer = buffer;
                gl.bufferData(target, bufferViews[i].data, gl.STATIC_DRAW);
                bufferViews[i].buffer = buffer;
            }
        );

        return bufferViews;
    }

    static async parseImages(desc, dir, bufferViews) {
        if (!desc.images) return null;
        return await Promise.all(
            desc.images.map(async ({ uri, bufferView: bufferViewIndex, mimeType, name }) => {
                if (mimeType === 'image/ktx2') {
                    const { data } = bufferViews[bufferViewIndex];
                    const image = await this.basisManager.parseTexture(data);
                    return image;
                }

                // jpg / png
                const image = new Image();
                image.name = name;
                if (uri) {
                    image.src = this.resolveURI(uri, dir);
                } else if (bufferViewIndex !== undefined) {
                    const { data } = bufferViews[bufferViewIndex];
                    const blob = new Blob([data], { type: mimeType });
                    image.src = URL.createObjectURL(blob);
                }
                image.ready = new Promise((res) => {
                    image.onload = () => res();
                });
                return image;
            })
        );
    }

    static parseTextures(desc, images) {
        if (!desc.textures) return null;
        return desc.textures.map((textureInfo) => this.createTexture(desc, images, textureInfo));
    }

    static createTexture(desc, images, { sampler: samplerIndex, source: sourceIndex, name, extensions, extras }) {
        const gl = renderer.gl;

        if (sourceIndex === undefined && !!extensions) {
            // Basis extension source index
            if (extensions.KHR_texture_basisu) sourceIndex = extensions.KHR_texture_basisu.source;
        }

        const image = images[sourceIndex];
        if (image.texture) return image.texture;

        const options = {
            flipY: false,
            wrapS: gl.REPEAT, // Repeat by default, opposed to OGL's clamp by default
            wrapT: gl.REPEAT,
        };
        const sampler = samplerIndex !== undefined ? desc.samplers[samplerIndex] : null;
        if (sampler) {
            ['magFilter', 'minFilter', 'wrapS', 'wrapT'].forEach((prop) => {
                if (sampler[prop]) options[prop] = sampler[prop];
            });
        }

        // For compressed textures
        if (image.isBasis) {
            options.image = image;
            options.internalFormat = image.internalFormat;
            if (image.isCompressedTexture) {
                options.generateMipmaps = false;
                if (image.length > 1) this.minFilter = gl.NEAREST_MIPMAP_LINEAR;
            }
            const texture = new Texture(options);
            texture.name = name;
            image.texture = texture;
            return texture;
        }

        const texture = new Texture(options);
        texture.name = name;
        image.texture = texture;
        image.ready.then(() => {
            texture.image = image;
        });

        return texture;
    }

    static parseMaterials(desc, textures) {
        if (!desc.materials) return null;
        return desc.materials.map(
            ({
                name,
                extensions,
                extras,
                pbrMetallicRoughness = {},
                normalTexture,
                occlusionTexture,
                emissiveTexture,
                emissiveFactor = [0, 0, 0],
                alphaMode = 'OPAQUE',
                alphaCutoff = 0.5,
                doubleSided = false,
            }) => {
                const {
                    baseColorFactor = [1, 1, 1, 1],
                    baseColorTexture,
                    metallicFactor = 1,
                    roughnessFactor = 1,
                    metallicRoughnessTexture,
                    //   extensions,
                    //   extras,
                } = pbrMetallicRoughness;

                if (baseColorTexture) {
                    baseColorTexture.texture = textures[baseColorTexture.index];
                    // texCoord
                }
                if (normalTexture) {
                    normalTexture.texture = textures[normalTexture.index];
                    // scale: 1
                    // texCoord
                }
                if (metallicRoughnessTexture) {
                    metallicRoughnessTexture.texture = textures[metallicRoughnessTexture.index];
                    // texCoord
                }
                if (occlusionTexture) {
                    occlusionTexture.texture = textures[occlusionTexture.index];
                    // strength 1
                    // texCoord
                }
                if (emissiveTexture) {
                    emissiveTexture.texture = textures[emissiveTexture.index];
                    // texCoord
                }

                return {
                    name,
                    extensions,
                    extras,
                    baseColorFactor,
                    baseColorTexture,
                    metallicFactor,
                    roughnessFactor,
                    metallicRoughnessTexture,
                    normalTexture,
                    occlusionTexture,
                    emissiveTexture,
                    emissiveFactor,
                    alphaMode,
                    alphaCutoff,
                    doubleSided,
                };
            }
        );
    }

    static parseSkins(desc, bufferViews) {
        if (!desc.skins) return null;
        return desc.skins.map(
            ({
                inverseBindMatrices, // optional
                skeleton, // optional
                joints, // required
                // name,
                // extensions,
                // extras,
            }) => {
                return {
                    inverseBindMatrices: this.parseAccessor(inverseBindMatrices, desc, bufferViews),
                    skeleton,
                    joints,
                };
            }
        );
    }

    static parseMeshes(desc, bufferViews, materials, skins) {
        if (!desc.meshes) return null;
        return desc.meshes.map(
            (
                {
                    primitives, // required
                    weights, // optional
                    name, // optional
                    extensions, // optional
                    extras, // optional
                },
                meshIndex
            ) => {
                // TODO: weights stuff ?
                // Parse through nodes to see how many instances there are
                // and if there is a skin attached
                // If multiple instances of a skin, need to create each
                let numInstances = 0;
                let skinIndices = [];
                let isLightmap = false;
                desc.nodes &&
                    desc.nodes.forEach(({ mesh, skin, extras }) => {
                        if (mesh === meshIndex) {
                            numInstances++;
                            if (skin !== undefined) skinIndices.push(skin);
                            if (extras && extras.lightmap_scale_offset) isLightmap = true;
                        }
                    });
                let isSkin = !!skinIndices.length;

                // For skins, return array of skin meshes to account for multiple instances
                if (isSkin) {
                    primitives = skinIndices.map((skinIndex) => {
                        return this.parsePrimitives(primitives, desc, bufferViews, materials, 1, isLightmap).map(
                            ({ geometry, program, mode }) => {
                                const mesh = new GLTFSkin({ skeleton: skins[skinIndex], geometry, program, mode });
                                mesh.name = name;
                                // TODO: support skin frustum culling
                                mesh.frustumCulled = false;
                                return mesh;
                            }
                        );
                    });
                    // For retrieval to add to node
                    primitives.instanceCount = 0;
                    primitives.numInstances = numInstances;
                } else {
                    primitives = this.parsePrimitives(primitives, desc, bufferViews, materials, numInstances, isLightmap).map(
                        ({ geometry, program, mode }) => {
                            // InstancedMesh class has custom frustum culling for instances
                            const meshConstructor = geometry.attributes.instanceMatrix ? InstancedMesh : Mesh;
                            const mesh = new meshConstructor({ geometry, program, mode });
                            mesh.name = name;
                            // Tag mesh so that nodes can add their transforms to the instance attribute
                            mesh.numInstances = numInstances;
                            return mesh;
                        }
                    );
                }

                return {
                    primitives,
                    weights,
                    name,
                };
            }
        );
    }

    static parsePrimitives(primitives, desc, bufferViews, materials, numInstances, isLightmap) {
        return primitives.map(
            ({
                attributes, // required
                indices, // optional
                material: materialIndex, // optional
                mode = 4, // optional
                targets, // optional
                extensions, // optional
                extras, // optional
            }) => {
                // TODO: materials
                const program = new Uber();
                if (materialIndex !== undefined) {
                    program.gltfMaterial = materials[materialIndex];
                }

                const geometry = new Geometry();

                // Add each attribute found in primitive
                for (let attr in attributes) {
                    geometry.addAttribute(ATTRIBUTES[attr], this.parseAccessor(attributes[attr], desc, bufferViews));
                }

                // Add index attribute if found
                if (indices !== undefined) {
                    geometry.addAttribute('index', this.parseAccessor(indices, desc, bufferViews));
                }

                // Add instanced transform attribute if multiple instances
                // Ignore if skin as we don't support instanced skins out of the box
                if (numInstances > 1) {
                    geometry.addAttribute('instanceMatrix', {
                        instanced: 1,
                        size: 16,
                        data: new Float32Array(numInstances * 16),
                    });
                }

                // Always supply lightmapScaleOffset as an instanced attribute
                // Instanced skin lightmaps not supported
                if (isLightmap) {
                    geometry.addAttribute('lightmapScaleOffset', {
                        instanced: 1,
                        size: 4,
                        data: new Float32Array(numInstances * 4),
                    });
                }

                return {
                    geometry,
                    program,
                    mode,
                };
            }
        );
    }

    static parseAccessor(index, desc, bufferViews) {
        // TODO: init missing bufferView with 0s
        // TODO: support sparse

        const {
            bufferView: bufferViewIndex, // optional
            byteOffset = 0, // optional
            componentType, // required
            normalized = false, // optional
            count, // required
            type, // required
            min, // optional
            max, // optional
            sparse, // optional
            // name, // optional
            // extensions, // optional
            // extras, // optional
        } = desc.accessors[index];

        const {
            data, // attached in parseBufferViews
            buffer, // replaced to be the actual GL buffer
            byteOffset: bufferByteOffset = 0,
            // byteLength, // applied in parseBufferViews
            byteStride = 0,
            target,
            // name,
            // extensions,
            // extras,
        } = bufferViews[bufferViewIndex];

        const size = TYPE_SIZE[type];

        // Parse data from joined buffers
        const TypeArray = TYPE_ARRAY[componentType];
        const elementBytes = TypeArray.BYTES_PER_ELEMENT;
        const componentStride = byteStride / elementBytes;
        const isInterleaved = !!byteStride && componentStride !== size;

        let filteredData;

        // Convert data to typed array for various uses (bounding boxes, raycasting, animation, merging etc)
        if (isInterleaved) {
            // First convert entire buffer to type
            const typedData = new TypeArray(data, byteOffset);
            // TODO: add length to not copy entire buffer if can help it
            // const typedData = new TypeArray(data, byteOffset, (count - 1) * componentStride)

            // Create output with length
            filteredData = new TypeArray(count * size);

            // Add element by element
            for (let i = 0; i < count; i++) {
                const start = componentStride * i;
                const end = start + size;
                filteredData.set(typedData.slice(start, end), i * size);
            }
        } else {
            // Simply a slice
            filteredData = new TypeArray(data, byteOffset, count * size);
        }

        // Return attribute data
        return {
            data: filteredData,
            size,
            type: componentType,
            normalized,
            buffer,
            stride: byteStride,
            offset: byteOffset,
            count,
            min,
            max,
        };
    }

    static parseNodes(desc, meshes, skins, images) {
        if (!desc.nodes) return null;
        const nodes = desc.nodes.map(
            ({
                camera, // optional
                children, // optional
                skin: skinIndex, // optional
                matrix, // optional
                mesh: meshIndex, // optional
                rotation, // optional
                scale, // optional
                translation, // optional
                weights, // optional
                name, // optional
                extensions, // optional
                extras, // optional
            }) => {
                const node = new Transform();
                if (name) node.name = name;
                node.extras = extras;
                node.extensions = extensions;

                // Need to attach to node as may have same material but different lightmap
                if (extras && extras.lightmapTexture !== undefined) {
                    extras.lightmapTexture.texture = this.createTexture(desc, images, { source: extras.lightmapTexture.index });
                }

                // Apply transformations
                if (matrix) {
                    node.matrix.copy(matrix);
                    node.decompose();
                } else {
                    if (rotation) node.quaternion.copy(rotation);
                    if (scale) node.scale.copy(scale);
                    if (translation) node.position.copy(translation);
                    node.updateMatrix();
                }

                // Flags for avoiding duplicate transforms and removing unused instance nodes
                let isInstanced = false;
                let isFirstInstance = true;
                let isInstancedMatrix = false;
                let isSkin = skinIndex !== undefined;

                // add mesh if included
                if (meshIndex !== undefined) {
                    if (isSkin) {
                        meshes[meshIndex].primitives[meshes[meshIndex].primitives.instanceCount].forEach((mesh) => {
                            mesh.extras = extras;
                            mesh.setParent(node);
                        });
                        meshes[meshIndex].primitives.instanceCount++;
                        // Remove properties once all instances added
                        if (meshes[meshIndex].primitives.instanceCount === meshes[meshIndex].primitives.numInstances) {
                            delete meshes[meshIndex].primitives.numInstances;
                            delete meshes[meshIndex].primitives.instanceCount;
                        }
                    } else {
                        meshes[meshIndex].primitives.forEach((mesh) => {
                            mesh.extras = extras;

                            // instanced mesh might only have 1
                            if (mesh.geometry.isInstanced) {
                                isInstanced = true;
                                if (!mesh.instanceCount) {
                                    mesh.instanceCount = 0;
                                } else {
                                    isFirstInstance = false;
                                }
                                if (mesh.geometry.attributes.instanceMatrix) {
                                    isInstancedMatrix = true;
                                    node.matrix.toArray(mesh.geometry.attributes.instanceMatrix.data, mesh.instanceCount * 16);
                                }

                                if (mesh.geometry.attributes.lightmapScaleOffset) {
                                    mesh.geometry.attributes.lightmapScaleOffset.data.set(extras.lightmap_scale_offset, mesh.instanceCount * 4);
                                }

                                mesh.instanceCount++;

                                if (mesh.instanceCount === mesh.numInstances) {
                                    // Remove properties once all instances added
                                    delete mesh.numInstances;
                                    delete mesh.instanceCount;
                                    // Flag attribute as dirty
                                    if (mesh.geometry.attributes.instanceMatrix) {
                                        mesh.geometry.attributes.instanceMatrix.needsUpdate = true;
                                    }
                                    if (mesh.geometry.attributes.lightmapScaleOffset) {
                                        mesh.geometry.attributes.lightmapScaleOffset.needsUpdate = true;
                                    }
                                }
                            }

                            // For instances, only the first node will actually have the mesh
                            if (isInstanced) {
                                if (isFirstInstance) mesh.setParent(node);
                            } else {
                                mesh.setParent(node);
                            }
                        });
                    }
                }

                // Reset node if instanced to not duplicate transforms
                if (isInstancedMatrix) {
                    // Remove unused nodes just providing an instance transform
                    if (!isFirstInstance) return null;
                    // Avoid duplicate transform for node containing the instanced mesh
                    node.matrix.identity();
                    node.decompose();
                }

                return node;
            }
        );

        desc.nodes.forEach(({ children = [] }, i) => {
            // Set hierarchy now all nodes created
            children.forEach((childIndex) => {
                if (!nodes[childIndex]) return;
                nodes[childIndex].setParent(nodes[i]);
            });
        });

        // Add frustum culling for instances now that instanceMatrix attribute is populated
        meshes.forEach(({ primitives }, i) => {
            primitives.forEach((primitive, i) => {
                if (primitive.isInstancedMesh) primitive.addFrustumCull();
            });
        });

        return nodes;
    }

    static populateSkins(skins, nodes) {
        if (!skins) return;
        skins.forEach((skin) => {
            skin.joints = skin.joints.map((i, index) => {
                const joint = nodes[i];
                joint.bindInverse = new Mat4(...skin.inverseBindMatrices.data.slice(index * 16, (index + 1) * 16));
                return joint;
            });
            if (skin.skeleton) skin.skeleton = nodes[skin.skeleton];
        });
    }

    static parseAnimations(desc, nodes, bufferViews) {
        if (!desc.animations) return null;
        return desc.animations.map(
            ({
                channels, // required
                samplers, // required
                name, // optional
                // extensions, // optional
                // extras,  // optional
            }) => {
                const data = channels.map(
                    ({
                        sampler: samplerIndex, // required
                        target, // required
                        // extensions, // optional
                        // extras, // optional
                    }) => {
                        const {
                            input: inputIndex, // required
                            interpolation = 'LINEAR',
                            output: outputIndex, // required
                            // extensions, // optional
                            // extras, // optional
                        } = samplers[samplerIndex];

                        const {
                            node: nodeIndex, // optional - TODO: when is it not included?
                            path, // required
                            // extensions, // optional
                            // extras, // optional
                        } = target;

                        const node = nodes[nodeIndex];
                        const transform = TRANSFORMS[path];
                        const times = this.parseAccessor(inputIndex, desc, bufferViews).data;
                        const values = this.parseAccessor(outputIndex, desc, bufferViews).data;

                        return {
                            node,
                            transform,
                            interpolation,
                            times,
                            values,
                        };
                    }
                );

                return {
                    name,
                    animation: new GLTFAnimation(data),
                };
            }
        );
    }

    static parseScenes(desc, nodes) {
        if (!desc.scenes) return null;
        return desc.scenes.map(
            ({
                nodes: nodesIndices = [],
                name, // optional
                extensions,
                extras,
            }) => {
                const scene = nodesIndices.reduce((map, i) => {
                    // Don't add null nodes (instanced transforms)
                    if (nodes[i]) map.push(nodes[i]);
                    return map;
                }, []);
                scene.extras = extras;
                return scene;
            }
        );
    }

    static parseLights(desc, nodes, scenes) {
        const lights = {
            directional: [],
            point: [],
            spot: [],
        };

        // Update matrices on root nodes
        scenes.forEach((scene) => scene.forEach((node) => node.updateMatrixWorld()));

        // uses KHR_lights_punctual extension
        const lightsDescArray = desc.extensions?.KHR_lights_punctual?.lights || [];

        // Need nodes for transforms
        nodes.forEach((node) => {
            if (!node?.extensions?.KHR_lights_punctual) return;
            const lightIndex = node.extensions.KHR_lights_punctual.light;
            const lightDesc = lightsDescArray[lightIndex];
            const light = {
                name: lightDesc.name || '',
                color: { value: new Vec3().set(lightDesc.color || 1) },
            };
            // Apply intensity directly to color
            if (lightDesc.intensity !== undefined) light.color.value.multiply(lightDesc.intensity);

            switch (lightDesc.type) {
                case 'directional':
                    light.direction = { value: new Vec3(0, 0, 1).transformDirection(node.worldMatrix) };
                    break;
                case 'point':
                    light.position = { value: new Vec3().applyMatrix4(node.worldMatrix) };
                    light.distance = { value: lightDesc.range };
                    light.decay = { value: 2 };
                    break;
                case 'spot':
                    // TODO: support spot uniforms
                    Object.assign(light, lightDesc);
                    break;
            }

            lights[lightDesc.type].push(light);
        });

        return lights;
    }
}

class Billboard extends Mesh {

    static #geometry;
    static #program;

    constructor({
        texture,
    } = {}) {
        if (!Billboard.#geometry) Billboard.#geometry = new Plane();
        if (!Billboard.#program) {
            Billboard.#program = new Program({
                cullFace: null,
                transparent: true,
                vertex: defaultVertex$4,
                fragment: defaultFragment$4,
                uniforms: {
                    tDiffuse: { value: texture },
                },
            });
        }

        super({
            geometry: Billboard.#geometry,
            program: Billboard.#program,
        });
        this.isBillboard = true;

        this.texture = texture;
    }

    draw({ camera } = {}) {
        // Set camera uniforms
        if (camera) {
            // Add empty matrix uniforms to program if unset
            if (!this.program.uniforms.modelMatrix) {
                Object.assign(this.program.uniforms, {
                    modelMatrix: { value: null },
                    viewMatrix: { value: null },
                    modelViewMatrix: { value: null },
                    normalMatrix: { value: null },
                    projectionMatrix: { value: null },
                    cameraPosition: { value: null },
                });
            }

            // Set the matrix uniforms
            this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
            this.program.uniforms.cameraPosition.value = camera.worldPosition;
            this.program.uniforms.viewMatrix.value = camera.viewMatrix;
            this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
            this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
            this.program.uniforms.modelMatrix.value = this.worldMatrix;
            this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
            this.program.uniforms.normalMatrix.value = this.normalMatrix;
        }

        // Before render
        this.beforeRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));

        this.program.uniforms.tDiffuse.value = this.texture;
        this.program.use();
        this.geometry.draw({ mode: this.mode, program: this.program });

        // After render
        this.afterRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));
    }

}

/******************** INTERNAL ********************/

const defaultVertex$4 = /* glsl */ `#version 300 es
    in vec2 uv;
    in vec3 position;
    in vec3 normal;

    uniform mat3 normalMatrix;
    uniform mat4 modelMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    out vec3 vNormal;
    out vec2 vUv;

    void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);

        vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
        mvPosition.xy += position.xy;
        gl_Position = projectionMatrix * mvPosition;

        // vec3 pos = position;
        // gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const defaultFragment$4 = /* glsl */ `#version 300 es
    precision highp float;

    uniform sampler2D tDiffuse;

    in vec2 vUv;

    layout(location = 0) out highp vec4 pc_fragColor;

    void main() {

        // ----- Diffuse -----
        vec4 tex = texture(tDiffuse, vUv);

        vec3 diffuse = tex.rgb;
        float alpha = tex.a;

        // ----- Output -----
        if (alpha < 0.01) discard;
        diffuse *= alpha;

        pc_fragColor = vec4(diffuse, alpha);
    }
`;

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

/******************** INTERNAL ********************/

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

const tmp$1 = new Vec3();

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

/******************** INTERNAL ********************/

const defaultVertex$3 = /* glsl */ `#version 300 es
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

const defaultFragment$3 = /* glsl */ `#version 300 es
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

const tmp = new Vec3();

class Polyline {

    constructor({
        points,                         // Array of Vec3s
        vertex = defaultVertex$2,
        fragment = defaultFragment$2,
        uniforms = {},
        attributes = {},                // For passing in custom attribs
    } = {}) {
        this.points = points;
        this.count = points.length;

        // Create buffers
        this.position = new Float32Array(this.count * 3 * 2);
        this.prev = new Float32Array(this.count * 3 * 2);
        this.next = new Float32Array(this.count * 3 * 2);
        const side = new Float32Array(this.count * 1 * 2);
        const uv = new Float32Array(this.count * 2 * 2);
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

        if (!uniforms.uResolution) this.resolution = uniforms.uResolution = { value: new Vec2() };
        if (!uniforms.uDPR) this.dpr = uniforms.uDPR = { value: 1 };
        if (!uniforms.uThickness) this.thickness = uniforms.uThickness = { value: 1 };
        if (!uniforms.uColor) this.color = uniforms.uColor = { value: new Color('#000') };
        if (!uniforms.uMiter) this.miter = uniforms.uMiter = { value: 1 };

        // Set size uniforms' values
        this.resize();

        const program = (this.program = new Program({
            vertex,
            fragment,
            uniforms,
        }));

        this.mesh = new Mesh({ geometry, program });
    }

    updateGeometry() {
        this.points.forEach((p, i) => {
            p.toArray(this.position, i * 3 * 2);
            p.toArray(this.position, i * 3 * 2 + 3);

            if (!i) {
                // If first point, calculate prev using the distance to 2nd point
                tmp.copy(p)
                    .sub(this.points[i + 1])
                    .add(p);
                tmp.toArray(this.prev, i * 3 * 2);
                tmp.toArray(this.prev, i * 3 * 2 + 3);
            } else {
                p.toArray(this.next, (i - 1) * 3 * 2);
                p.toArray(this.next, (i - 1) * 3 * 2 + 3);
            }

            if (i === this.points.length - 1) {
                // If last point, calculate next using distance to 2nd last point
                tmp.copy(p)
                    .sub(this.points[i - 1])
                    .add(p);
                tmp.toArray(this.next, i * 3 * 2);
                tmp.toArray(this.next, i * 3 * 2 + 3);
            } else {
                p.toArray(this.prev, (i + 1) * 3 * 2);
                p.toArray(this.prev, (i + 1) * 3 * 2 + 3);
            }
        });

        this.geometry.attributes.position.needsUpdate = true;
        this.geometry.attributes.prev.needsUpdate = true;
        this.geometry.attributes.next.needsUpdate = true;
    }

    // Only need to call if not handling resolution uniforms manually
    resize() {
        // Update automatic uniforms if not overridden
        if (this.resolution) this.resolution.value.set(renderer.gl.canvas.width, renderer.gl.canvas.height);
        if (this.dpr) this.dpr.value = renderer.dpr;
    }
}

/******************** INTERNAL ********************/

const defaultVertex$2 = /* glsl */ `
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uMiter;

    varying vec2 vUv;

    vec4 getPosition() {
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 current = mvp * vec4(position, 1);
        vec4 nextPos = mvp * vec4(next, 1);
        vec4 prevPos = mvp * vec4(prev, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);
        vec2 currentScreen = current.xy / current.w * aspect;
        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;

        vec2 dir1 = normalize(currentScreen - prevScreen);
        vec2 dir2 = normalize(nextScreen - currentScreen);
        vec2 dir = normalize(dir1 + dir2);

        vec2 normal = vec2(-dir.y, dir.x);
        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
        normal /= aspect;

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;

        return current;
    }

    void main() {
        vUv = uv;
        gl_Position = getPosition();
    }
`;

const defaultFragment$2 = /* glsl */ `
    precision highp float;

    uniform vec3 uColor;

    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = uColor;
        gl_FragColor.a = 1.0;
    }
`;

class Sprite extends Mesh {

    static #geometry;
    static #program;

    constructor({
        texture,
    } = {}) {
        if (!Sprite.#geometry) Sprite.#geometry = new Plane();
        if (!Sprite.#program) {
            Sprite.#program = new Program({
                cullFace: null,
                transparent: true,
                vertex: defaultVertex$1,
                fragment: defaultFragment$1,
                uniforms: {
                    tDiffuse: { value: texture },
                },
            });
        }

        super({
            geometry: Sprite.#geometry,
            program: Sprite.#program,
        });
        this.isSprite = true;

        this.texture = texture;
    }

    draw({ camera } = {}) {
        // Set camera uniforms
        if (camera) {
            // Add empty matrix uniforms to program if unset
            if (!this.program.uniforms.modelMatrix) {
                Object.assign(this.program.uniforms, {
                    modelMatrix: { value: null },
                    viewMatrix: { value: null },
                    modelViewMatrix: { value: null },
                    normalMatrix: { value: null },
                    projectionMatrix: { value: null },
                    cameraPosition: { value: null },
                });
            }

            // Set the matrix uniforms
            this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
            this.program.uniforms.cameraPosition.value = camera.worldPosition;
            this.program.uniforms.viewMatrix.value = camera.viewMatrix;
            this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
            this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
            this.program.uniforms.modelMatrix.value = this.worldMatrix;
            this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
            this.program.uniforms.normalMatrix.value = this.normalMatrix;
        }

        // Before render
        this.beforeRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));

        this.program.uniforms.tDiffuse.value = this.texture;
        this.program.use();
        this.geometry.draw({ mode: this.mode, program: this.program });

        // After render
        this.afterRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));
    }

}

/******************** INTERNAL ********************/

const defaultVertex$1 = /* glsl */ `#version 300 es
    in vec2 uv;
    in vec3 position;
    in vec3 normal;

    uniform mat3 normalMatrix;
    uniform mat4 modelMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    out vec3 vNormal;
    out vec2 vUv;

    void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);

        vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
        mvPosition.xy += position.xy;
        gl_Position = projectionMatrix * mvPosition;

        // vec3 pos = position;
        // gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const defaultFragment$1 = /* glsl */ `#version 300 es
    precision highp float;

    uniform sampler2D tDiffuse;

    in vec2 vUv;

    layout(location = 0) out highp vec4 pc_fragColor;

    void main() {

        // ----- Diffuse -----
        vec4 tex = texture(tDiffuse, vUv);

        vec3 diffuse = tex.rgb;
        float alpha = tex.a;

        // ----- Output -----
        if (alpha < 0.01) discard;
        diffuse *= alpha;

        pc_fragColor = vec4(diffuse, alpha);
    }
`;

class WireMesh extends Mesh {

    constructor({
        geometry,
        wireColor = new Vec3(0, 0.75, 0.5),
        wireTint = 1.0,
        ...meshProps
    } = {}) {

        toNonIndexed(geometry);

        const program = new Uber({
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

/** Abstract base class for path segments. This class contains common methods for all segments types. */
class BaseSegment {

    constructor() {
        this._len = -1;
        this.tiltStart = 0;
        this.tiltEnd = 0;
    }

    /**
     * Get segment length
     *
     * @returns {number} segment length
     */
    getLength() {
        if (this._len < 0) {
            this.updateLength();
        }

        return this._len;
    }

    /**
     * Get tilt angle at t
     *
     * @param {number} t Distance at time t in range [0 .. 1]
     * @returns {number} Tilt angle at t
     */
    getTiltAt(t) {
        return this.tiltStart * (1 - t) * this.tiltEnd * t;
    }

    /**
     * Creates a clone of this instance
     *
     * @returns {BaseSegment} cloned instance
     */
    clone() {
        return new this.constructor().copy(this);
    }

    /**
     * Copies another segment object to this instance
     *
     * @param {BaseSegment} source reference object
     * @returns {BaseSegment} copy of source object
     */
    copy(source) {
        this._len = source._len;
        this.tiltStart = source.tiltStart;
        this.tiltEnd = source.tiltEnd;
        return this;
    }

}

// from https://github.com/Pomax/bezierjs/blob/d19695f3cc3ce383cf38ce4643f467deca7edb92/src/utils.js#L26
// Legendre-Gauss abscissae with n=24 (x_i values, defined at i=n as the roots of the nth order Legendre polynomial Pn(x))
const T_VALUES = [
    -0.0640568928626056260850430826247450385909, 0.0640568928626056260850430826247450385909, -0.1911188674736163091586398207570696318404,
    0.1911188674736163091586398207570696318404, -0.3150426796961633743867932913198102407864, 0.3150426796961633743867932913198102407864,
    -0.4337935076260451384870842319133497124524, 0.4337935076260451384870842319133497124524, -0.5454214713888395356583756172183723700107,
    0.5454214713888395356583756172183723700107, -0.6480936519369755692524957869107476266696, 0.6480936519369755692524957869107476266696,
    -0.7401241915785543642438281030999784255232, 0.7401241915785543642438281030999784255232, -0.8200019859739029219539498726697452080761,
    0.8200019859739029219539498726697452080761, -0.8864155270044010342131543419821967550873, 0.8864155270044010342131543419821967550873,
    -0.9382745520027327585236490017087214496548, 0.9382745520027327585236490017087214496548, -0.9747285559713094981983919930081690617411,
    0.9747285559713094981983919930081690617411, -0.9951872199970213601799974097007368118745, 0.9951872199970213601799974097007368118745,
];

// Legendre-Gauss weights with n=24 (w_i values, defined by a function linked to in the Bezier primer article)
const C_VALUES = [
    0.1279381953467521569740561652246953718517, 0.1279381953467521569740561652246953718517, 0.1258374563468282961213753825111836887264,
    0.1258374563468282961213753825111836887264, 0.121670472927803391204463153476262425607, 0.121670472927803391204463153476262425607,
    0.1155056680537256013533444839067835598622, 0.1155056680537256013533444839067835598622, 0.1074442701159656347825773424466062227946,
    0.1074442701159656347825773424466062227946, 0.0976186521041138882698806644642471544279, 0.0976186521041138882698806644642471544279,
    0.086190161531953275917185202983742667185, 0.086190161531953275917185202983742667185, 0.0733464814110803057340336152531165181193,
    0.0733464814110803057340336152531165181193, 0.0592985849154367807463677585001085845412, 0.0592985849154367807463677585001085845412,
    0.0442774388174198061686027482113382288593, 0.0442774388174198061686027482113382288593, 0.0285313886289336631813078159518782864491,
    0.0285313886289336631813078159518782864491, 0.0123412297999871995468056670700372915759, 0.0123412297999871995468056670700372915759,
];

/**
 * Convert Degree To Radian
 * @param {number} a Angle in Degrees
 * @returns {number} a Angle in Radians
 */
const toRadian = (a) => (a * Math.PI) / 180;

/**
 * Convert Radian To Degree
 * @param {number} a Angle in Radians
 * @returns {number} a Angle in Radian
 */
const toDegrees = (a) => (180 * a) / Math.PI;

const clamp = (val, min, max) => Math.max(min, Math.min(val, max));
const lerp = (t, v0, v1) => v0 * (t - 1) + v1 * t;

/**
 * Fills a rotation matrix with the given sine and cosine of the angle around the given axis
 * This function helps to avoid inverse trigonometry
 * @param {Mat4} out mat4 receiving operation result
 * @param {Vec3} axis the axis to rotate around. Should be normalized
 * @param {number} sin sine of rotation angle
 * @param {number} cos cosine of rotation angle
 * @returns {Mat4} out
 */
function mat4fromRotationSinCos(out, axis, sin, cos) {
    const x = axis[0];
    const y = axis[1];
    const z = axis[2];
    const t = 1 - cos;
    
    out[0] = x * x * t + cos;
    out[1] = y * x * t + z * sin;
    out[2] = z * x * t - y * sin;
    out[3] = 0;
    out[4] = x * y * t - z * sin;
    out[5] = y * y * t + cos;
    out[6] = z * y * t + x * sin;
    out[7] = 0;
    out[8] = x * z * t + y * sin;
    out[9] = y * z * t - x * sin;
    out[10] = z * z * t + cos;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}

/**
 * Rotates the normal and binormal around its tangent by the given angle.
 *
 * see: https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula
 * @param {number} angle rotation angle
 * @param {Vec3} norm unit normal vector
 * @param {Vec3} binorm unit binormal vector
 * @param {Vec3} outNorm optional normal output vector. If not present then normal vector changes in place
 * @param {Vec3} outBinorm optional binormal output vector. If not present then binormal vector changes in place
 */
function rotateNormalBinormal(angle, norm, binorm, outNorm = norm, outBinorm = binorm) {
    const s = Math.sin(angle);
    const c = Math.cos(angle);

    const nx = c * norm.x + s * binorm.x;
    const ny = c * norm.y + s * binorm.y;
    const nz = c * norm.z + s * binorm.z;

    const bx = c * binorm.x - s * norm.x;
    const by = c * binorm.y - s * norm.y;
    const bz = c * binorm.z - s * norm.z;

    outNorm.set(nx, ny, nz);
    outBinorm.set(bx, by, bz);
}

const tempVec3$3 = new Vec3();

function cubicBezier(t, p0, p1, p2, p3) {
    const k = 1 - t;
    // prettier-ignore
    return (
        (k * k * k * p0) +
        (3 * k * k * t * p1) +
        (3 * k * t * t * p2) +
        (t * t * t * p3)
    );
}

function cubicBezierDeriv(t, p0, p1, p2, p3) {
    const k = 1 - t;
    // prettier-ignore
    return (
        (3 * k * k * (p1 - p0)) +
        (6 * k * t * (p2 - p1)) +
        (3 * t * t * (p3 - p2))
    );
}

class CubicBezierSegment extends BaseSegment {

    constructor(p0, p1, p2, p3, tiltStart = 0, tiltEnd = 0) {
        super();
        this.p0 = p0;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;

        this.tiltStart = tiltStart;
        this.tiltEnd = tiltEnd;

        this._len = -1;
    }

    /**
     * Updates the segment length. You must call this method every time you change the curve's control points.
     */
    updateLength() {
        // from https://github.com/Pomax/bezierjs/blob/d19695f3cc3ce383cf38ce4643f467deca7edb92/src/utils.js#L265
        const z = 0.5;
        const len = T_VALUES.length;

        let sum = 0;
        for (let i = 0, t; i < len; i++) {
            t = z * T_VALUES[i] + z;
            sum += C_VALUES[i] * this.getDerivativeAt(t, tempVec3$3).len();
        }

        this._len = z * sum;
    }

    /**
     * Get point at relative position in curve according to segment length.
     * @param {number} t Distance at time t in range [0 .. 1]
     * @param {Vec3} out Optional Vec3 to output
     * @returns {Vec3} Point at relative position
     */
    getPointAt(t, out = new Vec3()) {
        out.x = cubicBezier(t, this.p0.x, this.p1.x, this.p2.x, this.p3.x);
        out.y = cubicBezier(t, this.p0.y, this.p1.y, this.p2.y, this.p3.y);
        out.z = cubicBezier(t, this.p0.z, this.p1.z, this.p2.z, this.p3.z);
        return out;
    }

    getDerivativeAt(t, out = new Vec3()) {
        out.x = cubicBezierDeriv(t, this.p0.x, this.p1.x, this.p2.x, this.p3.x);
        out.y = cubicBezierDeriv(t, this.p0.y, this.p1.y, this.p2.y, this.p3.y);
        out.z = cubicBezierDeriv(t, this.p0.z, this.p1.z, this.p2.z, this.p3.z);
        return out;
    }

    /**
     * Returns a unit vector tangent at t
     * @param {number} t Distance at time t in range [0 .. 1]
     * @param {Vec3} out Optional Vec3 to output
     * @returns {Vec3} A unit vector
     */
    getTangentAt(t, out = new Vec3()) {
        return this.getDerivativeAt(t, out).normalize();
    }

    lastPoint() {
        return this.p3;
    }

}

const tempVec3$2 = new Vec3();

class LineSegment extends BaseSegment {

    constructor(p0, p1, tiltStart = 0, tiltEnd = 0) {
        super();
        this.p0 = p0;
        this.p1 = p1;

        this.tiltStart = tiltStart;
        this.tiltEnd = tiltEnd;

        this._len = -1;
    }

    /**
     * Updates the segment length. You must call this method every time you change the curve's control points.
     */
    updateLength() {
        this._len = tempVec3$2.sub(this.p1, this.p0).len();
    }

    /**
     * Get point at relative position in curve according to segment length.
     * @param {number} t Distance at time t in range [0 .. 1]
     * @param {Vec3} out Optional Vec3 to output
     * @returns {Vec3} Point at relative position
     */
    getPointAt(t, out = new Vec3()) {
        lerp$4(out, this.p0, this.p1, t);
        return out;
    }

    /**
     * Returns a unit vector tangent at t
     * @param {number} t Distance at time t in range [0 .. 1]
     * @param {Vec3} out Optional Vec3 to output
     * @returns {Vec3} A unit vector
     */
    getTangentAt(t, out = new Vec3()) {
        return out.sub(this.p1, this.p0).normalize();
    }

    lastPoint() {
        return this.p1;
    }

}

const tempVec3$1 = new Vec3();

function quadraticBezier(t, p0, p1, p2) {
    const k = 1 - t;
    return k * k * p0 + 2 * k * t *p1 + t * t * p2;
}

function quadraticBezierDeriv(t, p0, p1, p2) {
    const k = 1 - t;
    return 2 * k * (p1 - p0) + 2 * t * (p2 - p1);
}

class QuadraticBezierSegment extends BaseSegment {
    constructor(p0, p1, p2, tiltStart = 0, tiltEnd = 0) {
        super();
        this.p0 = p0;
        this.p1 = p1;
        this.p2 = p2;

        this.tiltStart = tiltStart;
        this.tiltEnd = tiltEnd;

        this._len = -1;
    }

    /**
     * Updates the segment length. You must call this method every time you change the curve's control points.
     */
    updateLength() {
        // from https://github.com/Pomax/bezierjs/blob/d19695f3cc3ce383cf38ce4643f467deca7edb92/src/utils.js#L265
        const z = 0.5;
        const len = T_VALUES.length;

        let sum = 0;
        for (let i = 0, t; i < len; i++) {
            t = z * T_VALUES[i] + z;
            sum += C_VALUES[i] * this.getDerivativeAt(t, tempVec3$1).len();
        }

        this._len = z * sum;
    }

    /**
     * Get point at relative position in curve according to segment length.
     * @param {number} t Distance at time t in range [0 .. 1]
     * @param {Vec3} out Optional Vec3 to output
     * @returns {Vec3} Point at relative position
     */
    getPointAt(t, out = new Vec3()) {
        out.x = quadraticBezier(t, this.p0.x, this.p1.x, this.p2.x);
        out.y = quadraticBezier(t, this.p0.y, this.p1.y, this.p2.y);
        out.z = quadraticBezier(t, this.p0.z, this.p1.z, this.p2.z);
        return out;
    }

    getDerivativeAt(t, out = new Vec3()) {
        out.x = quadraticBezierDeriv(t, this.p0.x, this.p1.x, this.p2.x);
        out.y = quadraticBezierDeriv(t, this.p0.y, this.p1.y, this.p2.y);
        out.z = quadraticBezierDeriv(t, this.p0.z, this.p1.z, this.p2.z);
        return out;
    }

    /**
     * Returns a unit vector tangent at t
     * @param {number} t Distance at time t in range [0 .. 1]
     * @param {Vec3} out Optional Vec3 to output
     * @returns {Vec3} A unit vector
     */
    getTangentAt(t, out = new Vec3()) {
        return this.getDerivativeAt(t, out).normalize();
    }

    lastPoint() {
        return this.p2;
    }

}

const tempVec3 = new Vec3();
const tempMat4 = new Mat4();

function throwIfNullProperty(property, message) {
    if (this[property] == null) throw new Error(message);
}

class Path {
    constructor() {
        this._segments = [];
        this._lengthOffsets = null;
        this._totalLength = -1;
        this._lastPoint = null;
        this._lastTilt = 0;

        this._assertLastPoint = throwIfNullProperty.bind(this, '_lastPoint', 'Can`t get previous point of curve. Did you forget moveTo command?');

        this.tiltFunction = null;
    }

    moveTo(p, tilt = 0) {
        this._totalLength = -1;
        this._lastPoint = p;
        this._lastTilt = tilt;
    }

    bezierCurveTo(cp1, cp2, p, tilt = 0) {
        this._assertLastPoint();
        const seg = new CubicBezierSegment(this._lastPoint, cp1, cp2, p, this._lastTilt, tilt);
        this.addSegment(seg);
        return this;
    }

    quadraticCurveTo(cp, p, tilt = 0) {
        this._assertLastPoint();
        const seg = new QuadraticBezierSegment(this._lastPoint, cp, p, this._lastTilt, tilt);
        this.addSegment(seg);
        return this;
    }

    lineTo(p, tilt = 0) {
        this._assertLastPoint();
        const seg = new LineSegment(this._lastPoint, p, this._lastTilt, tilt);
        this.addSegment(seg);
        return this;
    }

    addSegment(segment) {
        this._totalLength = -1;
        this._lastPoint = segment.lastPoint();
        this._lastTilt = segment.tiltEnd;
        this._segments.push(segment);
        return this;
    }

    getSegments() {
        return this._segments;
    }

    updateLength() {
        const n = this._segments.length;
        this._lengthOffsets = new Array(n);

        let offset = 0;
        for (let i = 0; i < n; i++) {
            this._lengthOffsets[i] = offset;
            offset += this._segments[i].getLength();
        }

        this._totalLength = offset;
    }

    getLength() {
        if (this._totalLength < 0) {
            this.updateLength();
        }

        return this._totalLength;
    }

    /**
     * Finding a path segment at a given absolute length distance
     * @param {number} len absolute length distance
     * @returns {[number, number]} [_segment index_, _relative segment distance_]
     */
    findSegmentIndexAtLength(len) {
        const totalLength = this.getLength();

        if (len <= 0) {
            return [0, 0];
        }

        if (len >= totalLength) {
            return [this._segments.length - 1, 1];
        }

        let start = 0;
        let end = this._lengthOffsets.length - 1;
        let index = -1;
        let mid;

        while (start <= end) {
            mid = Math.ceil((start + end) / 2);

            if (mid === 0 || mid === this._lengthOffsets.length - 1 || (len >= this._lengthOffsets[mid] && len < this._lengthOffsets[mid + 1])) {
                index = mid;
                break;
            } else if (len < this._lengthOffsets[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        const seg = this._segments[index];
        const segLen = seg.getLength();
        const t = (len - this._lengthOffsets[index]) / segLen;

        return [index, t];
    }

    getPointAtLength(len, out = new Vec3()) {
        const [i, t] = this.findSegmentIndexAtLength(len);
        return this._segments[i].getPointAt(t, out);
    }

    getPointAt(t, out = new Vec3()) {
        const totalLength = this.getLength();
        return this.getPointAtLength(t * totalLength, out);
    }

    getTangentAtLength(len, out = new Vec3()) {
        const [i, t] = this.findSegmentIndexAtLength(len);
        return this._segments[i].getTangentAt(t, out);
    }

    getTangentAt(t, out = new Vec3()) {
        const totalLength = this.getLength();
        return this.getTangentAtLength(t * totalLength, out);
    }

    getTiltAtLength(len) {
        const [i, t] = this.findSegmentIndexAtLength(len);
        return this._segments[i].getTiltAt(t);
    }

    getTiltAt(t) {
        const totalLength = this.getLength();
        return this.getTiltAtLength(t * totalLength);
    }

    /**
     * Get sequence of points using `getPointAt(t)`
     * @param {number} divisions number of subdivisions
     * @returns {Vec3[]} array of points
     */
    getPoints(divisions = 64) {
        const points = new Array(divisions + 1);
        for (let i = 0; i <= divisions; i++) {
            points[i] = this.getPointAt(i / divisions);
        }
        return points;
    }

    /**
     * Generates the Frenet Frames.
     * See http://www.cs.indiana.edu/pub/techreports/TR425.pdf
     * @param {number} divisions number of subdivisions
     * @returns {{tangents: Vec3[], normals: Vec3[], binormals: Vec3[]}} Object with tangents, normals and binormals arrays
     */
    computeFrenetFrames(divisions = 64, closed = false) {
        const tangents = new Array(divisions + 1);
        const tilts = new Array(divisions + 1);

        const tiltFunction = this.tiltFunction ?? ((a) => a);

        // compute the tangent vectors and tilt for each segment on the curve
        const totalLength = this.getLength();
        for (let i = 0; i <= divisions; i++) {
            const [si, st] = this.findSegmentIndexAtLength((totalLength * i) / divisions);
            const segment = this._segments[si];
            tangents[i] = segment.getTangentAt(st);
            tilts[i] = tiltFunction(segment.getTiltAt(st), i / divisions, this);
        }

        const tx = Math.abs(tangents[0].x);
        const ty = Math.abs(tangents[0].y);
        const tz = Math.abs(tangents[0].z);

        const normal = new Vec3();
        if (tx < ty && tx < tz) {
            normal.set(1, 0, 0);
        } else if (ty < tx && ty < tz) {
            normal.set(0, 1, 0);
        } else {
            normal.set(0, 0, 1);
        }

        // select an initial normal vector perpendicular to the first tangent vector,
        // and in the direction of the minimum tangent xyz component
        const normals = new Array(divisions + 1);
        const binormals = new Array(divisions + 1);
        normals[0] = new Vec3();
        binormals[0] = new Vec3();

        tempVec3.cross(tangents[0], normal).normalize();
        normals[0].cross(tangents[0], tempVec3);
        binormals[0].cross(tangents[0], normals[0]);

        // compute the slowly-varying normal vector for each segment on the curve
        for (let i = 1; i < tangents.length; i++) {
            normals[i] = normals[i - 1].clone();
            binormals[i] = new Vec3();

            tempVec3.cross(tangents[i - 1], tangents[i]);
            const crossLen = tempVec3.len();

            if (crossLen > Number.EPSILON) {
                tempVec3.scale(1 / crossLen); // nomalize
                const cosTheta = clamp(tangents[i - 1].dot(tangents[i]), -1, 1); // clamp for floating pt errors
                const sinTheta = clamp(crossLen, -1, 1);

                mat4fromRotationSinCos(tempMat4, tempVec3, sinTheta, cosTheta);
                normals[i].applyMatrix4(tempMat4);
            }

            binormals[i].cross(tangents[i], normals[i]);
        }

        // add tilt twisting
        for (let i = 0; i < tilts.length; i++) {
            rotateNormalBinormal(toRadian(tilts[i]), normals[i], binormals[i]);
        }

        // if the curve is closed, postprocess the vectors so the first and last normal vectors are the same
        if (closed === true) {
            const normalLast = normals[normals.length - 1];
            let step = Math.acos(clamp(normals[0].dot(normalLast), -1, 1)) / (normals.length - 1);

            if (tangents[0].dot(tempVec3.cross(normals[0], normalLast)) > 0) {
                step = -step;
            }

            for (let i = 1; i < normals.length - 1; i++) {
                const angle = step * i;
                rotateNormalBinormal(angle, normals[i], binormals[i]);
                tilts[i] += toDegrees(angle);
            }

            normals[normals.length - 1] = normals[0].clone();
            binormals[binormals.length - 1] = binormals[0].clone();
        }

        return { tangents, normals, binormals, tilts };
    }

}

let _texture;
function emptyTexture() {
    if (!_texture || !_texture.isTexture) _texture = new Texture();
    return _texture;
}

class TextureArray extends Program {

    #flatShading = false;

    #mapDiffuse = 0;

    #normalIntensity = 0.0;
    #opacity = 1.0;
    #tint = [ 1, 1, 1 ];
    #tintIntensity = 0.0;
    #wireIntensity = 0.0;

    constructor({
        texture = emptyTexture(),
        textureNormal = emptyTexture(),

        flatShading = false,
        normalIntensity = 0.0,
        normalScale = 0.0,
        opacity = 1.0,
        tint = [ 1, 1, 1 ],
        tintIntensity = 0.0,
        wireIntensity = 0.0,
        ...programProps
    } = {}) {
        super({
            ...programProps,
            vertex: defaultVertex,
            fragment: defaultFragment,
            uniforms: {
                tDiffuse: { value: texture },
                tNormal: { value: textureNormal },
                uLayer: { value: 0 },
                uNormalScale: { value: normalScale },
                uNormalUVScale: { value: 1 },
                uNormalIntensity: { value: normalIntensity },
                uOpacity: { value: opacity },
                uTime: { value: 0 },
                uTint: { value: tint },
                uTintIntensity: { value: tintIntensity },
                uWireIntensity: { value: wireIntensity },
            },
            defines: {
                FLAT_SHADED: flatShading,
            }
        });

        this.#flatShading = flatShading;
        this.#mapDiffuse = texture;
        this.#normalIntensity = normalIntensity;
        this.#opacity = opacity;
        this.#tint = tint;
        this.#tintIntensity = tintIntensity;
        this.#wireIntensity = wireIntensity;
    }

    rebuildProgram() {
        this.buildProgram({
            vertex: defaultVertex,
            fragment: defaultFragment,
            uniforms: {
                tDiffuse: { value: this.#mapDiffuse },
                uNormalIntensity: { value: this.#normalIntensity },
                uOpacity: { value: this.#opacity },
                uTint: { value: this.#tint },
                uTintIntensity: { value: this.#tintIntensity },
                uWireIntensity: { value: this.#wireIntensity },
            },
            defines: {
                FLAT_SHADED: this.#flatShading,
            }
        });
    }

    get flatShading() { return this.#flatShading; }

    set flatShading(flatShading) {
        if (this.#flatShading === flatShading) return;
        this.#flatShading = flatShading;
        this.rebuildProgram();
    }

    get normalIntensity() { return this.#normalIntensity; }

    set normalIntensity(normalIntensity) {
        this.uniforms.uNormalIntensity.value = normalIntensity;
    }

    get opacity() { return this.#opacity; }

    set opacity(opacity) {
        this.uniforms.uOpacity.value = opacity;
    }

    get tint() { return this.#tint; }

    set tint(tint) {
        this.uniforms.uTint.value = tint;
    }

    get tintIntensity() { return this.#tintIntensity; }

    set tintIntensity(tintIntensity) {
        this.uniforms.uTintIntensity.value = tintIntensity;
    }

    get wireIntensity() { return this.#wireIntensity; }

    set wireIntensity(wireIntensity) {
        this.uniforms.uWireIntensity.value = wireIntensity;
    }

}

/******************** INTERNAL ********************/

const defaultVertex = /* glsl */ `#version 300 es
    in vec2 uv;
    in vec3 position;
    in vec3 normal;

    vec3 bary[3] = vec3[](vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0));

    uniform mat3 normalMatrix;
    uniform mat4 modelMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    #ifdef FLAT_SHADED
        flat out vec3 vNormal;
    #else
        out vec3 vNormal;
    #endif

    out vec3 vBary;
    out vec3 vMPos;
    out vec2 vUv;

    void main() {
        vBary = bary[int(mod(float(gl_VertexID), 3.0))];
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vMPos = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const defaultFragment = /* glsl */ `#version 300 es
    precision highp float;
    precision highp int;
    precision highp sampler2DArray;

    uniform float uNormalIntensity;
    uniform float uOpacity;
    uniform vec3 uTint;
    uniform float uTintIntensity;
    uniform float uWireIntensity;

    // uniform sampler2D tDiffuse;
    uniform sampler2DArray tDiffuse;

    uniform sampler2D tNormal;
    uniform float uNormalScale;
    uniform float uNormalUVScale;

    uniform mat4 viewMatrix;
    uniform float uTime;

    uniform int uLayer;

    #ifdef FLAT_SHADED
        flat in vec3 vNormal;
    #else
        in vec3 vNormal;
    #endif

    in vec3 vBary;
    in vec3 vMPos;
    in vec2 vUv;

    layout(location = 0) out highp vec4 pc_fragColor;

    void main() {
        float alpha = uOpacity;

        // ----- Normal -----
        vec3 plainNormal = normalize(vNormal);
        vec3 textNormal = mix(vec3(1.0), texture(tNormal, vUv).rgb * 2.0 - 1.0, uNormalScale);
        vec3 normal = normalize(plainNormal * textNormal);

        // ----- Diffuse -----
        // vec4 tex = texture(tDiffuse, vUv);
        vec4 tex = texture(tDiffuse, vec3(vUv, uLayer));
        alpha *= tex.a;

        vec3 light = vec3(0.0); // normalize(vec3(sin(uTime), 1.0, cos(uTime)));
        float shading = dot(normal, light) * 0.25;

        vec3 diffuse = tex.rgb + shading;

        // ----- Color Tint -----
        diffuse = mix(diffuse, uTint, uTintIntensity);

        // ----- Normal Tint -----
        diffuse = mix(diffuse, normal, uNormalIntensity);

        // ----- Barycentric -----
        vec3 baryDiffuse = diffuse;
        float baryAlpha = 1.0;

        float lineWidth = 5.0; // line thickness - in pixels
        float lineHalf = lineWidth / 2.0;
        vec3 d = fwidth(vBary);
        vec3 s = smoothstep(d * (lineWidth + lineHalf), d * (lineWidth - lineHalf), vBary);
        baryAlpha *= max(max(s.x, s.y), s.z);

        // // Dashes
        // baryAlpha *= step(0.0, sin(max(vBary.x, vBary.y) * 3.14 * 5.0));

        // Back face shading
        baryDiffuse = mix(vec3(0, 0, 0), baryDiffuse, vec3(gl_FrontFacing));
        baryAlpha = mix(baryAlpha * 0.1 + 0.02, baryAlpha, float(gl_FrontFacing));

        diffuse = mix(diffuse, baryDiffuse, uWireIntensity);
        alpha = mix(alpha, baryAlpha, uWireIntensity);
        if (alpha < 0.01) discard;
        diffuse *= alpha;

        // ----- Output -----
        pc_fragColor = vec4(diffuse, alpha);

    }
`;

// https://www.khronos.org/registry/webgl/extensions/
// https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getParameter

class Capabilities {

    constructor(renderer) {
        const gl = renderer.gl;

        // Extensions
        const anisotropicExt = renderer.getExtension('EXT_texture_filter_anisotropic');
        const debugExt = renderer.getExtension('WEBGL_debug_renderer_info');

        // Shaders
        this.maxAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
        this.maxVaryings = gl.getParameter(gl.MAX_VARYING_VECTORS);
        this.maxVertexUniforms = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
        this.maxFragmentUniforms = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);

        this.maxPrecision = 'lowp';
        if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision > 0 &&
            gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision > 0
        ) this.maxPrecision = 'highp';
        else if (
            gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision > 0 &&
            gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision > 0
        ) this.maxPrecision = 'mediump';

        // Textures
        this.maxFragmentTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
        this.maxVertexTextures = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
        this.maxTextures = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        this.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
        this.maxCubemapSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);
        this.maxArrayTextureLayers = gl.getParameter(gl.MAX_ARRAY_TEXTURE_LAYERS);
        this.maxAnisotropy = (anisotropicExt) ? gl.getParameter(anisotropicExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;

        // Renderer
        this.maxSamples = gl.getParameter(gl.MAX_SAMPLES);

        // Framebuffers
        this.drawBuffers = gl.getParameter(gl.MAX_DRAW_BUFFERS);

        // Render Target Types
        this.byteTargets = checkRenderTargetSupport(gl, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE);
        this.floatTargets = checkRenderTargetSupport(gl, gl.RGBA32F, gl.RGBA, gl.FLOAT);
        this.halfFloatTargets = checkRenderTargetSupport(gl, gl.RGBA16F, gl.RGBA, gl.HALF_FLOAT);

        // Console Logger
        this.toHtml = function() {
            const debugRenderer = (debugExt) ? `Unmasked Renderer: <span class="Light">${gl.getParameter(debugExt.UNMASKED_RENDERER_WEBGL)}</span> <br />` : ``;
            const debugVendor = (debugExt) ? `Unmasked Vendor: <span class="Light">${gl.getParameter(debugExt.UNMASKED_VENDOR_WEBGL)}</span> <br />` : ``;
            return `
                <details open="true">
                <summary>Browser</summary>
                Platform: <span class="Light">${(navigator.userAgentData) ? navigator.userAgentData.platform : navigator.platform}</span> <br />
                User Agent: <span class="Light">${navigator.userAgent}</span> <br />
                </details>
                <details open="true">
                <summary>WebGL</summary>
                WebGL Version: <span class="Light">${gl.getParameter(gl.VERSION)}</span> <br />
                WebGL Vendor: <span class="Light">${gl.getParameter(gl.VENDOR)}</span> <br />
                WebGL Renderer: <span class="Light">${gl.getParameter(gl.RENDERER)}</span> <br />
                Shading Language: <span class="Light">${gl.getParameter(gl.SHADING_LANGUAGE_VERSION)}</span> <br />
                ${debugRenderer}
                ${debugVendor}
                </details>
                <details open="true">
                <summary>Shaders</summary>
                Max Shader Precision: <span class="Light">${this.maxPrecision}</span> <br />
                Max Vertex Attributes: <span class="Light">${this.maxAttributes}</span> <br />
                Max Varying Vectors: <span class="Light">${this.maxVaryings}</span> <br />
                Max Vertex Uniform Vectors: <span class="Light">${this.maxVertexUniforms}</span> <br />
                Max Fragment Uniform Vectors: <span class="Light">${this.maxFragmentUniforms}</span> <br />
                </details>
                <details open="true">
                <summary>Textures</summary>
                Max Fragment Textures: <span class="Light">${this.maxFragmentTextures}</span> <br />
                Max Vertex Textures: <span class="Light">${this.maxVertexTextures}</span> <br />
                Max Combined Textures: <span class="Light">${this.maxTextures}</span> <br />
                Max 2D Texture Size: <span class="Light">${this.maxTextureSize}</span> <br />
                Max Cube Texture Size: <span class="Light">${this.maxCubemapSize}</span> <br />
                Max Array Texture Layers: <span class="Light">${this.maxArrayTextureLayers}</span> <br />
                Max Texture Anisotropy: <span class="Light">${this.maxAnisotropy}</span> <br />
                </details>
                <details open="true">
                <summary>Renderer</summary>
                Point Size Range: <span class="Light">${gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[0]} - ${gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[1]}</span> <br />
                Line Width Range: <span class="Light">${gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)[0]} - ${gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)[1]}</span> <br />
                Max Viewport Dimensions: <span class="Light">${gl.getParameter(gl.MAX_VIEWPORT_DIMS)[0]} - ${gl.getParameter(gl.MAX_VIEWPORT_DIMS)[1]}</span> <br />
                Max Renderbuffer Size: <span class="Light">${gl.getParameter(gl.MAX_RENDERBUFFER_SIZE)}</span> <br />
                Max Fragment Shader Multiple Render Targets: <span class="Light">${this.drawBuffers}</span> <br />
                Max MSAA Samples: <span class="Light">${this.maxSamples}</span> <br />
                </details>
                <details open="true">
                <summary>Framebuffer</summary>
                Framebuffer Red Bits: <span class="Light">${gl.getParameter(gl.RED_BITS)}</span> <br />
                Framebuffer Green Bits: <span class="Light">${gl.getParameter(gl.GREEN_BITS)}</span> <br />
                Framebuffer Blue Bits: <span class="Light">${gl.getParameter(gl.BLUE_BITS)}</span> <br />
                Framebuffer Alpha Bits: <span class="Light">${gl.getParameter(gl.ALPHA_BITS)}</span> <br />
                Framebuffer Depth Bits: <span class="Light">${gl.getParameter(gl.DEPTH_BITS)}</span> <br />
                Framebuffer Stencil Bits: <span class="Light">${gl.getParameter(gl.STENCIL_BITS)}</span> <br />
                Framebuffer Subpixel Bits: <span class="Light">${gl.getParameter(gl.SUBPIXEL_BITS)}</span> <br />
                </details>
                <details open="true">
                <summary>Framebuffer Types</summary>
                Support for Unsigned Byte Render Targets: <span class="Light">${this.byteTargets}</span> <br />
                Support for Float Render Targets: <span class="Light">${this.floatTargets}</span> <br />
                Support for Half Float Render Targets: <span class="Light">${this.halfFloatTargets}</span> <br />
                </details>
                <details open="true">
                <summary>Supported Extensions</summary>
                ${gl.getSupportedExtensions().join('<br />')} <br />
                </details>
            `;
        };
    }

}

/******************** INTERNAL ********************/

function checkRenderTargetSupport(gl, internalFormat, format, type) {
    // Create temp framebuffer and texture
    const framebuffer = gl.createFramebuffer();
    const texture = gl.createTexture();

    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 2, 2, 0, format, type, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

    // Check framebuffer status
    const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

    // Clean up
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null);
    return (status === gl.FRAMEBUFFER_COMPLETE);
};

const _timer = (performance == null || typeof performance === 'undefined') ? Date : performance;

class Clock {

    #running = false;
    #startTime = 0;
    #elapsedTime = 0;
    #lastChecked = 0;
    #deltaCount = 0;

    #frameTime = 0;
    #frameCount = 0;
    #lastFrameCount = 0;

    constructor(autoStart = true, msRewind = 0) {
        if (autoStart) this.start();
        this.#startTime -= msRewind;
        this.#lastChecked -= msRewind;
    }

    start() {
        this.#startTime = _timer.now();
        this.#lastChecked = this.#startTime;
        this.#running = true;
    }

    stop() {
        this.getDeltaTime();
        this.#running = false;
    }

    reset() {
        this.#startTime = _timer.now();
        this.#lastChecked = this.#startTime;
        this.#elapsedTime = 0;
        this.#deltaCount = 0;
    }

    /** Total time elapsed between start() / reset() and last time getDeltaTime() was called */
    getElapsedTime() {
        return this.#elapsedTime;
    }

    /** Returns delta time (time since last getDeltaTime() call) */
    getDeltaTime() {
        if (!this.#running) {
            this.#lastFrameCount = 0;
            return 0;
        }

        // Delta
        const newTime = _timer.now();
        const dt = (newTime - this.#lastChecked) / 1000;
        this.#lastChecked = newTime;
        this.#elapsedTime += dt;
        this.#deltaCount++;

        // Framerate
        this.#frameTime += dt;
        this.#frameCount++;
        if (this.#frameTime > 1) {
            this.#lastFrameCount = this.#frameCount;
            this.#frameTime = 0;
            this.#frameCount = 0;
        }

        return dt;
    }

    /** Is clock running? */
    isRunning() {
        return this.#running;
    }

    /** Total number of times getDeltaTime() has been called since start() or reset() were called */
    count() {
        return this.#deltaCount;
    }

    /** Average delta time since start (in ms) */
    averageDelta() {
        const frameRate = 1 / this.#lastFrameCount;
        return Math.min(1, frameRate);
    }

    fps() {
        return this.#lastFrameCount;
    }

}

let _singleton = null;

class Debug {

    #startInternal;
    #stopInternal;

    constructor(openFrame = false, openScene = false, openBuffers = false, openSystem = false) {
        if (_singleton) return _singleton;

        function checkState(key) {
            const value = localStorage.getItem(key);
            if (typeof value === 'string') {
                if (value === 'undefined' || value === 'null' || value === 'false') return false;
                return true;
            }
            return !!value;
        }

        openFrame = openFrame || checkState('DebugFrame');
        openScene = openScene || checkState('DebugScene');
        openBuffers = openBuffers || checkState('DebugBuffers');
        openSystem = openSystem || checkState('DebugSystem');

        const buttonColor = getVariable('button-light') ?? '60, 60, 60';
        const backgroundColor = getVariable('background-light') ?? '32, 32, 32';
        const backgroundAlpha = getVariable('panel-transparency') ?? '1.0';
        const textColor = getVariable('text') ?? '170, 170, 170';
        const textLight = getVariable('text-light') ?? '225, 225, 225';

        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            #EyeDebug {
                position: absolute;
                display: flex;
                flex-direction: column;
                justify-content: left;
                text-align: left;
                left: 0;
                bottom: 0;
                margin: 0.25em;
                padding: 0;
                z-index: 1000; /* Debug Info */
                background: transparent;
            }

            .EyeDiv {
                user-select: none;
                pointer-events: none;
                margin: 0.35em;
                margin-bottom: 0;
                padding: 0.25em;
                border-radius: 0.71429em;
                background-color: rgba(${backgroundColor}, ${backgroundAlpha});
            }

            .EyeButtonRow {
                display: flex;
                background: transparent;
                margin: 0.35em;
            }

            .EyeDebugButton {
                filter: grayscale(100%);
                flex: 1 1 auto;
                border-radius: 100%;
                background-color: rgba(${backgroundColor}, ${backgroundAlpha});
                min-height: 2em;
                min-width: 2em;
                margin-left: 0.2em;
                margin-right: 0.2em;
                padding-bottom: 0.05em;
            }

            .EyeDebugButton:hover {
                filter: brightness(125%) grayscale(100%);
                box-shadow:
                    inset -1px 1px 1px -1px rgba(255, 255, 255, 0.2),
                    inset 2px -2px 2px -1px rgba(0, 0, 0, 0.75);
            }

            .EyeDebugButton.suey-selected {
                filter: brightness(100%);
                box-shadow: none;
            }

            #ButtonFrame { border: solid 2px rgba(${buttonColor}, 0.7); }
            #ButtonScene { border: solid 2px rgba(${buttonColor}, 0.7); }
            #ButtonBuffers { border: solid 2px rgba(${buttonColor}, 0.7); }
            #ButtonSystem { border: solid 2px rgba(${buttonColor}, 0.7); }

            #FrameFrame, #ButtonFrame.suey-selected { border: solid 2px rgba(0, 180, 175, 0.75); }
            #SceneFrame, #ButtonScene.suey-selected { border: solid 2px rgba(255, 113, 0, 0.75); }
            #BuffersFrame, #ButtonBuffers.suey-selected { border: solid 2px rgba(255, 93, 0, 0.75); }
            #SystemFrame, #ButtonSystem.suey-selected { border: solid 2px rgba(145, 223, 0, 0.75); }

            .EyeDebugButton.suey-selected:hover {
                filter: brightness(125%);
            }

            .EyeDebugButton:active {
                filter: brightness(100%);
                box-shadow:
                    inset -1px 1px 3px 1px rgba(0, 0, 0, 0.75),
                    inset  1px 1px 3px 1px rgba(0, 0, 0, 0.75),
                    inset -1px -1px 3px 1px rgba(0, 0, 0, 0.75),
                    inset  1px -1px 3px 1px rgba(0, 0, 0, 0.75);
            }

            .EyeDetails { /* closed */
                filter: brightness(0.75);
                padding: 0;
                margin: 0;
                left: 0;
                right: 0;
                width: 100%;
            }

            .EyeDetails[open] {
                filter: none;
                padding-top: 0.1em;
                min-width: 9em;
            }

            .EyeHeader {
                padding: 0.1em 0.3em;
                padding-top: 0;
                left: 0;
                width: 100%;
                margin: 0;
                font-size: 0.9em;
            }

            #FrameHeader { color: #00b4af; }
            #SceneHeader { color: #ff7100; }
            #BuffersHeader { color: #d8007f; }
            #SystemHeader { color: #75b300; }

            .EyeRow {
                display: flex;
                justify-content: space-between;
                padding: 0.1em;
                padding-left: 0.3em;
                padding-right: 0.3em;
                width: 100%;
                font-size: 0.8em;
                color: rgba(${textColor}, 0.8);
            }

            .EyeInfo, .EyeInfo > * {
                font-size: inherit;
                color: rgb(${textLight});
            }

            .Light {
                font-size: 12px;
                color: #a5f300;
            }

            .EyeImageHolder {
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                max-width: 1.35em;
                max-height: 1.35em;
            }

            .ColorIcon {
                filter: brightness(50%) sepia(1000%) saturate(350%) hue-rotate(calc(var(--rotate-hue) + 150deg));
            }

            .ColorComplement {
                filter: brightness(50%) sepia(1000%) saturate(350%) hue-rotate(calc(var(--rotate-hue) + 0deg));
            }

            .suey-rotate-colorize1 {
                filter: brightness(50%) sepia(1000%) saturate(350%) hue-rotate(calc(var(--rotate-hue) + 270deg));
            }

            .suey-rotate-colorize2 {
                filter: brightness(65%) sepia(1000%) saturate(350%) hue-rotate(calc(var(--rotate-hue) + 35deg));
            }
        `;
        document.head.appendChild(styleSheet);

        const dom = document.createElement('div');
        dom.id = 'EyeDebug';
        dom.innerHTML = `
            <div class="EyeDiv" id="FrameFrame">
                <div class="EyeHeader" id="FrameHeader">Frame</div>
                <div class="EyeRow">FPS<span class="EyeInfo" id="EyeFps">?</span></div>
                <div class="EyeRow">Render<span class="EyeInfo" id="EyeRender">?</span></div>
                <div class="EyeRow">Max<span class="EyeInfo" id="EyeMax">?</span></div>
                <div class="EyeRow">Draws <span class="EyeInfo" id="EyeDraws">?</span></div>
                </div>
            </div>

            <div class="EyeDiv" id="SceneFrame">
                <div class="EyeHeader" id="SceneHeader">Scene</div>
                <div class="EyeRow">Objects <span class="EyeInfo" id="EyeObjects">?</span></div>
                <div class="EyeRow">Lights <span class="EyeInfo" id="EyeLights">?</span></div>
                <div class="EyeRow">Vertices <span class="EyeInfo" id="EyeVertices">?</span></div>
                <div class="EyeRow">Triangles <span class="EyeInfo" id="EyeTriangles">?</span></div>
                </details>
            </div>

            <div class="EyeDiv" id="BuffersFrame">
                <div class="EyeHeader" id="BuffersHeader">Buffers</div>
                <div class="EyeRow">Programs <span class="EyeInfo" id="EyePrograms">?</span></div>
                <div class="EyeRow">Geometries <span class="EyeInfo" id="EyeGeometries">?</span></div>
                <div class="EyeRow">Textures <span class="EyeInfo" id="EyeTextures">?</span></div>
                </details>
            </div>

            <div class="EyeDiv" id="SystemFrame">
                <div class="EyeHeader" id="SystemHeader">System</div>
                <div class="EyeRow">Memory <span class="EyeInfo" id="EyeMemory">?</span></div>
                </details>
            </div>

            <div class="EyeButtonRow">
                <button class="EyeDebugButton" id="ButtonFrame">
                    <div class="EyeImageHolder ColorIcon">
                    <?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M253.007,34c123.372,0.146 224.847,101.621 224.993,224.993l0,0.007c0,123.431 -101.569,225 -225,225c-123.431,0 -225,-101.569 -225,-225c0,-123.431 101.569,-225 225,-225l0.007,0Zm-0.011,398.23c94.989,-0.118 173.116,-78.245 173.234,-173.234c-0.002,-95.029 -78.2,-173.226 -173.23,-173.226c-95.031,-0 -173.23,78.199 -173.23,173.23c-0,95.03 78.197,173.228 173.226,173.23Z" style="fill:#c0c0c0;"/><path d="M279.881,249.916l51.859,51.858c0.028,0.029 0.057,0.058 0.085,0.087c4.838,5.009 7.546,11.709 7.546,18.674c-0,14.746 -12.135,26.881 -26.881,26.881c-6.966,-0 -13.665,-2.707 -18.675,-7.546c-0.029,-0.028 -0.058,-0.056 -0.086,-0.085l-59.733,-59.733c-5.039,-5.037 -7.874,-11.879 -7.877,-19.004l0,-119.471c0,-14.746 12.135,-26.881 26.881,-26.881c14.746,-0 26.881,12.135 26.881,26.881l-0,108.339Z" style="fill:#c0c0c0;"/></svg>
                    </div>
                </button>

                <button class="EyeDebugButton" id="ButtonScene">
                    <div class="EyeImageHolder ColorComplement">
                    <?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M336.33,61.901c0.054,0.046 87.151,87.14 87.223,87.223c0.015,0.017 0.028,0.032 0.039,0.044c1.231,1.375 2.251,2.87 3.086,4.423c1.775,3.293 2.772,7.051 2.772,11.035l0,258.458c0,8.282 -3.289,16.224 -9.145,22.08l-1.192,1.191c-6.176,6.175 -14.551,9.645 -23.286,9.645l-260.361,0c-8.282,0 -16.225,-3.29 -22.08,-9.146l-1.191,-1.191c-6.176,-6.176 -9.645,-14.551 -9.645,-23.286l0,-333.461c0,-8.282 3.289,-16.224 9.145,-22.08l1.192,-1.191c6.176,-6.175 14.551,-9.645 23.286,-9.645l184.652,0c3.983,0 7.741,0.997 11.034,2.773c1.572,0.843 3.084,1.878 4.471,3.128Zm-51.29,107.446l-0,-69.22l-138.363,0l-0,311.746l238.646,0l-0,-211.463l-69.925,0c-7.603,0 -14.894,-3.02 -20.271,-8.396l-1.19,-1.191c-5.697,-5.696 -8.897,-13.422 -8.897,-21.476Zm42.579,-9.526l44,-0l-44,-44l-0,44Z" style="fill:#c0c0c0;"/></svg>
                    </div>
                </button>

                <button class="EyeDebugButton" id="ButtonBuffers">
                    <div class="EyeImageHolder suey-rotate-colorize1">
                    <?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M449.119,359.79c9.175,15.892 9.175,34.87 -0,50.764c-9.175,15.891 -25.611,25.382 -43.964,25.382l-298.311,0c-18.35,0 -34.783,-9.486 -43.961,-25.38c-9.177,-15.896 -9.177,-34.874 0,-50.766l149.154,-258.344c9.175,-15.893 25.611,-25.382 43.964,-25.382c18.353,-0 34.786,9.486 43.964,25.38l149.154,258.346Zm-338.984,23.483l291.732,-0l-145.866,-252.645l-145.866,252.645Z" style="fill:#c0c0c0;"/></svg>
                    </div>
                </button>

                <button class="EyeDebugButton" id="ButtonSystem">
                    <div class="EyeImageHolder suey-rotate-colorize2">
                    <?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M410.964,152.852c24.705,0 45.036,20.331 45.036,45.037l0,116.222c0,24.706 -20.331,45.037 -45.036,45.037l-13.075,-0l-0,32.445c-0,14.081 -11.586,25.666 -25.666,25.666c-14.081,0 -25.666,-11.585 -25.666,-25.666l-0,-32.445l-64.891,-0l-0,32.445c-0,14.081 -11.586,25.666 -25.666,25.666c-14.08,0 -25.666,-11.585 -25.666,-25.666l0,-32.445l-64.891,-0l0,32.445c0,14.081 -11.585,25.666 -25.666,25.666c-14.08,0 -25.666,-11.585 -25.666,-25.666l0,-32.445l-13.075,-0c-24.705,-0 -45.036,-20.331 -45.036,-45.037l0,-116.222c0,-24.706 20.331,-45.037 45.036,-45.037l13.075,0l0,-32.445c0,-14.081 11.586,-25.666 25.666,-25.666c14.081,-0 25.666,11.585 25.666,25.666l0,32.445l64.891,0l0,-32.445c0,-14.081 11.586,-25.666 25.666,-25.666c14.08,-0 25.666,11.585 25.666,25.666l-0,32.445l64.891,0l-0,-32.445c-0,-14.081 11.585,-25.666 25.666,-25.666c14.08,-0 25.666,11.585 25.666,25.666l-0,32.445l13.075,0Zm-303.632,154.964l297.336,-0l0,-103.632l-297.336,0l-0,103.632Z" style="fill:#c0c0c0;"/></svg>
                    </div>
                </button>
            </div>
        `;
        document.body.appendChild(dom);

        const frameFrame = document.getElementById('FrameFrame');
        const sceneFrame = document.getElementById('SceneFrame');
        const buffersFrame = document.getElementById('BuffersFrame');
        const systemFrame = document.getElementById('SystemFrame');

        const buttonFrame = document.getElementById('ButtonFrame');
        const buttonScene = document.getElementById('ButtonScene');
        const buttonBuffers = document.getElementById('ButtonBuffers');
        const buttonSystem = document.getElementById('ButtonSystem');

        buttonFrame.setAttribute('tooltip', 'Frame');
        buttonScene.setAttribute('tooltip', 'Scene');
        buttonBuffers.setAttribute('tooltip', 'Buffers');
        buttonSystem.setAttribute('tooltip', 'System');

        function toggleFrame(frame, button, open, storageKey) {
            if (open) {
                frame.style.display = '';
                button.classList.add('suey-selected');
            } else {
                frame.style.display = 'none';
                button.classList.remove('suey-selected');
            }
            localStorage.setItem(storageKey, open);
        }

        buttonFrame.addEventListener('click', () => {
            openFrame = !openFrame;
            toggleFrame(frameFrame, buttonFrame, openFrame, 'DebugFrame');
        });

        buttonScene.addEventListener('click', () => {
            openScene = !openScene;
            toggleFrame(sceneFrame, buttonScene, openScene, 'DebugScene');
        });

        buttonBuffers.addEventListener('click', () => {
            openBuffers = !openBuffers;
            toggleFrame(buffersFrame, buttonBuffers, openBuffers, 'DebugBuffers');
        });

        buttonSystem.addEventListener('click', () => {
            openSystem = !openSystem;
            toggleFrame(systemFrame, buttonSystem, openSystem, 'DebugSystem');
        });

        toggleFrame(frameFrame, buttonFrame, openFrame, 'DebugFrame');
        toggleFrame(sceneFrame, buttonScene, openScene, 'DebugScene');
        toggleFrame(buffersFrame, buttonBuffers, openBuffers, 'DebugBuffers');
        toggleFrame(systemFrame, buttonSystem, openSystem, 'DebugSystem');

        const domFps = document.getElementById('EyeFps');
        const domRender = document.getElementById('EyeRender');
        const domMax = document.getElementById('EyeMax');
        const domDraws = document.getElementById('EyeDraws');

        const domObjects = document.getElementById('EyeObjects');
        const domLights = document.getElementById('EyeLights');
        const domVertices = document.getElementById('EyeVertices');
        const domTriangles = document.getElementById('EyeTriangles');

        const domPrograms = document.getElementById('EyePrograms');
        const domGeometries = document.getElementById('EyeGeometries');
        const domTextures = document.getElementById('EyeTextures');

        const domMem = document.getElementById('EyeMemory');

        const frameClock = new Clock();
        const elapsedClock = new Clock();

        /***** START / STOP ******/

        this.#startInternal = function() {
            frameClock.start();
            renderer.drawCallCount = 0;
        };

        this.#stopInternal = function() {
            frameClock.stop();

            elapsedClock.getDeltaTime();
            const elapsed = elapsedClock.getElapsedTime();
            if (elapsed > 1) {
                // NOTE: Setting 'firstChild' sets actual 'Text' node itself and does not increase DOM Node count
                // https://stackoverflow.com/questions/73253005/where-are-these-dom-nodes-coming-from-when-only-changing-innertext

                // Actual fps
                const fps = elapsedClock.count() / elapsed;
                if (domFps) domFps.firstChild.textContent = `${fps.toFixed(1)} fps`;
                elapsedClock.reset();

                // Average time of actual rendering frames
                const frameAvg = frameClock.averageDelta();
                if (domRender) domRender.firstChild.textContent = `${frameAvg.toFixed(2)} ms`;
                if (domMax) domMax.firstChild.textContent = `~ ${Math.floor(1000 / frameAvg)} fps`;
                frameClock.reset();

                // Draw call count
                if (domDraws) domDraws.firstChild.textContent = `${renderer.drawCallCount}`;

                // Memory usage
                if (domMem && performance.memory) {
                    const memory = performance.memory.usedJSHeapSize / 1048576;
                    domMem.firstChild.textContent = `${memory.toFixed(2)} mb`;
                }

                // Scene Info
                let objects = 0, vertices = 0, triangles = 0, lights = 0;
                const scene = renderer.lastScene;
                if (scene && scene.isTransform) {
                    scene.traverseVisible((object) => {
                        objects++;
                        if (object.isLight) lights++;
                        if (object.isMesh && object.geometry) {
                            const geometry = object.geometry;
                            vertices += geometry.attributes.position.count;
                            const instance = (geometry.isInstanced) ? geometry.instancedCount : 1;
                            if (geometry.attributes.index) triangles += (geometry.attributes.index.count / 3) * instance;
                            else triangles += (geometry.attributes.position.count / 3) * instance;
                        }
                    });
                }

                domObjects.firstChild.textContent = `${objects}`;
                domLights.firstChild.textContent = `${lights}`;
                domVertices.firstChild.textContent = `${vertices}`;
                domTriangles.firstChild.textContent = `${triangles.toFixed(0)}`;

                domPrograms.firstChild.textContent = `${renderer.info.programs}`;
                domGeometries.firstChild.textContent = `${renderer.info.geometries}`;
                domTextures.firstChild.textContent = `${renderer.info.textures}`;
            }
        };

        _singleton = this;
    }

    startFrame() {
        this.#startInternal();
    }

    endFrame() {
        this.#stopInternal();
    }

}

/******************** INTERNAL ********************/

/**
 * Gets a CSS variable, hyphens optional, ex: getVariable('--tooltip-delay') or getVariable('tooltip-delay');
 *
 * @param {String} variable
 * @returns variable as string, undefined if variable not found
 */
function getVariable(variable) {
    variable = String(variable);
    if (!variable.startsWith('--')) variable = '--' + variable;
    const rootElement = document.querySelector(':root');
    const value = getComputedStyle(rootElement).getPropertyValue(variable);
    return ((value === '') ? undefined : value);
}

/** Sets a CSS variable by name, hyphens optional */
function setVariable(variable, valueAsString) {
    variable = String(variable);
    if (!variable.startsWith('--')) variable = '--' + variable;
    const rootElement = document.querySelector(':root');
    rootElement.style.setProperty(variable, valueAsString);
}

/**
 * @description SeaGL
 * @about       WebGL 2 graphics library built for games.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/salinityengine/seagl
 */

export { Assets, Atlas, BaseSegment, Billboard, Box, Camera, Capabilities, Clock, Color, ColorFunc$1 as ColorFunc, CubicBezierSegment, Curve, Cylinder, Debug, Euler, EulerFunc$1 as EulerFunc, GLTFAnimation, GLTFLoader, GLTFSkin, GeomUtils$1 as GeomUtils, Geometry, ImageLoader, InstancedMesh, LineSegment, Mat3, Mat3Func$1 as Mat3Func, Mat4, Mat4Func$1 as Mat4Func, MathUtils$1 as MathUtils, Mesh, Orbit, Packer, Path, Plane, Polygon, Polyline, Post, Program, QuadraticBezierSegment, Quat, QuatFunc$1 as QuatFunc, Raycast, RenderTarget, Renderer, Sphere, Sprite, Texture, TextureArray, TextureLoader, Torus, Transform, Triangle, Tube, Uber, Vec2, Vec2Func$1 as Vec2Func, Vec3, Vec3Func$1 as Vec3Func, Vec4, Vec4Func$1 as Vec4Func, WireMesh };
