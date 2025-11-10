/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/favourites";
exports.ids = ["pages/favourites"];
exports.modules = {

/***/ "(pages-dir-node)/./components/BookCard.js":
/*!********************************!*\
  !*** ./components/BookCard.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BookCard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Card!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Button,Card!=!./node_modules/react-bootstrap/cjs/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction BookCard({ workId }) {\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(workId ? `https://openlibrary.org/works/${workId}.json` : null);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookCard.js\",\n        lineNumber: 9,\n        columnNumber: 27\n    }, this);\n    if (error || !data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {\n        statusCode: 404\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookCard.js\",\n        lineNumber: 10,\n        columnNumber: 32\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card, {\n            className: \"mb-4 shadow-sm\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Img, {\n                    variant: \"top\",\n                    onError: (event)=>{\n                        event.target.onerror = null;\n                        event.target.src = \"https://placehold.co/400x600?text=Cover+Not+Available\";\n                    },\n                    className: \"img-fluid w-100\",\n                    src: `https://covers.openlibrary.org/b/id/${data?.covers?.[0]}-M.jpg`,\n                    alt: \"Cover Image\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookCard.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Body, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Title, {\n                            children: data.title || \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookCard.js\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Card.Text, {\n                            children: data.first_publish_date || \"N/A\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookCard.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: `/works/${workId}`,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                variant: \"primary\",\n                                children: \"View Details\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookCard.js\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookCard.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookCard.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookCard.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvQm9va0NhcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNNO0FBQ2dCO0FBQ2xCO0FBRWQsU0FBU0ssU0FBUyxFQUFFQyxNQUFNLEVBQUU7SUFDdkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFLEdBQUdULCtDQUFNQSxDQUFDTSxTQUFTLENBQUMsOEJBQThCLEVBQUVBLE9BQU8sS0FBSyxDQUFDLEdBQUc7SUFFcEcsSUFBSUcsV0FBVyxxQkFBTyw4REFBQ0M7a0JBQUU7Ozs7OztJQUN6QixJQUFJRixTQUFTLENBQUNELE1BQU0scUJBQU8sOERBQUNOLG1EQUFLQTtRQUFDVSxZQUFZOzs7Ozs7SUFFOUMscUJBQ0k7a0JBQ0ksNEVBQUNULG9GQUFJQTtZQUFDVSxXQUFVOzs4QkFDWiw4REFBQ1Ysb0ZBQUlBLENBQUNXLEdBQUc7b0JBQUNDLFNBQVE7b0JBQ2xCQyxTQUFTLENBQUNDO3dCQUNOQSxNQUFNQyxNQUFNLENBQUNDLE9BQU8sR0FBRzt3QkFDdkJGLE1BQU1DLE1BQU0sQ0FBQ0UsR0FBRyxHQUNaO29CQUNSO29CQUNJUCxXQUFVO29CQUNWTyxLQUFLLENBQUMsb0NBQW9DLEVBQUVaLE1BQU1hLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO29CQUNyRUMsS0FBSTs7Ozs7OzhCQUNSLDhEQUFDbkIsb0ZBQUlBLENBQUNvQixJQUFJOztzQ0FDTiw4REFBQ3BCLG9GQUFJQSxDQUFDcUIsS0FBSztzQ0FBRWhCLEtBQUtpQixLQUFLLElBQUk7Ozs7OztzQ0FDM0IsOERBQUN0QixvRkFBSUEsQ0FBQ3VCLElBQUk7c0NBQUVsQixLQUFLbUIsa0JBQWtCLElBQUk7Ozs7OztzQ0FDdkMsOERBQUN0QixrREFBSUE7NEJBQUN1QixNQUFNLENBQUMsT0FBTyxFQUFFckIsUUFBUTtzQ0FDMUIsNEVBQUNILHNGQUFNQTtnQ0FBQ1csU0FBUTswQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2xEIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGp1d29vXFxTZW5lY2FcXFdFQjQyMlxcQXNzaWdubWVudHNcXEFzc2lnbm1lbnQxXFxteS1hcHBcXGNvbXBvbmVudHNcXEJvb2tDYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IEVycm9yIGZyb20gXCJuZXh0L2Vycm9yXCI7XHJcbmltcG9ydCB7IENhcmQsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rQ2FyZCh7IHdvcmtJZCB9KSB7XHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZVNXUih3b3JrSWQgPyBgaHR0cHM6Ly9vcGVubGlicmFyeS5vcmcvd29ya3MvJHt3b3JrSWR9Lmpzb25gIDogbnVsbCk7XHJcblxyXG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgaWYgKGVycm9yIHx8ICFkYXRhKSByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9ezQwNH0gLz5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIm1iLTQgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgdmFyaWFudD1cInRvcFwiIFxyXG4gICAgICAgICAgICAgICAgb25FcnJvcj17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm9uZXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zcmMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vcGxhY2Vob2xkLmNvLzQwMHg2MDA/dGV4dD1Db3ZlcitOb3QrQXZhaWxhYmxlXCI7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCB3LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9jb3ZlcnMub3BlbmxpYnJhcnkub3JnL2IvaWQvJHtkYXRhPy5jb3ZlcnM/LlswXX0tTS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkNvdmVyIEltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+e2RhdGEudGl0bGUgfHwgXCJcIn08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD57ZGF0YS5maXJzdF9wdWJsaXNoX2RhdGUgfHwgXCJOL0FcIn08L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3dvcmtzLyR7d29ya0lkfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSdwcmltYXJ5Jz5WaWV3IERldGFpbHM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbn0iXSwibmFtZXMiOlsidXNlU1dSIiwiRXJyb3IiLCJDYXJkIiwiQnV0dG9uIiwiTGluayIsIkJvb2tDYXJkIiwid29ya0lkIiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwicCIsInN0YXR1c0NvZGUiLCJjbGFzc05hbWUiLCJJbWciLCJ2YXJpYW50Iiwib25FcnJvciIsImV2ZW50IiwidGFyZ2V0Iiwib25lcnJvciIsInNyYyIsImNvdmVycyIsImFsdCIsIkJvZHkiLCJUaXRsZSIsInRpdGxlIiwiVGV4dCIsImZpcnN0X3B1Ymxpc2hfZGF0ZSIsImhyZWYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/BookCard.js\n");

/***/ }),

