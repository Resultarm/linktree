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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+hHi":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0ODggNDkxLjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4OCA0OTEuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4QkMzNEE7fQoJLnN0MXtmaWxsOiM5QzI3QjA7fQoJLnN0MntmaWxsOiM2NzNBQjc7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTI2LjgsNDYuN0w5LjYsMzc2LjZDLTYuMSw0MjAuOCwzMiw0NjUuNSw3OC4xLDQ1N2wzNDQuMy02My41YzQ2LjItOC41LDY1LjgtNjMuOCwzNS40LTk5LjZMMjMwLjcsMjcuNQoJCUMyMDAuMi04LjIsMTQyLjUsMi40LDEyNi44LDQ2Ljd6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNODUuNCw2OS41TDM1LjYsNDE2LjFjLTYuNyw0Ni41LDM5LjUsODIuNyw4My4xLDY1LjNsMzI1LTEzMC4yYzQzLjYtMTcuNSw1MS45LTc1LjYsMTUtMTA0LjZMMTgzLjQsMzAuMwoJCUMxNDYuNSwxLjIsOTIsMjMuMSw4NS40LDY5LjV6Ii8+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTExLjgsMzU4VjIwOC43aDE4LjZ2MTMyLjdoNjkuNFYzNThIMTExLjh6Ii8+CgkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTIzOC45LDMxMC41di03NS42aDE3Ljd2NzQuNWMwLDIxLjksMTIuMywzNS44LDM1LjEsMzUuOGMyMi44LDAsMzUuNC0xMy45LDM1LjQtMzUuOHYtNzQuNWgxNy43djc1LjYKCQkJYzAsMzAuNC0xNy45LDUwLjEtNTMsNTAuMUMyNTYuNSwzNjAuNywyMzguOSwzNDAuNywyMzguOSwzMTAuNXoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "/p+9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleSecondary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _title_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UC/a");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function TitleSecondary(props) {
  const classes = Object(_title_style__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
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
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.titleSecondary, setAlign(align))
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "h4"
  }, children));
}
TitleSecondary.defaultProps = {
  align: 'left'
};

/***/ }),

/***/ "4SVi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("RpH3");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("r6Lb");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("i+P/");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const red300 = _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default.a['500'];

const styles = theme => ({
  checkbox: {
    left: 42,
    fontSize: 12,
    color: red300,
    position: 'absolute',
    marginTop: theme.spacing()
  }
});

class CheckboxValidatorElement extends react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4__["ValidatorComponent"] {
  errorText() {
    const {
      isValid
    } = this.state;
    const {
      classes
    } = this.props;

    if (isValid) {
      return null;
    }

    return __jsx("div", {
      className: classes.checkbox
    }, this.getErrorMessage());
  }

  render() {
    const _this$props = this.props,
          {
      errorMessages,
      validators,
      requiredError,
      value,
      checked,
      validatorListener,
      classes
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["errorMessages", "validators", "requiredError", "value", "checked", "validatorListener", "classes"]);

    return __jsx("div", null, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
      value: value,
      checked: checked
    }, rest, {
      ref: r => {
        this.input = r;
      }
    })), this.errorText());
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(CheckboxValidatorElement));

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Dsvi");


