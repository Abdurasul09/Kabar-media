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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_images_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/подробнее.svg */ \"./public/images/подробнее.svg\");\n/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-share */ \"./node_modules/react-share/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar customStyles = {\n    content: {\n        top: '50%',\n        left: '50%',\n        right: 'auto',\n        bottom: 'auto',\n        marginRight: '-50%',\n        transform: 'translate(-50%, -50%)'\n    }\n};\nvar ModalContent = function() {\n    var openModal = function openModal() {\n        setIsOpen(true);\n    };\n    var afterOpenModal = function afterOpenModal() {\n    };\n    var closeModal = function closeModal() {\n        setIsOpen(false);\n    };\n    _s1();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), modalIsOpen = ref[0], setIsOpen = ref[1];\n    var shareUrl = \"https://www.youtube.com/watch?v=4t1y5dC6WxY\";\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"modal\",\n        __source: {\n            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n            lineNumber: 65,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                src: _public_images_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                alt: \"Logo\",\n                onClick: openModal,\n                className: \"modal__btn\",\n                __source: {\n                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {\n                isOpen: modalIsOpen,\n                onAfterOpen: afterOpenModal,\n                onRequestClose: closeModal,\n                style: customStyles,\n                contentLabel: \"Example Modal\",\n                __source: {\n                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"i\", {\n                        className: \"fas fa-times closeIcon\",\n                        onClick: closeModal,\n                        __source: {\n                            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                            lineNumber: 75,\n                            columnNumber: 17\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        __source: {\n                            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                            lineNumber: 76,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: \"Поделиться\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_5__.FacebookShareButton, {\n                                url: shareUrl,\n                                className: \"Demo__some-network__share-button\",\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_5__.FacebookIcon, {\n                                    size: 32,\n                                    round: true,\n                                    __source: {\n                                        fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_5__.WhatsappShareButton, {\n                                url: shareUrl,\n                                className: \"Demo__some-network__share-button\",\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_5__.WhatsappIcon, {\n                                    size: 32,\n                                    round: true,\n                                    __source: {\n                                        fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_5__.TelegramShareButton, {\n                                url: shareUrl,\n                                className: \"Demo__some-network__share-button\",\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_5__.TelegramIcon, {\n                                    __source: {\n                                        fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InstagramShareButton, {\n                                url: shareUrl,\n                                className: \"Demo__some-network__share-button\",\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 21\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_share__WEBPACK_IMPORTED_MODULE_5__.InstapaperIcon, {\n                                    __source: {\n                                        fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                        lineNumber: 101,\n                                        columnNumber: 25\n                                    },\n                                    __self: _this\n                                })\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"modal\",\n                        __source: {\n                            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                            lineNumber: 104,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"text\",\n                            value: \"https://www.youtube.com/watch?v=4t1y5dC6WxY\",\n                            __source: {\n                                fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/modal.js\",\n                                lineNumber: 105,\n                                columnNumber: 21\n                            },\n                            __self: _this\n                        })\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s1(ModalContent, \"EOxo+0MXKxyCdUCTWpcfchJ0gFI=\");\n_c = ModalContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalContent);\nvar _c;\n$RefreshReg$(_c, \"ModalContent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL19OX0UvLi9jb21wb25lbnRzL21haW4tbmV3cy9tb2RhbC5qcz81Nzc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBpbWcgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMv0L/QvtC00YDQvtCx0L3QtdC1LnN2Z1wiO1xuXG5pbXBvcnQge1xuICAgIEVtYWlsU2hhcmVCdXR0b24sXG4gICAgRmFjZWJvb2tTaGFyZUJ1dHRvbixcbiAgICBGYWNlYm9va0ljb24sXG4gICAgRW1haWxJY29uLFxuICAgIFdoYXRzYXBwSWNvbixcbiAgICBUd2l0dGVySWNvbixcbiAgICBIYXRlbmFTaGFyZUJ1dHRvbixcbiAgICBJbnN0YXBhcGVyU2hhcmVCdXR0b24sXG4gICAgTGluZVNoYXJlQnV0dG9uLFxuICAgIExpbmtlZGluU2hhcmVCdXR0b24sXG4gICAgTGl2ZWpvdXJuYWxTaGFyZUJ1dHRvbixcbiAgICBNYWlscnVTaGFyZUJ1dHRvbixcbiAgICBPS1NoYXJlQnV0dG9uLFxuICAgIFBpbnRlcmVzdFNoYXJlQnV0dG9uLFxuICAgIFBvY2tldFNoYXJlQnV0dG9uLFxuICAgIFJlZGRpdFNoYXJlQnV0dG9uLFxuICAgIFRlbGVncmFtU2hhcmVCdXR0b24sXG4gICAgVGVsZWdyYW1JY29uLFxuICAgIFR1bWJsclNoYXJlQnV0dG9uLFxuICAgIFR3aXR0ZXJTaGFyZUJ1dHRvbixcbiAgICBWaWJlclNoYXJlQnV0dG9uLFxuICAgIFZLU2hhcmVCdXR0b24sXG4gICAgV2hhdHNhcHBTaGFyZUJ1dHRvbixcbiAgICBXb3JrcGxhY2VTaGFyZUJ1dHRvbixcbiAgICBJbnN0YXBhcGVySWNvbixcbn0gZnJvbSBcInJlYWN0LXNoYXJlXCI7XG5cbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcbiAgICBjb250ZW50OiB7XG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgICByaWdodDogJ2F1dG8nLFxuICAgICAgICBib3R0b206ICdhdXRvJyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICctNTAlJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICB9LFxufTtcblxuXG5jb25zdCBNb2RhbENvbnRlbnQgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbbW9kYWxJc09wZW4sIHNldElzT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gICAgICAgIHNldElzT3Blbih0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZnRlck9wZW5Nb2RhbCgpIHtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgfVxuXG4gICBjb25zdCBzaGFyZVVybD1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9NHQxeTVkQzZXeFlcIlxuICAgIHJldHVybiAoXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsJz5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltZ30gYWx0PVwiTG9nb1wiIG9uQ2xpY2s9e29wZW5Nb2RhbH0gY2xhc3NOYW1lPSdtb2RhbF9fYnRuJy8+e1wiIFwifVxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cbiAgICAgICAgICAgICAgICBvbkFmdGVyT3Blbj17YWZ0ZXJPcGVuTW9kYWx9XG4gICAgICAgICAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XG4gICAgICAgICAgICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlc31cbiAgICAgICAgICAgICAgICBjb250ZW50TGFiZWw9XCJFeGFtcGxlIE1vZGFsXCJcbiAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcyBjbG9zZUljb25cIiBvbkNsaWNrPXtjbG9zZU1vZGFsfS8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPtCf0L7QtNC10LvQuNGC0YzRgdGPPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPEZhY2Vib29rU2hhcmVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2hhcmVVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJEZW1vX19zb21lLW5ldHdvcmtfX3NoYXJlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0ljb24gc2l6ZT17MzJ9IHJvdW5kIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFjZWJvb2tTaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPFdoYXRzYXBwU2hhcmVCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2hhcmVVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJEZW1vX19zb21lLW5ldHdvcmtfX3NoYXJlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxXaGF0c2FwcEljb24gc2l6ZT17MzJ9IHJvdW5kIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvV2hhdHNhcHBTaGFyZUJ1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8VGVsZWdyYW1TaGFyZUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtzaGFyZVVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkRlbW9fX3NvbWUtbmV0d29ya19fc2hhcmUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlbGVncmFtSWNvbi8+XG4gICAgICAgICAgICAgICAgICAgIDwvVGVsZWdyYW1TaGFyZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPEluc3RhZ3JhbVNoYXJlQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NoYXJlVXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiRGVtb19fc29tZS1uZXR3b3JrX19zaGFyZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5zdGFwYXBlckljb24vPlxuICAgICAgICAgICAgICAgICAgICA8L0luc3RhZ3JhbVNoYXJlQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbCc+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj00dDF5NWRDNld4WVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsQ29udGVudDsiXSwibmFtZXMiOlsiUmVhY3QiLCJNb2RhbCIsIkltYWdlIiwiaW1nIiwiRW1haWxTaGFyZUJ1dHRvbiIsIkZhY2Vib29rU2hhcmVCdXR0b24iLCJGYWNlYm9va0ljb24iLCJFbWFpbEljb24iLCJXaGF0c2FwcEljb24iLCJUd2l0dGVySWNvbiIsIkhhdGVuYVNoYXJlQnV0dG9uIiwiSW5zdGFwYXBlclNoYXJlQnV0dG9uIiwiTGluZVNoYXJlQnV0dG9uIiwiTGlua2VkaW5TaGFyZUJ1dHRvbiIsIkxpdmVqb3VybmFsU2hhcmVCdXR0b24iLCJNYWlscnVTaGFyZUJ1dHRvbiIsIk9LU2hhcmVCdXR0b24iLCJQaW50ZXJlc3RTaGFyZUJ1dHRvbiIsIlBvY2tldFNoYXJlQnV0dG9uIiwiUmVkZGl0U2hhcmVCdXR0b24iLCJUZWxlZ3JhbVNoYXJlQnV0dG9uIiwiVGVsZWdyYW1JY29uIiwiVHVtYmxyU2hhcmVCdXR0b24iLCJUd2l0dGVyU2hhcmVCdXR0b24iLCJWaWJlclNoYXJlQnV0dG9uIiwiVktTaGFyZUJ1dHRvbiIsIldoYXRzYXBwU2hhcmVCdXR0b24iLCJXb3JrcGxhY2VTaGFyZUJ1dHRvbiIsIkluc3RhcGFwZXJJY29uIiwiY3VzdG9tU3R5bGVzIiwiY29udGVudCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIm1hcmdpblJpZ2h0IiwidHJhbnNmb3JtIiwiTW9kYWxDb250ZW50Iiwib3Blbk1vZGFsIiwic2V0SXNPcGVuIiwiYWZ0ZXJPcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNoYXJlVXJsIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwib25DbGljayIsImlzT3BlbiIsIm9uQWZ0ZXJPcGVuIiwib25SZXF1ZXN0Q2xvc2UiLCJzdHlsZSIsImNvbnRlbnRMYWJlbCIsImkiLCJoMyIsInVybCIsInNpemUiLCJyb3VuZCIsIkluc3RhZ3JhbVNoYXJlQnV0dG9uIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/main-news/modal.js\n");

/***/ })

});