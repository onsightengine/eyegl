import { Texture } from './Texture.js';

// TODO: test stencil and depth

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
        const gl = renderer.gl;

        this.width = width;
        this.height = height;
        this.depth = depth;
        this.buffer = gl.createFramebuffer();
        this.target = target;
        renderer.bindFramebuffer(this);

        this.textures = [];
        const drawBuffers = [];

        // Create and attach required num of color textures
        for (let i = 0; i < color; i++) {
            this.textures.push(
                new Texture({
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
            gl.framebufferTexture2D(this.target, gl.COLOR_ATTACHMENT0 + i, gl.TEXTURE_2D, this.textures[i].texture, 0 /* level */);
            drawBuffers.push(gl.COLOR_ATTACHMENT0 + i);
        }

        // For multi-render targets shader access
        if (drawBuffers.length > 1) gl.drawBuffers(drawBuffers);

        // Alias for majority of use cases
        this.texture = this.textures[0];

        // Note depth textures break stencil - so can't use together
        if (depthTexture) {
            this.depthTexture = new Texture({
                width,
                height,
                minFilter: gl.NEAREST,
                magFilter: gl.NEAREST,
                format: gl.DEPTH_COMPONENT,
                internalFormat: gl.DEPTH_COMPONENT16,
                type: gl.UNSIGNED_INT,
            });
            this.depthTexture.update();
            gl.framebufferTexture2D(this.target, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture.texture, 0 /* level */);
        } else {
            // Render buffers
            if (depth && ! stencil) {
                this.depthBuffer = gl.createRenderbuffer();
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthBuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
                gl.framebufferRenderbuffer(this.target, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depthBuffer);
            }

            if (stencil && !depth) {
                this.stencilBuffer = gl.createRenderbuffer();
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencilBuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.STENCIL_INDEX8, width, height);
                gl.framebufferRenderbuffer(this.target, gl.STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.stencilBuffer);
            }

            if (depth && stencil) {
                this.depthStencilBuffer = gl.createRenderbuffer();
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthStencilBuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
                gl.framebufferRenderbuffer(this.target, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.depthStencilBuffer);
            }
        }

        renderer.bindFramebuffer({ target: this.target });
    }

    setSize(width, height) {
        if (this.width === width && this.height === height) return;

        const gl = renderer.gl;
        this.width = width;
        this.height = height;
        renderer.bindFramebuffer(this);

        for (let i = 0; i < this.textures.length; i++) {
            this.textures[i].width = width;
            this.textures[i].height = height;
            this.textures[i].needsUpdate = true;
            this.textures[i].update();
            gl.framebufferTexture2D(this.target, gl.COLOR_ATTACHMENT0 + i, gl.TEXTURE_2D, this.textures[i].texture, 0 /* level */);
        }

        if (this.depthTexture) {
            this.depthTexture.width = width;
            this.depthTexture.height = height;
            this.depthTexture.needsUpdate = true;
            this.depthTexture.update();
            gl.framebufferTexture2D(this.target, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthTexture.texture, 0 /* level */);
        } else {
            if (this.depthBuffer) {
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthBuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
            }

            if (this.stencilBuffer) {
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencilBuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.STENCIL_INDEX8, width, height);
            }

            if (this.depthStencilBuffer) {
                gl.bindRenderbuffer(gl.RENDERBUFFER, this.depthStencilBuffer);
                gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
            }
        }

        renderer.bindFramebuffer({ target: this.target });
    }

    flush() {

        // TODO

    }

}

export { RenderTarget };
