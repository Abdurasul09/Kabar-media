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

/***/ "./components/main-news/main-news-video.js":
/*!*************************************************!*\
  !*** ./components/main-news/main-news-video.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainNewsVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_actions_banner_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/banner-action */ \"./store/actions/banner-action.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! video-react */ \"./node_modules/video-react/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction MainNewsVideo() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state;\n    }), banners = ref.banner.banners;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        dispatch((0,_store_actions_banner_action__WEBPACK_IMPORTED_MODULE_4__.bannerAction)());\n    }, []);\n    var settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        arrows: true,\n        autoplay: Boolean\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"main-video\",\n        __source: {\n            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        },\n        __self: this,\n        children: banners ? banners.map(function(item) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                __source: {\n                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                    lineNumber: 36,\n                    columnNumber: 25\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_slick__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _objectSpread({\n                    }, settings, {\n                        __source: {\n                            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                            lineNumber: 37,\n                            columnNumber: 29\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                src: item.images[0].image,\n                                alt: \"img\",\n                                className: \"bannerImg\",\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 29\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                src: item.images[1].image,\n                                alt: \"img\",\n                                className: \"bannerImg\",\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 29\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                src: item.images[3].image,\n                                alt: \"img\",\n                                className: \"bannerImg\",\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 29\n                                },\n                                __self: _this\n                            })\n                        ]\n                    })),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/article/\".concat(item.id),\n                        __source: {\n                            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                            lineNumber: 42,\n                            columnNumber: 33\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                            __source: {\n                                fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                                lineNumber: 43,\n                                columnNumber: 37\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 41\n                                },\n                                __self: _this,\n                                children: item.title\n                            })\n                        })\n                    }, item.id)\n                ]\n            }, item.id);\n        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n            __source: {\n                fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                lineNumber: 48,\n                columnNumber: 28\n            },\n            __self: this,\n            children: \"Жаңылык жок\"\n        })\n    }));\n};\n_s(MainNewsVideo, \"goGMtlSjpz6TbfA7sV9jQd6H7ek=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = MainNewsVideo;\nvar _c;\n$RefreshReg$(_c, \"MainNewsVideo\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4tbmV3cy9tYWluLW5ld3MtdmlkZW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ2U7QUFDZDtBQUN3QjtBQUNsQztBQUNJO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkIsUUFBUSxDQUFDUyxhQUFhLEdBQUcsQ0FBQzs7O0lBQ3JDLEdBQUssQ0FBQ0MsTUFBTSxHQUFHVixzREFBUztJQUN4QixHQUFLLENBQUNXLFFBQVEsR0FBR1Ysd0RBQVc7SUFDNUIsR0FBSyxDQUVEQyxHQUE2QixHQUE3QkEsd0RBQVcsQ0FBQyxRQUFRLENBQVBVLEtBQUs7UUFBS0EsTUFBTSxDQUFOQSxLQUFLO1FBRG5CQyxPQUFPLEdBQ2hCWCxHQUE2QixDQUQ3QlksTUFBTSxDQUFHRCxPQUFPO0lBRXBCVCxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiTyxRQUFRLENBQUNOLDBFQUFZO0lBQ3pCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFHTCxHQUFLLENBQUNVLFFBQVEsR0FBRyxDQUFDO1FBQ2RDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLEtBQUssRUFBRSxHQUFHO1FBQ1ZDLFlBQVksRUFBRSxDQUFDO1FBQ2ZDLGNBQWMsRUFBRSxDQUFDO1FBQ2pCQyxNQUFNLEVBQUUsSUFBSTtRQUNaQyxRQUFRLEVBQUVDLE9BQU87SUFDckIsQ0FBQztJQUdELE1BQU0sc0VBQUdDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7a0JBQzFCWixPQUFPLEdBRUFBLE9BQU8sQ0FBQ2EsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSTswQkFDYixNQUFNLHlEQUFMSCxDQUFHOzs7Ozs7OzswRkFDQ2pCLG1EQUFNO3VCQUFLUSxRQUFROzs7Ozs7OztpR0FDbkJhLENBQUc7Z0NBQUNDLEdBQUcsRUFBRUYsSUFBSSxDQUFDRyxNQUFNLENBQUMsQ0FBQyxFQUFFQyxLQUFLO2dDQUFFQyxHQUFHLEVBQUMsQ0FBSztnQ0FBQ1AsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7O2lHQUM5REcsQ0FBRztnQ0FBQ0MsR0FBRyxFQUFFRixJQUFJLENBQUNHLE1BQU0sQ0FBQyxDQUFDLEVBQUVDLEtBQUs7Z0NBQUVDLEdBQUcsRUFBQyxDQUFLO2dDQUFDUCxTQUFTLEVBQUMsQ0FBVzs7Ozs7Ozs7aUdBQzlERyxDQUFHO2dDQUFDQyxHQUFHLEVBQUVGLElBQUksQ0FBQ0csTUFBTSxDQUFDLENBQUMsRUFBRUMsS0FBSztnQ0FBRUMsR0FBRyxFQUFDLENBQUs7Z0NBQUNQLFNBQVMsRUFBQyxDQUFXOzs7Ozs7Ozs7O3lGQUUxRG5CLGtEQUFJO3dCQUFDMkIsSUFBSSxFQUFHLENBQVMsV0FBVSxPQUFSTixJQUFJLENBQUNPLEVBQUU7Ozs7Ozs7dUdBQzFCQyxDQUFDOzs7Ozs7OzJHQUNHQyxDQUFFOzs7Ozs7OzBDQUFFVCxJQUFJLENBQUNVLEtBQUs7Ozt1QkFGaUJWLElBQUksQ0FBQ08sRUFBRTs7ZUFON0NQLElBQUksQ0FBQ08sRUFBRTtrRkFZYkksQ0FBRTs7Ozs7OztzQkFBQyxDQUFXOzs7QUFJMUMsQ0FBQztHQTFDdUI3QixhQUFhOztRQUNsQlQsa0RBQVM7UUFDUEMsb0RBQVc7UUFHeEJDLG9EQUFXOzs7S0FMS08sYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW4tbmV3cy9tYWluLW5ld3MtdmlkZW8uanM/NDUwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtiYW5uZXJBY3Rpb259IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2Jhbm5lci1hY3Rpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwidmlkZW8tcmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluTmV3c1ZpZGVvKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7XG4gICAgICAgIGJhbm5lcjoge2Jhbm5lcnN9LFxuICAgIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChiYW5uZXJBY3Rpb24oKSk7XG4gICAgfSwgW10pO1xuXG5cbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IEJvb2xlYW4sXG4gICAgfTtcblxuXG4gICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cIm1haW4tdmlkZW9cIj5cbiAgICAgICAgICAgIHtiYW5uZXJzID9cbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIGJhbm5lcnMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlc1swXS5pbWFnZX0gYWx0PVwiaW1nXCIgY2xhc3NOYW1lPSdiYW5uZXJJbWcnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZXNbMV0uaW1hZ2V9IGFsdD1cImltZ1wiIGNsYXNzTmFtZT0nYmFubmVySW1nJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1hZ2VzWzNdLmltYWdlfSBhbHQ9XCJpbWdcIiBjbGFzc05hbWU9J2Jhbm5lckltZycvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2FydGljbGUvJHtpdGVtLmlkfWB9IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2l0ZW0udGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpKSA6ICg8aDI+0JbQsNKj0YvQu9GL0Log0LbQvtC6PC9oMj4pfVxuXG5cbiAgICA8L2Rpdj4pO1xufVxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJiYW5uZXJBY3Rpb24iLCJMaW5rIiwiU2xpZGVyIiwiUGxheWVyIiwiTWFpbk5ld3NWaWRlbyIsInJvdXRlciIsImRpc3BhdGNoIiwic3RhdGUiLCJiYW5uZXJzIiwiYmFubmVyIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiYXV0b3BsYXkiLCJCb29sZWFuIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImltZyIsInNyYyIsImltYWdlcyIsImltYWdlIiwiYWx0IiwiaHJlZiIsImlkIiwiYSIsImgxIiwidGl0bGUiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/main-news/main-news-video.js\n");

/***/ })

});