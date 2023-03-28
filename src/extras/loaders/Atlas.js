import { Packer } from '../../libs/Packer.js';
import { Texture } from '../../core/Texture.js';

const MAX_SIZE = 4096;

let _canvas, _ctx;

class Atlas {

    #boxes = [];
    #images = [];
    #layers = 0;
    #size = 1;

    constructor(border = 50) {
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
        if (this.#images.includes(image)) return;
        this.#images.push(image);

        // Boxes
        const boxes = [];
        for (let i = 0; i < this.#images.length; i++) {
            const image = this.#images[i];
            if (!image.complete || !image.naturalWidth || !image.naturalHeight) continue;
            boxes.push({
                w: image.width + (this.border * 2),
                h: image.height + (this.border * 2),
                image: image,
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

        this.renderCanvas();
    }

    renderCanvas() {
        if (!_canvas) _canvas = document.createElement('canvas');
        if (!_ctx) _ctx = _canvas.getContext('2d');
        const canvas = _canvas; //document.createElement('canvas');
        const ctx = _ctx; //canvas.getContext('2d');
        canvas.width = this.#size;
        canvas.height = this.#size;

        const texture = this.texture;
        texture.image = [];
        for (let i = 0; i < this.#layers; i++) {
            // Draw
            ctx.clearRect(0, 0, this.#size, this.#size);
            for (let j = 0; j < this.#boxes.length; j++) {
                const box = this.#boxes[j];
                if (box.layer !== i) continue;
                ctx.fillStyle = `rgb(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`;
                ctx.fillRect(box.x, box.y, box.w, box.h);
                ctx.drawImage(box.image,
                    box.x + this.border,
                    box.y + this.border,
                    box.w - (this.border * 2),
                    box.h - (this.border * 2)
                );
            }

            // Atlas
            const image = new Image(this.#size, this.#size);
            texture.image.push(image);
            image.src = canvas.toDataURL();
            image.onload = () => texture.needsUpdate = true;
        }
    }

}

export { Atlas };
