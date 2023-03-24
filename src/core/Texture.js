import { uuid } from '../extras/utils/MathUtils.js';

// TODO: delete (flush)  texture
// TODO: use texSubImage2D for updates (video or when loaded)
// TODO: need? encoding = linearEncoding
// TODO: support non-compressed mipmaps uploads

const _emptyPixel = new Uint8Array(4);
let _canvas, _ctx;
let _idGenerator = 1;

class Texture {

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

        this.store = {
            image: null,
        };

        // Alias for state store to avoid redundant calls for global state
        renderer.glState = renderer.state;

        // State store to avoid redundant calls for per-texture state
        this.state = {};
        this.state.minFilter = gl.NEAREST_MIPMAP_LINEAR;
        this.state.magFilter = gl.LINEAR;
        this.state.wrapS = gl.REPEAT;
        this.state.wrapT = gl.REPEAT;
        this.state.anisotropy = 0;
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
        const needsUpdate = this.needsUpdate || this.image !== this.store.image;

        // Make sure that texture is bound to its texture unit
        if (needsUpdate || renderer.glState.textureUnits[textureUnit] !== this.id) {
            // Set active texture unit to perform texture functions
            renderer.activeTexture(textureUnit);
            this.bind();
        }

        if (!needsUpdate) return;
        this.needsUpdate = false;

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
        if (this.image) {
            if (Array.isArray(this.image) && this.image.length > 0) {
                if (this.image[0].width) {
                    this.width = this.image[0].width;
                    this.height = this.image[0].height;
                }
            } else if (this.image.width) {
                this.width = this.image.width;
                this.height = this.image.height;
            }

            // Texture Array
            if (this.target === gl.TEXTURE_2D_ARRAY) {
                console.log(this.image, this.width, this.height);

                if (!Array.isArray(this.image)) this.image = [ this.image ];
                const depth = this.image.length;
                const pixelCount = this.width * this.height;
                const pixels = new Uint8Array(pixelCount * depth * 4);

                // Canvas used for copying
                if (!_canvas) _canvas = document.createElement('canvas');
                if (! _ctx) _ctx = _canvas.getContext("2d", { willReadFrequently: true });
                _canvas.width = this.width;
                _canvas.height = this.height;

                // IMAGE
                // Copy all images
                let index = 0;
                for (let i = 0; i < this.image.length; i++) {
                    _ctx.drawImage(this.image[i], 0, 0);
                    const imageData = _ctx.getImageData(0, 0, this.width, this.height);
                    const imagePixels = new Uint8Array(imageData.data.buffer);
                    for (let j = 0; j < pixelCount * 4; j += 4) {
                        pixels[index + 0] = imagePixels[j + 0]; // red
                        pixels[index + 1] = imagePixels[j + 1]; // green
                        pixels[index + 2] = imagePixels[j + 2]; // blue
                        pixels[index + 3] = imagePixels[j + 3]; // alpha
                        index += 4;
                    }
                }

                // RENDER TARGET
                // // Copy all images
                // let index = 0;
                // for (let i = 0; i < this.image.length; i++) {
                //     // Read pixel data from target
                //     const imagePixels = new Uint8Array(pixelCount * 4);
                //     renderer.bindFramebuffer(this.image[i]);
                //     renderer.gl.readPixels(
                //         0, 0, this.width, this.height,
                //         gl.RGBA,            // format
                //         gl.UNSIGNED_BYTE,   // type
                //         imagePixels
                //     );
                //     // Copy to Sampler2DArray
                //     for (let j = 0; j < pixelCount * 4; j += 4) {
                //         pixels[index + 0] = imagePixels[j + 0]; // red
                //         pixels[index + 1] = imagePixels[j + 1]; // green
                //         pixels[index + 2] = imagePixels[j + 2]; // blue
                //         pixels[index + 3] = imagePixels[j + 3]; // alpha
                //         index += 4;
                //     }
                // }

                gl.texImage3D(
                    gl.TEXTURE_2D_ARRAY,
                    this.level,
                    this.internalFormat,
                    this.width, this.height, depth,
                    0,
                    this.format,
                    this.type,
                    pixels
                );
            // Cube Map
            } else if (this.target === gl.TEXTURE_CUBE_MAP) {
                for (let i = 0; i < 6; i++) {
                    gl.texImage2D(
                        gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                        this.level,
                        this.internalFormat,
                        this.format,
                        this.type,
                        this.image[i]
                    );
                }
            // Data
            } else if (ArrayBuffer.isView(this.image)) {
                gl.texImage2D(
                    this.target,
                    this.level,
                    this.internalFormat,
                    this.width, this.height,
                    0,
                    this.format,
                    this.type,
                    this.image
                );
            // Compressed
            } else if (this.image.isCompressedTexture) {
                for (let level = 0; level < this.image.length; level++) {
                    gl.compressedTexImage2D(
                        this.target,
                        level,
                        this.internalFormat,
                        this.image[level].width,
                        this.image[level].height,
                        0,
                        this.image[level].data
                    );
                }
            // Standard
            } else {
                gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
            }

            // Mipmaps
            if (this.generateMipmaps) gl.generateMipmap(this.target);

            // Callback for when data is pushed to GPU
            if (this.onUpdate) this.onUpdate();

        // No Image
        } else {
            // Texture Array
            if (this.target === gl.TEXTURE_2D_ARRAY) {
                gl.texImage3D(this.target, 0, gl.RGBA, 1, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, _emptyPixel);
            // Cube Map
            } else if (this.target === gl.TEXTURE_CUBE_MAP) {
                // Upload empty pixel for each side while no image to avoid errors while image or video loading
                for (let i = 0; i < 6; i++) {
                    gl.texImage2D(
                        gl.TEXTURE_CUBE_MAP_POSITIVE_X + i,
                        0,
                        gl.RGBA,
                        1,
                        1,
                        0,
                        gl.RGBA,
                        gl.UNSIGNED_BYTE,
                        _emptyPixel
                    );
                }
            // Render Target
            } else if (this.width) {
                // Image intentionally left null for RenderTarget
                gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
            // Standard
            } else {
                // Upload empty pixel if no image to avoid errors while image or video loading
                gl.texImage2D(this.target, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, _emptyPixel);
            }
        }

        // Store
        this.store.image = this.image;
    }

    flush() {

        // TODO

        renderer.info.textures--;

    }

}

export { Texture };
