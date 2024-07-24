/***** Local *****/

// "eyegl": "../../src/EyeGL.js",
// "suey": "../../../suey/dist/suey.module.js"

/***** CDN *****/

// "eyegl": "https://unpkg.com/eyegl/dist/eyegl.module.js"
// "suey": "https://unpkg.com/suey/dist/suey.module.js"

document.write(`
    <script type='importmap'>
    {
        "imports": {
            "eyegl": "../../src/EyeGL.js",
            "suey": "https://unpkg.com/suey@0.1.32/dist/suey.module.js"
        }
    }
    </script>
`);
