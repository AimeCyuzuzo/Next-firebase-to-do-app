"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"Take a walk across the road\",\n        \"Check if you can play a video game\"\n    ]), todos = ref[0], setTodos = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), input = ref1[0], setInput = ref1[1];\n    var addTodo = function(event) {\n        event.preventDefault();\n        setTodos(_toConsumableArray(todos).concat([\n            input\n        ]));\n        setInput(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"homeParent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"To Do App\"\n                    }, void 0, false, {\n                        fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"addtodo\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: input,\n                                    onChange: function(event) {\n                                        return setInput(event.target.value);\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    onClick: addTodo,\n                                    children: \"Add todo\"\n                                }, void 0, false, {\n                                    fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    children: \"Hello\"\n                                }, void 0, false, {\n                                    fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            todos.map(function(todo) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: todo\n                                }, void 0, false, {\n                                    fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 17\n                                }, _this1);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: input\n                            }, void 0, false, {\n                                fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#header\"\n            }, void 0, false, {\n                fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"1TPm5AJNx6UP3aLTCTxnxAt4BQw=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOztBQUV4QyxJQUFNRSxJQUFJLEdBQUcsV0FBTTs7O0lBRWpCLElBQTBCRCxHQUE4RSxHQUE5RUEsK0NBQVEsQ0FBQztRQUFDLDZCQUE2QjtRQUFDLG9DQUFvQztLQUFDLENBQUMsRUFKMUcsS0FJYyxHQUFjQSxHQUE4RSxHQUE1RixFQUpkLFFBSXdCLEdBQUlBLEdBQThFLEdBQWxGO0lBQ3RCLElBQTBCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBTHhDLEtBS2MsR0FBY0EsSUFBWSxHQUExQixFQUxkLFFBS3dCLEdBQUlBLElBQVksR0FBaEI7SUFDdEIsSUFBTU0sT0FBTyxHQUFFLFNBQUNDLEtBQUssRUFBSTtRQUN2QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUN2QkwsUUFBUSxDQUFDLG1CQUFJRCxLQUFLLENBQUxBLFFBQUo7WUFBV0UsS0FBSztTQUFDLEVBQUM7UUFDM0JDLFFBQVEsQ0FBQyxFQUFFLENBQUM7S0FDYjtJQUdELHFCQUNFLDhEQUFDSSxLQUFHOzswQkFDRiw4REFBQ0EsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFlBQVk7O2tDQUN6Qiw4REFBQ0MsSUFBRTtrQ0FBQyxXQUFTOzs7Ozs2QkFBSztrQ0FDbEIsOERBQUNGLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxTQUFTO2tDQUN0Qiw0RUFBQ0UsTUFBSTs0QkFBQ0MsTUFBTSxFQUFDLEVBQUU7OzhDQUNiLDhEQUFDVCxPQUFLO29DQUFDVSxJQUFJLEVBQUMsTUFBTTtvQ0FBQ0MsS0FBSyxFQUFFWCxLQUFLO29DQUFFWSxRQUFRLEVBQUVULFNBQUFBLEtBQUs7K0NBQUlGLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDVSxNQUFNLENBQUNGLEtBQUssQ0FBQztxQ0FBQzs7Ozs7eUNBQUk7OENBQ3JGLDhEQUFDRyxRQUFNO29DQUFDSixJQUFJLEVBQUMsUUFBUTtvQ0FBQ0ssT0FBTyxFQUFFYixPQUFPOzhDQUFFLFVBQVE7Ozs7O3lDQUFTOzhDQUN6RCw4REFBQ2MsTUFBTTs4Q0FBQyxPQUFLOzs7Ozt5Q0FBUzs7Ozs7O2lDQUNqQjs7Ozs7NkJBQ0g7a0NBRU4sOERBQUNDLElBQUU7OzRCQUdHbkIsS0FBSyxDQUFDb0IsR0FBRyxDQUFDQyxTQUFBQSxJQUFJO3FEQUNaLDhEQUFDQyxJQUFFOzhDQUNBRCxJQUFJOzs7OzswQ0FDRjs2QkFDTixDQUFDOzBDQUVKLDhEQUFDRSxHQUFDOzBDQUNDckIsS0FBSzs7Ozs7cUNBQ0o7Ozs7Ozs2QkFHSDs7Ozs7O3FCQUNEOzBCQUNOLDhEQUFDc0IsR0FBQztnQkFBQ0MsSUFBSSxFQUFDLFNBQVM7Ozs7O3FCQUFLOzs7Ozs7YUFDbEIsQ0FDTDtDQUNKO0dBMUNLMUIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBNENWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbJ1Rha2UgYSB3YWxrIGFjcm9zcyB0aGUgcm9hZCcsJ0NoZWNrIGlmIHlvdSBjYW4gcGxheSBhIHZpZGVvIGdhbWUnXSlcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgYWRkVG9kbyA9KGV2ZW50KSA9PntcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFRvZG9zKFsuLi50b2RvcywgaW5wdXRdKVxuICAgIHNldElucHV0KCcnKVxuICB9XG4gIFxuICBcbiAgcmV0dXJuICggXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVBhcmVudFwiPlxuICAgICAgICA8aDE+VG8gRG8gQXBwPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGR0b2RvXCI+XG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXtldmVudCA9PihzZXRJbnB1dChldmVudC50YXJnZXQudmFsdWUpKX0gLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e2FkZFRvZG99PkFkZCB0b2RvPC9idXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uPkhlbGxvPC9CdXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDx1bD5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0b2Rvcy5tYXAodG9kbyA9PihcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICB7dG9kb31cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtpbnB1dH1cbiAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhIGhyZWY9XCIjaGVhZGVyXCI+PC9hPlxuICAgIDwvZGl2PlxuICAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJIb21lIiwidG9kb3MiLCJzZXRUb2RvcyIsImlucHV0Iiwic2V0SW5wdXQiLCJhZGRUb2RvIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImFjdGlvbiIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsIkJ1dHRvbiIsInVsIiwibWFwIiwidG9kbyIsImxpIiwicCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});