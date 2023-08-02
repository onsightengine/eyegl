import { ImageLoader } from './ImageLoader.js';
import { Packer } from '../../libs/Packer.js';
import { Texture } from '../../core/Texture.js';

const MAX_SIZE = 4096;

class Atlas {

    #boxes = [];
    #images = [];
    #layers = 0;
    #size = 1;

    constructor(border = 1) {
        const gl = renderer.gl;

        this.border = border;
        this.texture = new Texture({
            image: [],
            target: gl.TEXTURE_2D_ARRAY
        });
    }

    length() {
        return this.#layers;
    }

    add(image) {
        if (!image) return;

        // Load from String
        if (typeof image === 'string') image = ImageLoader.load(image);

        // Add to Images
        if (!this.#images.includes(image)) this.#images.push(image);

        // Image Loaded?
        if (!image.complete) {
            const self = this;
            const onload = image.onload;
            image.onload = function() {
                if (typeof onload === 'function') onload();
                self.add(image);
            }
            return;
        }

        // Boxes
        const boxes = [];
        for (let i = 0; i < this.#images.length; i++) {
            const img = this.#images[i];
            if (!img.complete || !img.naturalWidth || !img.naturalHeight) continue;
            if (img.naturalWidth > MAX_SIZE || img.naturalHeight > MAX_SIZE) continue;
            boxes.push({
                w: img.width + (this.border * 2),
                h: img.height + (this.border * 2),
                image: img,
                fit: undefined,
            });
        }

        // Pack
        this.#boxes.length = 0;
        this.#layers = 0;
        while (boxes.length > 0) {
            // Sort
            boxes.sort((a, b) => { return Math.max(b.w, b.h) - Math.max(a.w, a.h); });
            boxes.sort((a, b) => { return Math.min(b.w, b.h) - Math.min(a.w, a.h); });
            boxes.sort((a, b) => { return b.h - a.h; });
            boxes.sort((a, b) => { return b.w - a.w; });

            // Pack
            let increaseSize;
            do {
                const packer = new Packer(this.#size, this.#size);
                packer.fit(boxes);

                // Increase Size
                increaseSize = false;
                if (this.#size < MAX_SIZE) {
                    let allFit = true;
                    for (let i = 0; i < boxes.length; i++) allFit = allFit && boxes[i].fit;
                    if (!allFit) {
                        increaseSize = true;
                        this.#size = Math.min(this.#size + this.#size, MAX_SIZE);
                    }
                }
                if (increaseSize) {
                    for (let i = 0; i < boxes.length; i++) boxes[i].fit = undefined;
                }
            } while (increaseSize);

            // Layer
            for (let i = boxes.length - 1; i >= 0; i--) {
                const box = boxes[i];
                if (box.fit) {
                    const index = this.#images.indexOf(box.image);
                    if (index < 0) continue;
                    this.#boxes[index] = {
                        x: box.fit.x,
                        y: box.fit.y,
                        w: box.w,
                        h: box.h,
                        image: box.image,
                        layer: this.#layers,
                    }
                    boxes.splice(i, 1);
                }
            }

            // Count
            this.#layers++;
        }

        renderCanvas(this, this.#size, this.#boxes);
    }

}

export { Atlas };

/******************** INTERNAL ********************/

let _canvas;
let _ctx;

function renderCanvas(atlas, size, boxes) {
    if (!_canvas) _canvas = document.createElement('canvas');
    if (!_ctx) _ctx = _canvas.getContext('2d');
    const canvas = _canvas;
    const ctx = _ctx;
    canvas.width = size;
    canvas.height = size;

    const texture = atlas.texture;
    texture.image = [];
    for (let i = 0; i < atlas.length(); i++) {

        // Draw
        ctx.clearRect(0, 0, size, size);
        for (let j = 0; j < boxes.length; j++) {
            const box = boxes[j];
            if (box.layer !== i) continue;
            ctx.fillStyle = `rgb(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`;
            ctx.fillRect(box.x, box.y, box.w, box.h);
            ctx.drawImage(box.image,
                box.x + (atlas.border),
                box.y + (atlas.border),
                box.w - (atlas.border * 2),
                box.h - (atlas.border * 2)
            );
        }

        // Atlas
        const image = new Image(size, size);
        texture.image.push(image);
        image.src = canvas.toDataURL();
        image.onload = () => texture.needsUpdate = true;

    }
}
