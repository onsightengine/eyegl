// TODO: delete (flush)  texture
// TODO: use texSubImage2D for updates (video or onLoad)
// TODO: need? encoding = linearEncoding
// TODO: support non-compressed mipmaps uploads

import { uuid } from '../math/MathUtils.js';

const _emptyPixel = new Uint8Array(4);
let _canvas, _ctx;
let _idGenerator = 1;

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
        this.id = _idGenerator++;

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
                        if (!_canvas) _canvas = document.createElement('canvas');
                        if (!_ctx) _ctx = _canvas.getContext('2d', { willReadFrequently: true });
                        _canvas.width = this.width;
                        _canvas.height = this.height;
                        ctx = _ctx;
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

export { Texture };
