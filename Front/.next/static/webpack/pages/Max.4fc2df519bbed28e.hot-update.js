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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavBar */ \"./src/NavBar.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table */ \"./src/max/table.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Trivia = ()=>{\n    _s();\n    const initialData = [];\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    const handleAddRow = ()=>{\n        const newRow = {\n            Name: \"\",\n            Year: parseInt(value, 10),\n            Nationality: \"\",\n            Boobs: parseInt(value, 10),\n            Ass: parseInt(value, 10),\n            BJ: parseInt(value, 10),\n            Intell: parseInt(value, 10),\n            Location: \"\",\n            Sex: parseInt(value, 10),\n            Complicity: parseInt(value, 10),\n            Special: \"\",\n            Grade: parseInt(value, 10),\n            Creator: \"Max\"\n        };\n        setData([\n            ...data,\n            newRow\n        ]);\n    };\n    const handleInputChange = (index, name, value1)=>{\n        const newData = [\n            ...data\n        ];\n        newData[index][name] = value1;\n        setData(newData);\n    };\n    const handleSave = async ()=>{\n        console.log();\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/api/addRow\", data);\n            alert(\"Data saved successfully\");\n        } catch (error) {\n            console.error(\"Error saving data:\", error);\n            alert(\"Error saving data. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Max's page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: data,\n                onInputChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddRow,\n                children: \"Add Row\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSave,\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Trivia, \"hDGcfQHkZj5ZsEBk8saO8jx9VfY=\");\n_c = Trivia;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trivia);\nvar _c;\n$RefreshReg$(_c, \"Trivia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWF4L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDRjtBQUNWO0FBQ0Y7QUFFMUIsTUFBTUssU0FBUzs7SUFDYixNQUFNQyxjQUFjLEVBRW5CO0lBRUQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDSztJQUVqQyxNQUFNRyxlQUFlO1FBQ25CLE1BQU1DLFNBQVM7WUFDYkMsTUFBTTtZQUNOQyxNQUFNQyxTQUFTQyxPQUFPO1lBQ3RCQyxhQUFhO1lBQ2JDLE9BQU9ILFNBQVNDLE9BQU87WUFDdkJHLEtBQUtKLFNBQVNDLE9BQU87WUFDckJJLElBQUlMLFNBQVNDLE9BQU87WUFDcEJLLFFBQVFOLFNBQVNDLE9BQU87WUFDeEJNLFVBQVU7WUFDVkMsS0FBS1IsU0FBU0MsT0FBTztZQUNyQlEsWUFBWVQsU0FBU0MsT0FBTztZQUM1QlMsU0FBUztZQUNUQyxPQUFPWCxTQUFTQyxPQUFPO1lBQ3ZCVyxTQUFTO1FBQ1g7UUFDQWpCLFFBQVE7ZUFBSUQ7WUFBTUc7U0FBTztJQUMzQjtJQUdBLE1BQU1nQixvQkFBb0IsQ0FBQ0MsT0FBT0MsTUFBTWQ7UUFDdEMsTUFBTWUsVUFBVTtlQUFJdEI7U0FBSztRQUN6QnNCLE9BQU8sQ0FBQ0YsTUFBTSxDQUFDQyxLQUFLLEdBQUdkO1FBQ3ZCTixRQUFRcUI7SUFDVjtJQUVBLE1BQU1DLGFBQWE7UUFDakJDLFFBQVFDLEdBQUc7UUFDWCxJQUFJO1lBQ0YsTUFBTTVCLGtEQUFVLENBQUMsb0NBQW9DRztZQUNyRDJCLE1BQU07UUFDUixFQUFFLE9BQU9DLE9BQU87WUFDZEosUUFBUUksS0FBSyxDQUFDLHNCQUFzQkE7WUFDcENELE1BQU07UUFDUjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFOzswQkFDQyw4REFBQ2xDLCtDQUFhQTs7Ozs7MEJBQ2QsOERBQUNtQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDbEMsOENBQUtBO2dCQUFDSSxNQUFNQTtnQkFBTStCLGVBQWVaOzs7Ozs7MEJBQ2xDLDhEQUFDYTtnQkFBT0MsU0FBUy9COzBCQUFjOzs7Ozs7MEJBQy9CLDhEQUFDOEI7Z0JBQU9DLFNBQVNWOzBCQUFZOzs7Ozs7Ozs7Ozs7QUFHbkM7R0FyRE16QjtLQUFBQTtBQXVETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWF4L2luZGV4LmpzP2Q1ZDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tICcuLi9OYXZCYXInO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAnLi90YWJsZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBUcml2aWEgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5pdGlhbERhdGEgPSBbXHJcbiAgICAvLyBZb3VyIGluaXRpYWwgZGF0YSBoZXJlXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoaW5pdGlhbERhdGEpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRSb3cgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdSb3cgPSB7XHJcbiAgICAgIE5hbWU6ICcnLFxyXG4gICAgICBZZWFyOiBwYXJzZUludCh2YWx1ZSwgMTApLFxyXG4gICAgICBOYXRpb25hbGl0eTogJycsXHJcbiAgICAgIEJvb2JzOiBwYXJzZUludCh2YWx1ZSwgMTApLFxyXG4gICAgICBBc3M6IHBhcnNlSW50KHZhbHVlLCAxMCksXHJcbiAgICAgIEJKOiBwYXJzZUludCh2YWx1ZSwgMTApLFxyXG4gICAgICBJbnRlbGw6IHBhcnNlSW50KHZhbHVlLCAxMCksXHJcbiAgICAgIExvY2F0aW9uOiAnJyxcclxuICAgICAgU2V4OiBwYXJzZUludCh2YWx1ZSwgMTApLFxyXG4gICAgICBDb21wbGljaXR5OiBwYXJzZUludCh2YWx1ZSwgMTApLFxyXG4gICAgICBTcGVjaWFsOiAnJyxcclxuICAgICAgR3JhZGU6IHBhcnNlSW50KHZhbHVlLCAxMCksXHJcbiAgICAgIENyZWF0b3I6IFwiTWF4XCIsXHJcbiAgICB9O1xyXG4gICAgc2V0RGF0YShbLi4uZGF0YSwgbmV3Um93XSk7XHJcbiAgfTtcclxuICAgIFxyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChpbmRleCwgbmFtZSwgdmFsdWUpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSBbLi4uZGF0YV07XHJcbiAgICBuZXdEYXRhW2luZGV4XVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgc2V0RGF0YShuZXdEYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTYXZlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYWRkUm93JywgZGF0YSk7XHJcbiAgICAgIGFsZXJ0KCdEYXRhIHNhdmVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICBhbGVydCgnRXJyb3Igc2F2aW5nIGRhdGEuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uQmFyIC8+XHJcbiAgICAgIDxoMT5XZWxjb21lIHRvIE1heCdzIHBhZ2U8L2gxPlxyXG4gICAgICA8VGFibGUgZGF0YT17ZGF0YX0gb25JbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkUm93fT5BZGQgUm93PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2F2ZX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyaXZpYTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIk5hdmlnYXRpb25CYXIiLCJUYWJsZSIsImF4aW9zIiwiVHJpdmlhIiwiaW5pdGlhbERhdGEiLCJkYXRhIiwic2V0RGF0YSIsImhhbmRsZUFkZFJvdyIsIm5ld1JvdyIsIk5hbWUiLCJZZWFyIiwicGFyc2VJbnQiLCJ2YWx1ZSIsIk5hdGlvbmFsaXR5IiwiQm9vYnMiLCJBc3MiLCJCSiIsIkludGVsbCIsIkxvY2F0aW9uIiwiU2V4IiwiQ29tcGxpY2l0eSIsIlNwZWNpYWwiLCJHcmFkZSIsIkNyZWF0b3IiLCJoYW5kbGVJbnB1dENoYW5nZSIsImluZGV4IiwibmFtZSIsIm5ld0RhdGEiLCJoYW5kbGVTYXZlIiwiY29uc29sZSIsImxvZyIsInBvc3QiLCJhbGVydCIsImVycm9yIiwiZGl2IiwiaDEiLCJvbklucHV0Q2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/max/index.js\n"));

/***/ })

});