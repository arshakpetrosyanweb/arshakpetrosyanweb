/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/index.js */ \"./src/modules/index.js\");\n\r\n\r\nlet path = window.location.pathname.split('/').slice(-1)[0];\r\nconst urlParams = new URLSearchParams(window.location.search);\r\nlet storage = window.localStorage;\r\n\r\nlet isAuthenticated = storage.getItem('user') ? storage.getItem('user') : false;\r\nconsole.log('isAuthenticated='+isAuthenticated);\r\nlet user = storage.getItem('user') ? storage.getItem('user') : null;\r\nconsole.log('user='+user);\r\n\r\nlet page = 0;\r\nif (urlParams.has('page')) {\r\n\tlet page = urlParams.get('page');\r\n}\r\n\r\nif (path === 'index.html') {\r\n\tconsole.log('index page');\r\n\t_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.init(isAuthenticated, user);\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsbURBQVM7QUFDVjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtYWluIGZyb20gJy4vbW9kdWxlcy9pbmRleC5qcydcclxuXHJcbmxldCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykuc2xpY2UoLTEpWzBdO1xyXG5jb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5sZXQgc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcblxyXG5sZXQgaXNBdXRoZW50aWNhdGVkID0gc3RvcmFnZS5nZXRJdGVtKCd1c2VyJykgPyBzdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSA6IGZhbHNlO1xyXG5jb25zb2xlLmxvZygnaXNBdXRoZW50aWNhdGVkPScraXNBdXRoZW50aWNhdGVkKTtcclxubGV0IHVzZXIgPSBzdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSA/IHN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpIDogbnVsbDtcclxuY29uc29sZS5sb2coJ3VzZXI9Jyt1c2VyKTtcclxuXHJcbmxldCBwYWdlID0gMDtcclxuaWYgKHVybFBhcmFtcy5oYXMoJ3BhZ2UnKSkge1xyXG5cdGxldCBwYWdlID0gdXJsUGFyYW1zLmdldCgncGFnZScpO1xyXG59XHJcblxyXG5pZiAocGF0aCA9PT0gJ2luZGV4Lmh0bWwnKSB7XHJcblx0Y29uc29sZS5sb2coJ2luZGV4IHBhZ2UnKTtcclxuXHRtYWluLmluaXQoaXNBdXRoZW50aWNhdGVkLCB1c2VyKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\nconsole.log('index module');\r\n\r\nlet init = () => {\r\n\tconsole.log('index module init');\r\n\tfetch('http://127.0.0.1:5000/products')\r\n\t\t.then(data=>data.json())\r\n\t\t.then((data)=>{renderProducts(data);});\r\n}\r\n\r\nfunction setcolors(product){\r\n\tlet items = product.colors.map((color) => {\r\n\t\t// let item = document.createElement('span');\r\n\t\t// item.style.display = 'inline-block';\r\n\t\t// item.style.with = '15px';\r\n\t\t// item.style.height = '15px';\r\n\t\t// item.style.border = '2px solid black';\r\n\t\t// return item;\r\n\t\treturn `<span style=\"display: inline-block;width: 15px;height: 15px; border: 2px solid black; background-color: ${color};border-radius: 50%;\"></span> &nbsp;`;\r\n\t});\r\n\r\n\treturn items.join('');\r\n}\r\n\r\nlet renderProducts = (products) => {\r\n\tlet html = products.map((product)=>{\r\n\t\tlet colors = product.colors;\r\n\t\tproduct.colors = [];\r\n\t\tif (colors.includes('+')) {\r\n\t\t\tproduct.colors=colors.split('+');\r\n\t\t}else{\r\n\t\t\tproduct.colors.push(colors);\r\n\t\t}\r\n\t\treturn `\r\n            <div class=\"card\">\r\n               <div class=\"card_image\" style='\r\n                   background-image: url(\"http://localhost:5000/uploads\");\r\n                    background-size: cover;\r\n                    background-position: center;\r\n                    background-repeat: no-repeat;\r\n               '></div>\r\n               <div class=\"card_info\">\r\n                    <h3>title</h3>\r\n                    <br>\r\n                    ${setcolors(product)}\r\n                  \t<br><br>\r\n                  \t<span>Price <b></b> AMD</span>\r\n                  \t<div class=\"card_info_footer\">\r\n                     \t<a class=\"more_info_link\" href=\"/products/show/\">\r\n                        \tmore info\r\n                    \t </a>\r\n                  \t</div>\r\n               </div>\r\n            </div>\r\n         \r\n\r\n\t\t`;\r\n\t});\r\n\thtml.forEach((html)=>{\r\n\t\tdocument.getElementById('cards').innerHTML += html;\r\n\t})\r\n\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxZQUFZLGNBQWMseUJBQXlCLG9CQUFvQixPQUFPLG1CQUFtQixnQkFBZ0I7QUFDOUosRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vc3JjL21vZHVsZXMvaW5kZXguanM/NjIxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnaW5kZXggbW9kdWxlJyk7XHJcblxyXG5leHBvcnQgbGV0IGluaXQgPSAoKSA9PiB7XHJcblx0Y29uc29sZS5sb2coJ2luZGV4IG1vZHVsZSBpbml0Jyk7XHJcblx0ZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9wcm9kdWN0cycpXHJcblx0XHQudGhlbihkYXRhPT5kYXRhLmpzb24oKSlcclxuXHRcdC50aGVuKChkYXRhKT0+e3JlbmRlclByb2R1Y3RzKGRhdGEpO30pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRjb2xvcnMocHJvZHVjdCl7XHJcblx0bGV0IGl0ZW1zID0gcHJvZHVjdC5jb2xvcnMubWFwKChjb2xvcikgPT4ge1xyXG5cdFx0Ly8gbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblx0XHQvLyBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuXHRcdC8vIGl0ZW0uc3R5bGUud2l0aCA9ICcxNXB4JztcclxuXHRcdC8vIGl0ZW0uc3R5bGUuaGVpZ2h0ID0gJzE1cHgnO1xyXG5cdFx0Ly8gaXRlbS5zdHlsZS5ib3JkZXIgPSAnMnB4IHNvbGlkIGJsYWNrJztcclxuXHRcdC8vIHJldHVybiBpdGVtO1xyXG5cdFx0cmV0dXJuIGA8c3BhbiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDogMTVweDtoZWlnaHQ6IDE1cHg7IGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrOyBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfTtib3JkZXItcmFkaXVzOiA1MCU7XCI+PC9zcGFuPiAmbmJzcDtgO1xyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4gaXRlbXMuam9pbignJyk7XHJcbn1cclxuXHJcbmxldCByZW5kZXJQcm9kdWN0cyA9IChwcm9kdWN0cykgPT4ge1xyXG5cdGxldCBodG1sID0gcHJvZHVjdHMubWFwKChwcm9kdWN0KT0+e1xyXG5cdFx0bGV0IGNvbG9ycyA9IHByb2R1Y3QuY29sb3JzO1xyXG5cdFx0cHJvZHVjdC5jb2xvcnMgPSBbXTtcclxuXHRcdGlmIChjb2xvcnMuaW5jbHVkZXMoJysnKSkge1xyXG5cdFx0XHRwcm9kdWN0LmNvbG9ycz1jb2xvcnMuc3BsaXQoJysnKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRwcm9kdWN0LmNvbG9ycy5wdXNoKGNvbG9ycyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9pbWFnZVwiIHN0eWxlPSdcclxuICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC91cGxvYWRzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX2luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+dGl0bGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAke3NldGNvbG9ycyhwcm9kdWN0KX1cclxuICAgICAgICAgICAgICAgICAgXHQ8YnI+PGJyPlxyXG4gICAgICAgICAgICAgICAgICBcdDxzcGFuPlByaWNlIDxiPjwvYj4gQU1EPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICBcdDxkaXYgY2xhc3M9XCJjYXJkX2luZm9fZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIFx0PGEgY2xhc3M9XCJtb3JlX2luZm9fbGlua1wiIGhyZWY9XCIvcHJvZHVjdHMvc2hvdy9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHRtb3JlIGluZm9cclxuICAgICAgICAgICAgICAgICAgICBcdCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcblxyXG5cdFx0YDtcclxuXHR9KTtcclxuXHRodG1sLmZvckVhY2goKGh0bWwpPT57XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZHMnKS5pbm5lckhUTUwgKz0gaHRtbDtcclxuXHR9KVxyXG5cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/index.js\n");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;