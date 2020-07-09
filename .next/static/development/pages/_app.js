(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_app.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/BurgerMenu.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/BurgerMenu.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "nav.burger-menu {\n  position: fixed;\n  z-index: 1;\n  height: 100vh;\n  width: 100%;\n  background-color: #EEF0F2; }\n  nav.burger-menu > ul {\n    margin-top: calc(7vh + var(--header-height)); }\n    nav.burger-menu > ul > li {\n      margin: 6vh 0;\n      text-align: center;\n      overflow: hidden; }\n  nav.burger-menu ul li {\n    list-style-type: none; }\n    nav.burger-menu ul li .menu-item {\n      font-family: \"Quicksand\", sans-serif;\n      font-size: 1.8rem;\n      text-decoration: none;\n      color: inherit;\n      border: none; }\n    nav.burger-menu ul li a.button-typ {\n      font-size: 1.6rem;\n      margin: auto; }\n    nav.burger-menu ul li ul li {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      margin: 0;\n      height: 5rem; }\n      nav.burger-menu ul li ul li .menu-item {\n        font-size: 1.5rem; }\n\n/* BURGER MENU TRANSITION */\n/* \\/ */\n.burger-menu-transition-enter {\n  transform: translateX(100%); }\n\n.burger-menu-transition-enter-active {\n  transform: translateX(0); }\n\n.burger-menu-transition-exit {\n  transform: translateX(0); }\n\n.burger-menu-transition-exit-active {\n  transform: translateX(100%); }\n\n.burger-menu-transition-enter-active,\n.burger-menu-transition-exit-active {\n  transition: transform 250ms ease-out; }\n\n/* /\\ */\n/* BURGER MENU TRANSITION */\n/* BURGER SUBMENU TRANSITION */\n/* \\/ */\n.burger-submenu-transition-enter {\n  max-height: 0; }\n\n.burger-submenu-transition-enter-active {\n  max-height: 15rem; }\n\n.burger-submenu-transition-exit {\n  max-height: 15rem; }\n\n.burger-submenu-transition-exit-active {\n  max-height: 0; }\n\n.burger-submenu-transition-enter-active,\n.burger-submenu-transition-exit-active {\n  transition: max-height 250ms ease-out; }\n\n/* /\\ */\n/* BURGER SUBMENU TRANSITION */\n", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/BurgerMenu.scss"],"names":[],"mappings":"AAGA;EACC,eAAe;EACf,UAAU;EACV,aAAa;EACb,WAAW;EACX,yBAAyB,EAAA;EAL1B;IAQE,4CAA4C,EAAA;IAR9C;MAWG,aAAa;MACb,kBAAkB;MAClB,gBAAgB,EAAA;EAbnB;IAmBG,qBAAqB,EAAA;IAnBxB;MAuBI,oCAAoC;MACpC,iBAAiB;MACjB,qBAAqB;MACrB,cAAc;MACd,YAAY,EAAA;IA3BhB;MA+BI,iBAAiB;MACjB,YAAY,EAAA;IAhChB;MAqCK,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,SAAS;MACT,YA5CoB,EAAA;MAGzB;QA4CM,iBAAiB,EAAA;;AAQvB,2BAAA;AACA,OAAA;AACA;EACC,2BAA2B,EAAA;;AAG5B;EACC,wBAAwB,EAAA;;AAGzB;EACC,wBAAwB,EAAA;;AAGzB;EACC,2BAA2B,EAAA;;AAG5B;;EAEC,oCAAoC,EAAA;;AAGrC,OAAA;AACA,2BAAA;AAEA,8BAAA;AACA,OAAA;AACA;EACC,aAAa,EAAA;;AAGd;EACC,iBAvF4C,EAAA;;AA0F7C;EACC,iBA3F4C,EAAA;;AA8F7C;EACC,aAAa,EAAA;;AAGd;;EAEC,qCAAqC,EAAA;;AAGtC,OAAA;AACA,8BAAA","file":"BurgerMenu.scss","sourcesContent":["$sub-menu-li-height: 5rem;\r\n$sub-menu-total-height: 3*$sub-menu-li-height;\r\n\r\nnav.burger-menu {\r\n position: fixed;\r\n z-index: 1;\r\n height: 100vh;\r\n width: 100%;\r\n background-color: #EEF0F2;\r\n\r\n >ul {\r\n  margin-top: calc(7vh + var(--header-height));\r\n\r\n  >li {\r\n   margin: 6vh 0;\r\n   text-align: center;\r\n   overflow: hidden;\r\n  }\r\n }\r\n\r\n ul {\r\n  li {\r\n   list-style-type: none;\r\n\r\n   .menu-item {\r\n    // font-family: \"Montserrat\", sans-serif;\r\n    font-family: \"Quicksand\", sans-serif;\r\n    font-size: 1.8rem;\r\n    text-decoration: none;\r\n    color: inherit;\r\n    border: none;\r\n   }\r\n\r\n   a.button-typ {\r\n    font-size: 1.6rem;\r\n    margin: auto;\r\n   }\r\n\r\n   ul {\r\n    li {\r\n     display: flex;\r\n     align-items: center;\r\n     justify-content: center;\r\n     margin: 0;\r\n     height: $sub-menu-li-height;\r\n\r\n     .menu-item {\r\n      font-size: 1.5rem;\r\n     }\r\n    }\r\n   }\r\n  }\r\n }\r\n}\r\n\r\n/* BURGER MENU TRANSITION */\r\n/* \\/ */\r\n.burger-menu-transition-enter {\r\n transform: translateX(100%);\r\n}\r\n\r\n.burger-menu-transition-enter-active {\r\n transform: translateX(0);\r\n}\r\n\r\n.burger-menu-transition-exit {\r\n transform: translateX(0);\r\n}\r\n\r\n.burger-menu-transition-exit-active {\r\n transform: translateX(100%);\r\n}\r\n\r\n.burger-menu-transition-enter-active,\r\n.burger-menu-transition-exit-active {\r\n transition: transform 250ms ease-out;\r\n}\r\n\r\n/* /\\ */\r\n/* BURGER MENU TRANSITION */\r\n\r\n/* BURGER SUBMENU TRANSITION */\r\n/* \\/ */\r\n.burger-submenu-transition-enter {\r\n max-height: 0;\r\n}\r\n\r\n.burger-submenu-transition-enter-active {\r\n max-height: $sub-menu-total-height;\r\n}\r\n\r\n.burger-submenu-transition-exit {\r\n max-height: $sub-menu-total-height;\r\n}\r\n\r\n.burger-submenu-transition-exit-active {\r\n max-height: 0;\r\n}\r\n\r\n.burger-submenu-transition-enter-active,\r\n.burger-submenu-transition-exit-active {\r\n transition: max-height 250ms ease-out;\r\n}\r\n\r\n/* /\\ */\r\n/* BURGER SUBMENU TRANSITION */"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Button.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/Button.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "a.button-typ {\n  display: block;\n  width: fit-content;\n  border: 0.5px solid var(--dark-color);\n  border-radius: 1.1rem 0;\n  font-family: 'Montserrat', sans-serif;\n  font-style: italic;\n  font-weight: normal;\n  font-size: 1.25rem;\n  text-decoration: none;\n  text-align: center;\n  color: inherit;\n  padding: 0.5rem 0;\n  background-color: rgba(255, 255, 255, 0.6); }\n  a.button-typ:focus, a.button-typ:hover {\n    text-shadow: 0 0 00px #000; }\n  a.button-typ:hover {\n    background-color: rgba(255, 255, 255, 0.8);\n    box-shadow: -1.5px 1.5px 2.5px var(--bg-color), 1.5px -1.5px 2.5px var(--bg-color); }\n  a.button-typ i {\n    margin-left: 1rem;\n    margin-right: -0.4rem; }\n    a.button-typ i + span {\n      font-family: 'Quicksand', sans-serif;\n      font-weight: 500; }\n  a.button-typ span {\n    margin-left: 1rem;\n    margin-right: 1rem;\n    line-height: 1rem; }\n", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/Button.scss"],"names":[],"mappings":"AAAA;EACC,cAAc;EACd,kBAAkB;EAClB,qCAAqC;EACrC,uBAAuB;EACvB,qCAAqC;EACrC,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,0CAA0C,EAAA;EAb3C;IAiBE,0BAA0B,EAAA;EAjB5B;IAsBE,0CAA0C;IAC1C,kFACmC,EAAA;EAxBrC;IA4BE,iBAAiB;IACjB,qBAAqB,EAAA;IA7BvB;MAgCG,oCAAoC;MACpC,gBAAgB,EAAA;EAjCnB;IAsCE,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB,EAAA","file":"Button.scss","sourcesContent":["a.button-typ {\r\n display: block;\r\n width: fit-content;\r\n border: 0.5px solid var(--dark-color);\r\n border-radius: 1.1rem 0;\r\n font-family: 'Montserrat', sans-serif;\r\n font-style: italic;\r\n font-weight: normal;\r\n font-size: 1.25rem;\r\n text-decoration: none;\r\n text-align: center;\r\n color: inherit;\r\n padding: 0.5rem 0;\r\n background-color: rgba(255, 255, 255, 0.6);\r\n\r\n &:focus,\r\n &:hover {\r\n  text-shadow: 0 0 00px #000;\r\n }\r\n\r\n &:hover {\r\n  // color: #000000;\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  box-shadow: -1.5px 1.5px 2.5px var(--bg-color),\r\n   1.5px -1.5px 2.5px var(--bg-color);\r\n }\r\n\r\n i {\r\n  margin-left: 1rem;\r\n  margin-right: -0.4rem;\r\n\r\n  &+span {\r\n   font-family: 'Quicksand', sans-serif;\r\n   font-weight: 500;\r\n  }\r\n }\r\n\r\n span {\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  line-height: 1rem;\r\n }\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Footer.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/Footer.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "footer {\n  height: var(--header-height);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #ffffff;\n  background-color: #424746;\n  text-align: center;\n  line-height: 2.1rem; }\n  footer span {\n    font-size: 1.2rem;\n    margin: 0 0.6rem; }\n  footer a i {\n    margin: 0 0.6rem;\n    color: #ffffff;\n    text-decoration: none;\n    font-size: 1.6rem; }\n", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/Footer.scss"],"names":[],"mappings":"AAAA;EACC,4BAA4B;EAC5B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EAGvB,cAAc;EACd,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB,EAAA;EAVpB;IAaE,iBAAiB;IACjB,gBAAgB,EAAA;EAdlB;IAmBG,gBAAgB;IAChB,cAAc;IACd,qBAAqB;IACrB,iBAAiB,EAAA","file":"Footer.scss","sourcesContent":["footer {\r\n height: var(--header-height);\r\n display: flex;\r\n flex-direction: column;\r\n justify-content: center;\r\n // padding: 1rem 0;\r\n // box-sizing: border-box;\r\n color: #ffffff;\r\n background-color: #424746;\r\n text-align: center;\r\n line-height: 2.1rem;\r\n\r\n span {\r\n  font-size: 1.2rem;\r\n  margin: 0 0.6rem;\r\n }\r\n\r\n a {\r\n  i {\r\n   margin: 0 0.6rem;\r\n   color: #ffffff;\r\n   text-decoration: none;\r\n   font-size: 1.6rem;\r\n  }\r\n }\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/HeaderDesktop.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/HeaderDesktop.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "header.desktop {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: var(--header-height);\n  background-color: rgba(255, 255, 255, 0.9); }\n  header.desktop a.logo {\n    display: flex;\n    align-items: center;\n    height: calc(0.7 * var(--header-height));\n    margin-left: 2.5vw; }\n    header.desktop a.logo img.logo {\n      height: 99%; }\n  header.desktop nav.desktop-menu {\n    width: 65%;\n    margin-right: 2.5vw;\n    height: 100%; }\n    header.desktop nav.desktop-menu ul {\n      display: flex;\n      align-items: center;\n      height: 100%; }\n      header.desktop nav.desktop-menu ul li {\n        flex-grow: 1;\n        flex-basis: 10%;\n        height: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        list-style-type: none; }\n        header.desktop nav.desktop-menu ul li:last-child {\n          flex-basis: 20%;\n          flex-shrink: 0; }\n        header.desktop nav.desktop-menu ul li .menu-item {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          height: 70%;\n          width: 100%;\n          font-family: \"Quicksand\", sans-serif;\n          font-size: 1.6rem;\n          font-weight: 400;\n          color: inherit;\n          border: none;\n          text-align: center;\n          text-decoration: none;\n          vertical-align: middle;\n          transition: ease-in-out 100ms; }\n          header.desktop nav.desktop-menu ul li .menu-item:focus, header.desktop nav.desktop-menu ul li .menu-item:hover {\n            outline: none;\n            color: black;\n            text-shadow: 0 0 0.5px #000; }\n        header.desktop nav.desktop-menu ul li a.button-typ {\n          flex-basis: content;\n          font-size: 1.5rem;\n          margin: auto; }\n        header.desktop nav.desktop-menu ul li.submenu {\n          position: relative; }\n          header.desktop nav.desktop-menu ul li.submenu ul {\n            position: absolute;\n            z-index: 9;\n            top: var(--header-height);\n            left: -950%;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 2000%;\n            height: var(--header-height);\n            background-color: rgba(255, 255, 255, 0.9);\n            overflow: hidden; }\n            header.desktop nav.desktop-menu ul li.submenu ul li {\n              height: var(--header-height);\n              flex-basis: 28vw;\n              flex-grow: 0; }\n              header.desktop nav.desktop-menu ul li.submenu ul li .menu-item {\n                font-size: 1.3rem; }\n\n/* DESKTOP SUBMENU TRANSITION */\n/* \\/ */\n.desktop-submenu-transition-enter {\n  max-height: 0; }\n\n.desktop-submenu-transition-enter-active {\n  max-height: var(--header-height); }\n\n.desktop-submenu-transition-exit {\n  max-height: var(--header-height); }\n\n.desktop-submenu-transition-exit-active {\n  max-height: 0; }\n\n.desktop-submenu-transition-enter-active,\n.desktop-submenu-transition-exit-active {\n  transition: max-height 200ms ease-out; }\n\n/* /\\ */\n/* DESKTOP SUBMENU TRANSITION */\n", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/HeaderDesktop.scss"],"names":[],"mappings":"AAAA;EACC,eAAe;EACf,WAAW;EACX,MAAM;EACN,OAAO;EACP,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,4BAA4B;EAC5B,0CAA0C,EAAA;EAV3C;IAaE,aAAa;IACb,mBAAmB;IACnB,wCAAwC;IACxC,kBAAkB,EAAA;IAhBpB;MAmBG,WAAW,EAAA;EAnBd;IAwBE,UAAU;IACV,mBAAmB;IACnB,YAAY,EAAA;IA1Bd;MA6BG,aAAa;MACb,mBAAmB;MACnB,YAAY,EAAA;MA/Bf;QAkCI,YAAY;QACZ,eAAe;QACf,YAAY;QACZ,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,qBAAqB,EAAA;QAxCzB;UA2CK,eAAe;UACf,cAAc,EAAA;QA5CnB;UAgDK,aAAa;UACb,uBAAuB;UACvB,mBAAmB;UACnB,WAAW;UACX,WAAW;UACX,oCAAoC;UACpC,iBAAiB;UACjB,gBAAgB;UAChB,cAAc;UACd,YAAY;UACZ,kBAAkB;UAClB,qBAAqB;UACrB,sBAAsB;UAEtB,6BAA6B,EAAA;UA9DlC;YAmEM,aAAa;YACb,YAAY;YACZ,2BAA2B,EAAA;QArEjC;UA2EK,mBAAmB;UACnB,iBAAiB;UACjB,YAAY,EAAA;QA7EjB;UAiFK,kBAAkB,EAAA;UAjFvB;YAoFM,kBAAkB;YAClB,UAAU;YACV,yBAAyB;YACzB,WAAW;YACX,aAAa;YACb,uBAAuB;YACvB,mBAAmB;YACnB,YAAY;YACZ,4BAA4B;YAC5B,0CAA0C;YAC1C,gBAAgB,EAAA;YA9FtB;cAiGO,4BAA4B;cAC5B,gBAAgB;cAChB,YAAY,EAAA;cAnGnB;gBAsGQ,iBAAiB,EAAA;;AAUzB,+BAAA;AACA,OAAA;AACA;EAEC,aAAa,EAAA;;AAGd;EACC,gCAAgC,EAAA;;AAIjC;EACC,gCAAgC,EAAA;;AAIjC;EACC,aAAa,EAAA;;AAId;;EAEC,qCAAqC,EAAA;;AAItC,OAAA;AACA,+BAAA","file":"HeaderDesktop.scss","sourcesContent":["header.desktop {\r\n position: fixed;\r\n z-index: 10;\r\n top: 0;\r\n left: 0;\r\n display: flex;\r\n justify-content: space-between;\r\n align-items: center;\r\n width: 100%;\r\n height: var(--header-height);\r\n background-color: rgba(255, 255, 255, 0.9);\r\n\r\n a.logo {\r\n  display: flex;\r\n  align-items: center;\r\n  height: calc(0.7 * var(--header-height));\r\n  margin-left: 2.5vw;\r\n\r\n  img.logo {\r\n   height: 99%;\r\n  }\r\n }\r\n\r\n nav.desktop-menu {\r\n  width: 65%;\r\n  margin-right: 2.5vw;\r\n  height: 100%;\r\n\r\n  ul {\r\n   display: flex;\r\n   align-items: center;\r\n   height: 100%;\r\n\r\n   li {\r\n    flex-grow: 1;\r\n    flex-basis: 10%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    list-style-type: none;\r\n\r\n    &:last-child {\r\n     flex-basis: 20%;\r\n     flex-shrink: 0;\r\n    }\r\n\r\n    .menu-item {\r\n     display: flex;\r\n     justify-content: center;\r\n     align-items: center;\r\n     height: 70%;\r\n     width: 100%;\r\n     font-family: \"Quicksand\", sans-serif;\r\n     font-size: 1.6rem;\r\n     font-weight: 400;\r\n     color: inherit;\r\n     border: none;\r\n     text-align: center;\r\n     text-decoration: none;\r\n     vertical-align: middle;\r\n\r\n     transition: ease-in-out 100ms;\r\n     // text-shadow: 0px 0px 0px var(--shadow-color);\r\n\r\n     &:focus,\r\n     &:hover {\r\n      outline: none;\r\n      color: black;\r\n      text-shadow: 0 0 0.5px #000;\r\n     }\r\n\r\n    }\r\n\r\n    a.button-typ {\r\n     flex-basis: content;\r\n     font-size: 1.5rem;\r\n     margin: auto;\r\n    }\r\n\r\n    &.submenu {\r\n     position: relative;\r\n\r\n     ul {\r\n      position: absolute;\r\n      z-index: 9;\r\n      top: var(--header-height);\r\n      left: -950%;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      width: 2000%;\r\n      height: var(--header-height);\r\n      background-color: rgba(255, 255, 255, 0.9);\r\n      overflow: hidden;\r\n\r\n      li {\r\n       height: var(--header-height);\r\n       flex-basis: 28vw;\r\n       flex-grow: 0;\r\n\r\n       .menu-item {\r\n        font-size: 1.3rem;\r\n       }\r\n      }\r\n     }\r\n    }\r\n   }\r\n  }\r\n }\r\n}\r\n\r\n/* DESKTOP SUBMENU TRANSITION */\r\n/* \\/ */\r\n.desktop-submenu-transition-enter {\r\n // transform: translateY(-200%);\r\n max-height: 0;\r\n}\r\n\r\n.desktop-submenu-transition-enter-active {\r\n max-height: var(--header-height);\r\n // transform: translateY(0);\r\n}\r\n\r\n.desktop-submenu-transition-exit {\r\n max-height: var(--header-height);\r\n // transform: translateY(0);\r\n}\r\n\r\n.desktop-submenu-transition-exit-active {\r\n max-height: 0;\r\n // transform: translateY(-200%);\r\n}\r\n\r\n.desktop-submenu-transition-enter-active,\r\n.desktop-submenu-transition-exit-active {\r\n transition: max-height 200ms ease-out;\r\n // transition: transform 2500ms ease-out;\r\n}\r\n\r\n/* /\\ */\r\n/* DESKTOP SUBMENU TRANSITION */"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/HeaderMobile.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/HeaderMobile.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "header.mobile {\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: var(--header-height);\n  background-color: rgba(255, 255, 255, 0.8); }\n  header.mobile a.logo {\n    display: flex;\n    align-items: center;\n    height: calc(0.7 * var(--header-height));\n    padding-left: calc(0.15 * var(--header-height)); }\n    header.mobile a.logo img.logo {\n      height: 99%; }\n", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/HeaderMobile.scss"],"names":[],"mappings":"AAAA;EACC,eAAe;EACf,WAAW;EACX,MAAM;EACN,OAAO;EACP,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,4BAA4B;EAC5B,0CAA0C,EAAA;EAV3C;IAaE,aAAa;IACb,mBAAmB;IACnB,wCAAwC;IACxC,+CAA+C,EAAA;IAhBjD;MAmBG,WAAW,EAAA","file":"HeaderMobile.scss","sourcesContent":["header.mobile {\r\n position: fixed;\r\n z-index: 10;\r\n top: 0;\r\n left: 0;\r\n display: flex;\r\n justify-content: space-between;\r\n align-items: center;\r\n width: 100%;\r\n height: var(--header-height);\r\n background-color: rgba(255, 255, 255, 0.8);\r\n\r\n a.logo {\r\n  display: flex;\r\n  align-items: center;\r\n  height: calc(0.7 * var(--header-height));\r\n  padding-left: calc(0.15 * var(--header-height));\r\n\r\n  img.logo {\r\n   height: 99%;\r\n  }\r\n }\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/MenuItem.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/MenuItem.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".menu-item {\n  background-color: inherit; }\n  .menu-item i {\n    margin-left: 0.5rem; }\n", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/MenuItem.scss"],"names":[],"mappings":"AAAA;EACC,yBAAyB,EAAA;EAD1B;IAIE,mBAAmB,EAAA","file":"MenuItem.scss","sourcesContent":[".menu-item {\r\n background-color: inherit;\r\n\r\n i {\r\n  margin-left: 0.5rem;\r\n }\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/SchedulerNavButtons.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/SchedulerNavButtons.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "section.scheduler div.button-container {\n  min-width: 30rem;\n  margin: 2rem; }\n  section.scheduler div.button-container button.nav {\n    display: block;\n    width: 8rem;\n    font-size: 1.4rem;\n    padding: 1rem; }\n    section.scheduler div.button-container button.nav:first-child {\n      float: left; }\n    section.scheduler div.button-container button.nav:last-child {\n      float: right; }\n    section.scheduler div.button-container button.nav:hover {\n      color: #000000;\n      background-color: rgba(255, 255, 255, 0.75);\n      box-shadow: -0.5px 0.5px 1.5px var(--bg-color), 0.5px -0.5px 1.5px var(--bg-color);\n      cursor: pointer; }\n    section.scheduler div.button-container button.nav.inactive {\n      color: #ccc;\n      cursor: default; }\n      section.scheduler div.button-container button.nav.inactive:hover {\n        background-color: inherit;\n        box-shadow: inherit; }\n", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/SchedulerNavButtons.scss"],"names":[],"mappings":"AAAA;EAEE,gBAAgB;EAChB,YAAY,EAAA;EAHd;IAMG,cAAc;IACd,WAAW;IACX,iBAAiB;IACjB,aAAa,EAAA;IAThB;MAYI,WAAW,EAAA;IAZf;MAgBI,YAAY,EAAA;IAhBhB;MAoBI,cAAc;MACd,2CAA2C;MAC3C,kFACmC;MACnC,eAAe,EAAA;IAxBnB;MA4BI,WAAW;MACX,eAAe,EAAA;MA7BnB;QAiCK,yBAAyB;QACzB,mBAAmB,EAAA","file":"SchedulerNavButtons.scss","sourcesContent":["section.scheduler {\r\n div.button-container {\r\n  min-width: 30rem;\r\n  margin: 2rem;\r\n\r\n  button.nav {\r\n   display: block;\r\n   width: 8rem;\r\n   font-size: 1.4rem;\r\n   padding: 1rem;\r\n\r\n   &:first-child {\r\n    float: left;\r\n   }\r\n\r\n   &:last-child {\r\n    float: right;\r\n   }\r\n\r\n   &:hover {\r\n    color: #000000;\r\n    background-color: rgba(255, 255, 255, 0.75);\r\n    box-shadow: -0.5px 0.5px 1.5px var(--bg-color),\r\n     0.5px -0.5px 1.5px var(--bg-color);\r\n    cursor: pointer;\r\n   }\r\n\r\n   &.inactive {\r\n    color: #ccc;\r\n    cursor: default;\r\n\r\n\r\n    &:hover {\r\n     background-color: inherit;\r\n     box-shadow: inherit;\r\n    }\r\n   }\r\n  }\r\n }\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Time.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/Time.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "div.time-container div.time {\n  padding: 0 2vw; }\n  div.time-container div.time p {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center; }\n    div.time-container div.time p button {\n      flex-grow: 0;\n      flex-shrink: 0;\n      line-height: 3rem;\n      width: 5rem;\n      text-align: center;\n      border-color: transparent; }\n      div.time-container div.time p button:hover, div.time-container div.time p button.selected {\n        border-color: var(--dark-color);\n        color: var(--dark-color); }\n      div.time-container div.time p button.selected {\n        cursor: default; }\n", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/Time.scss"],"names":[],"mappings":"AAAA;EAEE,cAAc,EAAA;EAFhB;IAKG,aAAa;IACb,mBAAmB;IACnB,eAAe;IAGf,uBAAuB,EAAA;IAV1B;MAeI,YAAY;MACZ,cAAc;MAEd,iBAAiB;MACjB,WAAW;MACX,kBAAkB;MAClB,yBAAyB,EAAA;MArB7B;QAyBK,+BAA+B;QAC/B,wBAAwB,EAAA;MA1B7B;QA8BK,eAAe,EAAA","file":"Time.scss","sourcesContent":["div.time-container {\r\n div.time {\r\n  padding: 0 2vw;\r\n\r\n  p {\r\n   display: flex;\r\n   flex-direction: row;\r\n   flex-wrap: wrap;\r\n   // align-content: center;\r\n   // align-items: center;\r\n   justify-content: center;\r\n\r\n   button {\r\n    // height: 100%;\r\n    // width: 100%;\r\n    flex-grow: 0;\r\n    flex-shrink: 0;\r\n    // height: 3rem;\r\n    line-height: 3rem;\r\n    width: 5rem;\r\n    text-align: center;\r\n    border-color: transparent;\r\n\r\n    &:hover,\r\n    &.selected {\r\n     border-color: var(--dark-color);\r\n     color: var(--dark-color);\r\n    }\r\n\r\n    &.selected {\r\n     cursor: default;\r\n    }\r\n   }\r\n  }\r\n }\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Week.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/Week.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "div.week-container {\n  position: relative; }\n  div.week-container table {\n    text-align: center;\n    margin: auto; }\n    div.week-container table tr:nth-child(3) th {\n      padding: 0.5rem;\n      font-size: 1.3rem; }\n    div.week-container table tr th {\n      padding: 0.25rem;\n      font-weight: normal;\n      font-size: 1.5rem; }\n    div.week-container table tr td {\n      width: 4rem;\n      height: 3rem;\n      font-size: 1.6rem; }\n      div.week-container table tr td span {\n        color: #bbb; }\n      div.week-container table tr td button {\n        height: 100%;\n        width: 100%;\n        border-color: transparent; }\n        div.week-container table tr td button:hover, div.week-container table tr td button.selected {\n          border-color: var(--dark-color);\n          color: var(--dark-color); }\n        div.week-container table tr td button.selected {\n          cursor: default; }\n  div.week-container div.hint {\n    position: absolute;\n    bottom: -3rem; }\n    div.week-container div.hint.before {\n      left: 0;\n      text-align: left; }\n    div.week-container div.hint.after {\n      right: 0;\n      text-align: right; }\n    div.week-container div.hint p {\n      font-size: 1.25rem; }\n\n/* HINT TRANSITION */\n/* \\/ */\n.hint-transition-enter {\n  opacity: 0; }\n\n.hint-transition-enter-active {\n  opacity: 1; }\n\n.hint-transition-exit {\n  opacity: 1; }\n\n.hint-transition-exit-active {\n  opacity: 0; }\n\n.hint-transition-enter-active,\n.hint-transition-exit-active {\n  transition: 250ms ease-out; }\n\n/* /\\ */\n/* HINT TRANSITION */\n", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/Week.scss"],"names":[],"mappings":"AAAA;EAEC,kBAAkB,EAAA;EAFnB;IAKE,kBAAkB;IAClB,YAAY,EAAA;IANd;MAWK,eAAe;MACf,iBAAiB,EAAA;IAZtB;MAiBI,gBAAgB;MAChB,mBAAmB;MACnB,iBAAiB,EAAA;IAnBrB;MAuBI,WAAW;MACX,YAAY;MACZ,iBAAiB,EAAA;MAzBrB;QA4BK,WAAW,EAAA;MA5BhB;QAgCK,YAAY;QACZ,WAAW;QACX,yBAAyB,EAAA;QAlC9B;UAsCM,+BAA+B;UAC/B,wBAAwB,EAAA;QAvC9B;UA2CM,eAAe,EAAA;EA3CrB;IAmDE,kBAAkB;IAClB,aAAa,EAAA;IApDf;MAwDG,OAAO;MACP,gBAAgB,EAAA;IAzDnB;MA6DG,QAAQ;MACR,iBAAiB,EAAA;IA9DpB;MAkEG,kBAAkB,EAAA;;AAQrB,oBAAA;AACA,OAAA;AACA;EAEC,UAAU,EAAA;;AAGX;EAEC,UAAU,EAAA;;AAGX;EAEC,UAAU,EAAA;;AAGX;EAEC,UAAU,EAAA;;AAGX;;EAEC,0BAA0B,EAAA;;AAG3B,OAAA;AACA,oBAAA","file":"Week.scss","sourcesContent":["div.week-container {\r\n // margin-bottom: 1rem;\r\n position: relative;\r\n\r\n table {\r\n  text-align: center;\r\n  margin: auto;\r\n\r\n  tr {\r\n   &:nth-child(3) {\r\n    th {\r\n     padding: 0.5rem;\r\n     font-size: 1.3rem;\r\n    }\r\n   }\r\n\r\n   th {\r\n    padding: 0.25rem;\r\n    font-weight: normal;\r\n    font-size: 1.5rem;\r\n   }\r\n\r\n   td {\r\n    width: 4rem;\r\n    height: 3rem;\r\n    font-size: 1.6rem;\r\n\r\n    span {\r\n     color: #bbb;\r\n    }\r\n\r\n    button {\r\n     height: 100%;\r\n     width: 100%;\r\n     border-color: transparent;\r\n\r\n     &:hover,\r\n     &.selected {\r\n      border-color: var(--dark-color);\r\n      color: var(--dark-color);\r\n     }\r\n\r\n     &.selected {\r\n      cursor: default;\r\n     }\r\n    }\r\n   }\r\n  }\r\n }\r\n\r\n div.hint {\r\n  position: absolute;\r\n  bottom: -3rem;\r\n  // width: 50%;\r\n\r\n  &.before {\r\n   left: 0;\r\n   text-align: left;\r\n  }\r\n\r\n  &.after {\r\n   right: 0;\r\n   text-align: right;\r\n  }\r\n\r\n  p {\r\n   font-size: 1.25rem;\r\n   // font-weight: 100;\r\n   // font-style: italic;\r\n  }\r\n }\r\n\r\n}\r\n\r\n/* HINT TRANSITION */\r\n/* \\/ */\r\n.hint-transition-enter {\r\n // transform: translateX(100%);\r\n opacity: 0;\r\n}\r\n\r\n.hint-transition-enter-active {\r\n // transform: translateX(0);\r\n opacity: 1;\r\n}\r\n\r\n.hint-transition-exit {\r\n // transform: translateX(0);\r\n opacity: 1;\r\n}\r\n\r\n.hint-transition-exit-active {\r\n // transform: translateX(100%);\r\n opacity: 0;\r\n}\r\n\r\n.hint-transition-enter-active,\r\n.hint-transition-exit-active {\r\n transition: 250ms ease-out;\r\n}\r\n\r\n/* /\\ */\r\n/* HINT TRANSITION */"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/about.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/about.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "section.about-full {\n  padding-top: calc(var(--header-height) + 0rem);\n  padding-bottom: 4rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  background-color: var(--bg-color); }\n  section.about-full hr {\n    width: 20vw;\n    text-align: left;\n    border: 1px solid var(--hr-color); }\n  section.about-full h3 {\n    margin: 1.5rem 0; }\n  section.about-full div.about-wrap {\n    margin: 1.5rem 0; }\n    section.about-full div.about-wrap div.text-container p {\n      line-height: 2rem;\n      margin-bottom: 2rem; }\n    section.about-full div.about-wrap div.img-container {\n      margin: 0 3rem; }\n      section.about-full div.about-wrap div.img-container img {\n        width: 100%;\n        border: 1px solid var(--dark-color); }\n      section.about-full div.about-wrap div.img-container p {\n        font-size: 1.3rem;\n        margin-top: 1rem;\n        text-align: center; }\n\nsection.see-also {\n  margin: 2rem; }\n  section.see-also h3 {\n    text-align: center;\n    margin: 3rem 0rem; }\n  section.see-also div.button-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n  section.see-also a.button-typ {\n    margin-bottom: 2rem;\n    width: 30rem; }\n\n@media (min-width: 1024px) {\n  section.about-full {\n    padding-left: var(--margin-side);\n    padding-right: var(--margin-side); }\n    section.about-full h3 {\n      margin: 4rem 0; }\n    section.about-full hr {\n      width: 10vw; }\n    section.about-full div.about-wrap {\n      display: flex;\n      flex-direction: row;\n      margin-top: 4rem; }\n      section.about-full div.about-wrap div.text-container {\n        flex-shrink: 1;\n        flex-grow: 1;\n        margin: 0; }\n        section.about-full div.about-wrap div.text-container p {\n          line-height: 2.5rem;\n          margin-bottom: 3rem; }\n      section.about-full div.about-wrap div.img-container {\n        width: 30%;\n        flex-shrink: 0;\n        flex-grow: 0;\n        margin: 0;\n        margin-left: var(--margin-side); }\n  section.see-also div.button-container {\n    flex-direction: row;\n    justify-content: center; }\n    section.see-also div.button-container a.button-typ {\n      margin: 2rem;\n      width: 30rem; } }\n", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/about.scss"],"names":[],"mappings":"AAAA;EACC,8CAA8C;EAC9C,oBAAoB;EACpB,oBAAoB;EACpB,qBAAqB;EACrB,iCAAiC,EAAA;EALlC;IAQE,WAAW;IACX,gBAAgB;IAChB,iCAAiC,EAAA;EAVnC;IAcE,gBAAgB,EAAA;EAdlB;IAkBE,gBAAgB,EAAA;IAlBlB;MAsBI,iBAAiB;MACjB,mBAAmB,EAAA;IAvBvB;MA4BG,cAAc,EAAA;MA5BjB;QA+BI,WAAW;QACX,mCAAmC,EAAA;MAhCvC;QAoCI,iBAAiB;QACjB,gBAAgB;QAChB,kBAAkB,EAAA;;AAMtB;EACC,YAAY,EAAA;EADb;IAIE,kBAAkB;IAClB,iBAAiB,EAAA;EALnB;IASE,aAAa;IACb,sBAAsB;IACtB,mBAAmB,EAAA;EAXrB;IAeE,mBAAmB;IACnB,YAAY,EAAA;;AAId;EACC;IACC,gCAAgC;IAChC,iCAAiC,EAAA;IAFlC;MAKE,cAAc,EAAA;IALhB;MASE,WAAW,EAAA;IATb;MAaE,aAAa;MACb,mBAAmB;MACnB,gBAAgB,EAAA;MAflB;QAkBG,cAAc;QACd,YAAY;QACZ,SAAS,EAAA;QApBZ;UAuBI,mBAAmB;UACnB,mBAAmB,EAAA;MAxBvB;QA6BG,UAAU;QACV,cAAc;QACd,YAAY;QACZ,SAAS;QACT,+BAA+B,EAAA;EAMlC;IAEE,mBAAmB;IACnB,uBAAuB,EAAA;IAHzB;MAMG,YAAY;MACZ,YAAY,EAAA,EACZ","file":"about.scss","sourcesContent":["section.about-full {\r\n padding-top: calc(var(--header-height) + 0rem);\r\n padding-bottom: 4rem;\r\n padding-left: 1.5rem;\r\n padding-right: 1.5rem;\r\n background-color: var(--bg-color);\r\n\r\n hr {\r\n  width: 20vw;\r\n  text-align: left;\r\n  border: 1px solid var(--hr-color);\r\n }\r\n\r\n h3 {\r\n  margin: 1.5rem 0;\r\n }\r\n\r\n div.about-wrap {\r\n  margin: 1.5rem 0;\r\n\r\n  div.text-container {\r\n   p {\r\n    line-height: 2rem;\r\n    margin-bottom: 2rem;\r\n   }\r\n  }\r\n\r\n  div.img-container {\r\n   margin: 0 3rem;\r\n\r\n   img {\r\n    width: 100%;\r\n    border: 1px solid var(--dark-color);\r\n   }\r\n\r\n   p {\r\n    font-size: 1.3rem;\r\n    margin-top: 1rem;\r\n    text-align: center;\r\n   }\r\n  }\r\n }\r\n}\r\n\r\nsection.see-also {\r\n margin: 2rem;\r\n\r\n h3 {\r\n  text-align: center;\r\n  margin: 3rem 0rem;\r\n }\r\n\r\n div.button-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n }\r\n\r\n a.button-typ {\r\n  margin-bottom: 2rem;\r\n  width: 30rem;\r\n }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n section.about-full {\r\n  padding-left: var(--margin-side);\r\n  padding-right: var(--margin-side);\r\n\r\n  h3 {\r\n   margin: 4rem 0;\r\n  }\r\n\r\n  hr {\r\n   width: 10vw;\r\n  }\r\n\r\n  div.about-wrap {\r\n   display: flex;\r\n   flex-direction: row;\r\n   margin-top: 4rem;\r\n\r\n   div.text-container {\r\n    flex-shrink: 1;\r\n    flex-grow: 1;\r\n    margin: 0;\r\n\r\n    p {\r\n     line-height: 2.5rem;\r\n     margin-bottom: 3rem;\r\n    }\r\n   }\r\n\r\n   div.img-container {\r\n    width: 30%;\r\n    flex-shrink: 0;\r\n    flex-grow: 0;\r\n    margin: 0;\r\n    margin-left: var(--margin-side);\r\n\r\n   }\r\n  }\r\n }\r\n\r\n section.see-also {\r\n  div.button-container {\r\n   flex-direction: row;\r\n   justify-content: center;\r\n\r\n   a.button-typ {\r\n    margin: 2rem;\r\n    width: 30rem;\r\n   }\r\n  }\r\n }\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/global.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/global.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports

exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;1,400;1,500&family=Quicksand:wght@300;400;500;600&display=swap);"]);
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\n:root {\n  --header-height: 55px;\n  --dark-color: #2d3130;\n  --bg-color: #d5e1df;\n  --shadow-color: #e2eeec;\n  --shadow-light-color: #effffc;\n  --hr-color: #a3b8b4;\n  font-size: 9px; }\n\n@media (min-width: 360px) and (min-height: 360px) {\n  :root {\n    --header-height: 65px;\n    font-size: 10px; } }\n\n@media (min-width: 1024px) {\n  :root {\n    font-size: 9px;\n    --margin-side: 4vw; } }\n\n@media (min-width: 1440px) {\n  :root {\n    font-size: 11px;\n    --margin-side: 8vw; } }\n\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: var(--dark-color);\n  min-height: 100vh;\n  overflow-y: scroll; }\n  body h1 {\n    font-family: \"Quicksand\", sans-serif;\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 2rem;\n    font-weight: 400; }\n  body h2 {\n    font-family: \"Quicksand\", sans-serif;\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 1.5rem;\n    font-weight: 400; }\n  body h3 {\n    font-family: \"Quicksand\", sans-serif;\n    font-size: 1.7rem;\n    font-weight: 400; }\n  body h4 {\n    font-family: \"Quicksand\", sans-serif;\n    text-transform: uppercase;\n    font-size: 1.4rem;\n    font-weight: 500; }\n  body h5 {\n    font-family: \"Quicksand\", sans-serif;\n    text-align: center;\n    text-transform: uppercase;\n    font-size: 1.35rem;\n    line-height: 2rem;\n    font-weight: 400; }\n  body p {\n    font-size: 1.4rem; }\n  body ul {\n    font-size: 1.4rem; }\n  body table {\n    font-size: 1.4rem; }\n  body [type=\"button\"],\n  body a {\n    transition: ease-in-out 150ms; }\n    body [type=\"button\"]:focus, body [type=\"button\"]:hover,\n    body a:focus,\n    body a:hover {\n      outline: none;\n      color: #000;\n      text-shadow: 0 0 0.25px #000; }\n      body [type=\"button\"]:focus.inactive, body [type=\"button\"]:hover.inactive,\n      body a:focus.inactive,\n      body a:hover.inactive {\n        text-shadow: none; }\n", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/global.scss"],"names":[],"mappings":"AAEA;EACC,SAAS;EACT,UAAU,EAAA;;AAGX;EACC,qBAAgB;EAChB,qBAAa;EACb,mBAAW;EACX,uBAAe;EACf,6BAAqB;EACrB,mBAAW;EACX,cAAc,EAAA;;AAGf;EACC;IACC,qBAAgB;IAChB,eAAe,EAAA,EACf;;AAGF;EACC;IACC,cAAc;IACd,kBAAc,EAAA,EACd;;AAGF;EACC;IACC,eAAe;IACf,kBAAc,EAAA,EACd;;AAGF;EACC,qCAAqC;EACrC,mCAAmC;EACnC,kCAAkC;EAClC,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB,EAAA;EANnB;IAUE,oCAAoC;IACpC,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;IACf,gBAAgB,EAAA;EAdlB;IAkBE,oCAAoC;IACpC,kBAAkB;IAClB,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB,EAAA;EAtBlB;IA0BE,oCAAoC;IACpC,iBAAiB;IACjB,gBAAgB,EAAA;EA5BlB;IAgCE,oCAAoC;IACpC,yBAAyB;IACzB,iBAAiB;IACjB,gBAAgB,EAAA;EAnClB;IAuCE,oCAAoC;IACpC,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB,EAAA;EA5ClB;IAgDE,iBAAiB,EAAA;EAhDnB;IAoDE,iBAAiB,EAAA;EApDnB;IAwDE,iBAAiB,EAAA;EAxDnB;;IA6DE,6BAA6B,EAAA;IA7D/B;;;MAiEG,aAAa;MACb,WAAW;MACX,4BAA4B,EAAA;MAnE/B;;;QAsEI,iBAAiB,EAAA","file":"global.scss","sourcesContent":["@import url(https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;1,400;1,500&family=Quicksand:wght@300;400;500;600&display=swap);\r\n\r\n* {\r\n margin: 0;\r\n padding: 0;\r\n}\r\n\r\n:root {\r\n --header-height: 55px;\r\n --dark-color: #2d3130;\r\n --bg-color: #d5e1df;\r\n --shadow-color: #e2eeec;\r\n --shadow-light-color: #effffc;\r\n --hr-color: #a3b8b4;\r\n font-size: 9px;\r\n}\r\n\r\n@media (min-width: 360px) and (min-height: 360px) {\r\n :root {\r\n  --header-height: 65px;\r\n  font-size: 10px;\r\n }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n :root {\r\n  font-size: 9px;\r\n  --margin-side: 4vw;\r\n }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n :root {\r\n  font-size: 11px;\r\n  --margin-side: 8vw;\r\n }\r\n}\r\n\r\nbody {\r\n font-family: \"Montserrat\", sans-serif;\r\n -webkit-font-smoothing: antialiased;\r\n -moz-osx-font-smoothing: grayscale;\r\n color: var(--dark-color);\r\n min-height: 100vh;\r\n overflow-y: scroll;\r\n // position: relative;\r\n\r\n h1 {\r\n  font-family: \"Quicksand\", sans-serif;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-size: 2rem;\r\n  font-weight: 400;\r\n }\r\n\r\n h2 {\r\n  font-family: \"Quicksand\", sans-serif;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-size: 1.5rem;\r\n  font-weight: 400;\r\n }\r\n\r\n h3 {\r\n  font-family: \"Quicksand\", sans-serif;\r\n  font-size: 1.7rem;\r\n  font-weight: 400;\r\n }\r\n\r\n h4 {\r\n  font-family: \"Quicksand\", sans-serif;\r\n  text-transform: uppercase;\r\n  font-size: 1.4rem;\r\n  font-weight: 500;\r\n }\r\n\r\n h5 {\r\n  font-family: \"Quicksand\", sans-serif;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-size: 1.35rem;\r\n  line-height: 2rem;\r\n  font-weight: 400;\r\n }\r\n\r\n p {\r\n  font-size: 1.4rem;\r\n }\r\n\r\n ul {\r\n  font-size: 1.4rem;\r\n }\r\n\r\n table {\r\n  font-size: 1.4rem;\r\n }\r\n\r\n [type=\"button\"],\r\n a {\r\n  transition: ease-in-out 150ms;\r\n\r\n  &:focus,\r\n  &:hover {\r\n   outline: none;\r\n   color: #000;\r\n   text-shadow: 0 0 0.25px #000;\r\n\r\n   &.inactive {\r\n    text-shadow: none;\r\n   }\r\n\r\n   // box-shadow: -0.25px 0.25px 1px var(--shadow-color),\r\n   //  0.25px -0.25px 1px var(--shadow-color),\r\n   //  0.25px -0.25px 1px var(--shadow-color) inset,\r\n   //  -0.25px 0.25px 1px var(--shadow-color) inset;\r\n  }\r\n }\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/index.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/index.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "div.img-container img {\n  display: block;\n  width: 100%; }\n\nsection.home {\n  display: flex;\n  flex-direction: column;\n  padding-top: var(--header-height); }\n  section.home div.portrait-container {\n    width: 100%;\n    overflow: hidden;\n    background-color: #dde2e5;\n    font-size: 0; }\n    section.home div.portrait-container img {\n      width: 40%;\n      margin: 5% auto 0 45%; }\n  section.home div.text-container {\n    margin: 10% 2rem; }\n    section.home div.text-container p {\n      margin-bottom: 2rem;\n      line-height: 2rem;\n      letter-spacing: 0.07em; }\n    section.home div.text-container .button-typ {\n      float: right; }\n\nsection.about {\n  display: flex;\n  flex-direction: column;\n  padding-top: calc(var(--header-height) * 0.7);\n  padding-bottom: calc(var(--header-height) * 0.7);\n  background-color: var(--bg-color); }\n  section.about p {\n    line-height: 2.2rem;\n    margin: 0 2rem 2rem; }\n  section.about .button-typ {\n    align-self: center; }\n\n@media (min-width: 533px) {\n  section.home {\n    display: flex;\n    flex-direction: row; }\n    section.home div.portrait-container {\n      position: relative;\n      width: 50%;\n      height: 50vh; }\n      section.home div.portrait-container img {\n        position: absolute;\n        bottom: 0;\n        right: 15%;\n        height: 90%;\n        width: auto;\n        margin: 0; }\n    section.home div.text-container {\n      position: relative;\n      width: 50%;\n      flex-shrink: 0;\n      margin: 0;\n      padding: 0; }\n      section.home div.text-container p {\n        position: absolute;\n        bottom: 10%;\n        left: 10%;\n        margin: 0;\n        line-height: 2.2rem;\n        letter-spacing: 0.05em; } }\n\n@media (min-width: 1024px) {\n  div.first-view-wrap {\n    display: flex;\n    flex-direction: column;\n    height: 100vh; }\n    div.first-view-wrap section.home {\n      display: flex;\n      flex-direction: row;\n      flex-grow: 1;\n      flex-shrink: 1; }\n      div.first-view-wrap section.home div.portrait-container {\n        position: relative;\n        width: 50%;\n        height: auto;\n        flex-shrink: 0; }\n        div.first-view-wrap section.home div.portrait-container img {\n          position: absolute;\n          bottom: 0;\n          right: 15%;\n          height: 90%;\n          width: auto;\n          margin: 0; }\n      div.first-view-wrap section.home div.text-container {\n        position: relative;\n        width: 50%;\n        flex-shrink: 0;\n        margin: 0;\n        padding: 0; }\n        div.first-view-wrap section.home div.text-container p {\n          position: absolute;\n          bottom: 10%;\n          left: 10%;\n          margin: 0;\n          line-height: 2.2rem;\n          letter-spacing: 0.05em; }\n    div.first-view-wrap section.about {\n      display: block;\n      padding-top: calc(var(--header-height) * 0.5);\n      padding-bottom: calc(var(--header-height) * 0.5);\n      padding-left: var(--margin-side);\n      padding-right: var(--margin-side); }\n      div.first-view-wrap section.about p {\n        margin-left: 0;\n        margin-right: 0; }\n      div.first-view-wrap section.about .button-typ {\n        float: right;\n        margin-right: 15vw; } }\n\nsection.services h1 {\n  margin-top: calc(var(--header-height) + 0.5rem);\n  margin-bottom: calc(0.5 * var(--header-height) + 1rem); }\n\nsection.services div.service {\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: center;\n  margin: 4rem 0; }\n  section.services div.service div.img-container {\n    width: 70vw;\n    height: 45vw;\n    overflow: hidden; }\n  section.services div.service p {\n    margin: 1.5rem 2rem;\n    line-height: 2rem; }\n\nsection.services hr {\n  margin: 0 40vw;\n  unicode-bidi: isolate;\n  border: 1px solid var(--hr-color); }\n\n@media (min-width: 1024px) {\n  section.services {\n    --base-size: 8vw;\n    margin-bottom: calc(1 * var(--header-height)); }\n    section.services div.service {\n      position: relative;\n      display: flex;\n      flex-direction: row;\n      flex-wrap: wrap;\n      height: 16vw;\n      justify-content: space-between;\n      margin: calc(0.5 * var(--header-height) + 1rem) var(--margin-side); }\n      section.services div.service:nth-of-type(even) {\n        flex-direction: row-reverse; }\n      section.services div.service div.img-container {\n        width: calc(3 * var(--base-size));\n        height: calc(2 * var(--base-size));\n        overflow: hidden; }\n      section.services div.service div.text-container {\n        width: calc(100% - 3 * var(--base-size) - 0.5 * var(--margin-side));\n        height: calc(2 * var(--base-size));\n        overflow: hidden; }\n        section.services div.service div.text-container p {\n          width: auto;\n          margin: 0;\n          margin-bottom: 1rem; }\n        section.services div.service div.text-container ul {\n          list-style-type: none; }\n          section.services div.service div.text-container ul li {\n            position: relative;\n            line-height: 1.8rem;\n            margin: 1rem 0 0 1rem; }\n            section.services div.service div.text-container ul li:last-of-type {\n              margin-bottom: 0; }\n            section.services div.service div.text-container ul li:before {\n              position: absolute;\n              left: -1rem;\n              content: \"-\"; }\n      section.services div.service .button-typ {\n        position: absolute;\n        bottom: 0;\n        left: 50%;\n        transform: translateX(-50%); }\n    section.services hr {\n      margin: 0 47vw; } }\n\nsection.contact {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--bg-color); }\n  section.contact h1 {\n    margin-top: calc(var(--header-height) + 0.5rem);\n    margin-bottom: calc(0.5 * var(--header-height) + 1rem);\n    letter-spacing: 0.2rem; }\n  section.contact div.contact-wrap {\n    display: flex;\n    flex-direction: column; }\n    section.contact div.contact-wrap div.img-container {\n      width: 100%;\n      overflow: hidden; }\n    section.contact div.contact-wrap div.text-container {\n      align-self: center;\n      margin: 2rem; }\n      section.contact div.contact-wrap div.text-container table {\n        border-collapse: collapse; }\n        section.contact div.contact-wrap div.text-container table tr td {\n          margin: 1rem 0; }\n          section.contact div.contact-wrap div.text-container table tr td:first-child {\n            text-align: center; }\n          section.contact div.contact-wrap div.text-container table tr td:last-child {\n            display: flex;\n            flex-direction: row;\n            flex-wrap: wrap;\n            align-items: center;\n            align-content: center; }\n            section.contact div.contact-wrap div.text-container table tr td:last-child p {\n              flex-grow: 0;\n              flex-shrink: 0;\n              margin-right: 0.5rem; }\n          section.contact div.contact-wrap div.text-container table tr td i {\n            font-size: 2.2rem;\n            padding-right: 1.5rem; }\n          section.contact div.contact-wrap div.text-container table tr td a {\n            color: inherit; }\n    section.contact div.contact-wrap .button-typ {\n      margin: 2rem auto; }\n    section.contact div.contact-wrap div.map-container {\n      width: 100%;\n      height: 90vw; }\n\n@media (min-width: 1024px) {\n  section.contact div.contact-wrap {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin: 0 var(--margin-side) calc(var(--header-height) + 0.5rem); }\n    section.contact div.contact-wrap div.img-container {\n      width: 49%;\n      flex-shrink: 0;\n      flex-grow: 0;\n      margin-top: 1rem; }\n    section.contact div.contact-wrap div.details-wrap {\n      width: 49%;\n      display: flex;\n      flex-direction: column; }\n      section.contact div.contact-wrap div.details-wrap div.text-container {\n        margin: 0;\n        flex-grow: 0;\n        flex-shrink: 0;\n        align-self: flex-start; }\n      section.contact div.contact-wrap div.details-wrap .button-typ {\n        margin: 0.5rem auto 1rem; }\n      section.contact div.contact-wrap div.details-wrap div.map-container {\n        height: auto;\n        flex-grow: 1;\n        flex-shrink: 1; } }\n", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/index.scss"],"names":[],"mappings":"AAAA;EACC,cAAc;EACd,WAAW,EAAA;;AAGZ;EACC,aAAa;EACb,sBAAsB;EACtB,iCAAiC,EAAA;EAHlC;IAME,WAAW;IACX,gBAAgB;IAChB,yBAAyB;IACzB,YAAY,EAAA;IATd;MAYG,UAAU;MACV,qBAAqB,EAAA;EAbxB;IAkBE,gBAAgB,EAAA;IAlBlB;MAqBG,mBAAmB;MACnB,iBAAiB;MACjB,sBAAsB,EAAA;IAvBzB;MA2BG,YAAY,EAAA;;AAKf;EACC,aAAa;EACb,sBAAsB;EACtB,6CAA6C;EAC7C,gDAAgD;EAChD,iCAAiC,EAAA;EALlC;IAQE,mBAAmB;IACnB,mBAAmB,EAAA;EATrB;IAaE,kBAAkB,EAAA;;AAIpB;EACC;IACC,aAAa;IACb,mBAAmB,EAAA;IAFpB;MAKE,kBAAkB;MAClB,UAAU;MACV,YAAY,EAAA;MAPd;QAUG,kBAAkB;QAClB,SAAS;QACT,UAAU;QACV,WAAW;QACX,WAAW;QACX,SAAS,EAAA;IAfZ;MAoBE,kBAAkB;MAClB,UAAU;MACV,cAAc;MACd,SAAS;MACT,UAAU,EAAA;MAxBZ;QA2BG,kBAAkB;QAClB,WAAW;QACX,SAAS;QACT,SAAS;QACT,mBAAmB;QACnB,sBAAsB,EAAA,EACtB;;AAKJ;EACC;IACC,aAAa;IACb,sBAAsB;IACtB,aAAa,EAAA;IAHd;MAME,aAAa;MACb,mBAAmB;MACnB,YAAY;MACZ,cAAc,EAAA;MAThB;QAYG,kBAAkB;QAClB,UAAU;QACV,YAAY;QACZ,cAAc,EAAA;QAfjB;UAkBI,kBAAkB;UAClB,SAAS;UACT,UAAU;UACV,WAAW;UACX,WAAW;UACX,SAAS,EAAA;MAvBb;QA4BG,kBAAkB;QAClB,UAAU;QACV,cAAc;QACd,SAAS;QACT,UAAU,EAAA;QAhCb;UAmCI,kBAAkB;UAClB,WAAW;UACX,SAAS;UACT,SAAS;UACT,mBAAmB;UACnB,sBAAsB,EAAA;IAxC1B;MA8CE,cAAc;MACd,6CAA6C;MAC7C,gDAAgD;MAChD,gCAAgC;MAChC,iCAAiC,EAAA;MAlDnC;QAqDG,cAAc;QACd,eAAe,EAAA;MAtDlB;QA0DG,YAAY;QACZ,kBAAkB,EAAA,EAClB;;AAKJ;EAEE,+CAA+C;EAC/C,sDAAsD,EAAA;;AAHxD;EAOE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;EACnB,cAAc,EAAA;EAXhB;IAcG,WAAW;IACX,YAAY;IACZ,gBAAgB,EAAA;EAhBnB;IAoBG,mBAAmB;IACnB,iBAAiB,EAAA;;AArBpB;EA0BE,cAAc;EACd,qBAAqB;EACrB,iCAAiC,EAAA;;AAInC;EACC;IACC,gBAAY;IACZ,6CAA6C,EAAA;IAF9C;MAKE,kBAAkB;MAClB,aAAa;MACb,mBAAmB;MACnB,eAAe;MACf,YAAY;MACZ,8BAA8B;MAC9B,kEAAkE,EAAA;MAXpE;QAcG,2BAA2B,EAAA;MAd9B;QAkBG,iCAAiC;QACjC,kCAAkC;QAClC,gBAAgB,EAAA;MApBnB;QAwBG,mEAAmE;QACnE,kCAAkC;QAElC,gBAAgB,EAAA;QA3BnB;UA8BI,WAAW;UACX,SAAS;UACT,mBAAmB,EAAA;QAhCvB;UAoCI,qBAAqB,EAAA;UApCzB;YAuCK,kBAAkB;YAClB,mBAAmB;YACnB,qBAAqB,EAAA;YAzC1B;cA4CM,gBAAgB,EAAA;YA5CtB;cAgDM,kBAAkB;cAClB,WAAW;cACX,YAAY,EAAA;MAlDlB;QAyDG,kBAAkB;QAClB,SAAS;QACT,SAAS;QACT,2BAA2B,EAAA;IA5D9B;MAiEE,cAAc,EAAA,EACd;;AAKH;EACC,aAAa;EACb,sBAAsB;EACtB,iCAAiC,EAAA;EAHlC;IAME,+CAA+C;IAC/C,sDAAsD;IACtD,sBAAsB,EAAA;EARxB;IAYE,aAAa;IACb,sBAAsB,EAAA;IAbxB;MAkBG,WAAW;MACX,gBAAgB,EAAA;IAnBnB;MAuBG,kBAAkB;MAClB,YAAY,EAAA;MAxBf;QA2BI,yBAAyB,EAAA;QA3B7B;UAiCM,cAAc,EAAA;UAjCpB;YAoCO,kBAAkB,EAAA;UApCzB;YAwCO,aAAa;YACb,mBAAmB;YACnB,eAAe;YACf,mBAAmB;YACnB,qBAAqB,EAAA;YA5C5B;cA+CQ,YAAY;cACZ,cAAc;cACd,oBAAoB,EAAA;UAjD5B;YAsDO,iBAAiB;YACjB,qBAAqB,EAAA;UAvD5B;YA2DO,cAAc,EAAA;IA3DrB;MAmEG,iBAAiB,EAAA;IAnEpB;MAuEG,WAAW;MACX,YAAY,EAAA;;AAKf;EACC;IAEE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gEAAgE,EAAA;IALlE;MAQG,UAAU;MACV,cAAc;MACd,YAAY;MACZ,gBAAgB,EAAA;IAXnB;MAeG,UAAU;MACV,aAAa;MACb,sBAAsB,EAAA;MAjBzB;QAoBI,SAAS;QACT,YAAY;QACZ,cAAc;QACd,sBAAsB,EAAA;MAvB1B;QA2BI,wBAAwB,EAAA;MA3B5B;QA+BI,YAAY;QACZ,YAAY;QACZ,cAAc,EAAA,EACd","file":"index.scss","sourcesContent":["div.img-container img {\r\n display: block;\r\n width: 100%;\r\n}\r\n\r\nsection.home {\r\n display: flex;\r\n flex-direction: column;\r\n padding-top: var(--header-height);\r\n\r\n div.portrait-container {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  background-color: #dde2e5;\r\n  font-size: 0;\r\n\r\n  img {\r\n   width: 40%;\r\n   margin: 5% auto 0 45%;\r\n  }\r\n }\r\n\r\n div.text-container {\r\n  margin: 10% 2rem;\r\n\r\n  p {\r\n   margin-bottom: 2rem;\r\n   line-height: 2rem;\r\n   letter-spacing: 0.07em;\r\n  }\r\n\r\n  .button-typ {\r\n   float: right;\r\n  }\r\n }\r\n}\r\n\r\nsection.about {\r\n display: flex;\r\n flex-direction: column;\r\n padding-top: calc(var(--header-height) * 0.7);\r\n padding-bottom: calc(var(--header-height) * 0.7);\r\n background-color: var(--bg-color);\r\n\r\n p {\r\n  line-height: 2.2rem;\r\n  margin: 0 2rem 2rem;\r\n }\r\n\r\n .button-typ {\r\n  align-self: center;\r\n }\r\n}\r\n\r\n@media (min-width: 533px) {\r\n section.home {\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n  div.portrait-container {\r\n   position: relative;\r\n   width: 50%;\r\n   height: 50vh;\r\n\r\n   img {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 15%;\r\n    height: 90%;\r\n    width: auto;\r\n    margin: 0;\r\n   }\r\n  }\r\n\r\n  div.text-container {\r\n   position: relative;\r\n   width: 50%;\r\n   flex-shrink: 0;\r\n   margin: 0;\r\n   padding: 0;\r\n\r\n   p {\r\n    position: absolute;\r\n    bottom: 10%;\r\n    left: 10%;\r\n    margin: 0;\r\n    line-height: 2.2rem;\r\n    letter-spacing: 0.05em;\r\n   }\r\n  }\r\n }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n div.first-view-wrap {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n\r\n  section.home {\r\n   display: flex;\r\n   flex-direction: row;\r\n   flex-grow: 1;\r\n   flex-shrink: 1;\r\n\r\n   div.portrait-container {\r\n    position: relative;\r\n    width: 50%;\r\n    height: auto;\r\n    flex-shrink: 0;\r\n\r\n    img {\r\n     position: absolute;\r\n     bottom: 0;\r\n     right: 15%;\r\n     height: 90%;\r\n     width: auto;\r\n     margin: 0;\r\n    }\r\n   }\r\n\r\n   div.text-container {\r\n    position: relative;\r\n    width: 50%;\r\n    flex-shrink: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    p {\r\n     position: absolute;\r\n     bottom: 10%;\r\n     left: 10%;\r\n     margin: 0;\r\n     line-height: 2.2rem;\r\n     letter-spacing: 0.05em;\r\n    }\r\n   }\r\n  }\r\n\r\n  section.about {\r\n   display: block;\r\n   padding-top: calc(var(--header-height) * 0.5);\r\n   padding-bottom: calc(var(--header-height) * 0.5);\r\n   padding-left: var(--margin-side);\r\n   padding-right: var(--margin-side);\r\n\r\n   p {\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n   }\r\n\r\n   .button-typ {\r\n    float: right;\r\n    margin-right: 15vw;\r\n   }\r\n  }\r\n }\r\n}\r\n\r\nsection.services {\r\n h1 {\r\n  margin-top: calc(var(--header-height) + 0.5rem);\r\n  margin-bottom: calc(0.5 * var(--header-height) + 1rem);\r\n }\r\n\r\n div.service {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-content: center;\r\n  align-items: center;\r\n  margin: 4rem 0;\r\n\r\n  div.img-container {\r\n   width: 70vw;\r\n   height: 45vw;\r\n   overflow: hidden;\r\n  }\r\n\r\n  p {\r\n   margin: 1.5rem 2rem;\r\n   line-height: 2rem;\r\n  }\r\n }\r\n\r\n hr {\r\n  margin: 0 40vw;\r\n  unicode-bidi: isolate;\r\n  border: 1px solid var(--hr-color);\r\n }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n section.services {\r\n  --base-size: 8vw;\r\n  margin-bottom: calc(1 * var(--header-height));\r\n\r\n  div.service {\r\n   position: relative;\r\n   display: flex;\r\n   flex-direction: row;\r\n   flex-wrap: wrap;\r\n   height: 16vw;\r\n   justify-content: space-between;\r\n   margin: calc(0.5 * var(--header-height) + 1rem) var(--margin-side);\r\n\r\n   &:nth-of-type(even) {\r\n    flex-direction: row-reverse;\r\n   }\r\n\r\n   div.img-container {\r\n    width: calc(3 * var(--base-size));\r\n    height: calc(2 * var(--base-size));\r\n    overflow: hidden;\r\n   }\r\n\r\n   div.text-container {\r\n    width: calc(100% - 3 * var(--base-size) - 0.5 * var(--margin-side));\r\n    height: calc(2 * var(--base-size));\r\n    // margin-left: 1rem;\r\n    overflow: hidden;\r\n\r\n    p {\r\n     width: auto;\r\n     margin: 0;\r\n     margin-bottom: 1rem;\r\n    }\r\n\r\n    ul {\r\n     list-style-type: none;\r\n\r\n     li {\r\n      position: relative;\r\n      line-height: 1.8rem;\r\n      margin: 1rem 0 0 1rem;\r\n\r\n      &:last-of-type {\r\n       margin-bottom: 0;\r\n      }\r\n\r\n      &:before {\r\n       position: absolute;\r\n       left: -1rem;\r\n       content: \"-\";\r\n      }\r\n     }\r\n    }\r\n   }\r\n\r\n   .button-typ {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n   }\r\n  }\r\n\r\n  hr {\r\n   margin: 0 47vw;\r\n  }\r\n\r\n }\r\n}\r\n\r\nsection.contact {\r\n display: flex;\r\n flex-direction: column;\r\n background-color: var(--bg-color);\r\n\r\n h1 {\r\n  margin-top: calc(var(--header-height) + 0.5rem);\r\n  margin-bottom: calc(0.5 * var(--header-height) + 1rem);\r\n  letter-spacing: 0.2rem;\r\n }\r\n\r\n div.contact-wrap {\r\n  display: flex;\r\n  flex-direction: column;\r\n  // align-items: center;\r\n  // align-content: center;\r\n\r\n  div.img-container {\r\n   width: 100%;\r\n   overflow: hidden;\r\n  }\r\n\r\n  div.text-container {\r\n   align-self: center;\r\n   margin: 2rem;\r\n\r\n   table {\r\n    border-collapse: collapse;\r\n\r\n    tr {\r\n     // height: 4rem;\r\n\r\n     td {\r\n      margin: 1rem 0;\r\n\r\n      &:first-child {\r\n       text-align: center;\r\n      }\r\n\r\n      &:last-child {\r\n       display: flex;\r\n       flex-direction: row;\r\n       flex-wrap: wrap;\r\n       align-items: center;\r\n       align-content: center;\r\n\r\n       p {\r\n        flex-grow: 0;\r\n        flex-shrink: 0;\r\n        margin-right: 0.5rem;\r\n       }\r\n      }\r\n\r\n      i {\r\n       font-size: 2.2rem;\r\n       padding-right: 1.5rem;\r\n      }\r\n\r\n      a {\r\n       color: inherit;\r\n      }\r\n     }\r\n    }\r\n   }\r\n  }\r\n\r\n  .button-typ {\r\n   margin: 2rem auto;\r\n  }\r\n\r\n  div.map-container {\r\n   width: 100%;\r\n   height: 90vw;\r\n  }\r\n }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n section.contact {\r\n  div.contact-wrap {\r\n   display: flex;\r\n   flex-direction: row;\r\n   justify-content: space-between;\r\n   margin: 0 var(--margin-side) calc(var(--header-height) + 0.5rem);\r\n\r\n   div.img-container {\r\n    width: 49%;\r\n    flex-shrink: 0;\r\n    flex-grow: 0;\r\n    margin-top: 1rem;\r\n   }\r\n\r\n   div.details-wrap {\r\n    width: 49%;\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    div.text-container {\r\n     margin: 0;\r\n     flex-grow: 0;\r\n     flex-shrink: 0;\r\n     align-self: flex-start;\r\n    }\r\n\r\n    .button-typ {\r\n     margin: 0.5rem auto 1rem;\r\n    }\r\n\r\n    div.map-container {\r\n     height: auto;\r\n     flex-grow: 1;\r\n     flex-shrink: 1;\r\n    }\r\n   }\r\n  }\r\n }\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/scheduler.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/scheduler.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "section.scheduler {\n  box-sizing: border-box;\n  min-height: calc(100vh - var(--header-height));\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: var(--header-height);\n  padding-bottom: 4rem; }\n  section.scheduler button {\n    border: 0.5px solid var(--dark-color);\n    border-radius: 1.1rem 0;\n    font-family: 'Montserrat', sans-serif;\n    font-weight: normal;\n    font-size: inherit;\n    text-decoration: none;\n    text-align: center;\n    color: inherit;\n    background-color: rgba(255, 255, 255, 0.6);\n    cursor: pointer; }\n  section.scheduler div.options-container {\n    width: 90vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    section.scheduler div.options-container > div {\n      margin-bottom: 3rem; }\n    section.scheduler div.options-container > p {\n      text-align: center;\n      margin: 2rem; }\n    section.scheduler div.options-container h2 {\n      margin: 2rem 0; }\n    section.scheduler div.options-container ul {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      list-style-type: none;\n      width: 100%; }\n      section.scheduler div.options-container ul li {\n        position: relative;\n        width: 100%;\n        min-height: 11rem; }\n        section.scheduler div.options-container ul li button {\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          display: block;\n          width: 100%;\n          transform: translate(-50%, -50%);\n          border-color: transparent;\n          font-size: 1.25rem;\n          padding: 0.5rem;\n          margin: auto; }\n          section.scheduler div.options-container ul li button:hover, section.scheduler div.options-container ul li button.selected {\n            border-color: var(--dark-color);\n            color: var(--dark-color); }\n          section.scheduler div.options-container ul li button.selected {\n            cursor: default; }\n          section.scheduler div.options-container ul li button div.details {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between; }\n    section.scheduler div.options-container div.summary-container {\n      text-align: center; }\n      section.scheduler div.options-container div.summary-container p {\n        margin-bottom: 1rem;\n        letter-spacing: 0.04rem; }\n        section.scheduler div.options-container div.summary-container p span {\n          font-style: italic; }\n    section.scheduler div.options-container div.loading [type=\"button\"] {\n      text-decoration: underline; }\n      section.scheduler div.options-container div.loading [type=\"button\"]:hover {\n        cursor: pointer; }\n\n@media (min-width: 533px) {\n  section.scheduler div.options-container {\n    width: 60vw; }\n    section.scheduler div.options-container ul li {\n      position: relative; } }\n\n@media (min-width: 1024px) {\n  section.scheduler div.options-container {\n    width: 30vw; }\n    section.scheduler div.options-container ul li {\n      position: relative; } }\n", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/scheduler.scss"],"names":[],"mappings":"AAAA;EACC,sBAAsB;EACtB,8CAA8C;EAC9C,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iCAAiC;EACjC,oBAAoB,EAAA;EAPrB;IAUE,qCAAqC;IACrC,uBAAuB;IACvB,qCAAqC;IACrC,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,cAAc;IAGd,0CAA0C;IAC1C,eAAe,EAAA;EArBjB;IA0BE,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB,EAAA;IA7BrB;MAiCI,mBAAmB,EAAA;IAjCvB;MAqCI,kBAAkB;MAClB,YAAY,EAAA;IAtChB;MA4CG,cAAc,EAAA;IA5CjB;MAgDG,aAAa;MACb,sBAAsB;MACtB,mBAAmB;MACnB,qBAAqB;MACrB,WAAW,EAAA;MApDd;QAuDI,kBAAkB;QAElB,WAAW;QACX,iBAAiB,EAAA;QA1DrB;UA6DK,kBAAkB;UAClB,QAAQ;UACR,SAAS;UACT,cAAc;UACd,WAAW;UACX,gCAAgC;UAChC,yBAAyB;UACzB,kBAAkB;UAClB,eAAe;UACf,YAAY,EAAA;UAtEjB;YA0EM,+BAA+B;YAC/B,wBAAwB,EAAA;UA3E9B;YA+EM,eAAe,EAAA;UA/ErB;YAmFM,aAAa;YACb,mBAAmB;YACnB,8BAA8B,EAAA;IArFpC;MA4FG,kBAAkB,EAAA;MA5FrB;QAgGI,mBAAmB;QACnB,uBAAuB,EAAA;QAjG3B;UAoGK,kBAAkB,EAAA;IApGvB;MA4GI,0BAA0B,EAAA;MA5G9B;QA+GK,eAAe,EAAA;;AAOpB;EACC;IAEE,WAAW,EAAA;IAFb;MAMI,kBAAkB,EAAA,EAClB;;AAML;EACC;IAEE,WAAW,EAAA;IAFb;MAMI,kBAAkB,EAAA,EAClB","file":"scheduler.scss","sourcesContent":["section.scheduler {\r\n box-sizing: border-box;\r\n min-height: calc(100vh - var(--header-height));\r\n display: flex;\r\n flex-direction: column;\r\n align-items: center;\r\n padding-top: var(--header-height);\r\n padding-bottom: 4rem;\r\n\r\n button {\r\n  border: 0.5px solid var(--dark-color);\r\n  border-radius: 1.1rem 0;\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-weight: normal;\r\n  font-size: inherit;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: inherit;\r\n  // padding: 0.5rem;\r\n  // margin: auto;\r\n  background-color: rgba(255, 255, 255, 0.6);\r\n  cursor: pointer;\r\n }\r\n\r\n div.options-container {\r\n  // width: 100%;\r\n  width: 90vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  &> {\r\n   div {\r\n    margin-bottom: 3rem;\r\n   }\r\n\r\n   p {\r\n    text-align: center;\r\n    margin: 2rem;\r\n   }\r\n  }\r\n\r\n\r\n  h2 {\r\n   margin: 2rem 0;\r\n  }\r\n\r\n  ul {\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n   list-style-type: none;\r\n   width: 100%;\r\n\r\n   li {\r\n    position: relative;\r\n    // width: 90vw;\r\n    width: 100%;\r\n    min-height: 11rem;\r\n\r\n    button {\r\n     position: absolute;\r\n     top: 50%;\r\n     left: 50%;\r\n     display: block;\r\n     width: 100%;\r\n     transform: translate(-50%, -50%);\r\n     border-color: transparent;\r\n     font-size: 1.25rem;\r\n     padding: 0.5rem;\r\n     margin: auto;\r\n\r\n     &:hover,\r\n     &.selected {\r\n      border-color: var(--dark-color);\r\n      color: var(--dark-color);\r\n     }\r\n\r\n     &.selected {\r\n      cursor: default;\r\n     }\r\n\r\n     div.details {\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n     }\r\n    }\r\n   }\r\n  }\r\n\r\n  div.summary-container {\r\n   text-align: center;\r\n\r\n   p {\r\n\r\n    margin-bottom: 1rem;\r\n    letter-spacing: 0.04rem;\r\n\r\n    span {\r\n     font-style: italic;\r\n     // font-weight: 500;\r\n    }\r\n   }\r\n  }\r\n\r\n  div.loading {\r\n   [type=\"button\"] {\r\n    text-decoration: underline;\r\n\r\n    &:hover {\r\n     cursor: pointer;\r\n    }\r\n   }\r\n  }\r\n }\r\n}\r\n\r\n@media (min-width: 533px) {\r\n section.scheduler {\r\n  div.options-container {\r\n   width: 60vw;\r\n\r\n   ul {\r\n    li {\r\n     position: relative;\r\n    }\r\n   }\r\n  }\r\n }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n section.scheduler {\r\n  div.options-container {\r\n   width: 30vw;\r\n\r\n   ul {\r\n    li {\r\n     position: relative;\r\n    }\r\n   }\r\n  }\r\n }\r\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/services.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./styles/services.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "section.services-full {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  section.services-full h2 {\n    margin-top: calc(var(--header-height) + 1rem); }\n  section.services-full div.button-container {\n    width: 70vw;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    margin: 2rem 0 3rem; }\n  section.services-full div.description-wrap {\n    display: flex;\n    flex-direction: column;\n    align-items: center; }\n    section.services-full div.description-wrap div.img-container {\n      width: 70vw; }\n      section.services-full div.description-wrap div.img-container.wide {\n        margin-top: calc(1 * var(--header-height));\n        width: 100%; }\n    section.services-full div.description-wrap div.text-container {\n      margin: 2rem 1.5rem 0; }\n      section.services-full div.description-wrap div.text-container p {\n        margin-bottom: 2.5rem;\n        line-height: 2rem; }\n      section.services-full div.description-wrap div.text-container h4 {\n        margin: 3rem 0 2rem; }\n      section.services-full div.description-wrap div.text-container h5 {\n        margin-bottom: 2rem; }\n        section.services-full div.description-wrap div.text-container h5:last-child {\n          margin-bottom: 0; }\n      section.services-full div.description-wrap div.text-container ul {\n        list-style-type: none; }\n        section.services-full div.description-wrap div.text-container ul li {\n          position: relative;\n          line-height: 2rem;\n          margin: 1rem 0 2rem 1.5rem; }\n          section.services-full div.description-wrap div.text-container ul li:last-of-type {\n            margin-bottom: 0; }\n          section.services-full div.description-wrap div.text-container ul li:before {\n            position: absolute;\n            left: -1.5rem;\n            content: \"-\"; }\n      section.services-full div.description-wrap div.text-container hr {\n        margin: calc(0.7 * var(--header-height)) auto; }\n  section.services-full div.img-container.wide {\n    margin-top: calc(1 * var(--header-height));\n    width: 100%; }\n  section.services-full div.discounts {\n    margin: 0 1rem 3rem; }\n  section.services-full hr {\n    width: 20vw;\n    text-align: center;\n    border: 1px solid var(--hr-color);\n    margin: calc(1 * var(--header-height)) auto 0; }\n  section.services-full div.prices {\n    width: 100%; }\n    section.services-full div.prices h2 {\n      font-size: 1.8rem; }\n    section.services-full div.prices table {\n      width: 90%;\n      margin: 3rem auto;\n      line-height: 1.7rem;\n      border-collapse: collapse; }\n      section.services-full div.prices table td {\n        padding: 1rem 0;\n        vertical-align: bottom; }\n        section.services-full div.prices table td:last-child {\n          min-width: 4rem;\n          text-align: right;\n          vertical-align: bottom; }\n    section.services-full div.prices a.button-typ {\n      margin: auto; }\n\nsection.see-also {\n  margin: var(--header-height) 0 calc(0.75 * var(--header-height)); }\n  section.see-also h2 {\n    font-size: 1.6rem;\n    margin-bottom: 3rem; }\n\n@media (min-width: 1024px) {\n  section.services-full div.button-container {\n    width: 25vw; }\n  section.services-full div.description-wrap {\n    width: 100%;\n    flex-direction: row;\n    align-items: flex-start; }\n    section.services-full div.description-wrap div.img-container {\n      width: 29%;\n      flex-shrink: 0;\n      flex-grow: 0;\n      margin-right: 1%; }\n    section.services-full div.description-wrap div.text-container {\n      width: 40%;\n      flex-shrink: 0;\n      flex-grow: 0;\n      margin: 0; }\n  section.services-full hr {\n    width: 10vw; }\n  section.services-full div.prices {\n    width: 40%; }\n  section.services-full div.prices-wrap {\n    width: 100%;\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center; }\n    section.services-full div.prices-wrap div.img-container {\n      width: 29%; }\n      section.services-full div.prices-wrap div.img-container.wide {\n        margin: 0 0 0 1%; }\n    section.services-full div.prices-wrap div.prices {\n      width: 40%; } }\n", "",{"version":3,"sources":["C:/Users/Ola/Documents/Lukasz/projects/next.js/ec-ui/styles/services.scss"],"names":[],"mappings":"AAAA;EACC,aAAa;EACb,sBAAsB;EACtB,mBAAmB,EAAA;EAHpB;IAOE,6CAA6C,EAAA;EAP/C;IAWE,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B;IAC9B,mBAAmB,EAAA;EAhBrB;IAoBE,aAAa;IACb,sBAAsB;IACtB,mBAAmB,EAAA;IAtBrB;MAyBG,WAAW,EAAA;MAzBd;QA4BI,0CAA0C;QAC1C,WAAW,EAAA;IA7Bf;MAkCG,qBAAqB,EAAA;MAlCxB;QAqCI,qBAAqB;QACrB,iBAAiB,EAAA;MAtCrB;QA0CI,mBAAmB,EAAA;MA1CvB;QA8CI,mBAAmB,EAAA;QA9CvB;UAkDK,gBAAgB,EAAA;MAlDrB;QAuDI,qBAAqB,EAAA;QAvDzB;UA0DK,kBAAkB;UAClB,iBAAiB;UACjB,0BAA0B,EAAA;UA5D/B;YA+DM,gBAAgB,EAAA;UA/DtB;YAmEM,kBAAkB;YAClB,aAAa;YACb,YAAY,EAAA;MArElB;QA2EI,6CAA6C,EAAA;EA3EjD;IAiFE,0CAA0C;IAC1C,WAAW,EAAA;EAlFb;IAsFE,mBAAmB,EAAA;EAtFrB;IA0FE,WAAW;IACX,kBAAkB;IAClB,iCAAiC;IACjC,6CAA6C,EAAA;EA7F/C;IAiGE,WAAW,EAAA;IAjGb;MAsGG,iBAAiB,EAAA;IAtGpB;MA0GG,UAAU;MACV,iBAAiB;MACjB,mBAAmB;MACnB,yBAAyB,EAAA;MA7G5B;QAgHI,eAAe;QACf,sBAAsB,EAAA;QAjH1B;UAoHK,eAAe;UACf,iBAAiB;UACjB,sBAAsB,EAAA;IAtH3B;MA4HG,YAAY,EAAA;;AAKf;EACC,gEAAgE,EAAA;EADjE;IAIE,iBAAiB;IACjB,mBAAmB,EAAA;;AAIrB;EACC;IAEE,WAAW,EAAA;EAFb;IAYE,WAAW;IACX,mBAAmB;IACnB,uBAAuB,EAAA;IAdzB;MAiBG,UAAU;MACV,cAAc;MACd,YAAY;MACZ,gBAAgB,EAAA;IApBnB;MAwBG,UAAU;MACV,cAAc;MACd,YAAY;MACZ,SAAS,EAAA;EA3BZ;IAgCE,WAAW,EAAA;EAhCb;IAoCE,UAAU,EAAA;EApCZ;IAwCE,WAAW;IACX,aAAa;IACb,2BAA2B;IAC3B,mBAAmB,EAAA;IA3CrB;MA8CG,UAAU,EAAA;MA9Cb;QAiDI,gBAAgB,EAAA;IAjDpB;MAsDG,UAAU,EAAA,EACV","file":"services.scss","sourcesContent":["section.services-full {\r\n display: flex;\r\n flex-direction: column;\r\n align-items: center;\r\n\r\n\r\n h2 {\r\n  margin-top: calc(var(--header-height) + 1rem);\r\n }\r\n\r\n div.button-container {\r\n  width: 70vw;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin: 2rem 0 3rem;\r\n }\r\n\r\n div.description-wrap {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n  div.img-container {\r\n   width: 70vw;\r\n\r\n   &.wide {\r\n    margin-top: calc(1 * var(--header-height));\r\n    width: 100%;\r\n   }\r\n  }\r\n\r\n  div.text-container {\r\n   margin: 2rem 1.5rem 0;\r\n\r\n   p {\r\n    margin-bottom: 2.5rem;\r\n    line-height: 2rem;\r\n   }\r\n\r\n   h4 {\r\n    margin: 3rem 0 2rem;\r\n   }\r\n\r\n   h5 {\r\n    margin-bottom: 2rem;\r\n\r\n    &:last-child {\r\n     // margin-top: calc(0.5 * var(--header-height));\r\n     margin-bottom: 0;\r\n    }\r\n   }\r\n\r\n   ul {\r\n    list-style-type: none;\r\n\r\n    li {\r\n     position: relative;\r\n     line-height: 2rem;\r\n     margin: 1rem 0 2rem 1.5rem;\r\n\r\n     &:last-of-type {\r\n      margin-bottom: 0;\r\n     }\r\n\r\n     &:before {\r\n      position: absolute;\r\n      left: -1.5rem;\r\n      content: \"-\";\r\n     }\r\n    }\r\n   }\r\n\r\n   hr {\r\n    margin: calc(0.7 * var(--header-height)) auto;\r\n   }\r\n  }\r\n }\r\n\r\n div.img-container.wide {\r\n  margin-top: calc(1 * var(--header-height));\r\n  width: 100%;\r\n }\r\n\r\n div.discounts {\r\n  margin: 0 1rem 3rem;\r\n }\r\n\r\n hr {\r\n  width: 20vw;\r\n  text-align: center;\r\n  border: 1px solid var(--hr-color);\r\n  margin: calc(1 * var(--header-height)) auto 0;\r\n }\r\n\r\n div.prices {\r\n  width: 100%;\r\n  // margin-bottom: var(--header-height);\r\n\r\n\r\n  h2 {\r\n   font-size: 1.8rem;\r\n  }\r\n\r\n  table {\r\n   width: 90%;\r\n   margin: 3rem auto;\r\n   line-height: 1.7rem;\r\n   border-collapse: collapse;\r\n\r\n   td {\r\n    padding: 1rem 0;\r\n    vertical-align: bottom;\r\n\r\n    &:last-child {\r\n     min-width: 4rem;\r\n     text-align: right;\r\n     vertical-align: bottom;\r\n    }\r\n   }\r\n  }\r\n\r\n  a.button-typ {\r\n   margin: auto;\r\n  }\r\n }\r\n}\r\n\r\nsection.see-also {\r\n margin: var(--header-height) 0 calc(0.75 * var(--header-height));\r\n\r\n h2 {\r\n  font-size: 1.6rem;\r\n  margin-bottom: 3rem;\r\n }\r\n}\r\n\r\n@media (min-width: 1024px) {\r\n section.services-full {\r\n  div.button-container {\r\n   width: 25vw;\r\n   // display: flex;\r\n   // flex-direction: row;\r\n   // align-items: center;\r\n   // justify-content: space-between;\r\n   // margin: 2rem 0 3rem;\r\n  }\r\n\r\n\r\n  div.description-wrap {\r\n   width: 100%;\r\n   flex-direction: row;\r\n   align-items: flex-start;\r\n\r\n   div.img-container {\r\n    width: 29%;\r\n    flex-shrink: 0;\r\n    flex-grow: 0;\r\n    margin-right: 1%;\r\n   }\r\n\r\n   div.text-container {\r\n    width: 40%;\r\n    flex-shrink: 0;\r\n    flex-grow: 0;\r\n    margin: 0;\r\n   }\r\n  }\r\n\r\n  hr {\r\n   width: 10vw;\r\n  }\r\n\r\n  div.prices {\r\n   width: 40%;\r\n  }\r\n\r\n  div.prices-wrap {\r\n   width: 100%;\r\n   display: flex;\r\n   flex-direction: row-reverse;\r\n   align-items: center;\r\n\r\n   div.img-container {\r\n    width: 29%;\r\n\r\n    &.wide {\r\n     margin: 0 0 0 1%;\r\n    }\r\n   }\r\n\r\n   div.prices {\r\n    width: 40%;\r\n   }\r\n  }\r\n }\r\n}"]}]);


/***/ }),

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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

