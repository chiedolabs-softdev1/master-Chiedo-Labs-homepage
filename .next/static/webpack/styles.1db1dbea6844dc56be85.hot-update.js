webpackHotUpdate("styles",{

/***/ "./Common/Components/Foot/style.scss":
/*!*******************************************!*\
  !*** ./Common/Components/Foot/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"button":"_177Tbh6rrBZ6oPH7rrl9w1","moreLinks":"_22AUZjHOqU5OvhJUdG0SN6","ourFounder":"_3uC1_GFSrlQxRDNeEhDAm","redText":"_1qEblZdoI9D-viiH2_ygfl","background":"_2sqdF8OI95gCtrY1_7dLOT","skinny":"_1SR7Y4xBQ5ViKK_c1GtHlr"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1551977533943");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.1db1dbea6844dc56be85.hot-update.js.map