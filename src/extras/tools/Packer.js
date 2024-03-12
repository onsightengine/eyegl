/**
 * @description bin-packing
 * @about       Binary tree based 2D bin-packing
 * @author      jakesgordon
 * @license     MIT - Copyright (c) 2016 Jake Gordon
 * @source      https://github.com/jakesgordon/bin-packing
 * @version:    Jan 4, 2016
 */

class Packer {

    constructor(w, h) {
        this.root = { x: 0, y: 0, w: w, h: h };
    }

    fit(blocks) {
        let node, block;
        for (let n = 0; n < blocks.length; n++) {
            block = blocks[n];
            node = this.findNode(this.root, block.w, block.h)
            if (!node) continue;
            block.fit = this.splitNode(node, block.w, block.h);
        }
    }

    findNode(root, w, h) {
        if (root.used) return (this.findNode(root.right, w, h) || this.findNode(root.down, w, h));
        else if ((w <= root.w) && (h <= root.h)) return root;
        else return null;
    }

    splitNode(node, w, h) {
        node.used = true;
        node.down  = { x: node.x,     y: node.y + h, w: node.w,     h: node.h - h };
        node.right = { x: node.x + w, y: node.y,     w: node.w - w, h: h          };
        return node;
    }

}

export { Packer };
