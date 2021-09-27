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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/register.js");
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

/***/ "./components/Forms/Checkbox.js":
/*!**************************************!*\
  !*** ./components/Forms/Checkbox.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors/red */ "@material-ui/core/colors/red");
/* harmony import */ var _material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_red__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-material-ui-form-validator */ "react-material-ui-form-validator");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Resultarmind\\linktree\\rmcsm\\resultarmind.com.br\\components\\Forms\\Checkbox.js";
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
      className: classes.checkbox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
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

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({
      value: value,
      checked: checked
    }, rest, {
      ref: r => {
        this.input = r;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    })), this.errorText());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(CheckboxValidatorElement));

/***/ }),

/***/ "./components/Forms/Register.js":
/*!**************************************!*\
  !*** ./components/Forms/Register.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Icon */ "@material-ui/core/Icon");
/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-material-ui-form-validator */ "react-material-ui-form-validator");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../public/text/link */ "./public/text/link.js");
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Checkbox */ "./components/Forms/Checkbox.js");
/* harmony import */ var _SocialAuth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SocialAuth */ "./components/Forms/SocialAuth.js");
/* harmony import */ var _Title_TitleSecondary__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Title/TitleSecondary */ "./components/Title/TitleSecondary.js");
/* harmony import */ var _AuthFrame__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AuthFrame */ "./components/Forms/AuthFrame.js");
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form-style */ "./components/Forms/form-style.js");
var _jsxFileName = "D:\\Resultarmind\\linktree\\rmcsm\\resultarmind.com.br\\components\\Forms\\Register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















function Register(props) {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_18__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_13__["useText"])();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["useTheme"])();
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6___default()(theme.breakpoints.down('sm'));
  const {
    t
  } = props;
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_10__["ValidatorForm"].addValidationRule('isPasswordMatch', value => {
      if (value !== values.password) {
        return false;
      }

      return true;
    });
    react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_10__["ValidatorForm"].addValidationRule('isTruthy', value => value);
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
    title: t('common:register_title'),
    subtitle: t('common:register_subtitle'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.head,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(_Title_TitleSecondary__WEBPACK_IMPORTED_MODULE_16__["default"], {
    align: isMobile ? 'center' : 'left',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, t('common:register')), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: "small",
    className: classes.buttonLink,
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_12__["default"].saas.login,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.icon, classes.signArrow),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "arrow_forward"), t('common:register_already'))), __jsx(_SocialAuth__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: classes.separator,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, t('common:register_or'))), __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_10__["ValidatorForm"], {
    onError: errors => console.log(errors),
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true,
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_10__["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:register_name'),
    onChange: handleChange('name'),
    name: "name",
    value: values.name,
    validators: ['required'],
    errorMessages: ['This field is required'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_10__["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:register_email'),
    onChange: handleChange('email'),
    name: "email",
    value: values.email,
    validators: ['required', 'isEmail'],
    errorMessages: ['This field is required', 'Email is not valid'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_10__["TextValidator"], {
    variant: "filled",
    type: "password",
    className: classes.input,
    label: t('common:register_password'),
    validators: ['required'],
    onChange: handleChange('password'),
    errorMessages: ['This field is required'],
    name: "password",
    value: values.password,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_10__["TextValidator"], {
    variant: "filled",
    type: "password",
    className: classes.input,
    label: t('common:register_confirm'),
    validators: ['isPasswordMatch', 'required'],
    errorMessages: ['Password mismatch', 'This field is required'],
    onChange: handleChange('confirmPassword'),
    name: "confirm",
    value: values.confirmPassword,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }))), __jsx("div", {
    className: classes.btnArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    control: __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_14__["default"], {
      validators: ['isTruthy'],
      errorMessages: "This field is required",
      checked: check,
      value: check,
      onChange: e => handleCheck(e),
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }),
    label: __jsx("span", {
      className: text.caption,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }
    }, t('common:form_terms'), "\xA0", __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 19
      }
    }, t('common:form_privacy'))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "contained",
    type: "submit",
    color: "secondary",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }, t('common:continue'))))));
}

Register.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_11__["withTranslation"])(['common'])(Register));

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

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
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
/* harmony import */ var _components_Forms_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Forms/Register */ "./components/Forms/Register.js");
var _jsxFileName = "D:\\Resultarmind\\linktree\\rmcsm\\resultarmind.com.br\\pages\\register.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Register() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_2___default.a.saas.name, "\xA0 - Register")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }, __jsx(_components_Forms_Register__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  })));
}

Register.getInitialProps = async () => ({
  namespacesRequired: ["common", "saas-landing"]
});

