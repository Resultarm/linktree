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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/contact.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/Forms/Contact.js":
/*!*************************************!*\
  !*** ./components/Forms/Contact.js ***!
  \*************************************/
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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-material-ui-form-validator */ "react-material-ui-form-validator");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../public/text/brand */ "./public/text/brand.js");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../public/images/saas-logo.svg */ "./public/images/saas-logo.svg");
/* harmony import */ var _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _public_text_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../public/text/link */ "./public/text/link.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Checkbox */ "./components/Forms/Checkbox.js");
/* harmony import */ var _form_style__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./form-style */ "./components/Forms/form-style.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../services/api */ "./services/api.js");
var _jsxFileName = "D:\\Resultarmind\\linktree\\rmcsm\\resultarmind.com.br\\components\\Forms\\Contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























function Contact(props) {
  const classes = Object(_form_style__WEBPACK_IMPORTED_MODULE_21__["default"])();
  const text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_19__["useText"])();
  const {
    t
  } = props;
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()(theme.breakpoints.down("sm"));
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["ValidatorForm"].addValidationRule("isTruthy", value => value);
  });
  const {
    0: openNotif,
    1: setNotif
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
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
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  const handleContact = () => {
    var url = `https://wa.me/${_services_api__WEBPACK_IMPORTED_MODULE_22__["contactNumber"]}?text=` + "Nome: " + values.name + "%0a" + "Telemovel: " + values.phone + "%0a" + "Email: " + values.email + "%0a" + "Mensagem: " + values.message;
    window.open(url, "_blank").focus();
  };

  return __jsx("div", {
    className: classes.pageWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 3
    }
  }, __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_13___default.a, {
    anchorOrigin: {
      vertical: "top",
      horizontal: "right"
    },
    key: "top right",
    open: openNotif,
    autoHideDuration: 4000,
    onClose: handleClose,
    ContentProps: {
      "aria-describedby": "message-id"
    },
    message: __jsx("span", {
      id: "message-id",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 14
      }
    }, "Message Sent"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }
  }), __jsx(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_4___default.a, {
    mdUp: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.logo, classes.logoHeader),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_17__["default"].saas.home,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: _public_images_saas_logo_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    component: "span",
    className: text.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_15___default.a.saas.projectName)))), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10___default.a, {
    maxWidth: "md",
    className: classes.innerWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: _public_text_link__WEBPACK_IMPORTED_MODULE_17__["default"].saas.home,
    className: classes.backtohome,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx("i", {
    className: "ion-ios-home-outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 6
    }
  }), __jsx("i", {
    className: "ion-ios-arrow-round-back",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 6
    }
  })), __jsx("div", {
    className: classes.decoration,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, __jsx("svg", {
    className: classes.leftDeco,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 6
    }
  }, __jsx("use", {
    xlinkHref: "/images/saas/deco-bg-left.svg#main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  })), __jsx("svg", {
    className: classes.rightDeco,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 6
    }
  }, __jsx("use", {
    xlinkHref: "/images/saas/deco-bg-right.svg#main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }))), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.formBox, "fragment-fadeUp"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.fullFromWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 6
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "h3",
    align: "center",
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.title, text.title),
    gutterBottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, t("common:contact_title2")), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.desc, text.subtitle2),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, t("common:contact_subtitle")), __jsx("div", {
    className: classes.form,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["ValidatorForm"], {
    onSubmit: handleSubmit,
    onError: errors => console.log(errors),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 8
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
    container: true,
    spacing: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 10
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["TextValidator"], {
    variant: "filled",
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.input, classes.light),
    label: t("common:form_name"),
    onChange: handleChange("name"),
    name: "Name",
    value: values.name,
    validators: ["required"],
    errorMessages: ["This field is required"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 10
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["TextValidator"], {
    variant: "filled",
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.input, classes.light),
    label: t("common:form_email"),
    onChange: handleChange("email"),
    name: "Email",
    value: values.email,
    validators: ["required", "isEmail"],
    errorMessages: ["This field is required", "email is not valid"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 10
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["TextValidator"], {
    variant: "filled",
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.input, classes.light),
    label: t("common:form_phone"),
    onChange: handleChange("phone"),
    name: "Phone",
    value: values.phone,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
    item: true,
    md: 6,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 10
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["TextValidator"], {
    variant: "filled",
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.input, classes.light),
    label: t("common:form_company"),
    onChange: handleChange("company"),
    name: "Company",
    value: values.company,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_11___default.a, {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 10
    }
  }, __jsx(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_14__["TextValidator"], {
    variant: "filled",
    multiline: true,
    rows: "6",
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.input, classes.light),
    label: t("common:form_message"),
    onChange: handleChange("message"),
    name: "Message",
    value: values.message,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.btnArea, classes.flex),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8___default.a, {
    control: __jsx(_Checkbox__WEBPACK_IMPORTED_MODULE_20__["default"], {
      validators: ["isTruthy"],
      errorMessages: "This field is required",
      checked: check,
      value: check,
      onChange: e => handleCheck(e),
      color: "secondary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 12
      }
    }),
    label: __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 12
      }
    }, t("common:form_terms"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 13
      }
    }), __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 13
      }
    }, t("common:form_privacy"))),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 10
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "contained",
    fullWidth: isMobile,
    type: "submit",
    color: "secondary",
    size: "large",
    onClick: handleContact,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 10
    }
  }, t("common:form_send")))))))));
}

Contact.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_18__["withTranslation"])(["common"])(Contact));

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

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
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
/* harmony import */ var _components_Forms_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Forms/Contact */ "./components/Forms/Contact.js");
var _jsxFileName = "D:\\Resultarmind\\linktree\\rmcsm\\resultarmind.com.br\\pages\\contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Contact() {
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
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_2___default.a.saas.name, "\xA0 - Contact")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_components_Forms_Contact__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })));
}

Contact.getInitialProps = async () => ({
  namespacesRequired: ['common', 'saas-landing']
});

/* harmony default export */ __webpack_exports__["default"] = (Contact);

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

