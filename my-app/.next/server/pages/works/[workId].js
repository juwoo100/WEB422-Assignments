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
exports.id = "pages/works/[workId]";
exports.ids = ["pages/works/[workId]"];
exports.modules = {

/***/ "(pages-dir-node)/./components/BookDetails.js":
/*!***********************************!*\
  !*** ./components/BookDetails.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BookDetails)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Button_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Col,Container,Row!=!react-bootstrap */ \"(pages-dir-node)/__barrel_optimize__?names=Button,Col,Container,Row!=!./node_modules/react-bootstrap/cjs/index.js\");\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai */ \"jotai\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ \"(pages-dir-node)/./store.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__]);\n([jotai__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction BookDetails({ book, workId, showFavouritesBtn = true }) {\n    const [favouritesList, setFavouritesList] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_2__.favouritesAtom);\n    const [showAdded, setShowAdded] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(favouritesList.includes(workId));\n    function favouritesClicked() {\n        if (showAdded) {\n            setFavouritesList((current)=>current.filter((fav)=>fav != workId));\n            setShowAdded(false);\n        } else {\n            setFavouritesList((current)=>[\n                    ...current,\n                    workId\n                ]);\n            setShowAdded(true);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                    lg: \"4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            onError: (event)=>{\n                                event.target.onerror = null;\n                                event.target.src = \"https://placehold.co/400x600?text=Cover+Not+Available\";\n                            },\n                            className: \"img-fluid w-100\",\n                            src: `https://covers.openlibrary.org/b/id/${book?.covers?.[0]}-L.jpg`,\n                            alt: \"Cover Image\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                    lg: \"8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: book.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this),\n                        book.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: typeof book.description === \"string\" ? book.description : book.description.value\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                            lineNumber: 40,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this),\n                        book.subject_people && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"Characters\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 27\n                                }, this),\n                                book.subject_people.join(\", \"),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 35\n                                }, this)\n                            ]\n                        }, void 0, true),\n                        book.subject_places && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"Settings\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 29\n                                }, this),\n                                book.subject_places.join(\", \"),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 35\n                                }, this)\n                            ]\n                        }, void 0, true),\n                        book.links && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"More Information\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 29\n                                }, this),\n                                book.links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: link.url,\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            children: link.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 37\n                                        }, this)\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 33\n                                    }, this))\n                            ]\n                        }, void 0, true),\n                        showFavouritesBtn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            variant: showAdded ? 'primary' : 'outline-primary',\n                            onClick: favouritesClicked,\n                            children: showAdded ? '+ Favourite (added)' : '+ Favourite'\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                            lineNumber: 76,\n                            columnNumber: 44\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\components\\\\BookDetails.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvQm9va0RldGFpbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQzlCO0FBQ1M7QUFDUjtBQUVsQixTQUFTTyxZQUFZLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxvQkFBb0IsSUFBSSxFQUFFO0lBQzFFLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1IsOENBQU9BLENBQUNDLGtEQUFjQTtJQUNsRSxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUNLLGVBQWVJLFFBQVEsQ0FBQ047SUFDbkUsU0FBU087UUFDTCxJQUFJSCxXQUFXO1lBQ1hELGtCQUFrQkssQ0FBQUEsVUFBV0EsUUFBUUMsTUFBTSxDQUFDQyxDQUFBQSxNQUFPQSxPQUFPVjtZQUMxREssYUFBYTtRQUNqQixPQUNLO1lBQ0RGLGtCQUFrQkssQ0FBQUEsVUFBVzt1QkFBSUE7b0JBQVNSO2lCQUFPO1lBQ2pESyxhQUFhO1FBQ2pCO0lBRUo7SUFDQSxxQkFDSSw4REFBQ2Qsc0dBQVNBO2tCQUNOLDRFQUFDQyxnR0FBR0E7OzhCQUNBLDhEQUFDQyxnR0FBR0E7b0JBQUNrQixJQUFHOztzQ0FDSiw4REFBQ0M7NEJBQ0dDLFNBQVMsQ0FBQ0M7Z0NBQ05BLE1BQU1DLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO2dDQUN2QkYsTUFBTUMsTUFBTSxDQUFDRSxHQUFHLEdBQ1o7NEJBQ1I7NEJBQ0FDLFdBQVU7NEJBQ1ZELEtBQUssQ0FBQyxvQ0FBb0MsRUFBRWxCLE1BQU1vQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0QkFDckVDLEtBQUk7Ozs7OztzQ0FFUiw4REFBQ0M7Ozs7O3NDQUNELDhEQUFDQTs7Ozs7Ozs7Ozs7OEJBRUwsOERBQUM1QixnR0FBR0E7b0JBQUNrQixJQUFHOztzQ0FDSiw4REFBQ1c7c0NBQUl2QixLQUFLd0IsS0FBSzs7Ozs7O3dCQUNkeEIsS0FBS3lCLFdBQVcsa0JBQ2IsOERBQUNDO3NDQUNJLE9BQU8xQixLQUFLeUIsV0FBVyxLQUFLLFdBQVd6QixLQUFLeUIsV0FBVyxHQUFHekIsS0FBS3lCLFdBQVcsQ0FBQ0UsS0FBSzs7Ozs7O3NDQUl6Riw4REFBQ0w7Ozs7O3dCQUNBdEIsS0FBSzRCLGNBQWMsa0JBQ2hCOzs4Q0FBRSw4REFBQ0M7OENBQUc7Ozs7OztnQ0FDRDdCLEtBQUs0QixjQUFjLENBQUNFLElBQUksQ0FBQzs4Q0FDMUIsOERBQUNSOzs7Ozs4Q0FBSyw4REFBQ0E7Ozs7Ozs7d0JBS2R0QixLQUFLK0IsY0FBYyxrQkFDaEI7OzhDQUNJLDhEQUFDRjs4Q0FBRzs7Ozs7O2dDQUNIN0IsS0FBSytCLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDOzhDQUMxQiw4REFBQ1I7Ozs7OzhDQUFLLDhEQUFDQTs7Ozs7Ozt3QkFPZHRCLEtBQUtnQyxLQUFLLGtCQUNQOzs4Q0FDSSw4REFBQ0g7OENBQUc7Ozs7OztnQ0FDSDdCLEtBQUtnQyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbkIsOERBQUNDO2tEQUNHLDRFQUFDQzs0Q0FBRUMsTUFBTUosS0FBS0ssR0FBRzs0Q0FBRXZCLFFBQU87NENBQVN3QixLQUFJO3NEQUF1Qk4sS0FBS1YsS0FBSzs7Ozs7O3VDQURsRVc7Ozs7Ozs7d0JBT3JCakMsbUNBQXNCLDhEQUFDUCxtR0FBTUE7NEJBQUM4QyxTQUFTcEMsWUFBWSxZQUFZOzRCQUFtQnFDLFNBQVNsQztzQ0FBb0JILFlBQVksd0JBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94SyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxqdXdvb1xcU2VuZWNhXFxXRUI0MjJcXEFzc2lnbm1lbnRzXFxBc3NpZ25tZW50MVxcbXktYXBwXFxjb21wb25lbnRzXFxCb29rRGV0YWlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSAnam90YWknO1xyXG5pbXBvcnQgeyBmYXZvdXJpdGVzQXRvbSB9IGZyb20gJ0Avc3RvcmUnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tEZXRhaWxzKHsgYm9vaywgd29ya0lkLCBzaG93RmF2b3VyaXRlc0J0biA9IHRydWUgfSkge1xyXG4gICAgY29uc3QgW2Zhdm91cml0ZXNMaXN0LCBzZXRGYXZvdXJpdGVzTGlzdF0gPSB1c2VBdG9tKGZhdm91cml0ZXNBdG9tKTtcclxuICAgIGNvbnN0IFtzaG93QWRkZWQsIHNldFNob3dBZGRlZF0gPSB1c2VTdGF0ZShmYXZvdXJpdGVzTGlzdC5pbmNsdWRlcyh3b3JrSWQpKTtcclxuICAgIGZ1bmN0aW9uIGZhdm91cml0ZXNDbGlja2VkKCkge1xyXG4gICAgICAgIGlmIChzaG93QWRkZWQpIHtcclxuICAgICAgICAgICAgc2V0RmF2b3VyaXRlc0xpc3QoY3VycmVudCA9PiBjdXJyZW50LmZpbHRlcihmYXYgPT4gZmF2ICE9IHdvcmtJZCkpO1xyXG4gICAgICAgICAgICBzZXRTaG93QWRkZWQoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2V0RmF2b3VyaXRlc0xpc3QoY3VycmVudCA9PiBbLi4uY3VycmVudCwgd29ya0lkXSk7XHJcbiAgICAgICAgICAgIHNldFNob3dBZGRlZCh0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz1cIjRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0Lm9uZXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnNyYyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3BsYWNlaG9sZC5jby80MDB4NjAwP3RleHQ9Q292ZXIrTm90K0F2YWlsYWJsZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2NvdmVycy5vcGVubGlicmFyeS5vcmcvYi9pZC8ke2Jvb2s/LmNvdmVycz8uWzBdfS1MLmpwZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNvdmVyIEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPVwiOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57Ym9vay50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIHtib29rLmRlc2NyaXB0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZW9mIGJvb2suZGVzY3JpcHRpb24gPT09IFwic3RyaW5nXCIgPyBib29rLmRlc2NyaXB0aW9uIDogYm9vay5kZXNjcmlwdGlvbi52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtib29rLnN1YmplY3RfcGVvcGxlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD48aDU+Q2hhcmFjdGVyczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5zdWJqZWN0X3Blb3BsZS5qb2luKFwiLCBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtib29rLnN1YmplY3RfcGxhY2VzICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5TZXR0aW5nczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5zdWJqZWN0X3BsYWNlcy5qb2luKFwiLCBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2Jvb2subGlua3MgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk1vcmUgSW5mb3JtYXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jvb2subGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+e2xpbmsudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93RmF2b3VyaXRlc0J0biAmJiAoPEJ1dHRvbiB2YXJpYW50PXtzaG93QWRkZWQgPyAncHJpbWFyeScgOiAnb3V0bGluZS1wcmltYXJ5J30gb25DbGljaz17ZmF2b3VyaXRlc0NsaWNrZWR9PntzaG93QWRkZWQgPyAnKyBGYXZvdXJpdGUgKGFkZGVkKScgOiAnKyBGYXZvdXJpdGUnfTwvQnV0dG9uPil9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJCdXR0b24iLCJ1c2VBdG9tIiwiZmF2b3VyaXRlc0F0b20iLCJ1c2VTdGF0ZSIsIkJvb2tEZXRhaWxzIiwiYm9vayIsIndvcmtJZCIsInNob3dGYXZvdXJpdGVzQnRuIiwiZmF2b3VyaXRlc0xpc3QiLCJzZXRGYXZvdXJpdGVzTGlzdCIsInNob3dBZGRlZCIsInNldFNob3dBZGRlZCIsImluY2x1ZGVzIiwiZmF2b3VyaXRlc0NsaWNrZWQiLCJjdXJyZW50IiwiZmlsdGVyIiwiZmF2IiwibGciLCJpbWciLCJvbkVycm9yIiwiZXZlbnQiLCJ0YXJnZXQiLCJvbmVycm9yIiwic3JjIiwiY2xhc3NOYW1lIiwiY292ZXJzIiwiYWx0IiwiYnIiLCJoMyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwIiwidmFsdWUiLCJzdWJqZWN0X3Blb3BsZSIsImg1Iiwiam9pbiIsInN1YmplY3RfcGxhY2VzIiwibGlua3MiLCJtYXAiLCJsaW5rIiwiaW5kZXgiLCJkaXYiLCJhIiwiaHJlZiIsInVybCIsInJlbCIsInZhcmlhbnQiLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/BookDetails.js\n");

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

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fworks%2F%5BworkId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Cworks%5C%5BworkId%5D.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fworks%2F%5BworkId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Cworks%5C%5BworkId%5D.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   handler: () => (/* binding */ handler),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./pages/_document.js\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.js\");\n/* harmony import */ var _pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages\\works\\[workId].js */ \"(pages-dir-node)/./pages/works/[workId].js\");\n/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/server/route-modules/pages/pages-handler */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/pages-handler.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__, _pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__]);\n([private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__, _pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/works/[workId]\",\n        pathname: \"/works/[workId]\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    distDir: \".next\" || 0,\n    relativeProjectDir:  false || '',\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    userland: _pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__\n});\nconst handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({\n    srcPage: \"/works/[workId]\",\n    config,\n    userland: _pages_works_workId_js__WEBPACK_IMPORTED_MODULE_5__,\n    routeModule,\n    getStaticPaths,\n    getStaticProps,\n    getServerSideProps\n});\n\n//# sourceMappingURL=pages.js.map\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkZ3b3JrcyUyRiU1QndvcmtJZCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDd29ya3MlNUMlNUJ3b3JrSWQlNUQuanMmYWJzb2x1dGVBcHBQYXRoPXByaXZhdGUtbmV4dC1wYWdlcyUyRl9hcHAmYWJzb2x1dGVEb2N1bWVudFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2RvY3VtZW50Jm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Y7QUFDaEM7QUFDRTtBQUMxRDtBQUN5RDtBQUNWO0FBQy9DO0FBQ3dEO0FBQ3dCO0FBQ2hGO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxtREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyx1QkFBdUIsd0VBQUssQ0FBQyxtREFBUTtBQUNyQyx1QkFBdUIsd0VBQUssQ0FBQyxtREFBUTtBQUNyQywyQkFBMkIsd0VBQUssQ0FBQyxtREFBUTtBQUN6QyxlQUFlLHdFQUFLLENBQUMsbURBQVE7QUFDN0Isd0JBQXdCLHdFQUFLLENBQUMsbURBQVE7QUFDN0M7QUFDTyxnQ0FBZ0Msd0VBQUssQ0FBQyxtREFBUTtBQUM5QyxnQ0FBZ0Msd0VBQUssQ0FBQyxtREFBUTtBQUM5QyxpQ0FBaUMsd0VBQUssQ0FBQyxtREFBUTtBQUMvQyxnQ0FBZ0Msd0VBQUssQ0FBQyxtREFBUTtBQUM5QyxvQ0FBb0Msd0VBQUssQ0FBQyxtREFBUTtBQUN6RDtBQUNPLHdCQUF3QixrR0FBZ0I7QUFDL0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsYUFBYSxPQUFvQyxJQUFJLENBQUU7QUFDdkQsd0JBQXdCLE1BQXVDO0FBQy9EO0FBQ0E7QUFDQSxhQUFhLDhEQUFXO0FBQ3hCLGtCQUFrQixtRUFBZ0I7QUFDbEMsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDO0FBQ00sZ0JBQWdCLDhGQUFVO0FBQ2pDO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgYXBwIGFuZCBkb2N1bWVudCBtb2R1bGVzLlxuaW1wb3J0ICogYXMgZG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXHdvcmtzXFxcXFt3b3JrSWRdLmpzXCI7XG5pbXBvcnQgeyBnZXRIYW5kbGVyIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9wYWdlcy9wYWdlcy1oYW5kbGVyXCI7XG4vLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTdGF0aWNQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTdGF0aWNQYXRocycpO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U2VydmVyU2lkZVByb3BzJyk7XG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbmV4cG9ydCBjb25zdCByZXBvcnRXZWJWaXRhbHMgPSBob2lzdCh1c2VybGFuZCwgJ3JlcG9ydFdlYlZpdGFscycpO1xuLy8gUmUtZXhwb3J0IGxlZ2FjeSBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQYXRocycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhcmFtcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFNlcnZlclByb3BzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTLFxuICAgICAgICBwYWdlOiBcIi93b3Jrcy9bd29ya0lkXVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvd29ya3MvW3dvcmtJZF1cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICBkaXN0RGlyOiBwcm9jZXNzLmVudi5fX05FWFRfUkVMQVRJVkVfRElTVF9ESVIgfHwgJycsXG4gICAgcmVsYXRpdmVQcm9qZWN0RGlyOiBwcm9jZXNzLmVudi5fX05FWFRfUkVMQVRJVkVfUFJPSkVDVF9ESVIgfHwgJycsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICAvLyBkZWZhdWx0IGV4cG9ydCBtaWdodCBub3QgZXhpc3Qgd2hlbiBvcHRpbWl6ZWQgZm9yIGRhdGEgb25seVxuICAgICAgICBBcHA6IGFwcC5kZWZhdWx0LFxuICAgICAgICBEb2N1bWVudDogZG9jdW1lbnQuZGVmYXVsdFxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBnZXRIYW5kbGVyKHtcbiAgICBzcmNQYWdlOiBcIi93b3Jrcy9bd29ya0lkXVwiLFxuICAgIGNvbmZpZyxcbiAgICB1c2VybGFuZCxcbiAgICByb3V0ZU1vZHVsZSxcbiAgICBnZXRTdGF0aWNQYXRocyxcbiAgICBnZXRTdGF0aWNQcm9wcyxcbiAgICBnZXRTZXJ2ZXJTaWRlUHJvcHNcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy5qcy5tYXBcbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fworks%2F%5BworkId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Cworks%5C%5BworkId%5D.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

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

