webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/hamburgers.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/hamburgers.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/*!\r\n * Hamburger styles originally by Jonathan Suh @jonsuh, modified by Łukasz Walaszczyk @l-walaszczyk\r\n * @site https://jonsuh.com/hamburgers\r\n * @link https://github.com/jonsuh/hamburgers\r\n */\r\n\r\n.hamburger {\r\n width: calc(0.6 * var(--header-height));\r\n height: calc(0.6 * var(--header-height));\r\n margin-right: calc(0.20 * var(--header-height));\r\n cursor: pointer;\r\n transition-property: opacity, filter;\r\n transition-duration: 0.15s;\r\n transition-timing-function: linear;\r\n color: inherit;\r\n text-transform: none;\r\n background-color: transparent;\r\n border: none;\r\n overflow: visible;\r\n}\r\n\r\n.hamburger.is-active .hamburger-inner,\r\n.hamburger.is-active .hamburger-inner::before,\r\n.hamburger.is-active .hamburger-inner::after {\r\n background-color: var(--dark-color);\r\n\r\n}\r\n\r\n\r\n.hamburger-box {\r\n width: 100%;\r\n height: 100%;\r\n display: block;\r\n position: relative;\r\n}\r\n\r\n.hamburger-inner {\r\n display: block;\r\n top: 50%;\r\n transform: translateY(-50%);\r\n}\r\n\r\n.hamburger-box:hover .hamburger-inner,\r\n.hamburger-box:hover .hamburger-inner::before,\r\n.hamburger-box:hover .hamburger-inner::after {\r\n background-color: #000000;\r\n\r\n}\r\n\r\n.hamburger-inner,\r\n.hamburger-inner::before,\r\n.hamburger-inner::after {\r\n width: 100%;\r\n height: 0.3rem;\r\n background-color: var(--dark-color);\r\n border-radius: 0.3rem;\r\n position: absolute;\r\n transition-property: transform;\r\n transition-duration: 0.15s;\r\n transition-timing-function: ease;\r\n}\r\n\r\n.hamburger-inner::before,\r\n.hamburger-inner::after {\r\n content: \"\";\r\n display: block;\r\n}\r\n\r\n.hamburger-inner::before {\r\n top: -350%;\r\n}\r\n\r\n.hamburger-inner::after {\r\n bottom: -350%;\r\n}\r\n\r\n\r\n.hamburger--squeeze .hamburger-inner {\r\n transition-duration: 0.075s;\r\n transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n}\r\n\r\n.hamburger--squeeze .hamburger-inner::before {\r\n transition: top 0.075s 0.12s ease, opacity 0.075s ease;\r\n}\r\n\r\n.hamburger--squeeze .hamburger-inner::after {\r\n transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n}\r\n\r\n.hamburger--squeeze.is-active .hamburger-inner {\r\n transform: rotate(45deg);\r\n transition-delay: 0.12s;\r\n transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n}\r\n\r\n.hamburger--squeeze.is-active .hamburger-inner::before {\r\n top: 0;\r\n opacity: 0;\r\n transition: top 0.075s ease, opacity 0.075s 0.12s ease;\r\n}\r\n\r\n.hamburger--squeeze.is-active .hamburger-inner::after {\r\n bottom: 0;\r\n transform: rotate(-90deg);\r\n transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\r\n}", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/hamburgers.css"],"names":[],"mappings":"AAAA;;;;EAIE;;AAEF;CACC,uCAAuC;CACvC,wCAAwC;CACxC,+CAA+C;CAC/C,eAAe;CACf,oCAAoC;CACpC,0BAA0B;CAC1B,kCAAkC;CAClC,cAAc;CACd,oBAAoB;CACpB,6BAA6B;CAC7B,YAAY;CACZ,iBAAiB;AAClB;;AAEA;;;CAGC,mCAAmC;;AAEpC;;;AAGA;CACC,WAAW;CACX,YAAY;CACZ,cAAc;CACd,kBAAkB;AACnB;;AAEA;CACC,cAAc;CACd,QAAQ;CACR,2BAA2B;AAC5B;;AAEA;;;CAGC,yBAAyB;;AAE1B;;AAEA;;;CAGC,WAAW;CACX,cAAc;CACd,mCAAmC;CACnC,qBAAqB;CACrB,kBAAkB;CAClB,8BAA8B;CAC9B,0BAA0B;CAC1B,gCAAgC;AACjC;;AAEA;;CAEC,WAAW;CACX,cAAc;AACf;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,aAAa;AACd;;;AAGA;CACC,2BAA2B;CAC3B,kEAAkE;AACnE;;AAEA;CACC,sDAAsD;AACvD;;AAEA;CACC,6FAA6F;AAC9F;;AAEA;CACC,wBAAwB;CACxB,uBAAuB;CACvB,+DAA+D;AAChE;;AAEA;CACC,MAAM;CACN,UAAU;CACV,sDAAsD;AACvD;;AAEA;CACC,SAAS;CACT,yBAAyB;CACzB,0FAA0F;AAC3F","file":"hamburgers.css","sourcesContent":["/*!\r\n * Hamburger styles originally by Jonathan Suh @jonsuh, modified by Łukasz Walaszczyk @l-walaszczyk\r\n * @site https://jonsuh.com/hamburgers\r\n * @link https://github.com/jonsuh/hamburgers\r\n */\r\n\r\n.hamburger {\r\n width: calc(0.6 * var(--header-height));\r\n height: calc(0.6 * var(--header-height));\r\n margin-right: calc(0.20 * var(--header-height));\r\n cursor: pointer;\r\n transition-property: opacity, filter;\r\n transition-duration: 0.15s;\r\n transition-timing-function: linear;\r\n color: inherit;\r\n text-transform: none;\r\n background-color: transparent;\r\n border: none;\r\n overflow: visible;\r\n}\r\n\r\n.hamburger.is-active .hamburger-inner,\r\n.hamburger.is-active .hamburger-inner::before,\r\n.hamburger.is-active .hamburger-inner::after {\r\n background-color: var(--dark-color);\r\n\r\n}\r\n\r\n\r\n.hamburger-box {\r\n width: 100%;\r\n height: 100%;\r\n display: block;\r\n position: relative;\r\n}\r\n\r\n.hamburger-inner {\r\n display: block;\r\n top: 50%;\r\n transform: translateY(-50%);\r\n}\r\n\r\n.hamburger-box:hover .hamburger-inner,\r\n.hamburger-box:hover .hamburger-inner::before,\r\n.hamburger-box:hover .hamburger-inner::after {\r\n background-color: #000000;\r\n\r\n}\r\n\r\n.hamburger-inner,\r\n.hamburger-inner::before,\r\n.hamburger-inner::after {\r\n width: 100%;\r\n height: 0.3rem;\r\n background-color: var(--dark-color);\r\n border-radius: 0.3rem;\r\n position: absolute;\r\n transition-property: transform;\r\n transition-duration: 0.15s;\r\n transition-timing-function: ease;\r\n}\r\n\r\n.hamburger-inner::before,\r\n.hamburger-inner::after {\r\n content: \"\";\r\n display: block;\r\n}\r\n\r\n.hamburger-inner::before {\r\n top: -350%;\r\n}\r\n\r\n.hamburger-inner::after {\r\n bottom: -350%;\r\n}\r\n\r\n\r\n.hamburger--squeeze .hamburger-inner {\r\n transition-duration: 0.075s;\r\n transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n}\r\n\r\n.hamburger--squeeze .hamburger-inner::before {\r\n transition: top 0.075s 0.12s ease, opacity 0.075s ease;\r\n}\r\n\r\n.hamburger--squeeze .hamburger-inner::after {\r\n transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n}\r\n\r\n.hamburger--squeeze.is-active .hamburger-inner {\r\n transform: rotate(45deg);\r\n transition-delay: 0.12s;\r\n transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n}\r\n\r\n.hamburger--squeeze.is-active .hamburger-inner::before {\r\n top: 0;\r\n opacity: 0;\r\n transition: top 0.075s ease, opacity 0.075s 0.12s ease;\r\n}\r\n\r\n.hamburger--squeeze.is-active .hamburger-inner::after {\r\n bottom: 0;\r\n transform: rotate(-90deg);\r\n transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);\r\n}"]}]);


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_BurgerMenu_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/BurgerMenu.scss */ "./styles/BurgerMenu.scss");
/* harmony import */ var _styles_BurgerMenu_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_BurgerMenu_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Button_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Button.scss */ "./styles/Button.scss");
/* harmony import */ var _styles_Button_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Button_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_HeaderDesktop_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/HeaderDesktop.scss */ "./styles/HeaderDesktop.scss");
/* harmony import */ var _styles_HeaderDesktop_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_HeaderDesktop_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_HeaderMobile_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/HeaderMobile.scss */ "./styles/HeaderMobile.scss");
/* harmony import */ var _styles_HeaderMobile_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_HeaderMobile_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_MenuItem_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/MenuItem.scss */ "./styles/MenuItem.scss");
/* harmony import */ var _styles_MenuItem_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_MenuItem_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_SchedulerNavButtons_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/SchedulerNavButtons.scss */ "./styles/SchedulerNavButtons.scss");
/* harmony import */ var _styles_SchedulerNavButtons_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_SchedulerNavButtons_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_Time_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Time.scss */ "./styles/Time.scss");
/* harmony import */ var _styles_Time_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Time_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_Week_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Week.scss */ "./styles/Week.scss");
/* harmony import */ var _styles_Week_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Week_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_Footer_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Footer.scss */ "./styles/Footer.scss");
/* harmony import */ var _styles_Footer_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_about_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/about.scss */ "./styles/about.scss");
/* harmony import */ var _styles_about_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_about_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_scheduler_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/scheduler.scss */ "./styles/scheduler.scss");
/* harmony import */ var _styles_scheduler_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_scheduler_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_services_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/services.scss */ "./styles/services.scss");
/* harmony import */ var _styles_services_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_services_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_hamburgers_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/hamburgers.css */ "./styles/hamburgers.css");
/* harmony import */ var _styles_hamburgers_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_hamburgers_css__WEBPACK_IMPORTED_MODULE_16__);

var _jsxFileName = "C:\\Users\\Ola\\Documents\\Lukasz\\projects\\next.js\\ec-ui\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;















function App({
  Component,
  pageProps
}) {
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./styles/hamburgers.css":
/*!*******************************!*\
  !*** ./styles/hamburgers.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./hamburgers.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/hamburgers.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./hamburgers.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/hamburgers.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./hamburgers.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/hamburgers.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ })

})
//# sourceMappingURL=_app.js.f679fecd58d605d0cdc9.hot-update.js.map