/**
 * @description EyeGL
 * @about       Fast WebGL 2 graphics library built for games.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2022-2023 Stephens Nunnally and Scidian Studios
 * @source      https://github.com/onsightengine/eyegl
 */

/***** Core *****/

export { Geometry } from './core/Geometry.js';
export { Program } from './core/Program.js';
export { Renderer } from './core/Renderer.js';
export { Camera } from './core/Camera.js';
export { Transform } from './core/Transform.js';
export { Mesh } from './core/Mesh.js';
export { Texture } from './core/Texture.js';
export { RenderTarget } from './core/RenderTarget.js';

// Programs
export { MeshProgram } from './core/programs/MeshProgram.js';

// WebGL
export { Capabilities } from './core/webgl/Capabilities.js';
export { Extensions } from './core/webgl/Extensions.js';

/***** Extras *****/

export { Raycast } from './extras/Raycast.js';
export { Post } from './extras/Post.js';

// Controls
export { Orbit } from './extras/controls/Orbit.js';

// Geometries
export { Box } from './extras/geometries/Box.js';
export { Cylinder } from './extras/geometries/Cylinder.js';
export { Plane } from './extras/geometries/Plane.js';
export { Sphere } from './extras/geometries/Sphere.js';
export { Torus } from './extras/geometries/Torus.js';
export { Triangle } from './extras/geometries/Triangle.js';

// Objects
export { InstancedMesh } from './extras/objects/InstancedMesh.js';
export { WireMesh } from './extras/objects/WireMesh.js';

/***** Math *****/

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

/***** Utils *****/

export * as GeomUtils from './utils/GeomUtils.js';
export * as MathUtils from './utils/MathUtils.js';

/***** Unused *****/

// export { Curve } from './extras/Curve.js';
// export { Path } from './extras/Path/Path.js';
// export { Skin } from './extras/Skin.js';
// export { Animation } from './extras/Animation.js';
// export { Text } from './extras/Text.js';
// export { NormalProgram } from './extras/NormalProgram.js';
// export { Flowmap } from './extras/Flowmap.js';
// export { GPGPU } from './extras/GPGPU.js';
// export { Polyline } from './extras/Polyline.js';
// export { Shadow } from './extras/Shadow.js';
// export { KTXTexture } from './extras/KTXTexture.js';
// export { TextureLoader } from './extras/TextureLoader.js';
// export { GLTFLoader } from './extras/GLTFLoader.js';
// export { GLTFSkin } from './extras/GLTFSkin.js';
// export { BasisManager } from './extras/BasisManager.js';
// export { AxesHelper } from './extras/helpers/AxesHelper.js';
// export { GridHelper } from './extras/helpers/GridHelper.js';
// export { VertexNormalsHelper } from './extras/helpers/VertexNormalsHelper.js';
// export { FaceNormalsHelper } from './extras/helpers/FaceNormalsHelper.js';
