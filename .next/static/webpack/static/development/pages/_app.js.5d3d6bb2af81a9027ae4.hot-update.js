webpackHotUpdate("static\\development\\pages\\_app.js",{

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
      lineNumber: 17,
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

/***/ })

})
//# sourceMappingURL=_app.js.5d3d6bb2af81a9027ae4.hot-update.js.map