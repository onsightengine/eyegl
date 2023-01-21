import { Clock } from './Clock.js';

class Debug {

    static #singleton;

    #startInternal;
    #stopInternal;

    constructor(openFrame = true, openScene = false, openBuffers = false, openSystem = false) {
        if (Debug.#singleton) return Debug.#singleton;

        const backgroundColor = getVariable('background-light') ?? '32, 32, 32';
        const backgroundAlpha = getVariable('panel-transparency') ?? '1.0';
        const textColor = getVariable('text') ?? '190, 190, 190';
        const textLight = getVariable('text-light') ?? '225, 225, 225';

        const styleSheet = document.createElement("style")
        styleSheet.innerText = `
            #EyeDebug {
                position: absolute;
                display: flex;
                flex-direction: column;
                justify-contents: left;
                text-align: left;
                left: 0;
                bottom: 0;
                margin: 0.35em;
                padding: 0.25em;
                padding-left: 0.6em;
                padding-right: 0.6em;
                border-radius: 1em;
                z-index: 10000;
                color: rgb(${textColor});
                background-color: rgba(${backgroundColor}, ${backgroundAlpha});
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

            .EyeSummary /* when closed */ {
                padding: 0.2em 0;
                margin-left: 0.1em;
                margin-top: -0.05em;
                margin-bottom: -0.05em;
                left: 0;
                width: 100%;
                font-size: 0.9em;
            }

            .EyeDetails[open] .EyeSummary {
                margin: 0;
                font-size: 1.1em;
            }

            .EyeRow {
                display: flex;
                justify-content: space-between;
                padding: 0.2em;
                padding-left: 0.3em;
                padding-right: 0.3em;
                width: 95%;
                font-size: 0.9em;
            }

            .EyeInfo, .EyeInfo > * {
                font-size: inherit;
                color: rgb(${textLight});
            }
        `;
        document.head.appendChild(styleSheet)

        const dom = document.createElement('div');
        dom.id = 'EyeDebug';
        dom.innerHTML = `
            <details class="EyeDetails"${(openFrame) ? ' open="true"' : ''}>
            <summary class="EyeSummary">Frame</summary>
            <div class="EyeRow">FPS<span class="EyeInfo" id="EyeFps"></span></div>
            <div class="EyeRow">Render<span class="EyeInfo" id="EyeRender"></span></div>
            <div class="EyeRow">Max<span class="EyeInfo" id="EyeMax"></span></div>
            <div class="EyeRow">Draws <span class="EyeInfo" id="EyeDraws"></span></div>
            </details>
            <details class="EyeDetails"${(openScene) ? ' open="true"' : ''}>
            <summary class="EyeSummary">Scene</summary>
            <div class="EyeRow">Objects <span class="EyeInfo" id="EyeObjects"></span></div>
            <div class="EyeRow">Lights <span class="EyeInfo" id="EyeLights"></span></div>
            <div class="EyeRow">Vertices <span class="EyeInfo" id="EyeVertices"></span></div>
            <div class="EyeRow">Triangles <span class="EyeInfo" id="EyeTriangles"></span></div>
            </details>
            <details class="EyeDetails"${(openBuffers) ? ' open="true"' : ''}>
            <summary class="EyeSummary">Buffers</summary>
            <div class="EyeRow">Programs <span class="EyeInfo" id="EyePrograms"></span></div>
            <div class="EyeRow">Geometries <span class="EyeInfo" id="EyeGeometries"></span></div>
            <div class="EyeRow">Textures <span class="EyeInfo" id="EyeTextures"></span></div>
            </details>
            <details class="EyeDetails"${(openSystem) ? ' open="true"' : ''}>
            <summary class="EyeSummary">System</summary>
            <div class="EyeRow">Memory <span class="EyeInfo" id="EyeMemory">?</span></div>
            </details>
        `;
        document.body.appendChild(dom);

        const domFps = document.getElementById('EyeFps');
        const domRender = document.getElementById('EyeRender');
        const domMax = document.getElementById('EyeMax');
        const domMem = document.getElementById('EyeMemory');
        const domDraws = document.getElementById('EyeDraws');

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
            }
        };

        Debug.#singleton = this;
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