/***/ "./services/api.js":
/*!*************************!*\
  !*** ./services/api.js ***!
  \*************************/
/*! exports provided: contactNumber, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactNumber", function() { return contactNumber; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "http://localhost:8000/"
});
const contactNumber = "";
/* harmony default export */ __webpack_exports__["default"] = (api);

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

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9DaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvcm1zL0NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb3Jtcy9mb3JtLXN0eWxlLmpzIiwid2VicGFjazovLy8uL2kxOG4uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvaW1hZ2VzL3NhYXMtbG9nby5zdmciLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RleHQvYnJhbmQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3RleHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vdGhlbWUvY29tbW9uLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9IaWRkZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1pMThuZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWF0ZXJpYWwtdWktZm9ybS12YWxpZGF0b3JcIiJdLCJuYW1lcyI6WyJyZWQzMDAiLCJyZWQiLCJzdHlsZXMiLCJ0aGVtZSIsImNoZWNrYm94IiwibGVmdCIsImZvbnRTaXplIiwiY29sb3IiLCJwb3NpdGlvbiIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJDaGVja2JveFZhbGlkYXRvckVsZW1lbnQiLCJWYWxpZGF0b3JDb21wb25lbnQiLCJlcnJvclRleHQiLCJpc1ZhbGlkIiwic3RhdGUiLCJjbGFzc2VzIiwicHJvcHMiLCJnZXRFcnJvck1lc3NhZ2UiLCJyZW5kZXIiLCJlcnJvck1lc3NhZ2VzIiwidmFsaWRhdG9ycyIsInJlcXVpcmVkRXJyb3IiLCJ2YWx1ZSIsImNoZWNrZWQiLCJ2YWxpZGF0b3JMaXN0ZW5lciIsInJlc3QiLCJyIiwiaW5wdXQiLCJ3aXRoU3R5bGVzIiwiQ29udGFjdCIsInVzZVN0eWxlcyIsInRleHQiLCJ1c2VUZXh0IiwidCIsInVzZVRoZW1lIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwidmFsdWVzIiwic2V0VmFsdWVzIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwaG9uZSIsImNvbXBhbnkiLCJtZXNzYWdlIiwidXNlRWZmZWN0IiwiVmFsaWRhdG9yRm9ybSIsImFkZFZhbGlkYXRpb25SdWxlIiwib3Blbk5vdGlmIiwic2V0Tm90aWYiLCJjaGVjayIsInNldENoZWNrIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJoYW5kbGVDaGVjayIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ29udGFjdCIsInVybCIsImNvbnRhY3ROdW1iZXIiLCJ3aW5kb3ciLCJvcGVuIiwiZm9jdXMiLCJwYWdlV3JhcCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImNsc3giLCJsb2dvIiwibG9nb0hlYWRlciIsInJvdXRlTGluayIsInNhYXMiLCJob21lIiwidGl0bGUiLCJicmFuZCIsInByb2plY3ROYW1lIiwiaW5uZXJXcmFwIiwiYmFja3RvaG9tZSIsImRlY29yYXRpb24iLCJsZWZ0RGVjbyIsInJpZ2h0RGVjbyIsImZvcm1Cb3giLCJmdWxsRnJvbVdyYXAiLCJkZXNjIiwic3VidGl0bGUyIiwiZm9ybSIsImVycm9ycyIsImNvbnNvbGUiLCJsb2ciLCJsaWdodCIsImJ0bkFyZWEiLCJmbGV4IiwiZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwid2l0aFRyYW5zbGF0aW9uIiwiY29udGFjdFN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0ZXh0QWxpZ24iLCJiYWNrZ3JvdW5kIiwicGFsZXR0ZSIsInByaW1hcnkiLCJkYXJrIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsInVwIiwiZGlzcGxheSIsImNvbW1vbiIsIndoaXRlIiwidHlwZSIsIm1haW4iLCJ0ZXh0VHJhbnNmb3JtIiwidGV4dERlY29yYXRpb24iLCJmb250V2VpZ2h0IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRSZWd1bGFyIiwicGFkZGluZ1RvcCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwiYm94U2hhZG93IiwiYm9yZGVyIiwiZmFkZSIsInBhZGRpbmdMZWZ0IiwicGFwZXIiLCJoaW50IiwiZm9ybUhlbHBlciIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkJvdHRvbSIsIm1pbldpZHRoIiwic2Vjb25kYXJ5Iiwib3BhY2l0eSIsInRyYW5zZm9ybSIsImRlY29Ub3AiLCJoZWlnaHQiLCJ0b3AiLCJyaWdodCIsImRlY29Cb3R0b20iLCJib3R0b20iLCJyaWdodEljb24iLCJtYXJnaW5MZWZ0IiwiekluZGV4IiwibWFyZ2luIiwidHJhbnNpdGlvbiIsImZpbGwiLCJjbGlwIiwiZGlyZWN0aW9uIiwidHJhbnNmb3JtT3JpZ2luIiwiYXV0aEZyYW1lIiwiZ3JlZXRpbmciLCJwYWRkaW5nQm90dG9tIiwiaGVhZCIsInNpZ25BcnJvdyIsImZvcm1XcmFwIiwic29jbWVkU2lkZUxvZ2luIiwibWFyZ2luUmlnaHQiLCJibHVlQnRuIiwiZGFya2VuIiwibmF2aUJ0biIsInJlZEJ0biIsInNlcGFyYXRvciIsIm1heFdpZHRoIiwiY29udGVudCIsImJvcmRlclRvcCIsIk5leHRJMThOZXh0IiwicmVxdWlyZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmYXVsdExhbmd1YWdlIiwib3RoZXJMYW5ndWFnZXMiLCJmYWxsYmFja0xuZyIsImluaXRJbW1lZGlhdGUiLCJsb2NhbGVQYXRoIiwicmVhY3QiLCJ1c2VTdXNwZW5zZSIsImxvY2FsZVN1YnBhdGhzIiwiYXJhIiwiZGV1IiwiZW5nIiwiaW5kIiwicHJ0IiwiemhvIiwiZ2V0SW5pdGlhbFByb3BzIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwicHJlZml4IiwiZm9vdGVyVGV4dCIsImxvZ29UZXh0IiwiaW1nIiwibm90aWZNc2ciLCJsaW5rIiwiY29udGFjdCIsImxvZ2luIiwicmVnaXN0ZXIiLCJhcGkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ1c2VUZXh0QWxpZ24iLCJ0ZXh0Q2VudGVyIiwidGV4dExlZnQiLCJ0ZXh0UmlnaHQiLCJ1c2VGbG9hdCIsImZsb2F0TGVmdCIsImZsb2F0IiwiZmxvYXRSaWdodCIsImZvbnRXZWlnaHRCb2xkIiwibGluZUhlaWdodCIsInRpdGxlMiIsInN1YnRpdGxlIiwiZm9udFdlaWdodE1lZGl1bSIsInBhcmFncmFwaCIsImNhcHRpb24iLCJ1c2VIaWRkZW4iLCJsZ0Rvd24iLCJtZERvd24iLCJzbURvd24iLCJ4c0Rvd24iLCJsZ1VwIiwibWRVcCIsInNtVXAiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7O0FDQUEsNkQiLCJmaWxlIjoicGFnZXMvY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY29udGFjdC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9yZWQnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IHsgVmFsaWRhdG9yQ29tcG9uZW50IH0gZnJvbSAncmVhY3QtbWF0ZXJpYWwtdWktZm9ybS12YWxpZGF0b3InO1xuXG5jb25zdCByZWQzMDAgPSByZWRbJzUwMCddO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBjaGVja2JveDoge1xuICAgIGxlZnQ6IDQyLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBjb2xvcjogcmVkMzAwLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygpXG4gIH1cbn0pO1xuXG5jbGFzcyBDaGVja2JveFZhbGlkYXRvckVsZW1lbnQgZXh0ZW5kcyBWYWxpZGF0b3JDb21wb25lbnQge1xuICBlcnJvclRleHQoKSB7XG4gICAgY29uc3QgeyBpc1ZhbGlkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja2JveH0+XG4gICAgICAgIHt0aGlzLmdldEVycm9yTWVzc2FnZSgpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBlcnJvck1lc3NhZ2VzLFxuICAgICAgdmFsaWRhdG9ycyxcbiAgICAgIHJlcXVpcmVkRXJyb3IsXG4gICAgICB2YWx1ZSxcbiAgICAgIGNoZWNrZWQsXG4gICAgICB2YWxpZGF0b3JMaXN0ZW5lcixcbiAgICAgIGNsYXNzZXMsXG4gICAgICAuLi5yZXN0XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgcmVmPXsocikgPT4geyB0aGlzLmlucHV0ID0gcjsgfX1cbiAgICAgICAgLz5cbiAgICAgICAge3RoaXMuZXJyb3JUZXh0KCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShDaGVja2JveFZhbGlkYXRvckVsZW1lbnQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcbmltcG9ydCBIaWRkZW4gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiO1xuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnlcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsXCI7XG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IFNuYWNrYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhclwiO1xuaW1wb3J0IHsgVmFsaWRhdG9yRm9ybSwgVGV4dFZhbGlkYXRvciB9IGZyb20gXCJyZWFjdC1tYXRlcmlhbC11aS1mb3JtLXZhbGlkYXRvclwiO1xuaW1wb3J0IGJyYW5kIGZyb20gXCJ+L3B1YmxpYy90ZXh0L2JyYW5kXCI7XG5pbXBvcnQgbG9nbyBmcm9tIFwifi9wdWJsaWMvaW1hZ2VzL3NhYXMtbG9nby5zdmdcIjtcbmltcG9ydCByb3V0ZUxpbmsgZnJvbSBcIn4vcHVibGljL3RleHQvbGlua1wiO1xuaW1wb3J0IHsgd2l0aFRyYW5zbGF0aW9uIH0gZnJvbSBcIn4vaTE4blwiO1xuaW1wb3J0IHsgdXNlVGV4dCB9IGZyb20gXCJ+L3RoZW1lL2NvbW1vblwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCIuL0NoZWNrYm94XCI7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gXCIuL2Zvcm0tc3R5bGVcIjtcbmltcG9ydCB7IGNvbnRhY3ROdW1iZXIgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpXCI7XG5cbmZ1bmN0aW9uIENvbnRhY3QocHJvcHMpIHtcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXHRjb25zdCB0ZXh0ID0gdXNlVGV4dCgpO1xuXHRjb25zdCB7IHQgfSA9IHByb3BzO1xuXHRjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cdGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKFwic21cIikpO1xuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuXHRcdG5hbWU6IFwiXCIsXG5cdFx0ZW1haWw6IFwiXCIsXG5cdFx0cGhvbmU6IFwiXCIsXG5cdFx0Y29tcGFueTogXCJcIixcblx0XHRtZXNzYWdlOiBcIlwiLFxuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdFZhbGlkYXRvckZvcm0uYWRkVmFsaWRhdGlvblJ1bGUoXCJpc1RydXRoeVwiLCAodmFsdWUpID0+IHZhbHVlKTtcblx0fSk7XG5cblx0Y29uc3QgW29wZW5Ob3RpZiwgc2V0Tm90aWZdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGNvbnN0IFtjaGVjaywgc2V0Q2hlY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuYW1lKSA9PiAoZXZlbnQpID0+IHtcblx0XHRzZXRWYWx1ZXMoeyAuLi52YWx1ZXMsIFtuYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUNoZWNrID0gKGV2ZW50KSA9PiB7XG5cdFx0c2V0Q2hlY2soZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcblx0XHRzZXROb3RpZih0cnVlKTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcblx0XHRzZXROb3RpZihmYWxzZSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ29udGFjdCA9ICgpID0+IHtcblx0XHR2YXIgdXJsID1cblx0XHRcdGBodHRwczovL3dhLm1lLyR7Y29udGFjdE51bWJlcn0/dGV4dD1gICtcblx0XHRcdFwiTm9tZTogXCIgK1xuXHRcdFx0dmFsdWVzLm5hbWUgK1xuXHRcdFx0XCIlMGFcIiArXG5cdFx0XHRcIlRlbGVtb3ZlbDogXCIgK1xuXHRcdFx0dmFsdWVzLnBob25lICtcblx0XHRcdFwiJTBhXCIgK1xuXHRcdFx0XCJFbWFpbDogXCIgK1xuXHRcdFx0dmFsdWVzLmVtYWlsICtcblx0XHRcdFwiJTBhXCIgK1xuXHRcdFx0XCJNZW5zYWdlbTogXCIgK1xuXHRcdFx0dmFsdWVzLm1lc3NhZ2U7XG5cdFx0d2luZG93Lm9wZW4odXJsLCBcIl9ibGFua1wiKS5mb2N1cygpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFnZVdyYXB9PlxuXHRcdFx0PFNuYWNrYmFyXG5cdFx0XHRcdGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogXCJ0b3BcIiwgaG9yaXpvbnRhbDogXCJyaWdodFwiIH19XG5cdFx0XHRcdGtleT1cInRvcCByaWdodFwiXG5cdFx0XHRcdG9wZW49e29wZW5Ob3RpZn1cblx0XHRcdFx0YXV0b0hpZGVEdXJhdGlvbj17NDAwMH1cblx0XHRcdFx0b25DbG9zZT17aGFuZGxlQ2xvc2V9XG5cdFx0XHRcdENvbnRlbnRQcm9wcz17e1xuXHRcdFx0XHRcdFwiYXJpYS1kZXNjcmliZWRieVwiOiBcIm1lc3NhZ2UtaWRcIixcblx0XHRcdFx0fX1cblx0XHRcdFx0bWVzc2FnZT17PHNwYW4gaWQ9XCJtZXNzYWdlLWlkXCI+TWVzc2FnZSBTZW50PC9zcGFuPn1cblx0XHRcdC8+XG5cdFx0XHQ8SGlkZGVuIG1kVXA+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubG9nbywgY2xhc3Nlcy5sb2dvSGVhZGVyKX0+XG5cdFx0XHRcdFx0PGEgaHJlZj17cm91dGVMaW5rLnNhYXMuaG9tZX0+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIC8+XG5cdFx0XHRcdFx0XHQ8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJzcGFuXCIgY2xhc3NOYW1lPXt0ZXh0LnRpdGxlfT5cblx0XHRcdFx0XHRcdFx0e2JyYW5kLnNhYXMucHJvamVjdE5hbWV9XG5cdFx0XHRcdFx0XHQ8L1R5cG9ncmFwaHk+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvSGlkZGVuPlxuXHRcdFx0PENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmlubmVyV3JhcH0+XG5cdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0aHJlZj17cm91dGVMaW5rLnNhYXMuaG9tZX1cblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuYmFja3RvaG9tZX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImlvbi1pb3MtaG9tZS1vdXRsaW5lXCIgLz5cblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJpb24taW9zLWFycm93LXJvdW5kLWJhY2tcIiAvPlxuXHRcdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlY29yYXRpb259PlxuXHRcdFx0XHRcdDxzdmcgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnREZWNvfT5cblx0XHRcdFx0XHRcdDx1c2UgeGxpbmtIcmVmPVwiL2ltYWdlcy9zYWFzL2RlY28tYmctbGVmdC5zdmcjbWFpblwiIC8+XG5cdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0PHN2ZyBjbGFzc05hbWU9e2NsYXNzZXMucmlnaHREZWNvfT5cblx0XHRcdFx0XHRcdDx1c2UgeGxpbmtIcmVmPVwiL2ltYWdlcy9zYWFzL2RlY28tYmctcmlnaHQuc3ZnI21haW5cIiAvPlxuXHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PFBhcGVyIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmZvcm1Cb3gsIFwiZnJhZ21lbnQtZmFkZVVwXCIpfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsRnJvbVdyYXB9PlxuXHRcdFx0XHRcdFx0PFR5cG9ncmFwaHlcblx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImgzXCJcblx0XHRcdFx0XHRcdFx0YWxpZ249XCJjZW50ZXJcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy50aXRsZSwgdGV4dC50aXRsZSl9XG5cdFx0XHRcdFx0XHRcdGd1dHRlckJvdHRvbVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7dChcImNvbW1vbjpjb250YWN0X3RpdGxlMlwiKX1cblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxUeXBvZ3JhcGh5XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmRlc2MsIHRleHQuc3VidGl0bGUyKX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e3QoXCJjb21tb246Y29udGFjdF9zdWJ0aXRsZVwiKX1cblx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19PlxuXHRcdFx0XHRcdFx0XHQ8VmFsaWRhdG9yRm9ybVxuXHRcdFx0XHRcdFx0XHRcdG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG5cdFx0XHRcdFx0XHRcdFx0b25FcnJvcj17KGVycm9ycykgPT4gY29uc29sZS5sb2coZXJyb3JzKX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs2fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxHcmlkIGl0ZW0gbWQ9ezZ9IHhzPXsxMn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0VmFsaWRhdG9yXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImZpbGxlZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5pbnB1dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMubGlnaHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXt0KFwiY29tbW9uOmZvcm1fbmFtZVwiKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwibmFtZVwiKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiTmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlcy5uYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRvcnM9e1tcInJlcXVpcmVkXCJdfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZXM9e1tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIG1kPXs2fSB4cz17MTJ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dFZhbGlkYXRvclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9XCJmaWxsZWRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xzeChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMuaW5wdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzLmxpZ2h0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17dChcImNvbW1vbjpmb3JtX2VtYWlsXCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJlbWFpbFwiKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiRW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZXMuZW1haWx9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsaWRhdG9ycz17W1wicmVxdWlyZWRcIiwgXCJpc0VtYWlsXCJdfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yTWVzc2FnZXM9e1tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJlbWFpbCBpcyBub3QgdmFsaWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHRWYWxpZGF0b3Jcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiZmlsbGVkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzLmlucHV0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5saWdodFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e3QoXCJjb21tb246Zm9ybV9waG9uZVwiKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKFwicGhvbmVcIil9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cIlBob25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWVzLnBob25lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9HcmlkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEdyaWQgaXRlbSBtZD17Nn0geHM9ezEyfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHRWYWxpZGF0b3Jcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PVwiZmlsbGVkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzLmlucHV0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3Nlcy5saWdodFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e3QoXCJjb21tb246Zm9ybV9jb21wYW55XCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoXCJjb21wYW55XCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJDb21wYW55XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWVzLmNvbXBhbnl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8R3JpZCBpdGVtIHhzPXsxMn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0VmFsaWRhdG9yXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImZpbGxlZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXVsdGlsaW5lXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cm93cz1cIjZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xzeChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMuaW5wdXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzLmxpZ2h0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17dChcImNvbW1vbjpmb3JtX21lc3NhZ2VcIil9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZShcIm1lc3NhZ2VcIil9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cIk1lc3NhZ2VcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZXMubWVzc2FnZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvR3JpZD5cblx0XHRcdFx0XHRcdFx0XHQ8L0dyaWQ+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjbHN4KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzLmJ0bkFyZWEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXMuZmxleFxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2xMYWJlbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250cm9sPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3hcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbGlkYXRvcnM9e1tcImlzVHJ1dGh5XCJdfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JNZXNzYWdlcz1cIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17Y2hlY2t9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17Y2hlY2t9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoZWNrKGUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9XCJzZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3QoXCJjb21tb246Zm9ybV90ZXJtc1wiKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3QoXCJjb21tb246Zm9ybV9wcml2YWN5XCIpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD1cImNvbnRhaW5lZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZ1bGxXaWR0aD17aXNNb2JpbGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj1cInNlY29uZGFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU9XCJsYXJnZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZUNvbnRhY3R9XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0KFwiY29tbW9uOmZvcm1fc2VuZFwiKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L1ZhbGlkYXRvckZvcm0+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9QYXBlcj5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5Db250YWN0LnByb3BUeXBlcyA9IHtcblx0dDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbihbXCJjb21tb25cIl0pKENvbnRhY3QpO1xuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBmYWRlLCBkYXJrZW4gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMvY29sb3JNYW5pcHVsYXRvcic7XG5cbmNvbnN0IGNvbnRhY3RTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHRpdGxlOiB7fSxcbiAgcGFnZVdyYXA6IHtcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygxMCwgNSksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDUsIDApXG4gICAgfSxcbiAgICAnJiAkdGl0bGUnOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgfSxcbiAgICAnJiBhJzoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2RhcmsnID8gdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmxpZ2h0IDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICBmb250U2l6ZTogMTYsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcbiAgICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgICBmb250U2l6ZTogMTRcbiAgICAgIH0sXG4gICAgfVxuICB9LFxuICBpbm5lcldyYXA6IHtcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgfSxcbiAgZnVsbEZyb21XcmFwOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBwYWRkaW5nVG9wOiB0aGVtZS5zcGFjaW5nKDQpXG4gICAgfVxuICB9LFxuICBmb3JtQm94OiB7XG4gICAgYm9yZGVyUmFkaXVzOiA0MCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBib3hTaGFkb3c6ICcwIDEuNXB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yOCknLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICB9XG4gIH0sXG4gIGRlc2M6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEwKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXG4gICAgfVxuICB9LFxuICBsaWdodDoge30sXG4gIGlucHV0OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICAnJiBsYWJlbCc6IHtcbiAgICAgIGxlZnQ6IHRoZW1lLnNwYWNpbmcoMC41KSxcbiAgICB9LFxuICAgICcmID4gZGl2Jzoge1xuICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7ZmFkZSh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSwgMC4yNSl9YCxcbiAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICcmIGlucHV0Jzoge1xuICAgICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZmFkZSh0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsIDAuNylcbiAgICAgICAgfSxcbiAgICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogZmFkZSh0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsIDAuNylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgJyYkbGlnaHQnOiB7XG4gICAgICAnJiBsYWJlbCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgICAgfSxcbiAgICAgICcmID4gZGl2Jzoge1xuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtmYWRlKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5saWdodCwgMC41KX1gLFxuICAgICAgICAnJiBpbnB1dCc6IHtcbiAgICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBmYWRlKHRoZW1lLnBhbGV0dGUudGV4dC5oaW50LCAwLjIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGZhZGUodGhlbWUucGFsZXR0ZS50ZXh0LmhpbnQsIDAuMilcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBmb3JtOiB7XG4gICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMTUsIDEwKSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgNCwgMTApXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiwgMSksXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgfSxcbiAgfSxcbiAgZm9ybUhlbHBlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoKSxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgfVxuICB9LFxuICBmbGV4OiB7fSxcbiAgYnRuQXJlYToge1xuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDUpLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICAnJiBidXR0b24nOiB7XG4gICAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfVxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNSlcbiAgICB9LFxuICAgICcmIGxhYmVsJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuICAgICcmIGJ1dHRvbic6IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICAgIG1pbkhlaWdodDogNDgsXG4gICAgICBtaW5XaWR0aDogMTgwXG4gICAgfSxcbiAgICAnJiBzcGFuJzoge1xuICAgICAgJyYgYSc6IHtcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lICFpbXBvcnRhbnQnLFxuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICAgIH1cbiAgICB9LFxuICAgICcmJGZsZXgnOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICBwcmltYXJ5OiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgb3BhY2l0eTogMC4wOCxcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDVkZWcpJyxcbiAgfSxcbiAgc2Vjb25kYXJ5OiB7XG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBvcGFjaXR5OiAwLjEsXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDQ1ZGVnKScsXG4gIH0sXG4gIGRlY29Ub3A6IHtcbiAgICAnJiAkcHJpbWFyeSc6IHtcbiAgICAgIGJvcmRlclJhZGl1czogODAsXG4gICAgICB3aWR0aDogNDA1LFxuICAgICAgaGVpZ2h0OiA0MDUsXG4gICAgICB0b3A6IC0yMDAsXG4gICAgICByaWdodDogLTUwLFxuICAgIH0sXG4gICAgJyYgJHNlY29uZGFyeSc6IHtcbiAgICAgIGJvcmRlclJhZGl1czogNDAsXG4gICAgICB3aWR0aDogMjA1LFxuICAgICAgaGVpZ2h0OiAyMDUsXG4gICAgICB0b3A6IDI0LFxuICAgICAgcmlnaHQ6IC0xMDAsXG4gICAgfVxuICB9LFxuICBkZWNvQm90dG9tOiB7XG4gICAgJyYgJHByaW1hcnknOiB7XG4gICAgICBib3JkZXJSYWRpdXM6IDQwLFxuICAgICAgd2lkdGg6IDIwNSxcbiAgICAgIGhlaWdodDogMjA1LFxuICAgICAgYm90dG9tOiAxODAsXG4gICAgICBsZWZ0OiAtMTEwLFxuICAgIH0sXG4gICAgJyYgJHNlY29uZGFyeSc6IHtcbiAgICAgIGJvcmRlclJhZGl1czogODAsXG4gICAgICB3aWR0aDogNDA1LFxuICAgICAgaGVpZ2h0OiA0MDUsXG4gICAgICBib3R0b206IC0xMDAsXG4gICAgICBsZWZ0OiAtMTAwLFxuICAgIH1cbiAgfSxcbiAgcmlnaHRJY29uOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygpXG4gIH0sXG4gIGJhY2t0b2hvbWU6IHtcbiAgICB3aWR0aDogODAsXG4gICAgaGVpZ2h0OiA4MCxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBtYXJnaW5Ub3A6IDIwLFxuICAgIG1hcmdpbkxlZnQ6IDIwLFxuICAgIHpJbmRleDogMjAsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBsZWZ0OiAnY2FsYyg1MCUgLSA0MHB4KScsXG4gICAgICB0b3A6IDQwLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgbWFyZ2luVG9wOiAyMCxcbiAgICAgIG1hcmdpbkxlZnQ6IDIwLFxuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9LFxuICAgICcmIGknOiB7XG4gICAgICBmb250U2l6ZTogMzIsXG4gICAgICBjb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsIDAuNTQpXG4gICAgfSxcbiAgICAnJiA+IHNwYW4gaTpmaXJzdC1jaGlsZCc6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAwLjNzIGVhc2UnXG4gICAgfSxcbiAgICAnJiA+IHNwYW4gaTpsYXN0LWNoaWxkJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICByaWdodDogMCxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZSdcbiAgICB9LFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgJyYgPiBzcGFuIGk6Zmlyc3QtY2hpbGQnOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9LFxuICAgICAgJyYgPiBzcGFuIGk6bGFzdC1jaGlsZCc6IHtcbiAgICAgICAgcmlnaHQ6IDMwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIGNoZWNrOiB7XG4gICAgJyYgc3ZnJzoge1xuICAgICAgZmlsbDogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgIH1cbiAgfSxcbiAgZGVjb3JhdGlvbjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGNsaXA6ICdyZWN0KDAsIGF1dG8sIGF1dG8sIDApJyxcbiAgICAnJiBzdmcnOiB7XG4gICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICAgb3BhY2l0eTogMC4yLFxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB0b3A6IDAsXG4gICAgfVxuICB9LFxuICBsZWZ0RGVjbzoge1xuICAgIGxlZnQ6IHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnYXV0bycgOiAtNDAwLFxuICAgIHJpZ2h0OiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJy01MCUnIDogJ2F1dG8nLFxuICAgIHdpZHRoOiAxMjAwLFxuICAgIGhlaWdodDogMTUwMCxcbiAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgbGVmdCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXG4gICAgfVxuICB9LFxuICByaWdodERlY286IHtcbiAgICBsZWZ0OiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gLTE1MCA6ICdhdXRvJyxcbiAgICByaWdodDogdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/ICdhdXRvJyA6IDAsXG4gICAgaGVpZ2h0OiAxNTAwLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCByaWdodCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXG4gICAgfVxuICB9LFxuICBhdXRoRnJhbWU6IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gIH0sXG4gIGdyZWV0aW5nOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoMTYpLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXG4gICAgJyYgaDYnOiB7XG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyXG4gICAgfVxuICB9LFxuICBsb2dvSGVhZGVyOiB7fSxcbiAgbG9nbzoge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgJyYkbG9nb0hlYWRlcic6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHpJbmRleDogMTBcbiAgICB9LFxuICAgICcmIGltZyc6IHtcbiAgICAgIHdpZHRoOiA2NCxcbiAgICB9LFxuICAgICcmIHAsIHNwYW4nOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcGFkZGluZ0JvdHRvbTogNCxcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICB9XG4gIH0sXG4gIGhlYWQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgJyYgYSc6IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgJyYgYSc6IHtcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzaWduQXJyb3c6IHt9LFxuICBmb3JtV3JhcDoge1xuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoNSlcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnbGcnKV06IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoOClcbiAgICB9XG4gIH0sXG4gIHNvY21lZFNpZGVMb2dpbjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9LFxuICAgICcmID4gKic6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgIHdpZHRoOiAxNjAsXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKCksXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDAsIDAuNSlcbiAgICAgIH0sXG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgIH0sXG4gICAgJyYgaSc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKClcbiAgICB9XG4gIH0sXG4gIGJsdWVCdG46IHtcbiAgICBiYWNrZ3JvdW5kOiAnIzI4YWFlMScsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJyMyOGFhZTEnLCAwLjIpLFxuICAgIH1cbiAgfSxcbiAgbmF2aUJ0bjoge1xuICAgIGJhY2tncm91bmQ6ICcjM2I1NzlkJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbignIzNiNTc5ZCcsIDAuMiksXG4gICAgfVxuICB9LFxuICByZWRCdG46IHtcbiAgICBiYWNrZ3JvdW5kOiAnI2RkNDkzYycsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJyNkZDQ5M2MnLCAwLjIpLFxuICAgIH1cbiAgfSxcbiAgc2VwYXJhdG9yOiB7XG4gICAgbWFyZ2luOiBgJHt0aGVtZS5zcGFjaW5nKDUpfXB4IGF1dG9gLFxuICAgIG1heFdpZHRoOiAzMDAsXG4gICAgbWluV2lkdGg6IDIwMCxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICcmIHAnOiB7XG4gICAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV06IHtcbiAgICAgICAgZm9udFNpemU6IDEyXG4gICAgICB9LFxuICAgIH0sXG4gICAgJyY6YmVmb3JlLCAmOmFmdGVyJzoge1xuICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICR7dGhlbWUucGFsZXR0ZS50ZXh0LmhpbnR9YCxcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMjAlJ1xuICAgIH0sXG4gICAgJyY6YmVmb3JlJzoge1xuICAgICAgbGVmdDogMCxcbiAgICB9LFxuICAgICcmOmFmdGVyJzoge1xuICAgICAgcmlnaHQ6IDAsXG4gICAgfVxuICB9XG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RTdHlsZXM7XG4iLCJjb25zdCBOZXh0STE4TmV4dCA9IHJlcXVpcmUoJ25leHQtaTE4bmV4dCcpLmRlZmF1bHQ7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IE5leHRJMThOZXh0KHtcbiAgZGVmYXVsdExhbmd1YWdlOiAnZW5nJyxcbiAgb3RoZXJMYW5ndWFnZXM6IFsnZGV1JywgJ2luZCcsICdhcmEnLCAncHJ0JywgJ3pobyddLFxuICBmYWxsYmFja0xuZzogJ2VuZycsXG4gIGluaXRJbW1lZGlhdGU6IGZhbHNlLFxuICBsb2NhbGVQYXRoOiAncHVibGljL2xvY2FsZXMnLFxuICByZWFjdDoge1xuICAgIHVzZVN1c3BlbnNlOiBmYWxzZSxcbiAgfSxcbiAgbG9jYWxlU3VicGF0aHM6IHtcbiAgICBhcmE6ICdhcicsXG4gICAgZGV1OiAnZGUnLFxuICAgIGVuZzogJ2VuJyxcbiAgICBpbmQ6ICdpZCcsXG4gICAgcHJ0OiAncHQnLFxuICAgIHpobzogJ3poJyxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBicmFuZCBmcm9tICcuLi9wdWJsaWMvdGV4dC9icmFuZCc7XG5pbXBvcnQgQ29udGFjdEZybSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1zL0NvbnRhY3QnO1xuXG5mdW5jdGlvbiBDb250YWN0KCkge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgeyBicmFuZC5zYWFzLm5hbWUgfVxuICAgICAgICAgICZuYnNwOyAtIENvbnRhY3RcbiAgICAgICAgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxDb250YWN0RnJtIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5Db250YWN0LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb21tb24nLCAnc2Fhcy1sYW5kaW5nJ10sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESXlMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWdvSklIWnBaWGRDYjNnOUlqQWdNQ0EwT0RnZ05Ea3hMamtpSUhOMGVXeGxQU0psYm1GaWJHVXRZbUZqYTJkeWIzVnVaRHB1WlhjZ01DQXdJRFE0T0NBME9URXVPVHNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnbzhjM1I1YkdVZ2RIbHdaVDBpZEdWNGRDOWpjM01pUGdvSkxuTjBNSHRtYVd4c09pTTRRa016TkVFN2ZRb0pMbk4wTVh0bWFXeHNPaU01UXpJM1FqQTdmUW9KTG5OME1udG1hV3hzT2lNMk56TkJRamM3YzNSeWIydGxPaU5HUmtaR1JrWTdjM1J5YjJ0bExYZHBaSFJvT2pJd08zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qRXdPMzBLUEM5emRIbHNaVDRLUEdjK0NnazhjR0YwYUNCamJHRnpjejBpYzNRd0lpQmtQU0pOTVRJMkxqZ3NORFl1TjB3NUxqWXNNemMyTGpaRExUWXVNU3cwTWpBdU9Dd3pNaXcwTmpVdU5TdzNPQzR4TERRMU4yd3pORFF1TXkwMk15NDFZelEyTGpJdE9DNDFMRFkxTGpndE5qTXVPQ3d6TlM0MExUazVMalpNTWpNd0xqY3NNamN1TlFvSkNVTXlNREF1TWkwNExqSXNNVFF5TGpVc01pNDBMREV5Tmk0NExEUTJMamQ2SWk4K0NnazhjR0YwYUNCamJHRnpjejBpYzNReElpQmtQU0pOT0RVdU5DdzJPUzQxVERNMUxqWXNOREUyTGpGakxUWXVOeXcwTmk0MUxETTVMalVzT0RJdU55dzRNeTR4TERZMUxqTnNNekkxTFRFek1DNHlZelF6TGpZdE1UY3VOU3cxTVM0NUxUYzFMallzTVRVdE1UQTBMalpNTVRnekxqUXNNekF1TXdvSkNVTXhORFl1TlN3eExqSXNPVElzTWpNdU1TdzROUzQwTERZNUxqVjZJaTgrQ2drOFp6NEtDUWs4Y0dGMGFDQmpiR0Z6Y3owaWMzUXlJaUJrUFNKTk1URXhMamdzTXpVNFZqSXdPQzQzYURFNExqWjJNVE15TGpkb05qa3VORll6TlRoSU1URXhMamg2SWk4K0Nna0pQSEJoZEdnZ1kyeGhjM005SW5OME1pSWdaRDBpVFRJek9DNDVMRE14TUM0MWRpMDNOUzQyYURFM0xqZDJOelF1TldNd0xESXhMamtzTVRJdU15d3pOUzQ0TERNMUxqRXNNelV1T0dNeU1pNDRMREFzTXpVdU5DMHhNeTQ1TERNMUxqUXRNelV1T0hZdE56UXVOV2d4Tnk0M2RqYzFMallLQ1FrSll6QXNNekF1TkMweE55NDVMRFV3TGpFdE5UTXNOVEF1TVVNeU5UWXVOU3d6TmpBdU55d3lNemd1T1N3ek5EQXVOeXd5TXpndU9Td3pNVEF1TlhvaUx6NEtDVHd2Wno0S1BDOW5QZ284TDNOMlp6NEtcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBzYWFzOiB7XG4gICAgbmFtZTogJ1NvZnR3YXJlJyxcbiAgICBkZXNjOiAnTHV4aXJlbiBTYWFzIC0gUmVhY3QgU2luZ2xlIExhbmRpbmcgUGFnZSBUZW1wbGF0ZScsXG4gICAgcHJlZml4OiAnbHV4aXJlbicsXG4gICAgZm9vdGVyVGV4dDogJ0x1eGlyZW4gVGhlbWUgMjAyMScsXG4gICAgbG9nb1RleHQ6ICdMdXhpcmVuIFNvZnR3YXJlJyxcbiAgICBwcm9qZWN0TmFtZTogJ1NvZnR3YXJlJyxcbiAgICB1cmw6ICdsdXhpcmVhY3QudXgtbWFlc3Ryby5jb20vc2FhcycsXG4gICAgaW1nOiAnL3N0YXRpYy9pbWFnZXMvc2Fhcy1sb2dvLnBuZycsXG4gICAgbm90aWZNc2c6ICdEb25lYyBzaXQgYW1ldCBudWxsYSBzZWQgYXJjdSBwdWx2aW5hciB1bHRyaWNpZXMgY29tbW9kbyBpZCBsaWd1bGEuJ1xuICB9XG59O1xuIiwiY29uc3QgbGluayA9IHtcbiAgc2Fhczoge1xuICAgIGhvbWU6ICcvJyxcbiAgICBjb250YWN0OiAnL2NvbnRhY3QnLFxuICAgIGxvZ2luOiAnL2xvZ2luJyxcbiAgICByZWdpc3RlcjogJy9yZWdpc3RlcidcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGluaztcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHsgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvXCIgfSk7XG5cbmV4cG9ydCBjb25zdCBjb250YWN0TnVtYmVyID0gXCJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXBpO1xuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCB1c2VUZXh0QWxpZ24gPSBtYWtlU3R5bGVzKHtcbiAgdGV4dENlbnRlcjoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfSxcbiAgdGV4dExlZnQ6IHtcbiAgICB0ZXh0QWxpZ246ICdsZWZ0J1xuICB9LFxuICB0ZXh0UmlnaHQ6IHtcbiAgICB0ZXh0QWxpZ246ICdyaWdodCdcbiAgfVxufSk7XG5cbmV4cG9ydCBjb25zdCB1c2VGbG9hdCA9IG1ha2VTdHlsZXMoe1xuICBmbG9hdExlZnQ6IHtcbiAgICBmbG9hdDogJ2xlZnQnXG4gIH0sXG4gIGZsb2F0UmlnaHQ6IHtcbiAgICBmbG9hdDogJ3JpZ2h0J1xuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCB1c2VUZXh0ID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICB0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXG4gICAgZm9udFNpemU6IDQ4LFxuICAgIGxpbmVIZWlnaHQ6ICc3MnB4JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgIGZvbnRTaXplOiAzOCxcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4J1xuICAgIH0sXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBmb250U2l6ZTogMjgsXG4gICAgICBsaW5lSGVpZ2h0OiAnNDRweCdcbiAgICB9LFxuICB9LFxuICB0aXRsZTI6IHtcbiAgICBmb250U2l6ZTogMzYsXG4gICAgbGluZUhlaWdodDogJzU2cHgnLFxuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodEJvbGQsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ21kJyldOiB7XG4gICAgICBmb250U2l6ZTogMzIsXG4gICAgICBsaW5lSGVpZ2h0OiAnNDhweCdcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgbGluZUhlaWdodDogJzM2cHgnLFxuICAgIH1cbiAgfSxcbiAgc3VidGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgZm9udFNpemU6IDI4LFxuICAgIGxpbmVIZWlnaHQ6ICc0NHB4JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgIGxpbmVIZWlnaHQ6ICczNnB4JyxcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgZm9udFNpemU6IDE4LFxuICAgICAgbGluZUhlaWdodDogJzI4cHgnLFxuICAgIH0sXG4gIH0sXG4gIHN1YnRpdGxlMjoge1xuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgZm9udFNpemU6IDIyLFxuICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKV06IHtcbiAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgIGxpbmVIZWlnaHQ6ICczMnB4JyxcbiAgICB9LFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgbGluZUhlaWdodDogJzI0cHgnLFxuICAgIH0sXG4gIH0sXG4gIHBhcmFncmFwaDoge1xuICAgIGZvbnRXZWlnaHQ6IHRoZW1lLnR5cG9ncmFwaHkuZm9udFdlaWdodFJlZ3VsYXIsXG4gICAgZm9udFNpemU6IDE2LFxuICAgIGxpbmVIZWlnaHQ6ICcyNHB4J1xuICB9LFxuICBjYXB0aW9uOiB7XG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcbiAgICBmb250U2l6ZTogMTYsXG4gICAgbGluZUhlaWdodDogJzI0cHgnLFxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXToge1xuICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgbGluZUhlaWdodDogJzIycHgnLFxuICAgIH0sXG4gIH1cbn0pKTtcblxuZXhwb3J0IGNvbnN0IHVzZUhpZGRlbiA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgbGdEb3duOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ2xnJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9XG4gIH0sXG4gIG1kRG93bjoge1xuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpXToge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfVxuICB9LFxuICBzbURvd246IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH1cbiAgfSxcbiAgeHNEb3duOiB7XG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9XG4gIH0sXG4gIGxnVXA6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9XG4gIH0sXG4gIG1kVXA6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9XG4gIH0sXG4gIHNtVXA6IHtcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9XG4gIH1cbn0pKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0hpZGRlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbHN4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtaTE4bmV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXRlcmlhbC11aS1mb3JtLXZhbGlkYXRvclwiKTsiXSwic291cmNlUm9vdCI6IiJ9