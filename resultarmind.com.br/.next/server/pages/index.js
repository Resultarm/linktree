module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Q8Q":
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "+hHi":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0ODggNDkxLjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OCA0OTEuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4QkMzNEE7fQoJLnN0MXtmaWxsOiM5QzI3QjA7fQoJLnN0MntmaWxsOiM2NzNBQjc7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTI2LjgsNDYuN0w5LjYsMzc2LjZDLTYuMSw0MjAuOCwzMiw0NjUuNSw3OC4xLDQ1N2wzNDQuMy02My41YzQ2LjItOC41LDY1LjgtNjMuOCwzNS40LTk5LjZMMjMwLjcsMjcuNQoJCUMyMDAuMi04LjIsMTQyLjUsMi40LDEyNi44LDQ2Ljd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNODUuNCw2OS41TDM1LjYsNDE2LjFjLTYuNyw0Ni41LDM5LjUsODIuNyw4My4xLDY1LjNsMzI1LTEzMC4yYzQzLjYtMTcuNSw1MS45LTc1LjYsMTUtMTA0LjZMMTgzLjQsMzAuMwoJCUMxNDYuNSwxLjIsOTIsMjMuMSw4NS40LDY5LjV6Ii8+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTExLjgsMzU4VjIwOC43aDE4LjZ2MTMyLjdoNjkuNFYzNThIMTExLjh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTIzOC45LDMxMC41di03NS42aDE3Ljd2NzQuNWMwLDIxLjksMTIuMywzNS44LDM1LjEsMzUuOGMyMi44LDAsMzUuNC0xMy45LDM1LjQtMzUuOHYtNzQuNWgxNy43djc1LjYKCQkJYzAsMzAuNC0xNy45LDUwLjEtNTMsNTAuMUMyNTYuNSwzNjAuNywyMzguOSwzNDAuNywyMzguOSwzMTAuNXoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "1lU9":
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ "2MRG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contactNumber; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:8000/"
});
const contactNumber = "";
/* harmony default export */ __webpack_exports__["b"] = (api);

/***/ }),

/***/ "2vOO":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI4MHB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAyMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMjgwLDEwOC41NjUzNjYgQzExNzUuMzk0MjIsNTIuMTU2ODgzMyAxMDc2LjczOTc5LDMyLjcwOTk3NjYgOTg0LjAzNjcxOSw1MC4yMjQ2NDY0IEM4NDQuNTM5MDg4LDc2LjU4MDM1MzQgNzIzLjQwMDQyOSwxOTkuNDE2MzU5IDQ4Ny4yNjE3MTksMTk5LjQxNjM1OSBDMzMwLjE0ODEzMiwxOTkuNDE2MzU5IDE2Ny43Mjc1NTksMTY5LjQzMjA3NyAyLjIyMDQ0NjA1ZS0xNiwxMDkuNDYzNTExIEwwLDAgTDEyODAsMCBMMTI4MCwxMDguNTY1MzY2IFogTTEyODAsMjk0IEwwLDI5NCBMMTI4MCwyOTQgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="

/***/ }),

/***/ "3OZi":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/deco-wave-light-547dbc75dca0ad954515d9c8305eeed8.png";

/***/ }),

/***/ "3PpT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4NKU":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMjgwIDIwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4MCAyMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzAzMDMwO30KPC9zdHlsZT4KPHRpdGxlPkNvbWJpbmVkIFNoYXBlPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxnIGlkPSJQYWdlLTEiPgoJPGcgaWQ9IkFydGJvYXJkIj4KCQk8cGF0aCBpZD0iQ29tYmluZWQtU2hhcGUiIGNsYXNzPSJzdDAiIGQ9Ik0xMjgwLDEwOC42Yy0xMDQuNi01Ni40LTIwMy4zLTc1LjktMjk2LTU4LjNDODQ0LjUsNzYuNiw3MjMuNCwxOTkuNCw0ODcuMywxOTkuNAoJCQljLTE1Ny4xLDAtMzE5LjUtMzAtNDg3LjMtOTBWMGgxMjgwVjEwOC42eiBNMTI4MCwyOTRIMEgxMjgweiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "4ZJ9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
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

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
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


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6Yxu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "6ce9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Reply");

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

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

/***/ "9E4/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Zoom");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9pO5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FormatQuote");

/***/ }),

/***/ "9qvJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "AeAN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Notification_Notification; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Snackbar"
var Snackbar_ = __webpack_require__("D4mc");
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "@material-ui/core/SnackbarContent"
var SnackbarContent_ = __webpack_require__("n1EF");
var SnackbarContent_default = /*#__PURE__*/__webpack_require__.n(SnackbarContent_);

// EXTERNAL MODULE: external "@material-ui/core/Slide"
var Slide_ = __webpack_require__("mz+e");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./components/Notification/notification-style.js

const notificationStyles = Object(styles_["makeStyles"])(theme => ({
  notification: {
    width: '95%',
    [theme.breakpoints.up('lg')]: {
      width: '80%'
    },
    '& > div': {
      width: '100%',
      color: theme.palette.primary.dark,
      background: theme.palette.primary.light,
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 4)
      },
      '& > div:first-child': {
        [theme.breakpoints.up('sm')]: {
          flex: 1,
          marginRight: theme.spacing(2)
        },
        [theme.breakpoints.down('xs')]: {
          textAlign: 'center'
        }
      }
    }
  },
  button: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 150
    }
  },
  action: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: 0,
      margin: 0
    }
  }
}));
/* harmony default export */ var notification_style = (notificationStyles);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// CONCATENATED MODULE: ./components/Notification/Notification.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










function TransitionUp(props) {
  return __jsx(Slide_default.a, _extends({}, props, {
    direction: "up"
  }));
}

function Notification(props) {
  const {
    t
  } = props;
  const classes = notification_style();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(true);

  const handleClose = () => {
    setOpen(false);
  };

  return __jsx(Snackbar_default.a, {
    TransitionComponent: TransitionUp,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    classes: {
      root: classes.notification
    },
    open: open,
    onClose: handleClose
  }, __jsx(SnackbarContent_default.a, {
    message: __jsx(Typography_default.a, {
      id: "message-id"
    }, t('common:notif_msg')),
    classes: {
      action: classes.action
    },
    action: __jsx(Button_default.a, {
      color: "secondary",
      variant: "contained",
      className: classes.button,
      onClick: handleClose
    }, t('common:accept'))
  }));
}

/* harmony default export */ var Notification_Notification = (Object(i18n["withTranslation"])(['common'])(Notification));
// CONCATENATED MODULE: ./components/Notification/index.js


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "D+hd":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Language");

/***/ }),

/***/ "D4mc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "DRgV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),

/***/ "DbTw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useTextAlign; });
/* unused harmony export useFloat */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useHidden; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useTextAlign = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
});
const useFloat = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  }
});
const useText = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: '72px',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
      lineHeight: '60px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 28,
      lineHeight: '44px'
    }
  },
  title2: {
    fontSize: 36,
    lineHeight: '56px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      lineHeight: '36px'
    }
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: '44px',
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
      lineHeight: '36px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      lineHeight: '28px'
    }
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 22,
    lineHeight: '32px',
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
      lineHeight: '32px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      lineHeight: '24px'
    }
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px'
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '22px'
    }
  }
}));
const useHidden = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  lgDown: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  mdDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  smDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  xsDown: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  lgUp: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  smUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));

/***/ }),

/***/ "Ek77":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowUpward");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "H6h4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const link = {
  saas: {
    home: '/',
    contact: '/contact',
    login: '/login',
    register: '/register'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (link);

/***/ }),

/***/ "HXcA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Uynj");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("DRgV");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Hd3h");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("h1YJ");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("D+hd");
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("lj8g");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("3PpT");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("cPsG");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("OdWO");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("ZVla");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("x54t");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("MCme");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("EmCc");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("+hHi");
/* harmony import */ var _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("zwGQ");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("k7Sn");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("z/Yf");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("2MRG");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "body2",
    display: "block",
    align: "center",
    color: "textSecondary"
  }, "\xA9\xA0", _public_text_brand__WEBPACK_IMPORTED_MODULE_19___default.a.saas.footerText);
}

const footers = [{
  title: "Company",
  description: ["Team", "History", "Contact us", "Locations"],
  link: ["#team", "#history", "#contact-us", "#locations"]
}, {
  title: "Resources",
  description: ["Resource", "Resource name", "Another resource", "Final resource"],
  link: ["#resource", "#resource-name", "#another-resource", "#final-resource"]
}, {
  title: "Legal",
  description: ["Privacy policy", "Terms of use", "Terms Condition"],
  link: ["#privacy-policy", "#terms-of-use"]
}];

function Footer(props) {
  const {
    0: ctn,
    1: setCtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const classes = Object(_footer_style__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"])();
  const {
    invert
  } = props;
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11___default()(theme.breakpoints.up("md"));
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11___default()(theme.breakpoints.down("sm"));
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    lang: "eng"
  });
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setUser(window.location.host.split(".")[0].split(":")[0]);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValues({
      lang: _i18n__WEBPACK_IMPORTED_MODULE_20__["i18n"].language
    });
    setCtn(document.getElementById("main-wrap"));
  }, []);

  function handleChange(event) {
    setValues(oldValues => _objectSpread(_objectSpread({}, oldValues), {}, {
      [event.target.name]: event.target.value
    }));

    if (event.target.value === "ara") {
      _i18n__WEBPACK_IMPORTED_MODULE_20__["i18n"].changeLanguage("ara");
      props.toggleDir("rtl");
    } else {
      _i18n__WEBPACK_IMPORTED_MODULE_20__["i18n"].changeLanguage(event.target.value);
      props.toggleDir("ltr");
    }
  }

  const {
    0: imageP,
    1: setImageP
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _services_api__WEBPACK_IMPORTED_MODULE_22__[/* default */ "b"].get("read-logo/" + user).then(r => {
      setImageP(r.data.file_path);
    }).catch(e => {
      var _e$response;

      if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 404) {}
    });
  }, [user]);
  const {
    0: footerData,
    1: setFooter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    social_media: []
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _services_api__WEBPACK_IMPORTED_MODULE_22__[/* default */ "b"].get("read-footer/" + user).then(r => {
      setFooter(r.data);
    }).catch(e => {
      var _e$response2;

      if (((_e$response2 = e.response) === null || _e$response2 === void 0 ? void 0 : _e$response2.status) === 404) {}
    });
  }, [user]);
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    maxWidth: "lg",
    component: "footer",
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.footer, invert && classes.invert)
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 4
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 3
  }, __jsx("div", {
    className: classes.logo
  }, __jsx("img", {
    src: `${_services_api__WEBPACK_IMPORTED_MODULE_22__[/* default */ "b"].defaults.baseURL}${imageP.substring(1)}`,
    alt: "logo"
  }), " ")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 6
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 4,
    justify: "space-evenly"
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 3,
    className: classes.siteMapItem
  }, isDesktop && __jsx("div", null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "h6",
    className: classes.title,
    color: "textPrimary",
    gutterBottom: true
  }, "Address"), __jsx("ul", null, __jsx("li", null, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default.a, {
    variant: "subtitle1",
    color: "textSecondary"
  }, footerData.street)), __jsx("li", null, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default.a, {
    variant: "subtitle1",
    color: "textSecondary"
  }, footerData.phone_number)), __jsx("li", null, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default.a, {
    variant: "subtitle1",
    color: "textSecondary"
  }, footerData.contact)))), isMobile && __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    square: true,
    classes: {
      root: classes.accordionRoot
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_6___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: classes.accordionIcon
    }),
    "aria-controls": "panel1a-content",
    id: "panel1a-header",
    classes: {
      content: classes.accordionContent
    }
  }, __jsx("strong", null, "Address")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx("ul", null, __jsx("li", null, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default.a, {
    variant: "subtitle1",
    color: "textSecondary"
  }, footerData.street)), __jsx("li", null, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default.a, {
    variant: "subtitle1",
    color: "textSecondary"
  }, footerData.phone_number)), __jsx("li", null, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default.a, {
    variant: "subtitle1",
    color: "textSecondary"
  }, footerData.contact)))))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 3
  }, __jsx("div", {
    className: classes.socmed
  }, footerData.social_media.map((item, index) => __jsx("a", {
    key: index,
    href: item.url
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
    "aria-label": index,
    className: classes.margin,
    size: "small"
  }, __jsx("i", {
    className: item.name
  })))), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
    "aria-label": "TW",
    className: classes.margin,
    size: "small"
  }, __jsx("i", {
    className: "ion-logo-twitter"
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
    "aria-label": "IG",
    className: classes.margin,
    size: "small"
  }, __jsx("i", {
    className: "ion-logo-instagram"
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
    "aria-label": "LI",
    className: classes.margin,
    size: "small"
  }, __jsx("i", {
    className: "ion-logo-linkedin"
  }))), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: values.lang,
    onChange: handleChange,
    MenuProps: {
      container: ctn
    },
    startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.icon,
      position: "start"
    }, __jsx(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_8___default.a, null)),
    className: classes.selectLang,
    input: __jsx(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_14___default.a, {
      labelWidth: 200,
      name: "lang",
      id: "outlined-lang-simple"
    })
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15___default.a, {
    value: "eng"
  }, "English"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15___default.a, {
    value: "deu"
  }, "Deutsch"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15___default.a, {
    value: "ara"
  }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0651\u0629"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15___default.a, {
    value: "ind"
  }, "Bahasa Indonesia"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15___default.a, {
    value: "prt"
  }, "Portugu\xEAs"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15___default.a, {
    value: "zho"
  }, "\u7B80\u4F53\u4E2D\u6587")))));
}

Footer.defaultProps = {
  invert: false,
  toggleDir: () => {}
};
/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "Hd3h":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Jro0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionDetails");

/***/ }),

/***/ "K0LP":
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ "Lp4D":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ButtonBase");

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "Ogzj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Header_Header; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__("k094");
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);

// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__("+Q8Q");
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);

// EXTERNAL MODULE: external "@material-ui/core/Popover"
var Popover_ = __webpack_require__("fA+V");
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_);