/***/ "(pages-dir-node)/./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Container!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Container!=!./node_modules/react-bootstrap/cjs/index.js\");\n/* harmony import */ var _MainNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainNav */ \"(pages-dir-node)/./components/MainNav.js\");\n\n\n\nfunction Layout(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainNav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\Layout.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\Layout.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\Layout.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\Layout.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUNaO0FBRWpCLFNBQVNFLE9BQU9DLEtBQUs7SUFDaEMscUJBQ0k7OzBCQUNJLDhEQUFDRixnREFBT0E7Ozs7OzBCQUNSLDhEQUFDRzs7Ozs7MEJBQ0QsOERBQUNKLHVGQUFTQTswQkFDTEcsTUFBTUUsUUFBUTs7Ozs7OzBCQUVuQiw4REFBQ0Q7Ozs7Ozs7QUFHYiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxqdXdvb1xcU2VuZWNhXFxXRUI0MjJcXEFzc2lnbm1lbnRzXFxBc3NpZ25tZW50MVxcbXktYXBwXFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IE1haW5OYXYgZnJvbSAnLi9NYWluTmF2JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TWFpbk5hdiAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIk1haW5OYXYiLCJMYXlvdXQiLCJwcm9wcyIsImJyIiwiY2hpbGRyZW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/Layout.js\n");

/***/ }),

