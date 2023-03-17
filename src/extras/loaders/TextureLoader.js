import { KTXTexture } from './KTXTexture.js';
import { Texture } from '../../core/Texture.js';

// For compressed textures, generate using https://github.com/TimvanScherpenzeel/texture-compressor

class TextureLoader {

    static #cache = {};
    static #supportedExtensions = [];

    static load({
        // Source (string OR object)
        src, /* i.e. src: './dragon.png' OR src: { jpg: 'dragon.jpg', png: 'dragon.png' } */

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

        // Callback
        onLoad = function() {},
    } = {}) {
        if (! src || src === '') {
            console.warn(`TextureLoader: No source provided`);
            return new Texture();
        }

        // Extension
        let ext = 'none';
        if (typeof src === 'string') {
            ext = src.split('.').pop().split('?')[0].toLowerCase();
        } else if (typeof src === 'object') {
            // Check supported extensions and provided list to choose best option
            // Uses first supported match, so put in order of preference
            const support = this.getSupportedExtensions();
            for (const filetype in src) {
                if (support.includes(filetype.toLowerCase())) {
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
            // Following compressed files end with ktx extension ('___.ktx')
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
                loadKTX(src, ext, texture).then(() => {
                    texture.loaded = true;
                    onLoad();
                });
                break;
            case 'webp':
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
            case 'svg':
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
                loadImage(src, ext, texture, flipY).then(() => {
                    texture.loaded = true;
                    onLoad();
                });
                break;
            default:
                console.warn(`TextureLoader: Format not supported - '${ext}'`);
                texture = new Texture();
        }

        texture.ext = ext;
        TextureLoader.#cache[cacheID] = texture;
        return texture;
    }

    static getSupportedExtensions(logWarnings = false) {
        if (TextureLoader.#supportedExtensions.length) return TextureLoader.#supportedExtensions;

        // Check compressed image formats
        const extensions = {
            pvrtc: renderer.getExtension('WEBGL_compressed_texture_pvrtc', logWarnings),
            s3tc: renderer.getExtension('WEBGL_compressed_texture_s3tc', logWarnings),
            etc1: renderer.getExtension('WEBGL_compressed_texture_etc1', logWarnings),
            astc: renderer.getExtension('WEBGL_compressed_texture_astc', logWarnings),
            bc7: renderer.getExtension('EXT_texture_compression_bptc', logWarnings),
        };
        for (const ext in extensions) {
            if (extensions[ext]) TextureLoader.#supportedExtensions.push(ext);
        }

        // Standard image formats
        TextureLoader.#supportedExtensions.push('png', 'jpg', 'gif', 'svg');
        if (detectWebP()) TextureLoader.#supportedExtensions.push('webp');

        return TextureLoader.#supportedExtensions;
    }

    static removeFromCache(texture) {
        for (let url in TextureLoader.#cache) {
            if (TextureLoader.#cache[url].uuid === texture.uuid) {
                delete TextureLoader.#cache[url];
            }
        }
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

function nameFromUrl(url) {
    let imageName = new String(url.replace(/^.*[\\\/]/, ''));       // Filename only
    imageName = imageName.replace(/\.[^/.]+$/, "");                 // Remove extension
    return imageName;
}

async function loadKTX(src, ext, texture) {
    return fetch(src)
        .then((res) => res.arrayBuffer())
        .then((buffer) => texture.parseBuffer(buffer));
}

async function loadImage(src, ext, texture, flipY) {
    const isSvg = (ext === 'svg');
    const isChrome = navigator.userAgent.toLowerCase().includes('chrome');
    const tryImageBitmap = !!window.createImageBitmap && isChrome && !isSvg;
    return new Promise((resolve, reject) => {
        //if (tryImageBitmap) decodeImageBitmap();
        //else
        decodeImage();

        function decodeImage() {
            const image = new Image();
            image.crossOrigin = '';
            image.src = src;
            image.onload = () => resolve(image);
        }

        function decodeImageBitmap() {
            fetch(src, { mode: 'cors' })
                .then(response => response.blob(), decodeImage)
                .then(image => createImageBitmap(image, { imageOrientation: flipY ? 'flipY' : 'none', premultiplyAlpha: 'none' }), decodeImage)
                .then(resolve, decodeImage);
        }
    }).then((image) => {
        texture.name = nameFromUrl(src);
        texture.image = image;

        // For image bitmap ('createImageBitmap'), close once uploaded
        texture.onUpdate = () => {
            if (image.close) image.close();
            texture.onUpdate = null;
        };

        return image;
    });
}
