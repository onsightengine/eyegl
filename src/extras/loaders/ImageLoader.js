import { uuid } from '../../math/MathUtils.js';

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

export { ImageLoader };
