/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"main": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + "." + {"0":"389e03816c8057c2d8fa"}[chunkId] + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"0":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "" + chunkId + ".style." + {"0":"5e3ebe44e814d1eb4e8c"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/salesRecordForJoe";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _components_index_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/index/index.jsx */ \"./src/components/index/index.jsx\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.promise */ \"./node_modules/core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ \"./node_modules/core-js/modules/es6.object.assign.js\");\n/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_5__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\nvar About = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./components/about/about.jsx */ \"./src/components/about/about.jsx\"));\n});\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"HashRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n        fallback: \"loading...\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n        exact: true,\n        path: \"/\",\n        component: _components_index_index_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n        exact: true,\n        path: \"/about\",\n        component: About\n      }))));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById(\"app\"));\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/index/index.jsx":
/*!****************************************!*\
  !*** ./src/components/index/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ \"./src/components/index/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar db = firebase.database();\n\nvar Index =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Index, _React$Component);\n\n  function Index(props) {\n    var _this2;\n\n    _classCallCheck(this, Index);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this2), \"setNoteTitle\", function () {\n      var title = document.querySelector(\"#noteTitle\").value;\n      var note = _this2.state.note;\n      var newNote = {\n        title: title,\n        list: []\n      };\n\n      if (title !== \"\") {\n        note.push(newNote);\n        db.ref(\"note\").set(note);\n\n        _this2.setState({\n          note: note\n        });\n\n        document.querySelector(\"#noteTitle\").value = \"\";\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this2), \"setListItem\", function () {\n      var type = document.querySelector(\"#itemType\").value;\n      var title = document.querySelector(\"#itemTitle\").value;\n      var money = document.querySelector(\"#itemMoney\").value;\n      var newListItem = {\n        title: title,\n        money: money\n      };\n      var note = _this2.state.note;\n\n      if (title !== \"\" && money !== \"\") {\n        note.forEach(function (item) {\n          if (item.title === type) {\n            if (item.list === undefined) item.list = [];\n            item.list.push(newListItem);\n          }\n        });\n        db.ref(\"note\").set(note);\n\n        _this2.setState({\n          note: note\n        });\n\n        document.querySelector(\"#itemTitle\").value = \"\";\n        document.querySelector(\"#itemMoney\").value = \"\";\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this2), \"removeListItem\", function (id) {\n      var getIndex = id.replace(\"note\", \"\");\n      var getIndexAry = getIndex.split(\"\");\n      var note = _this2.state.note;\n      var selectListOrder = getIndexAry[0];\n      var selectListItemOrder = getIndexAry[1];\n      note[selectListOrder].list.splice(selectListItemOrder, 1);\n\n      if (note[selectListOrder].list.length === 0) {\n        note.splice(selectListOrder, 1);\n      }\n\n      ;\n      db.ref(\"note\").set(note);\n\n      _this2.setState({\n        note: note\n      });\n    });\n\n    _this2.state = {\n      note: []\n    };\n    return _this2;\n  }\n\n  _createClass(Index, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this = this;\n\n      db.ref(\"note\").once(\"value\", function (snapshot) {\n        var data = snapshot.val();\n\n        if (data) {\n          _this.setState({\n            note: data\n          });\n        } else {\n          _this.setState({\n            note: []\n          });\n        }\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var note = this.state.note;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"wrapper\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"sidebar\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.recordform\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title\n      }, \"\\u65B0\\u589E\\u5E33\\u672C\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"fieldset\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"legend\", null, \"\\u540D\\u7A31\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputText,\n        type: \"text\",\n        placeholder: \"\\u8ACB\\u8F38\\u5165\\u5E33\\u672C\\u540D\\u7A31\",\n        id: \"noteTitle\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"fieldset\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,\n        type: \"button\",\n        name: \"submit\",\n        value: \"\\u9001\\u51FA\",\n        onClick: this.setNoteTitle\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.recordform\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title\n      }, \"\\u65B0\\u589E\\u8CA8\\u54C1\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"fieldset\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"legend\", null, \"\\u9078\\u64C7\\u5E33\\u672C\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n        name: \"\",\n        id: \"itemType\",\n        className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputText\n      }, note.map(function (item, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n          key: index,\n          value: item.title\n        }, item.title);\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"fieldset\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"legend\", null, \"\\u54C1\\u9805\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputText,\n        type: \"text\",\n        placeholder: \"\\u8ACB\\u8F38\\u5165\\u540D\\u7A31\",\n        id: \"itemTitle\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"fieldset\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"legend\", null, \"\\u91D1\\u984D\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inputText,\n        type: \"number\",\n        placeholder: \"\\u8ACB\\u8F38\\u5165\\u6578\\u5B57\",\n        id: \"itemMoney\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"fieldset\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btn,\n        type: \"button\",\n        name: \"submit\",\n        value: \"\\u9001\\u51FA\",\n        onClick: this.setListItem\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n        className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.aboutLink\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n        to: \"/about\"\n      }, \"about us\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n        className: \"content\"\n      }, note.map(function (noteItem, noteIndex) {\n        var list = noteItem.list;\n        var title = noteItem.title;\n\n        if (list && list.length > 0) {\n          var totalCount = list.map(function (item) {\n            return parseInt(item.money);\n          });\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            key: noteIndex,\n            className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.list\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.list_item\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, title)), list.map(function (list_item, list_index) {\n            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n              key: list_index,\n              className: \"\".concat(_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.list_item, \" clearfix\")\n            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n              id: \"title\".concat(noteIndex).concat(list_index),\n              className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.name\n            }, list_item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n              className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.money\n            }, list_item.money), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n              className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnGroup\n            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n              className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listBtn,\n              onClick: function onClick() {\n                return _this3.removeListItem(\"\".concat(noteIndex).concat(list_index));\n              }\n            }, \"\\u522A\\u9664\")));\n          }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.list_item\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.name\n          }, \"\\u7E3D\\u8A08\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n            className: _index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.money\n          }, totalCount.reduce(function (acc, current) {\n            return acc + current;\n          }, 0))));\n        }\n      })));\n    }\n  }]);\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n//# sourceURL=webpack:///./src/components/index/index.jsx?");

/***/ }),

/***/ "./src/components/index/index.scss":
/*!*****************************************!*\
  !*** ./src/components/index/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"recordform\":\"_2Jv3ZEle0XBy7k_mivVgBb\",\"fadeIn\":\"_2nG-umglBygU6x3EQ6FTPE\",\"fadeBottom\":\"sTxHGT29SA6J3GUwTmL-F\",\"title\":\"_2fmhJ519kq5gXHq5lrBgrz\",\"inputText\":\"sd8U56gKfam-a5VwxAOdv\",\"btn\":\"j17Ro_5t2v-fggGikmVj_\",\"list\":\"_3c-WpQJt3FbKRx1KXv3yFq\",\"list_item\":\"_2p_ZN4sc6BnMh5UxD_NPqf\",\"name\":\"-Ioh0DYbZWyWwTDiYmUml\",\"money\":\"_2le7BnwNFTCRRKkcPU2z6i\",\"btnGroup\":\"_1Xh_GUNMUUSWtmw6L5I8dV\",\"listBtnWrap\":\"_25cx788oIdhGSHPXKY_sWd\",\"listBtn\":\"_1pi9Ch9gtKSUFCSxXws-Q9\",\"aboutLink\":\"lmx_oYCKcomGx-6ozSvyc\"};\n\n//# sourceURL=webpack:///./src/components/index/index.scss?");

/***/ })

/******/ });