if (true) {
  exports.RouterContext.displayName = 'RouterContext';
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname,
        query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

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

/***/ "./styles/BurgerMenu.scss":
/*!********************************!*\
  !*** ./styles/BurgerMenu.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./BurgerMenu.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/BurgerMenu.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./BurgerMenu.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/BurgerMenu.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./BurgerMenu.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/BurgerMenu.scss");

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

/***/ }),

/***/ "./styles/Button.scss":
/*!****************************!*\
  !*** ./styles/Button.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Button.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Button.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Button.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Button.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Button.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Button.scss");

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

/***/ }),

/***/ "./styles/Footer.scss":
/*!****************************!*\
  !*** ./styles/Footer.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Footer.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Footer.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Footer.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Footer.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Footer.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Footer.scss");

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

/***/ }),

/***/ "./styles/HeaderDesktop.scss":
/*!***********************************!*\
  !*** ./styles/HeaderDesktop.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./HeaderDesktop.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/HeaderDesktop.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./HeaderDesktop.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/HeaderDesktop.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./HeaderDesktop.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/HeaderDesktop.scss");

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

/***/ }),

/***/ "./styles/HeaderMobile.scss":
/*!**********************************!*\
  !*** ./styles/HeaderMobile.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./HeaderMobile.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/HeaderMobile.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./HeaderMobile.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/HeaderMobile.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./HeaderMobile.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/HeaderMobile.scss");

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

/***/ }),

