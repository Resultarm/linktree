webpackHotUpdate_N_E("pages/_error",{

/***/ "./components/Error/Error.js":
/*!***********************************!*\
  !*** ./components/Error/Error.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/text/link */ "./public/text/link.js");
/* harmony import */ var _error_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error-style */ "./components/Error/error-style.js");
var _jsxFileName = "D:\\Resultarmind\\linktree\\rmcsm\\resultarmind.com.br\\components\\Error\\Error.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function Error(props) {
  _s();

  var classes = Object(_error_style__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var errCode = props.errCode,
      text = props.text,
      t = props.t;
  return __jsx("div", {
    className: classes.errorWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    maxWidth: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    container: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 5,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.flex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classes.deco,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, errCode)))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
    item: true,
    md: 7,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: classes.text,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, text), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, t('common:404_subtitle')), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "contained",
    color: "secondary",
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_7__["default"].saas.home,
    className: classes.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, t('common:back')))))));
}

_s(Error, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [_error_style__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = Error;
Error.propTypes = {
  errCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
Error.defaultProps = {
  errCode: '404',
  text: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["withTranslation"])(['common'])(Error));

var _c;

$RefreshReg$(_c, "Error");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Error/error-style.js":
/*!*****************************************!*\
  !*** ./components/Error/error-style.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _public_images_saas_error_deco_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/saas/error-deco.png */ "./public/images/saas/error-deco.png");
/* harmony import */ var _public_images_saas_error_deco_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_saas_error_deco_png__WEBPACK_IMPORTED_MODULE_2__);



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _deco, _text;

  return {
    errorWrap: {
      width: '100%',
      minHeight: 640,
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(-15)
    },
    flex: {
      display: 'flex',
      justifyContent: 'center'
    },
    deco: (_deco = {
      position: 'relative'
    }, Object(D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_deco, theme.breakpoints.down('sm'), {
      margin: theme.spacing(25, 0, 10)
    }), Object(D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_deco, '& h3', {
      color: theme.palette.primary.dark,
      fontSize: 106,
      textTransform: 'capitalize',
      fontWeight: 700,
      paddingTop: 40,
      paddingLeft: 20,
      position: 'relative',
      zIndex: 1
    }), Object(D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_deco, '&:before', Object(D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: '""',
      width: 320,
      height: 230,
      background: "url(".concat(_public_images_saas_error_deco_png__WEBPACK_IMPORTED_MODULE_2___default.a, ") no-repeat"),
      position: 'absolute',
      top: theme.spacing(-3),
      left: theme.spacing(-5)
    }, theme.breakpoints.down('xs'), {
      transform: 'scale(0.9)',
      left: theme.spacing(-6)
    })), _deco),
    text: (_text = {
      color: theme.palette.common.white
    }, Object(D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_text, theme.breakpoints.up('md'), {
      paddingLeft: theme.spacing(5),
      borderLeft: "1px solid ".concat(theme.palette.divider)
    }), Object(D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_text, theme.breakpoints.down('sm'), {
      textAlign: 'center',
      margin: theme.spacing(5, 0, 20)
    }), Object(D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_text, '& h4', {
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    }), _text),
    button: {
      marginTop: theme.spacing(4)
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Error/index.js":
/*!***********************************!*\
  !*** ./components/Error/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error */ "./components/Error/Error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Error__WEBPACK_IMPORTED_MODULE_0__["default"]; });



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./components/Footer/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5CResultarmind%5Clinktree%5Crmcsm%5Cresultarmind.com.br%5Cpages%5C_error.js!./":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=D%3A%5CResultarmind%5Clinktree%5Crmcsm%5Cresultarmind.com.br%5Cpages%5C_error.js ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Error */ "./components/Error/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_10__);



var _jsxFileName = "D:\\Resultarmind\\linktree\\rmcsm\\resultarmind.com.br\\pages\\_error.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    dedicatedPage: {
      background: theme.palette.primary.dark
    }
  };
});

function ErrorPage(props) {
  _s();

  var classes = useStyles();
  var onToggleDark = props.onToggleDark,
      onToggleDir = props.onToggleDir;
  var errorCode = props.errorCode,
      stars = props.stars,
      t = props.t;

  if (errorCode) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }
    }, _public_text_brand__WEBPACK_IMPORTED_MODULE_9___default.a.saas.name, "\xA0 -\xA0", errorCode)), __jsx("div", {
      className: classes.dedicatedPage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
      onToggleDark: onToggleDark,
      onToggleDir: onToggleDir,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }), __jsx(_components_Error__WEBPACK_IMPORTED_MODULE_6__["default"], {
      errorCode: errorCode,
      text: t('common:404'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    })));
  }

  return __jsx("div", {
    className: classes.dedicatedPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, t('description'), "Next stars:\xA0", stars);
}

