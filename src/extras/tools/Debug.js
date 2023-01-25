import { Clock } from './Clock.js';

let _singleton = null;

class Debug {

    #startInternal;
    #stopInternal;

    constructor(openFrame = false, openScene = false, openBuffers = false, openSystem = false) {
        if (_singleton) return _singleton;

        function checkState(key) {
            const value = localStorage.getItem(key);
            if (typeof value === 'string') {
                if (value === 'undefined' || value === 'null' || value === 'false') return false;
                return true;
            }
            return Boolean(value);
        }

        openFrame = openFrame || checkState('DebugFrame');
        openScene = openScene || checkState('DebugScene');
        openBuffers = openBuffers || checkState('DebugBuffers');
        openSystem = openSystem || checkState('DebugSystem');

        const backgroundColor = getVariable('background-light') ?? '32, 32, 32';
        const backgroundAlpha = getVariable('panel-transparency') ?? '1.0';
        const textColor = getVariable('text') ?? '190, 190, 190';
        const textLight = getVariable('text-light') ?? '225, 225, 225';

        const styleSheet = document.createElement('style');
        styleSheet.innerText = `
            #EyeDebug {
                position: absolute;
                display: flex;
                flex-direction: column;
                justify-contents: left;
                text-align: left;
                left: 0;
                bottom: 0;
                margin: 0;
                padding: 0;
                z-index: 1000; /* debug info */
                color: rgb(${textColor});
                background: transparent;
            }

            .EyeDiv {
                margin: 0.35em;
                margin-bottom: 0;
                padding: 0.25em;
                border-radius: 1em;
                background-color: rgba(${backgroundColor}, ${backgroundAlpha});
            }

            .EyeButtonRow {
                display: flex;
                background: transparent;
                margin: 0.35em;
            }

            .EyeDebugButton {
                filter: grayscale(100%);
                flex: 1 1 auto;
                border-radius: 100%;
                background-color: rgba(${backgroundColor}, ${backgroundAlpha});
                min-height: 2em;
                min-width: 2em;
                margin-left: 0.15em;
                margin-right: 0.15em;
                padding-bottom: 0.1em;
            }

            .EyeDebugButton:hover {
                filter: brightness(125%) grayscale(100%);
                box-shadow:
                    inset -2px 2px 2px -1px rgba(255, 255, 255, 0.2),
                    inset 2px -2px 2px -1px rgba(0, 0, 0, 0.75);
            }

            .EyeDebugButton.Selected {
                filter: brightness(100%);
                box-shadow: none;
            }

            #ButtonFrame.Selected { border: solid 2px rgba(0, 180, 175, 0.75); }
            #ButtonScene.Selected { border: solid 2px rgba(255, 113, 0, 0.75); }
            #ButtonBuffers.Selected { border: solid 2px rgba(255, 93, 0, 0.75); }
            #ButtonSystem.Selected { border: solid 2px rgba(145, 223, 0, 0.75); }

            .EyeDebugButton.Selected:hover {
                filter: brightness(125%);
            }

            .EyeDebugButton:active {
                filter: brightness(100%);
                box-shadow:
                    inset -1px 1px 3px 1px rgba(0, 0, 0, 0.5),
                    inset  1px 1px 3px 1px rgba(0, 0, 0, 0.5),
                    inset -1px -1px 3px 1px rgba(0, 0, 0, 0.5),
                    inset  1px -1px 3px 1px rgba(0, 0, 0, 0.5);
            }

            .EyeDetails { /* closed */
                filter: brightness(0.75);
                padding: 0;
                margin: 0;
                left: 0;
                right: 0;
                width: 100%;
            }

            .EyeDetails[open] {
                filter: none;
                padding-top: 0.1em;
                min-width: 9em;
            }

            .EyeHeader {
                padding: 0.1em 0.3em;
                padding-top: 0;
                left: 0;
                width: 100%;
                margin: 0;
                font-size: 0.9em;
            }

            #FrameHeader { color: #00b4af; }
            #SceneHeader { color: #ff7100; }
            #BuffersHeader { color: #d8007f; }
            #SystemHeader { color: #75b300; }

            .EyeRow {
                display: flex;
                justify-content: space-between;
                padding: 0.1em;
                padding-left: 0.3em;
                padding-right: 0.3em;
                width: 100%;
                font-size: 0.8em;
                color: rgb(${textColor});
            }

            .EyeInfo, .EyeInfo > * {
                font-size: inherit;
                color: rgb(${textLight});
            }

            .Light {
                font-size: 12px;
                color: #a5f300;
            }

            .EyeImageHolder {
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                max-width: 1.35em;
                max-height: 1.35em;
                /* filter: drop-shadow(-1px 1px 2px rgba(0, 0, 0, 0.25)); */
            }

            .ColorIcon {
                filter: brightness(50%) sepia(1000%) saturate(350%) hue-rotate(calc(var(--rotate-hue) + 150deg));
            }

            .ColorComplement {
                filter: brightness(50%) sepia(1000%) saturate(350%) hue-rotate(calc(var(--rotate-hue) + 0deg));
            }

            .RotateColorize1 {
                filter: brightness(50%) sepia(1000%) saturate(350%) hue-rotate(calc(var(--rotate-hue) + 270deg));
            }

            .RotateColorize2 {
                filter: brightness(65%) sepia(1000%) saturate(350%) hue-rotate(calc(var(--rotate-hue) + 35deg));
            }
        `;
        document.head.appendChild(styleSheet)

        const dom = document.createElement('div');
        dom.id = 'EyeDebug';
        dom.innerHTML = `
            <div class="EyeDiv" id="FrameFrame">
                <div class="EyeHeader" id="FrameHeader">Frame</div>
                <div class="EyeRow">FPS<span class="EyeInfo" id="EyeFps">?</span></div>
                <div class="EyeRow">Render<span class="EyeInfo" id="EyeRender">?</span></div>
                <div class="EyeRow">Max<span class="EyeInfo" id="EyeMax">?</span></div>
                <div class="EyeRow">Draws <span class="EyeInfo" id="EyeDraws">?</span></div>
                </div>
            </div>

            <div class="EyeDiv" id="SceneFrame">
                <div class="EyeHeader" id="SceneHeader">Scene</div>
                <div class="EyeRow">Objects <span class="EyeInfo" id="EyeObjects">?</span></div>
                <div class="EyeRow">Lights <span class="EyeInfo" id="EyeLights">?</span></div>
                <div class="EyeRow">Vertices <span class="EyeInfo" id="EyeVertices">?</span></div>
                <div class="EyeRow">Triangles <span class="EyeInfo" id="EyeTriangles">?</span></div>
                </details>
            </div>

            <div class="EyeDiv" id="BuffersFrame">
                <div class="EyeHeader" id="BuffersHeader">Buffers</div>
                <div class="EyeRow">Programs <span class="EyeInfo" id="EyePrograms">?</span></div>
                <div class="EyeRow">Geometries <span class="EyeInfo" id="EyeGeometries">?</span></div>
                <div class="EyeRow">Textures <span class="EyeInfo" id="EyeTextures">?</span></div>
                </details>
            </div>

            <div class="EyeDiv" id="SystemFrame">
                <div class="EyeHeader" id="SystemHeader">System</div>
                <div class="EyeRow">Memory <span class="EyeInfo" id="EyeMemory">?</span></div>
                </details>
            </div>

            <div class="EyeButtonRow">
                <button class="EyeDebugButton" id="ButtonFrame">
                    <div class="EyeImageHolder"><div class="ColorIcon">
                    <?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M256,31c-123.431,0 -225,101.569 -225,225c0,123.431 101.569,225 225,225c123.431,0 225,-101.569 225,-225c-0.146,-123.376 -101.624,-224.854 -225,-225Zm0,409.091c-100.989,-0 -184.091,-83.102 -184.091,-184.091c0,-100.989 83.102,-184.091 184.091,-184.091c100.989,0 184.091,83.102 184.091,184.091c-0.123,100.943 -83.148,183.968 -184.091,184.091Z" style="fill:#c0c0c0;fill-rule:nonzero;"/><path d="M276.455,247.532l-0,-114.259c-0,-11.221 -9.234,-20.455 -20.455,-20.455c-11.221,0 -20.455,9.234 -20.455,20.455l0,122.727c0.002,5.422 2.159,10.628 5.994,14.461l61.363,61.364c3.812,3.682 8.91,5.742 14.21,5.742c11.221,-0 20.455,-9.234 20.455,-20.455c-0,-5.3 -2.06,-10.398 -5.742,-14.21l-55.37,-55.37Z" style="fill:#c0c0c0;fill-rule:nonzero;"/></svg>
                    </div></div>
                </button>

                <button class="EyeDebugButton" id="ButtonScene">
                    <div class="EyeImageHolder"><div class="ColorComplement">
                    <?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M334.107,33.245c0.002,0.001 0.004,0.003 0.005,0.005c0.01,0.008 0.02,0.018 0.03,0.027c0.045,0.037 0.091,0.077 0.138,0.12l0.325,0.299c0.021,0.019 0.043,0.039 0.064,0.059l0.311,0.298c0.019,0.018 0.038,0.036 0.056,0.054c-0,0 99.995,99.996 100,100c0.034,0.035 0.068,0.071 0.102,0.108c0.023,0.025 0.044,0.049 0.065,0.074l0.269,0.269c0.053,0.053 0.106,0.109 0.157,0.168c0.008,0.009 0.238,0.275 0.238,0.275c0.011,0.012 0.022,0.025 0.033,0.037c1.108,1.231 2.022,2.574 2.77,3.968c1.586,2.939 2.473,6.295 2.473,9.851l-0,303.061c-0,7.983 -3.171,15.639 -8.816,21.284l-1.397,1.396c-6.02,6.02 -14.184,9.402 -22.698,9.402l-305.293,-0c-7.983,-0 -15.639,-3.171 -21.283,-8.816l-1.397,-1.397c-6.02,-6.02 -9.402,-14.184 -9.402,-22.698l0,-391.007c0,-7.983 3.171,-15.639 8.816,-21.284l1.397,-1.396c6.02,-6.02 14.184,-9.402 22.698,-9.402l216.518,-0c3.556,-0 6.912,0.887 9.851,2.473c1.395,0.748 2.739,1.663 3.97,2.772Zm101.336,106.169c0.402,-0.301 0.73,-0.705 0.942,-1.183c0.333,-0.75 0.338,-1.586 0.047,-2.322c0.443,1.224 -0.397,2.318 -1.268,3.069c0.095,0.144 0.188,0.29 0.279,0.436Zm-97.3,-8.414l39.028,-0l-39.028,-39.029l-0,39.029Zm-35.714,5.804l-0,-70.09l-192.858,0l0,378.572l292.858,-0l-0,-278.572l-70.918,0c-7.187,0 -14.08,-2.855 -19.163,-7.937l-1.396,-1.397c-5.458,-5.457 -8.523,-12.859 -8.523,-20.576Z" style="fill:#c0c0c0;"/></svg>
                    </div></div>
                </button>

                <button class="EyeDebugButton" id="ButtonBuffers">
                    <div class="EyeImageHolder"><div class="RotateColorize1">
                    <?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 185 185" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g><path d="M164.233,130.955c3.418,5.92 3.418,12.99 0,18.911c-3.418,5.92 -9.541,9.456 -16.378,9.456l-111.131,-0c-6.836,-0 -12.958,-3.534 -16.377,-9.455c-3.419,-5.922 -3.419,-12.992 -0,-18.912l55.565,-96.242c3.418,-5.921 9.541,-9.456 16.378,-9.456c6.837,0 12.959,3.534 16.378,9.455l55.565,96.243Zm-126.283,8.748l108.68,0l-54.34,-94.119l-54.34,94.119Z" style="fill:#c0c0c0;"/></g></svg>
                    </div></div>
                </button>

                <button class="EyeDebugButton" id="ButtonSystem">
                    <div class="EyeImageHolder"><div class="RotateColorize2">
                    <?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg width="100%" height="100%" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="_02"><path d="M416,156l-20,-0l0,-40c0,-10.972 -9.028,-20 -20,-20c-10.972,0 -20,9.028 -20,20l0,40l-80,-0l0,-40c0,-10.972 -9.028,-20 -20,-20c-10.972,0 -20,9.028 -20,20l0,40l-80,-0l-0,-40c-0,-10.972 -9.028,-20 -20,-20c-10.972,0 -20,9.028 -20,20l-0,40l-20,-0c-21.943,-0 -40,18.057 -40,40l-0,120c-0,21.943 18.057,40 40,40l20,-0l-0,40c-0,10.972 9.028,20 20,20c10.972,-0 20,-9.028 20,-20l-0,-40l80,-0l0,40c0,10.972 9.028,20 20,20c10.972,-0 20,-9.028 20,-20l0,-40l80,-0l0,40c0,10.972 9.028,20 20,20c10.972,-0 20,-9.028 20,-20l0,-40l20,-0c21.943,-0 40,-18.057 40,-40l0,-120c0,-21.943 -18.057,-40 -40,-40Zm-320,160l-0,-120l320,0l0,120l-320,0Z" style="fill:#c0c0c0;fill-rule:nonzero;"/></g></svg>
                    </div></div>
                </button>
            </div>
        `;
        document.body.appendChild(dom);

        const frameFrame = document.getElementById('FrameFrame');
        const sceneFrame = document.getElementById('SceneFrame');
        const buffersFrame = document.getElementById('BuffersFrame');
        const systemFrame = document.getElementById('SystemFrame');

        const buttonFrame = document.getElementById('ButtonFrame');
        const buttonScene = document.getElementById('ButtonScene');
        const buttonBuffers = document.getElementById('ButtonBuffers');
        const buttonSystem = document.getElementById('ButtonSystem');

        buttonFrame.setAttribute('tooltip', 'Frame');
        buttonScene.setAttribute('tooltip', 'Scene');
        buttonBuffers.setAttribute('tooltip', 'Buffers');
        buttonSystem.setAttribute('tooltip', 'System');

        function toggleFrame(frame, button, open, storageKey) {
            if (open) {
                frame.style.display = '';
                button.classList.add('Selected');
            } else {
                frame.style.display = 'none';
                button.classList.remove('Selected');
            }
            localStorage.setItem(storageKey, open);
        }

        buttonFrame.addEventListener('click', () => {
            openFrame = ! openFrame;
            toggleFrame(frameFrame, buttonFrame, openFrame, 'DebugFrame');
        });

        buttonScene.addEventListener('click', () => {
            openScene = ! openScene;
            toggleFrame(sceneFrame, buttonScene, openScene, 'DebugScene');
        });

        buttonBuffers.addEventListener('click', () => {
            openBuffers = ! openBuffers;
            toggleFrame(buffersFrame, buttonBuffers, openBuffers, 'DebugBuffers');
        });

        buttonSystem.addEventListener('click', () => {
            openSystem = ! openSystem;
            toggleFrame(systemFrame, buttonSystem, openSystem, 'DebugSystem');
        });

        toggleFrame(frameFrame, buttonFrame, openFrame, 'DebugFrame');
        toggleFrame(sceneFrame, buttonScene, openScene, 'DebugScene');
        toggleFrame(buffersFrame, buttonBuffers, openBuffers, 'DebugBuffers');
        toggleFrame(systemFrame, buttonSystem, openSystem, 'DebugSystem');

        const domFps = document.getElementById('EyeFps');
        const domRender = document.getElementById('EyeRender');
        const domMax = document.getElementById('EyeMax');
        const domDraws = document.getElementById('EyeDraws');

        const domObjects = document.getElementById('EyeObjects');
        const domLights = document.getElementById('EyeLights');
        const domVertices = document.getElementById('EyeVertices');
        const domTriangles = document.getElementById('EyeTriangles');

        const domPrograms = document.getElementById('EyePrograms');
        const domGeometries = document.getElementById('EyeGeometries');
        const domTextures = document.getElementById('EyeTextures');

        const domMem = document.getElementById('EyeMemory');

        const frameClock = new Clock();
        const elapsedClock = new Clock();

        this.#startInternal = function() {
            frameClock.start();
            renderer.drawCallCount = 0;
        }