/***/ }),

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "7vM9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "B0t3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Y8uC");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("EmCc");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("qt1I");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Uynj");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zwGQ");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("H6h4");
/* harmony import */ var _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("+hHi");
/* harmony import */ var _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("DbTw");
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("fiIm");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function AuthFrame(props) {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_11__[/* useText */ "b"])();
  const {
    children,
    title,
    subtitle
  } = props;
  return __jsx("div", {
    className: classes.pageWrap
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2___default.a, {
    mdUp: true
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.logo, classes.logoHeader)
  }, __jsx("a", {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].saas.home
  }, __jsx("img", {
    src: _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "logo"
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "p",
    className: text.subtitle2
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_8___default.a.saas.projectName)))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default.a, {
    maxWidth: "lg",
    className: classes.innerWrap
  }, __jsx("div", {
    className: classes.decoration
  }, __jsx("svg", {
    className: classes.leftDeco
  }, __jsx("use", {
    xlinkHref: "/images/saas/deco-bg-left.svg#main"
  })), __jsx("svg", {
    className: classes.rightDeco
  }, __jsx("use", {
    xlinkHref: "/images/saas/deco-bg-right.svg#main"
  }))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.formBox, 'fragment-fadeUp')
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].saas.home,
    className: classes.backtohome
  }, __jsx("i", {
    className: "ion-ios-home-outline"
  }), __jsx("i", {
    className: "ion-ios-arrow-round-back"
  })), __jsx("div", {
    className: classes.authFrame
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    container: true,
    spacing: 0
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    md: 5,
    xs: 12
  }, __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_2___default.a, {
    smDown: true
  }, __jsx("div", {
    className: classes.greeting
  }, __jsx("div", {
    className: classes.logo
  }, __jsx("img", {
    src: _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "logo"
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: text.subtitle2
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_8___default.a.saas.projectName)), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    gutterBottom: true,
    variant: "h4",
    className: text.title2
  }, title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "h6",
    className: text.paragraph
  }, subtitle)))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7___default.a, {
    item: true,
    md: 7,
    xs: 12
  }, __jsx("div", {
    className: classes.formWrap
  }, children)))))));
}

AuthFrame.defaultProps = {
  subtitle: ''
};
/* harmony default export */ __webpack_exports__["a"] = (AuthFrame);

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

/***/ "Dsvi":
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

// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__("zwGQ");
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Icon"
var Icon_ = __webpack_require__("7vM9");
var Icon_default = /*#__PURE__*/__webpack_require__.n(Icon_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__("7s44");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "react-material-ui-form-validator"
var external_react_material_ui_form_validator_ = __webpack_require__("i+P/");

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__("H6h4");

// EXTERNAL MODULE: ./theme/common.js
var common = __webpack_require__("DbTw");

// EXTERNAL MODULE: ./components/Forms/Checkbox.js
var Checkbox = __webpack_require__("4SVi");

// EXTERNAL MODULE: ./components/Forms/SocialAuth.js
var SocialAuth = __webpack_require__("bGrI");

// EXTERNAL MODULE: ./components/Title/TitleSecondary.js
var TitleSecondary = __webpack_require__("/p+9");

// EXTERNAL MODULE: ./components/Forms/AuthFrame.js
var AuthFrame = __webpack_require__("B0t3");

// EXTERNAL MODULE: ./components/Forms/form-style.js
var form_style = __webpack_require__("fiIm");

// CONCATENATED MODULE: ./components/Forms/Register.js
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















function Register(props) {
  const classes = Object(form_style["a" /* default */])();
  const text = Object(common["b" /* useText */])();
  const theme = Object(styles_["useTheme"])();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('sm'));
  const {
    t
  } = props;
  const {
    0: values,
    1: setValues
  } = Object(external_react_["useState"])({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  Object(external_react_["useEffect"])(() => {
    external_react_material_ui_form_validator_["ValidatorForm"].addValidationRule('isPasswordMatch', value => {
      if (value !== values.password) {
        return false;
      }

      return true;
    });
    external_react_material_ui_form_validator_["ValidatorForm"].addValidationRule('isTruthy', value => value);
  });
  const {
    0: check,
    1: setCheck
  } = Object(external_react_["useState"])(false);

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

  return __jsx(AuthFrame["a" /* default */], {
    title: t('common:register_title'),
    subtitle: t('common:register_subtitle')
  }, __jsx("div", null, __jsx("div", {
    className: classes.head
  }, __jsx(TitleSecondary["a" /* default */], {
    align: isMobile ? 'center' : 'left'
  }, t('common:register')), __jsx(Button_default.a, {
    size: "small",
    className: classes.buttonLink,
    href: text_link["a" /* default */].saas.login
  }, __jsx(Icon_default.a, {
    className: external_clsx_default()(classes.icon, classes.signArrow)
  }, "arrow_forward"), t('common:register_already'))), __jsx(SocialAuth["a" /* default */], null), __jsx("div", {
    className: classes.separator
  }, __jsx(Typography_default.a, null, t('common:register_or'))), __jsx(external_react_material_ui_form_validator_["ValidatorForm"], {
    onError: errors => console.log(errors),
    onSubmit: handleSubmit
  }, __jsx(Grid_default.a, {
    container: true,
    spacing: 3
  }, __jsx(Grid_default.a, {
    item: true,
    xs: 12
  }, __jsx(external_react_material_ui_form_validator_["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:register_name'),
    onChange: handleChange('name'),
    name: "name",
    value: values.name,
    validators: ['required'],
    errorMessages: ['This field is required']
  })), __jsx(Grid_default.a, {
    item: true,
    xs: 12
  }, __jsx(external_react_material_ui_form_validator_["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:register_email'),
    onChange: handleChange('email'),
    name: "email",
    value: values.email,
    validators: ['required', 'isEmail'],
    errorMessages: ['This field is required', 'Email is not valid']
  })), __jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, __jsx(external_react_material_ui_form_validator_["TextValidator"], {
    variant: "filled",
    type: "password",
    className: classes.input,
    label: t('common:register_password'),
    validators: ['required'],
    onChange: handleChange('password'),
    errorMessages: ['This field is required'],
    name: "password",
    value: values.password
  })), __jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, __jsx(external_react_material_ui_form_validator_["TextValidator"], {
    variant: "filled",
    type: "password",
    className: classes.input,
    label: t('common:register_confirm'),
    validators: ['isPasswordMatch', 'required'],
    errorMessages: ['Password mismatch', 'This field is required'],
    onChange: handleChange('confirmPassword'),
    name: "confirm",
    value: values.confirmPassword
  }))), __jsx("div", {
    className: classes.btnArea
  }, __jsx(FormControlLabel_default.a, {
    control: __jsx(Checkbox["a" /* default */], {
      validators: ['isTruthy'],
      errorMessages: "This field is required",
      checked: check,
      value: check,
      onChange: e => handleCheck(e),
      color: "primary"
    }),
    label: __jsx("span", {
      className: text.caption
    }, t('common:form_terms'), "\xA0", __jsx("a", {
      href: "#"
    }, t('common:form_privacy')))
  }), __jsx(Button_default.a, {
    variant: "contained",
    type: "submit",
    color: "secondary",
    size: "large"
  }, t('common:continue'))))));
}

