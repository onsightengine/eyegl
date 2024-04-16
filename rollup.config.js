import pkg from './package.json' with { type: "json" };

function header() {
    return {
        renderChunk(code) {
            return `/**
 * @description SeaGL
 * @about       Fast WebGL 2 graphics library built for games.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/salinityengine/seagl
 * @version     v${pkg.version}
 */
${code}`;
        }
    };
}

// Builds
const builds = [

    { // Standard Build
        input: './src/SeaGL.js',
        treeshake: false,

        plugins: [
            header()
        ],

        output: [{
            format: 'esm',
            file: './dist/seagl.module.js',
            sourcemap: false,
        }],
    },

];

export default builds;
