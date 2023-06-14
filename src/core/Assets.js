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

    add(/* assets, seperated by commas */) {
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
        for (let uuid in _assets) {
            this.removeAsset(_assets[uuid], true);
        }
    }

    fromJSON(json) {

        // Clear Assets
        this.clear()

        // Add to Assets
        function addLibraryToAssets(library) {
            for (const [uuid, asset] of Object.entries(library)) {
                this.addAsset(asset);
            }
        }

        // // Load Assets
		// const objectLoader = new THREE.ObjectLoader();
		// const geometries = objectLoader.parseGeometries(json.geometries, {});
		// const images = objectLoader.parseImages(json.images);
		// const textures = objectLoader.parseTextures(json.textures, images);

        // addLibraryToAssets(geometries);
        // addLibraryToAssets(images);
        // addLibraryToAssets(textures);

    }

    toJSON(meta) {

        const json = {};

        // if (!meta) meta = {};
        // if (!meta.geometries) meta.geometries = {};
        // if (!meta.images) meta.images = {};
        // if (!meta.textures) meta.textures = {};

        // const stopRoot = {
        //     images: {},
        //     textures: {},
        //     materials: {},
        // };

        // // Geometries
        // const geometries = Assets.library('geometry');
        // for (let i = 0; i < geometries.length; i++) {
        //     const geometry = geometries[i];
        //     if (!meta.geometries[geometry.uuid]) meta.geometries[geometry.uuid] = geometry.toJSON(meta);
        // }

        // // Textures
        // const textures = Assets.library('texture');
        // for (let i = 0; i < textures.length; i++) {
        //     const texture = textures[i];
        //     if (!meta.textures[texture.uuid]) meta.textures[texture.uuid] = texture.toJSON(meta);
        // }

        // // Add 'meta' caches to 'json' as arrays
        // for (const library in meta) {
        //     const valueArray = [];
        //     for (const key in meta[library]) {
        //         const data = meta[library][key];
        //         delete data.metadata;
        //         valueArray.push(data);
        //     }
        //     if (valueArray.length > 0) json[library] = valueArray;
        // }

        return json;
    }

}

export { Assets };
