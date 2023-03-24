import { ImageLoader } from './ImageLoader.js';
import { Texture } from '../../core/Texture.js';

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
                texture.image = ImageLoader.load(src, onLoad);
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

export { TextureLoader };
