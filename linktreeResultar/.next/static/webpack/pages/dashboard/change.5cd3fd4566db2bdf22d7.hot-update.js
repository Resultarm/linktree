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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_franciscosantos_go_src_Works_rmcsm_linktreeResultar_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./services/api.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/franciscosantos/go/src/Works/rmcsm/linktreeResultar/components/Change/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_franciscosantos_go_src_Works_rmcsm_linktreeResultar_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Change = function Change() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    username: \"\",\n    email: \"\",\n    id: \"\"\n  }),\n      me = _useState[0],\n      setMe = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    _services_api__WEBPACK_IMPORTED_MODULE_2__.default.get(\"get-me\", {\n      headers: {\n        \"jwt-token\": \"JWT \".concat(localStorage.getItem(\"token\"))\n      }\n    }).then(function (r) {\n      return setMe(r.data);\n    })[\"catch\"](function (e) {\n      return (0,_services_api__WEBPACK_IMPORTED_MODULE_2__.catchErr)(e, function () {\n        setMe({\n          username: \"\",\n          email: \"\",\n          id: \"\"\n        });\n      });\n    });\n  }, []);\n\n  var handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    _services_api__WEBPACK_IMPORTED_MODULE_2__.default.post(\"change-user\", me, {\n      headers: {\n        \"jwt-token\": \"JWT \".concat(localStorage.getItem(\"token\"))\n      }\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    style: {\n      display: \"flex\",\n      alignItems: \"center\",\n      flexDirection: \"column\"\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"Username\",\n        value: me.username,\n        onChange: function onChange(e) {\n          return setMe(function (prev) {\n            return _objectSpread(_objectSpread({}, prev), {}, {\n              username: e.target.value\n            });\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        type: \"email\",\n        placeholder: \"Email\",\n        value: me.email,\n        onChange: function onChange(e) {\n          return setMe(function (prev) {\n            return _objectSpread(_objectSpread({}, prev), {}, {\n              email: e.target.value\n            });\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        type: \"submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        type: \"text\",\n        placeholder: \"Username\",\n        value: me.username,\n        onChange: function onChange(e) {\n          return setMe(function (prev) {\n            return _objectSpread(_objectSpread({}, prev), {}, {\n              username: e.target.value\n            });\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n        type: \"submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(Change, \"Hyis8F5/fBKQmuypG1K+Oj2bwrY=\");\n\n_c = Change;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Change);\n\nvar _c;\n\n$RefreshReg$(_c, \"Change\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoYW5nZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ3BCLGtCQUFvQkgsK0NBQVEsQ0FBQztBQUFFSSxJQUFBQSxRQUFRLEVBQUUsRUFBWjtBQUFnQkMsSUFBQUEsS0FBSyxFQUFFLEVBQXZCO0FBQTJCQyxJQUFBQSxFQUFFLEVBQUU7QUFBL0IsR0FBRCxDQUE1QjtBQUFBLE1BQU9DLEVBQVA7QUFBQSxNQUFXQyxLQUFYOztBQUNBVCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZkUsSUFBQUEsc0RBQUEsQ0FBUSxRQUFSLEVBQWtCO0FBQ2pCUyxNQUFBQSxPQUFPLEVBQUU7QUFBRSxtQ0FBb0JDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFwQjtBQUFGO0FBRFEsS0FBbEIsRUFHRUMsSUFIRixDQUdPLFVBQUNDLENBQUQ7QUFBQSxhQUFPTixLQUFLLENBQUNNLENBQUMsQ0FBQ0MsSUFBSCxDQUFaO0FBQUEsS0FIUCxXQUlRLFVBQUNDLENBQUQ7QUFBQSxhQUNOZCx1REFBUSxDQUFDYyxDQUFELEVBQUksWUFBTTtBQUNqQlIsUUFBQUEsS0FBSyxDQUFDO0FBQUVKLFVBQUFBLFFBQVEsRUFBRSxFQUFaO0FBQWdCQyxVQUFBQSxLQUFLLEVBQUUsRUFBdkI7QUFBMkJDLFVBQUFBLEVBQUUsRUFBRTtBQUEvQixTQUFELENBQUw7QUFDQSxPQUZPLENBREY7QUFBQSxLQUpSO0FBU0EsR0FWUSxFQVVOLEVBVk0sQ0FBVDs7QUFZQSxNQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDRCxDQUFELEVBQU87QUFDM0JBLElBQUFBLENBQUMsQ0FBQ0UsY0FBRjtBQUVBakIsSUFBQUEsdURBQUEsQ0FBUyxhQUFULEVBQXdCTSxFQUF4QixFQUE0QjtBQUMzQkcsTUFBQUEsT0FBTyxFQUFFO0FBQUUsbUNBQW9CQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBcEI7QUFBRjtBQURrQixLQUE1QjtBQUdBLEdBTkQ7O0FBUUEsc0JBQ0M7QUFDQyxTQUFLLEVBQUU7QUFDTlEsTUFBQUEsT0FBTyxFQUFFLE1BREg7QUFFTkMsTUFBQUEsVUFBVSxFQUFFLFFBRk47QUFHTkMsTUFBQUEsYUFBYSxFQUFFO0FBSFQsS0FEUjtBQUFBLDRCQU9DO0FBQU0sY0FBUSxFQUFFTCxZQUFoQjtBQUFBLDhCQUNDO0FBQ0MsWUFBSSxFQUFFLE1BRFA7QUFFQyxtQkFBVyxFQUFFLFVBRmQ7QUFHQyxhQUFLLEVBQUVWLEVBQUUsQ0FBQ0gsUUFIWDtBQUlDLGdCQUFRLEVBQUUsa0JBQUNZLENBQUQ7QUFBQSxpQkFDVFIsS0FBSyxDQUFDLFVBQUNlLElBQUQ7QUFBQSxtREFBZ0JBLElBQWhCO0FBQXNCbkIsY0FBQUEsUUFBUSxFQUFFWSxDQUFDLENBQUNRLE1BQUYsQ0FBU0M7QUFBekM7QUFBQSxXQUFELENBREk7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQVNDO0FBQ0MsWUFBSSxFQUFFLE9BRFA7QUFFQyxtQkFBVyxFQUFFLE9BRmQ7QUFHQyxhQUFLLEVBQUVsQixFQUFFLENBQUNGLEtBSFg7QUFJQyxnQkFBUSxFQUFFLGtCQUFDVyxDQUFEO0FBQUEsaUJBQ1RSLEtBQUssQ0FBQyxVQUFDZSxJQUFEO0FBQUEsbURBQWdCQSxJQUFoQjtBQUFzQmxCLGNBQUFBLEtBQUssRUFBRVcsQ0FBQyxDQUFDUSxNQUFGLENBQVNDO0FBQXRDO0FBQUEsV0FBRCxDQURJO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEQsZUFpQkM7QUFBTyxZQUFJLEVBQUU7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBELGVBMEJDO0FBQU0sY0FBUSxFQUFFUixZQUFoQjtBQUFBLDhCQUNDO0FBQ0MsWUFBSSxFQUFFLE1BRFA7QUFFQyxtQkFBVyxFQUFFLFVBRmQ7QUFHQyxhQUFLLEVBQUVWLEVBQUUsQ0FBQ0gsUUFIWDtBQUlDLGdCQUFRLEVBQUUsa0JBQUNZLENBQUQ7QUFBQSxpQkFDVFIsS0FBSyxDQUFDLFVBQUNlLElBQUQ7QUFBQSxtREFBZ0JBLElBQWhCO0FBQXNCbkIsY0FBQUEsUUFBUSxFQUFFWSxDQUFDLENBQUNRLE1BQUYsQ0FBU0M7QUFBekM7QUFBQSxXQUFELENBREk7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQVNDO0FBQU8sWUFBSSxFQUFFO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXdDQSxDQTlERDs7R0FBTXRCOztLQUFBQTtBQWdFTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NoYW5nZS9pbmRleC5qcz9kZjA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhcGksIHsgY2F0Y2hFcnIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCI7XG5cbmNvbnN0IENoYW5nZSA9ICgpID0+IHtcblx0Y29uc3QgW21lLCBzZXRNZV0gPSB1c2VTdGF0ZSh7IHVzZXJuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgaWQ6IFwiXCIgfSk7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0YXBpLmdldChcImdldC1tZVwiLCB7XG5cdFx0XHRoZWFkZXJzOiB7IFwiand0LXRva2VuXCI6IGBKV1QgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpfWAgfSxcblx0XHR9KVxuXHRcdFx0LnRoZW4oKHIpID0+IHNldE1lKHIuZGF0YSkpXG5cdFx0XHQuY2F0Y2goKGUpID0+XG5cdFx0XHRcdGNhdGNoRXJyKGUsICgpID0+IHtcblx0XHRcdFx0XHRzZXRNZSh7IHVzZXJuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgaWQ6IFwiXCIgfSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRhcGkucG9zdChcImNoYW5nZS11c2VyXCIsIG1lLCB7XG5cdFx0XHRoZWFkZXJzOiB7IFwiand0LXRva2VuXCI6IGBKV1QgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpfWAgfSxcblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdFx0XHRhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT17XCJ0ZXh0XCJ9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9e1wiVXNlcm5hbWVcIn1cblx0XHRcdFx0XHR2YWx1ZT17bWUudXNlcm5hbWV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PlxuXHRcdFx0XHRcdFx0c2V0TWUoKHByZXYpID0+ICh7IC4uLnByZXYsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdHR5cGU9e1wiZW1haWxcIn1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17XCJFbWFpbFwifVxuXHRcdFx0XHRcdHZhbHVlPXttZS5lbWFpbH1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+XG5cdFx0XHRcdFx0XHRzZXRNZSgocHJldikgPT4gKHsgLi4ucHJldiwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGlucHV0IHR5cGU9e1wic3VibWl0XCJ9IC8+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT17XCJ0ZXh0XCJ9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9e1wiVXNlcm5hbWVcIn1cblx0XHRcdFx0XHR2YWx1ZT17bWUudXNlcm5hbWV9XG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PlxuXHRcdFx0XHRcdFx0c2V0TWUoKHByZXYpID0+ICh7IC4uLnByZXYsIHVzZXJuYW1lOiBlLnRhcmdldC52YWx1ZSB9KSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxpbnB1dCB0eXBlPXtcInN1Ym1pdFwifSAvPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhbmdlO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwiY2F0Y2hFcnIiLCJDaGFuZ2UiLCJ1c2VybmFtZSIsImVtYWlsIiwiaWQiLCJtZSIsInNldE1lIiwiZ2V0IiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVuIiwiciIsImRhdGEiLCJlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwicHJldiIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Change/index.js\n");

/***/ })

});