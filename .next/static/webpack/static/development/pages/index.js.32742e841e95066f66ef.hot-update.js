webpackHotUpdate("static/development/pages/index.js",{

/***/ "./Common/Components/Container/index.js":
/*!**********************************************!*\
  !*** ./Common/Components/Container/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
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

/***/ "./Common/Components/SocialMedia/components/SocialMediaLinks/SocialLink/index.js":
/*!***************************************************************************************!*\
  !*** ./Common/Components/SocialMedia/components/SocialMediaLinks/SocialLink/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
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

/***/ "./Footer/index.js":
/*!*************************!*\
  !*** ./Footer/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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
  }, "MORE LINKS Blog Join the Team Facebook Twitter CHIEDO LABS "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Components_SocialMedia_components_SocialMediaLinks__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_7___default.a.footerSocial,
    links: Base_constants_links__WEBPACK_IMPORTED_MODULE_6__["SOCIAL_LINKS"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
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
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./pages/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Common_Homepage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/Homepage */ "./Common/Homepage/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Header */ "./Header/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Footer */ "./Footer/index.js");
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
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.32742e841e95066f66ef.hot-update.js.map