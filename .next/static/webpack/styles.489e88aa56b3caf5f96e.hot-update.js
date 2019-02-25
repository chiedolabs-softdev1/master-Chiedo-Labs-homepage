webpackHotUpdate("styles",{

/***/ "./Common/Section/style.scss":
/*!***********************************!*\
  !*** ./Common/Section/style.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"inner":"_3tjO61jAr32_ibofUjRhj_","span":"_1SddoVqgMJCDGmoNqZ_Bi","color":"kloimaSHSxOu32jn3pBhX"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1551119845550");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.489e88aa56b3caf5f96e.hot-update.js.map