// EXTERNAL MODULE: external "@material-ui/icons/Settings"
var Settings_ = __webpack_require__("XnMA");
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__("9qvJ");
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListSubheader"
var ListSubheader_ = __webpack_require__("XfbO");
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__("GLYF");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemSecondaryAction"
var ListItemSecondaryAction_ = __webpack_require__("ubCc");
var ListItemSecondaryAction_default = /*#__PURE__*/__webpack_require__.n(ListItemSecondaryAction_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core/Switch"
var Switch_ = __webpack_require__("lOiU");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: external "@material-ui/core/styles/colorManipulator"
var colorManipulator_ = __webpack_require__("oOPP");

// EXTERNAL MODULE: ./public/images/flag-logo.png
var flag_logo = __webpack_require__("VnM+");
var flag_logo_default = /*#__PURE__*/__webpack_require__.n(flag_logo);

// CONCATENATED MODULE: ./components/Header/header-style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag_logo_default.a}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ara"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zho"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="eng"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="deu"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="ind"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="prt"]': {
    backgroundPosition: '0 -79px'
  }
};
const headerStyles = Object(styles_["makeStyles"])(theme => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  invert: {
    color: theme.palette.text.primary,
    '& $mobileMenu': {
      '& $bar': {
        backgroundColor: theme.palette.text.secondary,
        '&:after, &:before': {
          backgroundColor: theme.palette.text.secondary
        }
      }
    },
    '& svg': {
      fill: theme.palette.text.primary
    }
  },
  fixed: {},
  textBtn: {},
  header: {
    position: 'fixed',
    color: theme.palette.common.white,
    background: 'none',
    boxShadow: 'none',
    transition: 'all 0.5s ease-out',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0
      }
    },
    '&$fixed': {
      background: Object(colorManipulator_["darken"])(theme.palette.primary.dark, 0.3),
      '& $logo': {
        '& a': {
          color: 'transparent',
          fontSize: 0
        },
        '& img': {
          height: 48,
          width: 48,
          marginBottom: 0
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0),
        '& $button': {
          padding: theme.spacing(0.5, 2)
        }
      },
      '& $textBtn': {
        color: theme.palette.common.white
      },
      '& ul': {
        '& li': {
          '& a': {
            color: theme.palette.common.white
          }
        }
      },
      '& $setting': {
        '& $icon': {
          '& svg': {
            fill: theme.palette.common.white
          }
        }
      },
      '& $mobileMenu': {
        '& $bar': {
          backgroundColor: theme.palette.common.white,
          '&:after, &:before': {
            backgroundColor: theme.palette.common.white
          }
        }
      }
    },
    '&$openDrawer': {
      zIndex: 1600
    },
    '&$invert': {
      '& $logo': {
        '& a': {
          color: theme.palette.text.primary
        }
      },
      '& $textBtn': {
        color: theme.palette.text.primary
      },
      '& ul': {
        '& li': {
          '& a': {
            color: theme.palette.text.primary
          }
        }
      },
      '& $setting': {
        '& $icon': {
          '& svg': {
            fill: theme.palette.text.primary
          }
        }
      }
    }
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      padding: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2, 0)
      },
      display: 'flex'
    }
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      color: theme.palette.common.white,
      alignItems: 'center',
      transition: 'color 0.5s ease-out',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      margin: '0 auto',
      transition: 'all 0.3s ease-out',
      marginBottom: theme.spacing(),
      width: 64,
      height: 64,
      [theme.breakpoints.down('xs')]: {
        height: 48,
        width: 48
      }
    }
  },
  active: {},
  button: {
    width: theme.spacing(20)
  },
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1)
      }
    },
    '& a': {
      color: theme.palette.common.white,
      marginTop: theme.spacing(0.5),
      fontSize: 16,
      fontWeight: theme.typography.fontWeightMedium,
      boxShadow: 'none',
      position: 'relative',
      margin: theme.spacing(0, 1)
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
      '& li': {
        margin: theme.spacing(0, 1),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'capitalize',
          minWidth: 0,
          padding: '6px',
          background: 'none !important',
          '&:after': {
            content: '""',
            height: 5,
            position: 'absolute',
            borderRadius: 5,
            width: '0%',
            margin: '0 auto',
            bottom: -5,
            transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
          },
          '&:hover': {
            transition: 'all 0.3s ease-out',
            opacity: 0.5,
            '&:after': {
              width: 20,
              background: theme.palette.common.white
            }
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.secondary.light,
            '&:after': {
              background: theme.palette.common.white,
              width: 20
            }
          }
        }
      }
    }
  },
  langMenu: {
    textTransform: 'capitalize',
    '& i': _objectSpread({}, flagIcon)
  },
  icon: {},
  setting: {
    '& $icon': {
      transition: 'all 0.3s ease',
      color: theme.palette.common.white
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  },
  modeMenu: {
    textTransform: 'capitalize'
  },
  bar: {},
  menu: {},
  openDrawer: {},
  paperNav: {
    width: '100%',
    background: theme.palette.type === 'dark' ? Object(colorManipulator_["darken"])(theme.palette.primary.dark, 0.5) : theme.palette.primary.dark,
    [theme.breakpoints.up(680)]: {
      width: 300
    }
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    '& $bar': {
      backgroundColor: theme.palette.common.white,
      '&:after, &:before': {
        backgroundColor: theme.palette.common.white
      }
    },
    '&[class*="is-active"]': {
      '& $bar': {
        backgroundColor: `${theme.palette.common.white} !important`,
        '&:after, &:before': {
          backgroundColor: `${theme.palette.common.white} !important`
        }
      }
    }
  },
  mobileNav: {
    background: Object(colorManipulator_["darken"])(theme.palette.primary.dark, 0.3),
    height: '100%',
    '& $menu': {
      padding: theme.spacing(0, 5),
      overflow: 'auto',
      top: 90,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 90px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      }
    }
  },
  menuList: {
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    '& span': {
      fontSize: 24
    }
  },
  dividerSidebar: {
    background: 'rgba(255, 255, 255, 0.2)',
    margin: theme.spacing(3, 0)
  }
}));
/* harmony default export */ var header_style = (headerStyles);
// CONCATENATED MODULE: ./components/Header/Settings.js
var __jsx = external_react_default.a.createElement;


















let themeType = 'light';

if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Settings(props) {
  const {
    0: ctn,
    1: setCtn
  } = Object(external_react_["useState"])(null);
  const classes = header_style();
  const {
    t
  } = props;
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(external_react_["useState"])(null);
  const {
    0: isDark,
    1: setDark
  } = Object(external_react_["useState"])(themeType === 'dark');

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  function handleChangeLang(lang) {
    if (lang === 'ara') {
      i18n["i18n"].changeLanguage('ara');
      props.toggleDir('rtl');
    } else {
      i18n["i18n"].changeLanguage(lang);
      props.toggleDir('ltr');
    }

    setAnchorEl(null);
  }

  Object(external_react_["useEffect"])(() => {
    setCtn(document.getElementById('main-wrap'));
  });
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const {
    invert
  } = props;
  return __jsx("div", {
    className: classes.setting
  }, __jsx(IconButton_default.a, {
    "aria-describedby": id,
    "aria-label": "Settings",
    onClick: handleClick,
    className: external_clsx_default()(classes.icon, open && classes.active, invert && classes.invert)
  }, __jsx(Settings_default.a, {
    fontSize: "inherit"
  })), __jsx(Popover_default.a, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    container: ctn,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, __jsx(List_default.a, {
    component: "nav",
    className: classes.modeMenu,
    "aria-label": "Mode-menu",
    subheader: __jsx(ListSubheader_default.a, {
      component: "div"
    }, t('common:saas-landing.header_theme'))
  }, __jsx(ListItem_default.a, null, __jsx(Typography_default.a, {
    component: "div"
  }, __jsx(Grid_default.a, {
    component: "label",
    container: true,
    alignItems: "center",
    spacing: 1
  }, __jsx(Grid_default.a, {
    item: true
  }, t('common:saas-landing.header_light')), __jsx(Grid_default.a, {
    item: true
  }, __jsx(Switch_default.a, {
    checked: isDark,
    onChange: handleChangeMode,
    value: isDark,
    inputProps: {
      'aria-label': 'checkbox'
    }
  })), __jsx(Grid_default.a, {
    item: true
  }, t('common:saas-landing.header_dark')))))), __jsx(Divider_default.a, null), __jsx(List_default.a, {
    component: "nav",
    className: classes.langMenu,
    "aria-label": "Language-menu",
    subheader: __jsx(ListSubheader_default.a, {
      component: "div"
    }, t('common:saas-landing.header_language'))
  }, i18n["i18n"].options.allLanguages && i18n["i18n"].options.allLanguages.map(val => __jsx(ListItem_default.a, {
    key: val,
    role: undefined,
    dense: true,
    button: true,
    onClick: () => handleChangeLang(val)
  }, __jsx(ListItemIcon_default.a, null, __jsx("i", {
    className: val
  })), __jsx(ListItemText_default.a, {
    primary: t('common:' + val)
  }), i18n["i18n"].language === val && __jsx(ListItemSecondaryAction_default.a, null, __jsx(Check_default.a, {
    color: "primary"
  })))))));
}

Settings.defaultProps = {
  invert: false
};
/* harmony default export */ var Header_Settings = (Object(i18n["withTranslation"])(['common', 'saas-landing'])(Settings));
// EXTERNAL MODULE: external "@material-ui/core/SwipeableDrawer"
var SwipeableDrawer_ = __webpack_require__("pN9Q");
var SwipeableDrawer_default = /*#__PURE__*/__webpack_require__.n(SwipeableDrawer_);

// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__("H6h4");

// EXTERNAL MODULE: ./services/api.js
var api = __webpack_require__("2MRG");

// CONCATENATED MODULE: ./components/Header/MobileMenu.js
var MobileMenu_jsx = external_react_default.a.createElement;












function MobileMenu(props) {
  const classes = header_style();
  const {
    toggleDrawer,
    open,
    t
  } = props;
  const {
    0: navMenu,
    1: setNavMenu
  } = Object(external_react_["useState"])([]);
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    setUser(window.location.host.split(".")[0].split(":")[0]);
  }, []);
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get("read-menu/" + user).then(r => {
      setNavMenu(r.data.links);
    }).catch(e => {
      var _e$response;

      if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 404) {}
    });
  }, [user]);

  const SideList = () => MobileMenu_jsx("div", {
    className: classes.mobileNav,
    role: "presentation",
    onClick: toggleDrawer,
    onKeyDown: toggleDrawer
  }, MobileMenu_jsx("div", {
    className: external_clsx_default()(classes.menu, open && classes.menuOpen)
  }, MobileMenu_jsx(List_default.a, {
    component: "nav"
  }, navMenu.map((item, index) => MobileMenu_jsx(ListItem_default.a, {
    button: true,
    component: "a",
    href: `${item.url}`,
    key: index.toString(),
    style: {
      animationDuration: index * 0.15 + "s"
    }
  }, MobileMenu_jsx(ListItemText_default.a, {
    primary: t("" + item.name),
    className: classes.menuList
  }))), MobileMenu_jsx(Divider_default.a, {
    className: classes.dividerSidebar
  }), ["login", "register"].map((item, index) => MobileMenu_jsx(ListItem_default.a, {
    button: true,
    component: "a",
    href: text_link["a" /* default */].saas[item],
    key: index.toString(),
    style: {
      animationDuration: navMenu.length * 0.15 + "s"
    }
  }, MobileMenu_jsx(ListItemText_default.a, {
    primary: t("" + item),
    className: classes.menuList
  }))))));

  return MobileMenu_jsx(SwipeableDrawer_default.a, {
    open: open,
    onClose: toggleDrawer,
    onOpen: toggleDrawer,
    classes: {
      paper: classes.paperNav
    }
  }, MobileMenu_jsx(SideList, null));
}

/* harmony default export */ var Header_MobileMenu = (Object(i18n["withTranslation"])(["saas-landing"])(MobileMenu));
// EXTERNAL MODULE: ./public/images/saas-logo.svg
var saas_logo = __webpack_require__("+hHi");

// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__("zwGQ");
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);

// CONCATENATED MODULE: ./components/Header/Header.js
var Header_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





















let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

const Header_LinkBtn = /*#__PURE__*/external_react_default.a.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return Header_jsx(external_react_anchor_link_smooth_scroll_default.a, _extends({
    to: props.to
  }, props, {
    innerRef: ref
  })); // eslint-disable-line
});

function Header(props) {
  const {
    0: fixed,
    1: setFixed
  } = Object(external_react_["useState"])(false);
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 100;

    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener("scroll", handleScroll);
    console.log();
  }, []);
  const classes = header_style();
  const theme = Object(styles_["useTheme"])();
  const {
    onToggleDark,
    onToggleDir,
    invert,
    t
  } = props;
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down("md"));
  const {
    0: imageP,
    1: setImageP
  } = Object(external_react_["useState"])("");
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    setUser(window.location.host.split(".")[0].split(":")[0]);
  }, []);
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get("read-logo/" + user).then(r => {
      setImageP(r.data.file_path);
    }).catch(e => {
      var _e$response;

      if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 404) {}
    });
  }, [user]);
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get("read-menu/" + user).then(r => {
      setMenuList(r.data.links.map(i => createData(i.name, i.url)));
      setNavMenu(r.data.links);
    }).catch(e => {
      var _e$response2;

      console.log(e);

      if (((_e$response2 = e.response) === null || _e$response2 === void 0 ? void 0 : _e$response2.status) === 404) {}
    });
  }, [user]);
  const {
    0: menuList,
    1: setMenuList
  } = Object(external_react_["useState"])([]);
  const {
    0: navMenu,
    1: setNavMenu
  } = Object(external_react_["useState"])([]);
  const {
    0: openDrawer,
    1: setOpenDrawer
  } = Object(external_react_["useState"])(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return Header_jsx(external_react_["Fragment"], null, isMobile && Header_jsx(Header_MobileMenu, {
    open: openDrawer,
    toggleDrawer: handleOpenDrawer
  }), Header_jsx(AppBar_default.a, {
    component: "header",
    position: "relative",
    id: "header",
    className: external_clsx_default()(classes.header, fixed && classes.fixed, invert && classes.invert, openDrawer && classes.openDrawer)
  }, Header_jsx(Container_default.a, {
    fixed: isDesktop
  }, Header_jsx("div", {
    className: classes.headerContent
  }, Header_jsx("nav", {
    className: classes.navMenu
  }, isMobile && Header_jsx(IconButton_default.a, {
    onClick: handleOpenDrawer,
    className: external_clsx_default()("hamburger hamburger--spin", classes.mobileMenu, openDrawer && "is-active")
  }, Header_jsx("span", {
    className: "hamburger-box"
  }, Header_jsx("span", {
    className: external_clsx_default()(classes.bar, "hamburger-inner")
  }))), Header_jsx("div", {
    className: classes.logo
  }, invert ? Header_jsx(link_default.a, {
    href: text_link["a" /* default */].saas.home
  }, Header_jsx("a", null, Header_jsx("img", {
    src: `${api["b" /* default */].defaults.baseURL}${imageP.substring(1)}`,
    alt: "logo"
  }), !isMobile && brand_default.a.saas.name)) : Header_jsx(external_react_anchor_link_smooth_scroll_default.a, {
    href: "#home"
  }, Header_jsx("img", {
    src: `${api["b" /* default */].defaults.baseURL}${imageP.substring(1)}`,
    alt: "logo"
  }), !isMobile && brand_default.a.saas.name)), isDesktop && Header_jsx(external_react_scrollspy_default.a, {
    items: navMenu,
    currentClassName: "active"
  }, menuList === null || menuList === void 0 ? void 0 : menuList.map(item => Header_jsx("li", {
    key: item.id.toString()
  }, invert ? // eslint-disable-next-line
  Header_jsx(Button_default.a, {
    offset: item.offset || 0,
    href: item.url
  }, t("" + item.name)) : Header_jsx(Button_default.a, {
    component: external_react_anchor_link_smooth_scroll_default.a,
    offset: item.offset || 0,
    href: item.url
  }, t("" + item.name)))))), Header_jsx("nav", {
    className: classes.navMenu
  }, Header_jsx(Hidden_default.a, {
    xsDown: true
  }, Header_jsx(Button_default.a, {
    href: text_link["a" /* default */].saas.login,
    className: classes.textBtn
  }, t("common:saas-landing.header_login")), Header_jsx(Button_default.a, {
    href: text_link["a" /* default */].saas.register,
    variant: "contained",
    color: "secondary",
    className: classes.button
  }, t("common:saas-landing.header_register"))), Header_jsx(Header_Settings, {
    toggleDark: onToggleDark,
    toggleDir: onToggleDir,
    invert: invert
  }))))));
}

Header.defaultProps = {
  sticky: false,
  invert: false
};
/* harmony default export */ var Header_Header = (Object(i18n["withTranslation"])(["saas-landing"])(Header));
// CONCATENATED MODULE: ./components/Header/index.js


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: ./components/Header/index.js + 4 modules
var Header = __webpack_require__("Ogzj");

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/core/ButtonBase"
var ButtonBase_ = __webpack_require__("Lp4D");
var ButtonBase_default = /*#__PURE__*/__webpack_require__.n(ButtonBase_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "react-youtube"
var external_react_youtube_ = __webpack_require__("oLQh");
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_);

// EXTERNAL MODULE: external "@material-ui/core/Zoom"
var Zoom_ = __webpack_require__("9E4/");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_);

// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__("DbTw");

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: ./youtube.js
var youtube = __webpack_require__("o507");
var youtube_default = /*#__PURE__*/__webpack_require__.n(youtube);

