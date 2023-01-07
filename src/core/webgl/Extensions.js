/** /////////////////////////////////////////////////////////////////////////////////
//
// @description EyeGL
// @about       WebGL graphics library.
// @author      Stephens Nunnally <@stevinz>
// @license     MIT - Copyright (c) 2021-2022 Stephens Nunnally and Scidian Studios
// @source      https://github.com/onsightengine
//
///////////////////////////////////////////////////////////////////////////////////*/

class Extensions {

    constructor(gl, parameters) {
        let extensions = {};

        // Fetch extension
        function getExtension(name, webgl2Func, extFunc) {
            // If webgl2 function supported, return function bound to gl context
            if (webgl2Func && gl[webgl2Func]) return gl[webgl2Func].bind(gl);

            // Fetch extension once only
            if (! extensions[name]) extensions[name] = gl.getExtension(name);

            // Return extension if no function requested
            if (! webgl2Func) return extensions[name];

            // Return null if extension not supported
            if (! extensions[name]) return null;

            // Return extension function, bound to extension
            return extensions[name][extFunc].bind(extensions[name]);
        }

        // Initialize extra format types
        if (parameters.isWebgl2) {
            getExtension('EXT_color_buffer_float');
        } else {
            getExtension('WEBGL_depth_texture');
            getExtension('WEBGL_draw_buffers');
            getExtension('OES_texture_float');
            getExtension('OES_texture_half_float');
            getExtension('OES_texture_half_float_linear');
            getExtension('OES_standard_derivatives');
            getExtension('OES_element_index_uint');
            getExtension('EXT_sRGB');
        }
        getExtension('OES_texture_float_linear');
        getExtension('EXT_color_buffer_half_float' );
		getExtension('WEBGL_multisampled_render_to_texture');

        getExtension('WEBGL_compressed_texture_astc');
        getExtension('EXT_texture_compression_bptc');
        getExtension('WEBGL_compressed_texture_s3tc');
        getExtension('WEBGL_compressed_texture_etc1');
        getExtension('WEBGL_compressed_texture_pvrtc');
        getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');

        // Public extension checker
        this.has = function (name) {
			return getExtension(name) !== null;
		};

        // Public extension getter
        this.get = function(name, webgl2Func, extFunc) {
			const extension = getExtension(name, webgl2Func, extFunc);
			if (extension === null) console.warn(`EyeGL.Renderer: ${name} extension not supported.`);
			return extension;
		};
    }

}

export { Extensions };
