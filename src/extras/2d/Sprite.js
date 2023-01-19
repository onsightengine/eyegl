import { Billboard } from '../../core/programs/Billboard.js';
import { Mesh } from '../../core/Mesh.js';
import { Plane } from '../geometries/Plane.js';

class Sprite extends Mesh {

    static #geometry;
    static #program;

    constructor({
        texture,
    } = {}) {
        if (! Sprite.#geometry) Sprite.#geometry = new Plane();
        if (! Sprite.#program) {
            Sprite.#program = new Billboard({
                cullFace: null,
                transparent: true,
            });
        }

        super({
            geometry: Sprite.#geometry,
            program: Sprite.#program,
        });
        this.isSprite = true;

        this.texture = texture;
    }

    draw({ camera } = {}) {
        // Before render
        this.beforeRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));

        // Set camera uniforms
        if (camera) {
            // Add empty matrix uniforms to program if unset
            if (! this.program.uniforms.modelMatrix) {
                Object.assign(this.program.uniforms, {
                    modelMatrix: { value: null },
                    viewMatrix: { value: null },
                    modelViewMatrix: { value: null },
                    normalMatrix: { value: null },
                    projectionMatrix: { value: null },
                    cameraPosition: { value: null },
                });
            }

            // Set the matrix uniforms
            this.program.uniforms.projectionMatrix.value = camera.projectionMatrix;
            this.program.uniforms.cameraPosition.value = camera.worldPosition;
            this.program.uniforms.viewMatrix.value = camera.viewMatrix;
            this.modelViewMatrix.multiply(camera.viewMatrix, this.worldMatrix);
            this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
            this.program.uniforms.modelMatrix.value = this.worldMatrix;
            this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
            this.program.uniforms.normalMatrix.value = this.normalMatrix;
        }

        this.program.uniforms.tDiffuse.value = this.texture;
        this.program.use();
        this.geometry.draw({ mode: this.mode, program: this.program });

        // After render
        this.afterRenderCallbacks.forEach((f) => f && f({ mesh: this, camera }));
    }

}

export { Sprite };
