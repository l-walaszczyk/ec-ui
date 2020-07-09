module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_BurgerMenu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/BurgerMenu.scss */ "./styles/BurgerMenu.scss");
/* harmony import */ var _styles_BurgerMenu_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_BurgerMenu_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Button_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Button.scss */ "./styles/Button.scss");
/* harmony import */ var _styles_Button_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Button_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_HeaderDesktop_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/HeaderDesktop.scss */ "./styles/HeaderDesktop.scss");
/* harmony import */ var _styles_HeaderDesktop_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_HeaderDesktop_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_HeaderMobile_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/HeaderMobile.scss */ "./styles/HeaderMobile.scss");
/* harmony import */ var _styles_HeaderMobile_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_HeaderMobile_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_MenuItem_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/MenuItem.scss */ "./styles/MenuItem.scss");
/* harmony import */ var _styles_MenuItem_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_MenuItem_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_SchedulerNavButtons_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/SchedulerNavButtons.scss */ "./styles/SchedulerNavButtons.scss");
/* harmony import */ var _styles_SchedulerNavButtons_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_SchedulerNavButtons_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Time_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Time.scss */ "./styles/Time.scss");
/* harmony import */ var _styles_Time_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Time_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_Week_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Week.scss */ "./styles/Week.scss");
/* harmony import */ var _styles_Week_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Week_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_Footer_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Footer.scss */ "./styles/Footer.scss");
/* harmony import */ var _styles_Footer_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_about_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/about.scss */ "./styles/about.scss");
/* harmony import */ var _styles_about_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_about_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_scheduler_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/scheduler.scss */ "./styles/scheduler.scss");
/* harmony import */ var _styles_scheduler_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_scheduler_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_services_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/services.scss */ "./styles/services.scss");
/* harmony import */ var _styles_services_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_services_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_hamburgers_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/hamburgers.css */ "./styles/hamburgers.css");
/* harmony import */ var _styles_hamburgers_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_hamburgers_css__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "C:\\Users\\Ola\\Documents\\Lukasz\\projects\\next.js\\ec-ui\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
















function App({
  Component,
  pageProps
}) {
  return __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./styles/BurgerMenu.scss":
/*!********************************!*\
  !*** ./styles/BurgerMenu.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/Button.scss":
/*!****************************!*\
  !*** ./styles/Button.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/Footer.scss":
/*!****************************!*\
  !*** ./styles/Footer.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/HeaderDesktop.scss":
/*!***********************************!*\
  !*** ./styles/HeaderDesktop.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/HeaderMobile.scss":
/*!**********************************!*\
  !*** ./styles/HeaderMobile.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/MenuItem.scss":
/*!******************************!*\
  !*** ./styles/MenuItem.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/SchedulerNavButtons.scss":
/*!*****************************************!*\
  !*** ./styles/SchedulerNavButtons.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/Time.scss":
/*!**************************!*\
  !*** ./styles/Time.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/Week.scss":
/*!**************************!*\
  !*** ./styles/Week.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/about.scss":
/*!***************************!*\
  !*** ./styles/about.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/hamburgers.css":
/*!*******************************!*\
  !*** ./styles/hamburgers.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/scheduler.scss":
/*!*******************************!*\
  !*** ./styles/scheduler.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/services.scss":
/*!******************************!*\
  !*** ./styles/services.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map