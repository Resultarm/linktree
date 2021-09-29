"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/admin";
exports.ids = ["pages/admin"];
exports.modules = {

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api */ \"./services/api.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/franciscosantos/go/src/Works/rmcsm/linktreeResultar/pages/admin.js\";\n\n\n\n\nfunction Admin() {\n  const {\n    0: username,\n    1: setUsername\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const {\n    0: password,\n    1: setPassword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const {\n    0: err,\n    1: setErr\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n\n  const submit = e => {\n    e.preventDefault();\n\n    if (username == \"\" || password == \"\") {\n      return;\n    }\n\n    let data = {\n      username: username,\n      password: password\n    };\n    _services_api__WEBPACK_IMPORTED_MODULE_1__.default.post(\"/login\", data, {\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(r => {\n      localStorage.setItem(\"token\", r.data.token);\n      localStorage.setItem(\"username\", username);\n      window.location.href = \"/dashboard\";\n    }).catch(e => {\n      var _e$response;\n\n      if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 400) {\n        setErr(\"Algo deu errado!\");\n      }\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [err, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n      onSubmit: submit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"text\",\n        onChange: e => setUsername(e.target.value)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"password\",\n        onChange: e => setPassword(e.target.value)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"input\", {\n        type: \"submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZG1pbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsU0FBU0UsS0FBVCxHQUFpQjtBQUNoQixRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJKLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDSyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQk4sK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBRUEsUUFBTTtBQUFBLE9BQUNPLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUI7O0FBRUEsUUFBTVMsTUFBTSxHQUFJQyxDQUFELElBQU87QUFDckJBLElBQUFBLENBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxRQUFJUixRQUFRLElBQUksRUFBWixJQUFrQkUsUUFBUSxJQUFJLEVBQWxDLEVBQXNDO0FBQ3JDO0FBQ0E7O0FBRUQsUUFBSU8sSUFBSSxHQUFHO0FBQUVULE1BQUFBLFFBQVEsRUFBRUEsUUFBWjtBQUFzQkUsTUFBQUEsUUFBUSxFQUFFQTtBQUFoQyxLQUFYO0FBQ0FKLElBQUFBLHVEQUFBLENBQVMsUUFBVCxFQUFtQlcsSUFBbkIsRUFBeUI7QUFDeEJFLE1BQUFBLE9BQU8sRUFBRTtBQUFFLHdCQUFnQjtBQUFsQjtBQURlLEtBQXpCLEVBR0VDLElBSEYsQ0FHUUMsQ0FBRCxJQUFPO0FBQ1pDLE1BQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixFQUE4QkYsQ0FBQyxDQUFDSixJQUFGLENBQU9PLEtBQXJDO0FBQ0FGLE1BQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixFQUFpQ2YsUUFBakM7QUFDQWlCLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsWUFBdkI7QUFDQSxLQVBGLEVBUUVDLEtBUkYsQ0FRU2IsQ0FBRCxJQUFPO0FBQUE7O0FBQ2IsVUFBSSxnQkFBQUEsQ0FBQyxDQUFDYyxRQUFGLDREQUFZQyxNQUFaLE1BQXVCLEdBQTNCLEVBQWdDO0FBQy9CakIsUUFBQUEsTUFBTSxDQUFDLGtCQUFELENBQU47QUFDQTtBQUNELEtBWkY7QUFhQSxHQXBCRDs7QUFxQkEsc0JBQ0M7QUFBQSxlQUNFRCxHQURGLGVBRUM7QUFBTSxjQUFRLEVBQUVFLE1BQWhCO0FBQUEsOEJBQ0M7QUFDQyxZQUFJLEVBQUUsTUFEUDtBQUVDLGdCQUFRLEVBQUdDLENBQUQsSUFBT04sV0FBVyxDQUFDTSxDQUFDLENBQUNnQixNQUFGLENBQVNDLEtBQVY7QUFGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBS0M7QUFDQyxZQUFJLEVBQUUsVUFEUDtBQUVDLGdCQUFRLEVBQUdqQixDQUFELElBQU9KLFdBQVcsQ0FBQ0ksQ0FBQyxDQUFDZ0IsTUFBRixDQUFTQyxLQUFWO0FBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRCxlQVNDO0FBQU8sWUFBSSxFQUFFO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZ0JBOztBQUVELGlFQUFlekIsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmt0cmVlLWNsb25lLy4vcGFnZXMvYWRtaW4uanM/MjEzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFwaSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XG5cbmZ1bmN0aW9uIEFkbWluKCkge1xuXHRjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdGNvbnN0IFtlcnIsIHNldEVycl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHRjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAodXNlcm5hbWUgPT0gXCJcIiB8fCBwYXNzd29yZCA9PSBcIlwiKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IGRhdGEgPSB7IHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG5cdFx0YXBpLnBvc3QoXCIvbG9naW5cIiwgZGF0YSwge1xuXHRcdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHRcdH0pXG5cdFx0XHQudGhlbigocikgPT4ge1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHIuZGF0YS50b2tlbik7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgdXNlcm5hbWUpO1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2Rhc2hib2FyZFwiO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCgoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS5yZXNwb25zZT8uc3RhdHVzID09PSA0MDApIHtcblx0XHRcdFx0XHRzZXRFcnIoXCJBbGdvIGRldSBlcnJhZG8hXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0e2Vycn1cblx0XHRcdDxmb3JtIG9uU3VibWl0PXtzdWJtaXR9PlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPXtcInRleHRcIn1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT17XCJwYXNzd29yZFwifVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT17XCJzdWJtaXRcIn0gLz5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhcGkiLCJBZG1pbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyIiwic2V0RXJyIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInBvc3QiLCJoZWFkZXJzIiwidGhlbiIsInIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjYXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwidGFyZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/admin.js\n");

