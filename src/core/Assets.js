import { TextureLoader } from '../extras/loaders/TextureLoader.js';

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

    add(/* assets, separated by commas */) {
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
        for (const uuid in this.#assets) {
            this.removeAsset(this.#assets[uuid], true);
        }
    }

    fromJSON(json) {
        this.clear()
        //
        // TODO
        //
    }

    toJSON(meta) {
        const json = {};
        //
        // TODO
        //
        return json;
    }

}

export { Assets };
