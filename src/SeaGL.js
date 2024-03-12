/**
 * @description SeaGL
 * @about       WebGL 2 graphics library built for games.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/salinityengine/seagl
 */

/***** Core *****/

export { Assets } from './core/Assets.js';
export { Camera } from './core/Camera.js';
export { Geometry } from './core/Geometry.js';
export { Mesh } from './core/Mesh.js';
export { Program } from './core/Program.js';
export { Renderer } from './core/Renderer.js';
export { RenderTarget } from './core/RenderTarget.js';
export { Texture } from './core/Texture.js';
export { Transform } from './core/Transform.js';

/***** Extras *****/

export { Post } from './extras/Post.js';
export { Raycast } from './extras/Raycast.js';

// Controls
export { Orbit } from './extras/controls/Orbit.js';

// Geometries
export * as GeomUtils from './extras/geometries/GeomUtils.js';
export { Box } from './extras/geometries/Box.js';
export { Cylinder } from './extras/geometries/Cylinder.js';
export { Plane } from './extras/geometries/Plane.js';
export { Sphere } from './extras/geometries/Sphere.js';
export { Torus } from './extras/geometries/Torus.js';
export { Triangle } from './extras/geometries/Triangle.js';
export { Tube } from './extras/geometries/Tube.js';

// Loaders
export { Atlas } from './extras/loaders/Atlas.js';
export { GLTFAnimation } from './extras/loaders/GLTFAnimation.js';
export { GLTFLoader } from './extras/loaders/GLTFLoader.js';
export { GLTFSkin } from './extras/loaders/GLTFSkin.js';
export { ImageLoader } from './extras/loaders/ImageLoader.js';
export { TextureLoader } from './extras/loaders/TextureLoader.js';

// Objects
export { Billboard } from './extras/objects/Billboard.js';
export { Curve } from './extras/objects/Curve.js';
export { InstancedMesh } from './extras/objects/InstancedMesh.js';
export { Polygon } from './extras/objects/Polygon.js';
export { Polyline } from './extras/objects/Polyline.js';
export { Sprite } from './extras/objects/Sprite.js';
export { WireMesh } from './extras/objects/WireMesh.js';

// Path
export { BaseSegment } from './extras/path/BaseSegment.js';
export { CubicBezierSegment } from './extras/path/CubicBezierSegment.js';
export { LineSegment } from './extras/path/LineSegment.js';
export { Path } from './extras/path/Path.js';
export { QuadraticBezierSegment } from './extras/path/QuadraticBezierSegment.js';

// Programs
export { TextureArray } from './extras/programs/TextureArray.js';
export { Uber } from './extras/programs/Uber.js';

// Tools
export { Capabilities } from './extras/tools/Capabilities.js';
export { Clock } from './extras/tools/Clock.js';
export { Debug } from './extras/tools/Debug.js';

/***** Math *****/

export * as MathUtils from './math/MathUtils.js';
export { Color } from './math/Color.js';
export { Euler } from './math/Euler.js';
export { Mat3 } from './math/Mat3.js';
export { Mat4 } from './math/Mat4.js';
export { Quat } from './math/Quat.js';
export { Vec2 } from './math/Vec2.js';
export { Vec3 } from './math/Vec3.js';
export { Vec4 } from './math/Vec4.js';

export * as ColorFunc from './math/functions/ColorFunc.js';
export * as EulerFunc from './math/functions/EulerFunc.js';
export * as Mat3Func from './math/functions/Mat3Func.js';
export * as Mat4Func from './math/functions/Mat4Func.js';
export * as QuatFunc from './math/functions/QuatFunc.js';
export * as Vec2Func from './math/functions/Vec2Func.js';
export * as Vec3Func from './math/functions/Vec3Func.js';
export * as Vec4Func from './math/functions/Vec4Func.js';

/***** External *****/

export { Packer } from './libs/Packer.js';