/* harmony default export */ __webpack_exports__["default"] = (Register);

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

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9BdXRoRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9DaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL1JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9ybXMvU29jaWFsQXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL2Zvcm0tc3R5bGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UaXRsZS9UaXRsZVNlY29uZGFyeS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpdGxlL3RpdGxlLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2kxOG4uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVnaXN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2ltYWdlcy9zYWFzLWxvZ28uc3ZnIiwid2VicGFjazovLy8uL3B1YmxpYy90ZXh0L2JyYW5kLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy90ZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUvY29tbW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWF0ZXJpYWwtdWktZm9ybS12YWxpZGF0b3JcIiJdLCJuYW1lcyI6WyJBdXRoRnJhbWUiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ0ZXh0IiwidXNlVGV4dCIsImNoaWxkcmVuIiwidGl0bGUiLCJzdWJ0aXRsZSIsInBhZ2VXcmFwIiwiY2xzeCIsImxvZ28iLCJsb2dvSGVhZGVyIiwicm91dGVyTGluayIsInNhYXMiLCJob21lIiwic3VidGl0bGUyIiwiYnJhbmQiLCJwcm9qZWN0TmFtZSIsImlubmVyV3JhcCIsImRlY29yYXRpb24iLCJsZWZ0RGVjbyIsInJpZ2h0RGVjbyIsImZvcm1Cb3giLCJiYWNrdG9ob21lIiwiYXV0aEZyYW1lIiwiZ3JlZXRpbmciLCJ0aXRsZTIiLCJwYXJhZ3JhcGgiLCJmb3JtV3JhcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIiwicmVkMzAwIiwicmVkIiwic3R5bGVzIiwidGhlbWUiLCJjaGVja2JveCIsImxlZnQiLCJmb250U2l6ZSIsImNvbG9yIiwicG9zaXRpb24iLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwiQ2hlY2tib3hWYWxpZGF0b3JFbGVtZW50IiwiVmFsaWRhdG9yQ29tcG9uZW50IiwiZXJyb3JUZXh0IiwiaXNWYWxpZCIsInN0YXRlIiwiZ2V0RXJyb3JNZXNzYWdlIiwicmVuZGVyIiwiZXJyb3JNZXNzYWdlcyIsInZhbGlkYXRvcnMiLCJyZXF1aXJlZEVycm9yIiwidmFsdWUiLCJjaGVja2VkIiwidmFsaWRhdG9yTGlzdGVuZXIiLCJyZXN0IiwiciIsImlucHV0Iiwid2l0aFN0eWxlcyIsIlJlZ2lzdGVyIiwidXNlVGhlbWUiLCJpc01vYmlsZSIsInVzZU1lZGlhUXVlcnkiLCJicmVha3BvaW50cyIsImRvd24iLCJ0IiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsInVzZUVmZmVjdCIsIlZhbGlkYXRvckZvcm0iLCJhZGRWYWxpZGF0aW9uUnVsZSIsImNoZWNrIiwic2V0Q2hlY2siLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUNoZWNrIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsImhlYWQiLCJidXR0b25MaW5rIiwicm91dGVMaW5rIiwibG9naW4iLCJpY29uIiwic2lnbkFycm93Iiwic2VwYXJhdG9yIiwiZXJyb3JzIiwiYnRuQXJlYSIsImUiLCJjYXB0aW9uIiwiZnVuYyIsIndpdGhUcmFuc2xhdGlvbiIsIlNvY2lhbEF1dGgiLCJzb2NtZWRTaWRlTG9naW4iLCJuYXZpQnRuIiwiYmx1ZUJ0biIsInJlZEJ0biIsImNvbnRhY3RTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGV4dEFsaWduIiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJwcmltYXJ5IiwiZGFyayIsIm1pbkhlaWdodCIsIndpZHRoIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJ1cCIsImRpc3BsYXkiLCJjb21tb24iLCJ3aGl0ZSIsInR5cGUiLCJsaWdodCIsIm1haW4iLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dERlY29yYXRpb24iLCJmb250V2VpZ2h0IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRSZWd1bGFyIiwiZnVsbEZyb21XcmFwIiwicGFkZGluZ1RvcCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwiYm94U2hhZG93IiwiZGVzYyIsImJvcmRlciIsImZhZGUiLCJwYWRkaW5nTGVmdCIsInBhcGVyIiwiaGludCIsImZvcm0iLCJmb3JtSGVscGVyIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsIm1hcmdpbkJvdHRvbSIsIm1pbldpZHRoIiwic2Vjb25kYXJ5Iiwib3BhY2l0eSIsInRyYW5zZm9ybSIsImRlY29Ub3AiLCJoZWlnaHQiLCJ0b3AiLCJyaWdodCIsImRlY29Cb3R0b20iLCJib3R0b20iLCJyaWdodEljb24iLCJtYXJnaW5MZWZ0IiwiekluZGV4IiwibWFyZ2luIiwidHJhbnNpdGlvbiIsImZpbGwiLCJjbGlwIiwiZGlyZWN0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpblJpZ2h0IiwiZGFya2VuIiwibWF4V2lkdGgiLCJjb250ZW50IiwiYm9yZGVyVG9wIiwiVGl0bGVTZWNvbmRhcnkiLCJhbGlnbiIsInNldEFsaWduIiwiYWxpZ25tZW50IiwiY2VudGVyIiwidGl0bGVTZWNvbmRhcnkiLCJ0aXRsZVN0eWxlcyIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0Qm9sZCIsIk5leHRJMThOZXh0IiwicmVxdWlyZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJmYWxsYmFja0xuZyIsImluaXRJbW1lZGlhdGUiLCJsb2NhbGVQYXRoIiwicmVhY3QiLCJ1c2VTdXNwZW5zZSIsImxvY2FsZVN1YnBhdGhzIiwiYXJhIiwiZGV1IiwiZW5nIiwiaW5kIiwicHJ0IiwiemhvIiwiZ2V0SW5pdGlhbFByb3BzIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwicHJlZml4IiwiZm9vdGVyVGV4dCIsImxvZ29UZXh0IiwidXJsIiwiaW1nIiwibm90aWZNc2ciLCJsaW5rIiwiY29udGFjdCIsInJlZ2lzdGVyIiwidXNlVGV4dEFsaWduIiwidGV4dENlbnRlciIsInRleHRMZWZ0IiwidGV4dFJpZ2h0IiwidXNlRmxvYXQiLCJmbG9hdExlZnQiLCJmbG9hdCIsImZsb2F0UmlnaHQiLCJmb250V2VpZ2h0TWVkaXVtIiwidXNlSGlkZGVuIiwibGdEb3duIiwibWREb3duIiwic21Eb3duIiwieHNEb3duIiwibGdVcCIsIm1kVXAiLCJzbVVwIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFn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Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNFOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZEIiwiZmlsZSI6InBhZ2VzL3JlZ2lzdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9yZWdpc3Rlci5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IGJyYW5kIGZyb20gJ34vcHVibGljL3RleHQvYnJhbmQnO1xuaW1wb3J0IHJvdXRlckxpbmsgZnJvbSAnfi9wdWJsaWMvdGV4dC9saW5rJztcbmltcG9ydCBsb2dvIGZyb20gJ34vcHVibGljL2ltYWdlcy9zYWFzLWxvZ28uc3ZnJztcbmltcG9ydCB7IHVzZVRleHQgfSBmcm9tICd+L3RoZW1lL2NvbW1vbic7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJy4vZm9ybS1zdHlsZSc7XG5cbmZ1bmN0aW9uIEF1dGhGcmFtZShwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHRleHQgPSB1c2VUZXh0KCk7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHRpdGxlLCBzdWJ0aXRsZSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFnZVdyYXB9PlxuICAgICAgPEhpZGRlbiBtZFVwPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmxvZ28sIGNsYXNzZXMubG9nb0hlYWRlcil9PlxuICAgICAgICAgIDxhIGhyZWY9e3JvdXRlckxpbmsuc2Fhcy5ob21lfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInBcIiBjbGFzc05hbWU9e3RleHQuc3VidGl0bGUyfT5cbiAgICAgICAgICAgICAge2JyYW5kLnNhYXMucHJvamVjdE5hbWV9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvSGlkZGVuPlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyV3JhcH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlY29yYXRpb259PlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0RGVjb31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIi9pbWFnZXMvc2Fhcy9kZWNvLWJnLWxlZnQuc3ZnI21haW5cIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yaWdodERlY299XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIvaW1hZ2VzL3NhYXMvZGVjby1iZy1yaWdodC5zdmcjbWFpblwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZm9ybUJveCwgJ2ZyYWdtZW50LWZhZGVVcCcpfT5cbiAgICAgICAgICA8SWNvbkJ1dHRvbiBocmVmPXtyb3V0ZXJMaW5rLnNhYXMuaG9tZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2t0b2hvbWV9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLWlvcy1ob21lLW91dGxpbmVcIiAvPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLWlvcy1hcnJvdy1yb3VuZC1iYWNrXCIgLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aEZyYW1lfT5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXswfT5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17NX0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICA8SGlkZGVuIHNtRG93bj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmdyZWV0aW5nfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb30+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17dGV4dC5zdWJ0aXRsZTJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2JyYW5kLnNhYXMucHJvamVjdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNFwiIGNsYXNzTmFtZT17dGV4dC50aXRsZTJ9PlxuICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNsYXNzTmFtZT17dGV4dC5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICAgICAgICAgIHsgc3VidGl0bGUgfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIG1kPXs3fSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1XcmFwfT5cbiAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkF1dGhGcmFtZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdWJ0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkF1dGhGcmFtZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHN1YnRpdGxlOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGcmFtZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWQnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IHsgVmFsaWRhdG9yQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtbWF0ZXJpYWwtdWktZm9ybS12YWxpZGF0b3InO1xuXG5jb25zdCByZWQzMDAgPSByZWRbJzUwMCddO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBjaGVja2JveDoge1xuICAgIGxlZnQ6IDQyLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBjb2xvcjogcmVkMzAwLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygpXG4gIH1cbn0pO1xuXG5jbGFzcyBDaGVja2JveFZhbGlkYXRvckVsZW1lbnQgZXh0ZW5kcyBWYWxpZGF0b3JDb21wb25lbnQge1xuICBlcnJvclRleHQoKSB7XG4gICAgY29uc3QgeyBpc1ZhbGlkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveH0+XG4gICAgICAgIHt0aGlzLmdldEVycm9yTWVzc2FnZSgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBlcnJvck1lc3NhZ2VzLFxuICAgICAgdmFsaWRhdG9ycyxcbiAgICAgIHJlcXVpcmVkRXJyb3IsXG4gICAgICB2YWx1ZSxcbiAgICAgIGNoZWNrZWQsXG4gICAgICB2YWxpZGF0b3JMaXN0ZW5lcixcbiAgICAgIGNsYXNzZXMsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgcmVmPXsocikgPT4geyB0aGlzLmlucHV0ID0gcjsgfX1cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMuZXJyb3JUZXh0KCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDaGVja2JveFZhbGlkYXRvckVsZW1lbnQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbic7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IHsgVmFsaWRhdG9yRm9ybSwgVGV4dFZhbGlkYXRvciB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWZvcm0tdmFsaWRhdG9yJztcbmltcG9ydCB7IHdpdGhUcmFuc2xhdGlvbiB9IGZyb20gJ34vaTE4bic7XG5pbXBvcnQgcm91dGVMaW5rIGZyb20gJ34vcHVibGljL3RleHQvbGluayc7XG5pbXBvcnQgeyB1c2VUZXh0IH0gZnJvbSAnfi90aGVtZS9jb21tb24nO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnO1xuaW1wb3J0IFNvY2lhbEF1dGggZnJvbSAnLi9Tb2NpYWxBdXRoJztcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZS9UaXRsZVNlY29uZGFyeSc7XG5pbXBvcnQgQXV0aEZyYW1lIGZyb20gJy4vQXV0aEZyYW1lJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mb3JtLXN0eWxlJztcblxuZnVuY3Rpb24gUmVnaXN0ZXIocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpKTtcblxuICBjb25zdCB7IHQgfSA9IHByb3BzO1xuICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBWYWxpZGF0b3JGb3JtLmFkZFZhbGlkYXRpb25SdWxlKCdpc1Bhc3N3b3JkTWF0Y2gnLCAodmFsdWUpID0+IHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWVzLnBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICAgIFZhbGlkYXRvckZvcm0uYWRkVmFsaWRhdGlvblJ1bGUoJ2lzVHJ1dGh5JywgdmFsdWUgPT4gdmFsdWUpO1xuICB9KTtcblxuICBjb25zdCBbY2hlY2ssIHNldENoZWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBuYW1lID0+IGV2ZW50ID0+IHtcbiAgICBzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrID0gZXZlbnQgPT4ge1xuICAgIHNldENoZWNrKGV2ZW50LnRhcmdldC5jaGVja2VkKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2RhdGEgc3VibWl0ZWQnKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBdXRoRnJhbWUgdGl0bGU9e3QoJ2NvbW1vbjpyZWdpc3Rlcl90aXRsZScpfSBzdWJ0aXRsZT17dCgnY29tbW9uOnJlZ2lzdGVyX3N1YnRpdGxlJyl9PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZH0+XG4gICAgICAgICAgPFRpdGxlIGFsaWduPXtpc01vYmlsZSA/ICdjZW50ZXInIDogJ2xlZnQnfT57dCgnY29tbW9uOnJlZ2lzdGVyJyl9PC9UaXRsZT5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25MaW5rfSBocmVmPXtyb3V0ZUxpbmsuc2Fhcy5sb2dpbn0+XG4gICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5pY29uLCBjbGFzc2VzLnNpZ25BcnJvdyl9PmFycm93X2ZvcndhcmQ8L0ljb24+XG4gICAgICAgICAgICB7dCgnY29tbW9uOnJlZ2lzdGVyX2FscmVhZHknKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTb2NpYWxBdXRoIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlcGFyYXRvcn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHk+e3QoJ2NvbW1vbjpyZWdpc3Rlcl9vcicpfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxWYWxpZGF0b3JGb3JtXG4gICAgICAgICAgb25FcnJvcj17ZXJyb3JzID0+IGNvbnNvbGUubG9nKGVycm9ycyl9XG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfT5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgPFRleHRWYWxpZGF0b3JcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgbGFiZWw9e3QoJ2NvbW1vbjpyZWdpc3Rlcl9uYW1lJyl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnbmFtZScpfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLm5hbWV9XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17WydyZXF1aXJlZCddfVxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXM9e1snVGhpcyBmaWVsZCBpcyByZXF1aXJlZCddfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICA8VGV4dFZhbGlkYXRvclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICBsYWJlbD17dCgnY29tbW9uOnJlZ2lzdGVyX2VtYWlsJyl9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZSgnZW1haWwnKX1cbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17WydyZXF1aXJlZCcsICdpc0VtYWlsJ119XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcz17WydUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJywgJ0VtYWlsIGlzIG5vdCB2YWxpZCddfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cbiAgICAgICAgICAgICAgPFRleHRWYWxpZGF0b3JcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICBsYWJlbD17dCgnY29tbW9uOnJlZ2lzdGVyX3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9ycz17WydyZXF1aXJlZCddfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcz17WydUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJ119XG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cbiAgICAgICAgICAgICAgPFRleHRWYWxpZGF0b3JcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICBsYWJlbD17dCgnY29tbW9uOnJlZ2lzdGVyX2NvbmZpcm0nKX1cbiAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtbJ2lzUGFzc3dvcmRNYXRjaCcsICdyZXF1aXJlZCddfVxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXM9e1snUGFzc3dvcmQgbWlzbWF0Y2gnLCAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCddfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ2NvbmZpcm1QYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzLmNvbmZpcm1QYXNzd29yZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnRuQXJlYX0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICAgICAgICBjb250cm9sPXsoXG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzPXtbJ2lzVHJ1dGh5J119XG4gICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzPVwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja31cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtjaGVja31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hlY2soZSl9XG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIGxhYmVsPXsoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt0ZXh0LmNhcHRpb259PlxuICAgICAgICAgICAgICAgICAge3QoJ2NvbW1vbjpmb3JtX3Rlcm1zJyl9XG4gICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0KCdjb21tb246Zm9ybV9wcml2YWN5Jyl9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHR5cGU9XCJzdWJtaXRcIiBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgICB7dCgnY29tbW9uOmNvbnRpbnVlJyl9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9WYWxpZGF0b3JGb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9BdXRoRnJhbWU+XG4gICk7XG59XG5cblxuUmVnaXN0ZXIucHJvcFR5cGVzID0ge1xuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVHJhbnNsYXRpb24oWydjb21tb24nXSkoUmVnaXN0ZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi9mb3JtLXN0eWxlJztcblxuZnVuY3Rpb24gU29jaWFsQXV0aCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc29jbWVkU2lkZUxvZ2lufT5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZpQnRufVxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgID5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uLWxvZ28tZmFjZWJvb2tcIiAvPlxuICAgICAgICBGYWNlYm9va1xuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYmx1ZUJ0bn1cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICA+XG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1sb2dvLXR3aXR0ZXJcIiAvPlxuICAgICAgICBUd2l0dGVyXG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWRCdG59XG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgPlxuICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tbG9nby1nb29nbGVcIiAvPlxuICAgICAgICBHb29nbGVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbEF1dGg7XG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCB7IGZhZGUsIGRhcmtlbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcblxuY29uc3QgY29udGFjdFN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgdGl0bGU6IHt9LFxuICBwYWdlV3JhcDoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmRhcmssXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEwLCA1KSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNSwgMClcbiAgICB9LFxuICAgICcmICR0aXRsZSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICB9LFxuICAgICcmIGEnOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnZGFyaycgPyB0aGVtZS5wYWxldHRlLnByaW1hcnkubGlnaHQgOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICAgIGZvbnRTaXplOiAxNFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIGlubmVyV3JhcDoge1xuICAgIHRleHRBbGlnbjogJ2xlZnQnLFxuICB9LFxuICBmdWxsRnJvbVdyYXA6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoNClcbiAgICB9XG4gIH0sXG4gIGZvcm1Cb3g6IHtcbiAgICBib3JkZXJSYWRpdXM6IDQwLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIGJveFNoYWRvdzogJzAgMS41cHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjI4KScsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBib3hTaGFkb3c6ICdub25lJ1xuICAgIH1cbiAgfSxcbiAgZGVzYzoge1xuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMTApLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcbiAgICB9XG4gIH0sXG4gIGxpZ2h0OiB7fSxcbiAgaW5wdXQ6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgICcmIGxhYmVsJzoge1xuICAgICAgbGVmdDogdGhlbWUuc3BhY2luZygwLjUpLFxuICAgIH0sXG4gICAgJyYgPiBkaXYnOiB7XG4gICAgICBib3JkZXI6IGAxcHggc29saWQgJHtmYWRlKHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LCAwLjI1KX1gLFxuICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgJyYgaW5wdXQnOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlciwgMC43KVxuICAgICAgICB9LFxuICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlciwgMC43KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAnJiRsaWdodCc6IHtcbiAgICAgICcmIGxhYmVsJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgICB9LFxuICAgICAgJyYgPiBkaXYnOiB7XG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke2ZhZGUodGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LCAwLjUpfWAsXG4gICAgICAgICcmIGlucHV0Jzoge1xuICAgICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUodGhlbWUucGFsZXR0ZS50ZXh0LmhpbnQsIDAuMilcbiAgICAgICAgICB9LFxuICAgICAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogZmFkZSh0aGVtZS5wYWxldHRlLnRleHQuaGludCwgMC4yKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGZvcm06IHtcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxNSwgMTApLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCA0LCAxMClcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyLCAxKSxcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICB9LFxuICBmb3JtSGVscGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygpLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB9XG4gIH0sXG4gIGZsZXg6IHt9LFxuICBidG5BcmVhOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSksXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgICcmIGJ1dHRvbic6IHtcbiAgICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICB9XG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg1KVxuICAgIH0sXG4gICAgJyYgbGFiZWwnOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH0sXG4gICAgJyYgYnV0dG9uJzoge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgbWluSGVpZ2h0OiA0OCxcbiAgICAgIG1pbldpZHRoOiAxODBcbiAgICB9LFxuICAgICcmIHNwYW4nOiB7XG4gICAgICAnJiBhJzoge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUgIWltcG9ydGFudCcsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICAgfVxuICAgIH0sXG4gICAgJyYkZmxleCc6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIHByaW1hcnk6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBvcGFjaXR5OiAwLjA4LFxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknLFxuICB9LFxuICBzZWNvbmRhcnk6IHtcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG9wYWNpdHk6IDAuMSxcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDVkZWcpJyxcbiAgfSxcbiAgZGVjb1RvcDoge1xuICAgICcmICRwcmltYXJ5Jzoge1xuICAgICAgYm9yZGVyUmFkaXVzOiA4MCxcbiAgICAgIHdpZHRoOiA0MDUsXG4gICAgICBoZWlnaHQ6IDQwNSxcbiAgICAgIHRvcDogLTIwMCxcbiAgICAgIHJpZ2h0OiAtNTAsXG4gICAgfSxcbiAgICAnJiAkc2Vjb25kYXJ5Jzoge1xuICAgICAgYm9yZGVyUmFkaXVzOiA0MCxcbiAgICAgIHdpZHRoOiAyMDUsXG4gICAgICBoZWlnaHQ6IDIwNSxcbiAgICAgIHRvcDogMjQsXG4gICAgICByaWdodDogLTEwMCxcbiAgICB9XG4gIH0sXG4gIGRlY29Cb3R0b206IHtcbiAgICAnJiAkcHJpbWFyeSc6IHtcbiAgICAgIGJvcmRlclJhZGl1czogNDAsXG4gICAgICB3aWR0aDogMjA1LFxuICAgICAgaGVpZ2h0OiAyMDUsXG4gICAgICBib3R0b206IDE4MCxcbiAgICAgIGxlZnQ6IC0xMTAsXG4gICAgfSxcbiAgICAnJiAkc2Vjb25kYXJ5Jzoge1xuICAgICAgYm9yZGVyUmFkaXVzOiA4MCxcbiAgICAgIHdpZHRoOiA0MDUsXG4gICAgICBoZWlnaHQ6IDQwNSxcbiAgICAgIGJvdHRvbTogLTEwMCxcbiAgICAgIGxlZnQ6IC0xMDAsXG4gICAgfVxuICB9LFxuICByaWdodEljb246IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKClcbiAgfSxcbiAgYmFja3RvaG9tZToge1xuICAgIHdpZHRoOiA4MCxcbiAgICBoZWlnaHQ6IDgwLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG1hcmdpblRvcDogMjAsXG4gICAgbWFyZ2luTGVmdDogMjAsXG4gICAgekluZGV4OiAyMCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIGxlZnQ6ICdjYWxjKDUwJSAtIDQwcHgpJyxcbiAgICAgIHRvcDogNDAsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IDIwLFxuICAgICAgbWFyZ2luTGVmdDogMjAsXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0sXG4gICAgJyYgaSc6IHtcbiAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgIGNvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlciwgMC41NClcbiAgICB9LFxuICAgICcmID4gc3BhbiBpOmZpcnN0LWNoaWxkJzoge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuM3MgZWFzZSdcbiAgICB9LFxuICAgICcmID4gc3BhbiBpOmxhc3QtY2hpbGQnOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJ1xuICAgIH0sXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICAnJiA+IHNwYW4gaTpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgIH0sXG4gICAgICAnJiA+IHNwYW4gaTpsYXN0LWNoaWxkJzoge1xuICAgICAgICByaWdodDogMzAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB9LFxuICAgIH1cbiAgfSxcbiAgY2hlY2s6IHtcbiAgICAnJiBzdmcnOiB7XG4gICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgfVxuICB9LFxuICBkZWNvcmF0aW9uOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgY2xpcDogJ3JlY3QoMCwgYXV0bywgYXV0bywgMCknLFxuICAgICcmIHN2Zyc6IHtcbiAgICAgIGZpbGw6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgICBvcGFjaXR5OiAwLjIsXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHRvcDogMCxcbiAgICB9XG4gIH0sXG4gIGxlZnREZWNvOiB7XG4gICAgbGVmdDogdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICdhdXRvJyA6IC00MDAsXG4gICAgcmlnaHQ6IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnLTUwJScgOiAnYXV0bycsXG4gICAgd2lkdGg6IDEyMDAsXG4gICAgaGVpZ2h0OiAxNTAwLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBsZWZ0JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcbiAgICB9XG4gIH0sXG4gIHJpZ2h0RGVjbzoge1xuICAgIGxlZnQ6IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAtMTUwIDogJ2F1dG8nLFxuICAgIHJpZ2h0OiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ2F1dG8nIDogMCxcbiAgICBoZWlnaHQ6IDE1MDAsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIHJpZ2h0JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcbiAgICB9XG4gIH0sXG4gIGF1dGhGcmFtZToge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgZ3JlZXRpbmc6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZygxNiksXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAnJiBoNic6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXJcbiAgICB9XG4gIH0sXG4gIGxvZ29IZWFkZXI6IHt9LFxuICBsb2dvOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygzKSxcbiAgICAnJiRsb2dvSGVhZGVyJzoge1xuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgekluZGV4OiAxMFxuICAgIH0sXG4gICAgJyYgaW1nJzoge1xuICAgICAgd2lkdGg6IDY0LFxuICAgIH0sXG4gICAgJyYgcCwgc3Bhbic6IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBwYWRkaW5nQm90dG9tOiA0LFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgIH1cbiAgfSxcbiAgaGVhZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICAnJiBhJzoge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAnJiBhJzoge1xuICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHNpZ25BcnJvdzoge30sXG4gIGZvcm1XcmFwOiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg1KVxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdsZycpXToge1xuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZyg4KVxuICAgIH1cbiAgfSxcbiAgc29jbWVkU2lkZUxvZ2luOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0sXG4gICAgJyYgPiAqJzoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgd2lkdGg6IDE2MCxcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoKSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMCwgMC41KVxuICAgICAgfSxcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgfSxcbiAgICAnJiBpJzoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoKVxuICAgIH1cbiAgfSxcbiAgYmx1ZUJ0bjoge1xuICAgIGJhY2tncm91bmQ6ICcjMjhhYWUxJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbignIzI4YWFlMScsIDAuMiksXG4gICAgfVxuICB9LFxuICBuYXZpQnRuOiB7XG4gICAgYmFja2dyb3VuZDogJyMzYjU3OWQnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCcjM2I1NzlkJywgMC4yKSxcbiAgICB9XG4gIH0sXG4gIHJlZEJ0bjoge1xuICAgIGJhY2tncm91bmQ6ICcjZGQ0OTNjJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbignI2RkNDkzYycsIDAuMiksXG4gICAgfVxuICB9LFxuICBzZXBhcmF0b3I6IHtcbiAgICBtYXJnaW46IGAke3RoZW1lLnNwYWNpbmcoNSl9cHggYXV0b2AsXG4gICAgbWF4V2lkdGg6IDMwMCxcbiAgICBtaW5XaWR0aDogMjAwLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJyYgcCc6IHtcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgICBmb250U2l6ZTogMTJcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJjpiZWZvcmUsICY6YWZ0ZXInOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLnRleHQuaGludH1gLFxuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgd2lkdGg6ICcyMCUnXG4gICAgfSxcbiAgICAnJjpiZWZvcmUnOiB7XG4gICAgICBsZWZ0OiAwLFxuICAgIH0sXG4gICAgJyY6YWZ0ZXInOiB7XG4gICAgICByaWdodDogMCxcbiAgICB9XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFN0eWxlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnLi90aXRsZS1zdHlsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpdGxlU2Vjb25kYXJ5KHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyBjaGlsZHJlbiwgYWxpZ24gfSA9IHByb3BzO1xuICBjb25zdCBzZXRBbGlnbiA9IGFsaWdubWVudCA9PiB7XG4gICAgc3dpdGNoIChhbGlnbm1lbnQpIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5sZWZ0O1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICByZXR1cm4gY2xhc3Nlcy5yaWdodDtcbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIHJldHVybiBjbGFzc2VzLmNlbnRlcjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBjbGFzc2VzLmxlZnQ7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMudGl0bGVTZWNvbmRhcnksIHNldEFsaWduKGFsaWduKSl9PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuVGl0bGVTZWNvbmRhcnkucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgYWxpZ246IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5UaXRsZVNlY29uZGFyeS5kZWZhdWx0UHJvcHMgPSB7XG4gIGFsaWduOiAnbGVmdCdcbn07XG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3QgdGl0bGVTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIGxlZnQ6IHtcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAnJjphZnRlcic6IHtcbiAgICAgIGxlZnQ6IDAsXG4gICAgfVxuICB9LFxuICByaWdodDoge1xuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAnJjphZnRlcic6IHtcbiAgICAgIHJpZ2h0OiAwLFxuICAgIH1cbiAgfSxcbiAgY2VudGVyOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAnJjphZnRlcic6IHtcbiAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgbWFyZ2luTGVmdDogLTM1LFxuICAgIH1cbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg5KSxcbiAgICAnJiBoMyc6IHtcbiAgICAgIGZvbnRTaXplOiAzNixcbiAgICAgIGxpbmVIZWlnaHQ6ICc1NnB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDhweCdcbiAgICAgIH0sXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgICAgZm9udFNpemU6IDI4LFxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDRweCcsXG4gICAgICB9XG4gICAgfSxcbiAgICAnJjphZnRlcic6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHdpZHRoOiA3MCxcbiAgICAgIGhlaWdodDogMTIsXG4gICAgICBib3R0b206IC0zMixcbiAgICAgIGJvcmRlclJhZGl1czogMTIsXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICAnJiBzdHJvbmcnOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgfVxuICB9LFxuICB0aXRsZVNlY29uZGFyeToge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEyKSxcbiAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMTApXG4gICAgfSxcbiAgICAnJiBoNCc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgIGZvbnRTaXplOiAzNixcbiAgICAgIGxpbmVIZWlnaHQ6ICc1NnB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDhweCdcbiAgICAgIH0sXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgICAgZm9udFNpemU6IDI4LFxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDRweCcsXG4gICAgICB9XG4gICAgfSxcbiAgICAnJjphZnRlcic6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIHdpZHRoOiA3MCxcbiAgICAgIGhlaWdodDogMTIsXG4gICAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoLTQpLFxuICAgICAgYm9yZGVyUmFkaXVzOiAxMixcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9LFxuICAgICcmIHN0cm9uZyc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICB9XG4gIH1cbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgdGl0bGVTdHlsZXM7XG4iLCJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHQ7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcbiAgZGVmYXVsdExhbmd1YWdlOiAnZW5nJyxcbiAgb3RoZXJMYW5ndWFnZXM6IFsnZGV1JywgJ2luZCcsICdhcmEnLCAncHJ0JywgJ3pobyddLFxuICBmYWxsYmFja0xuZzogJ2VuZycsXG4gIGluaXRJbW1lZGlhdGU6IGZhbHNlLFxuICBsb2NhbGVQYXRoOiAncHVibGljL2xvY2FsZXMnLFxuICByZWFjdDoge1xuICAgIHVzZVN1c3BlbnNlOiBmYWxzZSxcbiAgfSxcbiAgbG9jYWxlU3VicGF0aHM6IHtcbiAgICBhcmE6ICdhcicsXG4gICAgZGV1OiAnZGUnLFxuICAgIGVuZzogJ2VuJyxcbiAgICBpbmQ6ICdpZCcsXG4gICAgcHJ0OiAncHQnLFxuICAgIHpobzogJ3poJyxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgYnJhbmQgZnJvbSBcIi4uL3B1YmxpYy90ZXh0L2JyYW5kXCI7XG5pbXBvcnQgUmVnaXN0ZXJGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1zL1JlZ2lzdGVyXCI7XG5cbmZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xuXHRyZXR1cm4gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+XG5cdFx0XHRcdFx0e2JyYW5kLnNhYXMubmFtZX1cblx0XHRcdFx0XHQmbmJzcDsgLSBSZWdpc3RlclxuXHRcdFx0XHQ8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PFJlZ2lzdGVyRm9ybSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9GcmFnbWVudD5cblx0KTtcbn1cblxuUmVnaXN0ZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4gKHtcblx0bmFtZXNwYWNlc1JlcXVpcmVkOiBbXCJjb21tb25cIiwgXCJzYWFzLWxhbmRpbmdcIl0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREl5TGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWt4aGVXVnlYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnb0pJSFpwWlhkQ2IzZzlJakFnTUNBME9EZ2dORGt4TGpraUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURRNE9DQTBPVEV1T1RzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZ284YzNSNWJHVWdkSGx3WlQwaWRHVjRkQzlqYzNNaVBnb0pMbk4wTUh0bWFXeHNPaU00UWtNek5FRTdmUW9KTG5OME1YdG1hV3hzT2lNNVF6STNRakE3ZlFvSkxuTjBNbnRtYVd4c09pTTJOek5CUWpjN2MzUnliMnRsT2lOR1JrWkdSa1k3YzNSeWIydGxMWGRwWkhSb09qSXdPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzMwS1BDOXpkSGxzWlQ0S1BHYytDZ2s4Y0dGMGFDQmpiR0Z6Y3owaWMzUXdJaUJrUFNKTk1USTJMamdzTkRZdU4wdzVMallzTXpjMkxqWkRMVFl1TVN3ME1qQXVPQ3d6TWl3ME5qVXVOU3czT0M0eExEUTFOMnd6TkRRdU15MDJNeTQxWXpRMkxqSXRPQzQxTERZMUxqZ3ROak11T0N3ek5TNDBMVGs1TGpaTU1qTXdMamNzTWpjdU5Rb0pDVU15TURBdU1pMDRMaklzTVRReUxqVXNNaTQwTERFeU5pNDRMRFEyTGpkNklpOCtDZ2s4Y0dGMGFDQmpiR0Z6Y3owaWMzUXhJaUJrUFNKTk9EVXVOQ3cyT1M0MVRETTFMallzTkRFMkxqRmpMVFl1Tnl3ME5pNDFMRE01TGpVc09ESXVOeXc0TXk0eExEWTFMak5zTXpJMUxURXpNQzR5WXpRekxqWXRNVGN1TlN3MU1TNDVMVGMxTGpZc01UVXRNVEEwTGpaTU1UZ3pMalFzTXpBdU13b0pDVU14TkRZdU5Td3hMaklzT1RJc01qTXVNU3c0TlM0MExEWTVMalY2SWk4K0NnazhaejRLQ1FrOGNHRjBhQ0JqYkdGemN6MGljM1F5SWlCa1BTSk5NVEV4TGpnc016VTRWakl3T0M0M2FERTRMaloyTVRNeUxqZG9Oamt1TkZZek5UaElNVEV4TGpoNklpOCtDZ2tKUEhCaGRHZ2dZMnhoYzNNOUluTjBNaUlnWkQwaVRUSXpPQzQ1TERNeE1DNDFkaTAzTlM0MmFERTNMamQyTnpRdU5XTXdMREl4TGprc01USXVNeXd6TlM0NExETTFMakVzTXpVdU9HTXlNaTQ0TERBc016VXVOQzB4TXk0NUxETTFMalF0TXpVdU9IWXROelF1TldneE55NDNkamMxTGpZS0NRa0pZekFzTXpBdU5DMHhOeTQ1TERVd0xqRXROVE1zTlRBdU1VTXlOVFl1TlN3ek5qQXVOeXd5TXpndU9Td3pOREF1Tnl3eU16Z3VPU3d6TVRBdU5Yb2lMejRLQ1R3dlp6NEtQQzluUGdvOEwzTjJaejRLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2Fhczoge1xuICAgIG5hbWU6ICdTb2Z0d2FyZScsXG4gICAgZGVzYzogJ0x1eGlyZW4gU2FhcyAtIFJlYWN0IFNpbmdsZSBMYW5kaW5nIFBhZ2UgVGVtcGxhdGUnLFxuICAgIHByZWZpeDogJ2x1eGlyZW4nLFxuICAgIGZvb3RlclRleHQ6ICdMdXhpcmVuIFRoZW1lIDIwMjEnLFxuICAgIGxvZ29UZXh0OiAnTHV4aXJlbiBTb2Z0d2FyZScsXG4gICAgcHJvamVjdE5hbWU6ICdTb2Z0d2FyZScsXG4gICAgdXJsOiAnbHV4aXJlYWN0LnV4LW1hZXN0cm8uY29tL3NhYXMnLFxuICAgIGltZzogJy9zdGF0aWMvaW1hZ2VzL3NhYXMtbG9nby5wbmcnLFxuICAgIG5vdGlmTXNnOiAnRG9uZWMgc2l0IGFtZXQgbnVsbGEgc2VkIGFyY3UgcHVsdmluYXIgdWx0cmljaWVzIGNvbW1vZG8gaWQgbGlndWxhLidcbiAgfVxufTtcbiIsImNvbnN0IGxpbmsgPSB7XG4gIHNhYXM6IHtcbiAgICBob21lOiAnLycsXG4gICAgY29udGFjdDogJy9jb250YWN0JyxcbiAgICBsb2dpbjogJy9sb2dpbicsXG4gICAgcmVnaXN0ZXI6ICcvcmVnaXN0ZXInXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpbms7XG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IHVzZVRleHRBbGlnbiA9IG1ha2VTdHlsZXMoe1xuICB0ZXh0Q2VudGVyOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xuICB9LFxuICB0ZXh0TGVmdDoge1xuICAgIHRleHRBbGlnbjogJ2xlZnQnXG4gIH0sXG4gIHRleHRSaWdodDoge1xuICAgIHRleHRBbGlnbjogJ3JpZ2h0J1xuICB9XG59KTtcblxuZXhwb3J0IGNvbnN0IHVzZUZsb2F0ID0gbWFrZVN0eWxlcyh7XG4gIGZsb2F0TGVmdDoge1xuICAgIGZsb2F0OiAnbGVmdCdcbiAgfSxcbiAgZmxvYXRSaWdodDoge1xuICAgIGZsb2F0OiAncmlnaHQnXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHVzZVRleHQgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHRpdGxlOiB7XG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcbiAgICBmb250U2l6ZTogNDgsXG4gICAgbGluZUhlaWdodDogJzcycHgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgZm9udFNpemU6IDM4LFxuICAgICAgbGluZUhlaWdodDogJzYwcHgnXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIGZvbnRTaXplOiAyOCxcbiAgICAgIGxpbmVIZWlnaHQ6ICc0NHB4J1xuICAgIH0sXG4gIH0sXG4gIHRpdGxlMjoge1xuICAgIGZvbnRTaXplOiAzNixcbiAgICBsaW5lSGVpZ2h0OiAnNTZweCcsXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0Qm9sZCxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgIGxpbmVIZWlnaHQ6ICc0OHB4J1xuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBmb250U2l6ZTogMjQsXG4gICAgICBsaW5lSGVpZ2h0OiAnMzZweCcsXG4gICAgfVxuICB9LFxuICBzdWJ0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodE1lZGl1bSxcbiAgICBmb250U2l6ZTogMjgsXG4gICAgbGluZUhlaWdodDogJzQ0cHgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgbGluZUhlaWdodDogJzM2cHgnLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBmb250U2l6ZTogMTgsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjhweCcsXG4gICAgfSxcbiAgfSxcbiAgc3VidGl0bGUyOiB7XG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcbiAgICBmb250U2l6ZTogMjIsXG4gICAgbGluZUhlaWdodDogJzMycHgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgbGluZUhlaWdodDogJzMycHgnLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgfSxcbiAgfSxcbiAgcGFyYWdyYXBoOiB7XG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcbiAgICBmb250U2l6ZTogMTYsXG4gICAgbGluZUhlaWdodDogJzI0cHgnXG4gIH0sXG4gIGNhcHRpb246IHtcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxuICAgIGZvbnRTaXplOiAxNixcbiAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBmb250U2l6ZTogMTQsXG4gICAgICBsaW5lSGVpZ2h0OiAnMjJweCcsXG4gICAgfSxcbiAgfVxufSkpO1xuXG5leHBvcnQgY29uc3QgdXNlSGlkZGVuID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBsZ0Rvd246IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbGcnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfSxcbiAgbWREb3duOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9XG4gIH0sXG4gIHNtRG93bjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfVxuICB9LFxuICB4c0Rvd246IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfSxcbiAgbGdVcDoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfSxcbiAgbWRVcDoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfSxcbiAgc21VcDoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfVxufSkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xzeFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWkxOG5leHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWF0ZXJpYWwtdWktZm9ybS12YWxpZGF0b3JcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==