"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Max",{

/***/ "./src/max/index.js":
/*!**************************!*\
  !*** ./src/max/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavBar */ \"./src/NavBar.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table */ \"./src/max/table.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Trivia = ()=>{\n    _s();\n    const initialData = [];\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    const handleAddRow = ()=>{\n        const newRow = {\n            Name: \"\",\n            Year: \"\",\n            Nationality: \"\",\n            Boobs: \"\",\n            Ass: \"\",\n            BJ: \"\",\n            Intell: \"\",\n            Location: \"\",\n            Sex: \"\",\n            Complicity: \"\",\n            Special: \"\",\n            Grade: \"\",\n            Creator: \"Max\"\n        };\n        setData([\n            ...data,\n            newRow\n        ]);\n    };\n    const handleInputChange = (index, name, value)=>{\n        const newData = [\n            ...data\n        ];\n        newData[index][name] = value;\n        setData(newData);\n    };\n    const handleSave = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/api/addRow\", data);\n            alert(\"Data saved successfully\");\n        } catch (error) {\n            console.error(\"Error saving data:\", error);\n            alert(\"Error saving data. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Max's page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: data,\n                onInputChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddRow,\n                children: \"Add Row\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSave,\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Trivia, \"hDGcfQHkZj5ZsEBk8saO8jx9VfY=\");\n_c = Trivia;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trivia);\nvar _c;\n$RefreshReg$(_c, \"Trivia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWF4L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDRjtBQUNWO0FBQ0Y7QUFFMUIsTUFBTUssU0FBUzs7SUFDYixNQUFNQyxjQUFjLEVBRW5CO0lBRUQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDSztJQUVqQyxNQUFNRyxlQUFlO1FBQ25CLE1BQU1DLFNBQVM7WUFDYkMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLGFBQWE7WUFDYkMsT0FBTztZQUNQQyxLQUFLO1lBQ0xDLElBQUk7WUFDSkMsUUFBUTtZQUNSQyxVQUFVO1lBQ1ZDLEtBQUs7WUFDTEMsWUFBWTtZQUNaQyxTQUFTO1lBQ1RDLE9BQU87WUFDUEMsU0FBUztRQUNYO1FBQ0FmLFFBQVE7ZUFBSUQ7WUFBTUc7U0FBTztJQUMzQjtJQUdBLE1BQU1jLG9CQUFvQixDQUFDQyxPQUFPQyxNQUFNQztRQUN0QyxNQUFNQyxVQUFVO2VBQUlyQjtTQUFLO1FBQ3pCcUIsT0FBTyxDQUFDSCxNQUFNLENBQUNDLEtBQUssR0FBR0M7UUFDdkJuQixRQUFRb0I7SUFDVjtJQUVBLE1BQU1DLGFBQWE7UUFDakIsSUFBSTtZQUNGLE1BQU16QixrREFBVSxDQUFDLG9DQUFvQ0c7WUFDckR3QixNQUFNO1FBQ1IsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxzQkFBc0JBO1lBQ3BDRCxNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRzs7MEJBQ0MsOERBQUNoQywrQ0FBYUE7Ozs7OzBCQUNkLDhEQUFDaUM7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ2hDLDhDQUFLQTtnQkFBQ0ksTUFBTUE7Z0JBQU02QixlQUFlWjs7Ozs7OzBCQUNsQyw4REFBQ2E7Z0JBQU9DLFNBQVM3QjswQkFBYzs7Ozs7OzBCQUMvQiw4REFBQzRCO2dCQUFPQyxTQUFTVDswQkFBWTs7Ozs7Ozs7Ozs7O0FBR25DO0dBcERNeEI7S0FBQUE7QUFzRE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21heC9pbmRleC5qcz9kNWQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi4vTmF2QmFyJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4vdGFibGUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgVHJpdmlhID0gKCkgPT4ge1xyXG4gIGNvbnN0IGluaXRpYWxEYXRhID0gW1xyXG4gICAgLy8gWW91ciBpbml0aWFsIGRhdGEgaGVyZVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKGluaXRpYWxEYXRhKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkUm93ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Um93ID0ge1xyXG4gICAgICBOYW1lOiAnJyxcclxuICAgICAgWWVhcjogJycsXHJcbiAgICAgIE5hdGlvbmFsaXR5OiAnJyxcclxuICAgICAgQm9vYnM6ICcnLFxyXG4gICAgICBBc3M6ICcnLFxyXG4gICAgICBCSjogJycsXHJcbiAgICAgIEludGVsbDogJycsXHJcbiAgICAgIExvY2F0aW9uOiAnJyxcclxuICAgICAgU2V4OiAnJyxcclxuICAgICAgQ29tcGxpY2l0eTogJycsXHJcbiAgICAgIFNwZWNpYWw6ICcnLFxyXG4gICAgICBHcmFkZTogJycsXHJcbiAgICAgIENyZWF0b3I6IFwiTWF4XCIsXHJcbiAgICB9O1xyXG4gICAgc2V0RGF0YShbLi4uZGF0YSwgbmV3Um93XSk7XHJcbiAgfTtcclxuICAgIFxyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChpbmRleCwgbmFtZSwgdmFsdWUpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSBbLi4uZGF0YV07XHJcbiAgICBuZXdEYXRhW2luZGV4XVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgc2V0RGF0YShuZXdEYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9hZGRSb3cnLCBkYXRhKTtcclxuICAgICAgYWxlcnQoJ0RhdGEgc2F2ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIGFsZXJ0KCdFcnJvciBzYXZpbmcgZGF0YS4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmlnYXRpb25CYXIgLz5cclxuICAgICAgPGgxPldlbGNvbWUgdG8gTWF4J3MgcGFnZTwvaDE+XHJcbiAgICAgIDxUYWJsZSBkYXRhPXtkYXRhfSBvbklucHV0Q2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX0gLz5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRSb3d9PkFkZCBSb3c8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTYXZlfT5TYXZlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHJpdmlhOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTmF2aWdhdGlvbkJhciIsIlRhYmxlIiwiYXhpb3MiLCJUcml2aWEiLCJpbml0aWFsRGF0YSIsImRhdGEiLCJzZXREYXRhIiwiaGFuZGxlQWRkUm93IiwibmV3Um93IiwiTmFtZSIsIlllYXIiLCJOYXRpb25hbGl0eSIsIkJvb2JzIiwiQXNzIiwiQkoiLCJJbnRlbGwiLCJMb2NhdGlvbiIsIlNleCIsIkNvbXBsaWNpdHkiLCJTcGVjaWFsIiwiR3JhZGUiLCJDcmVhdG9yIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJpbmRleCIsIm5hbWUiLCJ2YWx1ZSIsIm5ld0RhdGEiLCJoYW5kbGVTYXZlIiwicG9zdCIsImFsZXJ0IiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiaDEiLCJvbklucHV0Q2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/max/index.js\n"));

/***/ })

});