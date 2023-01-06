/** /////////////////////////////////////////////////////////////////////////////////
//
// @description Onsight Engine
// @about       Easy to use 2D / 3D JavaScript game engine.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine
//
///////////////////////////////////////////////////////////////////////////////////*/
//
//  Additional Source(s)
//      UN      https://github.com/oframe/ogl/blob/master/src/core/Renderer.js
//
/////////////////////////////////////////////////////////////////////////////////////
//
// TODO: Handle context loss https://www.khronos.org/webgl/wiki/HandlingContextLost
//
// Not automatic - devs to use these methods manually
//  gl.colorMask( colorMask, colorMask, colorMask, colorMask );
//  gl.stencilMask( stencilMask );
//  gl.stencilFunc( stencilFunc, stencilRef, stencilMask );
//  gl.stencilOp( stencilFail, stencilZFail, stencilZPass );
//  gl.clearStencil( stencil );
//

import { Color } from '../math/Color.js';
import { Vec3 } from '../math/Vec3.js';

const tempVec3 = new Vec3();

let _ID = 1;

class Renderer {

    constructor({
        canvas = document.createElement('canvas'),
        width = 300,
        height = 150,
        dpr = 1,                            // window.devicePixelRatio
        webgl = 2,                          // request webgl 1 or 2?
        antialias = false,                  // turn on antialiasing?
        powerPreference = 'default',        // 'default', 'low-power', 'high-performance'
        preserveDrawingBuffer = false,      // true is slower, mostly not needed
        premultipliedAlpha = true,
        alpha = true,                       // canvas has alpha?
        depth = true,                       // has depth buffer?
        stencil = false,                    // has stencil buffer?
        clearColor = new Color(),           // color to clear COLOR_BUFFER_BIT
        clearAlpha = 0,                     // alpha to clear COLOR_BUFFER_BIT
    } = {}) {
        this.isRenderer = true;

        this.id = _ID++;

        this.dpr = dpr;
        this.premultipliedAlpha = premultipliedAlpha;
        this.alpha = alpha;
        this.color = true;
        this.depth = depth;
        this.stencil = stencil;
        this.clearColor = (clearColor && clearColor instanceof Color) ? clearColor : new Color(clearColor);
        this.clearAlpha = clearAlpha;

        // WebGL attributes
        const attributes = {
            antialias,
            powerPreference,
            preserveDrawingBuffer,
            premultipliedAlpha,
            alpha,
            depth,
            stencil,
        };

        /** @type {WebGLRenderingContext | WebGL2RenderingContext} */
        this.gl;

        // Attempt WebGL2 unless forced to 1, if not supported fallback to WebGL1
        if (webgl === 2) this.gl = canvas.getContext('webgl2', attributes);
        this.isWebgl2 = !!this.gl;
        if (! this.gl) this.gl = canvas.getContext('webgl', attributes);
        if (! this.gl) console.error('unable to create webgl context');

        // Attach renderer to window so that all classes have access to internal state functions
        window.renderer = this;

        // Initialise size values
        this.setSize(width, height);

        // WebGL state stores to avoid redundant calls on methods used internally
        this.state = {};
        this.state.blendFunc = { src: this.gl.ONE, dst: this.gl.ZERO };
        this.state.blendEquation = { modeRGB: this.gl.FUNC_ADD };
        this.state.cullFace = null;
        this.state.frontFace = this.gl.CCW;
        this.state.depthMask = true;
        this.state.depthFunc = this.gl.LESS;
        this.state.premultiplyAlpha = false;
        this.state.flipY = false;
        this.state.unpackAlignment = 4;
        this.state.framebuffer = null;
        this.state.viewport = { x: 0, y: 0, width: null, height: null };
        this.state.textureUnits = [];
        this.state.activeTextureUnit = 0;
        this.state.boundBuffer = null;
        this.state.uniformLocations = new Map();
        this.state.currentProgram = null;

        // Store requested extensions
        this.extensions = {};

        // Initialise extra format types
        if (this.isWebgl2) {
            this.getExtension('EXT_color_buffer_float');
            this.getExtension('OES_texture_float_linear');
        } else {
            this.getExtension('OES_texture_float');
            this.getExtension('OES_texture_float_linear');
            this.getExtension('OES_texture_half_float');
            this.getExtension('OES_texture_half_float_linear');
            this.getExtension('OES_element_index_uint');
            this.getExtension('OES_standard_derivatives');
            this.getExtension('EXT_sRGB');
            this.getExtension('WEBGL_depth_texture');
            this.getExtension('WEBGL_draw_buffers');
        }
        this.getExtension('WEBGL_compressed_texture_astc');
        this.getExtension('EXT_texture_compression_bptc');
        this.getExtension('WEBGL_compressed_texture_s3tc');
        this.getExtension('WEBGL_compressed_texture_etc1');
        this.getExtension('WEBGL_compressed_texture_pvrtc');
        this.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');

        // Create method aliases using extension (WebGL1) or native if available (WebGL2)
        this.vertexAttribDivisor = this.getExtension('ANGLE_instanced_arrays', 'vertexAttribDivisor', 'vertexAttribDivisorANGLE');
        this.drawArraysInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawArraysInstanced', 'drawArraysInstancedANGLE');
        this.drawElementsInstanced = this.getExtension('ANGLE_instanced_arrays', 'drawElementsInstanced', 'drawElementsInstancedANGLE');
        this.createVertexArray = this.getExtension('OES_vertex_array_object', 'createVertexArray', 'createVertexArrayOES');
        this.bindVertexArray = this.getExtension('OES_vertex_array_object', 'bindVertexArray', 'bindVertexArrayOES');
        this.deleteVertexArray = this.getExtension('OES_vertex_array_object', 'deleteVertexArray', 'deleteVertexArrayOES');
        this.drawBuffers = this.getExtension('WEBGL_draw_buffers', 'drawBuffers', 'drawBuffersWEBGL');

        // Store device parameters
        this.parameters = {};
        this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        this.parameters.maxAnisotropy = this.getExtension('EXT_texture_filter_anisotropic')
            ? this.gl.getParameter(this.getExtension('EXT_texture_filter_anisotropic').MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            : 0;
    }

    // Usually (window.innerWidth, window.innerHeight)
    setSize(width, height, updateStyle = true) {
        this.width = width;
        this.height = height;

        if (this.gl.canvas.width !== width || this.gl.canvas.height !== height) {
            this.gl.canvas.width = width * this.dpr;
            this.gl.canvas.height = height * this.dpr;

            if (updateStyle) {
                this.gl.canvas.style.width = width + 'px';
                this.gl.canvas.style.height = height + 'px';
            }
        }
    }

    setViewport(width, height, x = 0, y = 0) {
        if (this.state.viewport.width === width && this.state.viewport.height === height) return;
        this.state.viewport.width = width;
        this.state.viewport.height = height;
        this.state.viewport.x = x;
        this.state.viewport.y = y;
        this.gl.viewport(x, y, width, height);
    }

    setScissor(width, height, x = 0, y = 0) {
        this.gl.scissor(x, y, width, height);
    }

    enable(id) {
        if (this.state[id] === true) return;
        this.gl.enable(id);
        this.state[id] = true;
    }

    disable(id) {
        if (this.state[id] === false) return;
        this.gl.disable(id);
        this.state[id] = false;
    }

    setBlendFunc(src, dst, srcAlpha, dstAlpha) {
        if (
            this.state.blendFunc.src === src &&
            this.state.blendFunc.dst === dst &&
            this.state.blendFunc.srcAlpha === srcAlpha &&
            this.state.blendFunc.dstAlpha === dstAlpha
        ) { return; }
        this.state.blendFunc.src = src;
        this.state.blendFunc.dst = dst;
        this.state.blendFunc.srcAlpha = srcAlpha;
        this.state.blendFunc.dstAlpha = dstAlpha;
        if (srcAlpha !== undefined) {
            this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);
        } else {
            this.gl.blendFunc(src, dst);
        }
    }