/***/ "(pages-dir-node)/./components/MainNav.js":
/*!*******************************!*\
  !*** ./components/MainNav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainNav)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Container,Nav,Navbar!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/cjs/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction MainNav() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar, {\n                expand: \"lg\",\n                className: \"fixed-top navbar-dark bg-dark\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Brand, {\n                            as: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                            href: \"/\",\n                            children: \"Joy Baek\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\MainNav.js\",\n                            lineNumber: 9,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Toggle, {\n                            \"aria-controls\": \"basic-navbar-nav\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\MainNav.js\",\n                            lineNumber: 10,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Navbar.Collapse, {\n                            id: \"basic-navbar-nav\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav, {\n                                className: \"me-auto\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n                                        as: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                                        href: \"/about\",\n                                        children: \"About\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\MainNav.js\",\n                                        lineNumber: 13,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_Nav_Navbar_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Nav.Link, {\n                                        as: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),\n                                        href: \"/favourites\",\n                                        children: \"Favourites\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\MainNav.js\",\n                                        lineNumber: 14,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\MainNav.js\",\n                                lineNumber: 12,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\MainNav.js\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\MainNav.js\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\MainNav.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\MainNav.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\MainNav.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTWFpbk5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlEO0FBQzVCO0FBRWQsU0FBU0k7SUFDcEIscUJBQ0k7OzBCQUNJLDhEQUFDRiwrRkFBTUE7Z0JBQUNHLFFBQU87Z0JBQUtDLFdBQVU7MEJBQzFCLDRFQUFDTixrR0FBU0E7O3NDQUNOLDhEQUFDRSwrRkFBTUEsQ0FBQ0ssS0FBSzs0QkFBQ0MsSUFBSUwsa0RBQUlBOzRCQUFFTSxNQUFLO3NDQUFJOzs7Ozs7c0NBQ2pDLDhEQUFDUCwrRkFBTUEsQ0FBQ1EsTUFBTTs0QkFBQ0MsaUJBQWM7Ozs7OztzQ0FDN0IsOERBQUNULCtGQUFNQSxDQUFDVSxRQUFROzRCQUFDQyxJQUFHO3NDQUNoQiw0RUFBQ1osNEZBQUdBO2dDQUFDSyxXQUFVOztrREFDWCw4REFBQ0wsNEZBQUdBLENBQUNFLElBQUk7d0NBQUNLLElBQUlMLGtEQUFJQTt3Q0FBRU0sTUFBSztrREFBUzs7Ozs7O2tEQUNsQyw4REFBQ1IsNEZBQUdBLENBQUNFLElBQUk7d0NBQUNLLElBQUlMLGtEQUFJQTt3Q0FBRU0sTUFBSztrREFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLdkQsOERBQUNLOzs7OzswQkFDRCw4REFBQ0E7Ozs7Ozs7QUFHYiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxqdXdvb1xcU2VuZWNhXFxXRUI0MjJcXEFzc2lnbm1lbnRzXFxBc3NpZ25tZW50MVxcbXktYXBwXFxjb21wb25lbnRzXFxNYWluTmF2LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgTmF2LCBOYXZiYXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbk5hdigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE5hdmJhciBleHBhbmQ9XCJsZ1wiIGNsYXNzTmFtZT1cImZpeGVkLXRvcCBuYXZiYXItZGFyayBiZy1kYXJrXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgYXM9e0xpbmt9IGhyZWY9XCIvXCI+Sm95IEJhZWs8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgYXM9e0xpbmt9IGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgYXM9e0xpbmt9IGhyZWY9XCIvZmF2b3VyaXRlc1wiPkZhdm91cml0ZXM8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L05hdmJhcj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJOYXYiLCJOYXZiYXIiLCJMaW5rIiwiTWFpbk5hdiIsImV4cGFuZCIsImNsYXNzTmFtZSIsIkJyYW5kIiwiYXMiLCJocmVmIiwiVG9nZ2xlIiwiYXJpYS1jb250cm9scyIsIkNvbGxhcHNlIiwiaWQiLCJiciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/MainNav.js\n");

/***/ }),

