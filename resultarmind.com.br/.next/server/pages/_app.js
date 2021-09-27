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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__(/*! next-i18next */ "next-i18next").default;

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

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://nextjs.org/docs/messages/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://nextjs.org/docs/messages/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jss */ "jss");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-page-transitions */ "next-page-transitions");
/* harmony import */ var next_page_transitions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jss-rtl */ "jss-rtl");
/* harmony import */ var jss_rtl__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jss_rtl__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-top-loading-bar */ "react-top-loading-bar");
/* harmony import */ var react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _theme_appTheme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../theme/appTheme */ "./theme/appTheme.js");
/* harmony import */ var _vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../vendors/hamburger-menu.css */ "./vendors/hamburger-menu.css");
/* harmony import */ var _vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _node_modules_animate_css_animate_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../node_modules/animate.css/animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var _node_modules_animate_css_animate_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_node_modules_animate_css_animate_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../vendors/animate-extends.css */ "./vendors/animate-extends.css");
/* harmony import */ var _vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_vendors_animate_extends_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _vendors_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../vendors/top-loading-bar.css */ "./vendors/top-loading-bar.css");
/* harmony import */ var _vendors_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_vendors_top_loading_bar_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _vendors_page_transition_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../vendors/page-transition.css */ "./vendors/page-transition.css");
/* harmony import */ var _vendors_page_transition_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_vendors_page_transition_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../vendors/slick/slick.css */ "./vendors/slick/slick.css");
/* harmony import */ var _vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_vendors_slick_slick_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../vendors/slick/slick-theme.css */ "./vendors/slick/slick-theme.css");
/* harmony import */ var _vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_vendors_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_18__);
var _jsxFileName = "D:\\Resultarmind\\linktree\\rmcsm\\resultarmind.com.br\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













/* import css vendors */








let themeType = 'light';

if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function MyApp(props) {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_objectSpread(_objectSpread({}, Object(_theme_appTheme__WEBPACK_IMPORTED_MODULE_11__["default"])('violeta', themeType)), {}, {
    direction: _i18n__WEBPACK_IMPORTED_MODULE_10__["i18n"].language === 'ara' ? 'rtl' : 'ltr'
  }));
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Set layout direction
    document.dir = _i18n__WEBPACK_IMPORTED_MODULE_10__["i18n"].language === 'ara' ? 'rtl' : 'ltr'; // Remove preloader

    const preloader = document.getElementById('preloader');

    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    } // Remove loading bar


    setLoading(0);
    setTimeout(() => {
      setLoading(100);
    }, 2000); // Refresh JSS in SSR

    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.type === 'light' ? 'dark' : 'light';
    localStorage.setItem('luxiTheme', theme.palette.type === 'light' ? 'dark' : 'light');
    setTheme(_objectSpread(_objectSpread({}, Object(_theme_appTheme__WEBPACK_IMPORTED_MODULE_11__["default"])('violeta', newPaletteType)), {}, {
      direction: theme.direction
    }));
  };

  const toggleDirection = dir => {
    document.dir = dir;
    setTheme(_objectSpread(_objectSpread({}, theme), {}, {
      direction: dir,
      palette: _objectSpread({}, theme.palette)
    }));
  };

  const muiTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createMuiTheme"])(theme);
  const {
    Component,
    pageProps,
    router
  } = props; // eslint-disable-line

  const jss = Object(jss__WEBPACK_IMPORTED_MODULE_5__["create"])({
    plugins: [...Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["jssPreset"])().plugins, jss_rtl__WEBPACK_IMPORTED_MODULE_7___default()()]
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["StylesProvider"], {
    jss: jss,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: muiTheme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }), __jsx(react_top_loading_bar__WEBPACK_IMPORTED_MODULE_9___default.a, {
    height: 0,
    color: theme.palette.primary.light,
    progress: loading,
    className: "top-loading-bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }), __jsx("div", {
    id: "main-wrap",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }, __jsx(next_page_transitions__WEBPACK_IMPORTED_MODULE_6__["PageTransition"], {
    timeout: 300,
    classNames: "page-fade-transition",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx(Component, _extends({}, pageProps, {
    onToggleDark: toggleDarkTheme,
    onToggleDir: toggleDirection,
    key: router.route,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  })))))));
}

MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

MyApp.getInitialProps = async appContext => _objectSpread({}, await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(appContext));

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["appWithTranslation"])(MyApp));

/***/ }),

/***/ "./theme/appTheme.js":
/*!***************************!*\
  !*** ./theme/appTheme.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./palette */ "./theme/palette.js");
/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_palette__WEBPACK_IMPORTED_MODULE_0__);


