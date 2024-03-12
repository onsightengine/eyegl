// Based from ThreeJS' OrbitControls class, rewritten using es6 with some additions and subtractions.

// TODO: focus on target
// TODO: abstract event handlers so can be fed from other sources
// TODO: make scroll zoom more accurate than just >/< zero
// TODO: be able to pass in new camera position

import { Vec3 } from '../../math/Vec3.js';
import { Vec2 } from '../../math/Vec2.js';

const STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, DOLLY_PAN: 3 };

const _tempVec3 = new Vec3();
const _tempVec2a = new Vec2();
const _tempVec2b = new Vec2();

class Orbit {

    constructor(object, {
        element,
        enabled = true,
        target = new Vec3(),
        ease = 0.25,
        inertia = 0.85,
        enableRotate = true,
        rotateSpeed = 0.1,
        autoRotate = false,
        autoRotateSpeed = 1.0,
        enableZoom = true,
        zoomSpeed = 1,
        zoomStyle = 'dolly',
        enablePan = true,
        panSpeed = 0.1,
        minPolarAngle = 0,
        maxPolarAngle = Math.PI,
        minAzimuthAngle = -Infinity,
        maxAzimuthAngle = Infinity,
        minDistance = 0,
        maxDistance = Infinity,
    } = {}) {
        if (!element) {
            if (window.renderer) element = renderer.gl.canvas;
            else element = document.body;
        }

        this.enabled = enabled;
        this.target = target;
        this.zoomStyle = zoomStyle;

        // Catch attempts to disable - set to 1 so has no effect
        ease = ease || 1;
        inertia = inertia || 0;

        this.minDistance = minDistance;
        this.maxDistance = maxDistance;

        // Current position in sphericalTarget coordinates
        const sphericalDelta = { radius: 1, phi: 0, theta: 0 };
        const sphericalTarget = { radius: 1, phi: 0, theta: 0 };
        const spherical = { radius: 1, phi: 0, theta: 0 };
        const panDelta = new Vec3();

        // Grab initial position values
        const offset = new Vec3();
        offset.copy(object.position).sub(this.target);
        spherical.radius = sphericalTarget.radius = offset.distance();
        spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
        spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));

        this.offset = offset;

        this.update = () => {
            if (autoRotate) {
                handleAutoRotate();
            }

            // apply delta
            sphericalTarget.radius *= sphericalDelta.radius;
            sphericalTarget.theta += sphericalDelta.theta;
            sphericalTarget.phi += sphericalDelta.phi;

            // apply boundaries
            sphericalTarget.theta = Math.max(minAzimuthAngle, Math.min(maxAzimuthAngle, sphericalTarget.theta));
            sphericalTarget.phi = Math.max(minPolarAngle, Math.min(maxPolarAngle, sphericalTarget.phi));
            sphericalTarget.radius = Math.max(this.minDistance, Math.min(this.maxDistance, sphericalTarget.radius));

            // ease values
            spherical.phi += (sphericalTarget.phi - spherical.phi) * ease;
            spherical.theta += (sphericalTarget.theta - spherical.theta) * ease;
            spherical.radius += (sphericalTarget.radius - spherical.radius) * ease;

            // apply pan to target. As offset is relative to target, it also shifts
            this.target.add(panDelta);

            // apply rotation to offset
            let sinPhiRadius = spherical.radius * Math.sin(Math.max(0.000001, spherical.phi));
            offset.x = sinPhiRadius * Math.sin(spherical.theta);
            offset.y = spherical.radius * Math.cos(spherical.phi);
            offset.z = sinPhiRadius * Math.cos(spherical.theta);

            // Apply updated values to object
            object.position.copy(this.target).add(offset);
            object.lookAt(this.target);

            // Apply inertia to values
            sphericalDelta.theta *= inertia;
            sphericalDelta.phi *= inertia;
            panDelta.multiply(inertia);

            // Reset scale every frame to avoid applying scale multiple times
            sphericalDelta.radius = 1;
        };

        // Updates internals with new position
        this.forcePosition = () => {
            offset.copy(object.position).sub(this.target);
            spherical.radius = sphericalTarget.radius = offset.distance();
            spherical.theta = sphericalTarget.theta = Math.atan2(offset.x, offset.z);
            spherical.phi = sphericalTarget.phi = Math.acos(Math.min(Math.max(offset.y / sphericalTarget.radius, -1), 1));
            object.lookAt(this.target);
        };

        // Everything below here just updates panDelta and sphericalDelta
        // Using those two objects' values, the orbit is calculated

        const rotateStart = new Vec2();
        const panStart = new Vec2();
        const dollyStart = new Vec2();

        let state = STATE.NONE;
        this.mouseButtons = { ORBIT: 0, ZOOM: 1, PAN: 2 };

        function getZoomScale() {
            return Math.pow(0.95, zoomSpeed);
        }

        function panLeft(distance, m) {
            _tempVec3.set(m[0], m[1], m[2]);
            _tempVec3.multiply(-distance);
            panDelta.add(_tempVec3);
        }

        function panUp(distance, m) {
            _tempVec3.set(m[4], m[5], m[6]);
            _tempVec3.multiply(distance);
            panDelta.add(_tempVec3);
        }

        const pan = (deltaX, deltaY) => {
            _tempVec3.copy(object.position).sub(this.target);
            let targetDistance = _tempVec3.distance();
            targetDistance *= Math.tan((((object.fov || 45) / 2) * Math.PI) / 180.0);
            panLeft((2 * deltaX * targetDistance) / element.clientHeight, object.matrix);
            panUp((2 * deltaY * targetDistance) / element.clientHeight, object.matrix);
        };

        const dolly = (dollyScale) => {
            if (this.zoomStyle === 'dolly') sphericalDelta.radius /= dollyScale;
            else {
                object.fov /= dollyScale;
                if (object.type === 'orthographic') object.orthographic();
                else object.perspective();
            }
        };

        function handleAutoRotate() {
            const angle = ((2 * Math.PI) / 60 / 60) * autoRotateSpeed;
            sphericalDelta.theta -= angle;
        }

        function handleMoveRotate(x, y) {
            _tempVec2a.set(x, y);
            _tempVec2b.sub(_tempVec2a, rotateStart).multiply(rotateSpeed);
            sphericalDelta.theta -= (2 * Math.PI * _tempVec2b.x) / element.clientHeight;
            sphericalDelta.phi -= (2 * Math.PI * _tempVec2b.y) / element.clientHeight;
            rotateStart.copy(_tempVec2a);
        }

        function handleMouseMoveDolly(event) {
            _tempVec2a.set(event.clientX, event.clientY);
            _tempVec2b.sub(_tempVec2a, dollyStart);
            if (_tempVec2b.y > 0) {
                dolly(getZoomScale());
            } else if (_tempVec2b.y < 0) {
                dolly(1 / getZoomScale());
            }
            dollyStart.copy(_tempVec2a);
        }

        function handleMovePan(x, y) {
            _tempVec2a.set(x, y);
            _tempVec2b.sub(_tempVec2a, panStart).multiply(panSpeed);
            pan(_tempVec2b.x, _tempVec2b.y);
            panStart.copy(_tempVec2a);
        }

        function handleTouchStartDollyPan(event) {
            if (enableZoom) {
                let dx = event.touches[0].pageX - event.touches[1].pageX;
                let dy = event.touches[0].pageY - event.touches[1].pageY;
                let distance = Math.sqrt(dx * dx + dy * dy);
                dollyStart.set(0, distance);
            }

            if (enablePan) {
                let x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
                let y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
                panStart.set(x, y);
            }
        }

        function handleTouchMoveDollyPan(event) {
            if (enableZoom) {
                let dx = event.touches[0].pageX - event.touches[1].pageX;
                let dy = event.touches[0].pageY - event.touches[1].pageY;
                let distance = Math.sqrt(dx * dx + dy * dy);
                _tempVec2a.set(0, distance);
                _tempVec2b.set(0, Math.pow(_tempVec2a.y / dollyStart.y, zoomSpeed));
                dolly(_tempVec2b.y);
                dollyStart.copy(_tempVec2a);
            }

            if (enablePan) {
                let x = 0.5 * (event.touches[0].pageX + event.touches[1].pageX);
                let y = 0.5 * (event.touches[0].pageY + event.touches[1].pageY);
                handleMovePan(x, y);
            }
        }

        const onMouseDown = (event) => {
            if (!this.enabled) return;

            switch (event.button) {
                case this.mouseButtons.ORBIT:
                    if (enableRotate === false) return;
                    rotateStart.set(event.clientX, event.clientY);
                    state = STATE.ROTATE;
                    break;
                case this.mouseButtons.ZOOM:
                    if (enableZoom === false) return;
                    dollyStart.set(event.clientX, event.clientY);
                    state = STATE.DOLLY;
                    break;
                case this.mouseButtons.PAN:
                    if (enablePan === false) return;
                    panStart.set(event.clientX, event.clientY);
                    state = STATE.PAN;
                    break;
            }

            if (state !== STATE.NONE) {
                window.addEventListener('pointermove', onMouseMove, false);
                window.addEventListener('pointerup', onMouseUp, false);
            }
        };

        const onMouseMove = (event) => {
            if (!this.enabled) return;

            switch (state) {
                case STATE.ROTATE:
                    if (enableRotate === false) return;
                    handleMoveRotate(event.clientX, event.clientY);
                    break;
                case STATE.DOLLY:
                    if (enableZoom === false) return;
                    handleMouseMoveDolly(event);
                    break;
                case STATE.PAN:
                    if (enablePan === false) return;
                    handleMovePan(event.clientX, event.clientY);
                    break;
            }
        };

        const onMouseUp = () => {
            window.removeEventListener('pointermove', onMouseMove, false);
            window.removeEventListener('pointerup', onMouseUp, false);
            state = STATE.NONE;
        };

        const onMouseWheel = (event) => {
            if (!this.enabled || !enableZoom || (state !== STATE.NONE && state !== STATE.ROTATE)) return;
            event.stopPropagation();
            event.preventDefault();

            if (event.deltaY < 0) {
                dolly(1 / getZoomScale());
            } else if (event.deltaY > 0) {
                dolly(getZoomScale());
            }
        };

        const onTouchStart = (event) => {
            if (!this.enabled) return;
            event.preventDefault();

            switch (event.touches.length) {
                case 1:
                    if (enableRotate === false) return;
                    rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
                    state = STATE.ROTATE;
                    break;
                case 2:
                    if (enableZoom === false && enablePan === false) return;
                    handleTouchStartDollyPan(event);
                    state = STATE.DOLLY_PAN;
                    break;
                default:
                    state = STATE.NONE;
            }
        };

        const onTouchMove = (event) => {
            if (!this.enabled) return;
            event.preventDefault();
            event.stopPropagation();

            switch (event.touches.length) {
                case 1:
                    if (enableRotate === false) return;
                    handleMoveRotate(event.touches[0].pageX, event.touches[0].pageY);
                    break;
                case 2:
                    if (enableZoom === false && enablePan === false) return;
                    handleTouchMoveDollyPan(event);
                    break;
                default:
                    state = STATE.NONE;
            }
        };

        const onTouchEnd = () => {
            if (!this.enabled) return;
            state = STATE.NONE;
        };

        const onContextMenu = (event) => {
            if (!this.enabled) return;
            event.preventDefault();
        };

        function addHandlers() {
            element.addEventListener('contextmenu', onContextMenu, false);
            element.addEventListener('pointerdown', onMouseDown, false);
            element.addEventListener('wheel', onMouseWheel, { passive: false });
            element.addEventListener('touchstart', onTouchStart, { passive: false });
            element.addEventListener('touchend', onTouchEnd, false);
            element.addEventListener('touchmove', onTouchMove, { passive: false });
        }

        this.flush = function() {
            element.removeEventListener('contextmenu', onContextMenu);
            element.removeEventListener('pointerdown', onMouseDown);
            element.removeEventListener('wheel', onMouseWheel);
            element.removeEventListener('touchstart', onTouchStart);
            element.removeEventListener('touchend', onTouchEnd);
            element.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('pointermove', onMouseMove);
            window.removeEventListener('pointerup', onMouseUp);
        };

        addHandlers();

    }

}

export { Orbit };