/***/ "(pages-dir-node)/./components/PageHeader.js":
/*!**********************************!*\
  !*** ./components/PageHeader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PageHeader)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Card!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Card!=!./node_modules/react-bootstrap/cjs/index.js\");\n\n\nfunction PageHeader(props, subtext) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                    className: \"bg-light\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Body, {\n                        className: \"p-4 mb-4 text-center rounded-3 bg-light\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"display-4\",\n                                children: props.text\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\PageHeader.js\",\n                                lineNumber: 9,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"lead\",\n                                children: props.subtext\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\PageHeader.js\",\n                                lineNumber: 10,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\PageHeader.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\PageHeader.js\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\PageHeader.js\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\PageHeader.js\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvUGFnZUhlYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1QztBQUV4QixTQUFTQyxXQUFXQyxLQUFLLEVBQUVDLE9BQU87SUFDL0MscUJBQ0U7OzBCQUNBLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0wsNkVBQUlBO29CQUFDSyxXQUFVOzhCQUNkLDRFQUFDTCw2RUFBSUEsQ0FBQ00sSUFBSTt3QkFBQ0QsV0FBVTs7MENBQ25CLDhEQUFDRTtnQ0FBR0YsV0FBVTswQ0FBYUgsTUFBTU0sSUFBSTs7Ozs7OzBDQUNyQyw4REFBQ0M7Z0NBQUVKLFdBQVU7MENBQVFILE1BQU1DLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSXhDLDhEQUFDTzs7Ozs7OztBQUdMIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGp1d29vXFxTZW5lY2FcXFdFQjQyMlxcQXNzaWdubWVudHNcXEFzc2lnbm1lbnQxXFxteS1hcHBcXGNvbXBvbmVudHNcXFBhZ2VIZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlSGVhZGVyKHByb3BzLCBzdWJ0ZXh0KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9XCJiZy1saWdodFwiPlxyXG4gICAgICAgIDxDYXJkLkJvZHkgY2xhc3NOYW1lPVwicC00IG1iLTQgdGV4dC1jZW50ZXIgcm91bmRlZC0zIGJnLWxpZ2h0XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+e3Byb3BzLnRleHR9PC9oMT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj57cHJvcHMuc3VidGV4dH08L3A+XHJcbiAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJyLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiQ2FyZCIsIlBhZ2VIZWFkZXIiLCJwcm9wcyIsInN1YnRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJCb2R5IiwiaDEiLCJ0ZXh0IiwicCIsImJyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/PageHeader.js\n");

/***/ }),

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Ffavourites&preferredRegion=&absolutePagePath=.%2Fpages%5Cfavourites.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Ffavourites&preferredRegion=&absolutePagePath=.%2Fpages%5Cfavourites.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   handler: () => (/* binding */ handler),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./pages/_document.js\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.js\");\n/* harmony import */ var _pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\favourites.js */ \"(pages-dir-node)/./pages/favourites.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/route-modules/pages/pages-handler */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/pages-handler.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__, _pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__]);\n([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__, _pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/favourites\",\n        pathname: \"/favourites\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    distDir: \".next\" || 0,\n    relativeProjectDir:  false || '',\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    userland: _pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__\n});\nconst handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({\n    srcPage: \"/favourites\",\n    config,\n    userland: _pages_favourites_js__WEBPACK_IMPORTED_MODULE_5__,\n    routeModule,\n    getStaticPaths,\n    getStaticProps,\n    getServerSideProps\n});\n\n//# sourceMappingURL=pages.js.map\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkZmYXZvdXJpdGVzJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUNmYXZvdXJpdGVzLmpzJmFic29sdXRlQXBwUGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfYXBwJmFic29sdXRlRG9jdW1lbnRQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9kb2N1bWVudCZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdGO0FBQ2hDO0FBQ0U7QUFDMUQ7QUFDeUQ7QUFDVjtBQUMvQztBQUNtRDtBQUM2QjtBQUNoRjtBQUNBLGlFQUFlLHdFQUFLLENBQUMsaURBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsaURBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsaURBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsaURBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLGlEQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLGlEQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsaURBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsaURBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsaURBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsaURBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsaURBQVE7QUFDekQ7QUFDTyx3QkFBd0Isa0dBQWdCO0FBQy9DO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsT0FBb0MsSUFBSSxDQUFFO0FBQ3ZELHdCQUF3QixNQUF1QztBQUMvRDtBQUNBO0FBQ0EsYUFBYSw4REFBVztBQUN4QixrQkFBa0IsbUVBQWdCO0FBQ2xDLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQztBQUNNLGdCQUFnQiw4RkFBVTtBQUNqQztBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIGFwcCBhbmQgZG9jdW1lbnQgbW9kdWxlcy5cbmltcG9ydCAqIGFzIGRvY3VtZW50IGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2RvY3VtZW50XCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fYXBwXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxmYXZvdXJpdGVzLmpzXCI7XG5pbXBvcnQgeyBnZXRIYW5kbGVyIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9wYWdlcy9wYWdlcy1oYW5kbGVyXCI7XG4vLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTdGF0aWNQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTdGF0aWNQYXRocycpO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U2VydmVyU2lkZVByb3BzJyk7XG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbmV4cG9ydCBjb25zdCByZXBvcnRXZWJWaXRhbHMgPSBob2lzdCh1c2VybGFuZCwgJ3JlcG9ydFdlYlZpdGFscycpO1xuLy8gUmUtZXhwb3J0IGxlZ2FjeSBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQYXRocycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhcmFtcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFNlcnZlclByb3BzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTLFxuICAgICAgICBwYWdlOiBcIi9mYXZvdXJpdGVzXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9mYXZvdXJpdGVzXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgZGlzdERpcjogcHJvY2Vzcy5lbnYuX19ORVhUX1JFTEFUSVZFX0RJU1RfRElSIHx8ICcnLFxuICAgIHJlbGF0aXZlUHJvamVjdERpcjogcHJvY2Vzcy5lbnYuX19ORVhUX1JFTEFUSVZFX1BST0pFQ1RfRElSIHx8ICcnLFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgLy8gZGVmYXVsdCBleHBvcnQgbWlnaHQgbm90IGV4aXN0IHdoZW4gb3B0aW1pemVkIGZvciBkYXRhIG9ubHlcbiAgICAgICAgQXBwOiBhcHAuZGVmYXVsdCxcbiAgICAgICAgRG9jdW1lbnQ6IGRvY3VtZW50LmRlZmF1bHRcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcbmV4cG9ydCBjb25zdCBoYW5kbGVyID0gZ2V0SGFuZGxlcih7XG4gICAgc3JjUGFnZTogXCIvZmF2b3VyaXRlc1wiLFxuICAgIGNvbmZpZyxcbiAgICB1c2VybGFuZCxcbiAgICByb3V0ZU1vZHVsZSxcbiAgICBnZXRTdGF0aWNQYXRocyxcbiAgICBnZXRTdGF0aWNQcm9wcyxcbiAgICBnZXRTZXJ2ZXJTaWRlUHJvcHNcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Ffavourites&preferredRegion=&absolutePagePath=.%2Fpages%5Cfavourites.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/public/styles/bootstrap.min.css */ \"(pages-dir-node)/./public/styles/bootstrap.min.css\");\n/* harmony import */ var _public_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_styles_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ \"(pages-dir-node)/./components/Layout.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_3__]);\nswr__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst fetcher = async (...args)=>{\n    const response = await fetch(...args);\n    if (!response.ok) {\n        throw new Error(`Request failed with status: ${response.status}`);\n    }\n    return response.json();\n};\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_3__.SWRConfig, {\n        value: {\n            fetcher\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\_app.js\",\n                lineNumber: 16,\n                columnNumber: 49\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\_app.js\",\n            lineNumber: 16,\n            columnNumber: 41\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\_app.js\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDRjtBQUNUO0FBRWhDLE1BQU1FLFVBQVUsT0FBTyxHQUFHQztJQUN4QixNQUFNQyxXQUFXLE1BQU1DLFNBQVNGO0lBRWhDLElBQUksQ0FBQ0MsU0FBU0UsRUFBRSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTSxDQUFDLDRCQUE0QixFQUFFSCxTQUFTSSxNQUFNLEVBQUU7SUFDbEU7SUFFQSxPQUFPSixTQUFTSyxJQUFJO0FBQ3RCO0FBRWUsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFBTyw4REFBQ1gsMENBQVNBO1FBQUNZLE9BQU87WUFBRVg7UUFBUTtrQkFBRyw0RUFBQ0YsMERBQU1BO3NCQUFDLDRFQUFDVztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3hFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGp1d29vXFxTZW5lY2FcXFdFQjQyMlxcQXNzaWdubWVudHNcXEFzc2lnbm1lbnQxXFxteS1hcHBcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9wdWJsaWMvc3R5bGVzL2Jvb3RzdHJhcC5taW4uY3NzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBTV1JDb25maWcgfSBmcm9tICdzd3InO1xuXG5jb25zdCBmZXRjaGVyID0gYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCguLi5hcmdzKTtcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPFNXUkNvbmZpZyB2YWx1ZT17eyBmZXRjaGVyIH19PjxMYXlvdXQ+PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjwvTGF5b3V0PjwvU1dSQ29uZmlnPjtcbn1cbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJTV1JDb25maWciLCJmZXRjaGVyIiwiYXJncyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInZhbHVlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"(pages-dir-node)/./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Document() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\_document.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\_document.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\_document.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\_document.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\_document.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19kb2N1bWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkQ7QUFFOUMsU0FBU0k7SUFDdEIscUJBQ0UsOERBQUNKLCtDQUFJQTtRQUFDSyxNQUFLOzswQkFDVCw4REFBQ0osK0NBQUlBOzs7OzswQkFDTCw4REFBQ0s7O2tDQUNDLDhEQUFDSiwrQ0FBSUE7Ozs7O2tDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5CIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGp1d29vXFxTZW5lY2FcXFdFQjQyMlxcQXNzaWdubWVudHNcXEFzc2lnbm1lbnQxXFxteS1hcHBcXHBhZ2VzXFxfZG9jdW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50KCkge1xuICByZXR1cm4gKFxuICAgIDxIdG1sIGxhbmc9XCJlblwiPlxuICAgICAgPEhlYWQgLz5cbiAgICAgIDxib2R5PlxuICAgICAgICA8TWFpbiAvPlxuICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvSHRtbD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiRG9jdW1lbnQiLCJsYW5nIiwiYm9keSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_document.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/favourites.js":
/*!*****************************!*\
  !*** ./pages/favourites.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Favourites)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai */ \"jotai\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ \"(pages-dir-node)/./store.js\");\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/PageHeader */ \"(pages-dir-node)/./components/PageHeader.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Row!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Col,Row!=!./node_modules/react-bootstrap/cjs/index.js\");\n/* harmony import */ var _components_BookCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/BookCard */ \"(pages-dir-node)/./components/BookCard.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__, _components_BookCard__WEBPACK_IMPORTED_MODULE_4__]);\n([jotai__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__, _components_BookCard__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction Favourites() {\n    const [favouritesList] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_2__.favouritesAtom);\n    if (favouritesList.length > 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    text: \"Favourites\",\n                    subtext: \"Your Favourite Books\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\favourites.js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                    className: \"gy-4\",\n                    children: favouritesList.map((workId)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                            lg: 3,\n                            md: 6,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                workId: workId\n                            }, workId, false, {\n                                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\favourites.js\",\n                                lineNumber: 16,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\favourites.js\",\n                            lineNumber: 15,\n                            columnNumber: 54\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\favourites.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    if (favouritesList.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                text: \"Nothing added yet\",\n                subtext: \"Add a book to your favourites\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\favourites.js\",\n                lineNumber: 28,\n                columnNumber: 17\n            }, this)\n        }, void 0, false);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL2Zhdm91cml0ZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ1M7QUFDUTtBQUNSO0FBQ0k7QUFFOUIsU0FBU007SUFDcEIsTUFBTSxDQUFDQyxlQUFlLEdBQUVQLDhDQUFPQSxDQUFDQyxrREFBY0E7SUFDOUMsSUFBSU0sZUFBZUMsTUFBTSxHQUFHLEdBQUc7UUFDM0IscUJBQ0k7OzhCQUNJLDhEQUFDTiw4REFBVUE7b0JBQUNPLE1BQUs7b0JBQWFDLFNBQVE7Ozs7Ozs4QkFDdEMsOERBQUNQLCtFQUFHQTtvQkFBQ1EsV0FBVTs4QkFFVkosZUFBZUssR0FBRyxDQUFDLENBQUNDLHVCQUFZLDhEQUFDVCwrRUFBR0E7NEJBQUNVLElBQUk7NEJBQUdDLElBQUk7c0NBQ2pELDRFQUFDViw0REFBUUE7Z0NBQUNRLFFBQVFBOytCQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRL0M7SUFDQSxJQUFJTixlQUFlQyxNQUFNLEtBQUssR0FBRztRQUM3QixxQkFDSTtzQkFDSSw0RUFBQ04sOERBQVVBO2dCQUFDTyxNQUFLO2dCQUFvQkMsU0FBUTs7Ozs7OztJQUd6RDtBQUNKIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGp1d29vXFxTZW5lY2FcXFdFQjQyMlxcQXNzaWdubWVudHNcXEFzc2lnbm1lbnQxXFxteS1hcHBcXHBhZ2VzXFxmYXZvdXJpdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUF0b20gfSBmcm9tICdqb3RhaSc7XHJcbmltcG9ydCB7IGZhdm91cml0ZXNBdG9tIH0gZnJvbSAnQC9zdG9yZSc7XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gJ0AvY29tcG9uZW50cy9QYWdlSGVhZGVyJztcclxuaW1wb3J0IHtSb3csIENvbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEJvb2tDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9Cb29rQ2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXZvdXJpdGVzKCkge1xyXG4gICAgY29uc3QgW2Zhdm91cml0ZXNMaXN0XT0gdXNlQXRvbShmYXZvdXJpdGVzQXRvbSk7XHJcbiAgICBpZiAoZmF2b3VyaXRlc0xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8UGFnZUhlYWRlciB0ZXh0PSdGYXZvdXJpdGVzJyBzdWJ0ZXh0PSdZb3VyIEZhdm91cml0ZSBCb29rcycgLz5cclxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwiZ3ktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtmYXZvdXJpdGVzTGlzdC5tYXAoKHdvcmtJZCkgPT4gKDxDb2wgbGc9ezN9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8Qm9va0NhcmQgd29ya0lkPXt3b3JrSWR9IGtleT17d29ya0lkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgaWYgKGZhdm91cml0ZXNMaXN0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8UGFnZUhlYWRlciB0ZXh0PSdOb3RoaW5nIGFkZGVkIHlldCcgc3VidGV4dD0nQWRkIGEgYm9vayB0byB5b3VyIGZhdm91cml0ZXMnIC8+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJ1c2VBdG9tIiwiZmF2b3VyaXRlc0F0b20iLCJQYWdlSGVhZGVyIiwiUm93IiwiQ29sIiwiQm9va0NhcmQiLCJGYXZvdXJpdGVzIiwiZmF2b3VyaXRlc0xpc3QiLCJsZW5ndGgiLCJ0ZXh0Iiwic3VidGV4dCIsImNsYXNzTmFtZSIsIm1hcCIsIndvcmtJZCIsImxnIiwibWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/favourites.js\n");

