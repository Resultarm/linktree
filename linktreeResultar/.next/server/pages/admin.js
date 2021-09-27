"use strict";
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api */ "./services/api.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Resultarmind\\linktree\\rmcsm\\linktreeResultar\\pages\\admin.js";




function Admin() {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: err,
    1: setErr
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");

  const submit = e => {
    e.preventDefault();

    if (username == "" || password == "") {
      return;
    }

    let data = {
      username: username,
      password: password
    };
    _services_api__WEBPACK_IMPORTED_MODULE_1__.default.post("/login", data, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(r => {
      localStorage.setItem("token", r.data.token);
      localStorage.setItem("username", username);
      window.location.href = "/dashboard";
    }).catch(e => {
      var _e$response;

      if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 400) {
        setErr("Algo deu errado!");
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [err, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
      onSubmit: submit,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
        type: "text",
        onChange: e => setUsername(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
        type: "password",
        onChange: e => setPassword(e.target.value)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
        type: "submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 3
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Admin);

/***/ }),

/***/ "./services/api.js":
/*!*************************!*\
  !*** ./services/api.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "catchErr": () => (/* binding */ catchErr),
/* harmony export */   "contactNumber": () => (/* binding */ contactNumber),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://localhost:8000"
});
const catchErr = (e, fofH) => {
  var _e$response, _e$response2;

  if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 404) {
    fofH();
  }

  if (((_e$response2 = e.response) === null || _e$response2 === void 0 ? void 0 : _e$response2.status) === 401) {
    window.location.href = "/admin";
  }
};
const contactNumber = "";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxTQUFTRSxLQUFULEdBQWlCO0FBQ2hCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkosK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFFQSxRQUFNO0FBQUEsT0FBQ08sR0FBRDtBQUFBLE9BQU1DO0FBQU4sTUFBZ0JSLCtDQUFRLENBQUMsRUFBRCxDQUE5Qjs7QUFFQSxRQUFNUyxNQUFNLEdBQUlDLENBQUQsSUFBTztBQUNyQkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUNBLFFBQUlSLFFBQVEsSUFBSSxFQUFaLElBQWtCRSxRQUFRLElBQUksRUFBbEMsRUFBc0M7QUFDckM7QUFDQTs7QUFFRCxRQUFJTyxJQUFJLEdBQUc7QUFBRVQsTUFBQUEsUUFBUSxFQUFFQSxRQUFaO0FBQXNCRSxNQUFBQSxRQUFRLEVBQUVBO0FBQWhDLEtBQVg7QUFDQUosSUFBQUEsdURBQUEsQ0FBUyxRQUFULEVBQW1CVyxJQUFuQixFQUF5QjtBQUN4QkUsTUFBQUEsT0FBTyxFQUFFO0FBQUUsd0JBQWdCO0FBQWxCO0FBRGUsS0FBekIsRUFHRUMsSUFIRixDQUdRQyxDQUFELElBQU87QUFDWkMsTUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLEVBQThCRixDQUFDLENBQUNKLElBQUYsQ0FBT08sS0FBckM7QUFDQUYsTUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLEVBQWlDZixRQUFqQztBQUNBaUIsTUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixZQUF2QjtBQUNBLEtBUEYsRUFRRUMsS0FSRixDQVFTYixDQUFELElBQU87QUFBQTs7QUFDYixVQUFJLGdCQUFBQSxDQUFDLENBQUNjLFFBQUYsNERBQVlDLE1BQVosTUFBdUIsR0FBM0IsRUFBZ0M7QUFDL0JqQixRQUFBQSxNQUFNLENBQUMsa0JBQUQsQ0FBTjtBQUNBO0FBQ0QsS0FaRjtBQWFBLEdBcEJEOztBQXFCQSxzQkFDQztBQUFBLGVBQ0VELEdBREYsZUFFQztBQUFNLGNBQVEsRUFBRUUsTUFBaEI7QUFBQSw4QkFDQztBQUNDLFlBQUksRUFBRSxNQURQO0FBRUMsZ0JBQVEsRUFBR0MsQ0FBRCxJQUFPTixXQUFXLENBQUNNLENBQUMsQ0FBQ2dCLE1BQUYsQ0FBU0MsS0FBVjtBQUY3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFLQztBQUNDLFlBQUksRUFBRSxVQURQO0FBRUMsZ0JBQVEsRUFBR2pCLENBQUQsSUFBT0osV0FBVyxDQUFDSSxDQUFDLENBQUNnQixNQUFGLENBQVNDLEtBQVY7QUFGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELGVBU0M7QUFBTyxZQUFJLEVBQUU7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFnQkE7O0FBRUQsaUVBQWV6QixLQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFFQSxNQUFNRCxHQUFHLEdBQUcyQixtREFBQSxDQUFhO0FBQ3hCRSxFQUFBQSxPQUFPLEVBQUU7QUFEZSxDQUFiLENBQVo7QUFJTyxNQUFNQyxRQUFRLEdBQUcsQ0FBQ3JCLENBQUQsRUFBSXNCLElBQUosS0FBYTtBQUFBOztBQUNwQyxNQUFJLGdCQUFBdEIsQ0FBQyxDQUFDYyxRQUFGLDREQUFZQyxNQUFaLE1BQXVCLEdBQTNCLEVBQWdDO0FBQy9CTyxJQUFBQSxJQUFJO0FBQ0o7O0FBRUQsTUFBSSxpQkFBQXRCLENBQUMsQ0FBQ2MsUUFBRiw4REFBWUMsTUFBWixNQUF1QixHQUEzQixFQUFnQztBQUMvQkwsSUFBQUEsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixRQUF2QjtBQUNBO0FBQ0QsQ0FSTTtBQVVBLE1BQU1XLGFBQWEsR0FBRyxFQUF0QjtBQUVQLGlFQUFlaEMsR0FBZjs7Ozs7Ozs7OztBQ2xCQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rdHJlZS1jbG9uZS8uL3BhZ2VzL2FkbWluLmpzIiwid2VicGFjazovL2xpbmt0cmVlLWNsb25lLy4vc2VydmljZXMvYXBpLmpzIiwid2VicGFjazovL2xpbmt0cmVlLWNsb25lL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9saW5rdHJlZS1jbG9uZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbGlua3RyZWUtY2xvbmUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFwaSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XG5cbmZ1bmN0aW9uIEFkbWluKCkge1xuXHRjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuXHRjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cdGNvbnN0IFtlcnIsIHNldEVycl0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXHRjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRpZiAodXNlcm5hbWUgPT0gXCJcIiB8fCBwYXNzd29yZCA9PSBcIlwiKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IGRhdGEgPSB7IHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG5cdFx0YXBpLnBvc3QoXCIvbG9naW5cIiwgZGF0YSwge1xuXHRcdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHRcdH0pXG5cdFx0XHQudGhlbigocikgPT4ge1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHIuZGF0YS50b2tlbik7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgdXNlcm5hbWUpO1xuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2Rhc2hib2FyZFwiO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCgoZSkgPT4ge1xuXHRcdFx0XHRpZiAoZS5yZXNwb25zZT8uc3RhdHVzID09PSA0MDApIHtcblx0XHRcdFx0XHRzZXRFcnIoXCJBbGdvIGRldSBlcnJhZG8hXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fTtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0e2Vycn1cblx0XHRcdDxmb3JtIG9uU3VibWl0PXtzdWJtaXR9PlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHR0eXBlPXtcInRleHRcIn1cblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0dHlwZT17XCJwYXNzd29yZFwifVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8aW5wdXQgdHlwZT17XCJzdWJtaXRcIn0gLz5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG5cdGJhc2VVUkw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCIsXG59KTtcblxuZXhwb3J0IGNvbnN0IGNhdGNoRXJyID0gKGUsIGZvZkgpID0+IHtcblx0aWYgKGUucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDA0KSB7XG5cdFx0Zm9mSCgpO1xuXHR9XG5cblx0aWYgKGUucmVzcG9uc2U/LnN0YXR1cyA9PT0gNDAxKSB7XG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hZG1pblwiO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgY29udGFjdE51bWJlciA9IFwiXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhcGkiLCJBZG1pbiIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyIiwic2V0RXJyIiwic3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInBvc3QiLCJoZWFkZXJzIiwidGhlbiIsInIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjYXRjaCIsInJlc3BvbnNlIiwic3RhdHVzIiwidGFyZ2V0IiwidmFsdWUiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJjYXRjaEVyciIsImZvZkgiLCJjb250YWN0TnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==