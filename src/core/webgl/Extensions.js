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

        // Initialise extra format types
        if (self.isWebgl2) {
            self.getExtension('EXT_color_buffer_float');
            self.getExtension('OES_texture_float_linear');
        } else {
            self.getExtension('OES_texture_float');
            self.getExtension('OES_texture_float_linear');
            self.getExtension('OES_texture_half_float');
            self.getExtension('OES_texture_half_float_linear');
            self.getExtension('OES_element_index_uint');
            self.getExtension('OES_standard_derivatives');
            self.getExtension('EXT_sRGB');
            self.getExtension('WEBGL_depth_texture');
            self.getExtension('WEBGL_draw_buffers');
        }
        self.getExtension('WEBGL_compressed_texture_astc');
        self.getExtension('EXT_texture_compression_bptc');
        self.getExtension('WEBGL_compressed_texture_s3tc');
        self.getExtension('WEBGL_compressed_texture_etc1');
        self.getExtension('WEBGL_compressed_texture_pvrtc');
        self.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');

        // Create method aliases using extension (WebGL1) or native if available (WebGL2)
        self.vertexAttribDivisor = self.getExtension('ANGLE_instanced_arrays', 'vertexAttribDivisor', 'vertexAttribDivisorANGLE');
        self.drawArraysInstanced = self.getExtension('ANGLE_instanced_arrays', 'drawArraysInstanced', 'drawArraysInstancedANGLE');
        self.drawElementsInstanced = self.getExtension('ANGLE_instanced_arrays', 'drawElementsInstanced', 'drawElementsInstancedANGLE');
        self.createVertexArray = self.getExtension('OES_vertex_array_object', 'createVertexArray', 'createVertexArrayOES');
        self.bindVertexArray = self.getExtension('OES_vertex_array_object', 'bindVertexArray', 'bindVertexArrayOES');
        self.deleteVertexArray = self.getExtension('OES_vertex_array_object', 'deleteVertexArray', 'deleteVertexArrayOES');
        self.drawBuffers = self.getExtension('WEBGL_draw_buffers', 'drawBuffers', 'drawBuffersWEBGL');

        this.getExtension = function(extension, webgl2Func, extFunc) {
            // If webgl2 function supported, return function bound to gl context
            if (webgl2Func && gl[webgl2Func]) return gl[webgl2Func].bind(gl);

            // Fetch extension once only
            if (! this.extensions[extension]) {
                this.extensions[extension] = gl.getExtension(extension);
            }

            // Return extension if no function requested
            if (! webgl2Func) return this.extensions[extension];

            // Return null if extension not supported
            if (! this.extensions[extension]) return null;

            // Return extension function, bound to extension
            return this.extensions[extension][extFunc].bind(this.extensions[extension]);
        }

    }

}

export { Extensions };