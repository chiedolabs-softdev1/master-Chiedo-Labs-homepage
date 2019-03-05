webpackHotUpdate("styles",{

/***/ "./Common/Components/Button/style.scss":
/*!*********************************************!*\
  !*** ./Common/Components/Button/style.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"button":"_3aBJEmPf2LWj6mc5V62Bmu","grey":"_35cw_jja-AWk3kyIcTVnnT"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1551811613584");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.5049e7e3fdd05a159466.hot-update.js.map