        this.#stopInternal = function() {
            frameClock.stop();

            const elapsed = elapsedClock.getElapsedTime();
            if (elapsed > 1) {
                // Actual fps
                const fps = elapsedClock.count() / elapsed;
                if (domFps) domFps.textContent = `${fps.toFixed(1)} fps`;
                elapsedClock.reset();

                // Average time of actual rendering frames
                const frameAvg = frameClock.averageDelta();
                if (domRender) domRender.textContent = `${frameAvg.toFixed(2)} ms`;
                if (domMax) domMax.textContent = `~ ${Math.floor(1000 / frameAvg)} fps`;
                frameClock.reset();

                // Draw call count
                if (domDraws) domDraws.textContent = `${renderer.drawCallCount}`;

                // Memory usage
                if (domMem && performance.memory) {
                    const memory = performance.memory.usedJSHeapSize / 1048576;
                    domMem.textContent = `${memory.toFixed(2)} mb`;
                }

                // Scene Info
                let objects = 0, vertices = 0, triangles = 0, lights = 0;
                const scene = renderer.lastScene;
                if (scene && scene.isTransform) {
                    scene.traverseVisible((object) => {
                        objects++;
                        if (object.isLight) lights++;
                        if (object.isMesh && object.geometry) {
                            const geometry = object.geometry;
                            vertices += geometry.attributes.position.count;
                            const instance = (geometry.isInstanced) ? geometry.instancedCount : 1;
                            if (geometry.attributes.index) triangles += (geometry.attributes.index.count / 3) * instance;
                            else triangles += (geometry.attributes.position.count / 3) * instance;
                        }
                    });
                }
                domObjects.textContent = `${objects}`;
                domLights.textContent = `${lights}`;
                domVertices.textContent = `${vertices}`;
                domTriangles.textContent = `${triangles}`;

                domPrograms.textContent = `${renderer.info.programs}`;
                domGeometries.textContent = `${renderer.info.geometries}`;
                domTextures.textContent = `${renderer.info.textures}`;
            }

        };

        _singleton = this;
    }

    startFrame() {
        this.#startInternal();
    }

    endFrame() {
        this.#stopInternal();
    }

}

export { Debug };

/***** Internal *****/

/**
 * Gets a CSS variable, hyphens optional, ex: getVariable('--tooltip-delay') or getVariable('tooltip-delay');
 *
 * @param {String} variable
 * @returns variable as string, undefined if variable not found
 */
function getVariable(variable) {
    variable = String(variable);
    if (! variable.startsWith('--')) variable = '--' + variable;
    const rootElement = document.querySelector(':root');
    const value = getComputedStyle(rootElement).getPropertyValue(variable);
    return ((value === '') ? undefined : value);
}

/** Sets a CSS variable by name, hyphens optional */
function setVariable(variable, valueAsString) {
    variable = String(variable);
    if (! variable.startsWith('--')) variable = '--' + variable;
    const rootElement = document.querySelector(':root');
    rootElement.style.setProperty(variable, valueAsString);
}