/***/ }),

/***/ "(pages-dir-node)/./public/styles/bootstrap.min.css":
/*!*****************************************!*\
  !*** ./public/styles/bootstrap.min.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   favouritesAtom: () => (/* binding */ favouritesAtom)\n/* harmony export */ });\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jotai */ \"jotai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);\njotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst favouritesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)([]);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3N0b3JlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZCO0FBRXRCLE1BQU1DLGlCQUFpQkQsMkNBQUlBLENBQUMsRUFBRSxFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGp1d29vXFxTZW5lY2FcXFdFQjQyMlxcQXNzaWdubWVudHNcXEFzc2lnbm1lbnQxXFxteS1hcHBcXHN0b3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tICdqb3RhaSc7XHJcblxyXG5leHBvcnQgY29uc3QgZmF2b3VyaXRlc0F0b20gPSBhdG9tKFtdKTsiXSwibmFtZXMiOlsiYXRvbSIsImZhdm91cml0ZXNBdG9tIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./store.js\n");

/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Button,Card!=!./node_modules/react-bootstrap/cjs/index.js":
/*!*******************************************************************************************!*\
  !*** __barrel_optimize__?names=Button,Card!=!./node_modules/react-bootstrap/cjs/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-bootstrap/cjs/index.js */ "(pages-dir-node)/./node_modules/react-bootstrap/cjs/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Card!=!./node_modules/react-bootstrap/cjs/index.js":
