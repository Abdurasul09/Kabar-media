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

/***/ "./components/main-news/modal.js":
/*!***************************************!*\
  !*** ./components/main-news/modal.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_images_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/подробнее.svg */ \"./public/images/подробнее.svg\");\n/* harmony import */ var sharethis_reactjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sharethis-reactjs */ \"./node_modules/sharethis-reactjs/dist/index.js\");\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar customStyles = {\n    content: {\n        top: '50%',\n        left: '50%',\n        right: 'auto',\n        bottom: 'auto',\n        marginRight: '-50%',\n        transform: 'translate(-50%, -50%)'\n    }\n};\nvar ModalContent = function() {\n    var openModal = function openModal() {\n        setIsOpen(true);\n    };\n    var afterOpenModal = function afterOpenModal() {\n    };\n    var closeModal = function closeModal() {\n        setIsOpen(false);\n    };\n    _s1();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), modalIsOpen = ref[0], setIsOpen = ref[1];\n    var shareUrl = \"https://www.youtube.com/watch?v=4t1y5dC6WxY\";\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"modal\",\n        __source: {\n            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n            lineNumber: 65,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: _public_images_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                alt: \"Logo\",\n                onClick: openModal,\n                className: \"modal__btn\",\n                __source: {\n                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n                isOpen: modalIsOpen,\n                onAfterOpen: afterOpenModal,\n                onRequestClose: closeModal,\n                style: customStyles,\n                contentLabel: \"Example Modal\",\n                __source: {\n                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                        className: \"fas fa-times closeIcon\",\n                        onClick: closeModal,\n                        __source: {\n                            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                            lineNumber: 75,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: \"Поделиться\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_6__.FacebookShareButton, {\n                                url: shareUrl,\n                                className: \"Demo__some-network__share-button\",\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_6__.FacebookIcon, {\n                                    size: 32,\n                                    round: true,\n                                    __source: {\n                                        fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_6__.WhatsappShareButton, {\n                                url: shareUrl,\n                                className: \"Demo__some-network__share-button\",\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_6__.WhatsappIcon, {\n                                    size: 32,\n                                    round: true,\n                                    __source: {\n                                        fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_6__.TelegramShareButton, {\n                                url: shareUrl,\n                                className: \"Demo__some-network__share-button\",\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_6__.TelegramIcon, {\n                                    __source: {\n                                        fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(sharethis_reactjs__WEBPACK_IMPORTED_MODULE_5__.InlineFollowButtons, {\n                                config: {\n                                    action: 'Follow us:',\n                                    action_enable: true,\n                                    action_pos: 'bottom',\n                                    alignment: 'center',\n                                    color: 'white',\n                                    enabled: true,\n                                    networks: [\n                                        'instagram', \n                                    ],\n                                    padding: 8,\n                                    profiles: {\n                                        instagram: 'sharethis'\n                                    },\n                                    radius: 9,\n                                    size: 32,\n                                    spacing: 8\n                                },\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 104,\n                                    columnNumber: 21\n                                },\n                                __self: _this\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"modal\",\n                        __source: {\n                            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                            lineNumber: 126,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            value: \"https://www.youtube.com/watch?v=4t1y5dC6WxY\",\n                            __source: {\n                                fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                lineNumber: 127,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s1(ModalContent, \"EOxo+0MXKxyCdUCTWpcfchJ0gFI=\");\n_c = ModalContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalContent);\nvar _c;\n$RefreshReg$(_c, \"ModalContent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBVztvQ0FDMUIsQ0FBQztvQ0FDREMsTUFBTSxFQUFFLENBQUM7b0NBQ1RiLElBQUksRUFBRSxFQUFFO29DQUNSYyxPQUFPLEVBQUUsQ0FBQztnQ0FDZCxDQUFDOzs7Ozs7Ozs7O3lGQUlSM0IsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQU87Ozs7Ozs7dUdBQ2pCMkIsQ0FBSzs0QkFBQ0MsSUFBSSxFQUFDLENBQU07NEJBQUNDLEtBQUssRUFBQyxDQUE2Qzs7Ozs7Ozs7Ozs7OztBQUsxRixDQUFDO0lBdEZLdEMsWUFBWTtLQUFaQSxZQUFZO0FBd0ZsQiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbWFpbi1uZXdzL21vZGFsLmpzPzU3NzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IGltZyBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy/Qv9C+0LTRgNC+0LHQvdC10LUuc3ZnXCI7XG5pbXBvcnQge0lubGluZUZvbGxvd0J1dHRvbnN9IGZyb20gJ3NoYXJldGhpcy1yZWFjdGpzJztcbmltcG9ydCB7XG4gICAgRW1haWxTaGFyZUJ1dHRvbixcbiAgICBGYWNlYm9va1NoYXJlQnV0dG9uLFxuICAgIEZhY2Vib29rSWNvbixcbiAgICBFbWFpbEljb24sXG4gICAgV2hhdHNhcHBJY29uLFxuICAgIFR3aXR0ZXJJY29uLFxuICAgIEhhdGVuYVNoYXJlQnV0dG9uLFxuICAgIEluc3RhcGFwZXJTaGFyZUJ1dHRvbixcbiAgICBMaW5lU2hhcmVCdXR0b24sXG4gICAgTGlua2VkaW5TaGFyZUJ1dHRvbixcbiAgICBMaXZlam91cm5hbFNoYXJlQnV0dG9uLFxuICAgIE1haWxydVNoYXJlQnV0dG9uLFxuICAgIE9LU2hhcmVCdXR0b24sXG4gICAgUGludGVyZXN0U2hhcmVCdXR0b24sXG4gICAgUG9ja2V0U2hhcmVCdXR0b24sXG4gICAgUmVkZGl0U2hhcmVCdXR0b24sXG4gICAgVGVsZWdyYW1TaGFyZUJ1dHRvbixcbiAgICBUZWxlZ3JhbUljb24sXG4gICAgVHVtYmxyU2hhcmVCdXR0b24sXG4gICAgVHdpdHRlclNoYXJlQnV0dG9uLFxuICAgIFZpYmVyU2hhcmVCdXR0b24sXG4gICAgVktTaGFyZUJ1dHRvbixcbiAgICBXaGF0c2FwcFNoYXJlQnV0dG9uLFxuICAgIFdvcmtwbGFjZVNoYXJlQnV0dG9uLFxuICAgIEluc3RhcGFwZXJJY29uLFxufSBmcm9tIFwicmVhY3Qtc2hhcmVcIjtcblxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgICAgICBtYXJnaW5SaWdodDogJy01MCUnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIH0sXG59O1xuXG5cbmNvbnN0IE1vZGFsQ29udGVudCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0SXNPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgICAgICAgc2V0SXNPcGVuKHRydWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFmdGVyT3Blbk1vZGFsKCkge1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgICB9XG5cbiAgIGNvbnN0IHNoYXJlVXJsPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj00dDF5NWRDNld4WVwiXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwnPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17aW1nfSBhbHQ9XCJMb2dvXCIgb25DbGljaz17b3Blbk1vZGFsfSBjbGFzc05hbWU9J21vZGFsX19idG4nLz57XCIgXCJ9XG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBpc09wZW49e21vZGFsSXNPcGVufVxuICAgICAgICAgICAgICAgIG9uQWZ0ZXJPcGVuPXthZnRlck9wZW5Nb2RhbH1cbiAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICBzdHlsZT17Y3VzdG9tU3R5bGVzfVxuICAgICAgICAgICAgICAgIGNvbnRlbnRMYWJlbD1cIkV4YW1wbGUgTW9kYWxcIlxuICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIGNsb3NlSWNvblwiIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDM+0J/QvtC00LXQu9C40YLRjNGB0Y88L2gzPlxuICAgICAgICAgICAgICAgICAgICA8RmFjZWJvb2tTaGFyZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtzaGFyZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkRlbW9fX3NvbWUtbmV0d29ya19fc2hhcmUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiBzaXplPXszMn0gcm91bmQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWNlYm9va1NoYXJlQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8V2hhdHNhcHBTaGFyZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtzaGFyZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkRlbW9fX3NvbWUtbmV0d29ya19fc2hhcmUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFdoYXRzYXBwSWNvbiBzaXplPXszMn0gcm91bmQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9XaGF0c2FwcFNoYXJlQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUZWxlZ3JhbVNoYXJlQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NoYXJlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiRGVtb19fc29tZS1uZXR3b3JrX19zaGFyZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVsZWdyYW1JY29uLz5cbiAgICAgICAgICAgICAgICAgICAgPC9UZWxlZ3JhbVNoYXJlQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7Lyo8SW5zdGFncmFtU2hhcmVCdXR0b24qL31cbiAgICAgICAgICAgICAgICAgICAgey8qICAgIHVybD17c2hhcmVVcmx9Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKiAgICBjbGFzc05hbWU9XCJEZW1vX19zb21lLW5ldHdvcmtfX3NoYXJlLWJ1dHRvblwiKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKj4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qICAgIDxJbnN0YXBhcGVySWNvbi8+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjwvSW5zdGFncmFtU2hhcmVCdXR0b24+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgPElubGluZUZvbGxvd0J1dHRvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ0ZvbGxvdyB1czonLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbl9lbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uX3BvczogJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50OiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldHdvcmtzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnN0YWdyYW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YWdyYW06ICdzaGFyZXRoaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IDMyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNpbmc6IDhcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwnPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9NHQxeTVkQzZXeFlcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RhbENvbnRlbnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTW9kYWwiLCJJbWFnZSIsImltZyIsIklubGluZUZvbGxvd0J1dHRvbnMiLCJFbWFpbFNoYXJlQnV0dG9uIiwiRmFjZWJvb2tTaGFyZUJ1dHRvbiIsIkZhY2Vib29rSWNvbiIsIkVtYWlsSWNvbiIsIldoYXRzYXBwSWNvbiIsIlR3aXR0ZXJJY29uIiwiSGF0ZW5hU2hhcmVCdXR0b24iLCJJbnN0YXBhcGVyU2hhcmVCdXR0b24iLCJMaW5lU2hhcmVCdXR0b24iLCJMaW5rZWRpblNoYXJlQnV0dG9uIiwiTGl2ZWpvdXJuYWxTaGFyZUJ1dHRvbiIsIk1haWxydVNoYXJlQnV0dG9uIiwiT0tTaGFyZUJ1dHRvbiIsIlBpbnRlcmVzdFNoYXJlQnV0dG9uIiwiUG9ja2V0U2hhcmVCdXR0b24iLCJSZWRkaXRTaGFyZUJ1dHRvbiIsIlRlbGVncmFtU2hhcmVCdXR0b24iLCJUZWxlZ3JhbUljb24iLCJUdW1ibHJTaGFyZUJ1dHRvbiIsIlR3aXR0ZXJTaGFyZUJ1dHRvbiIsIlZpYmVyU2hhcmVCdXR0b24iLCJWS1NoYXJlQnV0dG9uIiwiV2hhdHNhcHBTaGFyZUJ1dHRvbiIsIldvcmtwbGFjZVNoYXJlQnV0dG9uIiwiSW5zdGFwYXBlckljb24iLCJjdXN0b21TdHlsZXMiLCJjb250ZW50IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwibWFyZ2luUmlnaHQiLCJ0cmFuc2Zvcm0iLCJNb2RhbENvbnRlbnQiLCJvcGVuTW9kYWwiLCJzZXRJc09wZW4iLCJhZnRlck9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2hhcmVVcmwiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwiaXNPcGVuIiwib25BZnRlck9wZW4iLCJvblJlcXVlc3RDbG9zZSIsInN0eWxlIiwiY29udGVudExhYmVsIiwiaSIsImgzIiwidXJsIiwic2l6ZSIsInJvdW5kIiwiY29uZmlnIiwiYWN0aW9uIiwiYWN0aW9uX2VuYWJsZSIsImFjdGlvbl9wb3MiLCJhbGlnbm1lbnQiLCJjb2xvciIsImVuYWJsZWQiLCJuZXR3b3JrcyIsInBhZGRpbmciLCJwcm9maWxlcyIsImluc3RhZ3JhbSIsInJhZGl1cyIsInNwYWNpbmciLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/main-news/modal.js\n");

/***/ })

});