"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article/[id]",{

/***/ "./components/main-news/modal.js":
/*!***************************************!*\
  !*** ./components/main-news/modal.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_images_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/подробнее.svg */ \"./public/images/подробнее.svg\");\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar customStyles = {\n    content: {\n        top: '50%',\n        left: '50%',\n        right: 'auto',\n        bottom: 'auto',\n        marginRight: '-50%',\n        transform: 'translate(-50%, -50%)'\n    }\n};\nvar ModalContent = function() {\n    var openModal = function openModal() {\n        setIsOpen(true);\n    };\n    var afterOpenModal = function afterOpenModal() {\n    };\n    var closeModal = function closeModal() {\n        setIsOpen(false);\n    };\n    _s1();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), modalIsOpen = ref[0], setIsOpen = ref[1];\n    var shareUrl = \"https://www.youtube.com/watch?v=4t1y5dC6WxY\";\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"modal\",\n        __source: {\n            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n            lineNumber: 64,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: _public_images_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                alt: \"Logo\",\n                onClick: openModal,\n                className: \"modal__btn\",\n                __source: {\n                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n                isOpen: modalIsOpen,\n                onAfterOpen: afterOpenModal,\n                onRequestClose: closeModal,\n                style: customStyles,\n                contentLabel: \"Example Modal\",\n                __source: {\n                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                        className: \"fas fa-times closeIcon\",\n                        onClick: closeModal,\n                        __source: {\n                            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                            lineNumber: 74,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                            lineNumber: 75,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: \"Поделиться\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_5__.FacebookShareButton, {\n                                url: shareUrl,\n                                className: \"Demo__some-network__share-button\",\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_5__.FacebookIcon, {\n                                    size: 32,\n                                    round: true,\n                                    __source: {\n                                        fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_5__.WhatsappShareButton, {\n                                url: shareUrl,\n                                className: \"Demo__some-network__share-button\",\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_5__.WhatsappIcon, {\n                                    size: 32,\n                                    round: true,\n                                    __source: {\n                                        fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_5__.TelegramShareButton, {\n                                url: shareUrl,\n                                className: \"Demo__some-network__share-button\",\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_5__.TelegramIcon, {\n                                    __source: {\n                                        fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InstagramShareButton, {\n                                url: shareUrl,\n                                className: \"Demo__some-network__share-button\",\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_5__.InstapaperIcon, {\n                                    __source: {\n                                        fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                        lineNumber: 100,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"modal\",\n                        __source: {\n                            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                            lineNumber: 103,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            value: \"https://www.youtube.com/watch?v=4t1y5dC6WxY\",\n                            __source: {\n                                fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                lineNumber: 104,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s1(ModalContent, \"EOxo+0MXKxyCdUCTWpcfchJ0gFI=\");\n_c = ModalContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalContent);\nvar _c;\n$RefreshReg$(_c, \"ModalContent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4tbmV3cy9tb2RhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ007QUFDRDtBQUNxQjtBQTJCL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsR0FBSyxDQUFDNkIsWUFBWSxHQUFHLENBQUM7SUFDbEJDLE9BQU8sRUFBRSxDQUFDO1FBQ05DLEdBQUcsRUFBRSxDQUFLO1FBQ1ZDLElBQUksRUFBRSxDQUFLO1FBQ1hDLEtBQUssRUFBRSxDQUFNO1FBQ2JDLE1BQU0sRUFBRSxDQUFNO1FBQ2RDLFdBQVcsRUFBRSxDQUFNO1FBQ25CQyxTQUFTLEVBQUUsQ0FBdUI7SUFDdEMsQ0FBQztBQUNMLENBQUM7QUFHRCxHQUFLLENBQUNDLFlBQVksR0FBRyxRQUNyQixHQUQyQixDQUFDO1FBSWZDLFNBQVMsR0FBbEIsUUFBUSxDQUFDQSxTQUFTLEdBQUcsQ0FBQztRQUNsQkMsU0FBUyxDQUFDLElBQUk7SUFDbEIsQ0FBQztRQUVRQyxjQUFjLEdBQXZCLFFBQVEsQ0FBQ0EsY0FBYyxHQUFHLENBQUM7SUFFM0IsQ0FBQztRQUVRQyxVQUFVLEdBQW5CLFFBQVEsQ0FBQ0EsVUFBVSxHQUFHLENBQUM7UUFDbkJGLFNBQVMsQ0FBQyxLQUFLO0lBQ25CLENBQUM7O0lBWkQsR0FBSyxDQUE0QnZDLEdBQXFCLGtCQUFyQkEscURBQWMsQ0FBQyxLQUFLLE9BQTlDMkMsV0FBVyxHQUFlM0MsR0FBcUIsS0FBbEN1QyxTQUFTLEdBQUl2QyxHQUFxQjtJQWN2RCxHQUFLLENBQUM0QyxRQUFRLEdBQUMsQ0FBNkM7SUFDM0QsTUFBTSx1RUFFREMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozs7aUZBQ2pCNUMsbURBQUs7Z0JBQUM2QyxHQUFHLEVBQUU1QywwREFBRztnQkFBRTZDLEdBQUcsRUFBQyxDQUFNO2dCQUFDQyxPQUFPLEVBQUVYLFNBQVM7Z0JBQUVRLFNBQVMsRUFBQyxDQUFZOzs7Ozs7OztZQUFHLENBQUc7a0ZBQzNFN0Msb0RBQUs7Z0JBQ0ZpRCxNQUFNLEVBQUVQLFdBQVc7Z0JBQ25CUSxXQUFXLEVBQUVYLGNBQWM7Z0JBQzNCWSxjQUFjLEVBQUVYLFVBQVU7Z0JBQzFCWSxLQUFLLEVBQUV4QixZQUFZO2dCQUNuQnlCLFlBQVksRUFBQyxDQUFlOzs7Ozs7Ozt5RkFHM0JDLENBQUM7d0JBQUNULFNBQVMsRUFBQyxDQUF3Qjt3QkFBQ0csT0FBTyxFQUFFUixVQUFVOzs7Ozs7OzswRkFDeERJLENBQUc7Ozs7Ozs7O2lHQUNDVyxDQUFFOzs7Ozs7OzBDQUFDLENBQVU7O2lHQUNibkQsNERBQW1CO2dDQUNoQm9ELEdBQUcsRUFBRWIsUUFBUTtnQ0FDYkUsU0FBUyxFQUFDLENBQWtDOzs7Ozs7OytHQUUzQ3hDLHFEQUFZO29DQUFDb0QsSUFBSSxFQUFFLEVBQUU7b0NBQUVDLEtBQUs7Ozs7Ozs7OztpR0FFaENqQyw0REFBbUI7Z0NBQ2hCK0IsR0FBRyxFQUFFYixRQUFRO2dDQUNiRSxTQUFTLEVBQUMsQ0FBa0M7Ozs7Ozs7K0dBRTNDdEMscURBQVk7b0NBQUNrRCxJQUFJLEVBQUUsRUFBRTtvQ0FBRUMsS0FBSzs7Ozs7Ozs7O2lHQUdoQ3ZDLDREQUFtQjtnQ0FDaEJxQyxHQUFHLEVBQUViLFFBQVE7Z0NBQ2JFLFNBQVMsRUFBQyxDQUFrQzs7Ozs7OzsrR0FFM0N6QixxREFBWTs7Ozs7Ozs7O2lHQUVoQnVDLG9CQUFvQjtnQ0FDakJILEdBQUcsRUFBRWIsUUFBUTtnQ0FDYkUsU0FBUyxFQUFDLENBQWtDOzs7Ozs7OytHQUUzQ2xCLHVEQUFjOzs7Ozs7Ozs7Ozt5RkFHdEJpQixDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozt1R0FDakJlLENBQUs7NEJBQUNDLElBQUksRUFBQyxDQUFNOzRCQUFDQyxLQUFLLEVBQUMsQ0FBNkM7Ozs7Ozs7Ozs7Ozs7QUFLMUYsQ0FBQztJQWhFSzFCLFlBQVk7S0FBWkEsWUFBWTtBQWtFbEIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW4tbmV3cy9tb2RhbC5qcz81Nzc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBpbWcgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMv0L/QvtC00YDQvtCx0L3QtdC1LnN2Z1wiO1xuaW1wb3J0IHtcbiAgICBFbWFpbFNoYXJlQnV0dG9uLFxuICAgIEZhY2Vib29rU2hhcmVCdXR0b24sXG4gICAgRmFjZWJvb2tJY29uLFxuICAgIEVtYWlsSWNvbixcbiAgICBXaGF0c2FwcEljb24sXG4gICAgVHdpdHRlckljb24sXG4gICAgSGF0ZW5hU2hhcmVCdXR0b24sXG4gICAgSW5zdGFwYXBlclNoYXJlQnV0dG9uLFxuICAgIExpbmVTaGFyZUJ1dHRvbixcbiAgICBMaW5rZWRpblNoYXJlQnV0dG9uLFxuICAgIExpdmVqb3VybmFsU2hhcmVCdXR0b24sXG4gICAgTWFpbHJ1U2hhcmVCdXR0b24sXG4gICAgT0tTaGFyZUJ1dHRvbixcbiAgICBQaW50ZXJlc3RTaGFyZUJ1dHRvbixcbiAgICBQb2NrZXRTaGFyZUJ1dHRvbixcbiAgICBSZWRkaXRTaGFyZUJ1dHRvbixcbiAgICBUZWxlZ3JhbVNoYXJlQnV0dG9uLFxuICAgIFRlbGVncmFtSWNvbixcbiAgICBUdW1ibHJTaGFyZUJ1dHRvbixcbiAgICBUd2l0dGVyU2hhcmVCdXR0b24sXG4gICAgVmliZXJTaGFyZUJ1dHRvbixcbiAgICBWS1NoYXJlQnV0dG9uLFxuICAgIFdoYXRzYXBwU2hhcmVCdXR0b24sXG4gICAgV29ya3BsYWNlU2hhcmVCdXR0b24sXG4gICAgSW5zdGFwYXBlckljb24sXG59IGZyb20gXCJyZWFjdC1zaGFyZVwiO1xuXG5jb25zdCBjdXN0b21TdHlsZXMgPSB7XG4gICAgY29udGVudDoge1xuICAgICAgICB0b3A6ICc1MCUnLFxuICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgcmlnaHQ6ICdhdXRvJyxcbiAgICAgICAgYm90dG9tOiAnYXV0bycsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnLTUwJScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXG4gICAgfSxcbn07XG5cblxuY29uc3QgTW9kYWxDb250ZW50ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW21vZGFsSXNPcGVuLCBzZXRJc09wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xuICAgICAgICBzZXRJc09wZW4odHJ1ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWZ0ZXJPcGVuTW9kYWwoKSB7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgICAgICBzZXRJc09wZW4oZmFsc2UpO1xuICAgIH1cblxuICAgY29uc3Qgc2hhcmVVcmw9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTR0MXk1ZEM2V3hZXCJcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbCc+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWd9IGFsdD1cIkxvZ29cIiBvbkNsaWNrPXtvcGVuTW9kYWx9IGNsYXNzTmFtZT0nbW9kYWxfX2J0bicvPntcIiBcIn1cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIGlzT3Blbj17bW9kYWxJc09wZW59XG4gICAgICAgICAgICAgICAgb25BZnRlck9wZW49e2FmdGVyT3Blbk1vZGFsfVxuICAgICAgICAgICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuICAgICAgICAgICAgICAgIHN0eWxlPXtjdXN0b21TdHlsZXN9XG4gICAgICAgICAgICAgICAgY29udGVudExhYmVsPVwiRXhhbXBsZSBNb2RhbFwiXG4gICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMgY2xvc2VJY29uXCIgb25DbGljaz17Y2xvc2VNb2RhbH0vPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz7Qn9C+0LTQtdC70LjRgtGM0YHRjzwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va1NoYXJlQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NoYXJlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiRGVtb19fc29tZS1uZXR3b3JrX19zaGFyZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmFjZWJvb2tJY29uIHNpemU9ezMyfSByb3VuZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L0ZhY2Vib29rU2hhcmVCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxXaGF0c2FwcFNoYXJlQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NoYXJlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiRGVtb19fc29tZS1uZXR3b3JrX19zaGFyZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V2hhdHNhcHBJY29uIHNpemU9ezMyfSByb3VuZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L1doYXRzYXBwU2hhcmVCdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPFRlbGVncmFtU2hhcmVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2hhcmVVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJEZW1vX19zb21lLW5ldHdvcmtfX3NoYXJlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZWxlZ3JhbUljb24vPlxuICAgICAgICAgICAgICAgICAgICA8L1RlbGVncmFtU2hhcmVCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxJbnN0YWdyYW1TaGFyZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtzaGFyZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkRlbW9fX3NvbWUtbmV0d29ya19fc2hhcmUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluc3RhcGFwZXJJY29uLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JbnN0YWdyYW1TaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwnPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9NHQxeTVkQzZXeFlcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbENvbnRlbnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTW9kYWwiLCJJbWFnZSIsImltZyIsIkVtYWlsU2hhcmVCdXR0b24iLCJGYWNlYm9va1NoYXJlQnV0dG9uIiwiRmFjZWJvb2tJY29uIiwiRW1haWxJY29uIiwiV2hhdHNhcHBJY29uIiwiVHdpdHRlckljb24iLCJIYXRlbmFTaGFyZUJ1dHRvbiIsIkluc3RhcGFwZXJTaGFyZUJ1dHRvbiIsIkxpbmVTaGFyZUJ1dHRvbiIsIkxpbmtlZGluU2hhcmVCdXR0b24iLCJMaXZlam91cm5hbFNoYXJlQnV0dG9uIiwiTWFpbHJ1U2hhcmVCdXR0b24iLCJPS1NoYXJlQnV0dG9uIiwiUGludGVyZXN0U2hhcmVCdXR0b24iLCJQb2NrZXRTaGFyZUJ1dHRvbiIsIlJlZGRpdFNoYXJlQnV0dG9uIiwiVGVsZWdyYW1TaGFyZUJ1dHRvbiIsIlRlbGVncmFtSWNvbiIsIlR1bWJsclNoYXJlQnV0dG9uIiwiVHdpdHRlclNoYXJlQnV0dG9uIiwiVmliZXJTaGFyZUJ1dHRvbiIsIlZLU2hhcmVCdXR0b24iLCJXaGF0c2FwcFNoYXJlQnV0dG9uIiwiV29ya3BsYWNlU2hhcmVCdXR0b24iLCJJbnN0YXBhcGVySWNvbiIsImN1c3RvbVN0eWxlcyIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJtYXJnaW5SaWdodCIsInRyYW5zZm9ybSIsIk1vZGFsQ29udGVudCIsIm9wZW5Nb2RhbCIsInNldElzT3BlbiIsImFmdGVyT3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsInVzZVN0YXRlIiwibW9kYWxJc09wZW4iLCJzaGFyZVVybCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJpc09wZW4iLCJvbkFmdGVyT3BlbiIsIm9uUmVxdWVzdENsb3NlIiwic3R5bGUiLCJjb250ZW50TGFiZWwiLCJpIiwiaDMiLCJ1cmwiLCJzaXplIiwicm91bmQiLCJJbnN0YWdyYW1TaGFyZUJ1dHRvbiIsImlucHV0IiwidHlwZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/main-news/modal.js\n");

/***/ })

});