_s(ErrorPage, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ErrorPage;
ErrorPage.propTypes = {
  errorCode: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  stars: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  onToggleDark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onToggleDir: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
ErrorPage.defaultProps = {
  errorCode: '400',
  stars: 0
};
ErrorPage.getInitialProps = /*#__PURE__*/Object(D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return D_Resultarmind_linktree_rmcsm_resultarmind_com_br_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            namespacesRequired: ['common']
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["withTranslation"])(['common'])(ErrorPage));

var _c;

$RefreshReg$(_c, "ErrorPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./public/images/saas/error-deco.png":
/*!*******************************************!*\
  !*** ./public/images/saas/error-deco.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/error-deco-ac99011ad1e532734befbb8af127e769.png";

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FcnJvci9FcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FcnJvci9lcnJvci1zdHlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FcnJvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2Vycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9wdWJsaWMvaW1hZ2VzL3NhYXMvZXJyb3ItZGVjby5wbmciXSwibmFtZXMiOlsiRXJyb3IiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJlcnJDb2RlIiwidGV4dCIsInQiLCJlcnJvcldyYXAiLCJmbGV4IiwiZGVjbyIsInJvdXRlckxpbmsiLCJzYWFzIiwiaG9tZSIsImJ1dHRvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiZGVmYXVsdFByb3BzIiwid2l0aFRyYW5zbGF0aW9uIiwibWFrZVN0eWxlcyIsInRoZW1lIiwid2lkdGgiLCJtaW5IZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1hcmdpbkJvdHRvbSIsInNwYWNpbmciLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwiYnJlYWtwb2ludHMiLCJkb3duIiwibWFyZ2luIiwiY29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsImRhcmsiLCJmb250U2l6ZSIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdMZWZ0IiwiekluZGV4IiwiY29udGVudCIsImhlaWdodCIsImJhY2tncm91bmQiLCJlcnJvckRlY28iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiY29tbW9uIiwid2hpdGUiLCJ1cCIsImJvcmRlckxlZnQiLCJkaXZpZGVyIiwidGV4dEFsaWduIiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRCb2xkIiwibWFyZ2luVG9wIiwiZGVkaWNhdGVkUGFnZSIsIkVycm9yUGFnZSIsIm9uVG9nZ2xlRGFyayIsIm9uVG9nZ2xlRGlyIiwiZXJyb3JDb2RlIiwic3RhcnMiLCJicmFuZCIsIm5hbWUiLCJudW1iZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDcEIsTUFBTUMsT0FBTyxHQUFHQyw0REFBUyxFQUF6QjtBQURvQixNQUVaQyxPQUZZLEdBRVNILEtBRlQsQ0FFWkcsT0FGWTtBQUFBLE1BRUhDLElBRkcsR0FFU0osS0FGVCxDQUVISSxJQUZHO0FBQUEsTUFFR0MsQ0FGSCxHQUVTTCxLQUZULENBRUdLLENBRkg7QUFHcEIsU0FDRTtBQUFLLGFBQVMsRUFBRUosT0FBTyxDQUFDSyxTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4REFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxDQUFmO0FBQWtCLE1BQUUsRUFBRSxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVMLE9BQU8s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LENBQUMwRCxhQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d0RCxDQUFDLENBQUMsYUFBRCxDQURKLHFCQUdHMkQsS0FISCxDQURGO0FBT0Q7O0dBL0JRSixTO1VBQ1MxRCxTOzs7S0FEVDBELFM7QUFpQ1RBLFNBQVMsQ0FBQy9DLFNBQVYsR0FBc0I7QUFDcEJrRCxXQUFTLEVBQUVqRCxpREFBUyxDQUFDQyxNQUREO0FBRXBCaUQsT0FBSyxFQUFFbEQsaURBQVMsQ0FBQ3FELE1BRkc7QUFHcEJOLGNBQVksRUFBRS9DLGlEQUFTLENBQUNFLElBQVYsQ0FBZUMsVUFIVDtBQUlwQjZDLGFBQVcsRUFBRWhELGlEQUFTLENBQUNFLElBQVYsQ0FBZUMsVUFKUjtBQUtwQlosR0FBQyxFQUFFUyxpREFBUyxDQUFDRSxJQUFWLENBQWVDO0FBTEUsQ0FBdEI7QUFRQTJDLFNBQVMsQ0FBQzFDLFlBQVYsR0FBeUI7QUFDdkI2QyxXQUFTLEVBQUUsS0FEWTtBQUV2QkMsT0FBSyxFQUFFO0FBRmdCLENBQXpCO0FBS0FKLFNBQVMsQ0FBQ1EsZUFBVixpV0FBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUFhO0FBQ3ZDQyw4QkFBa0IsRUFBRSxDQUFDLFFBQUQ7QUFEbUIsV0FBYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUE1QjtBQUllbEQsNkhBQWUsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFmLENBQTRCeUMsU0FBNUIsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEVBLHdGIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19lcnJvci4yZTA2NGZlMTk5OWU0YzExOTllMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnfi9pMThuJztcbmltcG9ydCByb3V0ZXJMaW5rIGZyb20gJ34vcHVibGljL3RleHQvbGluayc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZXJyb3Itc3R5bGUnO1xuXG5mdW5jdGlvbiBFcnJvcihwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgZXJyQ29kZSwgdGV4dCwgdCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3JXcmFwfT5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxuICAgICAgICA8R3JpZCBjb250YWluZXI+XG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17NX0geHM9ezEyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZsZXh9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWNvfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIj5cbiAgICAgICAgICAgICAgICAgIHtlcnJDb2RlfVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSBtZD17N30geHM9ezEyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj57dGV4dH08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgIHt0KCdjb21tb246NDA0X3N1YnRpdGxlJyl9XG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBocmVmPXtyb3V0ZXJMaW5rLnNhYXMuaG9tZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0+XG4gICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpiYWNrJyl9XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuRXJyb3IucHJvcFR5cGVzID0ge1xuICBlcnJDb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5FcnJvci5kZWZhdWx0UHJvcHMgPSB7XG4gIGVyckNvZGU6ICc0MDQnLFxuICB0ZXh0OiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbJ2NvbW1vbiddKShFcnJvcik7XG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBlcnJvckRlY28gZnJvbSAnfi9wdWJsaWMvaW1hZ2VzL3NhYXMvZXJyb3ItZGVjby5wbmcnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGVycm9yV3JhcDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiA2NDAsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygtMTUpXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gIH0sXG4gIGRlY286IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyNSwgMCwgMTApXG4gICAgfSxcbiAgICAnJiBoMyc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFyayxcbiAgICAgIGZvbnRTaXplOiAxMDYsXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBwYWRkaW5nVG9wOiA0MCxcbiAgICAgIHBhZGRpbmdMZWZ0OiAyMCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgekluZGV4OiAxLFxuICAgIH0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgd2lkdGg6IDMyMCxcbiAgICAgIGhlaWdodDogMjMwLFxuICAgICAgYmFja2dyb3VuZDogYHVybCgke2Vycm9yRGVjb30pIG5vLXJlcGVhdGAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogdGhlbWUuc3BhY2luZygtMyksXG4gICAgICBsZWZ0OiB0aGVtZS5zcGFjaW5nKC01KSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjkpJyxcbiAgICAgICAgbGVmdDogdGhlbWUuc3BhY2luZygtNiksXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB0ZXh0OiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgICAgYm9yZGVyTGVmdDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDUsIDAsIDIwKSxcbiAgICB9LFxuICAgICcmIGg0Jzoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KVxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KVxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcztcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Vycm9yJztcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvb3Rlcic7XG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19lcnJvclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkQ6XFxcXFJlc3VsdGFybWluZFxcXFxsaW5rdHJlZVxcXFxybWNzbVxcXFxyZXN1bHRhcm1pbmQuY29tLmJyXFxcXHBhZ2VzXFxcXF9lcnJvci5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBFcnJvciBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgYnJhbmQgZnJvbSAnLi4vcHVibGljL3RleHQvYnJhbmQnO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bic7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgZGVkaWNhdGVkUGFnZToge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrXG4gIH1cbn0pKTtcblxuZnVuY3Rpb24gRXJyb3JQYWdlKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBvblRvZ2dsZURhcmssIG9uVG9nZ2xlRGlyIH0gPSBwcm9wcztcbiAgY29uc3QgeyBlcnJvckNvZGUsIHN0YXJzLCB0IH0gPSBwcm9wcztcblxuICBpZiAoZXJyb3JDb2RlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAgeyBicmFuZC5zYWFzLm5hbWUgfVxuICAgICAgICAgICAgJm5ic3A7IC0mbmJzcDtcbiAgICAgICAgICAgIHtlcnJvckNvZGV9XG4gICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWRpY2F0ZWRQYWdlfT5cbiAgICAgICAgICA8SGVhZGVyIG9uVG9nZ2xlRGFyaz17b25Ub2dnbGVEYXJrfSBvblRvZ2dsZURpcj17b25Ub2dnbGVEaXJ9IC8+XG4gICAgICAgICAgPEVycm9yIGVycm9yQ29kZT17ZXJyb3JDb2RlfSB0ZXh0PXt0KCdjb21tb246NDA0Jyl9IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVkaWNhdGVkUGFnZX0+XG4gICAgICB7dCgnZGVzY3JpcHRpb24nKX1cbiAgICAgIE5leHQgc3RhcnM6Jm5ic3A7XG4gICAgICB7c3RhcnN9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkVycm9yUGFnZS5wcm9wVHlwZXMgPSB7XG4gIGVycm9yQ29kZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3RhcnM6IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uVG9nZ2xlRGFyazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Ub2dnbGVEaXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5FcnJvclBhZ2UuZGVmYXVsdFByb3BzID0ge1xuICBlcnJvckNvZGU6ICc0MDAnLFxuICBzdGFyczogMCxcbn07XG5cbkVycm9yUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICBuYW1lc3BhY2VzUmVxdWlyZWQ6IFsnY29tbW9uJ10sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY29tbW9uJ10pKEVycm9yUGFnZSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZXJyb3ItZGVjby1hYzk5MDExYWQxZTUzMjczNGJlZmJiOGFmMTI3ZTc2OS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9