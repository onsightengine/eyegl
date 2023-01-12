// TODO: upload empty texture if null ? maybe not
// TODO: upload identity matrix if null ?
// TODO: sampler Cube

const arrayCacheF32 = {};   // cache of typed arrays used to flatten uniform arrays

let _ID = 1;

class Program {

    constructor({
        vertex,
        fragment,
        uniforms = {},

        transparent = false,
        cullFace = renderer.gl.BACK,
        frontFace = renderer.gl.CCW,
        depthTest = true,
        depthWrite = true,
        depthFunc = renderer.gl.LESS,
    } = {}) {
        this.isProgram = true;

        if (! renderer) console.error(`Program.constructor: Renderer not found`);
        this.uniforms = uniforms;
        this.id = _ID++;

        if (! vertex) console.warn('Program.constructor: Vertex shader not supplied');
        if (! fragment) console.warn('Program.constructor: Fragment shader not supplied');

        // Store program state
        this.transparent = transparent;
        this.cullFace = cullFace;
        this.frontFace = frontFace;
        this.depthTest = depthTest;
        this.depthWrite = depthWrite;
        this.depthFunc = depthFunc;
        this.blendFunc = {};
        this.blendEquation = {};

        // Set default blendFunc if transparent flagged
        if (this.transparent && ! this.blendFunc.src) {
            if (renderer.premultipliedAlpha) this.setBlendFunc(renderer.gl.ONE, renderer.gl.ONE_MINUS_SRC_ALPHA);
            else this.setBlendFunc(renderer.gl.SRC_ALPHA, renderer.gl.ONE_MINUS_SRC_ALPHA);
        }

        // Compile vertex shader and log errors
        const vertexShader = renderer.gl.createShader(renderer.gl.VERTEX_SHADER);
        renderer.gl.shaderSource(vertexShader, vertex);
        renderer.gl.compileShader(vertexShader);
        if (renderer.gl.getShaderInfoLog(vertexShader) !== '') {
            console.warn(`${renderer.gl.getShaderInfoLog(vertexShader)}\nVertex Shader\n${addLineNumbers(vertex)}`);
        }

        // Compile fragment shader and log errors
        const fragmentShader = renderer.gl.createShader(renderer.gl.FRAGMENT_SHADER);
        renderer.gl.shaderSource(fragmentShader, fragment);
        renderer.gl.compileShader(fragmentShader);
        if (renderer.gl.getShaderInfoLog(fragmentShader) !== '') {
            console.warn(`${renderer.gl.getShaderInfoLog(fragmentShader)}\nFragment Shader\n${addLineNumbers(fragment)}`);
        }

        // Compile program and log errors
        this.program = renderer.gl.createProgram();
        renderer.gl.attachShader(this.program, vertexShader);
        renderer.gl.attachShader(this.program, fragmentShader);
        renderer.gl.linkProgram(this.program);
        if (! renderer.gl.getProgramParameter(this.program, renderer.gl.LINK_STATUS)) {
            return console.warn(renderer.gl.getProgramInfoLog(this.program));
        }

        // Remove shader once linked
        renderer.gl.deleteShader(vertexShader);
        renderer.gl.deleteShader(fragmentShader);

        // Get active uniform locations
        this.uniformLocations = new Map();
        let numUniforms = renderer.gl.getProgramParameter(this.program, renderer.gl.ACTIVE_UNIFORMS);
        for (let uIndex = 0; uIndex < numUniforms; uIndex++) {
            let uniform = renderer.gl.getActiveUniform(this.program, uIndex);
            this.uniformLocations.set(uniform, renderer.gl.getUniformLocation(this.program, uniform.name));

            // split uniforms' names to separate array and struct declarations
            const split = uniform.name.match(/(\w+)/g);

            uniform.uniformName = split[0];

            if (split.length === 3) {
                uniform.isStructArray = true;
                uniform.structIndex = Number(split[1]);
                uniform.structProperty = split[2];
            } else if (split.length === 2 && isNaN(Number(split[1]))) {
                uniform.isStruct = true;
                uniform.structProperty = split[1];
            }
        }

        // Get active attribute locations
        this.attributeLocations = new Map();
        const locations = [];
        const numAttribs = renderer.gl.getProgramParameter(this.program, renderer.gl.ACTIVE_ATTRIBUTES);
        for (let aIndex = 0; aIndex < numAttribs; aIndex++) {
            const attribute = renderer.gl.getActiveAttrib(this.program, aIndex);
            const location = renderer.gl.getAttribLocation(this.program, attribute.name);
            // Ignore special built-in inputs. eg gl_VertexID, gl_InstanceID
            if (location === -1) continue;
            locations[location] = attribute.name;
            this.attributeLocations.set(attribute, location);
        }
        this.attributeOrder = locations.join('');
    }

    setBlendFunc(src, dst, srcAlpha, dstAlpha) {
        this.blendFunc.src = src;
        this.blendFunc.dst = dst;
        this.blendFunc.srcAlpha = srcAlpha;
        this.blendFunc.dstAlpha = dstAlpha;
        if (src) this.transparent = true;
    }

    setBlendEquation(modeRGB, modeAlpha) {
        this.blendEquation.modeRGB = modeRGB;
        this.blendEquation.modeAlpha = modeAlpha;
    }

