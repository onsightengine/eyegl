// Post Build Header
function header() {
	return {
		renderChunk(code) {
			return `/**
 * @description EyeGL
 * @about       Fast WebGL 2 graphics library built for games.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2021-2023 Stephens Nunnally and Scidian Studios
 * @source      https://github.com/onsightengine/eyegl
 */
${code}`;
        }
    };
}

// Builds
const builds = [

    { // Standard Build
        input: './src/EyeGL.js',
        treeshake: false,

        plugins: [
            header()
        ],

        output: [{
            format: 'esm',
            file: './build/eyegl.module.js',
            sourcemap: false,
        }],
    },

];

export default builds;