const appTheme = (color, mode) => ({
  palette: {
    type: mode,
    primary: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.primary,
    secondary: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.secondary,
    action: {
      hover: mode === 'dark' ? 'rgba(128,128,128, 0.9)' : 'rgba(128,128,128, 0.05)',
      hoverOpacity: 0.05
    }
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700
  },
  shade: {
    light: '0 10px 15px -5px rgba(62, 57, 107, .07)'
  },
  rounded: {
    small: '8px',
    medium: '12px',
    big: '20px'
  },
  shadows: mode === 'dark' ? ['none', '0px 1px 3px 0px rgba(50,50,50, 0.2),0px 1px 1px 0px rgba(50,50,50, 0.14),0px 2px 1px -1px rgba(50,50,50, 0.12)', '0px 1px 5px 0px rgba(50,50,50, 0.2),0px 2px 2px 0px rgba(50,50,50, 0.14),0px 3px 1px -2px rgba(50,50,50, 0.12)', '0px 1px 8px 0px rgba(50,50,50, 0.2),0px 3px 4px 0px rgba(50,50,50, 0.14),0px 3px 3px -2px rgba(50,50,50, 0.12)', '0px 2px 4px -1px rgba(50,50,50, 0.2),0px 4px 5px 0px rgba(50,50,50, 0.14),0px 1px 10px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 5px 8px 0px rgba(50,50,50, 0.14),0px 1px 14px 0px rgba(50,50,50, 0.12)', '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 6px 10px 0px rgba(50,50,50, 0.14),0px 1px 18px 0px rgba(50,50,50, 0.12)', '0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)', '0px 5px 5px -3px rgba(50,50,50, 0.2),0px 8px 10px 1px rgba(50,50,50, 0.14),0px 3px 14px 2px rgba(50,50,50, 0.12)', '0px 5px 6px -3px rgba(50,50,50, 0.2),0px 9px 12px 1px rgba(50,50,50, 0.14),0px 3px 16px 2px rgba(50,50,50, 0.12)', '0px 6px 6px -3px rgba(50,50,50, 0.2),0px 10px 14px 1px rgba(50,50,50, 0.14),0px 4px 18px 3px rgba(50,50,50, 0.12)', '0px 6px 7px -4px rgba(50,50,50, 0.2),0px 11px 15px 1px rgba(50,50,50, 0.14),0px 4px 20px 3px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 12px 17px 2px rgba(50,50,50, 0.14),0px 5px 22px 4px rgba(50,50,50, 0.12)', '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 13px 19px 2px rgba(50,50,50, 0.14),0px 5px 24px 4px rgba(50,50,50, 0.12)', '0px 7px 9px -4px rgba(50,50,50, 0.2),0px 14px 21px 2px rgba(50,50,50, 0.14),0px 5px 26px 4px rgba(50,50,50, 0.12)', '0px 8px 9px -5px rgba(50,50,50, 0.2),0px 15px 22px 2px rgba(50,50,50, 0.14),0px 6px 28px 5px rgba(50,50,50, 0.12)', '0px 8px 10px -5px rgba(50,50,50, 0.2),0px 16px 24px 2px rgba(50,50,50, 0.14),0px 6px 30px 5px rgba(50,50,50, 0.12)', '0px 8px 11px -5px rgba(50,50,50, 0.2),0px 17px 26px 2px rgba(50,50,50, 0.14),0px 6px 32px 5px rgba(50,50,50, 0.12)', '0px 9px 11px -5px rgba(50,50,50, 0.2),0px 18px 28px 2px rgba(50,50,50, 0.14),0px 7px 34px 6px rgba(50,50,50, 0.12)', '0px 9px 12px -6px rgba(50,50,50, 0.2),0px 19px 29px 2px rgba(50,50,50, 0.14),0px 7px 36px 6px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 20px 31px 3px rgba(50,50,50, 0.14),0px 8px 38px 7px rgba(50,50,50, 0.12)', '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 21px 33px 3px rgba(50,50,50, 0.14),0px 8px 40px 7px rgba(50,50,50, 0.12)', '0px 10px 14px -6px rgba(50,50,50, 0.2),0px 22px 35px 3px rgba(50,50,50, 0.14),0px 8px 42px 7px rgba(50,50,50, 0.12)', '0px 11px 14px -7px rgba(50,50,50, 0.2),0px 23px 36px 3px rgba(50,50,50, 0.14),0px 9px 44px 8px rgba(50,50,50, 0.12)', '0px 11px 15px -7px rgba(50,50,50, 0.2),0px 24px 38px 3px rgba(850,50,50 0.14),0px 9px 46px 8px rgba(50,50,50, 0.12)'] : ['none', '0px 1px 3px 0px rgba(128,128,128, 0.2),0px 1px 1px 0px rgba(128,128,128, 0.14),0px 2px 1px -1px rgba(128,128,128, 0.12)', '0px 1px 5px 0px rgba(128,128,128, 0.2),0px 2px 2px 0px rgba(128,128,128, 0.14),0px 3px 1px -2px rgba(128,128,128, 0.12)', '0px 1px 8px 0px rgba(128,128,128, 0.2),0px 3px 4px 0px rgba(128,128,128, 0.14),0px 3px 3px -2px rgba(128,128,128, 0.12)', '0px 2px 4px -1px rgba(128,128,128, 0.2),0px 4px 5px 0px rgba(128,128,128, 0.14),0px 1px 10px 0px rgba(128,128,128, 0.12)', '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 5px 8px 0px rgba(128,128,128, 0.14),0px 1px 14px 0px rgba(128,128,128, 0.12)', '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 6px 10px 0px rgba(128,128,128, 0.14),0px 1px 18px 0px rgba(128,128,128, 0.12)', '0px 4px 5px -2px rgba(128,128,128, 0.2),0px 7px 10px 1px rgba(128,128,128, 0.14),0px 2px 16px 1px rgba(128,128,128, 0.12)', '0px 5px 5px -3px rgba(128,128,128, 0.2),0px 8px 10px 1px rgba(128,128,128, 0.14),0px 3px 14px 2px rgba(128,128,128, 0.12)', '0px 5px 6px -3px rgba(128,128,128, 0.2),0px 9px 12px 1px rgba(128,128,128, 0.14),0px 3px 16px 2px rgba(128,128,128, 0.12)', '0px 6px 6px -3px rgba(128,128,128, 0.2),0px 10px 14px 1px rgba(128,128,128, 0.14),0px 4px 18px 3px rgba(128,128,128, 0.12)', '0px 6px 7px -4px rgba(128,128,128, 0.2),0px 11px 15px 1px rgba(128,128,128, 0.14),0px 4px 20px 3px rgba(128,128,128, 0.12)', '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 12px 17px 2px rgba(128,128,128, 0.14),0px 5px 22px 4px rgba(128,128,128, 0.12)', '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 13px 19px 2px rgba(128,128,128, 0.14),0px 5px 24px 4px rgba(128,128,128, 0.12)', '0px 7px 9px -4px rgba(128,128,128, 0.2),0px 14px 21px 2px rgba(128,128,128, 0.14),0px 5px 26px 4px rgba(128,128,128, 0.12)', '0px 8px 9px -5px rgba(128,128,128, 0.2),0px 15px 22px 2px rgba(128,128,128, 0.14),0px 6px 28px 5px rgba(128,128,128, 0.12)', '0px 8px 10px -5px rgba(128,128,128, 0.2),0px 16px 24px 2px rgba(128,128,128, 0.14),0px 6px 30px 5px rgba(128,128,128, 0.12)', '0px 8px 11px -5px rgba(128,128,128, 0.2),0px 17px 26px 2px rgba(128,128,128, 0.14),0px 6px 32px 5px rgba(128,128,128, 0.12)', '0px 9px 11px -5px rgba(128,128,128, 0.2),0px 18px 28px 2px rgba(128,128,128, 0.14),0px 7px 34px 6px rgba(128,128,128, 0.12)', '0px 9px 12px -6px rgba(128,128,128, 0.2),0px 19px 29px 2px rgba(128,128,128, 0.14),0px 7px 36px 6px rgba(128,128,128, 0.12)', '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 20px 31px 3px rgba(128,128,128, 0.14),0px 8px 38px 7px rgba(128,128,128, 0.12)', '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 21px 33px 3px rgba(128,128,128, 0.14),0px 8px 40px 7px rgba(128,128,128, 0.12)', '0px 10px 14px -6px rgba(128,128,128, 0.2),0px 22px 35px 3px rgba(128,128,128, 0.14),0px 8px 42px 7px rgba(128,128,128, 0.12)', '0px 11px 14px -7px rgba(128,128,128, 0.2),0px 23px 36px 3px rgba(128,128,128, 0.14),0px 9px 44px 8px rgba(128,128,128, 0.12)', '0px 11px 15px -7px rgba(128,128,128, 0.2),0px 24px 38px 3px rgba(128,128,128, 0.14),0px 9px 46px 8px rgba(128,128,128, 0.12)'],
  overrides: {
    PrivateTabIndicator: {
      root: {
        borderRadius: '4px 4px 0 0',
        height: 5
      },
      colorPrimary: {
        backgroundColor: mode === 'dark' ? _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.primary.light : _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.primary.main
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 12
      },
      elevation1: {
        boxShadow: mode === 'dark' ? '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)' : '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)'
      },
      elevation4: {
        boxShadow: mode === 'dark' ? '0px 2px 4px -1px rgba(64, 64, 64, 0.46), 0px 4px 5px 0px rgba(42, 42, 42, 0.32), 0px 1px 10px 0px rgba(20, 20, 20, 0.12)' : '0 1.5px 12px 4px rgba(0, 0, 0, 0.12)'
      }
    },
    MuiButton: {
      containedSecondary: {
        color: '#FFFFFF'
      },
      contained: {
        boxShadow: 'none'
      },
      root: {
        borderRadius: 36,
        fontWeight: 600,
        padding: '8px 24px'
      },
      sizeSmall: {
        padding: '7px 12px'
      },
      sizeLarge: {
        padding: '7px 36px'
      }
    },
    MuiTypography: {
      button: {
        fontWeight: 600
      }
    },
    MuiInputLabel: {
      root: {
        '&$focused': {
          color: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.secondary.main
        }
      },
      filled: {
        top: -2,
        '&$shrink': {
          color: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.secondary.main
        }
      }
    },
    MuiFilledInput: {
      root: {
        borderRadius: '12px !important',
        background: 'none',
        '&:before': {
          display: 'none'
        },
        '&:after': {
          display: 'none'
        },
        '&$focused': {
          borderColor: _palette__WEBPACK_IMPORTED_MODULE_0___default.a[color].palette.secondary.main
        }
      },
      input: {
        padding: '23px 12px 6px'
      }
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (appTheme);

/***/ }),

/***/ "./theme/palette.js":
/*!**************************!*\
  !*** ./theme/palette.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  oceanBlue: {
    palette: {
      primary: {
        light: '#BBDEFB',
        main: '#2196F3',
        dark: '#0D47A1'
      },
      secondary: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#006064'
      }
    }
  },
  greenLeaf: {
    palette: {
      primary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#1B5E20'
      },
      secondary: {
        light: '#CFD8DC',
        main: '#607D8B',
        dark: '#37474F'
      }
    }
  },
  money: {
    palette: {
      primary: {
        light: '#C8E6C9',
        main: '#4CAF50',
        dark: '#2E7D32'
      },
      secondary: {
        light: '#FFECB3',
        main: '#FFA000',
        dark: '#FF6F00'
      }
    }
  },
  grayscale: {
    palette: {
      primary: {
        light: '#CFD8DC',
        main: '#546E7A',
        dark: '#263238'
      },
      secondary: {
        light: '#D7CCC8',
        main: '#6D4C41',
        dark: '#3E2723'
      }
    }
  },
  cloud: {
    palette: {
      primary: {
        light: '#B3E5FC',
        main: '#03A9F4',
        dark: '#01579B'
      },
      secondary: {
        light: '#FFE0B2',
        main: '#FF9800',
        dark: '#E65100'
      }
    }
  },
  joker: {
    palette: {
      primary: {
        light: '#D1C4E9',
        main: '#673AB7',
        dark: '#311B92'
      },
      secondary: {
        light: '#B2EBF2',
        main: '#00BCD4',
        dark: '#006064'
      }
    }
  },
  violet: {
    palette: {
      primary: {
        light: '#F8BBD0',
        main: '#EC407A',
        dark: '#880E4F'
      },
      secondary: {
        light: '#D1C4E9',
        main: '#673AB7',
        dark: '#311B92'
      }
    }
  },
  violeta: {
    palette: {
      primary: {
        light: '#E1BEE7',
        main: '#9C27B0',
        dark: '#6A1B9A'
      },
      secondary: {
        light: '#DCEDC8',
        main: '#8BC34A',
        dark: '#558B2F'
      }
    }
  },
  roseGold: {
    palette: {
      primary: {
        light: '#FCE4EC',
        main: '#EC407A',
        dark: '#D81B60',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FFF8E1',
        main: '#FFA000',
        dark: '#FF6F00',
        contrastText: '#fff'
      }
    }
  },
  deepBlue: {
    palette: {
      primary: {
        light: '#E8EAF6',
        main: '#3F51B5',
        dark: '#283593',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E1F5FE',
        main: '#03A9F4',
        dark: '#0277BD',
        contrastText: '#fff'
      }
    }
  },
  ubuntu: {
    palette: {
      primary: {
        light: '#FFF3E0',
        main: '#EF6C00',
        dark: '#E65100',
        contrastText: '#fff'
      },
      secondary: {
        light: '#F3E5F5',
        main: '#9C27B0',
        dark: '#7B1FA2',
        contrastText: '#fff'
      }
    }
  },
  geenNature: {
    palette: {
      primary: {
        light: '#E0F7FA',
        main: '#009688',
        dark: '#00695C',
        contrastText: '#fff'
      },
      secondary: {
        light: '#F1F8E9',
        main: '#689F38',
        dark: '#33691E',
        contrastText: '#fff'
      }
    }
  },
  vampire: {
    palette: {
      primary: {
        light: '#FFEBEE',
        main: '#f44336',
        dark: '#E53935',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ECEFF1',
        main: '#607D8B',
        dark: '#455A64',
        contrastText: '#fff'
      }
    }
  },
  mint: {
    palette: {
      primary: {
        light: '#bbdefb',
        main: '#2196f3',
        dark: '#0d47a1',
        contrastText: '#fff'
      },
      secondary: {
        light: '#b3e5fc',
        main: '#03a9f4',
        dark: '#01579b',
        contrastText: '#fff'
      }
    }
  },
  oceanSky: {
    palette: {
      primary: {
        light: '#E3F2FD',
        main: '#2196F3',
        dark: '#1565C0',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E0F2F1',
        main: '#00BFA5',
        dark: '#00796B',
        contrastText: '#fff'
      }
    }
  },
  gold: {
    palette: {
      primary: {
        light: '#FFF9C4',
        main: '#FF9100',
        dark: '#FF6D00',
        contrastText: '#fff'
      },
      secondary: {
        light: '#EFEBE9',
        main: '#8D6E63',
        dark: '#4E342E',
        contrastText: '#fff'
      }
    }
  },
  botani: {
    palette: {
      primary: {
        light: '#DCEDC8',
        main: '#689F38',
        dark: '#33691E',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FCE4EC',
        main: '#F06292',
        dark: '#AD1457',
        contrastText: '#fff'
      }
    }
  },
  littleQueen: {
    palette: {
      primary: {
        light: '#E0F7FA',
        main: '#00BCD4',
        dark: '#006064',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FCE4EC',
        main: '#F06292',
        dark: '#AD1457',
        contrastText: '#fff'
      }
    }
  },
  purple: {
    palette: {
      primary: {
        light: '#f3e5f5',
        main: '#9c27b0',
        dark: '#6a1b9a',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ea80fc',
        main: '#aa00ff',
        dark: '#4a148c',
        contrastText: '#fff'
      }
    }
  },
  black: {
    palette: {
      primary: {
        light: '#9e9e9e',
        main: '#212121',
        dark: '#000',
        contrastText: '#fff'
      },
      secondary: {
        light: '#E0E0E0',
        main: '#757575',
        dark: '#424242',
        contrastText: '#fff'
      }
    }
  },
  brown: {
    palette: {
      primary: {
        light: '#d7ccc8',
        main: '#795548',
        dark: '#4e342e',
        contrastText: '#fff'
      },
      secondary: {
        light: '#ccb0b0',
        main: '#794848',
        dark: '#3e2723',
        contrastText: '#fff'
      }
    }
  }
};

/***/ }),

