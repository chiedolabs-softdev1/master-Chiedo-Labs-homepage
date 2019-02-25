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
	"button": "_3aBJEmPf2LWj6mc5V62Bmu"
};

/***/ }),

/***/ "./Common/Components/Container/index.js":
/*!**********************************************!*\
  !*** ./Common/Components/Container/index.js ***!
  \**********************************************/
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./Common/Components/Container/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/Common/Components/Container/index.js";





var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children);
};

Container.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired
};
Container.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./Common/Components/Container/style.scss":
/*!************************************************!*\
  !*** ./Common/Components/Container/style.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "_9BaZTt1gh68pTTL9kLfxv"
};

/***/ }),

/***/ "./Common/Components/Slider/index.js":
/*!*******************************************!*\
  !*** ./Common/Components/Slider/index.js ***!
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./Common/Components/Slider/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/Common/Components/Slider/index.js";





var Slider = function Slider() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.C,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row pt-3 ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "ABOUT US")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "PORTFOLIO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "WHAT WE DO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "WHO WE SERVE")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "CONTACT US"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Slider); //     ABOUT US
// PORTFOLIO
// WHAT WE DO
// WHO WE SERVE
// CONTACT US

react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
  id: "main-menu",
  class: "main-menu currently-page",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  class: "menu-header-menu-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
  id: "menu-header-menu",
  class: "menu",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  id: "menu-item-221",
  class: "menu-item menu-item-type-post_type menu-item-object-page menu-item-221",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://labs.chiedo.com/page/about/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "About Us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  id: "menu-item-1852",
  class: "menu-item menu-item-type-custom menu-item-object-custom menu-item-1852",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "/case-studies",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  id: "menu-item-1722",
  class: "menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1722",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://labs.chiedo.com/#what-we-do",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "What We Do")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  id: "menu-item-1721",
  class: "menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-1721",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://labs.chiedo.com#who-we-serve",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "Who We Serve")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  id: "menu-item-16",
  class: "menu-item menu-item-type-post_type menu-item-object-page menu-item-16",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://labs.chiedo.com/page/contact/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "Contact Us")))), "    ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  class: "clear",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}));

/***/ }),

/***/ "./Common/Components/Slider/style.scss":
/*!*********************************************!*\
  !*** ./Common/Components/Slider/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"C": "_3J2br7hdjjZMJ_meyleae5",
	"color": "_1EwllQzwHEFyyeT7_FA3hA"
};

/***/ }),

/***/ "./Common/Components/SocialMedia/components/SocialMediaLinks/SocialLink/index.js":
/*!***************************************************************************************!*\
  !*** ./Common/Components/SocialMedia/components/SocialMediaLinks/SocialLink/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/Common/Components/SocialMedia/components/SocialMediaLinks/SocialLink/index.js";





var SocialLink = function SocialLink(_ref) {
  var index = _ref.index,
      link = _ref.link;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: link.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: link.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank",
    tabIndex: index,
    title: link.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('fab', "fa-".concat(link.icon)),
    "aria-label": link.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))));
};

SocialLink.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,

  /* eslint-disable-next-line */
  link: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SocialLink);

/***/ }),

/***/ "./Common/Components/SocialMedia/components/SocialMediaLinks/index.js":
/*!****************************************************************************!*\
  !*** ./Common/Components/SocialMedia/components/SocialMediaLinks/index.js ***!
  \****************************************************************************/
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
/* harmony import */ var _SocialLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SocialLink */ "./Common/Components/SocialMedia/components/SocialMediaLinks/SocialLink/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./Common/Components/SocialMedia/components/SocialMediaLinks/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/Common/Components/SocialMedia/components/SocialMediaLinks/index.js";






var SocialMediaLinks = function SocialMediaLinks(_ref) {
  var className = _ref.className,
      links = _ref.links;
  var SocialLinks = links.map(function (link, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      link: link,
      index: index,
      key: String(Symbol("Link Item ".concat(index))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_4___default.a.socialMediaList, className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, SocialLinks);
};

SocialMediaLinks.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  links: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
SocialMediaLinks.defaultProps = {
  className: '',
  links: []
};
/* harmony default export */ __webpack_exports__["default"] = (SocialMediaLinks);

/***/ }),

/***/ "./Common/Components/SocialMedia/components/SocialMediaLinks/style.scss":
/*!******************************************************************************!*\
  !*** ./Common/Components/SocialMedia/components/SocialMediaLinks/style.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"socialMediaList": "_3ielFfYRL0APF-HfNvFcfe"
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./Common/Homepage/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Button */ "./Common/Components/Button/index.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Section */ "./Common/Section/index.js");
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/Common/Homepage/index.js";







var HomePage = function HomePage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("col", _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Column"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Column")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Column"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Column")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Column"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Column")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Column"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Column"))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage); // <a href="/" className="cd-btn">Get a Quote</a>

