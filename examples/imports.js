/***** Local *****/

// "seagl": "../../src/SeaGL.js",
// "suey": "../../../suey/dist/suey.module.js"

/***** CDN *****/

// "seagl": "https://unpkg.com/@salinity/seagl/dist/seagl.module.js"
// "suey": "https://unpkg.com/@salinity/suey/dist/suey.module.js"

document.write(`
    <script type='importmap'>
    {
        "imports": {
            "seagl": "../../src/SeaGL.js",
            "suey": "https://unpkg.com/@salinity/suey@0.1.26/dist/suey.module.js"
        }
    }
    </script>
`);
