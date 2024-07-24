import pkg from './package.json' with { type: "json" };

function header() {
    return {
        renderChunk(code) {
            return `/**
 * @description EyeGL
 * @about       WebGL 2 graphics library built for games.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/onsightengine/eyegl
 * @version     v${pkg.version}
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
            file: './dist/eyegl.module.js',
            sourcemap: false,
        }],
    },

];

export default builds;
