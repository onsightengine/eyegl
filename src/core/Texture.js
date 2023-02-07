import { uuid } from '../extras/utils/MathUtils.js';

// TODO: delete (flush)  texture
// TODO: use texSubImage2D for updates (video or when loaded)
// TODO: need? encoding = linearEncoding
// TODO: support non-compressed mipmaps uploads

const _emptyPixel = new Uint8Array(4);
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
        flipY = target == renderer.gl.TEXTURE_2D ? true : false,
        anisotropy = 0,
        level = 0,
        width, // used for RenderTargets or Data Textures
        height = width,
    } = {}) {
        if (! renderer) console.error(`Texture.constructor: Renderer not found`);
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

    update(textureUnit = 0) {
        const gl = renderer.gl;
        const needsUpdate = ! (this.image === this.store.image && ! this.needsUpdate);

        // Make sure that texture is bound to its texture unit
        if (needsUpdate || renderer.glState.textureUnits[textureUnit] !== this.id) {
            // Set active texture unit to perform texture functions
            renderer.activeTexture(textureUnit);
            this.bind();
        }

        if (! needsUpdate) return;
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

        if (this.image) {
            if (this.image.width) {
                this.width = this.image.width;
                this.height = this.image.height;
            }

            if (this.target === gl.TEXTURE_CUBE_MAP) {
                // For cube maps
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
            } else if (ArrayBuffer.isView(this.image)) {
                // Data texture
                gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, this.image);
            } else if (this.image.isCompressedTexture) {
                // Compressed texture
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
            } else {
                // Regular texture
                gl.texImage2D(this.target, this.level, this.internalFormat, this.format, this.type, this.image);
            }

            if (this.generateMipmaps) {
                gl.generateMipmap(this.target);
            }

            // Callback for when data is pushed to GPU
            if (this.onUpdate) this.onUpdate();
        } else {
            if (this.target === gl.TEXTURE_CUBE_MAP) {
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
            } else if (this.width) {
                // Image intentionally left null for RenderTarget
                gl.texImage2D(this.target, this.level, this.internalFormat, this.width, this.height, 0, this.format, this.type, null);
            } else {
                // Upload empty pixel if no image to avoid errors while image or video loading
                gl.texImage2D(this.target, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, _emptyPixel);
            }
        }

        this.store.image = this.image;
    }

    flush() {

        // TODO

        renderer.info.textures--;

    }

}

export { Texture };