// CONCATENATED MODULE: ./public/images/imgAPI.js
const imgAPI = {
  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'],
  photo: ['https://via.placeholder.com/675x900/e1ad92/fff', 'https://via.placeholder.com/967x725/ea6d6d/fff', 'https://via.placeholder.com/1280x849/ea6db7/fff', 'https://via.placeholder.com/967x725/bb6dea/fff', 'https://via.placeholder.com/1048x701/6d6fea/fff', 'https://via.placeholder.com/1050x700/6dc0ea/fff', 'https://via.placeholder.com/970x725/6deaa6/fff', 'https://via.placeholder.com/1051x700/b8de27/fff', 'https://via.placeholder.com/1051x701/de9f27/fff', 'https://via.placeholder.com/1050x700/ef4545/fff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  saas: ['https://via.placeholder.com/1000x625/f2c9ff/757575', 'https://via.placeholder.com/1472x637/5abce4/FFFFFF', 'https://via.placeholder.com/1000x625/e6f8ff/757575', '/images/saas/app-counter.png', 'https://via.placeholder.com/1000x680/b44fd4/FFFFFF', 'https://via.placeholder.com/1000x680/00a7e8/FFFFFF', 'https://via.placeholder.com/1000x680/e91e63/FFFFFF', '/images/saas/desktop_illustration.png']
};
/* harmony default export */ var images_imgAPI = (imgAPI);
// EXTERNAL MODULE: external "@material-ui/core/styles/colorManipulator"
var colorManipulator_ = __webpack_require__("oOPP");

// EXTERNAL MODULE: ./public/images/saas/deco-wave-light.png
var deco_wave_light = __webpack_require__("3OZi");
var deco_wave_light_default = /*#__PURE__*/__webpack_require__.n(deco_wave_light);

// EXTERNAL MODULE: ./public/images/saas/deco-wave-dark.png
var deco_wave_dark = __webpack_require__("XZcB");
var deco_wave_dark_default = /*#__PURE__*/__webpack_require__.n(deco_wave_dark);

// CONCATENATED MODULE: ./components/Banner/banner-style.js




const bannerStyles = Object(styles_["makeStyles"])(theme => ({
  '@keyframes move_wave': {
    '0%': {
      backgroundPosition: '0 0',
      transform: 'scale(2, 1)'
    },
    '50%': {
      backgroundPosition: '50% -50%',
      transform: 'scale(2.3, 1.2)'
    },
    '100%': {
      backgroundPosition: '100% 0',
      transform: 'scale(2, 1)'
    }
  },
  root: {
    background: `linear-gradient(-45deg, ${theme.palette.primary.main} 20%, ${theme.palette.primary.dark} 70%)`,
    position: 'relative',
    padding: theme.spacing(25, 0, 15),
    [theme.breakpoints.up('lg')]: {
      height: 780,
      padding: theme.spacing(30, 0, 5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(25, 0, 10),
      position: 'relative'
    }
  },
  decoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    clip: 'rect(0, auto, auto, 0)',
    '& svg': {
      fill: theme.palette.secondary.main,
      opacity: 0.15,
      position: 'fixed',
      top: 0
    }
  },
  leftDeco: {
    left: theme.direction === 'rtl' ? 'auto' : 0,
    right: theme.direction === 'rtl' ? '-50%' : 'auto',
    width: 1200,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top left'
  },
  rightDeco: {
    left: theme.direction === 'rtl' ? -150 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : 0,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top right'
  },
  sliderWrap: {
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    justifyContent: 'space-between'
  },
  text: {
    maxWidth: 720,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h3': {
      color: theme.palette.common.white,
      [theme.breakpoints.up('lg')]: {
        paddingRight: theme.spacing(5)
      },
      '& strong': {
        fontWeight: theme.typography.fontWeightBold
      }
    },
    '& p': {
      color: theme.palette.common.white,
      margin: theme.spacing(4, 0),
      [theme.breakpoints.up('lg')]: {
        paddingRight: theme.spacing(15)
      }
    }
  },
  btnArea: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      '& > *': {
        marginBottom: theme.spacing(4),
        height: 56
      }
    }
  },
  icon: {},
  playBtn: {
    textTransform: 'uppercase',
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    fontSize: 16,
    background: 'none',
    marginRight: theme.spacing(4),
    '& $icon': {
      borderRadius: '50%',
      transition: 'all 0.3s ease-out',
      width: 40,
      height: 40,
      textAlign: 'center',
      lineHeight: '47px',
      verticalAlign: 'middle',
      marginRight: theme.spacing(),
      background: theme.palette.primary.main
    },
    '& i': {
      color: theme.palette.common.white,
      lineHeight: '22px',
      marginLeft: theme.spacing(0.5),
      fontSize: 24
    },
    '&:hover': {
      '& $icon': {
        background: Object(colorManipulator_["lighten"])(theme.palette.primary.main, 0.3),
        paddingLeft: 6
      }
    }
  },
  illustration: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& img': {
      display: 'block',
      [theme.breakpoints.up('md')]: {
        maxWidth: 400
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: 480
      }
    }
  },
  wave: {
    transform: 'translateZ(0)'
  },
  deco: {
    position: 'absolute',
    height: 110,
    bottom: -35,
    left: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      bottom: -20
    },
    [theme.breakpoints.up('lg')]: {
      bottom: -10
    },
    '& $wave': {
      position: 'absolute',
      height: '100%',
      width: '100%',
      bottom: 0,
      left: 0,
      backgroundImage: theme.palette.type === 'dark' ? `url(${deco_wave_dark_default.a})` : `url(${deco_wave_light_default.a})`,
      backgroundRepeat: 'repeat-x',
      transform: 'scale(2.5, 1)',
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(6, 1)',
        bottom: 20
      }
    }
  },
  waveOne: {
    opacity: 0.2,
    backgroundPosition: '0 0',
    backgroundSize: '50% 100px',
    animationName: '$move_wave',
    animation: '25s linear infinite'
  },
  waveTwo: {
    opacity: 0.2,
    backgroundPosition: '0 0',
    backgroundSize: '50% 120px',
    animationName: '$move_wave',
    animation: '20s linear infinite'
  },
  waveCover: {
    backgroundSize: '51% 100px',
    backgroundPosition: '397px 0',
    transform: 'scale(2, 1)',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'center bottom'
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none',
    '& h2': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      '& > *': {
        padding: theme.spacing()
      },
      '& iframe': {
        width: '100%'
      }
    }
  },
  decoInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  hide: {
    visibility: 'hidden'
  }
}));
/* harmony default export */ var banner_style = (bannerStyles);
// EXTERNAL MODULE: ./services/api.js
var api = __webpack_require__("2MRG");

// CONCATENATED MODULE: ./components/Banner/Banner.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }























const Banner_Transition = /*#__PURE__*/external_react_default.a.forwardRef(function Transition(props, ref) {
  // eslint-disable-line
  return __jsx(Zoom_default.a, _extends({
    ref: ref
  }, props));
});

function Banner(props) {
  const classes = banner_style();
  const text = Object(common["b" /* useText */])();
  const theme = Object(styles_["useTheme"])();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up("lg"));
  const elem = Object(external_react_["useRef"])(null);
  const {
    0: hide,
    1: setHide
  } = Object(external_react_["useState"])(false);
  const {
    t
  } = props;
  const {
    0: player,
    1: setPlayer
  } = Object(external_react_["useState"])([]);
  const {
    0: openPopup,
    1: setOpenPopup
  } = Object(external_react_["useState"])(false);
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    setUser(window.location.host.split(".")[0].split(":")[0]);
  }, []);

  const handleScroll = () => {
    if (!elem.current) {
      return;
    }

    const doc = document.documentElement;
    const elTop = elem.current.offsetTop - 200;
    const elBottom = elTop + elem.current.getBoundingClientRect().height;

    if (doc.scrollTop > elTop && doc.scrollTop < elBottom) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  const handleClickOpen = () => {
    if (youtube_default.a.use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: "https://localhost:3002"
    }
  };
  Object(external_react_["useEffect"])(() => {
    window.addEventListener("scroll", handleScroll);
  });
  const {
    0: banner,
    1: setBanner
  } = Object(external_react_["useState"])({});
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get("read-banner/" + user).then(r => {
      setBanner(r.data);
    }).catch(e => {
      var _e$response;

      if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 404) {}
    });
  }, [user]);
  return __jsx("div", {
    className: classes.root,
    ref: elem
  }, __jsx(Dialog_default.a, {
    open: openPopup,
    TransitionComponent: Banner_Transition,
    keepMounted: true,
    classes: {
      paper: classes.videoPopup
    },
    onClose: handleClose,
    "aria-labelledby": "alert-dialog-slide-title",
    "aria-describedby": "alert-dialog-slide-description"
  }, __jsx(DialogTitle_default.a, {
    id: "alert-dialog-slide-title"
  }, t("" + banner.title), __jsx(IconButton_default.a, {
    onClick: handleClose,
    className: classes.closeBtn
  }, __jsx(Close_default.a, {
    className: classes.icon
  }))), __jsx(DialogContent_default.a, null, youtube_default.a.use && __jsx(external_react_youtube_default.a, {
    videoId: "KxZAdEGpYAw",
    onReady: _onReady,
    opts: opts
  }))), __jsx("div", {
    className: classes.decoration
  }, __jsx("svg", {
    className: classes.leftDeco
  }, __jsx("use", {
    xlinkHref: "/images/saas/deco-bg-left.svg#main"
  })), __jsx("svg", {
    className: classes.rightDeco
  }, __jsx("use", {
    xlinkHref: "/images/saas/deco-bg-right.svg#main"
  }))), __jsx(Container_default.a, {
    fixed: isDesktop
  }, __jsx("div", {
    className: classes.sliderWrap
  }, __jsx("div", {
    className: classes.text
  }, __jsx(Typography_default.a, {
    variant: "h3",
    className: text.title
  }, t("" + banner.title)), __jsx(Typography_default.a, {
    component: "p",
    className: text.subtitle
  }, t("" + banner.content)), __jsx("div", {
    className: classes.btnArea
  }, __jsx(ButtonBase_default.a, {
    className: classes.playBtn,
    onClick: handleClickOpen
  }, __jsx("span", {
    className: classes.icon
  }, __jsx("i", {
    className: "ion-ios-play-outline"
  })), t("common:saas-landing.banner_watchvideo")), __jsx(Button_default.a, {
    variant: "contained",
    color: "secondary",
    size: "large",
    href: "/login"
  }, t("common:saas-landing.getstarted")))), __jsx("div", {
    className: classes.illustration
  }, __jsx("iframe", {
    width: "680px",
    height: "380px",
    src: banner.youtube,
    allow: "autoplay; encrypted-media",
    frameBorder: "0",
    allowFullScreen: true
  })))), __jsx("div", {
    className: classes.deco
  }, __jsx(Hidden_default.a, {
    mdDown: true
  }, __jsx("div", {
    className: external_clsx_default()(classes.decoInner, hide && classes.hide)
  }, __jsx("div", {
    className: external_clsx_default()(classes.wave, classes.waveOne)
  }), __jsx("div", {
    className: external_clsx_default()(classes.wave, classes.waveTwo)
  }))), __jsx("div", {
    className: external_clsx_default()(classes.wave, classes.waveCover)
  })));
}

/* harmony default export */ var Banner_Banner = (Object(i18n["withTranslation"])(["saas-landing"])(Banner));
// CONCATENATED MODULE: ./components/Banner/index.js

// CONCATENATED MODULE: ./components/CompanyLogo/logo-style.js

const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      overflowX: 'auto'
    },
    '& img': {
      height: 64,
      margin: theme.spacing(4),
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      transition: 'all 0.3s ease-out',
      '&:hover': {
        filter: 'none'
      }
    }
  }
}));
/* harmony default export */ var logo_style = (useStyles);
// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.js
var CompanyLogo_jsx = external_react_default.a.createElement;




const logos = ["/images/logos/architect.png", "/images/logos/cloud.png", "/images/logos/coin.png", "/images/logos/mobile.png", "/images/logos/profile.png", "/images/logos/saas.png"];

function CompanyLogo() {
  const classes = logo_style();
  const {
    0: filePath,
    1: setFilePath
  } = Object(external_react_["useState"])("");
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    setUser(window.location.host.split(".")[0].split(":")[0]);
  }, []);
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get("read-logo/" + user).then(r => {
      setFilePath(r.data.file_path);
    }).catch(e => {
      var _e$response;

      if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 404) {}
    });
  }, [user]);
  return CompanyLogo_jsx(Container_default.a, {
    fixed: true
  }, CompanyLogo_jsx("div", {
    className: classes.root
  }, CompanyLogo_jsx("img", {
    src: `${api["b" /* default */].defaults.baseURL}${filePath.substring(1)}`,
    alt: "Logo"
  })));
}

/* harmony default export */ var CompanyLogo_CompanyLogo = (CompanyLogo);
// CONCATENATED MODULE: ./components/CompanyLogo/index.js

// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__("NHP8");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);

// EXTERNAL MODULE: external "react-wow"
var external_react_wow_ = __webpack_require__("1lU9");
var external_react_wow_default = /*#__PURE__*/__webpack_require__.n(external_react_wow_);

// EXTERNAL MODULE: external "@material-ui/icons/Reply"
var Reply_ = __webpack_require__("6ce9");
var Reply_default = /*#__PURE__*/__webpack_require__.n(Reply_);

// EXTERNAL MODULE: external "@material-ui/icons/SupervisorAccount"
var SupervisorAccount_ = __webpack_require__("vpiQ");
var SupervisorAccount_default = /*#__PURE__*/__webpack_require__.n(SupervisorAccount_);

// EXTERNAL MODULE: external "@material-ui/icons/Layers"
var Layers_ = __webpack_require__("g0r0");
var Layers_default = /*#__PURE__*/__webpack_require__.n(Layers_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// CONCATENATED MODULE: ./components/Counter/counter-style.js

const counterStyles = Object(styles_["makeStyles"])(theme => ({
  counterWrap: {
    position: 'relative'
  },
  text: {},
  counterItem: {
    '& p': {
      display: 'flex',
      color: theme.palette.text.secondary,
      alignItems: 'center',
      justifyContent: 'center',
      '& svg': {
        width: 40,
        height: 40,
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
          width: 24,
          height: 24,
          marginRight: theme.spacing()
        }
      }
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    alignItems: 'center',
    justifyContent: 'center',
    '& $text': {
      textAlign: 'center',
      '& h3': {
        position: 'relative',
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
        paddingBottom: theme.spacing(2)
      }
    }
  },
  counterInner: {
    '& > div': {
      position: 'relative',
      '&:after': {
        content: '""',
        borderLeft: `2px solid ${theme.palette.primary.dark}`,
        opacity: 0.2,
        height: 90,
        position: 'absolute',
        right: 0,
        top: 30,
        [theme.breakpoints.down('xs')]: {
          display: 'none'
        }
      }
    },
    '& > div:last-child': {
      '&:after': {
        display: 'none'
      }
    }
  }
}));
/* harmony default export */ var counter_style = (counterStyles);
// CONCATENATED MODULE: ./components/Counter/Counter.js
var Counter_jsx = external_react_default.a.createElement;













function Counter(props) {
  const classes = counter_style();
  const text = Object(common["b" /* useText */])();
  const {
    0: play,
    1: setPlay
  } = Object(external_react_["useState"])(false);
  const {
    t
  } = props;

  const countup = (val, isPlay) => Counter_jsx("span", null, isPlay ? Counter_jsx(external_react_countup_default.a, {
    end: val
  }) : 0);

  const handlePlay = () => {
    setTimeout(() => {
      setPlay(true);
    }, 200);
  };

  return Counter_jsx("div", {
    className: classes.counterWrap
  }, Counter_jsx(Container_default.a, null, Counter_jsx(external_react_wow_default.a, {
    animation: "fadeIn",
    offset: -100,
    callback: handlePlay
  }, Counter_jsx(Grid_default.a, {
    container: true,
    justify: "center",
    alignItems: "center",
    className: classes.counterInner,
    spacing: 6
  }, Counter_jsx(Grid_default.a, {
    md: 4,
    item: true
  }, Counter_jsx("div", {
    className: classes.counterItem
  }, Counter_jsx("div", {
    className: classes.text
  }, Counter_jsx(Typography_default.a, {
    variant: "h3",
    className: text.title
  }, countup(12, play), "\xA0", t('common:saas-landing.counter_month')), Counter_jsx(Typography_default.a, {
    component: "p",
    className: text.subtitle
  }, Counter_jsx(Reply_default.a, null), t('common:saas-landing.counter_free'))))), Counter_jsx(Grid_default.a, {
    md: 4,
    item: true
  }, Counter_jsx("div", {
    className: classes.counterItem
  }, Counter_jsx("div", {
    className: classes.text
  }, Counter_jsx(Typography_default.a, {
    variant: "h3",
    className: text.title
  }, "+", countup(80, play), "M"), Counter_jsx(Typography_default.a, {
    component: "p",
    className: text.subtitle
  }, Counter_jsx(SupervisorAccount_default.a, null), t('common:saas-landing.counter_users'))))), Counter_jsx(Grid_default.a, {
    md: 4,
    item: true
  }, Counter_jsx("div", {
    className: classes.counterItem
  }, Counter_jsx("div", {
    className: classes.text
  }, Counter_jsx(Typography_default.a, {
    variant: "h3",
    className: text.title
  }, "+", countup(180, play), "K"), Counter_jsx(Typography_default.a, {
    component: "p",
    className: text.subtitle
  }, Counter_jsx(Layers_default.a, null), t('common:saas-landing.counter_providers')))))))));
}

/* harmony default export */ var Counter_Counter = (Object(i18n["withTranslation"])(['saas-landing'])(Counter));
// CONCATENATED MODULE: ./components/Counter/index.js

// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__("K0LP");

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__("SJC6");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__("6Yxu");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);

