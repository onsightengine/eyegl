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
        this.toHtml = function() {
            let out = `
            <b>Shaders</b> <br />
            &emsp;Max Shader Precision: ${this.maxPrecision} <br />
            &emsp;Max Vertex Attributes: ${this.maxAttributes} <br />
            &emsp;Max Varying Vectors: ${this.maxVaryings} <br />
            &emsp;Max Vertex Uniform Vectors: ${this.maxVertexUniforms} <br />
            &emsp;Max Fragment Uniform Vectors: ${this.maxFragmentUniforms} <br />
            <b>Textures</b> <br />
            &emsp;Max Fragment Textures: ${this.maxFragmentTextures} <br />
            &emsp;Max Vertex Textures: ${this.maxVertexTextures} <br />
            &emsp;Max Combined Textures: ${this.maxTextures} <br />
            &emsp;Max 2D Texture Size: ${this.maxTextureSize} <br />
            &emsp;Max Cube Texture Size: ${this.maxCubemapSize} <br />
            &emsp;Max Texture Anisotropy: ${this.maxAnisotropy} <br />
            <b>Renderer</b> <br />
            &emsp;Point Size Range: ${gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[0]} - ${gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)[1]} <br />
            &emsp;Line Width Range: ${gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)[0]} - ${gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)[1]} <br />
            &emsp;Max Viewport Dimensions: ${gl.getParameter(gl.MAX_VIEWPORT_DIMS)[0]} - ${gl.getParameter(gl.MAX_VIEWPORT_DIMS)[1]} <br />
            &emsp;Max Renderbuffer Size: ${gl.getParameter(gl.MAX_RENDERBUFFER_SIZE)} <br />
            &emsp;Max Fragment Shader Multiple Render Targets: ${this.drawBuffers} <br />
            &emsp;Max MSAA Samples: ${this.maxSamples} <br />
            <b>Framebuffer</b> <br />
            &emsp;Framebuffer Red Bits: ${gl.getParameter(gl.RED_BITS)} <br />
            &emsp;Framebuffer Green Bits: ${gl.getParameter(gl.GREEN_BITS)} <br />
            &emsp;Framebuffer Blue Bits: ${gl.getParameter(gl.BLUE_BITS)} <br />
            &emsp;Framebuffer Alpha Bits: ${gl.getParameter(gl.ALPHA_BITS)} <br />
            &emsp;Framebuffer Depth Bits: ${gl.getParameter(gl.DEPTH_BITS)} <br />
            &emsp;Framebuffer Stencil Bits: ${gl.getParameter(gl.STENCIL_BITS)} <br />
            &emsp;Framebuffer Subpixel Bits: ${gl.getParameter(gl.SUBPIXEL_BITS)} <br />
            <b>Framebuffer Types</b> <br />
            &emsp;Support for Unsigned Byte Render Targets: ${this.byteTargets} <br />
            &emsp;Support for Float Render Targets: ${this.floatTargets} <br />
            &emsp;Support for Half Float Render Targets: ${this.halfFloatTargets} <br />
            <b>Supported Extensions</b> <br />
            &emsp;${gl.getSupportedExtensions().join('<br />&emsp;')} <br />
            <b>WebGL</b> <br />
            &emsp;WebGL Renderer: ${gl.getParameter(gl.RENDERER)} <br />
            &emsp;WebGL Vendor: ${gl.getParameter(gl.VENDOR)} <br />
            &emsp;WebGL Version: ${gl.getParameter(gl.VERSION)} <br />
            &emsp;Shading Language: ${gl.getParameter(gl.SHADING_LANGUAGE_VERSION)} <br />
            `;
            if (extensions.has('WEBGL_debug_renderer_info')) {
                out += `&emsp;Unmasked Renderer: ${gl.getParameter(extensions.get('WEBGL_debug_renderer_info').UNMASKED_RENDERER_WEBGL)} <br />`;
                out += `&emsp;Unmasked Vendor: ${gl.getParameter(extensions.get('WEBGL_debug_renderer_info').UNMASKED_VENDOR_WEBGL)} <br />`;
            }
            return out;
        }
    }

}

export { Capabilities };

/***** Internal *****/

function checkRenderTargetSupport(gl, internalFormat, format, type) {
	// Create temp frame buffer and texture
	const framebuffer = gl.createFramebuffer();
	const texture = gl.createTexture();

	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 2, 2, 0, format, type, null);
	gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

	// Check frame buffer status
	const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);

	// Clean up
	gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	gl.bindTexture(gl.TEXTURE_2D, null);
	return (status === gl.FRAMEBUFFER_COMPLETE);
};
