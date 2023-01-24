import { KTXTexture } from './KTXTexture.js';
import { Texture } from '../../core/Texture.js';

// For compressed textures, generate using https://github.com/TimvanScherpenzeel/texture-compressor

class TextureLoader {

    static #cache = {};
    static #supportedExtensions = [];

    static load({
        src, // string or object of extension:src key-values
        // {
        //     pvrtc: '...ktx',
        //     s3tc: '...ktx',
        //     etc: '...ktx',
        //     etc1: '...ktx',
        //     astc: '...ktx',
        //     webp: '...webp',
        //     jpg: '...jpg',
        //     png: '...png',
        // }

        // Properties for Texture only
        format = renderer.gl.RGBA,
        internalFormat = format,
        generateMipmaps = true,
        premultiplyAlpha = false,
        unpackAlignment = 4,
        flipY = true,

        // Properties for Texture & KTXTexture
        wrapS = renderer.gl.CLAMP_TO_EDGE,
        wrapT = renderer.gl.CLAMP_TO_EDGE,
        anisotropy = 0,
        minFilter = generateMipmaps ? renderer.gl.NEAREST_MIPMAP_LINEAR : renderer.gl.LINEAR,
        magFilter = renderer.gl.LINEAR,
    } = {}) {

        if (! src || src === '') {
            console.warn(`TextureLoader: No source provided`);
            return new Texture();
        }

        const support = this.getSupportedExtensions();
        let ext = 'none';

        // If src is string, determine which format from the extension
        if (typeof src === 'string') {
            ext = src.split('.').pop().split('?')[0].toLowerCase();
        }

        // If src is object, use supported extensions and provided list to choose best option
        // Get first supported match, so put in order of preference
        if (typeof src === 'object') {
            for (const prop in src) {
                if (support.includes(prop.toLowerCase())) {
                    ext = prop.toLowerCase();
                    src = src[prop];
                    break;
                }
            }
        }

        // Check cache for existing texture
        const cacheID = src + renderer.id;
        if (this.#cache[cacheID]) return this.#cache[cacheID];

        let texture;
        switch (ext) {
            case 'ktx':
            case 'pvrtc':
            case 's3tc':
            case 'etc':
            case 'etc1':
            case 'astc':
                // Load compressed texture using KTX format
                texture = new KTXTexture({
                    src,
                    wrapS,
                    wrapT,
                    anisotropy,
                    minFilter,
                    magFilter,
                });
                texture.loaded = loadKTX(src, texture);
                break;
            case 'webp':
            case 'svg':
            case 'jpg':
            case 'jpeg':
            case 'png':
                texture = new Texture({
                    wrapS,
                    wrapT,
                    anisotropy,
                    format,
                    internalFormat,
                    generateMipmaps,
                    minFilter,
                    magFilter,
                    premultiplyAlpha,
                    unpackAlignment,
                    flipY,
                });
                texture.loaded = loadImage(src, texture, flipY);
                break;
            default:
                console.warn(`TextureLoader: Format not supported - '${ext}'`);
                texture = new Texture();
        }

        texture.ext = ext;
        this.#cache[cacheID] = texture;
        return texture;
    }

    static getSupportedExtensions(logWarnings = false) {
        if (this.#supportedExtensions.length) return this.#supportedExtensions;

        const extensions = {
            pvrtc: renderer.getExtension('WEBGL_compressed_texture_pvrtc', logWarnings),
            s3tc: renderer.getExtension('WEBGL_compressed_texture_s3tc', logWarnings),
            etc1: renderer.getExtension('WEBGL_compressed_texture_etc1', logWarnings),
            astc: renderer.getExtension('WEBGL_compressed_texture_astc', logWarnings),
            bc7: renderer.getExtension('EXT_texture_compression_bptc', logWarnings),
        };

        for (const ext in extensions) {
            if (extensions[ext]) this.#supportedExtensions.push(ext);
        }

        // Check for WebP support
        if (detectWebP()) this.#supportedExtensions.push('webp');

        // Formats supported by all
        this.#supportedExtensions.push('png', 'jpg', 'svg');

        return this.#supportedExtensions;
    }

}

export { TextureLoader };

/***** Internal *****/

function detectWebP() {
    return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
}

function powerOfTwo(value) {
    // (width & (width - 1)) !== 0
    return Math.log2(value) % 1 === 0;
}

function loadKTX(src, texture) {
    return fetch(src)
        .then((res) => res.arrayBuffer())
        .then((buffer) => texture.parseBuffer(buffer));
}

function loadImage(src, texture, flipY) {
    return decodeImage(src, flipY).then((imgBmp) => {
        // // Catch non POT textures and update params to avoid errors
        // if (! powerOfTwo(imgBmp.width) || ! powerOfTwo(imgBmp.height)) {
        //     if (texture.generateMipmaps) texture.generateMipmaps = false;
        //     if (texture.minFilter === renderer.gl.NEAREST_MIPMAP_LINEAR) texture.minFilter = renderer.gl.LINEAR;
        //     if (texture.wrapS === renderer.gl.REPEAT) texture.wrapS = texture.wrapT = renderer.gl.CLAMP_TO_EDGE;
        // }

        texture.image = imgBmp;

        // For createImageBitmap, close once uploaded
        texture.onUpdate = () => {
            if (imgBmp.close) imgBmp.close();
            texture.onUpdate = null;
        };

        return imgBmp;
    });
}

function decodeImage(src, flipY) {
    return new Promise((resolve) => {
        // Only chrome's implementation of createImageBitmap is fully supported
        const isChrome = navigator.userAgent.toLowerCase().includes('chrome');
        if (!!window.createImageBitmap && isChrome) {
            fetch(src, { mode: 'cors' })
                .then(response => response.blob())
                .then(image => createImageBitmap(image, { imageOrientation: flipY ? 'flipY' : 'none', premultiplyAlpha: 'none' }))
                .then(resolve);
        } else {
            const img = new Image();
            img.crossOrigin = '';
            img.src = src;
            img.onload = () => resolve(img);
        }
    });
}
