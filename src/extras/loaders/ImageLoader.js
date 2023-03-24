class ImageLoader {

    static load(src, onLoad) {
        const image = new Image(128, 128);
        image.crossOrigin = '';
        image.src = src;
        if (typeof onLoad === 'function') image.addEventListener('load', onLoad);
        return image;
    }

}

export { ImageLoader };
