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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Forms/AuthFrame.js":
/*!***************************************!*\
  !*** ./components/Forms/AuthFrame.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../public/text/link */ "./public/text/link.js");
/* harmony import */ var _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/images/saas-logo.svg */ "./public/images/saas-logo.svg");
/* harmony import */ var _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form-style */ "./components/Forms/form-style.js");
var _jsxFileName = "D:\\Resultarmind\\linktree\\rmcsm\\resultarmind.com.br\\components\\Forms\\AuthFrame.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















function AuthFrame(props) {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_13__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_12__["useText"])();
  const {
    children,
    title,
    subtitle
  } = props;
  return __jsx("div", {
    className: classes.pageWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3___default.a, {
    mdUp: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.logo, classes.logoHeader),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_10__["default"].saas.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    component: "p",
    className: text.subtitle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_9___default.a.saas.projectName)))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default.a, {
    maxWidth: "lg",
    className: classes.innerWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.decoration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("svg", {
    className: classes.leftDeco,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("use", {
    xlinkHref: "/images/saas/deco-bg-left.svg#main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  })), __jsx("svg", {
    className: classes.rightDeco,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx("use", {
    xlinkHref: "/images/saas/deco-bg-right.svg#main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.formBox, 'fragment-fadeUp'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_10__["default"].saas.home,
    className: classes.backtohome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "ion-ios-home-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx("i", {
    className: "ion-ios-arrow-round-back",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: classes.authFrame,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    spacing: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 5,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_3___default.a, {
    smDown: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classes.greeting,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: classes.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 23
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: text.subtitle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 23
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_9___default.a.saas.projectName)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    gutterBottom: true,
    variant: "h4",
    className: text.title2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "h6",
    className: text.paragraph,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }, subtitle)))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    md: 7,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: classes.formWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, children)))))));
}

AuthFrame.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
AuthFrame.defaultProps = {
  subtitle: ''
};
/* harmony default export */ __webpack_exports__["default"] = (AuthFrame);

/***/ }),

/***/ "./components/Forms/Login.js":
/*!***********************************!*\
  !*** ./components/Forms/Login.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-material-ui-form-validator */ "react-material-ui-form-validator");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../public/text/link */ "./public/text/link.js");
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _SocialAuth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SocialAuth */ "./components/Forms/SocialAuth.js");
/* harmony import */ var _Title_TitleSecondary__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Title/TitleSecondary */ "./components/Title/TitleSecondary.js");
/* harmony import */ var _AuthFrame__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AuthFrame */ "./components/Forms/AuthFrame.js");
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form-style */ "./components/Forms/form-style.js");
var _jsxFileName = "D:\\Resultarmind\\linktree\\rmcsm\\resultarmind.com.br\\components\\Forms\\Login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















function Login(props) {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_18__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_14__["useText"])();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["useTheme"])();
  const {
    t
  } = props;
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.down('sm'));
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    email: '',
    password: ''
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["ValidatorForm"].addValidationRule('isPasswordMatch', value => {
      if (value !== values.password) {
        return false;
      }

      return true;
    });
  });
  const {
    0: check,
    1: setCheck
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleChange = name => event => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [name]: event.target.value
    }));
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    console.log('data submited');
  };

  return __jsx(_AuthFrame__WEBPACK_IMPORTED_MODULE_17__["default"], {
    title: t('common:login_title'),
    subtitle: t('common:login_subtitle'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.head,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_Title_TitleSecondary__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: isMobile ? 'center' : 'left',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, t('common:login')), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: "small",
    className: classes.buttonLink,
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_13__["default"].saas.register,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.icon, classes.signArrow),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "arrow_forward"), t('common:login_create'))), __jsx(_SocialAuth__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: classes.separator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, t('common:login_or'))), __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["ValidatorForm"], {
    onError: errors => console.log(errors),
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    container: true,
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:login_email'),
    onChange: handleChange('email'),
    name: "email",
    value: values.email,
    validators: ['required', 'isEmail'],
    errorMessages: ['This field is required', 'Email is not valid'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10___default.a, {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_11__["TextValidator"], {
    variant: "filled",
    type: "password",
    className: classes.input,
    label: t('common:login_password'),
    validators: ['required'],
    onChange: handleChange('password'),
    errorMessages: ['This field is required'],
    name: "password",
    value: values.password,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: classes.formHelper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_9___default.a, {
      checked: check,
      onChange: e => handleCheck(e),
      color: "secondary",
      value: check,
      className: classes.check,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }),
    label: __jsx("span", {
      className: text.caption,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, t('common:login_remember')),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    size: "small",
    className: classes.buttonLink,
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, t('common:login_forgot'))), __jsx("div", {
    className: classes.btnArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "contained",
    fullWidth: true,
    type: "submit",
    color: "secondary",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, t('common:continue'))))));
}

Login.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_12__["withTranslation"])(['common'])(Login));

/***/ }),

/***/ "./components/Forms/SocialAuth.js":
/*!****************************************!*\
  !*** ./components/Forms/SocialAuth.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-style */ "./components/Forms/form-style.js");
var _jsxFileName = "D:\\Resultarmind\\linktree\\rmcsm\\resultarmind.com.br\\components\\Forms\\SocialAuth.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function SocialAuth() {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return __jsx("div", {
    className: classes.socmedSideLogin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    className: classes.naviBtn,
    type: "button",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "ion-logo-facebook",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), "Facebook"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    className: classes.blueBtn,
    type: "button",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "ion-logo-twitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), "Twitter"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    className: classes.redBtn,
    type: "button",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("i", {
    className: "ion-logo-google",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), "Google"));
}

/* harmony default export */ __webpack_exports__["default"] = (SocialAuth);

/***/ }),

