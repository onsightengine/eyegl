import { Texture } from '../../core/Texture.js';
import { KTXTexture } from './KTXTexture.js';

// For compressed textures, generate using https://github.com/TimvanScherpenzeel/texture-compressor

let cache = {};
const supportedExtensions = [];

export class TextureLoader {

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

        // Only props relevant to KTXTexture
        wrapS = renderer.gl.CLAMP_TO_EDGE,
        wrapT = renderer.gl.CLAMP_TO_EDGE,
        anisotropy = 0,

        // For regular images
        format = renderer.gl.RGBA,
        internalFormat = format,
        generateMipmaps = true,
        minFilter = generateMipmaps ? renderer.gl.NEAREST_MIPMAP_LINEAR : renderer.gl.LINEAR,
        magFilter = renderer.gl.LINEAR,
        premultiplyAlpha = false,
        unpackAlignment = 4,
        flipY = true,
    } = {}) {
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

        // Stringify props
        const cacheID =
            src +
            wrapS +
            wrapT +
            anisotropy +
            format +
            internalFormat +
            generateMipmaps +
            minFilter +
            magFilter +
            premultiplyAlpha +
            unpackAlignment +
            flipY +
            renderer.id;

        // Check cache for existing texture
        if (cache[cacheID]) return cache[cacheID];

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
                texture.loaded = this.loadKTX(src, texture);
                break;
            case 'webp':
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
                texture.loaded = this.loadImage(src, texture, flipY);
                break;
            default:
                console.warn('No supported format supplied');
                texture = new Texture();
        }

        texture.ext = ext;
        cache[cacheID] = texture;
        return texture;
    }

    static getSupportedExtensions() {
        if (supportedExtensions.length) return supportedExtensions;

        const logWarnings = false;

        const extensions = {
            pvrtc: renderer.getExtension('WEBGL_compressed_texture_pvrtc', logWarnings),
            s3tc: renderer.getExtension('WEBGL_compressed_texture_s3tc', logWarnings),
            etc1: renderer.getExtension('WEBGL_compressed_texture_etc1', logWarnings),
            astc: renderer.getExtension('WEBGL_compressed_texture_astc', logWarnings),
            bc7: renderer.getExtension('EXT_texture_compression_bptc', logWarnings),
        };

        for (const ext in extensions) if (extensions[ext]) supportedExtensions.push(ext);

        // Check for WebP support
        if (detectWebP()) supportedExtensions.push('webp');

        // Formats supported by all
        supportedExtensions.push('png', 'jpg');

        return supportedExtensions;
    }

    static loadKTX(src, texture) {
        return fetch(src)
            .then((res) => res.arrayBuffer())
            .then((buffer) => texture.parseBuffer(buffer));
    }

    static loadImage(src, texture, flipY) {
        return decodeImage(src, flipY).then((imgBmp) => {
            // Catch non POT textures and update params to avoid errors
            if (!powerOfTwo(imgBmp.width) || !powerOfTwo(imgBmp.height)) {
                if (texture.generateMipmaps) texture.generateMipmaps = false;
                if (texture.minFilter === renderer.gl.NEAREST_MIPMAP_LINEAR) texture.minFilter = renderer.gl.LINEAR;
                if (texture.wrapS === renderer.gl.REPEAT) texture.wrapS = texture.wrapT = renderer.gl.CLAMP_TO_EDGE;
            }

            texture.image = imgBmp;

            // For createImageBitmap, close once uploaded
            texture.onUpdate = () => {
                if (imgBmp.close) imgBmp.close();
                texture.onUpdate = null;
            };

            return imgBmp;
        });
    }

    static clearCache() {
        cache = {};
    }
}

function detectWebP() {
    return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
}

function powerOfTwo(value) {
    // (width & (width - 1)) !== 0
    return Math.log2(value) % 1 === 0;
}

function decodeImage(src, flipY) {
    return new Promise((resolve) => {
        // Only chrome's implementation of createImageBitmap is fully supported
        const isChrome = navigator.userAgent.toLowerCase().includes('chrome');
        if (!!window.createImageBitmap && isChrome) {
            fetch(src, { mode: 'cors' })
                .then(r => r.blob())
                .then(b => createImageBitmap(b, { imageOrientation: flipY ? 'flipY' : 'none', premultiplyAlpha: 'none' }))
                .then(resolve);
        } else {
            const img = new Image();

            img.crossOrigin = '';
            img.src = src;
            img.onload = () => resolve(img);
        }
    });
}
