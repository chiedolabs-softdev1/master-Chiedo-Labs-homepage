webpackHotUpdate("styles",{

/***/ "./Common/MainMenu/style.scss":
/*!************************************!*\
  !*** ./Common/MainMenu/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"inner":"_1IuFaOheI40Af4GZU3DhJv","color":"_2YAKx4cvop9xo9frdPRyLN","skinny":"_1WssmQ1_Y99DK8F0UWWZYc"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1551805824930");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.7f77ce5acdb360403671.hot-update.js.map