/***/ "./components/Forms/form-style.js":
/*!****************************************!*\
  !*** ./components/Forms/form-style.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);


const contactStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  title: {},
  pageWrap: {
    textAlign: 'center',
    background: theme.palette.primary.dark,
    minHeight: '100%',
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    padding: theme.spacing(10, 5),
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5, 0)
    },
    '& $title': {
      color: theme.palette.common.white
    },
    '& a': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      [theme.breakpoints.down('xs')]: {
        fontSize: 14
      }
    }
  },
  innerWrap: {
    textAlign: 'left'
  },
  fullFromWrap: {
    color: theme.palette.common.white,
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(4)
    }
  },
  formBox: {
    borderRadius: 40,
    overflow: 'hidden',
    background: 'transparent',
    boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.28)',
    [theme.breakpoints.down('xs')]: {
      boxShadow: 'none'
    }
  },
  desc: {
    color: theme.palette.common.white,
    textAlign: 'center',
    padding: theme.spacing(0, 10),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2)
    }
  },
  light: {},
  input: {
    width: '100%',
    '& label': {
      left: theme.spacing(0.5)
    },
    '& > div': {
      border: `1px solid ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.text.primary, 0.25)}`,
      background: 'none',
      overflow: 'hidden',
      '& input': {
        paddingLeft: theme.spacing(2),
        '&:focus': {
          background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.background.paper, 0.7)
        },
        '&:hover': {
          background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.background.paper, 0.7)
        }
      }
    },
    '&$light': {
      '& label': {
        color: theme.palette.common.white
      },
      '& > div': {
        border: `1px solid ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.primary.light, 0.5)}`,
        '& input': {
          color: theme.palette.common.white,
          '&:focus': {
            background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.text.hint, 0.2)
          },
          '&:hover': {
            background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.text.hint, 0.2)
          }
        }
      }
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    marginTop: theme.spacing(8),
    padding: theme.spacing(0, 15, 10),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 4, 10)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 1),
      marginTop: theme.spacing(2)
    }
  },
  formHelper: {
    display: 'flex',
    marginTop: theme.spacing(),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  flex: {},
  btnArea: {
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
      display: 'flex'
    },
    [theme.breakpoints.down('sm')]: {
      '& button': {
        marginTop: theme.spacing(4),
        width: '100%'
      }
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(5)
    },
    '& label': {
      position: 'relative'
    },
    '& button': {
      marginTop: theme.spacing(2),
      minHeight: 48,
      minWidth: 180
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    },
    '&$flex': {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      }
    }
  },
  primary: {
    background: theme.palette.primary.main,
    position: 'absolute',
    opacity: 0.08,
    transform: 'rotate(45deg)'
  },
  secondary: {
    background: theme.palette.secondary.main,
    position: 'absolute',
    opacity: 0.1,
    transform: 'rotate(45deg)'
  },
  decoTop: {
    '& $primary': {
      borderRadius: 80,
      width: 405,
      height: 405,
      top: -200,
      right: -50
    },
    '& $secondary': {
      borderRadius: 40,
      width: 205,
      height: 205,
      top: 24,
      right: -100
    }
  },
  decoBottom: {
    '& $primary': {
      borderRadius: 40,
      width: 205,
      height: 205,
      bottom: 180,
      left: -110
    },
    '& $secondary': {
      borderRadius: 80,
      width: 405,
      height: 405,
      bottom: -100,
      left: -100
    }
  },
  rightIcon: {
    marginLeft: theme.spacing()
  },
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    zIndex: 20,
    [theme.breakpoints.down('sm')]: {
      left: 'calc(50% - 40px)',
      top: 40,
      margin: 0
    },
    [theme.breakpoints.up('md')]: {
      marginTop: 20,
      marginLeft: 20
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 32,
      color: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.background.paper, 0.54)
    },
    '& > span i:first-child': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-child': {
        opacity: 0
      },
      '& > span i:last-child': {
        right: 30,
        opacity: 1
      }
    }
  },
  check: {
    '& svg': {
      fill: theme.palette.secondary.main
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
      opacity: 0.2,
      position: 'fixed',
      top: 0
    }
  },
  leftDeco: {
    left: theme.direction === 'rtl' ? 'auto' : -400,
    right: theme.direction === 'rtl' ? '-50%' : 'auto',
    width: 1200,
    height: 1500,
    transformOrigin: 'top left',
    [theme.breakpoints.up('md')]: {
      transform: 'scale(0.8)'
    }
  },
  rightDeco: {
    left: theme.direction === 'rtl' ? -150 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : 0,
    height: 1500,
    transformOrigin: 'top right',
    [theme.breakpoints.up('md')]: {
      transform: 'scale(0.8)'
    }
  },
  authFrame: {
    display: 'block',
    position: 'relative'
  },
  greeting: {
    display: 'flex',
    paddingTop: theme.spacing(16),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    textAlign: 'center',
    color: theme.palette.common.white,
    '& h6': {
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  logoHeader: {},
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    '&$logoHeader': {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    '& img': {
      width: 64
    },
    '& p, span': {
      display: 'block',
      paddingBottom: 4,
      color: theme.palette.common.white
    }
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '& a': {
      marginTop: theme.spacing(2)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
      '& a': {
        display: 'none'
      }
    }
  },
  signArrow: {},
  formWrap: {
    background: theme.palette.background.paper,
    position: 'relative',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(8)
    }
  },
  socmedSideLogin: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      display: 'block'
    },
    '& > *': {
      color: theme.palette.common.white,
      width: 160,
      padding: theme.spacing(),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(0, 0.5)
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(2),
        width: '100%'
      }
    },
    '& i': {
      color: theme.palette.common.white,
      marginRight: theme.spacing()
    }
  },
  blueBtn: {
    background: '#28aae1',
    '&:hover': {
      background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])('#28aae1', 0.2)
    }
  },
  naviBtn: {
    background: '#3b579d',
    '&:hover': {
      background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])('#3b579d', 0.2)
    }
  },
  redBtn: {
    background: '#dd493c',
    '&:hover': {
      background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])('#dd493c', 0.2)
    }
  },
  separator: {
    margin: `${theme.spacing(5)}px auto`,
    maxWidth: 300,
    minWidth: 200,
    textAlign: 'center',
    position: 'relative',
    '& p': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 12
      }
    },
    '&:before, &:after': {
      content: '""',
      borderTop: `1px solid ${theme.palette.text.hint}`,
      top: '50%',
      position: 'absolute',
      width: '20%'
    },
    '&:before': {
      left: 0
    },
    '&:after': {
      right: 0
    }
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (contactStyles);

/***/ }),

/***/ "./components/Title/TitleSecondary.js":
/*!********************************************!*\
  !*** ./components/Title/TitleSecondary.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TitleSecondary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _title_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title-style */ "./components/Title/title-style.js");
var _jsxFileName = "D:\\Resultarmind\\linktree\\rmcsm\\resultarmind.com.br\\components\\Title\\TitleSecondary.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function TitleSecondary(props) {
  const classes = Object(_title_style__WEBPACK_IMPORTED_MODULE_4__["default"])();
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

  return __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.titleSecondary, setAlign(align)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "h4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, children));
}
TitleSecondary.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
TitleSecondary.defaultProps = {
  align: 'left'
};

/***/ }),

/***/ "./components/Title/title-style.js":
/*!*****************************************!*\
  !*** ./components/Title/title-style.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
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
/* harmony default export */ __webpack_exports__["default"] = (titleStyles);

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

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Forms_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Forms/Login */ "./components/Forms/Login.js");
var _jsxFileName = "D:\\Resultarmind\\linktree\\rmcsm\\resultarmind.com.br\\pages\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Login() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_2___default.a.saas.name, "\xA0 - Login")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_components_Forms_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })));
}

