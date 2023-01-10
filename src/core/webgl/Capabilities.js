/** /////////////////////////////////////////////////////////////////////////////////
//
// @description EyeGL
// @about       WebGL graphics library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine
//
///////////////////////////////////////////////////////////////////////////////////*/

class Capabilities {

    /**
     * @param {WebGL2RenderingContext} gl
     * @param {*} extensions
     */
    constructor(gl, extensions) {

        // Shaders
        this.maxAttributes = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);
        this.maxVaryings = gl.getParameter(gl.MAX_VARYING_VECTORS);
        this.maxVertexUniforms = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
	    this.maxFragmentUniforms = gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS);

	    this.maxPrecision = 'lowp';
		if (gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.HIGH_FLOAT).precision > 0 &&
			gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT).precision > 0
        ) this.maxPrecision = 'highp';
        else if (
            gl.getShaderPrecisionFormat(gl.VERTEX_SHADER, gl.MEDIUM_FLOAT).precision > 0 &&
			gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.MEDIUM_FLOAT).precision > 0
        ) this.maxPrecision = 'mediump';

        // Textures
        this.maxFragmentTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
        this.maxVertexTextures = gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
        this.maxTextures = gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
        this.maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
        this.maxCubemapSize = gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE);

        this.maxAnisotropy = 0;
        if (extensions.has('EXT_texture_filter_anisotropic')) {
            const extension = extensions.get('EXT_texture_filter_anisotropic');
			this.maxAnisotropy = gl.getParameter(extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        }

        // Renderer
        this.maxSamples = gl.getParameter(gl.MAX_SAMPLES);

        // Framebuffers
        this.drawBuffers = gl.getParameter(gl.MAX_DRAW_BUFFERS);

        // Render Target Types
        this.byteTargets = checkRenderTargetSupport(gl, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE);
        this.floatTargets = checkRenderTargetSupport(gl, gl.RGBA32F, gl.RGBA, gl.FLOAT);
        this.halfFloatTargets = checkRenderTargetSupport(gl, gl.RGBA16F, gl.RGBA, gl.HALF_FLOAT);

        // Console Logger
        this.log = function() {
            console.group('WebGL 2 Capabilites');
            console.groupCollapsed('Shaders');
            console.log(`Max Shader Precision: ${this.maxPrecision}`);
            console.log(`Max Vertex Attributes: ${this.maxAttributes}`);
            console.log(`Max Varying Vectors: ${this.maxVaryings}`);
            console.log(`Max Vertex Uniform Vectors: ${this.maxVertexUniforms}`);
            console.log(`Max Fragment Uniform Vectors: ${this.maxFragmentUniforms}`);
            console.groupEnd();
            console.groupCollapsed('Textures');
            console.log(`Max Fragment Textures: ${this.maxFragmentTextures}`);
            console.log(`Max Vertex Textures: ${this.maxVertexTextures}`);
            console.log(`Max Combined Textures: ${this.maxTextures}`);
            console.log(`Max 2D Texture Size: ${this.maxTextureSize}`);
            console.log(`Max Cube Texture Size: ${this.maxCubemapSize}`);
            console.log(`Max Texture Anisotropy: ${this.maxAnisotropy}`);
            console.groupEnd();
            console.groupCollapsed('Renderer');
            console.log(`Point Size Range: ${gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[0]} - ${gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[1]}`);
            console.log(`Line Width Range: ${gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)[0]} - ${gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)[1]}`);
            console.log(`Max Viewport Dimensions: ${gl.getParameter(gl.MAX_VIEWPORT_DIMS)[0]} - ${gl.getParameter(gl.MAX_VIEWPORT_DIMS)[1]}`);
            console.log(`Max Renderbuffer Size: ${gl.getParameter(gl.MAX_RENDERBUFFER_SIZE)}`);
            console.log(`Max Fragment Shader Multiple Render Targets: ${this.drawBuffers}`);
            console.log(`Max MSAA Samples: ${this.maxSamples}`);
            console.groupEnd();
            console.groupCollapsed('Framebuffer');
            console.log(`Framebuffer Red Bits: ${gl.getParameter(gl.RED_BITS)}`);
            console.log(`Framebuffer Green Bits: ${gl.getParameter(gl.GREEN_BITS)}`);
            console.log(`Framebuffer Blue Bits: ${gl.getParameter(gl.BLUE_BITS)}`);
            console.log(`Framebuffer Alpha Bits: ${gl.getParameter(gl.ALPHA_BITS)}`);
            console.log(`Framebuffer Depth Bits: ${gl.getParameter(gl.DEPTH_BITS)}`);
            console.log(`Framebuffer Stencil Bits: ${gl.getParameter(gl.STENCIL_BITS)}`);
            console.log(`Framebuffer Subpixel Bits: ${gl.getParameter(gl.SUBPIXEL_BITS)}`);
            console.groupEnd();
            console.groupCollapsed('Framebuffer Types');
            console.log(`Support for Unsigned Byte Render Targets: ${this.byteTargets}`);
            console.log(`Support for Float Render Targets: ${this.floatTargets}`);
            console.log(`Support for Half Float Render Targets: ${this.halfFloatTargets}`);
            console.groupEnd();
            console.groupCollapsed('Supported Extensions');
            console.log(gl.getSupportedExtensions().join('\n'));
            console.groupEnd();
            console.groupCollapsed('WebGL');
            console.log(`WebGL Renderer: ${gl.getParameter(gl.RENDERER)}`);
            console.log(`WebGL Vendor: ${gl.getParameter(gl.VENDOR)}`);
            console.log(`WebGL Version: ${gl.getParameter(gl.VERSION)}`);
            console.log(`Shading Language: ${gl.getParameter(gl.SHADING_LANGUAGE_VERSION)}`);
            if (extensions.has('WEBGL_debug_renderer_info')) {
                console.log(`Unmasked Renderer: ${gl.getParameter(extensions.get('WEBGL_debug_renderer_info').UNMASKED_RENDERER_WEBGL)}`);
                console.log(`Unmasked Vendor: ${gl.getParameter(extensions.get('WEBGL_debug_renderer_info').UNMASKED_VENDOR_WEBGL)}`);
            }
            console.groupEnd();
            console.groupEnd();
        }
    }

}

export { Capabilities };

//////////////////// Internal

function checkRenderTargetSupport(gl, internalFormat, format, type) {
	// Create temp frame buffer and texture
	let framebuffer = gl.createFramebuffer();
	let texture = gl.createTexture();

	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 2, 2, 0, format, type, null);
	gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

	// Check frame buffer status
	let status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

	// Clean up
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	gl.bindTexture(gl.TEXTURE_2D, null);
	return (status === gl.FRAMEBUFFER_COMPLETE);
};
