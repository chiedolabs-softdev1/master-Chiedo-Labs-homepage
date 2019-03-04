webpackHotUpdate("styles",{

/***/ "./Common/Homepage/style.scss":
/*!************************************!*\
  !*** ./Common/Homepage/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Quote":"_2qENJ6cC0KaLubofBLnp9k","color":"_1yLrqTVToOWMZMk7szLdbS","background":"_3aCTiI7PNeGrE3nRVJ4pm9","s":"_2UwOXF3B47sA5-zoQpYBBp","txtcolor":"_23EBy2rMCYDjZzXqXmvkQu","btn":"_8DVUyf779fZQvU-sby_eU","serveColor":"_3NDInCUcrgGppIU1JZelPz","grey":"_1oXw101geW-SbgKwtCVhxI","profilePicture":"_3MV9nGUs2BPPiDnNzxmx1r"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1551733355582");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.6be3babdb8e6f8f6cbcc.hot-update.js.map