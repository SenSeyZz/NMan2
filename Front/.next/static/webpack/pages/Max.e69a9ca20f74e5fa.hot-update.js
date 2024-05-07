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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavBar */ \"./src/NavBar.js\");\n/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table */ \"./src/max/table.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Trivia = ()=>{\n    _s();\n    //Initial data is gonna be duplicate in the table if i leave it like this\n    const initialData = [];\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialData);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://localhost:3001/api/maxData\");\n                setData(response.data);\n                console.log(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            // Handle error, e.g., show error message\n            }\n        };\n        fetchData();\n    }, []);\n    const handleAddRow = ()=>{\n        const newRow = {\n            first_name: \"\",\n            birth_year: 0,\n            nationality: \"\",\n            boobs: 0,\n            ass: 0,\n            bj_quality: 0,\n            intelligence: 0,\n            where_you_met: \"\",\n            quality_of_the_sex: 0,\n            complicity: 0,\n            special_physical_trait: \"\",\n            Grade: 0,\n            Creator: \"Max\"\n        };\n        setData([\n            ...data,\n            newRow\n        ]);\n        console.log(data);\n    };\n    const handleInputChange = (index, name, value)=>{\n        const newData = [\n            ...data\n        ];\n        // Parse certain values as integers\n        if (name === \"birth_year\" || name === \"boobs\" || name === \"ass\" || name === \"bj_quality\" || name === \"intelligence\" || name === \"Sex\" || name === \"Complicity\" || name === \"Grade\") {\n            newData[index][name] = parseInt(value, 10); // Parse as integer\n        } else {\n            newData[index][name] = value;\n        }\n        setData(newData);\n    };\n    const handleSave = async ()=>{\n        console.log(data);\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"http://localhost:3001/api/addRow\", data);\n            alert(\"Data saved successfully\");\n        } catch (error) {\n            console.error(\"Error saving data:\", error);\n            alert(\"Error saving data. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Welcome to Max's page\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_table__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: data,\n                onInputChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddRow,\n                children: \"Add Row\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSave,\n                children: \"Save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Marc\\\\OneDrive\\\\Bureau\\\\Programming\\\\NymphBackend\\\\NMan\\\\src\\\\max\\\\index.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Trivia, \"A2wpUDj2vsVhzBQraLwic4bnRJI=\");\n_c = Trivia;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trivia);\nvar _c;\n$RefreshReg$(_c, \"Trivia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWF4L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDYjtBQUNWO0FBQ0Y7QUFFMUIsTUFBTU0sU0FBUzs7SUFDYix5RUFBeUU7SUFDekUsTUFBTUMsY0FBYyxFQUVuQjtJQUVELE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQ007SUFFakNMLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTU4saURBQVMsQ0FBQztnQkFDakNJLFFBQVFFLFNBQVNILElBQUk7Z0JBQ3JCSyxRQUFRQyxHQUFHLENBQUNOO1lBQ2QsRUFBRSxPQUFPTyxPQUFPO2dCQUNkRixRQUFRRSxLQUFLLENBQUMsd0JBQXdCQTtZQUN0Qyx5Q0FBeUM7WUFDM0M7UUFDRjtRQUVBTDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1NLGVBQWU7UUFDbkIsTUFBTUMsU0FBUztZQUNiQyxZQUFZO1lBQ1pDLFlBQVk7WUFDWkMsYUFBYTtZQUNiQyxPQUFPO1lBQ1BDLEtBQUs7WUFDTEMsWUFBWTtZQUNaQyxjQUFjO1lBQ2RDLGVBQWU7WUFDZkMsb0JBQW9CO1lBQ3BCQyxZQUFZO1lBQ1pDLHdCQUF3QjtZQUN4QkMsT0FBTztZQUNQQyxTQUFTO1FBRVg7UUFDQXJCLFFBQVE7ZUFBSUQ7WUFBTVM7U0FBTztRQUN6QkosUUFBUUMsR0FBRyxDQUFDTjtJQUNkO0lBR0EsTUFBTXVCLG9CQUFvQixDQUFDQyxPQUFPQyxNQUFNQztRQUN0QyxNQUFNQyxVQUFVO2VBQUkzQjtTQUFLO1FBQ3pCLG1DQUFtQztRQUNuQyxJQUFJeUIsU0FBUyxnQkFBZ0JBLFNBQVMsV0FBV0EsU0FBUyxTQUFTQSxTQUFTLGdCQUFnQkEsU0FBUyxrQkFBa0JBLFNBQVMsU0FBU0EsU0FBUyxnQkFBZ0JBLFNBQVMsU0FBUztZQUNsTEUsT0FBTyxDQUFDSCxNQUFNLENBQUNDLEtBQUssR0FBR0csU0FBU0YsT0FBTyxLQUFLLG1CQUFtQjtRQUNqRSxPQUFPO1lBQ0xDLE9BQU8sQ0FBQ0gsTUFBTSxDQUFDQyxLQUFLLEdBQUdDO1FBQ3pCO1FBQ0F6QixRQUFRMEI7SUFDVjtJQUVBLE1BQU1FLGFBQWE7UUFDakJ4QixRQUFRQyxHQUFHLENBQUNOO1FBQ1osSUFBSTtZQUNGLE1BQU1ILGtEQUFVLENBQUMsb0NBQW9DRztZQUNyRCtCLE1BQU07UUFDUixFQUFFLE9BQU94QixPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQyxzQkFBc0JBO1lBQ3BDd0IsTUFBTTtRQUNSO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDckMsK0NBQWFBOzs7OzswQkFDZCw4REFBQ3NDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNyQyw4Q0FBS0E7Z0JBQUNJLE1BQU1BO2dCQUFNa0MsZUFBZVg7Ozs7OzswQkFDbEMsOERBQUNZO2dCQUFPQyxTQUFTNUI7MEJBQWM7Ozs7OzswQkFDL0IsOERBQUMyQjtnQkFBT0MsU0FBU1A7MEJBQVk7Ozs7Ozs7Ozs7OztBQUduQztHQTVFTS9CO0tBQUFBO0FBOEVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tYXgvaW5kZXguanM/ZDVkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSAnLi4vTmF2QmFyJztcclxuaW1wb3J0IFRhYmxlIGZyb20gJy4vdGFibGUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgVHJpdmlhID0gKCkgPT4ge1xyXG4gIC8vSW5pdGlhbCBkYXRhIGlzIGdvbm5hIGJlIGR1cGxpY2F0ZSBpbiB0aGUgdGFibGUgaWYgaSBsZWF2ZSBpdCBsaWtlIHRoaXNcclxuICBjb25zdCBpbml0aWFsRGF0YSA9IFtcclxuICAgIC8vIFlvdXIgaW5pdGlhbCBkYXRhIGhlcmVcclxuICBdO1xyXG5cclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShpbml0aWFsRGF0YSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvbWF4RGF0YScpO1xyXG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgLy8gSGFuZGxlIGVycm9yLCBlLmcuLCBzaG93IGVycm9yIG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFJvdyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1JvdyA9IHtcclxuICAgICAgZmlyc3RfbmFtZTogJycsXHJcbiAgICAgIGJpcnRoX3llYXI6IDAsXHJcbiAgICAgIG5hdGlvbmFsaXR5OiAnJyxcclxuICAgICAgYm9vYnM6IDAsXHJcbiAgICAgIGFzczogMCxcclxuICAgICAgYmpfcXVhbGl0eTogMCxcclxuICAgICAgaW50ZWxsaWdlbmNlOiAwLFxyXG4gICAgICB3aGVyZV95b3VfbWV0OiAnJyxcclxuICAgICAgcXVhbGl0eV9vZl90aGVfc2V4OiAwLFxyXG4gICAgICBjb21wbGljaXR5OiAwLFxyXG4gICAgICBzcGVjaWFsX3BoeXNpY2FsX3RyYWl0OiAnJyxcclxuICAgICAgR3JhZGU6IDAsXHJcbiAgICAgIENyZWF0b3I6IFwiTWF4XCIsXHJcbiAgICAgIFxyXG4gICAgfTtcclxuICAgIHNldERhdGEoWy4uLmRhdGEsIG5ld1Jvd10pO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgfTtcclxuICAgIFxyXG5cclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChpbmRleCwgbmFtZSwgdmFsdWUpID0+IHtcclxuICAgIGNvbnN0IG5ld0RhdGEgPSBbLi4uZGF0YV07XHJcbiAgICAvLyBQYXJzZSBjZXJ0YWluIHZhbHVlcyBhcyBpbnRlZ2Vyc1xyXG4gICAgaWYgKG5hbWUgPT09ICdiaXJ0aF95ZWFyJyB8fCBuYW1lID09PSAnYm9vYnMnIHx8IG5hbWUgPT09ICdhc3MnIHx8IG5hbWUgPT09ICdial9xdWFsaXR5JyB8fCBuYW1lID09PSAnaW50ZWxsaWdlbmNlJyB8fCBuYW1lID09PSAnU2V4JyB8fCBuYW1lID09PSAnQ29tcGxpY2l0eScgfHwgbmFtZSA9PT0gJ0dyYWRlJykge1xyXG4gICAgICBuZXdEYXRhW2luZGV4XVtuYW1lXSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7IC8vIFBhcnNlIGFzIGludGVnZXJcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld0RhdGFbaW5kZXhdW25hbWVdID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKG5ld0RhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvYWRkUm93JywgZGF0YSk7XHJcbiAgICAgIGFsZXJ0KCdEYXRhIHNhdmVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICBhbGVydCgnRXJyb3Igc2F2aW5nIGRhdGEuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uQmFyIC8+XHJcbiAgICAgIDxoMT5XZWxjb21lIHRvIE1heCdzIHBhZ2U8L2gxPlxyXG4gICAgICA8VGFibGUgZGF0YT17ZGF0YX0gb25JbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkUm93fT5BZGQgUm93PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2F2ZX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyaXZpYTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5hdmlnYXRpb25CYXIiLCJUYWJsZSIsImF4aW9zIiwiVHJpdmlhIiwiaW5pdGlhbERhdGEiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaGFuZGxlQWRkUm93IiwibmV3Um93IiwiZmlyc3RfbmFtZSIsImJpcnRoX3llYXIiLCJuYXRpb25hbGl0eSIsImJvb2JzIiwiYXNzIiwiYmpfcXVhbGl0eSIsImludGVsbGlnZW5jZSIsIndoZXJlX3lvdV9tZXQiLCJxdWFsaXR5X29mX3RoZV9zZXgiLCJjb21wbGljaXR5Iiwic3BlY2lhbF9waHlzaWNhbF90cmFpdCIsIkdyYWRlIiwiQ3JlYXRvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiaW5kZXgiLCJuYW1lIiwidmFsdWUiLCJuZXdEYXRhIiwicGFyc2VJbnQiLCJoYW5kbGVTYXZlIiwicG9zdCIsImFsZXJ0IiwiZGl2IiwiaDEiLCJvbklucHV0Q2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/max/index.js\n"));

/***/ })

});