/*!************************************************************************************!*\
  !*** __barrel_optimize__?names=Card!=!./node_modules/react-bootstrap/cjs/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-bootstrap/cjs/index.js */ "(pages-dir-node)/./node_modules/react-bootstrap/cjs/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Col,Row!=!./node_modules/react-bootstrap/cjs/index.js":
/*!***************************************************************************************!*\
  !*** __barrel_optimize__?names=Col,Row!=!./node_modules/react-bootstrap/cjs/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-bootstrap/cjs/index.js */ "(pages-dir-node)/./node_modules/react-bootstrap/cjs/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Container!=!./node_modules/react-bootstrap/cjs/index.js":
/*!*****************************************************************************************!*\
  !*** __barrel_optimize__?names=Container!=!./node_modules/react-bootstrap/cjs/index.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-bootstrap/cjs/index.js */ "(pages-dir-node)/./node_modules/react-bootstrap/cjs/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/cjs/index.js":
/*!****************************************************************************************************!*\
  !*** __barrel_optimize__?names=Container,Nav,Navbar!=!./node_modules/react-bootstrap/cjs/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-bootstrap/cjs/index.js */ "(pages-dir-node)/./node_modules/react-bootstrap/cjs/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => C_Users_juwoo_Seneca_WEB422_Assignments_Assignment1_my_app_node_modules_react_bootstrap_cjs_index_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "../../../shared/lib/no-fallback-error.external":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/no-fallback-error.external.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ "@restart/hooks/useBreakpoint":
