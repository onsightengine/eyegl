/** /////////////////////////////////////////////////////////////////////////////////
//
// @description EyeGL
// @about       WebGL graphics library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine
//
///////////////////////////////////////////////////////////////////////////////////*/
//
// TODO: test stencil and depth
//

import { Texture } from './Texture.js';

class RenderTarget {

    constructor({
        width = renderer.gl.canvas.width,
        height = renderer.gl.canvas.height,
        target = renderer.gl.FRAMEBUFFER,
        color = 1,                  // number of color attachments
        depth = true,
        stencil = false,
        depthTexture = false,       // note - stencil breaks
        wrapS = renderer.gl.CLAMP_TO_EDGE,
        wrapT = renderer.gl.CLAMP_TO_EDGE,
        minFilter = renderer.gl.LINEAR,
        magFilter = minFilter,
        type = renderer.gl.UNSIGNED_BYTE,
        format = renderer.gl.RGBA,
        internalFormat = format,
        unpackAlignment,
        premultiplyAlpha,
    } = {}) {
        this.isRenderTarget = true;

        renderer.gl = renderer.gl;
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.buffer = renderer.gl.createFramebuffer();
        this.target = target;
        renderer.bindFramebuffer(this);

        this.textures = [];
        const drawBuffers = [];

        // create and attach required num of color textures
        for (let i = 0; i < color; i++) {
            this.textures.push(
                new Texture(gl, {
                    width,
                    height,
                    wrapS,
                    wrapT,
                    minFilter,
                    magFilter,
                    type,
                    format,
                    internalFormat,
                    unpackAlignment,
                    premultiplyAlpha,
                    flipY: false,
                    generateMipmaps: false,
                })
            );
            this.textures[i].update();
            renderer.gl.framebufferTexture2D(this.target, renderer.gl.COLOR_ATTACHMENT0 + i, renderer.gl.TEXTURE_2D, this.textures[i].texture, 0 /* level */);
            drawBuffers.push(renderer.gl.COLOR_ATTACHMENT0 + i);
        }

        // For multi-render targets shader access
        if (drawBuffers.length > 1) renderer.drawBuffers(drawBuffers);

        // alias for majority of use cases
        this.texture = this.textures[0];

        // note depth textures break stencil - so can't use together
        if (depthTexture && (renderer.isWebgl2 || renderer.getExtension('WEBGL_depth_texture'))) {
            this.depthTexture = new Texture(gl, {
                width,
                height,
                minFilter: renderer.gl.NEAREST,
                magFilter: renderer.gl.NEAREST,
                format: renderer.gl.DEPTH_COMPONENT,
                internalFormat: renderer.isWebgl2 ? renderer.gl.DEPTH_COMPONENT16 : renderer.gl.DEPTH_COMPONENT,
                type: renderer.gl.UNSIGNED_INT,
            });
            this.depthTexture.update();
            renderer.gl.framebufferTexture2D(this.target, renderer.gl.DEPTH_ATTACHMENT, renderer.gl.TEXTURE_2D, this.depthTexture.texture, 0 /* level */);
        } else {
            // Render buffers
            if (depth && !stencil) {
                this.depthBuffer = renderer.gl.createRenderbuffer();
                renderer.gl.bindRenderbuffer(renderer.gl.RENDERBUFFER, this.depthBuffer);
                renderer.gl.renderbufferStorage(renderer.gl.RENDERBUFFER, renderer.gl.DEPTH_COMPONENT16, width, height);
                renderer.gl.framebufferRenderbuffer(this.target, renderer.gl.DEPTH_ATTACHMENT, renderer.gl.RENDERBUFFER, this.depthBuffer);
            }

            if (stencil && !depth) {
                this.stencilBuffer = renderer.gl.createRenderbuffer();
                renderer.gl.bindRenderbuffer(renderer.gl.RENDERBUFFER, this.stencilBuffer);
                renderer.gl.renderbufferStorage(renderer.gl.RENDERBUFFER, renderer.gl.STENCIL_INDEX8, width, height);
                renderer.gl.framebufferRenderbuffer(this.target, renderer.gl.STENCIL_ATTACHMENT, renderer.gl.RENDERBUFFER, this.stencilBuffer);
            }

            if (depth && stencil) {
                this.depthStencilBuffer = renderer.gl.createRenderbuffer();
                renderer.gl.bindRenderbuffer(renderer.gl.RENDERBUFFER, this.depthStencilBuffer);
                renderer.gl.renderbufferStorage(renderer.gl.RENDERBUFFER, renderer.gl.DEPTH_STENCIL, width, height);
                renderer.gl.framebufferRenderbuffer(this.target, renderer.gl.DEPTH_STENCIL_ATTACHMENT, renderer.gl.RENDERBUFFER, this.depthStencilBuffer);
            }
        }

        renderer.bindFramebuffer({ target: this.target });
    }

    setSize(width, height) {
        if (this.width === width && this.height === height) return;

        this.width = width;
        this.height = height;
        renderer.bindFramebuffer(this);

        for (let i = 0; i < this.textures.length; i++) {
            this.textures[i].width = width;
            this.textures[i].height = height;
            this.textures[i].needsUpdate = true;
            this.textures[i].update();
            renderer.gl.framebufferTexture2D(this.target, renderer.gl.COLOR_ATTACHMENT0 + i, renderer.gl.TEXTURE_2D, this.textures[i].texture, 0 /* level */);
        }

        if (this.depthTexture) {
            this.depthTexture.width = width;
            this.depthTexture.height = height;
            this.depthTexture.needsUpdate = true;
            this.depthTexture.update();
            renderer.gl.framebufferTexture2D(this.target, renderer.gl.DEPTH_ATTACHMENT, renderer.gl.TEXTURE_2D, this.depthTexture.texture, 0 /* level */);
        } else {
            if (this.depthBuffer) {
                renderer.gl.bindRenderbuffer(renderer.gl.RENDERBUFFER, this.depthBuffer);
                renderer.gl.renderbufferStorage(renderer.gl.RENDERBUFFER, renderer.gl.DEPTH_COMPONENT16, width, height);
            }

            if (this.stencilBuffer) {
                renderer.gl.bindRenderbuffer(renderer.gl.RENDERBUFFER, this.stencilBuffer);
                renderer.gl.renderbufferStorage(renderer.gl.RENDERBUFFER, renderer.gl.STENCIL_INDEX8, width, height);
            }

            if (this.depthStencilBuffer) {
                renderer.gl.bindRenderbuffer(renderer.gl.RENDERBUFFER, this.depthStencilBuffer);
                renderer.gl.renderbufferStorage(renderer.gl.RENDERBUFFER, renderer.gl.DEPTH_STENCIL, width, height);
            }
        }

        renderer.bindFramebuffer({ target: this.target });
    }
}

export { RenderTarget };
