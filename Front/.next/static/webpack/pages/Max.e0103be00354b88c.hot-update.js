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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavBar */ \"./src/NavBar.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table */ \"./src/max/table.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Trivia = ()=>{\n    _s();\n    const initialData = [];\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    const handleAddRow = ()=>{\n        const newRow = {\n            Name: \"\",\n            Year: \"\",\n            Nationality: \"\",\n            Boobs: \"\",\n            Ass: \"\",\n            BJ: \"\",\n            Intell: \"\",\n            Location: \"\",\n            Sex: \"\",\n            Complicity: \"\",\n            Special: \"\",\n            Grade: \"\",\n            Creator: \"Max\"\n        };\n        setData([\n            ...data,\n            newRow\n        ]);\n    };\n    const handleInputChange = (index, name, value)=>{\n        const newData = [\n            ...data\n        ];\n        newData[index][name] = value;\n        setData(newData);\n    };\n    const handleSave = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"/api/addRow\", data);\n            alert(\"Data saved successfully\");\n        } catch (error) {\n            console.error(\"Error saving data:\", error);\n            alert(\"Error saving data. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Max's page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: data,\n                onInputChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddRow,\n                children: \"Add Row\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSave,\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Trivia, \"hDGcfQHkZj5ZsEBk8saO8jx9VfY=\");\n_c = Trivia;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trivia);\nvar _c;\n$RefreshReg$(_c, \"Trivia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWF4L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDRjtBQUNWO0FBQ0Y7QUFFMUIsTUFBTUssU0FBUzs7SUFDYixNQUFNQyxjQUFjLEVBRW5CO0lBRUQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDSztJQUVqQyxNQUFNRyxlQUFlO1FBQ25CLE1BQU1DLFNBQVM7WUFDYkMsTUFBTTtZQUNOQyxNQUFNO1lBQ05DLGFBQWE7WUFDYkMsT0FBTztZQUNQQyxLQUFLO1lBQ0xDLElBQUk7WUFDSkMsUUFBUTtZQUNSQyxVQUFVO1lBQ1ZDLEtBQUs7WUFDTEMsWUFBWTtZQUNaQyxTQUFTO1lBQ1RDLE9BQU87WUFDUEMsU0FBUztRQUNYO1FBQ0FmLFFBQVE7ZUFBSUQ7WUFBTUc7U0FBTztJQUMzQjtJQUdBLE1BQU1jLG9CQUFvQixDQUFDQyxPQUFPQyxNQUFNQztRQUN0QyxNQUFNQyxVQUFVO2VBQUlyQjtTQUFLO1FBQ3pCcUIsT0FBTyxDQUFDSCxNQUFNLENBQUNDLEtBQUssR0FBR0M7UUFDdkJuQixRQUFRb0I7SUFDVjtJQUVBLE1BQU1DLGFBQWE7UUFDakIsSUFBSTtZQUNGLE1BQU16QixrREFBVSxDQUFDLGVBQWVHO1lBQ2hDd0IsTUFBTTtRQUNSLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsc0JBQXNCQTtZQUNwQ0QsTUFBTTtRQUNSO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDaEMsK0NBQWFBOzs7OzswQkFDZCw4REFBQ2lDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNoQyw4Q0FBS0E7Z0JBQUNJLE1BQU1BO2dCQUFNNkIsZUFBZVo7Ozs7OzswQkFDbEMsOERBQUNhO2dCQUFPQyxTQUFTN0I7MEJBQWM7Ozs7OzswQkFDL0IsOERBQUM0QjtnQkFBT0MsU0FBU1Q7MEJBQVk7Ozs7Ozs7Ozs7OztBQUduQztHQXBETXhCO0tBQUFBO0FBc0ROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tYXgvaW5kZXguanM/ZDVkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4uL05hdkJhcic7XHJcbmltcG9ydCBUYWJsZSBmcm9tICcuL3RhYmxlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IFRyaXZpYSA9ICgpID0+IHtcclxuICBjb25zdCBpbml0aWFsRGF0YSA9IFtcclxuICAgIC8vIFlvdXIgaW5pdGlhbCBkYXRhIGhlcmVcclxuICBdO1xyXG5cclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFJvdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1JvdyA9IHtcclxuICAgICAgTmFtZTogJycsXHJcbiAgICAgIFllYXI6ICcnLFxyXG4gICAgICBOYXRpb25hbGl0eTogJycsXHJcbiAgICAgIEJvb2JzOiAnJyxcclxuICAgICAgQXNzOiAnJyxcclxuICAgICAgQko6ICcnLFxyXG4gICAgICBJbnRlbGw6ICcnLFxyXG4gICAgICBMb2NhdGlvbjogJycsXHJcbiAgICAgIFNleDogJycsXHJcbiAgICAgIENvbXBsaWNpdHk6ICcnLFxyXG4gICAgICBTcGVjaWFsOiAnJyxcclxuICAgICAgR3JhZGU6ICcnLFxyXG4gICAgICBDcmVhdG9yOiBcIk1heFwiLFxyXG4gICAgfTtcclxuICAgIHNldERhdGEoWy4uLmRhdGEsIG5ld1Jvd10pO1xyXG4gIH07XHJcbiAgICBcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoaW5kZXgsIG5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdEYXRhID0gWy4uLmRhdGFdO1xyXG4gICAgbmV3RGF0YVtpbmRleF1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIHNldERhdGEobmV3RGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvYWRkUm93JywgZGF0YSk7XHJcbiAgICAgIGFsZXJ0KCdEYXRhIHNhdmVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICBhbGVydCgnRXJyb3Igc2F2aW5nIGRhdGEuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uQmFyIC8+XHJcbiAgICAgIDxoMT5XZWxjb21lIHRvIE1heCdzIHBhZ2U8L2gxPlxyXG4gICAgICA8VGFibGUgZGF0YT17ZGF0YX0gb25JbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkUm93fT5BZGQgUm93PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2F2ZX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyaXZpYTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5hdmlnYXRpb25CYXIiLCJUYWJsZSIsImF4aW9zIiwiVHJpdmlhIiwiaW5pdGlhbERhdGEiLCJkYXRhIiwic2V0RGF0YSIsImhhbmRsZUFkZFJvdyIsIm5ld1JvdyIsIk5hbWUiLCJZZWFyIiwiTmF0aW9uYWxpdHkiLCJCb29icyIsIkFzcyIsIkJKIiwiSW50ZWxsIiwiTG9jYXRpb24iLCJTZXgiLCJDb21wbGljaXR5IiwiU3BlY2lhbCIsIkdyYWRlIiwiQ3JlYXRvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaW5kZXgiLCJuYW1lIiwidmFsdWUiLCJuZXdEYXRhIiwiaGFuZGxlU2F2ZSIsInBvc3QiLCJhbGVydCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImgxIiwib25JbnB1dENoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/max/index.js\n"));

/***/ })

});