/*!***********************************************!*\
  !*** external "@restart/hooks/useBreakpoint" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useBreakpoint");

/***/ }),

/***/ "@restart/hooks/useCallbackRef":
/*!************************************************!*\
  !*** external "@restart/hooks/useCallbackRef" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useCallbackRef");

/***/ }),

/***/ "@restart/hooks/useCommittedRef":
/*!*************************************************!*\
  !*** external "@restart/hooks/useCommittedRef" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useCommittedRef");

/***/ }),

/***/ "@restart/hooks/useEventCallback":
/*!**************************************************!*\
  !*** external "@restart/hooks/useEventCallback" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useEventCallback");

/***/ }),

/***/ "@restart/hooks/useIsomorphicEffect":
/*!*****************************************************!*\
  !*** external "@restart/hooks/useIsomorphicEffect" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useIsomorphicEffect");

/***/ }),

/***/ "@restart/hooks/useMergedRefs":
/*!***********************************************!*\
  !*** external "@restart/hooks/useMergedRefs" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useMergedRefs");

/***/ }),

/***/ "@restart/hooks/useTimeout":
/*!********************************************!*\
  !*** external "@restart/hooks/useTimeout" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useTimeout");

/***/ }),

/***/ "@restart/hooks/useUpdateEffect":
/*!*************************************************!*\
  !*** external "@restart/hooks/useUpdateEffect" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useUpdateEffect");

/***/ }),

/***/ "@restart/hooks/useWillUnmount":
/*!************************************************!*\
  !*** external "@restart/hooks/useWillUnmount" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/hooks/useWillUnmount");

/***/ }),

/***/ "@restart/ui/Anchor":
/*!*************************************!*\
  !*** external "@restart/ui/Anchor" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Anchor");

/***/ }),

/***/ "@restart/ui/Button":
/*!*************************************!*\
  !*** external "@restart/ui/Button" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Button");

/***/ }),

/***/ "@restart/ui/Dropdown":
/*!***************************************!*\
  !*** external "@restart/ui/Dropdown" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Dropdown");

/***/ }),

/***/ "@restart/ui/DropdownContext":
/*!**********************************************!*\
  !*** external "@restart/ui/DropdownContext" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/DropdownContext");

/***/ }),

/***/ "@restart/ui/DropdownItem":
/*!*******************************************!*\
  !*** external "@restart/ui/DropdownItem" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/DropdownItem");

/***/ }),

