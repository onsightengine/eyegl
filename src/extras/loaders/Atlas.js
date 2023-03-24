import { Packer } from '../../libs/Packer.js';
import { Texture } from '../../core/Texture.js';

let _canvas, _ctx;

class Atlas {

    #images = [];

    constructor(width = 2048, height = 2048, border = 2) {
        const gl = renderer.gl;

        this.width = width;
        this.height = height;
        this.border = border;
        this.length = 1;
        this.texture = new Texture({
            image: [],
            target: gl.TEXTURE_2D_ARRAY
        });
    }

    add(image) {
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
            });
        }

        // Pack
        this.texture.image = [];
        const texture = this.texture;
        this.length = 0;
        do {
            // Sort
            boxes.sort((a, b) => { return Math.max(b.w, b.h) - Math.max(a.w, a.h); });
            boxes.sort((a, b) => { return Math.min(b.w, b.h) - Math.min(a.w, a.h); });
            boxes.sort((a, b) => { return b.h - a.h; });
            boxes.sort((a, b) => { return b.w - a.w; });
            const packer = new Packer(this.width, this.height);
            packer.fit(boxes);

            // Draw
            if (!_canvas) _canvas = document.createElement('canvas');
            if (!_ctx) _ctx = _canvas.getContext('2d');
            _canvas.width = this.width;
            _canvas.height = this.height;
            _ctx.clearRect(0, 0, this.width, this.height);
            for (let i = 0; i < boxes.length; i++) {
                const box = boxes[i];
                if (!box.fit) continue;
                _ctx.fillStyle = `rgb(${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)}, ${parseInt(Math.random() * 255)})`;
                _ctx.fillRect(box.fit.x, box.fit.y, box.w, box.h);
                _ctx.drawImage(box.image,
                    box.fit.x + this.border,
                    box.fit.y + this.border,
                    box.w - (this.border * 2),
                    box.h - (this.border * 2)
                );
            }

            // Atlas
            const image = new Image();
            texture.image.push(image);
            image.src = _canvas.toDataURL();
            image.onload = () => texture.needsUpdate = true;

            // Clear
            for (let i = boxes.length - 1; i >= 0; i--) {
                if (boxes[i].fit) boxes.splice(i, 1);
            }

            this.length++;
        } while (boxes.length > 0);
    }

}

export { Atlas };
