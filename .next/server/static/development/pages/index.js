module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Common/Components/Button/index.js":
/*!*******************************************!*\
  !*** ./Common/Components/Button/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./Common/Components/Button/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/Common/Components/Button/index.js";


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
    type: "button",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.button, className)
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), children);
};

Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Button.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./Common/Components/Button/style.scss":
/*!*********************************************!*\
  !*** ./Common/Components/Button/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"button": "_3aBJEmPf2LWj6mc5V62Bmu",
	"grey": "_35cw_jja-AWk3kyIcTVnnT"
};

/***/ }),

/***/ "./Common/Components/Foot/index.js":
/*!*****************************************!*\
  !*** ./Common/Components/Foot/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./Common/Components/Foot/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/Common/Components/Foot/index.js";




var Foot = function Foot() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.background,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col-lg-3", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.moreLinks),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.redText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "MORE LINKS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Blog"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Join the Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Facebook"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Twitter"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col-lg-9", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.background),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/chiedo-sitting-small.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col-lg-7", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ourFounder),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Meet Our Founder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "If you need new web developers or want to talk about your tech startup, let's connect on LinkedIn and meet for lunch or coffee!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Connect on LinkedIn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Copyright 2019 \xA9 Chiedo Labs, LLC."))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Foot);

/***/ }),

/***/ "./Common/Components/Foot/style.scss":
/*!*******************************************!*\
  !*** ./Common/Components/Foot/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"button": "_177Tbh6rrBZ6oPH7rrl9w1",
	"moreLinks": "_22AUZjHOqU5OvhJUdG0SN6",
	"ourFounder": "_3uC1_GFSrlQxRDNeEhDAm",
	"redText": "_1qEblZdoI9D-viiH2_ygfl",
	"background": "_2sqdF8OI95gCtrY1_7dLOT"
};

/***/ }),

/***/ "./Common/Components/NavBar/index.js":
/*!*******************************************!*\
  !*** ./Common/Components/NavBar/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./Common/Components/NavBar/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./Common/Components/Button/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/Common/Components/NavBar/index.js";





var NavBar = function NavBar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.navBar,
    expand: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Toggle, {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://labs.chiedo.com/wp-content/themes/chiedolabs/img/mob-trig.png",
    alt: "Nav Bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Collapse, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.div,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.white,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "ABOUT US")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.white,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "PORTFOLIO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#whatWeDo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.white,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "WHAT WE DO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "#whoWeServe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.white,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "WHO WE SERVE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.white,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "CONTACT US"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mt-5 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.aWhite,
    href: "#home-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mainTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Your New", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), "Web Developers"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3 justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mainText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "We\u2019re a team of web developers passionate about building stable, maintainable", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), "software for tech startups and enterprise customers.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-5 justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Get a quote"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ }),

/***/ "./Common/Components/NavBar/style.scss":
/*!*********************************************!*\
  !*** ./Common/Components/NavBar/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"white": "_259SvoHPWcmCpbvN4qgw8i",
	"div": "_3zRvZt4bKHQA58KN6ODMEp",
	"navBar": "_2XrznVIor3lYhh-g6u05Q1",
	"logo": "_1HG70_ZZ3gStjBJOWLbh69",
	"aWhite": "_1SErXOyq85b90yJ9OU4CQ",
	"mainTitle": "_3PRClz9-XvAzVR1M9OCWHD",
	"mainText": "_13bsm1HzsWYHnXzvkeKEsD",
	"hide": "_3E1ThHZrQit7AZgkmqzaO6"
};

/***/ }),

/***/ "./Common/Homepage/index.js":
/*!**********************************!*\
  !*** ./Common/Homepage/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./Common/Homepage/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Button */ "./Common/Components/Button/index.js");
/* harmony import */ var _MainMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MainMenu */ "./Common/MainMenu/index.js");
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/Common/Homepage/index.js";






