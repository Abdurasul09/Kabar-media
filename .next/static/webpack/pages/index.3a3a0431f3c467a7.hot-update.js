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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainNewsVideo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_actions_banner_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/banner-action */ \"./store/actions/banner-action.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var video_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! video-react */ \"./node_modules/video-react/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction MainNewsVideo() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    var ref = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function(state) {\n        return state;\n    }), banners = ref.banner.banners;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        dispatch((0,_store_actions_banner_action__WEBPACK_IMPORTED_MODULE_4__.bannerAction)());\n    }, []);\n    var settings = {\n        dots: true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        arrows: true,\n        autoplay: Boolean\n    };\n    // const outArticleInfo = (item) => {\n    //     if(item.media){\n    //         if(item.media.video){\n    //             return (\n    //                 <iframe\n    //                     width=\"560\"\n    //                     height=\"315\"\n    //                     src={item.media.video}\n    //                     title=\"YouTube video player\"\n    //                     frameBorder=\"0\"\n    //                     allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n    //                     allowFullScreen\n    //                 />\n    //             )\n    //         }\n    //         if(item.media.file){\n    //             return (\n    //                 <Player\n    //                     playsInline\n    //                     poster=\"/assets/poster.png\"\n    //                     src={item.media.file}\n    //                 />\n    //             )\n    //         }\n    //     }else{\n    //         return (\n    //             <Slider {...settings} >\n    //                 {item.images.map((elem, i) => (\n    //                     <img src={elem.image} alt=\"Med\"/>\n    //                 ))}\n    //             </Slider>\n    //         )\n    //     }\n    // }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"main-video\",\n        __source: {\n            fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n            lineNumber: 68,\n            columnNumber: 9\n        },\n        __self: this,\n        children: banners ? banners.map(function(item) {\n            /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_slick__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _objectSpread({\n            }, settings, {\n                __source: {\n                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                    lineNumber: 73,\n                    columnNumber: 29\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                        lineNumber: 74,\n                        columnNumber: 29\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                            src: item.images[0].image,\n                            alt: \"img\",\n                            className: \"bannerImg\",\n                            __source: {\n                                fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                                lineNumber: 75,\n                                columnNumber: 33\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            href: \"/article/\".concat(item.id),\n                            __source: {\n                                fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                                lineNumber: 76,\n                                columnNumber: 33\n                            },\n                            __self: _this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                __source: {\n                                    fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 37\n                                },\n                                __self: _this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                    __source: {\n                                        fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 41\n                                    },\n                                    __self: _this,\n                                    children: item.title\n                                })\n                            })\n                        }, item.id)\n                    ]\n                }, item.id)\n            }));\n        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n            __source: {\n                fileName: \"/Users/user/Desktop/kabar-media-main/components/main-news/main-news-video.js\",\n                lineNumber: 84,\n                columnNumber: 26\n            },\n            __self: this,\n            children: \"Жаңылык жок\"\n        })\n    }));\n};\n_s(MainNewsVideo, \"goGMtlSjpz6TbfA7sV9jQd6H7ek=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = MainNewsVideo;\nvar _c;\n$RefreshReg$(_c, \"MainNewsVideo\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4tbmV3cy9tYWluLW5ld3MtdmlkZW8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ2U7QUFDZDtBQUN3QjtBQUNsQztBQUNJO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHbkIsUUFBUSxDQUFDUyxhQUFhLEdBQUcsQ0FBQzs7O0lBQ3JDLEdBQUssQ0FBQ0MsTUFBTSxHQUFHVixzREFBUztJQUN4QixHQUFLLENBQUNXLFFBQVEsR0FBR1Ysd0RBQVc7SUFDNUIsR0FBSyxDQUVEQyxHQUE2QixHQUE3QkEsd0RBQVcsQ0FBQyxRQUFRLENBQVBVLEtBQUs7UUFBS0EsTUFBTSxDQUFOQSxLQUFLO1FBRG5CQyxPQUFPLEdBQ2hCWCxHQUE2QixDQUQ3QlksTUFBTSxDQUFHRCxPQUFPO0lBRXBCVCxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiTyxRQUFRLENBQUNOLDBFQUFZO0lBQ3pCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFHTCxHQUFLLENBQUNVLFFBQVEsR0FBRyxDQUFDO1FBQ2RDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLEtBQUssRUFBRSxHQUFHO1FBQ1ZDLFlBQVksRUFBRSxDQUFDO1FBQ2ZDLGNBQWMsRUFBRSxDQUFDO1FBQ2pCQyxNQUFNLEVBQUUsSUFBSTtRQUNaQyxRQUFRLEVBQUVDLE9BQU87SUFDckIsQ0FBQztJQUdELEVBQXFDO0lBQ3JDLEVBQXNCO0lBQ3RCLEVBQWdDO0lBQ2hDLEVBQXVCO0lBQ3ZCLEVBQTBCO0lBQzFCLEVBQWtDO0lBQ2xDLEVBQW1DO0lBQ25DLEVBQTZDO0lBQzdDLEVBQW1EO0lBQ25ELEVBQXNDO0lBQ3RDLEVBQXVIO0lBQ3ZILEVBQXNDO0lBQ3RDLEVBQXFCO0lBQ3JCLEVBQWdCO0lBQ2hCLEVBQVk7SUFDWixFQUErQjtJQUMvQixFQUF1QjtJQUN2QixFQUEwQjtJQUMxQixFQUFrQztJQUNsQyxFQUFrRDtJQUNsRCxFQUE0QztJQUM1QyxFQUFxQjtJQUNyQixFQUFnQjtJQUNoQixFQUFZO0lBQ1osRUFBYTtJQUNiLEVBQW1CO0lBQ25CLEVBQXNDO0lBQ3RDLEVBQWtEO0lBQ2xELEVBQXdEO0lBQ3hELEVBQXNCO0lBQ3RCLEVBQXdCO0lBQ3hCLEVBQVk7SUFDWixFQUFRO0lBQ1IsRUFBSTtJQUVKLE1BQU0sc0VBQ0RDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7a0JBR2ZaLE9BQU8sR0FDSEEsT0FBTyxDQUFDYSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJOzBCQUNiLE1BQU0sd0RBQUxwQixtREFBTTtlQUFLUSxRQUFROzs7Ozs7O2dHQUNuQlMsQ0FBRzs7Ozs7Ozs7NkZBQ0NJLENBQUc7NEJBQUNDLEdBQUcsRUFBRUYsSUFBSSxDQUFDRyxNQUFNLENBQUMsQ0FBQyxFQUFFQyxLQUFLOzRCQUFFQyxHQUFHLEVBQUMsQ0FBSzs0QkFBQ1AsU0FBUyxFQUFDLENBQVc7Ozs7Ozs7OzZGQUM5RG5CLGtEQUFJOzRCQUFDMkIsSUFBSSxFQUFHLENBQVMsV0FBVSxPQUFSTixJQUFJLENBQUNPLEVBQUU7Ozs7Ozs7MkdBQzFCQyxDQUFDOzs7Ozs7OytHQUNHQyxDQUFFOzs7Ozs7OzhDQUFFVCxJQUFJLENBQUNVLEtBQUs7OzsyQkFGaUJWLElBQUksQ0FBQ08sRUFBRTs7bUJBRnpDUCxJQUFJLENBQUNPLEVBQUU7O2tGQVVuQkksQ0FBRTs7Ozs7OztzQkFBQyxDQUFXOzs7QUFNeEMsQ0FBQztHQWhGdUI3QixhQUFhOztRQUNsQlQsa0RBQVM7UUFDUEMsb0RBQVc7UUFHeEJDLG9EQUFXOzs7S0FMS08sYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21haW4tbmV3cy9tYWluLW5ld3MtdmlkZW8uanM/NDUwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtiYW5uZXJBY3Rpb259IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2Jhbm5lci1hY3Rpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwidmlkZW8tcmVhY3RcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluTmV3c1ZpZGVvKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgICBjb25zdCB7XG4gICAgICAgIGJhbm5lcjoge2Jhbm5lcnN9LFxuICAgIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChiYW5uZXJBY3Rpb24oKSk7XG4gICAgfSwgW10pO1xuXG5cbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IEJvb2xlYW4sXG4gICAgfTtcblxuXG4gICAgLy8gY29uc3Qgb3V0QXJ0aWNsZUluZm8gPSAoaXRlbSkgPT4ge1xuICAgIC8vICAgICBpZihpdGVtLm1lZGlhKXtcbiAgICAvLyAgICAgICAgIGlmKGl0ZW0ubWVkaWEudmlkZW8pe1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiAoXG4gICAgLy8gICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTYwXCJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMxNVwiXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ubWVkaWEudmlkZW99XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgLy8gICAgICAgICAgICAgICAgIC8+XG4gICAgLy8gICAgICAgICAgICAgKVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYoaXRlbS5tZWRpYS5maWxlKXtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgICAgICAgICA8UGxheWVyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBwbGF5c0lubGluZVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcG9zdGVyPVwiL2Fzc2V0cy9wb3N0ZXIucG5nXCJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5tZWRpYS5maWxlfVxuICAgIC8vICAgICAgICAgICAgICAgICAvPlxuICAgIC8vICAgICAgICAgICAgIClcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfWVsc2V7XG4gICAgLy8gICAgICAgICByZXR1cm4gKFxuICAgIC8vICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfSA+XG4gICAgLy8gICAgICAgICAgICAgICAgIHtpdGVtLmltYWdlcy5tYXAoKGVsZW0sIGkpID0+IChcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtlbGVtLmltYWdlfSBhbHQ9XCJNZWRcIi8+XG4gICAgLy8gICAgICAgICAgICAgICAgICkpfVxuICAgIC8vICAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgIC8vICAgICAgICAgKVxuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXZpZGVvXCI+XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJhbm5lcnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBiYW5uZXJzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZXNbMF0uaW1hZ2V9IGFsdD1cImltZ1wiIGNsYXNzTmFtZT0nYmFubmVySW1nJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYXJ0aWNsZS8ke2l0ZW0uaWR9YH0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57aXRlbS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICApIDogKDxoMj7QltCw0qPRi9C70YvQuiDQttC+0Lo8L2gyPilcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJiYW5uZXJBY3Rpb24iLCJMaW5rIiwiU2xpZGVyIiwiUGxheWVyIiwiTWFpbk5ld3NWaWRlbyIsInJvdXRlciIsImRpc3BhdGNoIiwic3RhdGUiLCJiYW5uZXJzIiwiYmFubmVyIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiYXV0b3BsYXkiLCJCb29sZWFuIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImltZyIsInNyYyIsImltYWdlcyIsImltYWdlIiwiYWx0IiwiaHJlZiIsImlkIiwiYSIsImgxIiwidGl0bGUiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/main-news/main-news-video.js\n");

/***/ })

});