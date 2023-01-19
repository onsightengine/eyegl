/***** Local *****/
document.write(`
    <script type='importmap'>
    {
        "imports": {
            "eyegl": "../../src/EyeGL.js",
            "osui": "../../../osui/build/osui.module.js"
        }
    }
    </script>
`);

(async () => {
    await import('https://unpkg.com/es-module-shims@1.5.0/dist/es-module-shims.js');
})();