/***/ "@restart/ui/DropdownMenu":
/*!*******************************************!*\
  !*** external "@restart/ui/DropdownMenu" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/DropdownMenu");

/***/ }),

/***/ "@restart/ui/DropdownToggle":
/*!*********************************************!*\
  !*** external "@restart/ui/DropdownToggle" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/DropdownToggle");

/***/ }),

/***/ "@restart/ui/Modal":
/*!************************************!*\
  !*** external "@restart/ui/Modal" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Modal");

/***/ }),

/***/ "@restart/ui/ModalManager":
/*!*******************************************!*\
  !*** external "@restart/ui/ModalManager" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/ModalManager");

/***/ }),

/***/ "@restart/ui/Nav":
/*!**********************************!*\
  !*** external "@restart/ui/Nav" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Nav");

/***/ }),

/***/ "@restart/ui/NavItem":
/*!**************************************!*\
  !*** external "@restart/ui/NavItem" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/NavItem");

/***/ }),

/***/ "@restart/ui/NoopTransition":
/*!*********************************************!*\
  !*** external "@restart/ui/NoopTransition" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/NoopTransition");

/***/ }),

/***/ "@restart/ui/Overlay":
/*!**************************************!*\
  !*** external "@restart/ui/Overlay" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Overlay");

/***/ }),

/***/ "@restart/ui/SelectableContext":
/*!************************************************!*\
  !*** external "@restart/ui/SelectableContext" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/SelectableContext");

/***/ }),

/***/ "@restart/ui/TabContext":
/*!*****************************************!*\
  !*** external "@restart/ui/TabContext" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/TabContext");

/***/ }),

/***/ "@restart/ui/TabPanel":
/*!***************************************!*\
  !*** external "@restart/ui/TabPanel" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/TabPanel");

/***/ }),

/***/ "@restart/ui/Tabs":
/*!***********************************!*\
  !*** external "@restart/ui/Tabs" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/Tabs");

/***/ }),

/***/ "@restart/ui/ssr":
/*!**********************************!*\
  !*** external "@restart/ui/ssr" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/ssr");

/***/ }),

/***/ "@restart/ui/utils":
/*!************************************!*\
  !*** external "@restart/ui/utils" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@restart/ui/utils");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "dom-helpers/addClass":
/*!***************************************!*\
  !*** external "dom-helpers/addClass" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/addClass");

/***/ }),

/***/ "dom-helpers/addEventListener":
/*!***********************************************!*\
  !*** external "dom-helpers/addEventListener" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/addEventListener");

/***/ }),

/***/ "dom-helpers/canUseDOM":
/*!****************************************!*\
  !*** external "dom-helpers/canUseDOM" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/canUseDOM");

/***/ }),

/***/ "dom-helpers/contains":
/*!***************************************!*\
  !*** external "dom-helpers/contains" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/contains");

/***/ }),

/***/ "dom-helpers/css":
/*!**********************************!*\
  !*** external "dom-helpers/css" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/css");

/***/ }),

/***/ "dom-helpers/hasClass":
/*!***************************************!*\
  !*** external "dom-helpers/hasClass" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/hasClass");

/***/ }),

/***/ "dom-helpers/ownerDocument":
/*!********************************************!*\
  !*** external "dom-helpers/ownerDocument" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/ownerDocument");

/***/ }),

/***/ "dom-helpers/querySelectorAll":
/*!***********************************************!*\
  !*** external "dom-helpers/querySelectorAll" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/querySelectorAll");

/***/ }),

/***/ "dom-helpers/removeClass":
/*!******************************************!*\
  !*** external "dom-helpers/removeClass" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/removeClass");

/***/ }),

/***/ "dom-helpers/removeEventListener":
/*!**************************************************!*\
  !*** external "dom-helpers/removeEventListener" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/removeEventListener");

/***/ }),

/***/ "dom-helpers/scrollbarSize":
/*!********************************************!*\
  !*** external "dom-helpers/scrollbarSize" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/scrollbarSize");

/***/ }),

/***/ "dom-helpers/transitionEnd":
/*!********************************************!*\
  !*** external "dom-helpers/transitionEnd" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("dom-helpers/transitionEnd");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("invariant");

/***/ }),

/***/ "jotai":
/*!************************!*\
  !*** external "jotai" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("jotai");;

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/error");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group/Transition":
/*!****************************************************!*\
  !*** external "react-transition-group/Transition" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group/Transition");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ }),

/***/ "uncontrollable":
/*!*********************************!*\
  !*** external "uncontrollable" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("uncontrollable");

/***/ }),

/***/ "warning":
/*!**************************!*\
  !*** external "warning" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("warning");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-bootstrap","vendor-chunks/@babel"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Ffavourites&preferredRegion=&absolutePagePath=.%2Fpages%5Cfavourites.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();