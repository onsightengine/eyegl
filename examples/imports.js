/***** Local *****/

// "seagl": "../../src/SeaGL.js",
// "suey": "../../../suey/build/suey.module.js"

/***** CDN *****/

// "seagl": "https://unpkg.com/seagl/build/seagl.module.js"
// "suey": "https://unpkg.com/suey/build/suey.module.js"

document.write(`
    <script type='importmap'>
    {
        "imports": {
            "seagl": "../../src/SeaGL.js",
            "suey": "https://unpkg.com/suey@0.1.24/build/suey.module.js"
        }
    }
    </script>
`);