    setBlendEquation(modeRGB, modeAlpha) {
        modeRGB = modeRGB || this.gl.FUNC_ADD;
        if (this.state.blendEquation.modeRGB === modeRGB && this.state.blendEquation.modeAlpha === modeAlpha) return;
        this.state.blendEquation.modeRGB = modeRGB;
        this.state.blendEquation.modeAlpha = modeAlpha;
        if (modeAlpha !== undefined) this.gl.blendEquationSeparate(modeRGB, modeAlpha);
        else this.gl.blendEquation(modeRGB);
    }

    setCullFace(value) {
        if (this.state.cullFace === value) return;
        this.state.cullFace = value;
        this.gl.cullFace(value);
    }

    setFrontFace(value) {
        if (this.state.frontFace === value) return;
        this.state.frontFace = value;
        this.gl.frontFace(value);
    }

    setDepthMask(value) {
        if (this.state.depthMask === value) return;
        this.state.depthMask = value;
        this.gl.depthMask(value);
    }

    setDepthFunc(value) {
        if (this.state.depthFunc === value) return;
        this.state.depthFunc = value;
        this.gl.depthFunc(value);
    }

    activeTexture(value) {
        if (this.state.activeTextureUnit === value) return;
        this.state.activeTextureUnit = value;
        this.gl.activeTexture(this.gl.TEXTURE0 + value);
    }

    bindFramebuffer({ target = this.gl.FRAMEBUFFER, buffer = null } = {}) {
        if (this.state.framebuffer === buffer) return;
        this.state.framebuffer = buffer;
        this.gl.bindFramebuffer(target, buffer);
    }

