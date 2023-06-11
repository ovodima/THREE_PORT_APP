/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst THREE = __importStar(__webpack_require__(/*! three */ \"./node_modules/three/build/three.cjs\"));\nconst scene = new THREE.Scene();\nconst sizes = {\n    width: window.innerWidth,\n    height: window.innerHeight\n};\nconst camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);\ncamera.position.z = 2;\n//Texture\nconst loadingManager = new THREE.LoadingManager();\nloadingManager.onStart = () => {\n    console.log('onstart');\n};\nloadingManager.onProgress = () => {\n    console.log('onprogress');\n};\nloadingManager.onError = () => {\n    console.log('onerror');\n};\nconst textureLoader = new THREE.TextureLoader(loadingManager);\nwindow.addEventListener('resize', () => {\n    sizes.width = window.innerWidth;\n    sizes.height = window.innerHeight;\n    camera.aspect = sizes.width / sizes.height;\n    camera.updateProjectionMatrix();\n    renderer.setSize(sizes.width, sizes.height);\n    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));\n});\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(sizes.width, sizes.height);\ndocument.body.appendChild(renderer.domElement);\nconst geometry = new THREE.BoxGeometry();\nconst material = new THREE.MeshBasicMaterial({\n    color: 'blue',\n    wireframe: false,\n});\nconst cube = new THREE.Mesh(geometry, material);\nscene.add(cube);\nwindow.addEventListener('resize', onWindowResize, false);\nfunction onWindowResize() {\n    camera.aspect = window.innerWidth / window.innerHeight;\n    camera.updateProjectionMatrix();\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    render();\n}\nfunction animate() {\n    requestAnimationFrame(animate);\n    cube.rotation.x += 0.01;\n    cube.rotation.y += 0.01;\n    render();\n}\nfunction render() {\n    renderer.render(scene, camera);\n}\nanimate();\n\n\n//# sourceURL=webpack://port-app/./src/index.ts?");

/***/ }),

/***/ "./node_modules/three/build/three.cjs":
/*!********************************************!*\
  !*** ./node_modules/three/build/three.cjs ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;