    applyState() {
        if (this.depthTest) renderer.enable(renderer.gl.DEPTH_TEST);
        else renderer.disable(renderer.gl.DEPTH_TEST);

        if (this.cullFace) renderer.enable(renderer.gl.CULL_FACE);
        else renderer.disable(renderer.gl.CULL_FACE);

        if (this.blendFunc.src) renderer.enable(renderer.gl.BLEND);
        else renderer.disable(renderer.gl.BLEND);

        if (this.cullFace) renderer.setCullFace(this.cullFace);
        renderer.setFrontFace(this.frontFace);
        renderer.setDepthMask(this.depthWrite);
        renderer.setDepthFunc(this.depthFunc);
        if (this.blendFunc.src)
            renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
        renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
    }

    use({ flipFaces = false } = {}) {
        let textureUnit = -1;
        const programActive = renderer.state.currentProgram === this.id;

        // Avoid gl call if program already in use
        if (!programActive) {
            renderer.gl.useProgram(this.program);
            renderer.state.currentProgram = this.id;
        }

        // Set only the active uniforms found in the shader
        this.uniformLocations.forEach((location, activeUniform) => {
            let name = activeUniform.uniformName;

            // Get supplied uniform
            let uniform = this.uniforms[name];

            // For structs, get the specific property instead of the entire object
            if (activeUniform.isStruct) {
                uniform = uniform[activeUniform.structProperty];
                name += `.${activeUniform.structProperty}`;
            }
            if (activeUniform.isStructArray) {
                uniform = uniform[activeUniform.structIndex][activeUniform.structProperty];
                name += `[${activeUniform.structIndex}].${activeUniform.structProperty}`;
            }

            if (!uniform) {
                return warn(`Active uniform ${name} has not been supplied`);
            }

            if (uniform && uniform.value === undefined) {
                return warn(`${name} uniform is missing a value parameter`);
            }

            if (uniform.value.texture) {
                textureUnit = textureUnit + 1;

                // Check if texture needs to be updated
                uniform.value.update(textureUnit);
                return setUniform(renderer.gl, activeUniform.type, location, textureUnit);
            }

            // For texture arrays, set uniform as an array of texture units instead of just one
            if (uniform.value.length && uniform.value[0].texture) {
                const textureUnits = [];
                uniform.value.forEach((value) => {
                    textureUnit = textureUnit + 1;
                    value.update(textureUnit);
                    textureUnits.push(textureUnit);
                });

                return setUniform(renderer.gl, activeUniform.type, location, textureUnits);
            }

            setUniform(renderer.gl, activeUniform.type, location, uniform.value);
        });

        this.applyState();
        if (flipFaces) renderer.setFrontFace(this.frontFace === renderer.gl.CCW ? renderer.gl.CW : renderer.gl.CCW);
    }

    remove() {
        renderer.gl.deleteProgram(this.program);
    }

}

export { Program };

/***** Internal *****/

function setUniform(gl, type, location, value) {
    value = value.length ? flatten(value) : value;
    const setValue = renderer.state.uniformLocations.get(location);

    // Avoid redundant uniform commands
    if (value.length) {
        if (setValue === undefined || setValue.length !== value.length) {
            // Clone array to store as cache
            renderer.state.uniformLocations.set(location, value.slice(0));
        } else {
            if (arraysEqual(setValue, value)) return;

            // Update cached array values
            setValue.set ? setValue.set(value) : setArray(setValue, value);
            renderer.state.uniformLocations.set(location, setValue);
        }
    } else {
        if (setValue === value) return;
        renderer.state.uniformLocations.set(location, value);
    }

    switch (type) {
        case 5126:
            return value.length ? gl.uniform1fv(location, value) : gl.uniform1f(location, value); // FLOAT
        case 35664:
            return gl.uniform2fv(location, value); // FLOAT_VEC2
        case 35665:
            return gl.uniform3fv(location, value); // FLOAT_VEC3
        case 35666:
            return gl.uniform4fv(location, value); // FLOAT_VEC4
        case 35670: // BOOL
        case 5124: // INT
        case 35678: // SAMPLER_2D
        case 35680:
            return value.length ? gl.uniform1iv(location, value) : gl.uniform1i(location, value); // SAMPLER_CUBE
        case 35671: // BOOL_VEC2
        case 35667:
            return gl.uniform2iv(location, value); // INT_VEC2
        case 35672: // BOOL_VEC3
        case 35668:
            return gl.uniform3iv(location, value); // INT_VEC3
        case 35673: // BOOL_VEC4
        case 35669:
            return gl.uniform4iv(location, value); // INT_VEC4
        case 35674:
            return gl.uniformMatrix2fv(location, false, value); // FLOAT_MAT2
        case 35675:
            return gl.uniformMatrix3fv(location, false, value); // FLOAT_MAT3
        case 35676:
            return gl.uniformMatrix4fv(location, false, value); // FLOAT_MAT4
    }
}

function addLineNumbers(string) {
    let lines = string.split('\n');
    for (let i = 0; i < lines.length; i++) {
        lines[i] = i + 1 + ': ' + lines[i];
    }
    return lines.join('\n');
}

function flatten(a) {
    const arrayLen = a.length;
    const valueLen = a[0].length;
    if (valueLen === undefined) return a;
    const length = arrayLen * valueLen;
    let value = arrayCacheF32[length];
    if (!value) arrayCacheF32[length] = value = new Float32Array(length);
    for (let i = 0; i < arrayLen; i++) value.set(a[i], i * valueLen);
    return value;
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0, l = a.length; i < l; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function setArray(a, b) {
    for (let i = 0, l = a.length; i < l; i++) {
        a[i] = b[i];
    }
}

let warnCount = 0;
function warn(message) {
    if (warnCount > 100) return;
    console.warn(message);
    warnCount++;
    if (warnCount > 100) console.warn('Program: More than 100 program warnings - stopping logs');
}