    getExtension(extension, webgl2Func, extFunc) {
        // If webgl2 function supported, return func bound to gl context
        if (webgl2Func && this.gl[webgl2Func]) return this.gl[webgl2Func].bind(this.gl);

        // Fetch extension once only
        if (!this.extensions[extension]) {
            this.extensions[extension] = this.gl.getExtension(extension);
        }

        // Return extension if no function requested
        if (!webgl2Func) return this.extensions[extension];

        // Return null if extension not supported
        if (!this.extensions[extension]) return null;

        // Return extension function, bound to extension
        return this.extensions[extension][extFunc].bind(this.extensions[extension]);
    }

    sortOpaque(a, b) {
        if (a.renderOrder !== b.renderOrder) {
            return a.renderOrder - b.renderOrder;
        } else if (a.program.id !== b.program.id) {
            return a.program.id - b.program.id;
        } else if (a.zDepth !== b.zDepth) {
            return a.zDepth - b.zDepth;
        } else {
            return b.id - a.id;
        }
    }

    sortTransparent(a, b) {
        if (a.renderOrder !== b.renderOrder) {
            return a.renderOrder - b.renderOrder;
        }
        if (a.zDepth !== b.zDepth) {
            return b.zDepth - a.zDepth;
        } else {
            return b.id - a.id;
        }
    }

    sortUI(a, b) {
        if (a.renderOrder !== b.renderOrder) {
            return a.renderOrder - b.renderOrder;
        } else if (a.program.id !== b.program.id) {
            return a.program.id - b.program.id;
        } else {
            return b.id - a.id;
        }
    }

    getRenderList({ scene, camera, frustumCull, sort }) {
        if (camera && frustumCull) camera.updateFrustum();

        // Get visible objects
        let renderList = [];
        scene.traverse((node) => {
            if (! node.visible) return true; /* stop traversing children (all children become invisible) */
            if (! node.draw) return;
            if (frustumCull && node.frustumCulled && camera && ! camera.frustumIntersectsMesh(node)) return;
            renderList.push(node);
        });

        // Sort? (sorting opaque objects is still desired to stop overdraw)
        if (sort) {
            const opaque = [];
            const transparent = [];     // depthTest true
            const ui = [];              // depthTest false

            renderList.forEach((node) => {
                // Split into the 3 render groups
                if (! node.program.transparent) {
                    opaque.push(node);
                } else if (node.program.depthTest) {
                    transparent.push(node);
                } else {
                    ui.push(node);
                }

                node.zDepth = 0;

                // Only calculate z-depth if renderOrder unset and depthTest is true
                if (node.renderOrder !== 0 || ! node.program.depthTest || ! camera) return;

                // Update z-depth
                node.worldMatrix.getTranslation(tempVec3);
                tempVec3.applyMatrix4(camera.projectionViewMatrix);
                node.zDepth = tempVec3.z;
            });

            opaque.sort(this.sortOpaque);
            transparent.sort(this.sortTransparent);
            ui.sort(this.sortUI);

            renderList = opaque.concat(transparent, ui);
        }

        return renderList;
    }

    render({
        scene,
        camera,
        target = null,
        update = true,
        sort = true,
        frustumCull = true,
        clear = true,
    } = {}) {
        // Render target
        if (target === null) {
            // Draw to canvas
            this.bindFramebuffer();
            this.setViewport(this.width * this.dpr, this.height * this.dpr);
        } else {
            // Draw to render target
            this.bindFramebuffer(target);
            this.setViewport(target.width, target.height);
        }

        // Perform clear
        if (clear) {
            // Ensure depth buffer writing is enabled so it can be cleared
            if (this.depth && (! target || target.depth)) {
                this.enable(this.gl.DEPTH_TEST);
                this.setDepthMask(true);
            }
            const clearColor = (this.color) ? this.gl.COLOR_BUFFER_BIT : 0;
            const clearDepth = (this.depth) ? this.gl.DEPTH_BUFFER_BIT : 0;
            const clearStencil = (this.stencil) ? this.gl.STENCIL_BUFFER_BIT : 0;
            this.gl.clearColor(this.clearColor.r, this.clearColor.g, this.clearColor.b, this.clearAlpha);
            this.gl.clear(clearColor | clearDepth | clearStencil);
        }

        // Update all scene graph matrices
        if (update) scene.updateMatrixWorld();

        // Update camera separately (in case not in scene graph)
        if (camera) camera.updateMatrixWorld();

        // Get render list (entails culling and sorting)
        const renderList = this.getRenderList({ scene, camera, frustumCull, sort });

        // Render objects
        renderList.forEach((node) => {
            node.draw({ camera });
        });
    }

}

export { Renderer };