/* harmony default export */ var Forms_Register = (Object(i18n["withTranslation"])(['common'])(Register));
// CONCATENATED MODULE: ./pages/register.js
var register_jsx = external_react_default.a.createElement;





function register_Register() {
  return register_jsx(external_react_["Fragment"], null, register_jsx(head_default.a, null, register_jsx("title", null, brand_default.a.saas.name, "\xA0 - Register")), register_jsx("div", null, register_jsx(Forms_Register, null)));
}

register_Register.getInitialProps = async () => ({
  namespacesRequired: ["common", "saas-landing"]
});

/* harmony default export */ var register = __webpack_exports__["default"] = (register_Register);

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

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

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "RpH3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

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

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "bGrI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fiIm");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function SocialAuth() {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])();
  return __jsx("div", {
    className: classes.socmedSideLogin
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    className: classes.naviBtn,
    type: "button",
    size: "large"
  }, __jsx("i", {
    className: "ion-logo-facebook"
  }), "Facebook"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    className: classes.blueBtn,
    type: "button",
    size: "large"
  }, __jsx("i", {
    className: "ion-logo-twitter"
  }), "Twitter"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "contained",
    className: classes.redBtn,
    type: "button",
    size: "large"
  }, __jsx("i", {
    className: "ion-logo-google"
  }), "Google"));
}

/* harmony default export */ __webpack_exports__["a"] = (SocialAuth);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPsG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "fiIm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oOPP");
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
/* harmony default export */ __webpack_exports__["a"] = (contactStyles);

/***/ }),

/***/ "i+P/":
/***/ (function(module, exports) {

module.exports = require("react-material-ui-form-validator");

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

/***/ "oOPP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

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