Login.getInitialProps = async () => ({
  namespacesRequired: ['common', 'saas-landing']
});

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./public/images/saas-logo.svg":
/*!*************************************!*\
  !*** ./public/images/saas-logo.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0ODggNDkxLjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OCA0OTEuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4QkMzNEE7fQoJLnN0MXtmaWxsOiM5QzI3QjA7fQoJLnN0MntmaWxsOiM2NzNBQjc7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTI2LjgsNDYuN0w5LjYsMzc2LjZDLTYuMSw0MjAuOCwzMiw0NjUuNSw3OC4xLDQ1N2wzNDQuMy02My41YzQ2LjItOC41LDY1LjgtNjMuOCwzNS40LTk5LjZMMjMwLjcsMjcuNQoJCUMyMDAuMi04LjIsMTQyLjUsMi40LDEyNi44LDQ2Ljd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNODUuNCw2OS41TDM1LjYsNDE2LjFjLTYuNyw0Ni41LDM5LjUsODIuNyw4My4xLDY1LjNsMzI1LTEzMC4yYzQzLjYtMTcuNSw1MS45LTc1LjYsMTUtMTA0LjZMMTgzLjQsMzAuMwoJCUMxNDYuNSwxLjIsOTIsMjMuMSw4NS40LDY5LjV6Ii8+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTExLjgsMzU4VjIwOC43aDE4LjZ2MTMyLjdoNjkuNFYzNThIMTExLjh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTIzOC45LDMxMC41di03NS42aDE3Ljd2NzQuNWMwLDIxLjksMTIuMywzNS44LDM1LjEsMzUuOGMyMi44LDAsMzUuNC0xMy45LDM1LjQtMzUuOHYtNzQuNWgxNy43djc1LjYKCQkJYzAsMzAuNC0xNy45LDUwLjEtNTMsNTAuMUMyNTYuNSwzNjAuNywyMzguOSwzNDAuNywyMzguOSwzMTAuNXoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./public/text/brand.js":
/*!******************************!*\
  !*** ./public/text/brand.js ***!
  \******************************/
/*! no static exports found */
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

/***/ }),

/***/ "./public/text/link.js":
/*!*****************************!*\
  !*** ./public/text/link.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const link = {
  saas: {
    home: '/',
    contact: '/contact',
    login: '/login',
    register: '/register'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (link);

/***/ }),

/***/ "./theme/common.js":
/*!*************************!*\
  !*** ./theme/common.js ***!
  \*************************/