// CONCATENATED MODULE: ./components/Parallax/parallax-style.js

const parallaxStyles = Object(styles_["makeStyles"])(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 0,
    transform: 'scale(0.8)',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  innerParallax: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& figure': {
      height: 500,
      width: '100%',
      display: 'block',
      position: 'absolute'
    },
    '& figure > div': {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      '& svg': {
        position: 'absolute'
      }
    }
  },
  plus: {
    fill: '#ECA426',
    left: -20,
    top: 0,
    width: 100,
    height: 100,
    transform: 'scale(0.5)'
  },
  circle: {
    fill: theme.palette.secondary.main,
    right: 70,
    top: 20,
    width: 120,
    height: 120,
    transform: 'scale(0.5)'
  },
  zigzag: {
    fill: theme.palette.primary.main,
    left: 0,
    bottom: 20,
    width: 250,
    height: 75,
    transform: 'scale(0.5)'
  }
}));
/* harmony default export */ var parallax_style = (parallaxStyles);
// CONCATENATED MODULE: ./components/Parallax/Medium.js
var Medium_jsx = external_react_default.a.createElement;



function ParallaxMedium() {
  const classes = parallax_style();
  return Medium_jsx("div", {
    className: classes.parallaxWrap
  }, Medium_jsx(external_react_scroll_parallax_["ParallaxProvider"], null, Medium_jsx("div", {
    className: classes.innerParallax
  }, Medium_jsx(external_react_scroll_parallax_["Parallax"], {
    y: [-25, 50],
    tagOuter: "figure"
  }, Medium_jsx("svg", {
    className: classes.plus
  }, Medium_jsx("use", {
    xlinkHref: "/images/decoration/plus.svg#main"
  }))), Medium_jsx(external_react_scroll_parallax_["Parallax"], {
    y: [-20, 20],
    tagOuter: "figure"
  }, Medium_jsx("svg", {
    className: classes.circle
  }, Medium_jsx("use", {
    xlinkHref: "/images/decoration/circle.svg#main"
  }))), Medium_jsx(external_react_scroll_parallax_["Parallax"], {
    y: [-40, -10],
    tagOuter: "figure"
  }, Medium_jsx("svg", {
    className: classes.zigzag
  }, Medium_jsx("use", {
    xlinkHref: "/images/decoration/zigzag.svg#main"
  }))))));
}
// CONCATENATED MODULE: ./components/Parallax/Large.js
var Large_jsx = external_react_default.a.createElement;




function ParallaxLarge() {
  const classes = parallax_style();
  return Large_jsx("div", {
    className: external_clsx_default()(classes.parallaxWrap, classes.dotsWrap)
  }, Large_jsx(external_react_scroll_parallax_["ParallaxProvider"], null, Large_jsx("div", {
    className: external_clsx_default()(classes.innerParallax, classes.large)
  }, Large_jsx(external_react_scroll_parallax_["Parallax"], {
    y: [10, 50],
    tagOuter: "figure"
  }, Large_jsx("svg", {
    className: classes.plus
  }, Large_jsx("use", {
    xlinkHref: "/images/decoration/plus.svg#main"
  }))), Large_jsx(external_react_scroll_parallax_["Parallax"], {
    y: [20, 50],
    tagOuter: "figure"
  }, Large_jsx("svg", {
    className: classes.circle
  }, Large_jsx("use", {
    xlinkHref: "/images/decoration/circle.svg#main"
  }))), Large_jsx(external_react_scroll_parallax_["Parallax"], {
    y: [10, 20],
    tagOuter: "figure"
  }, Large_jsx("svg", {
    className: classes.zigzag
  }, Large_jsx("use", {
    xlinkHref: "/images/decoration/zigzag.svg#main"
  }))))));
}
// EXTERNAL MODULE: ./components/Title/title-style.js
var title_style = __webpack_require__("UC/a");

// CONCATENATED MODULE: ./components/Title/Title.js
var Title_jsx = external_react_default.a.createElement;




function Title(props) {
  const classes = Object(title_style["a" /* default */])();
  const {
    children,
    align
  } = props;

  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;

      case 'right':
        return classes.right;

      case 'center':
        return classes.center;

      default:
        return classes.left;
    }
  };

  return Title_jsx("div", {
    className: external_clsx_default()(classes.title, setAlign(align))
  }, Title_jsx(Typography_default.a, {
    variant: "h3"
  }, children));
}
Title.defaultProps = {
  align: 'left'
};
// CONCATENATED MODULE: ./components/Title/index.js

// CONCATENATED MODULE: ./components/Feature/feature-style.js

const featureStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'relative'
  },
  decoration: {
    position: 'absolute',
    width: 1280,
    height: '100%',
    left: -10,
    top: 100,
    '& svg': {
      width: '100%',
      height: 1700,
      fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      opacity: 0.2,
      transform: 'scale(1.3)',
      [theme.breakpoints.up(1400)]: {
        transform: 'scale(2.5, 1)'
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(0.5)',
        transformOrigin: 'center left'
      }
    }
  },
  btn: {},
  figure: {},
  last: {},
  item: {
    position: 'relative',
    minHeight: 320,
    marginBottom: theme.spacing(20),
    '&$last': {
      marginBottom: theme.spacing(10)
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(15)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h6': {
      marginBottom: theme.spacing(5)
    },
    '& section': {
      [theme.breakpoints.up('md')]: {
        position: 'absolute'
      },
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(3, 0)
      },
      '& > div': {
        perspective: 1000
      }
    },
    '& $figure': {
      transformStyle: 'preserve-3d',
      overflow: 'hidden',
      boxShadow: theme.shadows[2],
      borderRadius: theme.rounded.medium,
      background: theme.palette.common.white,
      padding: theme.spacing(1),
      paddingTop: theme.spacing(3),
      margin: theme.spacing(3),
      '& img': {
        width: '100%'
      }
    }
  },
  screen: {
    position: 'relative',
    '& img': {
      width: '90%',
      display: 'block'
    }
  },
  graphic: {
    position: 'relative',
    '& img': {
      width: '90%',
      display: 'block'
    }
  },
  tabContent: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8, 4, 0)
    },
    '& section': {
      position: 'relative'
    }
  },
  selected: {},
  tabLabel: {
    fontSize: 18,
    borderBottom: `1px solid ${theme.palette.text.disabled}`,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14
    },
    '&$selected': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
    }
  },
  illustrationLeft: {
    position: 'relative',
    '& $screen': {
      [theme.breakpoints.up('md')]: {
        marginTop: -50,
        transform: 'rotateY( 30deg )'
      }
    },
    '& $graphic': {
      top: 100,
      left: 70,
      width: 360,
      [theme.breakpoints.up('md')]: {
        transform: 'rotateY( 30deg ) rotateX(-5deg) rotateZ(-2deg)'
      }
    }
  },
  illustrationRight: {
    position: 'relative',
    '& $screen': {
      [theme.breakpoints.up('md')]: {
        left: 20,
        top: -40,
        transform: 'rotateY( -30deg )'
      }
    },
    '& $graphic': {
      right: -60,
      top: 100,
      width: 400,
      [theme.breakpoints.up('md')]: {
        transformStyle: 'preserve-3d',
        transform: 'rotateY( -30deg ) rotateX(-4deg) rotateZ(0deg)'
      }
    }
  },
  illustrationCenter: {
    '& $screen': {
      display: 'block',
      textAlign: 'center',
      marginTop: -50,
      maxWidth: 700,
      margin: '0 auto',
      transform: 'rotateY( 0 ) rotateX(35deg) rotateZ(0deg)',
      '& img': {
        margin: '0 auto',
        width: '100%'
      }
    }
  }
}));
/* harmony default export */ var feature_style = (featureStyles);
// CONCATENATED MODULE: ./components/Feature/Feature.js
var Feature_jsx = external_react_default.a.createElement;






















function Feature(props) {
  var _section$image_path, _section$button_link, _section$button_link2;

  const classes = feature_style();
  const text = Object(common["b" /* useText */])();
  const align = Object(common["c" /* useTextAlign */])();
  const theme = Object(styles_["useTheme"])();
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])(0);
  const {
    t
  } = props;
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    0: section,
    1: setSection
  } = Object(external_react_["useState"])({});
  const {
    0: mSection,
    1: setMSection
  } = Object(external_react_["useState"])({});
  const {
    0: mSectionItem,
    1: setMSectionItem
  } = Object(external_react_["useState"])([]);
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    setUser(window.location.host.split(".")[0].split(":")[0]);
  }, []);
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get("read-section/" + user).then(r => {
      setSection(r.data);
    }).catch(e => {
      var _e$response;

      if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 404) {}
    });
  }, [user]);
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get("read-multi-sections/" + user).then(r => {
      setMSection(r.data);
    }).catch(e => {
      var _e$response2;

      if (((_e$response2 = e.response) === null || _e$response2 === void 0 ? void 0 : _e$response2.status) === 404) {}
    });
  }, [user]);
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get("read-multi-sections-item/" + user).then(r => {
      setMSectionItem(r.data);
    }).catch(e => {
      var _e$response3;

      if (((_e$response3 = e.response) === null || _e$response3 === void 0 ? void 0 : _e$response3.status) === 404) {}
    });
  }, [user]);
  return Feature_jsx("div", {
    className: classes.root
  }, Feature_jsx("div", {
    className: classes.decoration
  }, Feature_jsx("svg", {
    className: classes.wave
  }, Feature_jsx("use", {
    xlinkHref: "/images/saas/deco-bg.svg#main"
  }))), Feature_jsx(Container_default.a, {
    fixed: isDesktop
  }, Feature_jsx(external_react_scroll_parallax_["ParallaxProvider"], null, Feature_jsx("div", {
    className: classes.item
  }, Feature_jsx(Grid_default.a, {
    container: true,
    direction: isMobile ? "column-reverse" : "row"
  }, Feature_jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, Feature_jsx("div", {
    className: classes.illustrationLeft
  }, Feature_jsx(external_react_scroll_parallax_["Parallax"], {
    y: isMobile ? [10, 10] : [10, -25],
    tagOuter: "section"
  }, Feature_jsx("figure", {
    className: external_clsx_default()(classes.figure, classes.screen)
  }, Feature_jsx("img", {
    src: `${api["b" /* default */].defaults.baseURL}${(_section$image_path = section.image_path) === null || _section$image_path === void 0 ? void 0 : _section$image_path.substring(1)}`
    /* imgAPI.saas[0] */
    ,
    alt: "screen"
  }))), Feature_jsx(ParallaxMedium, null))), Feature_jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, Feature_jsx(external_react_wow_default.a, {
    animation: "fadeInLeftShort",
    offset: -100,
    delay: "0.2s",
    duration: "0.4s"
  }, Feature_jsx("div", null, Feature_jsx(Title, {
    align: isMobile ? "center" : "left"
  }, t("" + section.title)), Feature_jsx(Typography_default.a, {
    display: "block",
    component: "h6",
    className: text.subtitle2,
    align: isMobile ? "center" : "left"
  }, t("" + section.content)), Feature_jsx("a", {
    href: (_section$button_link = section.button_link) === null || _section$button_link === void 0 ? void 0 : _section$button_link.url,
    style: {
      textDecoration: "none"
    }
  }, Feature_jsx(Button_default.a, {
    variant: "contained",
    color: "primary",
    size: "large",
    className: classes.btn
  }, t("" + ((_section$button_link2 = section.button_link) === null || _section$button_link2 === void 0 ? void 0 : _section$button_link2.name))))))))), Feature_jsx("div", {
    className: classes.item
  }, Feature_jsx(Grid_default.a, {
    container: true
  }, Feature_jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, Feature_jsx(external_react_wow_default.a, {
    animation: "fadeInRightShort",
    offset: -100,
    delay: "0.2s",
    duration: "0.4s"
  }, Feature_jsx("div", null, Feature_jsx(Title, {
    align: isMobile ? "center" : "right"
  }, t("common:saas-landing.feature_title1"), "\xA0", Feature_jsx("strong", null, t("common:saas-landing.feature_titlestrong2"))), Feature_jsx(Typography_default.a, {
    display: "block",
    component: "h6",
    className: text.subtitle2,
    align: isMobile ? "center" : "right"
  }, t("common:saas-landing.feature_desc2")), Feature_jsx("div", {
    className: isMobile ? align.textCenter : align.textRight
  }, Feature_jsx(Button_default.a, {
    variant: "contained",
    color: "primary",
    size: "large",
    className: classes.btn
  }, t("common:saas-landing.see_detail")))))), Feature_jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, Feature_jsx("div", {
    className: classes.illustrationRight
  }, Feature_jsx(external_react_scroll_parallax_["Parallax"], {
    y: isMobile ? [10, 10] : [10, -25],
    tagOuter: "section"
  }, Feature_jsx("figure", {
    className: external_clsx_default()(classes.figure, classes.screen)
  }, Feature_jsx("img", {
    src: images_imgAPI.saas[2],
    alt: "screen"
  }))), Feature_jsx(Hidden_default.a, {
    smDown: true
  }, Feature_jsx(external_react_scroll_parallax_["Parallax"], {
    y: isMobile ? [-25, -25] : [-25, 25],
    tagOuter: "section"
  }, Feature_jsx("figure", {
    className: classes.graphic
  }, Feature_jsx("img", {
    src: images_imgAPI.saas[3],
    alt: "illustration"
  })))), Feature_jsx(ParallaxMedium, null))))), Feature_jsx("div", {
    className: external_clsx_default()(classes.item, classes.last)
  }, Feature_jsx(Title, {
    align: "center"
  }, t("" + mSection.title)), Feature_jsx("div", {
    className: classes.tab
  }, Feature_jsx(Grid_default.a, {
    container: true,
    spacing: 6
  }, !isMobile && Feature_jsx(Grid_default.a, {
    item: true,
    md: 1,
    xs: 12
  }), Feature_jsx(Grid_default.a, {
    item: true,
    md: 10,
    xs: 12
  }, Feature_jsx(Tabs_default.a, {
    value: value,
    onChange: handleChange,
    indicatorColor: "primary",
    textColor: "primary",
    centered: true
  }, mSectionItem.map((i, index) => Feature_jsx(Tab_default.a, {
    classes: {
      root: classes.tabLabel,
      selected: classes.selected
    },
    key: index,
    label: i.tab.name
  }))), Feature_jsx("div", {
    className: classes.tabContent
  }, mSectionItem.map((i, index) => Feature_jsx("div", {
    key: index,
    style: {
      display: index === value ? "block" : "none"
    }
  }, Feature_jsx("section", null, Feature_jsx(Typography_default.a, {
    component: "h6",
    display: "block",
    align: "center",
    className: text.subtitle2
  }, t("" + i.content)), Feature_jsx("div", {
    className: classes.illustrationCenter
  }, Feature_jsx("figure", {
    className: external_clsx_default()(classes.figure, classes.screen)
  }, Feature_jsx("img", {
    src: `${api["b" /* default */].defaults.baseURL}${i.image_path.substring(1)}`,
    alt: "screen"
  })))))), Feature_jsx(ParallaxLarge, null)))))))));
}

/* harmony default export */ var Feature_Feature = (Object(i18n["withTranslation"])(["saas-landing"])(Feature));
// CONCATENATED MODULE: ./components/Feature/index.js

// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__("4ZJ9");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: external "@material-ui/icons/FormatQuote"
var FormatQuote_ = __webpack_require__("9pO5");
var FormatQuote_default = /*#__PURE__*/__webpack_require__.n(FormatQuote_);

// CONCATENATED MODULE: ./components/Testimonials/testi-style.js

const testiStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(8)
    },
    [theme.breakpoints.down('sm')]: {
      background: `linear-gradient(-45deg, ${theme.palette.primary.main} 20%, ${theme.palette.primary.dark} 70%)`
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(10)
    }
  },
  decoration: {
    position: 'absolute',
    top: 0,
    width: 830,
    height: 600,
    left: -200,
    [theme.breakpoints.down('md')]: {
      left: -360
    },
    '& svg': {
      fill: theme.palette.primary.main,
      transform: 'scale(1.2)',
      width: '100%',
      height: '100%'
    }
  },
  title: {
    position: 'relative',
    margin: theme.spacing(0, 3, 8),
    paddingTop: theme.spacing(7),
    color: theme.palette.common.white,
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  sliderWrap: {
    position: 'relative'
  },
  icon: {
    fontSize: 140,
    position: 'absolute',
    color: theme.palette.common.white,
    opacity: 0.15,
    top: theme.spacing(25),
    [theme.breakpoints.up('sm')]: {
      left: theme.spacing(30)
    }
  },
  carousel: {
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2)
    },
    '& div[class*="slick-active"]': {
      '& p': {
        opacity: 1,
        transition: 'all 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95)',
        transform: 'translate3d(0, 0, 0)'
      }
    }
  },
  item: {
    position: 'relative'
  },
  inner: {
    color: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    },
    '& p': {
      opacity: 0,
      transform: 'translate3d(-10%, 0, 0)',
      marginTop: theme.spacing(5),
      [theme.breakpoints.up('lg')]: {
        marginTop: theme.spacing(10)
      },
      [theme.breakpoints.up('sm')]: {
        width: '60%'
      },
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        height: 75,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }
  },
  profile: {
    textAlign: 'center',
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4, 6)
    }
  },
  avatar: {
    width: 85,
    height: 85,
    margin: '0 auto',
    marginBottom: theme.spacing(3)
  },
  name: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
    '& span': {
      marginTop: theme.spacing(0.5),
      fontSize: 14,
      display: 'block'
    }
  },
  logoWrap: {
    position: 'relative'
  },
  active: {},
  figureBtn: {
    display: 'inline-block',
    padding: theme.spacing(3),
    lineHeight: '150px',
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '30%',
    height: 150,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2)
    },
    '& img': {
      transition: 'all 0.3s ease-out',
      display: 'block',
      width: '100%',
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)'
    },
    '& $active, &:hover': {
      '& img': {
        filter: 'none'
      }
    }
  }
}));
/* harmony default export */ var testi_style = (testiStyles);
// CONCATENATED MODULE: ./components/Testimonials/Testimonials.js
var Testimonials_jsx = external_react_default.a.createElement;

function Testimonials_extends() { Testimonials_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Testimonials_extends.apply(this, arguments); }


















const testiContent = [{
  text: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.",
  avatar: images_imgAPI.avatar[10],
  name: "John Doe",
  title: "Chief Digital Officer",
  logo: "/images/logos/agency.png"
}, {
  text: "Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.",
  avatar: images_imgAPI.avatar[1],
  name: "Jean Doe",
  title: "Chief Digital Officer",
  logo: "/images/logos/architect.png"
}, {
  text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
  avatar: images_imgAPI.avatar[2],
  name: "Jena Doe",
  title: "Graphic Designer",
  logo: "/images/logos/cloud.png"
}, {
  text: "Sed imperdiet enim ligula, vitae viverra justo porta vel.",
  avatar: images_imgAPI.avatar[3],
  name: "Jovelin Doe",
  title: "Senior Graphic Designer",
  logo: "/images/logos/starter.png"
}, {
  text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
  avatar: images_imgAPI.avatar[4],
  name: "Jihan Doe",
  title: "CEO Software House",
  logo: "/images/logos/coin.png"
}, {
  text: "Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.",
  avatar: images_imgAPI.avatar[6],
  name: "Jovelin Doe",
  title: "Senior Graphic Designer",
  logo: "/images/logos/fashion.png"
}, {
  text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
  avatar: images_imgAPI.avatar[7],
  name: "John Doe",
  title: "Senior Graphic Designer",
  logo: "/images/logos/mobile.png"
}, {
  text: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.",
  avatar: images_imgAPI.avatar[10],
  name: "John Doe",
  title: "Chief Digital Officer",
  logo: "/images/logos/profile.png"
}, {
  text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
  avatar: images_imgAPI.avatar[1],
  name: "Jean Doe",
  title: "Chief Digital Officer",
  logo: "/images/logos/saas.png"
}];

function Testimonials(props) {
  var _cards$cards, _cards$cards2;

  const slider = Object(external_react_["useRef"])(null);
  const classes = testi_style();
  const hide = Object(common["a" /* useHidden */])();
  const text = Object(common["b" /* useText */])();
  const {
    0: currentSlide,
    1: setCurSlide
  } = Object(external_react_["useState"])(0);
  const theme = Object(styles_["useTheme"])();
  const {
    t
  } = props;
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down("sm"));
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    afterChange: curSlide => {
      setCurSlide(curSlide);
    }
  };
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    setUser(window.location.host.split(".")[0].split(":")[0]);
  }, []);
  const {
    0: cards,
    1: setCards
  } = Object(external_react_["useState"])({});
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get("read-cards/" + user).then(r => {
      setCards(r.data);
    }).catch(e => {
      var _e$response;

      if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 404) {}
    });
  }, [user]);
  return Testimonials_jsx("div", {
    className: classes.root
  }, Testimonials_jsx(Container_default.a, {
    fixed: isDesktop
  }, Testimonials_jsx(Grid_default.a, {
    container: true,
    spacing: 6
  }, Testimonials_jsx(Grid_default.a, {
    item: true,
    md: 7,
    xs: 12
  }, Testimonials_jsx("div", {
    className: classes.sliderWrap
  }, Testimonials_jsx(Hidden_default.a, {
    smDown: true
  }, Testimonials_jsx("div", {
    className: classes.decoration
  }, Testimonials_jsx("svg", {
    width: "900px",
    height: "618px",
    viewBox: "0 0 900 618",
    version: "1.1"
  }, Testimonials_jsx("defs", null, Testimonials_jsx("linearGradient", {
    x1: "78.2441494%",
    y1: "65.8737759%",
    x2: "10.5892887%",
    y2: "33.8596367%",
    id: "linearGradient-1"
  }, Testimonials_jsx("stop", {
    stopColor: theme.palette.primary.dark,
    offset: "0%"
  }), Testimonials_jsx("stop", {
    stopColor: theme.palette.primary.main,
    offset: "100%"
  }))), Testimonials_jsx("g", {
    stroke: "none",
    strokeWidth: "0",
    fill: "none",
    fillRule: "evenodd"
  }, Testimonials_jsx("path", {
    d: "M442.972909,617.331576 C569.290851,617.331576 618.618612,525.937324 804.142458,549.304771 C989.666303,572.672218 872.7227,109.743835 732.652282,54.307977 C592.581863,-1.12788075 538.308155,61.549598 304.148084,8.36113994 C69.9880137,-44.8273182 0,167.6782 0,308.489881 C0,450.379879 177.014996,617.331576 442.972909,617.331576 Z",
    id: "Oval",
    fill: "url(#linearGradient-1)"
  }))))), Testimonials_jsx(Typography_default.a, {
    variant: "h3",
    align: isMobile ? "center" : "left",
    className: external_clsx_default()(classes.title, text.title2)
  }, t("" + cards.title), Testimonials_jsx("br", null), Testimonials_jsx(Typography_default.a, {
    variant: "h5",
    align: isMobile ? "center" : "left"
  }, t("" + cards.content))), Testimonials_jsx(FormatQuote_default.a, {
    className: classes.icon
  }), Testimonials_jsx("div", {
    className: classes.carousel
  }, Testimonials_jsx(external_react_slick_default.a, Testimonials_extends({
    ref: slider
  }, settings), (_cards$cards = cards.cards) === null || _cards$cards === void 0 ? void 0 : _cards$cards.map((item, index) => Testimonials_jsx("div", {
    key: index.toString(),
    className: classes.item
  }, Testimonials_jsx("div", {
    className: classes.inner
  }, Testimonials_jsx("div", {
    className: classes.profile
  }, Testimonials_jsx(Avatar_default.a, {
    alt: item.name,
    src: item.avatar,
    className: classes.avatar
  }), Testimonials_jsx(Typography_default.a, {
    variant: "h6",
    className: classes.name
  }, item.title)), Testimonials_jsx(Typography_default.a, {
    component: "p",
    className: text.paragraph
  }, item.content)))))))), Testimonials_jsx(Grid_default.a, {
    item: true,
    md: 5,
    xs: 12,
    className: hide.smDown
  }, Testimonials_jsx(Hidden_default.a, {
    smDown: true
  }, Testimonials_jsx("div", {
    className: classes.logoWrap
  }, (_cards$cards2 = cards.cards) === null || _cards$cards2 === void 0 ? void 0 : _cards$cards2.map((item, index) => Testimonials_jsx("div", {
    className: classes.figureBtn,
    key: index.toString()
  }, Testimonials_jsx(Button_default.a, {
    onClick: () => slider.current.slickGoTo(index),
    className: currentSlide === index ? classes.active : ""
  }, Testimonials_jsx("i", {
    style: {
      fontSize: "6rem"
    },
    className: item.icon_class
  }))))))))));
}

/* harmony default export */ var Testimonials_Testimonials = (Object(i18n["withTranslation"])(["saas-landing"])(Testimonials));
// CONCATENATED MODULE: ./components/Testimonials/index.js

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// CONCATENATED MODULE: ./components/Cards/cards-style.js


const cardsStyles = Object(styles_["makeStyles"])(theme => ({
  pricing: {
    position: 'relative',
    borderRadius: 40,
    overflow: 'hidden',
    textAlign: 'center',
    zIndex: 2,
    border: '1px solid transparent',
    maxWidth: 300,
    marginBottom: theme.spacing(3),
    '& ul': {
      padding: theme.spacing(0, 2),
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      '& li': {
        listStyle: 'none',
        fontSize: 16,
        textAlign: 'center',
        padding: theme.spacing(),
        borderBottom: `2px dashed ${theme.palette.divider}`,
        '&:last-child': {
          borderBottom: 'none'
        }
      }
    },
    '&:hover': {
      boxShadow: `0 0 20px 5px ${theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.primary.light}`,
      border: `1px solid ${theme.palette.primary.main}`
    }
  },
  title: {
    padding: theme.spacing(5, 0, 2),
    textTransform: 'uppercase',
    fontSize: 24,
    position: 'relative',
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    '& p': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& h4': {
      color: theme.palette.text.secondary,
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'none',
      marginTop: theme.spacing(2)
    }
  },
  button: {},
  btnArea: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    background: Object(colorManipulator_["fade"])(theme.palette.divider, 0.04),
    '& $button': {
      marginTop: theme.spacing(2)
    },
    '& $desc': {
      fontSize: 14
    }
  },
  basic: {
    '& $title': {
      color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
    },
    '& $btnArea': {
      background: Object(colorManipulator_["fade"])(theme.palette.secondary.main, 0.3)
    },
    '&:hover': {
      borderColor: theme.palette.secondary.main
    }
  },
  value: {
    zIndex: 20,
    border: `1px solid ${theme.palette.primary.main}`,
    '& $title': {
      paddingBottom: 0,
      marginBottom: theme.spacing(8),
      color: theme.palette.common.white,
      height: 90,
      paddingTop: 40,
      '& h4': {
        position: 'relative',
        color: theme.palette.common.white
      },
      '& p': {
        position: 'relative'
      },
      '&:before': {
        content: '""',
        width: '160%',
        position: 'absolute',
        borderRadius: '50%',
        bottom: -60,
        height: 400,
        left: '-30%',
        background: `linear-gradient(-185deg, ${theme.palette.primary.main} 60%, ${theme.palette.primary.dark} 100%)`
      }
    },
    '& ul': {
      paddingTop: theme.spacing(2)
    },
    '&:hover': {
      boxShadow: `0 0 20px 5px ${theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.primary.light}`
    }
  },
  news: {
    display: 'flex',
    direction: 'ltr',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
    '& figure': {
      overflow: 'hidden',
      borderRadius: theme.rounded.small,
      margin: 0,
      marginRight: theme.spacing(2),
      width: 120,
      height: 140,
      [theme.breakpoints.down('xs')]: {
        width: 'auto',
        height: 'auto',
        maxHeight: 200,
        margin: theme.spacing(2, 1)
      },
      '& img': {
        maxHeight: '100%',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          height: 'auto'
        }
      }
    }
  },
  desc: {
    flex: 1,
    '& p': {}
  },
  text: {
    padding: theme.spacing(0, 1.5),
    maxWidth: 400
  },
  type: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary
  },
  btn: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  }
}));
/* harmony default export */ var cards_style = (cardsStyles);
// CONCATENATED MODULE: ./components/Cards/Pricing.js
var Pricing_jsx = external_react_default.a.createElement;






function Pricing(props) {
  const classes = cards_style();
  const {
    title,
    price,
    featureList,
    desc,
    type
  } = props;

  const setType = cardType => {
    switch (cardType) {
      case 'basic':
        return classes.basic;

      case 'value':
        return classes.value;

      default:
        return '';
    }
  };

  return Pricing_jsx(Paper_default.a, {
    className: external_clsx_default()(classes.pricing, setType(type))
  }, Pricing_jsx("div", {
    className: classes.title
  }, Pricing_jsx(Typography_default.a, null, title), Pricing_jsx(Typography_default.a, {
    variant: "h4"
  }, price > 0 && Pricing_jsx("span", null, "$"), price > 0 ? price : 'Free')), Pricing_jsx("ul", null, featureList.map((item, index) => Pricing_jsx("li", {
    key: index.toString()
  }, item))), Pricing_jsx("div", {
    className: classes.btnArea
  }, Pricing_jsx(Typography_default.a, {
    display: "block",
    className: classes.desc
  }, desc), Pricing_jsx(Button_default.a, {
    variant: "contained",
    color: type === 'basic' ? 'secondary' : 'primary',
    className: classes.button,
    size: "large"
  }, "Choose Plan")));
}
Pricing.defaultProps = {
  type: ''
};
// CONCATENATED MODULE: ./components/PricingPlan/pricing-plan-style.js

const pricingStyles = Object(styles_["makeStyles"])(theme => ({
  subtitle: {
    marginBottom: theme.spacing(5)
  },
  decoration: {
    position: 'absolute',
    width: 1280,
    height: 960,
    '& svg': {
      width: 1280,
      height: '100%',
      fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      opacity: 0.2,
      [theme.breakpoints.up('lg')]: {
        transform: 'scale(1.7, 1)'
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(0.5)',
        transformOrigin: 'center left'
      }
    }
  },
  item: {
    '&:hover': {
      zIndex: '21 !important'
    }
  },
  pricingWrap: {
    alignItems: 'center',
    marginTop: theme.spacing(3),
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 5)
    },
    '& > *': {
      margin: theme.spacing(0, -1)
    },
    '& > *:first-child, & > *:last-child': {
      zIndex: 1
    }
  }
}));
/* harmony default export */ var pricing_plan_style = (pricingStyles);
// CONCATENATED MODULE: ./components/PricingPlan/PricingPlan.js
var PricingPlan_jsx = external_react_default.a.createElement;












const feature = {
  basic: ['Nam sollicitudin dignissim', 'Cras convallis lacus', 'Quisque ut metus'],
  best: ['Nam sollicitudin dignissim', 'Cras convallis lacus', 'Quisque ut metus', 'Vivamus sit amet', 'Cras convallis lacus orci'],
  pro: ['Nam sollicitudin dignissim', 'Cras convallis lacus', 'Nulla lobortis nunc', 'Vitae scelerisque', 'Duis sed augue'],
  enterprise: ['Nam sollicitudin dignissim', 'Pellentesque ac bibendum ', 'Vestibulum consequat', 'Donec commodo', 'Duis tristique metus']
};