var HomePage = function HomePage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.background),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.half),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.s),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row m-5"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pb-4"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "what-WeDo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.txtcolor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "WHAT"), " WE DO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, " We build and maintain:"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Web Front-ends"), " with HTML, CSS, and a library called React."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Web Back-ends"), " using NodeJS, Ruby on Rails, PHP, MySQL, AWS, and Heroku."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Custom Websites"), " from the ground up as opposed to using pre-existing templates."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Get a quote"))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row justify-content-center", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.foundersContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.whiteTitle, _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.founderstitle),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Our Founding Web Developers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.foundersblock, "mb-5"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.founder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-chiedo-new.jpg",
    "max-width": "100%",
    flex: "1",
    width: "268",
    height: "268",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nameTag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Chiedo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), "Founder, Solutions Architect"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.founder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-ricardo-fearing.jpg",
    width: "268",
    height: "268",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nameTag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Ricardo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), "ReactJS / Front-End Master"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.founder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-eric-duvon.jpg",
    width: "268",
    height: "268",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nameTag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Eric"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), "Ruby on Rails / Back-end Pro"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.founder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://labs.chiedo.com/wp-content/themes/chiedolabs/img/wp-landing-page/team-don-townsend.jpg",
    width: "268",
    height: "268",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nameTag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Don"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), "NodeJS / Full Stack Expert"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn, _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnGrey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Get a quote"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.background),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col ml-3", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.s),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row m-5"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pb-4"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    id: "whoWeServe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.txtcolor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "WHO"), " WE SERVE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.serveColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Enterprise customers"), " hire us to build and maintain the web apps critical to their operations."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.body,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.serveColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Tech startups"), " partner with us to build and maintain the web front-ends and back-ends at the core of their business."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Get a quote")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.half),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col-lg-9", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.grey),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-4 m-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://picsum.photos/400/400",
    alt: "This is a profile picture",
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profilePicture,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-6 m-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Start-up Culture, Corporate-Grade Service."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "We create an atmosphere that fosters creativity and professionalism. In this way, we allow our team to hone your vision with our digital strategy and build realities that will take your business to the next level."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Get a quote")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("col-lg-3", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.light),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.txtcolor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "FEATURED"), " Post")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row mx-4", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.g),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.smaller,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "How to Upgrade PHP in a MAMP Environment")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.half),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-2 mr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://picsum.photos/256/200",
    alt: "This is a profile picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-2 ml-0 mr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://picsum.photos/256/200",
    alt: "This is a profile picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-2 ml-0 mr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://picsum.photos/256/200",
    alt: "This is a profile picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-2 mr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://picsum.photos/256/200",
    alt: "This is a profile picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-2 mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://picsum.photos/256/200",
    alt: "This is a profile picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("row pt-3", _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.half),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-2 mr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://picsum.photos/256/200",
    alt: "This is a profile picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-2 ml-0 mr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://picsum.photos/256/200",
    alt: "This is a profile picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-2 ml-0 mr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://picsum.photos/256/200",
    alt: "This is a profile picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-2 mr-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://picsum.photos/256/200",
    alt: "This is a profile picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-2 mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://picsum.photos/256/200",
    alt: "This is a profile picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./Common/Homepage/style.scss":
/*!************************************!*\
  !*** ./Common/Homepage/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Quote": "_2qENJ6cC0KaLubofBLnp9k",
	"half": "_3NIIf8TKC6ZRdmsyFGRQgp",
	"body": "_3Qd7JbQWPAfI0k4A0h0Kje",
	"color": "_1yLrqTVToOWMZMk7szLdbS",
	"background": "_3aCTiI7PNeGrE3nRVJ4pm9",
	"s": "_2UwOXF3B47sA5-zoQpYBBp",
	"txtcolor": "_23EBy2rMCYDjZzXqXmvkQu",
	"serveColor": "_3NDInCUcrgGppIU1JZelPz",
	"grey": "_1oXw101geW-SbgKwtCVhxI",
	"profilePicture": "_3MV9nGUs2BPPiDnNzxmx1r",
	"light": "_3q28cQ8IOPn3Qm8u_Lkngf",
	"g": "_5CHjgmzEWjl_ZOfzhknVK",
	"white": "PsIb7epaOVWIR4PcLY_mn",
	"smaller": "_9CV3PmOGZrWxt0nVjxUf7",
	"featured": "_3SalghDt7hl3Sy8RW5upsi",
	"btn": "_8DVUyf779fZQvU-sby_eU",
	"btnGrey": "ozsCQjIIXDXNbkQD2X5zd",
	"foundersBlock": "_2AYUeJfMo_OhgOM33dql6W",
	"founder": "_3dPd1lXQ7_4hnyF32IKwiO",
	"nameTag": "_1uALebq4FvBdmTXULEQ7Yk",
	"founderstitle": "_1A6vlZfLwDnMBffuPluYGE",
	"foundersContainer": "_2xN1uHpIqlcexyn30Ek4Xb",
	"whiteTitle": "_1Ge5CvNQan41K7Hh2eajb2"
};

/***/ }),

/***/ "./Common/MainMenu/index.js":
/*!**********************************!*\
  !*** ./Common/MainMenu/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./Common/MainMenu/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/NavBar */ "./Common/Components/NavBar/index.js");
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/Common/MainMenu/index.js";





var MainMenu = function MainMenu() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "home-top",
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.skinny,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Hire our team to:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Build and maintain:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Web applications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Web back-ends"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Web front-ends"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Custom websites"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MainMenu);

/***/ }),

/***/ "./Common/MainMenu/style.scss":
/*!************************************!*\
  !*** ./Common/MainMenu/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"inner": "_1IuFaOheI40Af4GZU3DhJv",
	"color": "_2YAKx4cvop9xo9frdPRyLN",
	"skinny": "_1WssmQ1_Y99DK8F0UWWZYc"
};

/***/ }),

/***/ "./Header/index.js":
/*!*************************!*\
  !*** ./Header/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./Header/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/Header/index.js";





function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main, _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.dim),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://labs.chiedo.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://labs.chiedo.com/wp-content/themes/chiedolabs/img/b-logo-white.png?ver=1.11",
    alt: "Chiedo Labs Web Development Harrisonburg VA & Charlottesville VA web design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./Header/style.scss":
/*!***************************!*\
  !*** ./Header/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main": "_3hSuKDtnQmZnURJEzjV4Lr",
	"dim": "_1ZcNE1HuKsuuD-UJ9YRn1"
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./pages/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_Homepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/Homepage */ "./Common/Homepage/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ "./Header/index.js");
/* harmony import */ var _Common_Components_Foot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/Components/Foot */ "./Common/Components/Foot/index.js");
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/pages/index.js";







function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hideSpace,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Homepage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Components_Foot__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/style.scss":
/*!**************************!*\
  !*** ./pages/style.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"hideSpace": "_1pyeb5j8j7LsWS0MbUtUYx"
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

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

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map