/*! exports provided: useTextAlign, useFloat, useText, useHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTextAlign", function() { return useTextAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFloat", function() { return useFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useText", function() { return useText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHidden", function() { return useHidden; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
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

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/colorManipulator":
/*!************************************************************!*\
  !*** external "@material-ui/core/styles/colorManipulator" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-i18next");

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

/***/ "react-material-ui-form-validator":
/*!***************************************************!*\
  !*** external "react-material-ui-form-validator" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-material-ui-form-validator");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9BdXRoRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9Mb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL1NvY2lhbEF1dGguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9mb3JtLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGl0bGUvVGl0bGVTZWNvbmRhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS90aXRsZS1zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9pMThuLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9pbWFnZXMvc2Fhcy1sb2dvLnN2ZyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdGV4dC9icmFuZC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvdGV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3RoZW1lL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWF0ZXJpYWwtdWktZm9ybS12YWxpZGF0b3JcIiJdLCJuYW1lcyI6WyJBdXRoRnJhbWUiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ0ZXh0IiwidXNlVGV4dCIsImNoaWxkcmVuIiwidGl0bGUiLCJzdWJ0aXRsZSIsInBhZ2VXcmFwIiwiY2xzeCIsImxvZ28iLCJsb2dvSGVhZGVyIiwicm91dGVyTGluayIsInNhYXMiLCJob21lIiwic3VidGl0bGUyIiwiYnJhbmQiLCJwcm9qZWN0TmFtZSIsImlubmVyV3JhcCIsImRlY29yYXRpb24iLCJsZWZ0RGVjbyIsInJpZ2h0RGVjbyIsImZvcm1Cb3giLCJiYWNrdG9ob21lIiwiYXV0aEZyYW1lIiwiZ3JlZXRpbmciLCJ0aXRsZTIiLCJwYXJhZ3JhcGgiLCJmb3JtV3JhcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwiTG9naW4iLCJ0aGVtZSIsInVzZVRoZW1lIiwidCIsImlzTW9iaWxlIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwiZG93biIsInZhbHVlcyIsInNldFZhbHVlcyIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZUVmZmVjdCIsIlZhbGlkYXRvckZvcm0iLCJhZGRWYWxpZGF0aW9uUnVsZSIsInZhbHVlIiwiY2hlY2siLCJzZXRDaGVjayIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUNoZWNrIiwiY2hlY2tlZCIsImhhbmRsZVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJoZWFkIiwiYnV0dG9uTGluayIsInJvdXRlTGluayIsInJlZ2lzdGVyIiwiaWNvbiIsInNpZ25BcnJvdyIsInNlcGFyYXRvciIsImVycm9ycyIsImlucHV0IiwiZm9ybUhlbHBlciIsImUiLCJjYXB0aW9uIiwiYnRuQXJlYSIsImZ1bmMiLCJ3aXRoVHJhbnNsYXRpb24iLCJTb2NpYWxBdXRoIiwic29jbWVkU2lkZUxvZ2luIiwibmF2aUJ0biIsImJsdWVCdG4iLCJyZWRCdG4iLCJjb250YWN0U3R5bGVzIiwibWFrZVN0eWxlcyIsInRleHRBbGlnbiIsImJhY2tncm91bmQiLCJwYWxldHRlIiwicHJpbWFyeSIsImRhcmsiLCJtaW5IZWlnaHQiLCJwb3NpdGlvbiIsIndpZHRoIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJzcGFjaW5nIiwidXAiLCJkaXNwbGF5IiwiY29sb3IiLCJjb21tb24iLCJ3aGl0ZSIsInR5cGUiLCJsaWdodCIsIm1haW4iLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFNpemUiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRXZWlnaHQiLCJ0eXBvZ3JhcGh5IiwiZm9udFdlaWdodFJlZ3VsYXIiLCJmdWxsRnJvbVdyYXAiLCJwYWRkaW5nVG9wIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJib3hTaGFkb3ciLCJkZXNjIiwibGVmdCIsImJvcmRlciIsImZhZGUiLCJwYWRkaW5nTGVmdCIsInBhcGVyIiwiaGludCIsImZvcm0iLCJtYXJnaW5Ub3AiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJmbGV4IiwibWFyZ2luQm90dG9tIiwibWluV2lkdGgiLCJzZWNvbmRhcnkiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwiZGVjb1RvcCIsImhlaWdodCIsInRvcCIsInJpZ2h0IiwiZGVjb0JvdHRvbSIsImJvdHRvbSIsInJpZ2h0SWNvbiIsIm1hcmdpbkxlZnQiLCJ6SW5kZXgiLCJtYXJnaW4iLCJ0cmFuc2l0aW9uIiwiZmlsbCIsImNsaXAiLCJkaXJlY3Rpb24iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luUmlnaHQiLCJkYXJrZW4iLCJtYXhXaWR0aCIsImNvbnRlbnQiLCJib3JkZXJUb3AiLCJUaXRsZVNlY29uZGFyeSIsImFsaWduIiwic2V0QWxpZ24iLCJhbGlnbm1lbnQiLCJjZW50ZXIiLCJ0aXRsZVNlY29uZGFyeSIsInRpdGxlU3R5bGVzIiwibGluZUhlaWdodCIsImZvbnRXZWlnaHRCb2xkIiwiTmV4dEkxOE5leHQiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0TGFuZ3VhZ2UiLCJvdGhlckxhbmd1YWdlcyIsImZhbGxiYWNrTG5nIiwiaW5pdEltbWVkaWF0ZSIsImxvY2FsZVBhdGgiLCJyZWFjdCIsInVzZVN1c3BlbnNlIiwibG9jYWxlU3VicGF0aHMiLCJhcmEiLCJkZXUiLCJlbmciLCJpbmQiLCJwcnQiLCJ6aG8iLCJnZXRJbml0aWFsUHJvcHMiLCJuYW1lc3BhY2VzUmVxdWlyZWQiLCJwcmVmaXgiLCJmb290ZXJUZXh0IiwibG9nb1RleHQiLCJ1cmwiLCJpbWciLCJub3RpZk1zZyIsImxpbmsiLCJjb250YWN0IiwibG9naW4iLCJ1c2VUZXh0QWxpZ24iLCJ0ZXh0Q2VudGVyIiwidGV4dExlZnQiLCJ0ZXh0UmlnaHQiLCJ1c2VGbG9hdCIsImZsb2F0TGVmdCIsImZsb2F0IiwiZmxvYXRSaWdodCIsImZvbnRXZWlnaHRNZWRpdW0iLCJ1c2VIaWRkZW4iLCJsZ0Rvd24iLCJtZERvd24iLCJzbURvd24iLCJ4c0Rvd24iLCJsZ1VwIiwibWRVcCIsInNtVXAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDeEIsUUFBTUMsT0FBTyxHQUFHQyw0REFBUyxFQUF6QjtBQUNBLFFBQU1DLElBQUksR0FBR0MsOERB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LE1BQUksRUFBRTtBQUNKLEtBQUMxSyxLQUFLLENBQUNLLFdBQU4sQ0FBa0J1RCxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCQyxhQUFPLEVBQUU7QUFEbUI7QUFEMUIsR0FyQnNDO0FBMEI1QzhHLE1BQUksRUFBRTtBQUNKLEtBQUMzSyxLQUFLLENBQUNLLFdBQU4sQ0FBa0J1RCxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCQyxhQUFPLEVBQUU7QUFEbUI7QUFEMUIsR0ExQnNDO0FBK0I1QytHLE1BQUksRUFBRTtBQUNKLEtBQUM1SyxLQUFLLENBQUNLLFdBQU4sQ0FBa0J1RCxFQUFsQixDQUFxQixJQUFyQixDQUFELEdBQThCO0FBQzVCQyxhQUFPLEVBQUU7QUFEbUI7QUFEMUI7QUEvQnNDLENBQUwsQ0FBTixDQUE1QixDOzs7Ozs7Ozs7OztBQzVGUCxxRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzRTs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2RCIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbG9naW4uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IEhpZGRlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW4nO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBicmFuZCBmcm9tICd+L3B1YmxpYy90ZXh0L2JyYW5kJztcbmltcG9ydCByb3V0ZXJMaW5rIGZyb20gJ34vcHVibGljL3RleHQvbGluayc7XG5pbXBvcnQgbG9nbyBmcm9tICd+L3B1YmxpYy9pbWFnZXMvc2Fhcy1sb2dvLnN2Zyc7XG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICcuL2Zvcm0tc3R5bGUnO1xuXG5mdW5jdGlvbiBBdXRoRnJhbWUocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xuICBjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSwgc3VidGl0bGUgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhZ2VXcmFwfT5cbiAgICAgIDxIaWRkZW4gbWRVcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5sb2dvLCBjbGFzc2VzLmxvZ29IZWFkZXIpfT5cbiAgICAgICAgICA8YSBocmVmPXtyb3V0ZXJMaW5rLnNhYXMuaG9tZX0+XG4gICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIC8+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJwXCIgY2xhc3NOYW1lPXt0ZXh0LnN1YnRpdGxlMn0+XG4gICAgICAgICAgICAgIHticmFuZC5zYWFzLnByb2plY3ROYW1lfVxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0hpZGRlbj5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbm5lcldyYXB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZWNvcmF0aW9ufT5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGVmdERlY299XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIvaW1hZ2VzL3NhYXMvZGVjby1iZy1sZWZ0LnN2ZyNtYWluXCIgLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucmlnaHREZWNvfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiL2ltYWdlcy9zYWFzL2RlY28tYmctcmlnaHQuc3ZnI21haW5cIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmZvcm1Cb3gsICdmcmFnbWVudC1mYWRlVXAnKX0+XG4gICAgICAgICAgPEljb25CdXR0b24gaHJlZj17cm91dGVyTGluay5zYWFzLmhvbWV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrdG9ob21lfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1pb3MtaG9tZS1vdXRsaW5lXCIgLz5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1pb3MtYXJyb3ctcm91bmQtYmFja1wiIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGhGcmFtZX0+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezV9IHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgPEhpZGRlbiBzbURvd24+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmVldGluZ30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHticmFuZC5zYWFzLnByb2plY3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDRcIiBjbGFzc05hbWU9e3RleHQudGl0bGUyfT5cbiAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjbGFzc05hbWU9e3RleHQucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgICAgICAgICB7IHN1YnRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17N30geHM9ezEyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtV3JhcH0+XG4gICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5BdXRoRnJhbWUucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3VidGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5BdXRoRnJhbWUuZGVmYXVsdFByb3BzID0ge1xuICBzdWJ0aXRsZTogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoRnJhbWU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IHsgVmFsaWRhdG9yRm9ybSwgVGV4dFZhbGlkYXRvciB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWZvcm0tdmFsaWRhdG9yJztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XG5pbXBvcnQgcm91dGVMaW5rIGZyb20gJ34vcHVibGljL3RleHQvbGluayc7XG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xuaW1wb3J0IFNvY2lhbEF1dGggZnJvbSAnLi9Tb2NpYWxBdXRoJztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZS9UaXRsZVNlY29uZGFyeSc7XG5pbXBvcnQgQXV0aEZyYW1lIGZyb20gJy4vQXV0aEZyYW1lJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mb3JtLXN0eWxlJztcblxuZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHsgdCB9ID0gcHJvcHM7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpKTtcblxuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgVmFsaWRhdG9yRm9ybS5hZGRWYWxpZGF0aW9uUnVsZSgnaXNQYXNzd29yZE1hdGNoJywgKHZhbHVlKSA9PiB7XG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlcy5wYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgW2NoZWNrLCBzZXRDaGVja10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gbmFtZSA9PiBldmVudCA9PiB7XG4gICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBbbmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGVjayA9IGV2ZW50ID0+IHtcbiAgICBzZXRDaGVjayhldmVudC50YXJnZXQuY2hlY2tlZCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdkYXRhIHN1Ym1pdGVkJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aEZyYW1lIHRpdGxlPXt0KCdjb21tb246bG9naW5fdGl0bGUnKX0gc3VidGl0bGU9e3QoJ2NvbW1vbjpsb2dpbl9zdWJ0aXRsZScpfT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWR9PlxuICAgICAgICAgIDxUaXRsZSBhbGlnbj17aXNNb2JpbGUgPyAnY2VudGVyJyA6ICdsZWZ0J30+XG4gICAgICAgICAgICB7dCgnY29tbW9uOmxvZ2luJyl9XG4gICAgICAgICAgPC9UaXRsZT5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25MaW5rfSBocmVmPXtyb3V0ZUxpbmsuc2Fhcy5yZWdpc3Rlcn0+XG4gICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5pY29uLCBjbGFzc2VzLnNpZ25BcnJvdyl9PmFycm93X2ZvcndhcmQ8L0ljb24+XG4gICAgICAgICAgICB7dCgnY29tbW9uOmxvZ2luX2NyZWF0ZScpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNvY2lhbEF1dGggLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VwYXJhdG9yfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgIHt0KCdjb21tb246bG9naW5fb3InKX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VmFsaWRhdG9yRm9ybVxuICAgICAgICAgIG9uRXJyb3I9e2Vycm9ycyA9PiBjb25zb2xlLmxvZyhlcnJvcnMpfVxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgIDxUZXh0VmFsaWRhdG9yXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxuICAgICAgICAgICAgICAgIGxhYmVsPXt0KCdjb21tb246bG9naW5fZW1haWwnKX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5lbWFpbH1cbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtbJ3JlcXVpcmVkJywgJ2lzRW1haWwnXX1cbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzPXtbJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnLCAnRW1haWwgaXMgbm90IHZhbGlkJ119XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgIDxUZXh0VmFsaWRhdG9yXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2NvbW1vbjpsb2dpbl9wYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcnM9e1sncmVxdWlyZWQnXX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXM9e1snVGhpcyBmaWVsZCBpcyByZXF1aXJlZCddfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUhlbHBlcn0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICBjb250cm9sPXsoXG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hlY2soZSl9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y2hlY2t9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgbGFiZWw9eyhcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RleHQuY2FwdGlvbn0+XG4gICAgICAgICAgICAgICAgICB7dCgnY29tbW9uOmxvZ2luX3JlbWVtYmVyJyl9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkxpbmt9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgIHt0KCdjb21tb246bG9naW5fZm9yZ290Jyl9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idG5BcmVhfT5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGZ1bGxXaWR0aCB0eXBlPVwic3VibWl0XCIgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAge3QoJ2NvbW1vbjpjb250aW51ZScpfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVmFsaWRhdG9yRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvQXV0aEZyYW1lPlxuICApO1xufVxuXG5cbkxvZ2luLnByb3BUeXBlcyA9IHtcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKFsnY29tbW9uJ10pKExvZ2luKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZm9ybS1zdHlsZSc7XG5cbmZ1bmN0aW9uIFNvY2lhbEF1dGgoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNvY21lZFNpZGVMb2dpbn0+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmF2aUJ0bn1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICA+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1sb2dvLWZhY2Vib29rXCIgLz5cbiAgICAgICAgRmFjZWJvb2tcbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJsdWVCdG59XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tbG9nby10d2l0dGVyXCIgLz5cbiAgICAgICAgVHdpdHRlclxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucmVkQnRufVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLWxvZ28tZ29vZ2xlXCIgLz5cbiAgICAgICAgR29vZ2xlXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxBdXRoO1xuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBmYWRlLCBkYXJrZW4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcic7XG5cbmNvbnN0IGNvbnRhY3RTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHRpdGxlOiB7fSxcbiAgcGFnZVdyYXA6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxMCwgNSksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDUsIDApXG4gICAgfSxcbiAgICAnJiAkdGl0bGUnOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgfSxcbiAgICAnJiBhJzoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0IDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgICBmb250U2l6ZTogMTRcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBpbm5lcldyYXA6IHtcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgfSxcbiAgZnVsbEZyb21XcmFwOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDQpXG4gICAgfVxuICB9LFxuICBmb3JtQm94OiB7XG4gICAgYm9yZGVyUmFkaXVzOiA0MCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBib3hTaGFkb3c6ICcwIDEuNXB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yOCknLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICB9XG4gIH0sXG4gIGRlc2M6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEwKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXG4gICAgfVxuICB9LFxuICBsaWdodDoge30sXG4gIGlucHV0OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICAnJiBsYWJlbCc6IHtcbiAgICAgIGxlZnQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgICB9LFxuICAgICcmID4gZGl2Jzoge1xuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7ZmFkZSh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSwgMC4yNSl9YCxcbiAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICcmIGlucHV0Jzoge1xuICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZmFkZSh0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsIDAuNylcbiAgICAgICAgfSxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZmFkZSh0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsIDAuNylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgJyYkbGlnaHQnOiB7XG4gICAgICAnJiBsYWJlbCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgfSxcbiAgICAgICcmID4gZGl2Jzoge1xuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtmYWRlKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCwgMC41KX1gLFxuICAgICAgICAnJiBpbnB1dCc6IHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKHRoZW1lLnBhbGV0dGUudGV4dC5oaW50LCAwLjIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUodGhlbWUucGFsZXR0ZS50ZXh0LmhpbnQsIDAuMilcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBmb3JtOiB7XG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMTUsIDEwKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgNCwgMTApXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgMSksXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgfSxcbiAgZm9ybUhlbHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoKSxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgfVxuICB9LFxuICBmbGV4OiB7fSxcbiAgYnRuQXJlYToge1xuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICAnJiBidXR0b24nOiB7XG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNSlcbiAgICB9LFxuICAgICcmIGxhYmVsJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuICAgICcmIGJ1dHRvbic6IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIG1pbkhlaWdodDogNDgsXG4gICAgICBtaW5XaWR0aDogMTgwXG4gICAgfSxcbiAgICAnJiBzcGFuJzoge1xuICAgICAgJyYgYSc6IHtcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lICFpbXBvcnRhbnQnLFxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgIH1cbiAgICB9LFxuICAgICcmJGZsZXgnOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBwcmltYXJ5OiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgb3BhY2l0eTogMC4wOCxcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDVkZWcpJyxcbiAgfSxcbiAgc2Vjb25kYXJ5OiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBvcGFjaXR5OiAwLjEsXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDQ1ZGVnKScsXG4gIH0sXG4gIGRlY29Ub3A6IHtcbiAgICAnJiAkcHJpbWFyeSc6IHtcbiAgICAgIGJvcmRlclJhZGl1czogODAsXG4gICAgICB3aWR0aDogNDA1LFxuICAgICAgaGVpZ2h0OiA0MDUsXG4gICAgICB0b3A6IC0yMDAsXG4gICAgICByaWdodDogLTUwLFxuICAgIH0sXG4gICAgJyYgJHNlY29uZGFyeSc6IHtcbiAgICAgIGJvcmRlclJhZGl1czogNDAsXG4gICAgICB3aWR0aDogMjA1LFxuICAgICAgaGVpZ2h0OiAyMDUsXG4gICAgICB0b3A6IDI0LFxuICAgICAgcmlnaHQ6IC0xMDAsXG4gICAgfVxuICB9LFxuICBkZWNvQm90dG9tOiB7XG4gICAgJyYgJHByaW1hcnknOiB7XG4gICAgICBib3JkZXJSYWRpdXM6IDQwLFxuICAgICAgd2lkdGg6IDIwNSxcbiAgICAgIGhlaWdodDogMjA1LFxuICAgICAgYm90dG9tOiAxODAsXG4gICAgICBsZWZ0OiAtMTEwLFxuICAgIH0sXG4gICAgJyYgJHNlY29uZGFyeSc6IHtcbiAgICAgIGJvcmRlclJhZGl1czogODAsXG4gICAgICB3aWR0aDogNDA1LFxuICAgICAgaGVpZ2h0OiA0MDUsXG4gICAgICBib3R0b206IC0xMDAsXG4gICAgICBsZWZ0OiAtMTAwLFxuICAgIH1cbiAgfSxcbiAgcmlnaHRJY29uOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygpXG4gIH0sXG4gIGJhY2t0b2hvbWU6IHtcbiAgICB3aWR0aDogODAsXG4gICAgaGVpZ2h0OiA4MCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBtYXJnaW5Ub3A6IDIwLFxuICAgIG1hcmdpbkxlZnQ6IDIwLFxuICAgIHpJbmRleDogMjAsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBsZWZ0OiAnY2FsYyg1MCUgLSA0MHB4KScsXG4gICAgICB0b3A6IDQwLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luVG9wOiAyMCxcbiAgICAgIG1hcmdpbkxlZnQ6IDIwLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9LFxuICAgICcmIGknOiB7XG4gICAgICBmb250U2l6ZTogMzIsXG4gICAgICBjb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsIDAuNTQpXG4gICAgfSxcbiAgICAnJiA+IHNwYW4gaTpmaXJzdC1jaGlsZCc6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAwLjNzIGVhc2UnXG4gICAgfSxcbiAgICAnJiA+IHNwYW4gaTpsYXN0LWNoaWxkJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICByaWdodDogMCxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZSdcbiAgICB9LFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgJyYgPiBzcGFuIGk6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9LFxuICAgICAgJyYgPiBzcGFuIGk6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgcmlnaHQ6IDMwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIGNoZWNrOiB7XG4gICAgJyYgc3ZnJzoge1xuICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgIH1cbiAgfSxcbiAgZGVjb3JhdGlvbjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGNsaXA6ICdyZWN0KDAsIGF1dG8sIGF1dG8sIDApJyxcbiAgICAnJiBzdmcnOiB7XG4gICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICAgb3BhY2l0eTogMC4yLFxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB0b3A6IDAsXG4gICAgfVxuICB9LFxuICBsZWZ0RGVjbzoge1xuICAgIGxlZnQ6IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnYXV0bycgOiAtNDAwLFxuICAgIHJpZ2h0OiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJy01MCUnIDogJ2F1dG8nLFxuICAgIHdpZHRoOiAxMjAwLFxuICAgIGhlaWdodDogMTUwMCxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXG4gICAgfVxuICB9LFxuICByaWdodERlY286IHtcbiAgICBsZWZ0OiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gLTE1MCA6ICdhdXRvJyxcbiAgICByaWdodDogdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICdhdXRvJyA6IDAsXG4gICAgaGVpZ2h0OiAxNTAwLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXG4gICAgfVxuICB9LFxuICBhdXRoRnJhbWU6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIGdyZWV0aW5nOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMTYpLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgJyYgaDYnOiB7XG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyXG4gICAgfVxuICB9LFxuICBsb2dvSGVhZGVyOiB7fSxcbiAgbG9nbzoge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgJyYkbG9nb0hlYWRlcic6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogMTBcbiAgICB9LFxuICAgICcmIGltZyc6IHtcbiAgICAgIHdpZHRoOiA2NCxcbiAgICB9LFxuICAgICcmIHAsIHNwYW4nOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcGFkZGluZ0JvdHRvbTogNCxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICB9XG4gIH0sXG4gIGhlYWQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgJyYgYSc6IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgJyYgYSc6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzaWduQXJyb3c6IHt9LFxuICBmb3JtV3JhcDoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNSlcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOClcbiAgICB9XG4gIH0sXG4gIHNvY21lZFNpZGVMb2dpbjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9LFxuICAgICcmID4gKic6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgIHdpZHRoOiAxNjAsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKCksXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDAuNSlcbiAgICAgIH0sXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgIH0sXG4gICAgJyYgaSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKClcbiAgICB9XG4gIH0sXG4gIGJsdWVCdG46IHtcbiAgICBiYWNrZ3JvdW5kOiAnIzI4YWFlMScsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJyMyOGFhZTEnLCAwLjIpLFxuICAgIH1cbiAgfSxcbiAgbmF2aUJ0bjoge1xuICAgIGJhY2tncm91bmQ6ICcjM2I1NzlkJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbignIzNiNTc5ZCcsIDAuMiksXG4gICAgfVxuICB9LFxuICByZWRCdG46IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2RkNDkzYycsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJyNkZDQ5M2MnLCAwLjIpLFxuICAgIH1cbiAgfSxcbiAgc2VwYXJhdG9yOiB7XG4gICAgbWFyZ2luOiBgJHt0aGVtZS5zcGFjaW5nKDUpfXB4IGF1dG9gLFxuICAgIG1heFdpZHRoOiAzMDAsXG4gICAgbWluV2lkdGg6IDIwMCxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICcmIHAnOiB7XG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgICAgZm9udFNpemU6IDEyXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyY6YmVmb3JlLCAmOmFmdGVyJzoge1xuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS50ZXh0LmhpbnR9YCxcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMjAlJ1xuICAgIH0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgbGVmdDogMCxcbiAgICB9LFxuICAgICcmOmFmdGVyJzoge1xuICAgICAgcmlnaHQ6IDAsXG4gICAgfVxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RTdHlsZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vdGl0bGUtc3R5bGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaXRsZVNlY29uZGFyeShwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGFsaWduIH0gPSBwcm9wcztcbiAgY29uc3Qgc2V0QWxpZ24gPSBhbGlnbm1lbnQgPT4ge1xuICAgIHN3aXRjaCAoYWxpZ25tZW50KSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMubGVmdDtcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMucmlnaHQ7XG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5jZW50ZXI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5sZWZ0O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLnRpdGxlU2Vjb25kYXJ5LCBzZXRBbGlnbihhbGlnbikpfT5cbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblRpdGxlU2Vjb25kYXJ5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gIGFsaWduOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuVGl0bGVTZWNvbmRhcnkuZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbjogJ2xlZnQnXG59O1xuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHRpdGxlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBsZWZ0OiB7XG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBsZWZ0OiAwLFxuICAgIH1cbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICByaWdodDogMCxcbiAgICB9XG4gIH0sXG4gIGNlbnRlcjoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIG1hcmdpbkxlZnQ6IC0zNSxcbiAgICB9XG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoOSksXG4gICAgJyYgaDMnOiB7XG4gICAgICBmb250U2l6ZTogMzYsXG4gICAgICBsaW5lSGVpZ2h0OiAnNTZweCcsXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgICAgbGluZUhlaWdodDogJzQ4cHgnXG4gICAgICB9LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiAyOCxcbiAgICAgICAgbGluZUhlaWdodDogJzQ0cHgnLFxuICAgICAgfVxuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICB3aWR0aDogNzAsXG4gICAgICBoZWlnaHQ6IDEyLFxuICAgICAgYm90dG9tOiAtMzIsXG4gICAgICBib3JkZXJSYWRpdXM6IDEyLFxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH0sXG4gICAgJyYgc3Ryb25nJzoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgIH1cbiAgfSxcbiAgdGl0bGVTZWNvbmRhcnk6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxMiksXG4gICAgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEwKVxuICAgIH0sXG4gICAgJyYgaDQnOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICBmb250U2l6ZTogMzYsXG4gICAgICBsaW5lSGVpZ2h0OiAnNTZweCcsXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRCb2xkLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgICAgbGluZUhlaWdodDogJzQ4cHgnXG4gICAgICB9LFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiAyOCxcbiAgICAgICAgbGluZUhlaWdodDogJzQ0cHgnLFxuICAgICAgfVxuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICB3aWR0aDogNzAsXG4gICAgICBoZWlnaHQ6IDEyLFxuICAgICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKC00KSxcbiAgICAgIGJvcmRlclJhZGl1czogMTIsXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICAnJiBzdHJvbmcnOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgfVxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRpdGxlU3R5bGVzO1xuIiwiY29uc3QgTmV4dEkxOE5leHQgPSByZXF1aXJlKCduZXh0LWkxOG5leHQnKS5kZWZhdWx0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBOZXh0STE4TmV4dCh7XG4gIGRlZmF1bHRMYW5ndWFnZTogJ2VuZycsXG4gIG90aGVyTGFuZ3VhZ2VzOiBbJ2RldScsICdpbmQnLCAnYXJhJywgJ3BydCcsICd6aG8nXSxcbiAgZmFsbGJhY2tMbmc6ICdlbmcnLFxuICBpbml0SW1tZWRpYXRlOiBmYWxzZSxcbiAgbG9jYWxlUGF0aDogJ3B1YmxpYy9sb2NhbGVzJyxcbiAgcmVhY3Q6IHtcbiAgICB1c2VTdXNwZW5zZTogZmFsc2UsXG4gIH0sXG4gIGxvY2FsZVN1YnBhdGhzOiB7XG4gICAgYXJhOiAnYXInLFxuICAgIGRldTogJ2RlJyxcbiAgICBlbmc6ICdlbicsXG4gICAgaW5kOiAnaWQnLFxuICAgIHBydDogJ3B0JyxcbiAgICB6aG86ICd6aCcsXG4gIH0sXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgYnJhbmQgZnJvbSAnLi4vcHVibGljL3RleHQvYnJhbmQnO1xuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1zL0xvZ2luJztcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5cbiAgICAgICAgICB7IGJyYW5kLnNhYXMubmFtZSB9XG4gICAgICAgICAgJm5ic3A7IC0gTG9naW5cbiAgICAgICAgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMb2dpbkZvcm0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbkxvZ2luLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb21tb24nLCAnc2Fhcy1sYW5kaW5nJ10sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREl5TGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWt4aGVXVnlYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb0pJSFpwWlhkQ2IzZzlJakFnTUNBME9EZ2dORGt4TGpraUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURRNE9DQTBPVEV1T1RzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZ284YzNSNWJHVWdkSGx3WlQwaWRHVjRkQzlqYzNNaVBnb0pMbk4wTUh0bWFXeHNPaU00UWtNek5FRTdmUW9KTG5OME1YdG1hV3hzT2lNNVF6STNRakE3ZlFvSkxuTjBNbnRtYVd4c09pTTJOek5CUWpjN2MzUnliMnRsT2lOR1JrWkdSa1k3YzNSeWIydGxMWGRwWkhSb09qSXdPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzMwS1BDOXpkSGxzWlQ0S1BHYytDZ2s4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1USTJMamdzTkRZdU4wdzVMallzTXpjMkxqWkRMVFl1TVN3ME1qQXVPQ3d6TWl3ME5qVXVOU3czT0M0eExEUTFOMnd6TkRRdU15MDJNeTQxWXpRMkxqSXRPQzQxTERZMUxqZ3ROak11T0N3ek5TNDBMVGs1TGpaTU1qTXdMamNzTWpjdU5Rb0pDVU15TURBdU1pMDRMaklzTVRReUxqVXNNaTQwTERFeU5pNDRMRFEyTGpkNklpOCtDZ2s4Y0dGMGFDQmpiR0Z6Y3owaWMzUXhJaUJrUFNKTk9EVXVOQ3cyT1M0MVRETTFMallzTkRFMkxqRmpMVFl1Tnl3ME5pNDFMRE01TGpVc09ESXVOeXc0TXk0eExEWTFMak5zTXpJMUxURXpNQzR5WXpRekxqWXRNVGN1TlN3MU1TNDVMVGMxTGpZc01UVXRNVEEwTGpaTU1UZ3pMalFzTXpBdU13b0pDVU14TkRZdU5Td3hMaklzT1RJc01qTXVNU3c0TlM0MExEWTVMalY2SWk4K0NnazhaejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F5SWlCa1BTSk5NVEV4TGpnc016VTRWakl3T0M0M2FERTRMaloyTVRNeUxqZG9Oamt1TkZZek5UaElNVEV4TGpoNklpOCtDZ2tKUEhCaGRHZ2dZMnhoYzNNOUluTjBNaUlnWkQwaVRUSXpPQzQ1TERNeE1DNDFkaTAzTlM0MmFERTNMamQyTnpRdU5XTXdMREl4TGprc01USXVNeXd6TlM0NExETTFMakVzTXpVdU9HTXlNaTQ0TERBc016VXVOQzB4TXk0NUxETTFMalF0TXpVdU9IWXROelF1TldneE55NDNkamMxTGpZS0NRa0pZekFzTXpBdU5DMHhOeTQ1TERVd0xqRXROVE1zTlRBdU1VTXlOVFl1TlN3ek5qQXVOeXd5TXpndU9Td3pOREF1Tnl3eU16Z3VPU3d6TVRBdU5Yb2lMejRLQ1R3dlp6NEtQQzluUGdvOEwzTjJaejRLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2Fhczoge1xuICAgIG5hbWU6ICdTb2Z0d2FyZScsXG4gICAgZGVzYzogJ0x1eGlyZW4gU2FhcyAtIFJlYWN0IFNpbmdsZSBMYW5kaW5nIFBhZ2UgVGVtcGxhdGUnLFxuICAgIHByZWZpeDogJ2x1eGlyZW4nLFxuICAgIGZvb3RlclRleHQ6ICdMdXhpcmVuIFRoZW1lIDIwMjEnLFxuICAgIGxvZ29UZXh0OiAnTHV4aXJlbiBTb2Z0d2FyZScsXG4gICAgcHJvamVjdE5hbWU6ICdTb2Z0d2FyZScsXG4gICAgdXJsOiAnbHV4aXJlYWN0LnV4LW1hZXN0cm8uY29tL3NhYXMnLFxuICAgIGltZzogJy9zdGF0aWMvaW1hZ2VzL3NhYXMtbG9nby5wbmcnLFxuICAgIG5vdGlmTXNnOiAnRG9uZWMgc2l0IGFtZXQgbnVsbGEgc2VkIGFyY3UgcHVsdmluYXIgdWx0cmljaWVzIGNvbW1vZG8gaWQgbGlndWxhLidcbiAgfVxufTtcbiIsImNvbnN0IGxpbmsgPSB7XG4gIHNhYXM6IHtcbiAgICBob21lOiAnLycsXG4gICAgY29udGFjdDogJy9jb250YWN0JyxcbiAgICBsb2dpbjogJy9sb2dpbicsXG4gICAgcmVnaXN0ZXI6ICcvcmVnaXN0ZXInXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpbms7XG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IHVzZVRleHRBbGlnbiA9IG1ha2VTdHlsZXMoe1xuICB0ZXh0Q2VudGVyOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9LFxuICB0ZXh0TGVmdDoge1xuICAgIHRleHRBbGlnbjogJ2xlZnQnXG4gIH0sXG4gIHRleHRSaWdodDoge1xuICAgIHRleHRBbGlnbjogJ3JpZ2h0J1xuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHVzZUZsb2F0ID0gbWFrZVN0eWxlcyh7XG4gIGZsb2F0TGVmdDoge1xuICAgIGZsb2F0OiAnbGVmdCdcbiAgfSxcbiAgZmxvYXRSaWdodDoge1xuICAgIGZsb2F0OiAncmlnaHQnXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHVzZVRleHQgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcbiAgICBmb250U2l6ZTogNDgsXG4gICAgbGluZUhlaWdodDogJzcycHgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgZm9udFNpemU6IDM4LFxuICAgICAgbGluZUhlaWdodDogJzYwcHgnXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIGZvbnRTaXplOiAyOCxcbiAgICAgIGxpbmVIZWlnaHQ6ICc0NHB4J1xuICAgIH0sXG4gIH0sXG4gIHRpdGxlMjoge1xuICAgIGZvbnRTaXplOiAzNixcbiAgICBsaW5lSGVpZ2h0OiAnNTZweCcsXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgIGxpbmVIZWlnaHQ6ICc0OHB4J1xuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBmb250U2l6ZTogMjQsXG4gICAgICBsaW5lSGVpZ2h0OiAnMzZweCcsXG4gICAgfVxuICB9LFxuICBzdWJ0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcbiAgICBmb250U2l6ZTogMjgsXG4gICAgbGluZUhlaWdodDogJzQ0cHgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgbGluZUhlaWdodDogJzM2cHgnLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBmb250U2l6ZTogMTgsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjhweCcsXG4gICAgfSxcbiAgfSxcbiAgc3VidGl0bGUyOiB7XG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcbiAgICBmb250U2l6ZTogMjIsXG4gICAgbGluZUhlaWdodDogJzMycHgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgbGluZUhlaWdodDogJzMycHgnLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgfSxcbiAgfSxcbiAgcGFyYWdyYXBoOiB7XG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcbiAgICBmb250U2l6ZTogMTYsXG4gICAgbGluZUhlaWdodDogJzI0cHgnXG4gIH0sXG4gIGNhcHRpb246IHtcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxuICAgIGZvbnRTaXplOiAxNixcbiAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjJweCcsXG4gICAgfSxcbiAgfVxufSkpO1xuXG5leHBvcnQgY29uc3QgdXNlSGlkZGVuID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBsZ0Rvd246IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbGcnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfSxcbiAgbWREb3duOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9XG4gIH0sXG4gIHNtRG93bjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfVxuICB9LFxuICB4c0Rvd246IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfSxcbiAgbGdVcDoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfSxcbiAgbWRVcDoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfSxcbiAgc21VcDoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfVxufSkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1pMThuZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hdGVyaWFsLXVpLWZvcm0tdmFsaWRhdG9yXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=