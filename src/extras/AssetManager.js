import { TextureLoader } from '../extras/loaders/TextureLoader.js';

class AssetManager {

    static #assets = {};

    static assetType(asset) {
        if (asset.isGeometry) return 'geometry';
        if (asset.isTexture) return 'texture';
        return 'asset';
    }

    static getLibrary(type) {
        const library = [];
        for (const [uuid, asset] of Object.entries(this.#assets)) {
            if (AssetManager.assetType(asset) === type) library.push(asset);
        }
        return library;
    }

    /***** Add / Get / Remove *****/

    static addAsset(assetOrArray) {
        if (! assetOrArray) return;
        const assetArray = (Array.isArray(assetOrArray)) ? assetOrArray : [ assetOrArray ];
        for (let i = 0; i < assetArray.length; i++) {
            const asset = assetArray[i];
            if (! asset.uuid) continue;
            if (! asset.name || asset.name === '') asset.name = asset.constructor.name;
            this.#assets[asset.uuid] = asset;
        }
        return assetOrArray;
    }

    static getAsset(uuid) {
        if (! uuid) return;
        if (uuid.uuid) uuid = uuid.uuid;
        return this.#assets[uuid];
    }

    static removeAsset(assetOrArray, flush = true) {
        if (! assetOrArray) return;
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

    /***** JSON *****/

    static clear() {
        for (let uuid in _assets) {
            AssetManager.removeAsset(_assets[uuid], true);
        }
    }

    static fromJSON(json) {

        // Clear Assets
        AssetManager.clear()

        // Add to Assets
        function addLibraryToAssets(library) {
            for (const [uuid, asset] of Object.entries(library)) {
                AssetManager.addAsset(asset);
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

    static toJSON(meta) {

        const json = {};

        // if (! meta) meta = {};
        // if (! meta.geometries) meta.geometries = {};
        // if (! meta.images) meta.images = {};
        // if (! meta.textures) meta.textures = {};

        // const stopRoot = {
        //     images: {},
        //     textures: {},
        //     materials: {},
        // };

        // // Geometries
        // const geometries = AssetManager.getLibrary('geometry');
        // for (let i = 0; i < geometries.length; i++) {
        //     const geometry = geometries[i];
        //     if (! meta.geometries[geometry.uuid]) meta.geometries[geometry.uuid] = geometry.toJSON(meta);
        // }

        // // Textures
        // const textures = AssetManager.getLibrary('texture');
        // for (let i = 0; i < textures.length; i++) {
        //     const texture = textures[i];
        //     if (! meta.textures[texture.uuid]) meta.textures[texture.uuid] = texture.toJSON(meta);
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

export { AssetManager };