function PricingPlan(props) {
  const classes = pricing_plan_style();
  const text = Object(common["b" /* useText */])();
  const theme = Object(styles_["useTheme"])();
  const {
    t
  } = props;
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg'));
  return PricingPlan_jsx("div", {
    className: classes.root
  }, PricingPlan_jsx("div", {
    className: classes.decoration
  }, PricingPlan_jsx("svg", {
    fill: "#cccccc"
  }, PricingPlan_jsx("use", {
    xlinkHref: "/images/saas/deco-med-bg.svg#main"
  }))), PricingPlan_jsx(Container_default.a, {
    fixed: isDesktop
  }, PricingPlan_jsx("div", {
    className: classes.item
  }, PricingPlan_jsx(Title, {
    align: "center"
  }, PricingPlan_jsx("strong", null, t('common:saas-landing.pricing_title')))), PricingPlan_jsx(Typography_default.a, {
    className: external_clsx_default()(classes.subtitle, text.subtitle2),
    display: "block",
    align: "center"
  }, t('common:saas-landing.pricing_subtitle')), PricingPlan_jsx("div", {
    className: classes.pricingWrap
  }, PricingPlan_jsx(external_react_wow_default.a, {
    animation: "fadeInUpShort",
    offset: -200,
    delay: "0.2s",
    duration: "0.4s"
  }, PricingPlan_jsx("div", {
    className: classes.item
  }, PricingPlan_jsx(Pricing, {
    title: "Basic",
    price: 0,
    featureList: feature.basic,
    desc: "Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
    type: "basic"
  }))), PricingPlan_jsx(external_react_wow_default.a, {
    animation: "fadeInUpShort",
    offset: -200,
    delay: "0.4s",
    duration: "0.4s"
  }, PricingPlan_jsx("div", {
    className: classes.item
  }, PricingPlan_jsx(Pricing, {
    title: "Best Value",
    price: 24,
    featureList: feature.best,
    desc: "Interdum et malesuada fames ac ante ipsum primis in faucibus. ",
    type: "value"
  }))), PricingPlan_jsx(external_react_wow_default.a, {
    animation: "fadeInUpShort",
    offset: -200,
    delay: "0.6s",
    duration: "0.4s"
  }, PricingPlan_jsx("div", {
    className: classes.item
  }, PricingPlan_jsx(Pricing, {
    title: "Pro",
    price: 54,
    featureList: feature.pro,
    desc: "Interdum et malesuada fames ac ante ipsum primis in faucibus. "
  }))), PricingPlan_jsx(external_react_wow_default.a, {
    animation: "fadeInUpShort",
    offset: -200,
    delay: "0.8s",
    duration: "0.4s"
  }, PricingPlan_jsx("div", {
    className: classes.item
  }, PricingPlan_jsx(Pricing, {
    title: "Enterprise",
    price: 99,
    featureList: feature.enterprise,
    desc: " Interdum et malesuada fames ac ante ipsum primis in faucibus. "
  }))))));
}

/* harmony default export */ var PricingPlan_PricingPlan = (Object(i18n["withTranslation"])(['saas-landing'])(PricingPlan));
// CONCATENATED MODULE: ./components/PricingPlan/index.js

// EXTERNAL MODULE: external "@material-ui/core/Accordion"
var Accordion_ = __webpack_require__("VuiC");
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);

// EXTERNAL MODULE: external "@material-ui/core/AccordionSummary"
var AccordionSummary_ = __webpack_require__("cVsR");
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_);

// EXTERNAL MODULE: external "@material-ui/core/AccordionDetails"
var AccordionDetails_ = __webpack_require__("Jro0");
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_);

// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__("3PpT");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// EXTERNAL MODULE: ./public/images/saas/faq.png
var faq = __webpack_require__("lbiW");
var faq_default = /*#__PURE__*/__webpack_require__.n(faq);

// CONCATENATED MODULE: ./components/Faq/faq-style.js

const faqStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'relative'
  },
  text: {
    position: 'relative',
    zIndex: 20
  },
  illustration: {
    position: 'relative',
    margin: theme.spacing(6, 6, 0),
    '& img': {
      display: 'block',
      width: 280
    }
  },
  accordion: {
    position: 'relative'
  },
  item: {
    marginBottom: theme.spacing(3)
  },
  paper: {
    borderRadius: `${theme.rounded.medium} !important`,
    overflow: 'hidden'
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 2, 1, 0),
    fontSize: 18,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    }
  },
  content: {
    '& $icon': {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(2)
    }
  },
  expanded: {
    background: theme.palette.secondary.main,
    '& $heading': {
      color: theme.palette.common.white,
      paddingTop: 0,
      paddingBottom: 0
    },
    '& $icon': {
      color: theme.palette.common.white,
      transform: 'rotate(180deg)'
    }
  },
  detail: {
    background: theme.palette.background.paper,
    paddingTop: theme.spacing(3),
    '& p': {
      fontSize: 18,
      [theme.breakpoints.down('xs')]: {
        fontSize: 16
      }
    }
  },
  icon: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  }
}));
/* harmony default export */ var faq_style = (faqStyles);
// CONCATENATED MODULE: ./components/Faq/Faq.js
var Faq_jsx = external_react_default.a.createElement;



















const faqData = [{
  q: "Pellentesque ac bibendum tortor?",
  a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "
}, {
  q: "In mi nulla, fringilla vestibulum?",
  a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "
}, {
  q: "Quisque lacinia purus ut libero?",
  a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "
}, {
  q: "Quisque ut metus sit amet augue?",
  a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "
}, {
  q: "Pellentesque ac bibendum tortor?",
  a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "
}];

function Faq(props) {
  const classes = faq_style();
  const text = Object(common["b" /* useText */])();
  const {
    0: expanded,
    1: setExpanded
  } = Object(external_react_["useState"])(0);
  const theme = Object(styles_["useTheme"])();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down("sm"));
  const {
    0: questions,
    1: setQuestions
  } = Object(external_react_["useState"])([]);
  const {
    0: questionSec,
    1: setQuestionSec
  } = Object(external_react_["useState"])({});
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    setUser(window.location.host.split(".")[0].split(":")[0]);
  }, []);
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get("read-question/" + user).then(r => {
      setQuestions(r.data);
    }).catch(e => {
      var _e$response;

      if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 404) {}
    });
  }, [user]);
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get("read-questions/" + user).then(r => {
      setQuestionSec(r.data);
    }).catch(e => {
      var _e$response2;

      if (((_e$response2 = e.response) === null || _e$response2 === void 0 ? void 0 : _e$response2.status) === 404) {}
    });
  }, [user]);
  const {
    t
  } = props;

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return Faq_jsx("div", {
    className: classes.root
  }, Faq_jsx(Container_default.a, {
    fixed: true
  }, Faq_jsx(Grid_default.a, {
    container: true,
    spacing: 6
  }, Faq_jsx(Grid_default.a, {
    item: true,
    md: 6
  }, Faq_jsx(Title, {
    align: isMobile ? "center" : "left"
  }, Faq_jsx("strong", null, questionSec.title)), Faq_jsx(Typography_default.a, {
    className: external_clsx_default()(classes.text, text.subtitle2),
    align: isMobile ? "center" : "left",
    component: "p"
  }, t("" + questionSec.content)), Faq_jsx(Hidden_default.a, {
    smDown: true
  }, Faq_jsx("div", {
    className: classes.illustration
  }, Faq_jsx(ParallaxMedium, null), Faq_jsx("img", {
    src: faq_default.a,
    alt: "illustration"
  })))), Faq_jsx(Grid_default.a, {
    item: true,
    md: 6
  }, Faq_jsx("div", {
    className: classes.accordion
  }, questions.map((item, index) => Faq_jsx("div", {
    className: classes.item,
    key: index.toString()
  }, Faq_jsx(Accordion_default.a, {
    classes: {
      root: classes.paper
    },
    expanded: expanded === index,
    onChange: handleChange(index)
  }, Faq_jsx(AccordionSummary_default.a, {
    classes: {
      content: classes.content,
      expanded: classes.expanded
    }
  }, Faq_jsx(Typography_default.a, {
    className: classes.heading
  }, item.question), Faq_jsx(ExpandMore_default.a, {
    className: classes.icon
  })), Faq_jsx(AccordionDetails_default.a, {
    classes: {
      root: classes.detail
    }
  }, Faq_jsx(Typography_default.a, {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, Faq_jsx("img", {
    width: "50px",
    height: "50px",
    src: `${api["b" /* default */].defaults.baseURL}${item.image_path.substring(1)}`
  }), item.answer))))))))));
}

/* harmony default export */ var Faq_Faq = (Object(i18n["withTranslation"])(["saas-landing"])(Faq));
// CONCATENATED MODULE: ./components/Faq/index.js

// CONCATENATED MODULE: ./components/Cards/News.js
var News_jsx = external_react_default.a.createElement;






function News(props) {
  const classes = cards_style();
  const {
    text,
    img,
    type,
    t
  } = props;
  return News_jsx("div", {
    className: classes.news
  }, News_jsx("figure", null, News_jsx("img", {
    src: img,
    alt: "thumb"
  })), News_jsx("div", {
    className: classes.desc
  }, News_jsx("div", {
    className: classes.text
  }, News_jsx(Typography_default.a, {
    variant: "caption",
    className: classes.type
  }, t('common:saas-landing.' + type)), News_jsx(Typography_default.a, {
    display: "block",
    component: "p"
  }, text)), News_jsx(Button_default.a, {
    size: "small",
    className: classes.btn
  }, t('common:saas-landing.news_readmore'))));
}

/* harmony default export */ var Cards_News = (Object(i18n["withTranslation"])(['saas-landing'])(News));
// CONCATENATED MODULE: ./components/NewsEvent/news-event-style.js

const newsEventStyle = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    maxWidth: 1140,
    margin: '0 auto'
  },
  carousel: {
    '& *:focus': {
      outline: 'none'
    },
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(-7),
      '& li': {
        width: 15,
        height: 10,
        border: `1px solid ${theme.palette.text.disabled}`,
        borderRadius: 15,
        opacity: 0.7,
        transition: 'all 0.5s ease-out',
        '&[class="slick-active"]': {
          background: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
          borderColor: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
          width: 30
        }
      },
      '& li button:before': {
        display: 'none'
      }
    }
  },
  item: {
    padding: theme.spacing()
  }
}));
/* harmony default export */ var news_event_style = (newsEventStyle);
// CONCATENATED MODULE: ./components/NewsEvent/NewsEvent.js
var NewsEvent_jsx = external_react_default.a.createElement;

function NewsEvent_extends() { NewsEvent_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return NewsEvent_extends.apply(this, arguments); }






const newsContent = [{
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: images_imgAPI.photo[1],
  type: 'caption_news'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: images_imgAPI.photo[2],
  type: 'caption_news'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: images_imgAPI.photo[3],
  type: 'caption_event'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: images_imgAPI.photo[4],
  type: 'caption_news'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: images_imgAPI.photo[5],
  type: 'caption_event'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante.',
  img: images_imgAPI.photo[6],
  type: 'caption_news'
}];
const NewsEvent_settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 700,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};

function NewsEvent() {
  const slider = Object(external_react_["useRef"])(null);
  const classes = news_event_style();
  return NewsEvent_jsx("div", {
    className: classes.root
  }, NewsEvent_jsx("div", {
    className: classes.carousel
  }, NewsEvent_jsx(external_react_slick_default.a, NewsEvent_extends({
    ref: slider
  }, NewsEvent_settings), newsContent.map((item, index) => NewsEvent_jsx("div", {
    key: index.toString()
  }, NewsEvent_jsx("div", {
    className: classes.item
  }, NewsEvent_jsx(Cards_News, {
    img: item.img,
    text: item.text,
    type: item.type
  })))))));
}

/* harmony default export */ var NewsEvent_NewsEvent = (NewsEvent);
// CONCATENATED MODULE: ./components/NewsEvent/index.js

// EXTERNAL MODULE: ./components/Footer/Footer.js
var Footer = __webpack_require__("HXcA");

// EXTERNAL MODULE: ./components/Footer/footer-style.js
var footer_style = __webpack_require__("z/Yf");

// CONCATENATED MODULE: ./components/Footer/FooterWithDeco.js
var FooterWithDeco_jsx = external_react_default.a.createElement;









function FooterWithDeco(props) {
  const classes = Object(footer_style["a" /* default */])();
  const text = Object(common["b" /* useText */])();
  const {
    t,
    toggleDir
  } = props;
  const {
    0: access,
    1: setAccess
  } = Object(external_react_["useState"])({});
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get('read-access-link').then(r => {
      setAccess(r.data.link);
    }).catch(e => {
      var _e$response;

      if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 404) {}
    });
  }, []);
  return FooterWithDeco_jsx("div", {
    className: classes.footerDeco
  }, FooterWithDeco_jsx("div", {
    className: classes.decoration
  }, FooterWithDeco_jsx("svg", {
    className: classes.leftDeco
  }, FooterWithDeco_jsx("use", {
    xlinkHref: "/images/saas/deco-bg-left.svg#main"
  })), FooterWithDeco_jsx("svg", {
    className: classes.rightDeco
  }, FooterWithDeco_jsx("use", {
    xlinkHref: "/images/saas/deco-bg-right.svg#main"
  }))), FooterWithDeco_jsx("div", {
    className: classes.action
  }, FooterWithDeco_jsx(Typography_default.a, {
    variant: "h4",
    className: text.title2
  }, t('common:saas-landing.footer_waiting')), FooterWithDeco_jsx("a", {
    href: access.url,
    style: {
      textDecoration: 'none'
    }
  }, FooterWithDeco_jsx(Button_default.a, {
    variant: "contained",
    color: "secondary",
    size: "large"
  }, access.name))), FooterWithDeco_jsx(Footer["a" /* default */], {
    toggleDir: toggleDir
  }));
}

/* harmony default export */ var Footer_FooterWithDeco = (Object(i18n["withTranslation"])(['saas-landing'])(FooterWithDeco));
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__("k094");
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);

// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__("+Q8Q");
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);

// EXTERNAL MODULE: external "@material-ui/core/Fab"
var Fab_ = __webpack_require__("ZVwq");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_);

// EXTERNAL MODULE: external "@material-ui/icons/ArrowUpward"
var ArrowUpward_ = __webpack_require__("Ek77");
var ArrowUpward_default = /*#__PURE__*/__webpack_require__.n(ArrowUpward_);

// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__("vF8F");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// CONCATENATED MODULE: ./components/PageNav/pagenav-style.js

const pagenav = Object(styles_["makeStyles"])(theme => ({
  show: {},
  fab: {
    transform: 'scale(0.5)',
    transition: 'all 0.5s ease',
    opacity: 0,
    background: theme.palette.primary.light,
    fontWeight: theme.typography.fontWeightBold,
    '& svg': {
      fill: theme.palette.primary.dark,
      width: 40,
      height: 40
    },
    '&:hover': {
      '& svg': {
        fill: theme.palette.primary.light
      }
    }
  },
  pageNav: {
    zIndex: 200,
    position: 'fixed',
    bottom: 40,
    right: 40,
    '& nav': {
      transition: 'height 0.5s ease',
      transitionDelay: '0.5s',
      height: 0,
      overflow: 'hidden'
    },
    '&$show': {
      '& $fab': {
        opacity: 1,
        transform: 'scale(1)'
      }
    },
    '& ul': {
      margin: '0 0 16px 22px',
      padding: 0,
      position: 'relative'
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      opacity: 0,
      position: 'relative',
      transition: 'all 0.4s ease',
      '& a': {
        width: 12,
        height: 12,
        boxShadow: theme.shadows[1],
        background: theme.palette.background.paper,
        border: `1px solid ${theme.palette.primary.dark}`,
        display: 'block',
        transition: 'all 0.4s ease',
        borderRadius: '50%'
      },
      '&[class="active"] a': {
        background: theme.palette.primary.dark,
        border: `1px solid ${theme.palette.primary.light}`
      }
    },
    '&:hover': {
      '& li': {
        opacity: 1,
        top: '0 !important'
      },
      '& nav': {
        transitionDelay: '0s',
        height: '100%'
      }
    }
  },
  tooltip: {
    textTransform: 'capitalize',
    background: theme.palette.primary.dark,
    fontSize: 14
  }
}));
/* harmony default export */ var pagenav_style = (pagenav);
// CONCATENATED MODULE: ./components/PageNav/PageNav.js
var PageNav_jsx = external_react_default.a.createElement;

function PageNav_extends() { PageNav_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PageNav_extends.apply(this, arguments); }












function createData(id, name, url) {
  return {
    id,
    name,
    url
  };
}

const PageNav_LinkBtn = /*#__PURE__*/external_react_default.a.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return PageNav_jsx(external_react_anchor_link_smooth_scroll_default.a, PageNav_extends({
    to: props.to
  }, props)); // eslint-disable-line
});