/***/ "./styles/MenuItem.scss":
/*!******************************!*\
  !*** ./styles/MenuItem.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./MenuItem.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/MenuItem.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./MenuItem.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/MenuItem.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./MenuItem.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/MenuItem.scss");

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

/***/ }),

/***/ "./styles/SchedulerNavButtons.scss":
/*!*****************************************!*\
  !*** ./styles/SchedulerNavButtons.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./SchedulerNavButtons.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/SchedulerNavButtons.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./SchedulerNavButtons.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/SchedulerNavButtons.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./SchedulerNavButtons.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/SchedulerNavButtons.scss");

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

/***/ }),

/***/ "./styles/Time.scss":
/*!**************************!*\
  !*** ./styles/Time.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Time.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Time.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Time.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Time.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Time.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Time.scss");

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

/***/ }),

/***/ "./styles/Week.scss":
/*!**************************!*\
  !*** ./styles/Week.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Week.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Week.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Week.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Week.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./Week.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/Week.scss");

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

/***/ }),

/***/ "./styles/about.scss":
/*!***************************!*\
  !*** ./styles/about.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./about.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/about.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./about.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/about.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./about.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/about.scss");

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

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/global.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/global.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./global.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/global.scss");

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

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/index.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/index.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/index.scss");

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

/***/ }),

/***/ "./styles/scheduler.scss":
/*!*******************************!*\
  !*** ./styles/scheduler.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./scheduler.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/scheduler.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./scheduler.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/scheduler.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./scheduler.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/scheduler.scss");

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

/***/ }),

/***/ "./styles/services.scss":
/*!******************************!*\
  !*** ./styles/services.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./services.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/services.scss");

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
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./services.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/services.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./services.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/services.scss");

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

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! C:\Users\Ola\Documents\Lukasz\projects\next.js\ec-ui\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map