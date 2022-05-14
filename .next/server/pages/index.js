"use strict";
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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Home = ()=>{\n    const { 0: todos , 1: setTodos  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"Take a walk across the road\",\n        \"Check if you can play a video game\"\n    ]);\n    const { 0: input , 1: setInput  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const addTodo = (event)=>{\n        event.preventDefault();\n        setTodos([\n            ...todos,\n            input\n        ]);\n        setInput(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"homeParent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"To Do App\"\n                    }, void 0, false, {\n                        fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"addtodo\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            action: \"\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: input,\n                                    onChange: (event)=>setInput(event.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    onClick: addTodo,\n                                    children: \"Add todo\"\n                                }, void 0, false, {\n                                    fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            todos.map((todo)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: todo\n                                }, void 0, false, {\n                                    fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 17\n                                }, undefined)\n                            ),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: input\n                            }, void 0, false, {\n                                fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#header\"\n            }, void 0, false, {\n                fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/run/media/aimecyuzuzo5/Other Volume/Workspace/Next apps/firebase to do app/pages/index.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTJDO0FBQ0g7QUFFeEMsTUFBTUcsSUFBSSxHQUFHLElBQU07SUFFakIsTUFBTSxFQUxSLEdBS1NDLEtBQUssR0FMZCxHQUtnQkMsUUFBUSxNQUFJSCwrQ0FBUSxDQUFDO1FBQUMsNkJBQTZCO1FBQUMsb0NBQW9DO0tBQUMsQ0FBQztJQUN4RyxNQUFNLEVBTlIsR0FNU0ksS0FBSyxHQU5kLEdBTWdCQyxRQUFRLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE1BQU1NLE9BQU8sR0FBRSxDQUFDQyxLQUFLLEdBQUk7UUFDdkJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDdkJMLFFBQVEsQ0FBQztlQUFJRCxLQUFLO1lBQUVFLEtBQUs7U0FBQyxDQUFDO1FBQzNCQyxRQUFRLENBQUMsRUFBRSxDQUFDO0tBQ2I7SUFHRCxxQkFDRSw4REFBQ0ksS0FBRzs7MEJBQ0YsOERBQUNBLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxZQUFZOztrQ0FDekIsOERBQUNDLElBQUU7a0NBQUMsV0FBUzs7Ozs7aUNBQUs7a0NBQ2xCLDhEQUFDRixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsU0FBUztrQ0FDdEIsNEVBQUNFLE1BQUk7NEJBQUNDLE1BQU0sRUFBQyxFQUFFOzs4Q0FDYiw4REFBQ1QsT0FBSztvQ0FBQ1UsSUFBSSxFQUFDLE1BQU07b0NBQUNDLEtBQUssRUFBRVgsS0FBSztvQ0FBRVksUUFBUSxFQUFFVCxDQUFBQSxLQUFLLEdBQUlGLFFBQVEsQ0FBQ0UsS0FBSyxDQUFDVSxNQUFNLENBQUNGLEtBQUssQ0FBQzs7Ozs7NkNBQUs7OENBQ3JGLDhEQUFDRyxRQUFNO29DQUFDSixJQUFJLEVBQUMsUUFBUTtvQ0FBQ0ssT0FBTyxFQUFFYixPQUFPOzhDQUFFLFVBQVE7Ozs7OzZDQUFTOzs7Ozs7cUNBQ3BEOzs7OztpQ0FDSDtrQ0FFTiw4REFBQ2MsSUFBRTs7NEJBR0dsQixLQUFLLENBQUNtQixHQUFHLENBQUNDLENBQUFBLElBQUksaUJBQ1osOERBQUNDLElBQUU7OENBQ0FELElBQUk7Ozs7OzZDQUNGOzRCQUNOLENBQUM7MENBRUosOERBQUNFLEdBQUM7MENBQ0NwQixLQUFLOzs7Ozt5Q0FDSjs7Ozs7O2lDQUdIOzs7Ozs7eUJBQ0Q7MEJBQ04sOERBQUNxQixHQUFDO2dCQUFDQyxJQUFJLEVBQUMsU0FBUzs7Ozs7eUJBQUs7Ozs7OztpQkFDbEIsQ0FDTDtDQUNKO0FBRUQsaUVBQWV6QixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFsnVGFrZSBhIHdhbGsgYWNyb3NzIHRoZSByb2FkJywnQ2hlY2sgaWYgeW91IGNhbiBwbGF5IGEgdmlkZW8gZ2FtZSddKVxuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBhZGRUb2RvID0oZXZlbnQpID0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0VG9kb3MoWy4uLnRvZG9zLCBpbnB1dF0pXG4gICAgc2V0SW5wdXQoJycpXG4gIH1cbiAgXG4gIFxuICByZXR1cm4gKCBcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lUGFyZW50XCI+XG4gICAgICAgIDxoMT5UbyBEbyBBcHA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZHRvZG9cIj5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9e2V2ZW50ID0+KHNldElucHV0KGV2ZW50LnRhcmdldC52YWx1ZSkpfSAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17YWRkVG9kb30+QWRkIHRvZG88L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPHVsPlxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRvZG9zLm1hcCh0b2RvID0+KFxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIHt0b2RvfVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge2lucHV0fVxuICAgICAgICAgICAgPC9wPlxuXG5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGEgaHJlZj1cIiNoZWFkZXJcIj48L2E+XG4gICAgPC9kaXY+XG4gICApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiQnV0dG9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJ0b2RvcyIsInNldFRvZG9zIiwiaW5wdXQiLCJzZXRJbnB1dCIsImFkZFRvZG8iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiYWN0aW9uIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJ0b2RvIiwibGkiLCJwIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "@nextui-org/react":
/*!************************************!*\
  !*** external "@nextui-org/react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();