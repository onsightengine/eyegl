/***** Local *****/

// "eyegl": "../../src/EyeGL.js",
// "suey": "../../../suey/dist/suey.module.js"

/***** CDN *****/

// "eyegl": "https://unpkg.com/eyegl/dist/eyegl.module.js"
// "suey": "https://unpkg.com/@salinity/suey/dist/suey.module.js"

document.write(`
    <script type='importmap'>
    {
        "imports": {
            "eyegl": "../../src/EyeGL.js",
            "suey": "https://unpkg.com/@salinity/suey@0.1.30/dist/suey.module.js"
        }
    }
    </script>
`);
