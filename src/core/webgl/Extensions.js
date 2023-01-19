class Extensions {

    constructor(gl) {
        const extensions = {};

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
        this.has = function(name) {
			return (getExtension(name) !== null);
		};

        // Public extension getter
        this.get = function(name, logWarning = true) {
			const extension = getExtension(name);
			if (! extension && logWarning) console.warn(`Extensions: ${name} extension not supported.`);
			return extension;
		};
    }

}

export { Extensions };