function PageNav(props) {
  const {
    t
  } = props;
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  let flagShow = false;
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    setUser(window.location.host.split(".")[0].split(":")[0]);
  }, []);

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagShow = scroll > 500;

    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener("scroll", handleScroll);
    console.log();
  }, []);
  const classes = pagenav_style();
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get("read-menu/" + user).then(r => {
      setMenuList(r.data.links.map(i => createData(i.name, i.url)));
      setNavMenu(r.data.links);
    }).catch(e => {
      var _e$response;

      console.log(e);

      if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 404) {}
    });
  }, [user]);
  const {
    0: menuList,
    1: setMenuList
  } = Object(external_react_["useState"])([]);
  const {
    0: navMenu,
    1: setNavMenu
  } = Object(external_react_["useState"])([]);
  return PageNav_jsx("div", {
    className: external_clsx_default()(classes.pageNav, show && classes.show)
  }, PageNav_jsx("nav", {
    className: classes.sectionNav
  }, PageNav_jsx(external_react_scrollspy_default.a, {
    items: navMenu,
    currentClassName: "active"
  }, menuList.map((item, index) => PageNav_jsx("li", {
    key: index.toString(),
    style: {
      top: 30 * (navMenu.length - index)
    },
    "data-id": index
  }, PageNav_jsx(Tooltip_default.a, {
    title: t("" + item.name),
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, PageNav_jsx(external_react_anchor_link_smooth_scroll_default.a, {
    href: item.url
  })))))), PageNav_jsx(Tooltip_default.a, {
    title: "To Top",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, PageNav_jsx(Fab_default.a, {
    color: "primary",
    "aria-label": "To top",
    component: PageNav_LinkBtn,
    href: "#home",
    className: classes.fab
  }, PageNav_jsx(ArrowUpward_default.a, null))));
}

/* harmony default export */ var PageNav_PageNav = (Object(i18n["withTranslation"])(["saas-landing"])(PageNav));
// CONCATENATED MODULE: ./components/PageNav/index.js

// EXTERNAL MODULE: ./components/Notification/index.js + 2 modules
var Notification = __webpack_require__("AeAN");

// CONCATENATED MODULE: ./components/About/about-style.js

const aboutStyles = Object(styles_["makeStyles"])(theme => ({
  illustration: {},
  root: {
    position: 'relative',
    color: theme.palette.common.white,
    padding: theme.spacing(10, 0),
    backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '-90deg' : '90deg'}, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} 70%, ${theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper} 70%)`,
    [theme.breakpoints.down('sm')]: {
      background: theme.palette.secondary.main
    },
    '& $illustration': {
      zIndex: 10,
      height: 415,
      position: 'absolute',
      top: -20,
      right: 0,
      [theme.breakpoints.down('md')]: {
        height: '100%'
      }
    }
  },
  bgDeco: {
    position: 'absolute',
    top: 20,
    right: -100,
    width: 600,
    height: 700,
    '& img': {
      transform: 'scale(1.8)',
      opacity: 0.1,
      [theme.breakpoints.down('md')]: {
        transform: 'scale(1.2)'
      }
    }
  },
  illusWrap: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));
/* harmony default export */ var about_style = (aboutStyles);
// CONCATENATED MODULE: ./components/About/About.js
var About_jsx = external_react_default.a.createElement;










function About(props) {
  const classes = about_style();
  const text = Object(common["b" /* useText */])();
  const {
    t
  } = props;
  return About_jsx("div", {
    className: classes.root
  }, About_jsx("div", {
    className: classes.bgDeco
  }, About_jsx("img", {
    src: "",
    alt: "3d home model"
  })), About_jsx(Container_default.a, {
    fixed: true
  }, About_jsx(Grid_default.a, {
    container: true,
    justify: "center",
    spacing: 6
  }, About_jsx(Grid_default.a, {
    item: true,
    md: 7,
    xs: 12
  }, About_jsx(Title, {
    head: t('common:architect-landing.about_title'),
    dark: true
  }), About_jsx(Typography_default.a, {
    className: text.paragraph
  }, t('common:architect-landing.about_desc'))), About_jsx(Grid_default.a, {
    item: true,
    md: 5,
    xs: 12,
    className: classes.illusWrap
  }, About_jsx(Hidden_default.a, {
    smDown: true
  }, About_jsx("div", null, About_jsx("img", {
    src: "",
    alt: "3d home model",
    className: classes.illustration
  })))))));
}

/* harmony default export */ var About_About = (Object(i18n["withTranslation"])(['architect-landing'])(About));
// CONCATENATED MODULE: ./components/About/index.js

// CONCATENATED MODULE: ./components/Cards/cards-style_deco.js

 // import crossDeco from '~/public/images/architect/cross-deco-light.png';

const cards_style_deco_cardsStyles = Object(styles_["makeStyles"])(theme => ({
  generalCard: {
    position: 'relative',
    width: 270,
    height: 345,
    '& figure': {
      margin: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      '& img': {
        width: '100%',
        minHeight: '100%'
      }
    }
  },
  desc: {
    width: 235,
    position: 'absolute',
    bottom: theme.spacing(-3),
    left: 20,
    padding: theme.spacing(2.5),
    backdropFilter: 'saturate(90%) blur(10px)',
    background: Object(colorManipulator_["fade"])(theme.palette.background.paper, 0.7),
    shadow: theme.shadows[8],
    '& h6': {
      marginBottom: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold
    }
  },
  button: {
    bottom: -36,
    margin: '0 auto',
    width: 120,
    display: 'inherit'
  },
  profileCard: {
    color: theme.palette.text.secondary,
    textTransform: 'capitalize',
    margin: `0 auto ${theme.spacing(5)}px`,
    [theme.breakpoints.up('sm')]: {
      width: 275,
      marginBottom: theme.spacing(10)
    },
    '& h5': {
      marginTop: theme.spacing(2),
      color: theme.palette.text.primary
    }
  },
  paper: {
    background: `url(${theme.palette.type === 'dark' ? '/images/architect/bg-team-dark.jpg' : '/images/architect/bg-team.jpg'}) repeat`,
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    height: 270,
    [theme.breakpoints.up('sm')]: {
      width: 215
    },
    [theme.breakpoints.down('xs')]: {
      overflow: 'hidden',
      height: 180
    },
    '& img': {
      position: 'relative',
      zIndex: 10,
      [theme.breakpoints.up('sm')]: {
        height: 315,
        marginLeft: theme.spacing(5)
      },
      [theme.breakpoints.down('xs')]: {
        height: '100%',
        margin: '0 auto',
        top: theme.spacing()
      }
    },
    '&:after': {
      content: '""',
      width: 190,
      height: 215,
      // background: `url(${crossDeco}) repeat transparent 15px -15px`,
      position: 'absolute',
      bottom: 0,
      right: theme.spacing(-10),
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  }
}));
/* harmony default export */ var cards_style_deco = (cards_style_deco_cardsStyles);
// CONCATENATED MODULE: ./components/Cards/Profile.js
var Profile_jsx = external_react_default.a.createElement;





function Profile(props) {
  const classes = cards_style_deco();
  const text = Object(common["b" /* useText */])();
  const {
    photo,
    name,
    title
  } = props;
  return Profile_jsx("div", {
    className: classes.profileCard
  }, Profile_jsx(Paper_default.a, {
    className: classes.paper
  }, Profile_jsx("img", {
    src: photo,
    alt: name
  })), Profile_jsx(Typography_default.a, {
    variant: "h5",
    className: text.subtitle
  }, name), Profile_jsx(Typography_default.a, {
    className: text.caption
  }, title));
}
// CONCATENATED MODULE: ./components/Team/team-style.js

const teamStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    '& > *': {
      position: 'relative'
    }
  },
  deco: {
    position: 'absolute',
    top: theme.spacing(-10),
    left: 0,
    height: 560,
    background: `linear-gradient(${theme.direction === 'rtl' ? '-160deg' : '160deg'}, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light} 50%, ${theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper} 50%)`,
    width: '70%',
    [theme.breakpoints.down('md')]: {
      height: 720
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  teamWrap: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  }
}));
/* harmony default export */ var team_style = (teamStyles);
// CONCATENATED MODULE: ./components/Team/Team.js
var Team_jsx = external_react_default.a.createElement;












/*
const team = [
  {
    photo: imgAPI.architect[9],
    name: 'John Doe',
    title: 'chairman'
  },
  {
    photo: imgAPI.architect[10],
    name: 'jane Doe',
    title: 'Chief Executive Officer'
  },
  {
    photo: imgAPI.architect[11],
    name: 'James Doe',
    title: 'Chief Marketing Officer'
  },
  {
    photo: imgAPI.architect[12],
    name: 'Jihan Doe',
    title: 'Chief Operation Officer'
  },
  {
    photo: imgAPI.architect[13],
    name: 'Johan Doe',
    title: 'Senior Architect'
  },
  {
    photo: imgAPI.architect[14],
    name: 'Jena Doe',
    title: 'Senior Architect'
  },
];
*/

function Featured(props) {
  const classes = team_style();
  const {
    t
  } = props;
  const theme = Object(styles_["useTheme"])();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down("xs"));
  const {
    0: team,
    1: setTeam
  } = Object(external_react_["useState"])({});
  const {
    0: members,
    1: setMembers
  } = Object(external_react_["useState"])([]);
  const {
    0: user,
    1: setUser
  } = Object(external_react_["useState"])("");
  Object(external_react_["useEffect"])(() => {
    setUser(window.location.host.split(".")[0].split(":")[0]);
  }, []);
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get("read-team/" + user).then(r => {
      setTeam(r.data);
    }).catch(e => {
      var _e$response;

      if (((_e$response = e.response) === null || _e$response === void 0 ? void 0 : _e$response.status) === 404) {}
    });
  }, [user]);
  Object(external_react_["useEffect"])(() => {
    api["b" /* default */].get("read-members/" + user).then(r => {
      setMembers(r.data);
    }).catch(e => {
      var _e$response2;

      if (((_e$response2 = e.response) === null || _e$response2 === void 0 ? void 0 : _e$response2.status) === 404) {}
    });
  }, [user]);
  return Team_jsx("div", {
    className: classes.root
  }, Team_jsx("div", {
    className: classes.deco
  }), Team_jsx(Container_default.a, {
    fixed: isDesktop
  }, Team_jsx(external_react_wow_default.a, {
    animation: "fadeInUpShort",
    offset: -300,
    delay: "0.2s",
    duration: "0.6s"
  }, Team_jsx(Title, null, t("" + team.title), Team_jsx(Typography_default.a, {
    variant: "h5",
    align: isMobile ? "center" : "left"
  }, t("" + team.content)))), Team_jsx("div", {
    className: classes.teamWrap
  }, Team_jsx(Grid_default.a, {
    container: true,
    spacing: isMobile ? 2 : 6
  }, members.map((item, index) => Team_jsx(Grid_default.a, {
    item: true,
    md: 4,
    xs: 6,
    key: index.toString()
  }, Team_jsx(external_react_wow_default.a, {
    animation: "fadeInUpShort",
    offset: -50,
    delay: `${0.2 + 0.1 * index}s`,
    duration: "0.3s"
  }, Team_jsx("div", null, Team_jsx(Profile, {
    photo: `${api["b" /* default */].defaults.baseURL}${item.image_path.substring(1)}`,
    name: item.name,
    title: item.function
  })))))))));
}

/* harmony default export */ var Team = (Object(i18n["withTranslation"])(["architect-landing"])(Featured));
// CONCATENATED MODULE: ./components/Team/index.js

// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__("zwGQ");
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);

// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;






















const sectionMargin = margin => margin * 20;

const pages_useStyles = Object(styles_["makeStyles"])(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(6)
    }
  },
  spaceBottomTesti: {
    [theme.breakpoints.up('md')]: {
      marginBottom: sectionMargin(theme.spacing())
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2)
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(6)
    }
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2)
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const classes = pages_useStyles();
  const {
    onToggleDark,
    onToggleDir
  } = props;
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(head_default.a, null, pages_jsx("title", null, brand_default.a.saas.name, "\xA0 - Home Page")), pages_jsx(CssBaseline_default.a, null), pages_jsx("section", {
    id: "home"
  }), pages_jsx("div", {
    className: classes.mainWrap
  }, pages_jsx(Header["a" /* default */], {
    onToggleDark: onToggleDark,
    onToggleDir: onToggleDir
  }), pages_jsx("main", {
    className: classes.containerWrap
  }, pages_jsx("section", {
    id: "home"
  }, pages_jsx(Banner_Banner, null)), pages_jsx("section", null, pages_jsx(CompanyLogo_CompanyLogo, null)), pages_jsx("section", {
    id: "feature",
    className: classes.spaceTop
  }, pages_jsx(Feature_Feature, null)), pages_jsx("section", null, pages_jsx(Team, null)), pages_jsx("section", {
    id: "testimonials",
    className: classes.spaceBottomTesti
  }, pages_jsx(Testimonials_Testimonials, null)), pages_jsx("section", {
    id: "pricing",
    className: classes.spaceTop
  }, pages_jsx(PricingPlan_PricingPlan, null)), pages_jsx("section", {
    id: "faq",
    className: classes.spaceTopShort
  }, pages_jsx(Faq_Faq, null)), pages_jsx("div", {
    className: external_clsx_default()(classes.spaceTopShort, classes.spaceBottomShort)
  }, pages_jsx(NewsEvent_NewsEvent, null))), pages_jsx("section", {
    id: "footer"
  }, pages_jsx(Footer_FooterWithDeco, {
    toggleDir: onToggleDir
  })), pages_jsx(Hidden_default.a, {
    mdDown: true
  }, pages_jsx(Notification["a" /* default */], null)), pages_jsx(Hidden_default.a, {
    mdDown: true
  }, pages_jsx(PageNav_PageNav, null))));
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'saas-landing']
});

/* harmony default export */ var pages = __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "SJC6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "UC/a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const titleStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  left: {
    textAlign: 'left',
    '&:after': {
      left: 0
    }
  },
  right: {
    textAlign: 'right',
    '&:after': {
      right: 0
    }
  },
  center: {
    textAlign: 'center',
    '&:after': {
      left: '50%',
      marginLeft: -35
    }
  },
  title: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(9),
    '& h3': {
      fontSize: 36,
      lineHeight: '56px',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        lineHeight: '44px'
      }
    },
    '&:after': {
      content: '""',
      width: 70,
      height: 12,
      bottom: -32,
      borderRadius: 12,
      background: theme.palette.primary.main,
      position: 'absolute'
    },
    '& strong': {
      color: theme.palette.text.primary
    }
  },
  titleSecondary: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(12),
    textTransform: 'capitalize',
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(10)
    },
    '& h4': {
      color: theme.palette.text.primary,
      fontSize: 36,
      lineHeight: '56px',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        lineHeight: '44px'
      }
    },
    '&:after': {
      content: '""',
      width: 70,
      height: 12,
      bottom: theme.spacing(-4),
      borderRadius: 12,
      background: theme.palette.primary.main,
      position: 'absolute'
    },
    '& strong': {
      color: theme.palette.text.primary
    }
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (titleStyles);

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "VnM+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flag-logo-b6c0a3b52dae2bf98f199dc6022dc689.png";

/***/ }),

/***/ "VuiC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Accordion");

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XZcB":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACQ8AAADNCAMAAAArZeRCAAAAM1BMVEUAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBeLJMlAAAAEHRSTlMAv4DvQBCfIGDfzzBwUI+v39E5bwAADsBJREFUeNrs3F1ymzAUgFEkhPgH7X+1HdfNQyZpmjSOEfY5b2yA+bhcqalFn1Ja4kV4kS9PQ0pzAwDwsLq0XgJoLP8whRyH1DUAAA+jS0MMU/miNmxLagAATm4eYmjLN4xZFAEAZ9WvWyi3EaImAgBOph/yWG4rLFatAYCTeGmh22vzassaAKhd2qbyo/ZBEgEA1erW3Ja3JBEA8By6YS/3k9cGAKAqay531m59AwBQiTm35QhhaAAAjtctU/k8QyIA4NHMuRxsd1MjAHCgYSoVmPw2AwCO0cWxVGJcHMAHAO6u39pSkTYqIgDgrvrD14YUEQDwBc9QQ4oIAPi7Z6khRQQA3Em3lZq1sYFH0qeLeLWHV8pVG17Z49WaLnwiANxeF6vaon7P6PQ9Z9Zd62cLIUzlVqY/mbSklFxhCvBdQzUn7D8yuqGRk5nTGmMOYSz3EULIMQ6mRwD/IYVyEmFuoHpdSjHuYSqH+p1Gygjgk7p616jfkb3dqVafhphDdcPWMewxJtNVgI8M1S8OvdYuDVRmTnGrr4PeCHtcrBkBvKM/za8ya0T8Yu9OkCMHYSgMB4HBxhv3P+10ZqomnUpv7niT+L8z2NRDEnBCSUcQ+i47GWijAcAVKSrNbHFxtH6UWeFu4oqLQrEIAC76U7xiT9MMuqQgUe2vcysVUSsCUDelxaF/Mk0z7K9vJ6ds4O4l3knL2U0AdUrad7gTm1rsKAyGikK3uYlQBKA62o6V3eDHD2AHvf0o9C0UMVQEoBrNXCxgrhobS+Oke2j6Ld4xUwSgCr22A8LMVWN/QWb9VdT3ZQpFAKwbih2OJRvra6osC/3UxYGJIgBW6XqfgxIRdpbaiqaFXuBnMhEAi/ReOkSJCFtLbbTSS16Vj/TOABgzGpyIoEQEstDmujgyYw3ADEujQ5SIsOK8EFnoBVlonQEwwdboECUirCGIuR7yhnxsKRMBf4VPrXwJF9xVoUJjedl3fINYLg1Vn6l/U2bCGtVKYRSJzvnygHcuyhB4Vuq01L/QwXXVWBVNsvd1E/8b6hJGia4ry3gXZWT7cDq9+X1wpESEV6XBxh3tC9E5A5ZqwvDbd5xz5Mr3Mwnm41ApHdVJvCJMtmul+5mJRLCsH8V5rje1pi1VkA/goWaMFWwNHiESAc+ldnJlfU7Yti9GHHpPJn+DLtlTRCLgriaI82U7XPm+DHGIk/dYWRrokl0hEgE3y0K53MH1phZUFIcuZj4z/NBzlmxrMyfOoNvOd9TPvIJzACl18fRnQRg6gI/8elDqmPd68kAk2tdUqsNYNf4LhKEddRPrO7Q59L2eTKv5CZplv5RZlPEpcJjsOdZ3VKw//r2euf3AHcShFXg+MNAmO0pklAgapPYk7/X4yImzW4hD3FYNwpB2nVCi/cPeHWinCQRRAJUQVBQs//+1bc1JT1OtAoHjMnPvNyTrY2d2hrKdyxrL2nZ+sm6IQ0tpBe60DsLQ61XuaClVcyyxku6SaFX9kJpRRCmZM1SKWnM1BTp01VCok4+IG1a4GkXEPM1RGCqJSyLKUliV7Eat0vxJHPpgFBGz9NZxFEcnEcXo91sopCubraApOwY/YhQR3tbHYUwjr1dmy9B9lf+YpYlDV5Wv0wx0UBetNZOIV2qOG7s61ki0rP3AVW0WSnSahsqnt5pXOXQbC0NXrUT0m6VlS7vsCKwX/bfhhyIAI3luKhHtdl7a/836DtTJIlEE4AlhSCL64GnZDes7UCeLpH3TSMR/CEMS0SdPy+6wvgN1sljqvdta7hCG7ms1wH7TFrvH1nYy0yGSw5s62WZ5f89XwpDX91/ppV5ZbX1HGMdi5+3jhGciYeiZytf8bO8D1nfEdd7OWDX0RfCYMDSKKvNMjV8LK+/D0kIdhhmN/JJ56OIUtZcIsyglWN8R1bsW6kgc8QhDrlTX1A08UDmBt6rptFBHIxEhDGm7W815wPqOgLyuj8nze5wN2oj+YYvrc9Z3ZOV1fWTOeObrcz2vqLV8THAZMIoomD7FXXhmEhHC0Eitopmn9sNgFFFKroZSkIiY6px1d6HBMeM0Sf8+/EVF5WooDYkIYcgHvWrZSC4dk3E1lItExDiHzGFIz4e3ZX8YRZSFq6F8JCLyjqCe5qLE4W3Zkk4O32K5GkpKIkIYUuIwiXEcVdgEXA0lJhFhWY8u2J/s3Q1ygjAQBtBShUBRm/uftjMd29GO/4klMe+dAcLHJrtJFdrrPPRAvSClodZJRDQ7gtpw4UzamdGZ0UrNsSxKQ0hECEP+6I0eupFjaa9JaQj3miEMKRE5TL2QSediGZSGkIgwglqJKNkY0XlfL6UhJCKEISWiHHxNDLeql4I4GkARhpSIsniPpLDwLifsLHucNo1vNEkYUiJ6WO/ZSdTpaFnG2EWQiBCGEgxKRMpDavN1UxrCHF6EIa9JTh4gJaL6KA1xk85S3wphSF9QuogSUV1mCx8SEcKQvqC8gjyUSeeBushFRNzDyGqEoUv80ec3yENqjhVZW/mQiBCG9nTeZxSiPKTmWIuwMSoLd+vwox+FIceq8xnkIatuJdzJgZHVuJvsiC2OfEKUh6KIXQHd9UhECEOnaJTOY5CHvtmFLZoj1BjQyK+wsSAcM606gxDloT0H9Yu1HiJIRHybhaGn2r21apCHDmm9L4+768lravgHuH7zznrwbB+N7pmtozx0xLnqsvSmULNnQCPbQRi6wJ5Zmk4eepqVunyqrX0y9iSi1umsv8qeWZJ1lIf+sGlWCnVxDng7mxY2msmus2eWZJKHnmuwaaZ9hEIZWV2J+d1q8P9WrZVQN1EeOkmn2WMMFqEqElH5turE9zGb8TH9Sh46y3jGOzg0RKUkopL146cjQwvqWtrf2EV56BwHFe7islZqJREVypSh5U3tfLvmKA+dY8m9nRPUX+zdWXLjMAxFUUvUTErG/lfb009XkorllFUGHu7Zg+lHDBRiY8rPH7pkTqTZku7IQ4/w3aRvEIYggp+nKzNdMkeS3BYWIw89wmD191gngwYSkRfsknmTYvF+LOShU/hu0ieEIcghEb0fLy66lGHx/jDy0Akkok8IQ5BU+gwXYbcoDPkl39wYjDx0Hl+S/IcjENJYfDiNwlAm6kNEG3noSXw36TcGqKGNRHQCt6J0tIeIeiMPvctG14x1WrhFInqIVbJ8lIeIqpGHnsYc0YuMO8VxODbleYTurfaDwlAguv9aHXnoaSSil5j5Nhnco6t9tdo6QyzTTVMz8tCPsN7LpABS6Nh8uMzM9HRMm+R/Vi3kIQfKkWpQYdwnRoYQR94a7pVGmmSBFcVO8mbkIR+mLGV5quOIZ81Yw73S0HMMxFb0Lgm9kYfcSLBsRmEIUSWr4V6pNgYHFfQ3LdXIQ55oH7mVGyFCS1PDvVBtbNXL0HqacVzJQ97cNWc3eVsECjr9Gu5HDE8jx1T1ZOQhf1a1TyfNC00yqGCQiFMAilPVu5GHfNK5hbJCAjm80UgWgtpU9VzIQ24VgVEFshBEJVh9IAsh1VT1ZuQhz9Yj8DWUUxDStFcfmJ1GsreqDyMPebe1iIdubXeyEOTpdLWvMJCF0hCYql6MPBRBrEg07uzUIw2KRF8aeWsxmS1wK+OvWshDUQRpnA2NFhmy6Zb4d+NXmhkazKjEHncdNyMPBbJOu+djty4HF0LkpLD68BqVG1FeoZvHdyMPRdM1j2UiohDSk3syjBYZnnXcwuqNPBTROi1+Dt5xaBOlceCPrXku4F6qLpwDCLxmthh5KCwPmajufUdlHPjfPd8o0S/27ijHdRAGoCg2TkJCCd7/at/096kapdOmEHrPGqrqBjBMpsIUGS49ZpYjPXRt69xq7ywXrXwMAl+fRJnlYQwwZjZFp4cGIHtZwudYooQAkiiEpXBoEGO8ZjZtTg+NIsqeLJzLis4sigMkETtkGOw1s+r00GC2qidU0WJJK/99wPO2LodBX04hLp7HWHP3s9NDY4oya7EpvMrsppXj0sBL1r2EYRhv8GDAMTN1emhwq1TVYs+VUb5XkAoZBLxPvdRrO1yrgTeo19ktTk4PfZFVRGa9K/a/pHeziPBvB5xlnS97mogNMvzFdpWPgOT0EAB80rZ3/dzOAws3jGH0MbPi9BAAfNy2l2t8NtuNYXp8wanqHOkhAHjKAPeoHmKJRSF8y2tmOTo9BAANyd7+wR1KCCeTzneIc3R6CABai7KnLlaKsunOHWM4wdrFD/yXHKKHAKAT26y2hDbuIcRkKR74hruqc3R6CAD6IlWLhU/Jlnh+B78a/2rGHJ0eAoAuRZk1nbdalK2oCh2EQwa/iSi500MA0LcooprMwhssZkm1si2GVmKPb9Ykp4cA4EJERFVv9mMKh9iPoqq7sBSEPuzdzZndnB4CgEuTx3hyBx3bOpszm50eAgAAHxZvoR9TdXoIAAAcNeLdjNPm9BAAADhqxGPVOTo9BAAAGqk9LBGl6PQQAAA4brwlot2dHgIAAC3VJbQ0bU4PAQCA540zaGbR6SEAANCe5HBU+72yf+zcW2rDMBBAUcnys3Hi2f9q+xNoSk1LSGokc84qLtLM6CEA4FHj56ovH6GHAIBalDkdbi2hhwCAiuQ+HWrKEXoIAKjLr5tm9TwO6SEA4Ls2x4guHxF6CACoUemOKKLhFqGHAIBa7RVRTV9leggA+KmxIuqXCD0EAFSu3Kb0T/ocoYcAgBaMl5RSpTWkhwCAY+S51hrSQwDAUUo3pfeZlwg9BAA0J89DeoepKxF6CABoUhmv6VXzFhF6CABo12tJdB1LhB4CAJq3rVN63nCPIT0EAJzCMs5PNdFlzXGnhwCA01i2rh/Sn4a+yyW+6CEA4FyW3K39lHZN/bqTQnoIADilkvPWPRhzLrFPDwEA6CEAAD0EAKCHAAD0EACAHgIA0EPw2W4dCAAAAAAI8reeYIOiCAB8CADAhwAAfAgAwIcAAHwIAMCHAAB8CADAhwAAfAgAwIcAAHwIAMCHAAB8CADAhwAAfAgAwIcAAHwIAMCHAAB8CADAhwAAXhfA17g2PN0TAAAAAElFTkSuQmCC"

/***/ }),

/***/ "XfbO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "XnMA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZVla":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),

/***/ "ZVwq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPsG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cVsR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionSummary");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
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

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
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
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
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
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
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


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
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
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
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


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

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

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fA+V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
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

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "g0r0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Layers");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

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

/***/ }),

/***/ "h1YJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "k094":
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "k7Sn":
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__("6f9I").default;

module.exports = new NextI18Next({
  defaultLanguage: 'eng',
  otherLanguages: ['deu', 'ind', 'ara', 'prt', 'zho'],
  fallbackLng: 'eng',
  initImmediate: false,
  localePath: 'public/locales',
  react: {
    useSuspense: false
  },
  localeSubpaths: {
    ara: 'ar',
    deu: 'de',
    eng: 'en',
    ind: 'id',
    prt: 'pt',
    zho: 'zh'
  }
});

/***/ }),

/***/ "lOiU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "lbiW":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/faq-db4e1f5683a8681ddd0282b31c9e1765.png";

/***/ }),

/***/ "lj8g":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "mz+e":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "n1EF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

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
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "o507":
/***/ (function(module, exports) {

module.exports = {
  use: true
};

/***/ }),

/***/ "oLQh":
/***/ (function(module, exports) {

module.exports = require("react-youtube");

/***/ }),

/***/ "oOPP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "pN9Q":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "ubCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "vF8F":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vpiQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SupervisorAccount");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z/Yf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oOPP");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_saas_footer_deco_light_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2vOO");
/* harmony import */ var _public_images_saas_footer_deco_light_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_saas_footer_deco_light_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_images_saas_footer_deco_dark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4NKU");
/* harmony import */ var _public_images_saas_footer_deco_dark_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_images_saas_footer_deco_dark_svg__WEBPACK_IMPORTED_MODULE_3__);




const footerStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  link: {
    margin: theme.spacing(1, 1.5)
  },
  invert: {},
  footer: {
    position: 'relative',
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
    '& p': {
      color: theme.palette.common.white
    },
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 14,
        textDecoration: 'none !important',
        color: theme.palette.common.white,
        '&:hover': {
          color: theme.palette.primary.light
        }
      }
    },
    '&$invert': {
      '& p': {
        color: theme.palette.text.primary
      },
      '& li a': {
        color: theme.palette.text.primary
      },
      '& $logo': {
        '& h6': {
          color: theme.palette.primary.dark
        }
      },
      '& $selectLang': {
        color: theme.palette.text.primary,
        '& svg': {
          color: theme.palette.text.primary
        }
      }
    },
    '& $accordionRoot': {
      margin: '0 auto',
      marginTop: theme.spacing(2)
    }
  },
  title: {
    color: theme.palette.common.white,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold
  },
  logo: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    '& img': {
      width: 64,
      marginRight: theme.spacing()
    },
    '& h6': {
      color: theme.palette.common.white
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2)
  },
  socmed: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.primary.dark,
      background: theme.palette.primary.main,
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.common.white
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  icon: {
    '& + div': {
      background: 'none !important',
      padding: theme.spacing(1.5, 1.5, 1.5, 4),
      width: 'calc(100% - 32px)'
    }
  },
  selectLang: {
    margin: '0 auto',
    width: 200,
    display: 'inherit',
    marginTop: theme.spacing(2),
    color: theme.palette.common.white,
    '& $icon': {
      top: 21,
      color: theme.palette.primary.light,
      position: 'relative'
    },
    '& svg': {
      color: theme.palette.primary.light
    },
    '& fieldset': {
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.primary.light, 0.5)} !important`,
      '& legend': {
        top: 6,
        position: 'relative',
        borderTop: `1px solid ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.primary.light, 0.5)}`
      }
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important'
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    color: theme.palette.common.white,
    maxWidth: 480,
    '& svg': {
      fill: theme.palette.common.white
    }
  },
  accordionContent: {
    margin: 0
  },
  accordionIcon: {
    padding: 0
  },
  footerDeco: {
    position: 'relative',
    top: 0,
    background: `linear-gradient(-45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
    paddingTop: theme.spacing(40),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(30)
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(20)
    },
    '&:before': {
      background: `url(${theme.palette.type === 'dark' ? _public_images_saas_footer_deco_dark_svg__WEBPACK_IMPORTED_MODULE_3___default.a : _public_images_saas_footer_deco_light_svg__WEBPACK_IMPORTED_MODULE_2___default.a}) top left no-repeat`,
      backgroundSize: '100% auto',
      top: -3,
      left: 0,
      content: '""',
      width: '100%',
      height: 270,
      position: 'absolute',
      zIndex: 10
    }
  },
  decoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    clip: 'rect(0, auto, auto, 0)',
    '& svg': {
      fill: theme.palette.secondary.main,
      opacity: 0.15,
      position: 'fixed',
      top: 40
    }
  },
  leftDeco: {
    left: theme.direction === 'rtl' ? 'auto' : 0,
    right: theme.direction === 'rtl' ? '-50%' : 'auto',
    width: 1200,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top left'
  },
  rightDeco: {
    left: theme.direction === 'rtl' ? -150 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : 0,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top right'
  },
  action: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.common.white,
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down('xs')]: {
        fontSize: 28,
        lineHeight: '44px'
      }
    }
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (footerStyles);

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "zwGQ":
/***/ (function(module, exports) {

module.exports = {
  saas: {
    name: 'Software',
    desc: 'Luxiren Saas - React Single Landing Page Template',
    prefix: 'luxiren',
    footerText: 'Luxiren Theme 2021',
    logoText: 'Luxiren Software',
    projectName: 'Software',
    url: 'luxireact.ux-maestro.com/saas',
    img: '/static/images/saas-logo.png',
    notifMsg: 'Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.'
  }
};

/***/ })

/******/ });