/***/ "(pages-dir-node)/./pages/works/[workId].js":
/*!*********************************!*\
  !*** ./pages/works/[workId].js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Work)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _components_BookDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BookDetails */ \"(pages-dir-node)/./components/BookDetails.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/PageHeader */ \"(pages-dir-node)/./components/PageHeader.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__, _components_BookDetails__WEBPACK_IMPORTED_MODULE_3__]);\n([swr__WEBPACK_IMPORTED_MODULE_2__, _components_BookDetails__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction Work() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { workId } = router.query;\n    const { data, error, isLoading } = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(workId ? `https://openlibrary.org/works/${workId}.json` : null);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\works\\\\[workId].js\",\n        lineNumber: 11,\n        columnNumber: 27\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_4___default()), {\n        statusCode: 404\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\works\\\\[workId].js\",\n        lineNumber: 13,\n        columnNumber: 23\n    }, this);\n    if (data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    text: data.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\works\\\\[workId].js\",\n                    lineNumber: 18,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BookDetails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    book: data,\n                    workId: workId\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\works\\\\[workId].js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Work (Book) by workId\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\juwoo\\\\Seneca\\\\WEB422\\\\Assignments\\\\Assignment1\\\\my-app\\\\pages\\\\works\\\\[workId].js\",\n        lineNumber: 24,\n        columnNumber: 12\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL3dvcmtzL1t3b3JrSWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Y7QUFDMEI7QUFDcEI7QUFDa0I7QUFFbEMsU0FBU0s7SUFDcEIsTUFBTUMsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRU8sTUFBTSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFDL0IsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFLEdBQUdWLCtDQUFNQSxDQUFDTSxTQUFTLENBQUMsOEJBQThCLEVBQUVBLE9BQU8sS0FBSyxDQUFDLEdBQUc7SUFDcEcsSUFBSUksV0FBVyxxQkFBTyw4REFBQ0M7a0JBQUU7Ozs7OztJQUV6QixJQUFJRixPQUFPLHFCQUFPLDhEQUFDUCxtREFBS0E7UUFBQ1UsWUFBWTs7Ozs7O0lBRXJDLElBQUlKLE1BQU07UUFDTixxQkFDSTs7OEJBQ0ksOERBQUNMLDhEQUFVQTtvQkFBQ1UsTUFBTUwsS0FBS00sS0FBSzs7Ozs7OzhCQUM1Qiw4REFBQ2IsK0RBQVdBO29CQUFDYyxNQUFNUDtvQkFBTUYsUUFBUUE7Ozs7Ozs7O0lBRzdDO0lBRUEscUJBQU8sOERBQUNLO2tCQUFFOzs7Ozs7QUFDZCIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxqdXdvb1xcU2VuZWNhXFxXRUI0MjJcXEFzc2lnbm1lbnRzXFxBc3NpZ25tZW50MVxcbXktYXBwXFxwYWdlc1xcd29ya3NcXFt3b3JrSWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgQm9va0RldGFpbHMgZnJvbSAnQC9jb21wb25lbnRzL0Jvb2tEZXRhaWxzJztcclxuaW1wb3J0IEVycm9yIGZyb20gXCJuZXh0L2Vycm9yXCI7XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvUGFnZUhlYWRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29yaygpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyB3b3JrSWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlU1dSKHdvcmtJZCA/IGBodHRwczovL29wZW5saWJyYXJ5Lm9yZy93b3Jrcy8ke3dvcmtJZH0uanNvbmAgOiBudWxsKTtcclxuICAgIGlmIChpc0xvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17NDA0fSAvPjtcclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8UGFnZUhlYWRlciB0ZXh0PXtkYXRhLnRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgPEJvb2tEZXRhaWxzIGJvb2s9e2RhdGF9IHdvcmtJZD17d29ya0lkfSAvPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8cD5Xb3JrIChCb29rKSBieSB3b3JrSWQ8L3A+O1xyXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVNXUiIsIkJvb2tEZXRhaWxzIiwiRXJyb3IiLCJQYWdlSGVhZGVyIiwiV29yayIsInJvdXRlciIsIndvcmtJZCIsInF1ZXJ5IiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwicCIsInN0YXR1c0NvZGUiLCJ0ZXh0IiwidGl0bGUiLCJib29rIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/works/[workId].js\n");

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

/***/ "(pages-dir-node)/__barrel_optimize__?names=Button,Col,Container,Row!=!./node_modules/react-bootstrap/cjs/index.js":
/*!********************************************************************************************************!*\
  !*** __barrel_optimize__?names=Button,Col,Container,Row!=!./node_modules/react-bootstrap/cjs/index.js ***!
  \********************************************************************************************************/
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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

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

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-bootstrap","vendor-chunks/@babel"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fworks%2F%5BworkId%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Cworks%5C%5BworkId%5D.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();