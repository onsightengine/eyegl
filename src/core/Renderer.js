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
import { Capabilities } from './webgl/Capabilities.js';
import { Extensions } from './webgl/Extensions.js';

const tempVec3 = new Vec3();

let _ID = 1;

class Renderer {

    constructor({
        alpha = true,                       // canvas should have alpha buffer?
        depth = true,                       // drawing buffer has depth buffer (at least 16 bits)?
        stencil = false,                    // drawing buffer has stencil buffer (at least 8 bits)?
        antialias = false,                  // perform anti-aliasing if possible?
        powerPreference = 'default',        // 'default', 'low-power', 'high-performance'
        premultipliedAlpha = true,          // drawing buffer contains colors with pre-multiplied alpha
        preserveDrawingBuffer = false,      // true is slower, mostly not needed

        webgl = 2,                                  // request webgl 1 or 2?
        canvas = document.createElement('canvas'),  // canvas to use
        dpr = 1,                                    // window.devicePixelRatio
        clearColor = new Color(),                   // color to clear COLOR_BUFFER_BIT
        clearAlpha = 0,                             // alpha to clear COLOR_BUFFER_BIT
    } = {}) {
        this.isRenderer = true;

        // Properties
        this.id = _ID++;
        this.dpr = dpr;

        this.alpha = alpha;
        this.color = true;
        this.depth = depth;
        this.stencil = stencil;
        this.premultipliedAlpha = premultipliedAlpha;
        this.clearColor = (clearColor && clearColor instanceof Color) ? clearColor : new Color(clearColor);
        this.clearAlpha = clearAlpha;

        // Private
        this._contextLost = false;

        // WebGL attributes
        const attributes = {
            alpha,
            depth,
            stencil,
            antialias,
            failIfMajorPerformanceCaveat: true,
            powerPreference,
            premultipliedAlpha,
            preserveDrawingBuffer,
        };

        /** @type { WebGLRenderingContext | WebGL2RenderingContext } */
        let gl;

        // Attempt WebGL2, if not supported fallback to WebGL1
        if (webgl === 2) gl = canvas.getContext('webgl2', attributes);
        if (! gl) gl = canvas.getContext('webgl', attributes);
        if (! gl) console.error('Renderer.constructor: Unable to create webgl context');
        this.gl = gl;
        let isWebgl2 = false;
        isWebgl2 = isWebgl2 || (typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext);
		isWebgl2 = isWebgl2 || (typeof WebGL2ComputeRenderingContext !== 'undefined' && gl instanceof WebGL2ComputeRenderingContext);

        // Renderer Capabilities
        const parameters = {
            isWebgl2,
        };

        // GLOBAL: So all classes have access to internal state functions
        window.renderer = this;

        // WebGL state stores to avoid redundant calls on methods used internally
        this.state = {};
        this.state.blendFunc = { src: gl.ONE, dst: gl.ZERO };
        this.state.blendEquation = { modeRGB: gl.FUNC_ADD };
        this.state.cullFace = null;
        this.state.frontFace = gl.CCW;
        this.state.depthMask = true;
        this.state.depthFunc = gl.LESS;
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

        function initContext(self) {

            // Extensions, create method aliases using extension (WebGL1) or native if available (WebGL2)
            let extensions = new Extensions(gl, parameters);
            self.vertexAttribDivisor = extensions.get('ANGLE_instanced_arrays', 'vertexAttribDivisor', 'vertexAttribDivisorANGLE');
            self.drawArraysInstanced = extensions.get('ANGLE_instanced_arrays', 'drawArraysInstanced', 'drawArraysInstancedANGLE');
            self.drawElementsInstanced = extensions.get('ANGLE_instanced_arrays', 'drawElementsInstanced', 'drawElementsInstancedANGLE');
            self.createVertexArray = extensions.get('OES_vertex_array_object', 'createVertexArray', 'createVertexArrayOES');
            self.bindVertexArray = extensions.get('OES_vertex_array_object', 'bindVertexArray', 'bindVertexArrayOES');
            self.deleteVertexArray = extensions.get('OES_vertex_array_object', 'deleteVertexArray', 'deleteVertexArrayOES');
            self.drawBuffers = extensions.get('WEBGL_draw_buffers', 'drawBuffers', 'drawBuffersWEBGL');

            // Capabilities
            let capabilities = new Capabilities(gl, extensions, parameters);

            capabilities.log();

            // Assign to this
            self.extensions = extensions;
            self.capabilities = capabilities;
        };
        initContext(this);

        // Context lost
        this.loseContext = this.getExtension('WEBGL_lose_context');
        gl.canvas.addEventListener('webglcontextlost', function(event) {
            event.preventDefault();
            console.log('EyeGL.Renderer: Context lost');
            this._contextLost = true;
        }.bind(this));

        gl.canvas.addEventListener('webglcontextrestored', function(event) {
            console.log('EyeGL.Renderer: Context restored');
            initContext(this);
            this._contextLost = false;
        }.bind(this));
    }

    getExtension(extension) {
        return this.extensions.get(extension);
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
        ) return;
        this.state.blendFunc.src = src;
        this.state.blendFunc.dst = dst;
        this.state.blendFunc.srcAlpha = srcAlpha;
        this.state.blendFunc.dstAlpha = dstAlpha;
        if (srcAlpha !== undefined) this.gl.blendFuncSeparate(src, dst, srcAlpha, dstAlpha);
        else this.gl.blendFunc(src, dst);
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
        if (! camera || ! camera.isCamera) return;
        if (this._contextLost) return;

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