/***/ "./vendors/animate-extends.css":
/*!*************************************!*\
  !*** ./vendors/animate-extends.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/hamburger-menu.css":
/*!************************************!*\
  !*** ./vendors/hamburger-menu.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/page-transition.css":
/*!*************************************!*\
  !*** ./vendors/page-transition.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/slick/slick-theme.css":
/*!***************************************!*\
  !*** ./vendors/slick/slick-theme.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/slick/slick.css":
/*!*********************************!*\
  !*** ./vendors/slick/slick.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./vendors/top-loading-bar.css":
/*!*************************************!*\
  !*** ./vendors/top-loading-bar.css ***!
  \*************************************/
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

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "jss":
/*!**********************!*\
  !*** external "jss" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "jss-rtl":
/*!**************************!*\
  !*** external "jss-rtl" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jss-rtl");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "next-page-transitions":
/*!****************************************!*\
  !*** external "next-page-transitions" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-page-transitions");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-top-loading-bar":
/*!****************************************!*\
  !*** external "react-top-loading-bar" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-top-loading-bar");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2kxOG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS9hcHBUaGVtZS5qcyIsIndlYnBhY2s6Ly8vLi90aGVtZS9wYWxldHRlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNzLXJ0bFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtaTE4bmV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcGFnZS10cmFuc2l0aW9uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRvcC1sb2FkaW5nLWJhclwiIl0sIm5hbWVzIjpbIk5leHRJMThOZXh0IiwicmVxdWlyZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJmYWxsYmFja0xuZyIsImluaXRJbW1lZGlhdGUiLCJsb2NhbGVQYXRoIiwicmVhY3QiLCJ1c2VTdXNwZW5zZSIsImxvY2FsZVN1YnBhdGhzIiwiYXJhIiwiZGV1IiwiZW5nIiwiaW5kIiwicHJ0IiwiemhvIiwicGFnZVByb3BzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRDYXRjaCIsInJlbmRlciIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsImNvbnNvbGUiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZSIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJ0aGVtZVR5cGUiLCJTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIk15QXBwIiwicHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwidGhlbWUiLCJzZXRUaGVtZSIsImFwcFRoZW1lIiwiZGlyZWN0aW9uIiwiaTE4biIsImxhbmd1YWdlIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJkaXIiLCJwcmVsb2FkZXIiLCJnZXRFbGVtZW50QnlJZCIsInVuZGVmaW5lZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJqc3NTdHlsZXMiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidG9nZ2xlRGFya1RoZW1lIiwibmV3UGFsZXR0ZVR5cGUiLCJwYWxldHRlIiwidHlwZSIsInNldEl0ZW0iLCJ0b2dnbGVEaXJlY3Rpb24iLCJtdWlUaGVtZSIsImNyZWF0ZU11aVRoZW1lIiwianNzIiwiY3JlYXRlIiwicGx1Z2lucyIsImpzc1ByZXNldCIsInJ0bCIsInByaW1hcnkiLCJsaWdodCIsInJvdXRlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiYXBwQ29udGV4dCIsImFwcFdpdGhUcmFuc2xhdGlvbiIsImNvbG9yIiwibW9kZSIsInNlY29uZGFyeSIsImFjdGlvbiIsImhvdmVyIiwiaG92ZXJPcGFjaXR5IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIiwiZm9udFdlaWdodFJlZ3VsYXIiLCJmb250V2VpZ2h0TWVkaXVtIiwiZm9udFdlaWdodEJvbGQiLCJzaGFkZSIsInJvdW5kZWQiLCJzbWFsbCIsIm1lZGl1bSIsImJpZyIsInNoYWRvd3MiLCJvdmVycmlkZXMiLCJQcml2YXRlVGFiSW5kaWNhdG9yIiwicm9vdCIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImNvbG9yUHJpbWFyeSIsImJhY2tncm91bmRDb2xvciIsIm1haW4iLCJNdWlQYXBlciIsImVsZXZhdGlvbjEiLCJib3hTaGFkb3ciLCJlbGV2YXRpb240IiwiTXVpQnV0dG9uIiwiY29udGFpbmVkU2Vjb25kYXJ5IiwiY29udGFpbmVkIiwiZm9udFdlaWdodCIsInBhZGRpbmciLCJzaXplU21hbGwiLCJzaXplTGFyZ2UiLCJNdWlUeXBvZ3JhcGh5IiwiYnV0dG9uIiwiTXVpSW5wdXRMYWJlbCIsImZpbGxlZCIsInRvcCIsIk11aUZpbGxlZElucHV0IiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJib3JkZXJDb2xvciIsImlucHV0Iiwib2NlYW5CbHVlIiwiZGFyayIsImdyZWVuTGVhZiIsIm1vbmV5IiwiZ3JheXNjYWxlIiwiY2xvdWQiLCJqb2tlciIsInZpb2xldCIsInZpb2xldGEiLCJyb3NlR29sZCIsImNvbnRyYXN0VGV4dCIsImRlZXBCbHVlIiwidWJ1bnR1IiwiZ2Vlbk5hdHVyZSIsInZhbXBpcmUiLCJtaW50Iiwib2NlYW5Ta3kiLCJnb2xkIiwiYm90YW5pIiwibGl0dGxlUXVlZW4iLCJwdXJwbGUiLCJibGFjayIsImJyb3duIl0s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QUUsU0FGQztBQUdQdUIsWUFBSSxFQUFFLFNBSEM7QUFJUFMsb0JBQVksRUFBRTtBQUpQLE9BREY7QUFPUHZELGVBQVMsRUFBRTtBQUNUWCxhQUFLLEVBQUUsU0FERTtBQUVUa0MsWUFBSSxFQUFFLFNBRkc7QUFHVHVCLFlBQUksRUFBRSxTQUhHO0FBSVRTLG9CQUFZLEVBQUU7QUFKTDtBQVBKO0FBREo7QUFqVFEsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHQ7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcbiAgZGVmYXVsdExhbmd1YWdlOiAnZW5nJyxcbiAgb3RoZXJMYW5ndWFnZXM6IFsnZGV1JywgJ2luZCcsICdhcmEnLCAncHJ0JywgJ3pobyddLFxuICBmYWxsYmFja0xuZzogJ2VuZycsXG4gIGluaXRJbW1lZGlhdGU6IGZhbHNlLFxuICBsb2NhbGVQYXRoOiAncHVibGljL2xvY2FsZXMnLFxuICByZWFjdDoge1xuICAgIHVzZVN1c3BlbnNlOiBmYWxzZSxcbiAgfSxcbiAgbG9jYWxlU3VicGF0aHM6IHtcbiAgICBhcmE6ICdhcicsXG4gICAgZGV1OiAnZGUnLFxuICAgIGVuZzogJ2VuJyxcbiAgICBpbmQ6ICdpZCcsXG4gICAgcHJ0OiAncHQnLFxuICAgIHpobzogJ3poJyxcbiAgfSxcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgVGhlbWVQcm92aWRlciAsXG4gIGNyZWF0ZU11aVRoZW1lLFxuICBTdHlsZXNQcm92aWRlcixcbiAganNzUHJlc2V0XG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICdqc3MnO1xuaW1wb3J0IHsgUGFnZVRyYW5zaXRpb24gfSBmcm9tICduZXh0LXBhZ2UtdHJhbnNpdGlvbnMnO1xuaW1wb3J0IHJ0bCBmcm9tICdqc3MtcnRsJztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgTG9hZGluZ0JhciBmcm9tICdyZWFjdC10b3AtbG9hZGluZy1iYXInO1xuaW1wb3J0IHsgaTE4biwgYXBwV2l0aFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vaTE4bic7XG5pbXBvcnQgYXBwVGhlbWUgZnJvbSAnLi4vdGhlbWUvYXBwVGhlbWUnO1xuLyogaW1wb3J0IGNzcyB2ZW5kb3JzICovXG5pbXBvcnQgJ34vdmVuZG9ycy9oYW1idXJnZXItbWVudS5jc3MnO1xuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvYW5pbWF0ZS5jc3MvYW5pbWF0ZS5jc3MnO1xuaW1wb3J0ICcuLi92ZW5kb3JzL2FuaW1hdGUtZXh0ZW5kcy5jc3MnO1xuaW1wb3J0ICcuLi92ZW5kb3JzL3RvcC1sb2FkaW5nLWJhci5jc3MnO1xuaW1wb3J0ICcuLi92ZW5kb3JzL3BhZ2UtdHJhbnNpdGlvbi5jc3MnO1xuaW1wb3J0ICcuLi92ZW5kb3JzL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJy4uL3ZlbmRvcnMvc2xpY2svc2xpY2stdGhlbWUuY3NzJztcblxubGV0IHRoZW1lVHlwZSA9ICdsaWdodCc7XG5pZiAodHlwZW9mIFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgdGhlbWVUeXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2x1eGlUaGVtZScpIHx8ICdsaWdodCc7XG59XG5cbmZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKHtcbiAgICAuLi5hcHBUaGVtZSgndmlvbGV0YScsIHRoZW1lVHlwZSksXG4gICAgZGlyZWN0aW9uOiBpMThuLmxhbmd1YWdlID09PSAnYXJhJyA/ICdydGwnIDogJ2x0cidcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTZXQgbGF5b3V0IGRpcmVjdGlvblxuICAgIGRvY3VtZW50LmRpciA9IGkxOG4ubGFuZ3VhZ2UgPT09ICdhcmEnID8gJ3J0bCcgOiAnbHRyJztcblxuICAgIC8vIFJlbW92ZSBwcmVsb2FkZXJcbiAgICBjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlbG9hZGVyJyk7XG4gICAgaWYgKHByZWxvYWRlciAhPT0gbnVsbCB8fCB1bmRlZmluZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBwcmVsb2FkZXIucmVtb3ZlKCk7XG4gICAgICB9LCAxNTAwKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgbG9hZGluZyBiYXJcbiAgICBzZXRMb2FkaW5nKDApO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyBzZXRMb2FkaW5nKDEwMCk7IH0sIDIwMDApO1xuXG4gICAgLy8gUmVmcmVzaCBKU1MgaW4gU1NSXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xuICAgIGlmIChqc3NTdHlsZXMpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgdG9nZ2xlRGFya1RoZW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1BhbGV0dGVUeXBlID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0JztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbHV4aVRoZW1lJywgdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0Jyk7XG4gICAgc2V0VGhlbWUoe1xuICAgICAgLi4uYXBwVGhlbWUoJ3Zpb2xldGEnLCBuZXdQYWxldHRlVHlwZSksXG4gICAgICBkaXJlY3Rpb246IHRoZW1lLmRpcmVjdGlvbixcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVEaXJlY3Rpb24gPSBkaXIgPT4ge1xuICAgIGRvY3VtZW50LmRpciA9IGRpcjtcbiAgICBzZXRUaGVtZSh7XG4gICAgICAuLi50aGVtZSxcbiAgICAgIGRpcmVjdGlvbjogZGlyLFxuICAgICAgcGFsZXR0ZToge1xuICAgICAgICAuLi50aGVtZS5wYWxldHRlXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbXVpVGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh0aGVtZSk7XG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlciB9ID0gcHJvcHM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgY29uc3QganNzID0gY3JlYXRlKHsgcGx1Z2luczogWy4uLmpzc1ByZXNldCgpLnBsdWdpbnMsIHJ0bCgpXSB9KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aCwgc2hyaW5rLXRvLWZpdD1ub1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8U3R5bGVzUHJvdmlkZXIganNzPXtqc3N9PlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17bXVpVGhlbWV9PlxuICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICAgIDxMb2FkaW5nQmFyXG4gICAgICAgICAgICBoZWlnaHQ9ezB9XG4gICAgICAgICAgICBjb2xvcj17dGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0fVxuICAgICAgICAgICAgcHJvZ3Jlc3M9e2xvYWRpbmd9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b3AtbG9hZGluZy1iYXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBpZD1cIm1haW4td3JhcFwiPlxuICAgICAgICAgICAgPFBhZ2VUcmFuc2l0aW9uIHRpbWVvdXQ9ezMwMH0gY2xhc3NOYW1lcz1cInBhZ2UtZmFkZS10cmFuc2l0aW9uXCI+XG4gICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlRGFyaz17dG9nZ2xlRGFya1RoZW1lfVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlRGlyPXt0b2dnbGVEaXJlY3Rpb259XG4gICAgICAgICAgICAgICAga2V5PXtyb3V0ZXIucm91dGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L1BhZ2VUcmFuc2l0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8L1N0eWxlc1Byb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5NeUFwcC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG59O1xuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4gKHsuLi5hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGFwcFdpdGhUcmFuc2xhdGlvbihNeUFwcCk7XG4iLCJpbXBvcnQgcGFsZXR0ZSBmcm9tICcuL3BhbGV0dGUnO1xuY29uc3QgYXBwVGhlbWUgPSAoY29sb3IsIG1vZGUpID0+ICh7XG4gIHBhbGV0dGU6IHtcbiAgICB0eXBlOiBtb2RlLFxuICAgIHByaW1hcnk6IHBhbGV0dGVbY29sb3JdLnBhbGV0dGUucHJpbWFyeSxcbiAgICBzZWNvbmRhcnk6IHBhbGV0dGVbY29sb3JdLnBhbGV0dGUuc2Vjb25kYXJ5LFxuICAgIGFjdGlvbjoge1xuICAgICAgaG92ZXI6IG1vZGUgPT09ICdkYXJrJyA/ICdyZ2JhKDEyOCwxMjgsMTI4LCAwLjkpJyA6ICdyZ2JhKDEyOCwxMjgsMTI4LCAwLjA1KScsXG4gICAgICBob3Zlck9wYWNpdHk6IDAuMDVcbiAgICB9XG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiBbXG4gICAgICAnT3BlbiBTYW5zJyxcbiAgICAgICdzYW5zLXNlcmlmJyxcbiAgICBdLmpvaW4oJywnKSxcbiAgICBmb250V2VpZ2h0UmVndWxhcjogNDAwLFxuICAgIGZvbnRXZWlnaHRNZWRpdW06IDYwMCxcbiAgICBmb250V2VpZ2h0Qm9sZDogNzAwLFxuICB9LFxuICBzaGFkZToge1xuICAgIGxpZ2h0OiAnMCAxMHB4IDE1cHggLTVweCByZ2JhKDYyLCA1NywgMTA3LCAuMDcpJyxcbiAgfSxcbiAgcm91bmRlZDoge1xuICAgIHNtYWxsOiAnOHB4JyxcbiAgICBtZWRpdW06ICcxMnB4JyxcbiAgICBiaWc6ICcyMHB4J1xuICB9LFxuICBzaGFkb3dzOiBtb2RlID09PSAnZGFyaydcbiAgICA/IFtcbiAgICAgICdub25lJyxcbiAgICAgICcwcHggMXB4IDNweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMXB4IDFweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDJweCAxcHggLTFweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDFweCA1cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDJweCAycHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCAzcHggMXB4IC0ycHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCAxcHggOHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAzcHggNHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggM3B4IDNweCAtMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggMnB4IDRweCAtMXB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCAxcHggMTBweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCAzcHggNXB4IC0xcHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggNXB4IDhweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDFweCAxNHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDNweCA1cHggLTFweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCA2cHggMTBweCAwcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDFweCAxOHB4IDBweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDRweCA1cHggLTJweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCA3cHggMTBweCAxcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDJweCAxNnB4IDFweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDVweCA1cHggLTNweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCA4cHggMTBweCAxcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDNweCAxNHB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDVweCA2cHggLTNweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCA5cHggMTJweCAxcHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDNweCAxNnB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDZweCA2cHggLTNweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxMHB4IDE0cHggMXB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA0cHggMThweCAzcHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCA2cHggN3B4IC00cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTFweCAxNXB4IDFweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggNHB4IDIwcHggM3B4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggN3B4IDhweCAtNHB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDEycHggMTdweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDVweCAyMnB4IDRweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDdweCA4cHggLTRweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxM3B4IDE5cHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA1cHggMjRweCA0cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCA3cHggOXB4IC00cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTRweCAyMXB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggNXB4IDI2cHggNHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggOHB4IDlweCAtNXB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDE1cHggMjJweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDZweCAyOHB4IDVweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDhweCAxMHB4IC01cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTZweCAyNHB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggNnB4IDMwcHggNXB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggOHB4IDExcHggLTVweCByZ2JhKDUwLDUwLDUwLCAwLjIpLDBweCAxN3B4IDI2cHggMnB4IHJnYmEoNTAsNTAsNTAsIDAuMTQpLDBweCA2cHggMzJweCA1cHggcmdiYSg1MCw1MCw1MCwgMC4xMiknLFxuICAgICAgJzBweCA5cHggMTFweCAtNXB4IHJnYmEoNTAsNTAsNTAsIDAuMiksMHB4IDE4cHggMjhweCAycHggcmdiYSg1MCw1MCw1MCwgMC4xNCksMHB4IDdweCAzNHB4IDZweCByZ2JhKDUwLDUwLDUwLCAwLjEyKScsXG4gICAgICAnMHB4IDlweCAxMnB4IC02cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMTlweCAyOXB4IDJweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggN3B4IDM2cHggNnB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggMTBweCAxM3B4IC02cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMjBweCAzMXB4IDNweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggOHB4IDM4cHggN3B4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggMTBweCAxM3B4IC02cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMjFweCAzM3B4IDNweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggOHB4IDQwcHggN3B4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggMTBweCAxNHB4IC02cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMjJweCAzNXB4IDNweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggOHB4IDQycHggN3B4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggMTFweCAxNHB4IC03cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMjNweCAzNnB4IDNweCByZ2JhKDUwLDUwLDUwLCAwLjE0KSwwcHggOXB4IDQ0cHggOHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICAgICcwcHggMTFweCAxNXB4IC03cHggcmdiYSg1MCw1MCw1MCwgMC4yKSwwcHggMjRweCAzOHB4IDNweCByZ2JhKDg1MCw1MCw1MCAwLjE0KSwwcHggOXB4IDQ2cHggOHB4IHJnYmEoNTAsNTAsNTAsIDAuMTIpJyxcbiAgICBdXG4gICAgOiBbXG4gICAgICAnbm9uZScsXG4gICAgICAnMHB4IDFweCAzcHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDFweCAxcHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAycHggMXB4IC0xcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCAxcHggNXB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggM3B4IDFweCAtMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggMXB4IDhweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggM3B4IDRweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDNweCAzcHggLTJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDJweCA0cHggLTFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCA0cHggNXB4IDBweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggM3B4IDVweCAtMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDVweCA4cHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAxcHggMTRweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCAzcHggNXB4IC0xcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggNnB4IDEwcHggMHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCA0cHggNXB4IC0ycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggN3B4IDEwcHggMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAycHggMTZweCAxcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCA1cHggNXB4IC0zcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggOHB4IDEwcHggMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAzcHggMTRweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCA1cHggNnB4IC0zcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggOXB4IDEycHggMXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCAzcHggMTZweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCA2cHggNnB4IC0zcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMTBweCAxNHB4IDFweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggNHB4IDE4cHggM3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggNnB4IDdweCAtNHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDExcHggMTVweCAxcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDRweCAyMHB4IDNweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDdweCA4cHggLTRweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA1cHggMjJweCA0cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCA3cHggOHB4IC00cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMTNweCAxOXB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggNXB4IDI0cHggNHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggN3B4IDlweCAtNHB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDE0cHggMjFweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDVweCAyNnB4IDRweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDhweCA5cHggLTVweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxNXB4IDIycHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA2cHggMjhweCA1cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCA4cHggMTBweCAtNXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDE2cHggMjRweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDZweCAzMHB4IDVweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDhweCAxMXB4IC01cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4yKSwwcHggMTdweCAyNnB4IDJweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjE0KSwwcHggNnB4IDMycHggNXB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTIpJyxcbiAgICAgICcwcHggOXB4IDExcHggLTVweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjIpLDBweCAxOHB4IDI4cHggMnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMTQpLDBweCA3cHggMzRweCA2cHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xMiknLFxuICAgICAgJzBweCA5cHggMTJweCAtNnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDE5cHggMjlweCAycHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDdweCAzNnB4IDZweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDIwcHggMzFweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDhweCAzOHB4IDdweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDIxcHggMzNweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDhweCA0MHB4IDdweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDEwcHggMTRweCAtNnB4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDIycHggMzVweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDhweCA0MnB4IDdweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDExcHggMTRweCAtN3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDIzcHggMzZweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDlweCA0NHB4IDhweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgICAnMHB4IDExcHggMTVweCAtN3B4IHJnYmEoMTI4LDEyOCwxMjgsIDAuMiksMHB4IDI0cHggMzhweCAzcHggcmdiYSgxMjgsMTI4LDEyOCwgMC4xNCksMHB4IDlweCA0NnB4IDhweCByZ2JhKDEyOCwxMjgsMTI4LCAwLjEyKScsXG4gICAgXSxcbiAgb3ZlcnJpZGVzOiB7XG4gICAgUHJpdmF0ZVRhYkluZGljYXRvcjoge1xuICAgICAgcm9vdDoge1xuICAgICAgICBib3JkZXJSYWRpdXM6ICc0cHggNHB4IDAgMCcsXG4gICAgICAgIGhlaWdodDogNSxcbiAgICAgIH0sXG4gICAgICBjb2xvclByaW1hcnk6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBtb2RlID09PSAnZGFyaycgPyBwYWxldHRlW2NvbG9yXS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiBwYWxldHRlW2NvbG9yXS5wYWxldHRlLnByaW1hcnkubWFpblxuICAgICAgfVxuICAgIH0sXG4gICAgTXVpUGFwZXI6IHtcbiAgICAgIHJvdW5kZWQ6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMlxuICAgICAgfSxcbiAgICAgIGVsZXZhdGlvbjE6IHtcbiAgICAgICAgYm94U2hhZG93OiBtb2RlID09PSAnZGFyaycgPyAnMHB4IDFweCAzcHggMHB4IHJnYmEoNjQsIDY0LCA2NCwgMSksIDBweCAxcHggMXB4IDBweCByZ2JhKDQyLCA0MiwgNDIsIDEpLCAwcHggMnB4IDFweCAtMXB4IHJnYmEoMjAsIDIwLCAyMCwgMSknIDogJzAgMS41cHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KSdcbiAgICAgIH0sXG4gICAgICBlbGV2YXRpb240OiB7XG4gICAgICAgIGJveFNoYWRvdzogbW9kZSA9PT0gJ2RhcmsnID8gJzBweCAycHggNHB4IC0xcHggcmdiYSg2NCwgNjQsIDY0LCAwLjQ2KSwgMHB4IDRweCA1cHggMHB4IHJnYmEoNDIsIDQyLCA0MiwgMC4zMiksIDBweCAxcHggMTBweCAwcHggcmdiYSgyMCwgMjAsIDIwLCAwLjEyKScgOiAnMCAxLjVweCAxMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpJ1xuICAgICAgfVxuICAgIH0sXG4gICAgTXVpQnV0dG9uOiB7XG4gICAgICBjb250YWluZWRTZWNvbmRhcnk6IHtcbiAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcbiAgICAgIH0sXG4gICAgICBjb250YWluZWQ6IHtcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICB9LFxuICAgICAgcm9vdDoge1xuICAgICAgICBib3JkZXJSYWRpdXM6IDM2LFxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgIHBhZGRpbmc6ICc4cHggMjRweCdcbiAgICAgIH0sXG4gICAgICBzaXplU21hbGw6IHtcbiAgICAgICAgcGFkZGluZzogJzdweCAxMnB4J1xuICAgICAgfSxcbiAgICAgIHNpemVMYXJnZToge1xuICAgICAgICBwYWRkaW5nOiAnN3B4IDM2cHgnXG4gICAgICB9XG4gICAgfSxcbiAgICBNdWlUeXBvZ3JhcGh5OiB7XG4gICAgICBidXR0b246IHtcbiAgICAgICAgZm9udFdlaWdodDogNjAwXG4gICAgICB9XG4gICAgfSxcbiAgICBNdWlJbnB1dExhYmVsOiB7XG4gICAgICByb290OiB7XG4gICAgICAgICcmJGZvY3VzZWQnOiB7XG4gICAgICAgICAgY29sb3I6IHBhbGV0dGVbY29sb3JdLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZpbGxlZDoge1xuICAgICAgICB0b3A6IC0yLFxuICAgICAgICAnJiRzaHJpbmsnOiB7XG4gICAgICAgICAgY29sb3I6IHBhbGV0dGVbY29sb3JdLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgTXVpRmlsbGVkSW5wdXQ6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTJweCAhaW1wb3J0YW50JyxcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgICAnJjpiZWZvcmUnOiB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgIH0sXG4gICAgICAgICcmOmFmdGVyJzoge1xuICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICB9LFxuICAgICAgICAnJiRmb2N1c2VkJzoge1xuICAgICAgICAgIGJvcmRlckNvbG9yOiBwYWxldHRlW2NvbG9yXS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbnB1dDoge1xuICAgICAgICBwYWRkaW5nOiAnMjNweCAxMnB4IDZweCdcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwcFRoZW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9jZWFuQmx1ZToge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjQkJERUZCJyxcbiAgICAgICAgbWFpbjogJyMyMTk2RjMnLFxuICAgICAgICBkYXJrOiAnIzBENDdBMSdcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjQjJFQkYyJyxcbiAgICAgICAgbWFpbjogJyMwMEJDRDQnLFxuICAgICAgICBkYXJrOiAnIzAwNjA2NCdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGdyZWVuTGVhZjoge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjQzhFNkM5JyxcbiAgICAgICAgbWFpbjogJyM0Q0FGNTAnLFxuICAgICAgICBkYXJrOiAnIzFCNUUyMCdcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjQ0ZEOERDJyxcbiAgICAgICAgbWFpbjogJyM2MDdEOEInLFxuICAgICAgICBkYXJrOiAnIzM3NDc0RidcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1vbmV5OiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNDOEU2QzknLFxuICAgICAgICBtYWluOiAnIzRDQUY1MCcsXG4gICAgICAgIGRhcms6ICcjMkU3RDMyJ1xuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNGRkVDQjMnLFxuICAgICAgICBtYWluOiAnI0ZGQTAwMCcsXG4gICAgICAgIGRhcms6ICcjRkY2RjAwJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZ3JheXNjYWxlOiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNDRkQ4REMnLFxuICAgICAgICBtYWluOiAnIzU0NkU3QScsXG4gICAgICAgIGRhcms6ICcjMjYzMjM4J1xuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNEN0NDQzgnLFxuICAgICAgICBtYWluOiAnIzZENEM0MScsXG4gICAgICAgIGRhcms6ICcjM0UyNzIzJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY2xvdWQ6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0IzRTVGQycsXG4gICAgICAgIG1haW46ICcjMDNBOUY0JyxcbiAgICAgICAgZGFyazogJyMwMTU3OUInXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0ZGRTBCMicsXG4gICAgICAgIG1haW46ICcjRkY5ODAwJyxcbiAgICAgICAgZGFyazogJyNFNjUxMDAnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBqb2tlcjoge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRDFDNEU5JyxcbiAgICAgICAgbWFpbjogJyM2NzNBQjcnLFxuICAgICAgICBkYXJrOiAnIzMxMUI5MidcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjQjJFQkYyJyxcbiAgICAgICAgbWFpbjogJyMwMEJDRDQnLFxuICAgICAgICBkYXJrOiAnIzAwNjA2NCdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHZpb2xldDoge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRjhCQkQwJyxcbiAgICAgICAgbWFpbjogJyNFQzQwN0EnLFxuICAgICAgICBkYXJrOiAnIzg4MEU0RidcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRDFDNEU5JyxcbiAgICAgICAgbWFpbjogJyM2NzNBQjcnLFxuICAgICAgICBkYXJrOiAnIzMxMUI5MidcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHZpb2xldGE6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0UxQkVFNycsXG4gICAgICAgIG1haW46ICcjOUMyN0IwJyxcbiAgICAgICAgZGFyazogJyM2QTFCOUEnXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0RDRURDOCcsXG4gICAgICAgIG1haW46ICcjOEJDMzRBJyxcbiAgICAgICAgZGFyazogJyM1NThCMkYnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICByb3NlR29sZDoge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRkNFNEVDJyxcbiAgICAgICAgbWFpbjogJyNFQzQwN0EnLFxuICAgICAgICBkYXJrOiAnI0Q4MUI2MCcsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNGRkY4RTEnLFxuICAgICAgICBtYWluOiAnI0ZGQTAwMCcsXG4gICAgICAgIGRhcms6ICcjRkY2RjAwJyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGRlZXBCbHVlOiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNFOEVBRjYnLFxuICAgICAgICBtYWluOiAnIzNGNTFCNScsXG4gICAgICAgIGRhcms6ICcjMjgzNTkzJyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0UxRjVGRScsXG4gICAgICAgIG1haW46ICcjMDNBOUY0JyxcbiAgICAgICAgZGFyazogJyMwMjc3QkQnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgdWJ1bnR1OiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNGRkYzRTAnLFxuICAgICAgICBtYWluOiAnI0VGNkMwMCcsXG4gICAgICAgIGRhcms6ICcjRTY1MTAwJyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0YzRTVGNScsXG4gICAgICAgIG1haW46ICcjOUMyN0IwJyxcbiAgICAgICAgZGFyazogJyM3QjFGQTInLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZ2Vlbk5hdHVyZToge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRTBGN0ZBJyxcbiAgICAgICAgbWFpbjogJyMwMDk2ODgnLFxuICAgICAgICBkYXJrOiAnIzAwNjk1QycsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNGMUY4RTknLFxuICAgICAgICBtYWluOiAnIzY4OUYzOCcsXG4gICAgICAgIGRhcms6ICcjMzM2OTFFJyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHZhbXBpcmU6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0ZGRUJFRScsXG4gICAgICAgIG1haW46ICcjZjQ0MzM2JyxcbiAgICAgICAgZGFyazogJyNFNTM5MzUnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRUNFRkYxJyxcbiAgICAgICAgbWFpbjogJyM2MDdEOEInLFxuICAgICAgICBkYXJrOiAnIzQ1NUE2NCcsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBtaW50OiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNiYmRlZmInLFxuICAgICAgICBtYWluOiAnIzIxOTZmMycsXG4gICAgICAgIGRhcms6ICcjMGQ0N2ExJyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI2IzZTVmYycsXG4gICAgICAgIG1haW46ICcjMDNhOWY0JyxcbiAgICAgICAgZGFyazogJyMwMTU3OWInLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgb2NlYW5Ta3k6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0UzRjJGRCcsXG4gICAgICAgIG1haW46ICcjMjE5NkYzJyxcbiAgICAgICAgZGFyazogJyMxNTY1QzAnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRTBGMkYxJyxcbiAgICAgICAgbWFpbjogJyMwMEJGQTUnLFxuICAgICAgICBkYXJrOiAnIzAwNzk2QicsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBnb2xkOiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNGRkY5QzQnLFxuICAgICAgICBtYWluOiAnI0ZGOTEwMCcsXG4gICAgICAgIGRhcms6ICcjRkY2RDAwJyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0VGRUJFOScsXG4gICAgICAgIG1haW46ICcjOEQ2RTYzJyxcbiAgICAgICAgZGFyazogJyM0RTM0MkUnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgYm90YW5pOiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNEQ0VEQzgnLFxuICAgICAgICBtYWluOiAnIzY4OUYzOCcsXG4gICAgICAgIGRhcms6ICcjMzM2OTFFJyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0ZDRTRFQycsXG4gICAgICAgIG1haW46ICcjRjA2MjkyJyxcbiAgICAgICAgZGFyazogJyNBRDE0NTcnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbGl0dGxlUXVlZW46IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI0UwRjdGQScsXG4gICAgICAgIG1haW46ICcjMDBCQ0Q0JyxcbiAgICAgICAgZGFyazogJyMwMDYwNjQnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjRkNFNEVDJyxcbiAgICAgICAgbWFpbjogJyNGMDYyOTInLFxuICAgICAgICBkYXJrOiAnI0FEMTQ1NycsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBwdXJwbGU6IHtcbiAgICBwYWxldHRlOiB7XG4gICAgICBwcmltYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI2YzZTVmNScsXG4gICAgICAgIG1haW46ICcjOWMyN2IwJyxcbiAgICAgICAgZGFyazogJyM2YTFiOWEnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjZWE4MGZjJyxcbiAgICAgICAgbWFpbjogJyNhYTAwZmYnLFxuICAgICAgICBkYXJrOiAnIzRhMTQ4YycsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBibGFjazoge1xuICAgIHBhbGV0dGU6IHtcbiAgICAgIHByaW1hcnk6IHtcbiAgICAgICAgbGlnaHQ6ICcjOWU5ZTllJyxcbiAgICAgICAgbWFpbjogJyMyMTIxMjEnLFxuICAgICAgICBkYXJrOiAnIzAwMCcsXG4gICAgICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnLFxuICAgICAgfSxcbiAgICAgIHNlY29uZGFyeToge1xuICAgICAgICBsaWdodDogJyNFMEUwRTAnLFxuICAgICAgICBtYWluOiAnIzc1NzU3NScsXG4gICAgICAgIGRhcms6ICcjNDI0MjQyJyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJyb3duOiB7XG4gICAgcGFsZXR0ZToge1xuICAgICAgcHJpbWFyeToge1xuICAgICAgICBsaWdodDogJyNkN2NjYzgnLFxuICAgICAgICBtYWluOiAnIzc5NTU0OCcsXG4gICAgICAgIGRhcms6ICcjNGUzNDJlJyxcbiAgICAgICAgY29udHJhc3RUZXh0OiAnI2ZmZicsXG4gICAgICB9LFxuICAgICAgc2Vjb25kYXJ5OiB7XG4gICAgICAgIGxpZ2h0OiAnI2NjYjBiMCcsXG4gICAgICAgIG1haW46ICcjNzk0ODQ4JyxcbiAgICAgICAgZGFyazogJyMzZTI3MjMnLFxuICAgICAgICBjb250cmFzdFRleHQ6ICcjZmZmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNzLXJ0bFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1wYWdlLXRyYW5zaXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvcC1sb2FkaW5nLWJhclwiKTsiXSwic291cmNlUm9vdCI6IiJ9