/***/ }),

/***/ "./services/api.js":
/*!*************************!*\
  !*** ./services/api.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"catchErr\": () => (/* binding */ catchErr),\n/* harmony export */   \"contactNumber\": () => (/* binding */ contactNumber),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: \"http://localhost:8000\"\n});\nconst catchErr = (e, fofH) => {\n  var _e$response, _e$response2;\n\n  if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 404) {\n    fofH();\n  }\n\n  if (((_e$response2 = e.response) === null || _e$response2 === void 0 ? void 0 : _e$response2.status) === 401) {\n    window.location.href = \"/admin\";\n  }\n};\nconst contactNumber = \"\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1DLEdBQUcsR0FBR0QsbURBQUEsQ0FBYTtBQUN4QkcsRUFBQUEsT0FBTyxFQUFFO0FBRGUsQ0FBYixDQUFaO0FBSU8sTUFBTUMsUUFBUSxHQUFHLENBQUNDLENBQUQsRUFBSUMsSUFBSixLQUFhO0FBQUE7O0FBQ3BDLE1BQUksZ0JBQUFELENBQUMsQ0FBQ0UsUUFBRiw0REFBWUMsTUFBWixNQUF1QixHQUEzQixFQUFnQztBQUMvQkYsSUFBQUEsSUFBSTtBQUNKOztBQUVELE1BQUksaUJBQUFELENBQUMsQ0FBQ0UsUUFBRiw4REFBWUMsTUFBWixNQUF1QixHQUEzQixFQUFnQztBQUMvQkMsSUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixRQUF2QjtBQUNBO0FBQ0QsQ0FSTTtBQVVBLE1BQU1DLGFBQWEsR0FBRyxFQUF0QjtBQUVQLGlFQUFlWCxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua3RyZWUtY2xvbmUvLi9zZXJ2aWNlcy9hcGkuanM/ZDhjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG5cdGJhc2VVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNhdGNoRXJyID0gKGUsIGZvZkgpID0+IHtcblx0aWYgKGUucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDA0KSB7XG5cdFx0Zm9mSCgpO1xuXHR9XG5cblx0aWYgKGUucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAxKSB7XG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hZG1pblwiO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgY29udGFjdE51bWJlciA9IFwiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJjYXRjaEVyciIsImUiLCJmb2ZIIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjb250YWN0TnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/api.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admin.js"));
module.exports = __webpack_exports__;

})();