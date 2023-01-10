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

    constructor(gl) {
        let extensions = {};

        // Fetch extension
        function getExtension(name) {
            if (! extensions[name]) extensions[name] = gl.getExtension(name);
            return extensions[name];
        }

        // Initialize extra format types
        getExtension('EXT_color_buffer_float');
        getExtension('EXT_color_buffer_half_float' );
        getExtension('EXT_texture_compression_bptc');
        getExtension('OES_texture_float_linear');
        getExtension('WEBGL_compressed_texture_astc');
        getExtension('WEBGL_compressed_texture_etc1');
        getExtension('WEBGL_compressed_texture_s3tc');
        getExtension('WEBGL_compressed_texture_pvrtc');
        getExtension('WEBGL_multisampled_render_to_texture');

        // Public extension checker
        this.has = function (name) {
			return (getExtension(name) !== null);
		};

        // Public extension getter
        this.get = function(name) {
			const extension = getExtension(name);
			if (extension === null) console.warn(`Renderer: ${name} extension not supported.`);
			return extension;
		};
    }

}

export { Extensions };
