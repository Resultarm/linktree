"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/change",{

/***/ "./components/Change/index.js":
/*!************************************!*\
  !*** ./components/Change/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ \"./services/api.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/franciscosantos/go/src/Works/rmcsm/linktreeResultar/components/Change/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar Change = function Change() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    username: \"\",\n    email: \"\",\n    id: \"\"\n  }),\n      me = _useState[0],\n      setMe = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    _services_api__WEBPACK_IMPORTED_MODULE_1__.default.get(\"get-me\", {\n      headers: {\n        \"jwt-token\": \"JWT \".concat(localStorage.getItem(\"token\"))\n      }\n    }).then(function (r) {\n      return setMe(r.data);\n    })[\"catch\"](function (e) {\n      return (0,_services_api__WEBPACK_IMPORTED_MODULE_1__.catchErr)(e, function () {\n        setMe({\n          username: \"\",\n          email: \"\",\n          id: \"\"\n        });\n      });\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    style: {\n      display: \"flex\",\n      alignItems: \"center\",\n      flexDirection: \"column\"\n    },\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"text\",\n        value: me.username\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"email\",\n        value: me.email\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Change, \"Hyis8F5/fBKQmuypG1K+Oj2bwrY=\");\n\n_c = Change;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Change);\n\nvar _c;\n\n$RefreshReg$(_c, \"Change\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYW5nZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1JLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDcEIsa0JBQW9CSCwrQ0FBUSxDQUFDO0FBQUVJLElBQUFBLFFBQVEsRUFBRSxFQUFaO0FBQWdCQyxJQUFBQSxLQUFLLEVBQUUsRUFBdkI7QUFBMkJDLElBQUFBLEVBQUUsRUFBRTtBQUEvQixHQUFELENBQTVCO0FBQUEsTUFBT0MsRUFBUDtBQUFBLE1BQVdDLEtBQVg7O0FBQ0FULEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNmRSxJQUFBQSxzREFBQSxDQUFRLFFBQVIsRUFBa0I7QUFDakJTLE1BQUFBLE9BQU8sRUFBRTtBQUFFLG1DQUFvQkMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQXBCO0FBQUY7QUFEUSxLQUFsQixFQUdFQyxJQUhGLENBR08sVUFBQ0MsQ0FBRDtBQUFBLGFBQU9OLEtBQUssQ0FBQ00sQ0FBQyxDQUFDQyxJQUFILENBQVo7QUFBQSxLQUhQLFdBSVEsVUFBQ0MsQ0FBRDtBQUFBLGFBQ05kLHVEQUFRLENBQUNjLENBQUQsRUFBSSxZQUFNO0FBQ2pCUixRQUFBQSxLQUFLLENBQUM7QUFBRUosVUFBQUEsUUFBUSxFQUFFLEVBQVo7QUFBZ0JDLFVBQUFBLEtBQUssRUFBRSxFQUF2QjtBQUEyQkMsVUFBQUEsRUFBRSxFQUFFO0FBQS9CLFNBQUQsQ0FBTDtBQUNBLE9BRk8sQ0FERjtBQUFBLEtBSlI7QUFTQSxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsc0JBQ0M7QUFDQyxTQUFLLEVBQUU7QUFDTlcsTUFBQUEsT0FBTyxFQUFFLE1BREg7QUFFTkMsTUFBQUEsVUFBVSxFQUFFLFFBRk47QUFHTkMsTUFBQUEsYUFBYSxFQUFFO0FBSFQsS0FEUjtBQUFBLDJCQU9DO0FBQUEsOEJBQ0M7QUFBTyxZQUFJLEVBQUUsTUFBYjtBQUFxQixhQUFLLEVBQUVaLEVBQUUsQ0FBQ0g7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUM7QUFBTyxZQUFJLEVBQUUsT0FBYjtBQUFzQixhQUFLLEVBQUVHLEVBQUUsQ0FBQ0Y7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZELGVBR0M7QUFBTyxZQUFJLEVBQUU7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBZUEsQ0E3QkQ7O0dBQU1GOztLQUFBQTtBQStCTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYW5nZS9pbmRleC5qcz9kZjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhcGksIHsgY2F0Y2hFcnIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCI7XG5cbmNvbnN0IENoYW5nZSA9ICgpID0+IHtcblx0Y29uc3QgW21lLCBzZXRNZV0gPSB1c2VTdGF0ZSh7IHVzZXJuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgaWQ6IFwiXCIgfSk7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0YXBpLmdldChcImdldC1tZVwiLCB7XG5cdFx0XHRoZWFkZXJzOiB7IFwiand0LXRva2VuXCI6IGBKV1QgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpfWAgfSxcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHIpID0+IHNldE1lKHIuZGF0YSkpXG5cdFx0XHQuY2F0Y2goKGUpID0+XG5cdFx0XHRcdGNhdGNoRXJyKGUsICgpID0+IHtcblx0XHRcdFx0XHRzZXRNZSh7IHVzZXJuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgaWQ6IFwiXCIgfSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRkaXNwbGF5OiBcImZsZXhcIixcblx0XHRcdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIixcblx0XHRcdFx0ZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGZvcm0+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPXtcInRleHRcIn0gdmFsdWU9e21lLnVzZXJuYW1lfSAvPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT17XCJlbWFpbFwifSB2YWx1ZT17bWUuZW1haWx9IC8+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPXtcInN1Ym1pdFwifSAvPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwiY2F0Y2hFcnIiLCJDaGFuZ2UiLCJ1c2VybmFtZSIsImVtYWlsIiwiaWQiLCJtZSIsInNldE1lIiwiZ2V0IiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVuIiwiciIsImRhdGEiLCJlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Change/index.js\n");

/***/ })

});