{
  /* <div class="w-100"></div>
     <div class="col"> <img src="https:\\beta.chiedo.com\wp-content\uploads\2019\02\bar-track-300x188.png" alt="BarTrack"/></div>
     <div class="col">
     <Button className={css.Quote}>Get a Quote</Button>
     </div> */
}

/***/ }),

/***/ "./Common/Homepage/style.scss":
/*!************************************!*\
  !*** ./Common/Homepage/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Quote": "_2qENJ6cC0KaLubofBLnp9k"
};

/***/ }),

/***/ "./Common/Section/index.js":
/*!*********************************!*\
  !*** ./Common/Section/index.js ***!
  \*********************************/
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./Common/Section/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Slider */ "./Common/Components/Slider/index.js");
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/Common/Section/index.js";






var Section = function Section() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Slider__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.skinny,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Hire our team to:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row justify-content-center pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Build and maintain:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Web applications"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Web back-ends"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Web front-ends"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.color, "mr-lg-4 mb-lg-0"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Custom websites"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Section); // <div className={ClassNames(css.color, "mt-3 mt-lg-0")}></div>

/***/ }),

/***/ "./Common/Section/style.scss":
/*!***********************************!*\
  !*** ./Common/Section/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"inner": "_3tjO61jAr32_ibofUjRhj_",
	"color": "kloimaSHSxOu32jn3pBhX",
	"skinny": "_1y3Inqgb6V_4v2H3FSXBmy"
};

/***/ }),

/***/ "./Footer/index.js":
/*!*************************!*\
  !*** ./Footer/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_Components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/Components/Container */ "./Common/Components/Container/index.js");
/* harmony import */ var _Common_Components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/Components/Button */ "./Common/Components/Button/index.js");
/* harmony import */ var _Common_Components_SocialMedia_components_SocialMediaLinks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Common/Components/SocialMedia/components/SocialMediaLinks */ "./Common/Components/SocialMedia/components/SocialMediaLinks/index.js");
/* harmony import */ var Base_constants_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Base/constants/links */ "./base/constants/links.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./Footer/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/Footer/index.js";



 // import Navigation from 'Features/Navigation/components/Navigation';






var Footer = function Footer(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_7___default.a.connectRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Connect With Us"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Components_SocialMedia_components_SocialMediaLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_7___default.a.footerSocial,
    links: Base_constants_links__WEBPACK_IMPORTED_MODULE_6__["SOCIAL_LINKS"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))));
};

Footer.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Footer.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./Footer/style.scss":
/*!***************************!*\
  !*** ./Footer/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.main, _style_scss__WEBPACK_IMPORTED_MODULE_3___default.a.center),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "",
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
	"ctr": "_3jubjysaIPaTBz1oIdMixt"
};

/***/ }),

/***/ "./base/constants/links.js":
/*!*********************************!*\
  !*** ./base/constants/links.js ***!
  \*********************************/
/*! exports provided: NAV_LINKS, FOOTER_NAV_LINKS, SOCIAL_LINKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAV_LINKS", function() { return NAV_LINKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER_NAV_LINKS", function() { return FOOTER_NAV_LINKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LINKS", function() { return SOCIAL_LINKS; });
// navigation link objects for the main menu
var NAV_LINKS = [{
  href: '/about',
  title: 'About',
  altTitle: 'About Blue Trunk'
}, {
  href: '#',
  title: 'Destinations',
  altTitle: 'Drop Down Selection of Available Destinations',
  subMenu: [{
    href: '/businesses',
    title: 'Charlottesville'
  }, {
    href: '/businesses',
    title: 'Staunton'
  }]
}, {
  href: '/get-involved',
  title: 'Get Involved'
}]; // navigation link objects for the footer menu

var FOOTER_NAV_LINKS = [{
  href: '/',
  title: 'Home'
}, {
  href: '/about',
  title: 'About'
}, {
  href: '/get-involved',
  title: 'Get Involved'
}, {
  href: '#',
  title: 'Contact'
}, {
  href: '#',
  title: 'Terms & Conditions'
}]; // social media objects

var SOCIAL_LINKS = [{
  href: 'https://www.facebook.com/bluetrunkfoundation',
  title: 'Blue Trunk Facebook Page',
  icon: 'facebook-f'
}, {
  href: 'https://twitter.com/bluetrunktravel',
  title: 'Blue Trunk Twitter Page',
  icon: 'twitter'
}, {
  href: 'https://www.instagram.com/bluetrunktravel',
  title: 'Blue Trunk Instagram Page',
  icon: 'instagram'
}, {
  href: 'https://in.linkedin.com/company/blue-trunk-foundation',
  title: 'Blue Trunk LinkedIn Page',
  icon: 'linkedin-in'
}];

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
/* harmony import */ var _Common_Components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/Components/Button */ "./Common/Components/Button/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./pages/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Common_Homepage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/Homepage */ "./Common/Homepage/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Header */ "./Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Footer */ "./Footer/index.js");
var _jsxFileName = "/Users/softdev1/projects/Chiedo-Labs-homepage/pages/index.js";








function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Homepage__WEBPACK_IMPORTED_MODULE_4__["default"], {
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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map