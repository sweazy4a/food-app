/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_ajax_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/ajax-pagination */ \"./assets/js/partials/ajax-pagination.js\");\n/* harmony import */ var _partials_ajax_pagination__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_partials_ajax_pagination__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _partials_ajax_change_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/ajax-change-state */ \"./assets/js/partials/ajax-change-state.js\");\n/* harmony import */ var _partials_ajax_change_state__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_partials_ajax_change_state__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvanMvbWFpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtYXBwLy4vYXNzZXRzL2pzL21haW4uanM/Y2JlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL3BhcnRpYWxzL2FqYXgtcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgXCIuL3BhcnRpYWxzL2FqYXgtY2hhbmdlLXN0YXRlXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/main.js\n");

/***/ }),

/***/ "./assets/js/partials/ajax-change-state.js":
/*!*************************************************!*\
  !*** ./assets/js/partials/ajax-change-state.js ***!
  \*************************************************/
/***/ (() => {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtYXBwLy4vYXNzZXRzL2pzL3BhcnRpYWxzL2FqYXgtY2hhbmdlLXN0YXRlLmpzPzA2OTUiXSwic291cmNlc0NvbnRlbnQiOlsiIl0sIm1hcHBpbmdzIjoiIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL3BhcnRpYWxzL2FqYXgtY2hhbmdlLXN0YXRlLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/partials/ajax-change-state.js\n");

/***/ }),

/***/ "./assets/js/partials/ajax-pagination.js":
/*!***********************************************!*\
  !*** ./assets/js/partials/ajax-pagination.js ***!
  \***********************************************/
/***/ (() => {

eval("$(document).ready(function () {\n  var ajaxurl = invoice.ajaxUrl;\n  function invoice_load_all_posts(page) {\n    // Start the transition\n    $(\".invoice_load\").fadeIn().css('background', '#ccc');\n    var data = {\n      page: page,\n      action: \"LoadInvoices\"\n    };\n\n    // Send the data\n    $.post(ajaxurl, data, function (response) {\n      $(\".invoice_container\").empty().append(response);\n      $(\".invoice_load\").css({\n        'background': 'none',\n        'transition': 'all 1s ease-out'\n      });\n    });\n  }\n\n  // Load page 1 as the default\n  invoice_load_all_posts(1);\n  $(\"body\").delegate(\".invoice_container .invoice-universal-pagination li.active\", \"click\", function () {\n    var page = $(this).attr('p');\n    invoice_load_all_posts(page);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFqYXh1cmwiLCJpbnZvaWNlIiwiYWpheFVybCIsImludm9pY2VfbG9hZF9hbGxfcG9zdHMiLCJwYWdlIiwiZmFkZUluIiwiY3NzIiwiZGF0YSIsImFjdGlvbiIsInBvc3QiLCJyZXNwb25zZSIsImVtcHR5IiwiYXBwZW5kIiwiZGVsZWdhdGUiLCJhdHRyIl0sInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2QtYXBwLy4vYXNzZXRzL2pzL3BhcnRpYWxzL2FqYXgtcGFnaW5hdGlvbi5qcz9iM2YzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdGxldCBhamF4dXJsID0gaW52b2ljZS5hamF4VXJsO1xyXG4gICAgZnVuY3Rpb24gaW52b2ljZV9sb2FkX2FsbF9wb3N0cyhwYWdlKXtcclxuICAgICAgICAvLyBTdGFydCB0aGUgdHJhbnNpdGlvblxyXG4gICAgICAgICQoXCIuaW52b2ljZV9sb2FkXCIpLmZhZGVJbigpLmNzcygnYmFja2dyb3VuZCcsJyNjY2MnKTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgICAgICAgIGFjdGlvbjogXCJMb2FkSW52b2ljZXNcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFNlbmQgdGhlIGRhdGFcclxuICAgICAgICAkLnBvc3QoYWpheHVybCwgZGF0YSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJChcIi5pbnZvaWNlX2NvbnRhaW5lclwiKS5lbXB0eSgpLmFwcGVuZChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICQoXCIuaW52b2ljZV9sb2FkXCIpLmNzcyh7J2JhY2tncm91bmQnOidub25lJywgJ3RyYW5zaXRpb24nOidhbGwgMXMgZWFzZS1vdXQnfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTG9hZCBwYWdlIDEgYXMgdGhlIGRlZmF1bHRcclxuICAgIGludm9pY2VfbG9hZF9hbGxfcG9zdHMoMSk7XHJcblxyXG4gICAgJChcImJvZHlcIikuZGVsZWdhdGUoXCIuaW52b2ljZV9jb250YWluZXIgLmludm9pY2UtdW5pdmVyc2FsLXBhZ2luYXRpb24gbGkuYWN0aXZlXCIsIFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgdmFyIHBhZ2UgPSAkKHRoaXMpLmF0dHIoJ3AnKTtcclxuICAgICAgICBpbnZvaWNlX2xvYWRfYWxsX3Bvc3RzKHBhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG59KTsiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUNDLFFBQVEsQ0FBQyxDQUFDQyxLQUFLLENBQUMsWUFBVztFQUM1QixJQUFJQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsT0FBTztFQUMxQixTQUFTQyxzQkFBc0IsQ0FBQ0MsSUFBSSxFQUFDO0lBQ2pDO0lBQ0FQLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ1EsTUFBTSxFQUFFLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsTUFBTSxDQUFDO0lBRXBELElBQUlDLElBQUksR0FBRztNQUNQSCxJQUFJLEVBQUVBLElBQUk7TUFDVkksTUFBTSxFQUFFO0lBQ1osQ0FBQzs7SUFFRDtJQUNBWCxDQUFDLENBQUNZLElBQUksQ0FBQ1QsT0FBTyxFQUFFTyxJQUFJLEVBQUUsVUFBU0csUUFBUSxFQUFFO01BQ3JDYixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ2MsS0FBSyxFQUFFLENBQUNDLE1BQU0sQ0FBQ0YsUUFBUSxDQUFDO01BQ2hEYixDQUFDLENBQUMsZUFBZSxDQUFDLENBQUNTLEdBQUcsQ0FBQztRQUFDLFlBQVksRUFBQyxNQUFNO1FBQUUsWUFBWSxFQUFDO01BQWlCLENBQUMsQ0FBQztJQUNqRixDQUFDLENBQUM7RUFDTjs7RUFFQTtFQUNBSCxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7RUFFekJOLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2dCLFFBQVEsQ0FBQyw0REFBNEQsRUFBRSxPQUFPLEVBQUUsWUFBVTtJQUNyRyxJQUFJVCxJQUFJLEdBQUdQLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQ2lCLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDdkJYLHNCQUFzQixDQUFDQyxJQUFJLENBQUM7RUFDaEMsQ0FBQyxDQUFDO0FBRU4sQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL3BhcnRpYWxzL2FqYXgtcGFnaW5hdGlvbi5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./assets/js/partials/ajax-pagination.js\n");

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hc3NldHMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1hcHAvLi9hc3NldHMvc2Nzcy9tYWluLnNjc3M/NjQwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfood_app"] = self["webpackChunkfood_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./assets/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./assets/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;