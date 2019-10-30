/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/NavHeader */ "./resources/js/components/layouts/NavHeader.vue");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Footer */ "./resources/js/components/layouts/Footer.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  components: {
    NavHeader: _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    if (window.localStorage.getItem("user_id")) {
      this.SetLocalStorage();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(['SetLocalStorage']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contato.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contato.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/NavHeader */ "./resources/js/components/layouts/NavHeader.vue");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Footer */ "./resources/js/components/layouts/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Contato",
  components: {
    NavHeader: _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Direcao.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Direcao.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/NavHeader */ "./resources/js/components/layouts/NavHeader.vue");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Footer */ "./resources/js/components/layouts/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Direcao",
  components: {
    NavHeader: _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/NavHeader */ "./resources/js/components/layouts/NavHeader.vue");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/Footer */ "./resources/js/components/layouts/Footer.vue");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home",
  components: {
    NavHeader: _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    Footer: _layouts_Footer__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    login: function login(state) {
      return state.Login;
    }
  })),
  watch: {
    login: function login() {
      this.login = this.login;
      console.log("mudou");
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['Logout', 'SetLocalStorage']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HorarioAtendimento.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HorarioAtendimento.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/NavHeader */ "./resources/js/components/layouts/NavHeader.vue");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Footer */ "./resources/js/components/layouts/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "HorarioAtendimento",
  components: {
    NavHeader: _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Institucional.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Institucional.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/NavHeader */ "./resources/js/components/layouts/NavHeader.vue");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Footer */ "./resources/js/components/layouts/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    NavHeader: _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publicacoes.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Publicacoes.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/NavHeader */ "./resources/js/components/layouts/NavHeader.vue");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Footer */ "./resources/js/components/layouts/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Publicacoes",
  components: {
    NavHeader: _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuemSomos.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuemSomos.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/NavHeader */ "./resources/js/components/layouts/NavHeader.vue");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Footer */ "./resources/js/components/layouts/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home",
  components: {
    NavHeader: _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SedeRecursos.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SedeRecursos.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/NavHeader */ "./resources/js/components/layouts/NavHeader.vue");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Footer */ "./resources/js/components/layouts/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SedeRecursos",
  components: {
    NavHeader: _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Semear.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Semear.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/NavHeader */ "./resources/js/components/layouts/NavHeader.vue");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Footer */ "./resources/js/components/layouts/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Semear",
  components: {
    NavHeader: _layouts_NavHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _layouts_Footer__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Footer"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/NavHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/NavHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "NavHeader",
  data: function data() {
    return {
      exibirCardObreiro: false,
      obreiro: ""
    };
  },
  created: function created() {
    this.linkObreiroFrequentador();
    console.log("ue"); //     console.log("Component mounted.");
    //  console.log(this.login.data.id)
  },
  beforeMount: function beforeMount() {
    this.obreiro = window.localStorage.getItem("user_obreiro");
    this.linkObreiroFrequentador();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    login: function login(state) {
      return state.Login;
    } // obreiroNumero: state => state.Login.data.obreiro
    // cartao: state => state.Cartao,

  })),
  watch: {
    login: function login() {
      this.login = this.login;
      this.linkObreiroFrequentador();
    },
    obreiro: function obreiro() {
      this.linkObreiroFrequentador();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['Logout', 'SetLocalStorage', 'SelecionarUserCartao']), {
    linkObreiroFrequentador: function linkObreiroFrequentador() {
      if (this.obreiro != 'null' && this.obreiro != '' && this.obreiro != null) {
        this.exibirCardObreiro = true;
        console.log(this.obreiro);
      } else {
        this.exibirCardObreiro = false;
      }
    },
    sair: function sair() {
      this.Logout("");
      this.$router.push({
        name: 'home'
      });
      console.log('saiu');
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Direcao.vue?vue&type=style&index=0&id=5615b43e&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Direcao.vue?vue&type=style&index=0&id=5615b43e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (max-width: 575.98px) {\n.img-logo-home{\n        display:none;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Institucional.vue?vue&type=style&index=0&id=8103da0e&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Institucional.vue?vue&type=style&index=0&id=8103da0e&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/NavHeader.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/NavHeader.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.navbar-toggler {\n    width: 100%;\n    float: none;\n    margin: 0 auto;\n    border-width:0;\n    border-radius:0;\n}\n.container-top{\n    padding-top: 17px;\n    background-color:#ced9eabd;\n    padding-bottom: 17px;\n}\n.font-acolher {\n    font-family: 'Bradley Hand ITC Std';\n}\n.img-fluid.align-center.img-logo {\n    max-width: 130px;\n    display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (max-width: 575.98px) {\n.btn-login-header {\n        text-align: center !important;\n        float: center ! important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Direcao.vue?vue&type=style&index=0&id=5615b43e&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Direcao.vue?vue&type=style&index=0&id=5615b43e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Direcao.vue?vue&type=style&index=0&id=5615b43e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Direcao.vue?vue&type=style&index=0&id=5615b43e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Institucional.vue?vue&type=style&index=0&id=8103da0e&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Institucional.vue?vue&type=style&index=0&id=8103da0e&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Institucional.vue?vue&type=style&index=0&id=8103da0e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Institucional.vue?vue&type=style&index=0&id=8103da0e&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/NavHeader.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/NavHeader.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavHeader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/NavHeader.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=template&id=332fccf4&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/App.vue?vue&type=template&id=332fccf4& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contato.vue?vue&type=template&id=12adaae2&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Contato.vue?vue&type=template&id=12adaae2& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("nav-header"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("Footer")],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c("div", { staticClass: "col-md-3" }, [
          _c("img", {
            staticClass: "img-fluid align-center img-logo-home",
            attrs: { src: "/../../acolher/public/img/logo.png", alt: "" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row row-space" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("h2", { staticClass: "text-center" }, [_vm._v("CONTATO")]),
          _vm._v(" "),
          _c("h4", { staticClass: "text-center text-primary" }, [
            _vm._v("acolher.instituto@hotmail.com")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "\nO Acolher - Instituto Kardecista de Estudos e Amparo está localizado em Guarulhos / São Paulo:"
            ),
            _c("br"),
            _vm._v("\nVeja a nossa localização no mapa.\n                ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col" }, [
              _c("iframe", {
                staticStyle: { border: "0" },
                attrs: {
                  src:
                    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.3936132496056!2d-46.521121884966846!3d-23.44626236323707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef53380afd30d%3A0xb268a0091af97b8d!2sR.+Ant%C3%B4nio+Crist%C3%B3v%C3%A3o%2C+134+-+Jardim+Bom+Clima%2C+Guarulhos+-+SP%2C+07122-120!5e0!3m2!1spt-BR!2sbr!4v1545153504707",
                  width: "100%",
                  height: "400",
                  frameborder: "0",
                  allowfullscreen: ""
                }
              })
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Direcao.vue?vue&type=template&id=5615b43e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Direcao.vue?vue&type=template&id=5615b43e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("nav-header"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("Footer")],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c("div", { staticClass: "col-md-3" }, [
          _c("img", {
            staticClass: "img-fluid align-center img-logo-home",
            attrs: { src: "/../../acolher/public/img/logo.png", alt: "" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row row-space" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("h2", { staticClass: "text-center" }, [_vm._v("DIREÇÃO")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("\nEm atendimento à "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("legislação vigente,")
            ]),
            _vm._v(" o Instituto \n"),
            _c("span", { staticClass: "font-weight-bold text-primary" }, [
              _vm._v("Acolher")
            ]),
            _vm._v(" é uma \n"),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("organização religiosa,")
            ]),
            _vm._v(" \ncom "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("Estatuto")
            ]),
            _vm._v(" e "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("Regimento Interno")
            ]),
            _vm._v("\n devidamente registrados."),
            _c("br"),
            _c("br"),
            _vm._v("\n\nO Instituto "),
            _c("span", { staticClass: "font-weight-bold text-primary" }, [
              _vm._v("Acolher")
            ]),
            _vm._v(
              " possui associados, \ndiretoria e conselho administrativo legalmente \nconstituídos "
            ),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("tão e somente")
            ]),
            _vm._v(" para a \n"),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("finalidade formal.")
            ]),
            _c("br"),
            _c("br"),
            _vm._v("\n\nSabedores que o "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("trabalho")
            ]),
            _vm._v(" realizado com \n"),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v(
                "amor, disciplina, dedicação e desprendimento, \nprescinde de títulos e cargos"
              )
            ]),
            _vm._v(" e produz os "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("melhores frutos,")
            ]),
            _vm._v("\n para o desempenho das "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("atividades práticas,")
            ]),
            _vm._v(" o Instituto \n "),
            _c("span", { staticClass: "font-weight-bold text-primary" }, [
              _vm._v("Acolher")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("não confere cargos aos seus integrantes,")
            ]),
            _vm._v(" \n recebendo os mesmos, "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("atribuições")
            ]),
            _vm._v(" e \n "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("responsabilidades")
            ]),
            _vm._v(" de acordo com seus \n "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("conhecimentos")
            ]),
            _vm._v(" e "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("disponibilidades")
            ]),
            _vm._v("\n  e em conformidade aos "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("propósitos")
            ]),
            _vm._v(" do \n  "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("Instituto.")
            ]),
            _c("br"),
            _c("br"),
            _vm._v("\n\nPara o "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("adequado equilíbrio")
            ]),
            _vm._v(" de nossos \n"),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("pensamentos e ações")
            ]),
            _vm._v(
              " nos valemos da \nseguinte instrução trazida por Allan Kardec: “O "
            ),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("egoísmo,")
            ]),
            _vm._v("\n o "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("orgulho")
            ]),
            _vm._v(", a "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("vaidade")
            ]),
            _vm._v(", \na "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("ambição")
            ]),
            _vm._v(", a "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("cupidez")
            ]),
            _vm._v(", o \n"),
            _c("span", { staticClass: "font-weight-bold" }, [_vm._v("ódio")]),
            _vm._v(", a "),
            _c("span", { staticClass: "font-weight-bold" }, [_vm._v("inveja")]),
            _vm._v(", o \n"),
            _c("span", { staticClass: "font-weight-bold" }, [_vm._v("ciúme")]),
            _vm._v(", a "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("maledicência")
            ]),
            _vm._v("\n são para a "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("alma ervas venenosas")
            ]),
            _vm._v(" das quais é preciso a \n "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("cada dia arrancar algumas hastes,")
            ]),
            _vm._v(" \ne que têm como "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("contraveneno:")
            ]),
            _vm._v(" a \n"),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("caridade")
            ]),
            _vm._v(" e a "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("humildade”.")
            ]),
            _c("br"),
            _c("br"),
            _vm._v("\n\nPor fim, valemo-nos do precioso axioma: "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("Vigiai e Orai,")
            ]),
            _vm._v("\n e acrescentamos "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("Acolhei!")
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card card-default" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Example Component")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm._v(
                "\n                    I'm an example component.\n                "
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("nav-header"),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _c("div", { staticClass: "row text-center justify-content-center" }, [
          !_vm.login.data.id
            ? _c(
                "div",
                { staticClass: "col-12 col-lg-5 col-md-5 col-5" },
                [
                  _vm._v("\n                    (Ainda não possuo cadastro)"),
                  _c("br"),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/register" } }, [
                    _c("button", { staticClass: "btn btn-primary btn-sm" }, [
                      _vm._v("Cadastrar")
                    ])
                  ])
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.login.data.id
            ? _c(
                "div",
                { staticClass: "col-12 col-lg-5 col-md-5 col-5" },
                [
                  _vm._v("\n                    (Já possuo cadastro)"),
                  _c("br"),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/login" } }, [
                    _c("button", { staticClass: "btn btn-success btn-sm" }, [
                      _vm._v("Login")
                    ])
                  ])
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.login.data.id
            ? _c(
                "div",
                { staticClass: "col-12 col-lg-5 col-md-5 col-5" },
                [
                  _c("br"),
                  _vm._v(" "),
                  _c("router-link", { attrs: { to: "/atendimento" } }, [
                    _c("button", { staticClass: "btn btn-primary btn-sm" }, [
                      _vm._v("Solicitar Atendimento")
                    ])
                  ])
                ],
                1
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("br")
      ]),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-md-center" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c("img", {
          staticClass: "img-fluid align-center img-logo-home",
          attrs: { src: "/../../acolher/public/img/logo.png", alt: "" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row row-space" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("h2", { staticClass: "text-center" }, [
          _vm._v("Atendimentos do Instituto "),
          _c(
            "span",
            { staticClass: "font-weight-bold text-primary font-acolher" },
            [_vm._v("Acolher")]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-md-center" }, [
      _c("div", { staticClass: "col-12 col-md-8 col-lg-8" }, [
        _c("img", {
          staticClass: "img-fluid",
          attrs: { src: "/../../acolher/public/img/home/horarios.png", alt: "" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row row-space text-center" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("p", [
          _vm._v(
            "\n                        A solicitação de atendimento para atividades do Acolher deve ser feita através de cadastro:\n                    "
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HorarioAtendimento.vue?vue&type=template&id=85d8d18e&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HorarioAtendimento.vue?vue&type=template&id=85d8d18e& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("nav-header"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("Footer")],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c("div", { staticClass: "col-md-3" }, [
          _c("img", {
            staticClass: "img-fluid align-center img-logo-home",
            attrs: { src: "/../../acolher/public/img/logo.png", alt: "" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row row-space" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("h2", { staticClass: "text-center" }, [
            _vm._v("HORARIO DE ATENDIMENTO")
          ]),
          _vm._v(" "),
          _c("h3", { staticClass: "text-center" }, [
            _vm._v("veja abaixo as atividades e horários de atendimento:\n")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: {
                  src:
                    "/../../acolher/public/img/horarioatendimento/atendimento1.png",
                  alt: ""
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _c("br"),
          _c("br"),
          _vm._v(" "),
          _c("h4", { staticClass: "text-center" }, [
            _vm._v('veja abaixo as datas de atendimento do "obreiros da luz":')
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row  row-space justify-content-center" }, [
            _c("div", { staticClass: "col-12 text-center" }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: {
                  src:
                    "/../../acolher/public/img/horarioatendimento/calendario2.png",
                  alt: ""
                }
              })
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Institucional.vue?vue&type=template&id=8103da0e&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Institucional.vue?vue&type=template&id=8103da0e&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("nav-header"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("Footer")],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c("div", { staticClass: "col-md-3" }, [
          _c("img", {
            staticClass: "img-fluid align-center img-logo-home",
            attrs: { src: "/../../acolher/public/img/logo.png", alt: "" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row row-space" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "row row-space" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("h2", { staticClass: "text-center" }, [_vm._v("QUEM SOMOS")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                    O Instituto Acolher resulta da associação de integrantes de\n                    "
                ),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("diferentes grupos cristãos ")
                ]),
                _vm._v(
                  " de trabalho,\n                    tendo todos eles como objetivos: o "
                ),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("aprimoramento espiritual")
                ]),
                _vm._v("\n                    através da incessante busca da "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("verdadeira reforma íntima")
                ]),
                _vm._v(";\n                    e as "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("práticas do amor")
                ]),
                _vm._v(" e de "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("apoio\n                        ao próximo")
                ]),
                _vm._v(".\n\n                    "),
                _c("br"),
                _c("br"),
                _vm._v("\n                    O Instituto tem como "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("pilar de sustentação")
                ]),
                _vm._v("\n                    os "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("fundamentos")
                ]),
                _vm._v(
                  " codificados por Allan Kardec,\n                    em sua "
                ),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("tríplice concepção: Ciência, Filosofia e Religião")
                ]),
                _vm._v(".\n                    "),
                _c("br"),
                _vm._v(
                  "\n                    Seguindo as diretrizes divulgadas pelo nobre codificador, os integrantes do\n                    "
                ),
                _c("span", { staticClass: "text-primary font-weight-bold" }, [
                  _vm._v("Acolher")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("alicerçam")
                ]),
                _vm._v("\n                    seus trabalhos na "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("fé raciocinada")
                ]),
                _vm._v(" e aprimorada através do\n                    "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("estudo constante")
                ]),
                _vm._v(
                  " e cuidadoso, procurando afastarem-se de\n                    “pré-conceitos” e\n                    julgamentos, "
                ),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("alimentando o conhecer")
                ]),
                _vm._v(
                  " e sendo\n                    sabedores que “possuímos em nós mesmos, pelo pensamento e a vontade, um poder de ação que\n                    se estende muito além dos limites de nossa esfera corpórea”.\n\n                    "
                ),
                _c("br"),
                _c("br"),
                _vm._v("\n                    Conscientes da palavra do "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("Nosso Mestre Jesus")
                ]),
                _vm._v(",\n                    segundo a qual, "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("não há salvação fora da caridade")
                ]),
                _vm._v(",\n                    o "),
                _c("span", { staticClass: "font-weight-bold text-primary" }, [
                  _vm._v("Acolher")
                ]),
                _vm._v(" tem como propósito a\n                    "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("união de esforços")
                ]),
                _vm._v(" dos\n                    "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("diferentes grupos ")
                ]),
                _vm._v(
                  "que o constitui para\n                    auxiliar no "
                ),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("aprofundamento dos estudos e trabalhos preexistentes")
                ]),
                _vm._v(
                  "\n                    à sua criação, como também, objetiva\n                    "
                ),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("planejar e implementar novos projetos")
                ]),
                _vm._v(" voltados\n                    "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("à caridade")
                ]),
                _vm._v(".\n\n\n                    "),
                _c("br"),
                _c("br"),
                _vm._v(
                  "\n                    Fazendo jus ao seu nome, o Instituto tem como\n                    "
                ),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("regra precípua")
                ]),
                _vm._v(" a prática do\n                    "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("acolher: recebendo")
                ]),
                _vm._v("\n                    os irmãos, "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("acolhendo-os")
                ]),
                _vm._v(" e\n                    "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("aceitando-os")
                ]),
                _vm._v(", sempre com\n                    "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("sorriso verdadeiro e amável")
                ]),
                _vm._v(", seguido de\n                    "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("abraço fraternal")
                ]),
                _vm._v(", e assim,\n                    "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("envolvendo")
                ]),
                _vm._v(" a todos no sentimento do\n                    "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("Amor Puro")
                ]),
                _vm._v(" e na sintonia de\n                    "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("faixas vibratórias positivas e revigorantes")
                ]),
                _vm._v(".\n\n                    Os trabalhos do Instituto "),
                _c("span", { staticClass: "font-weight-bold text-primary" }, [
                  _vm._v("Acolher")
                ]),
                _vm._v("\n                    são regidos em nome de "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("Deus")
                ]),
                _vm._v(" e de\n                    "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("Jesus Cristo")
                ]),
                _vm._v(",\n                    dirigidos por "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("Guias e Mentores Espirituais")
                ]),
                _vm._v("\n                    das comunidades do Plano Maior "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("“Colônia Espiritual Paz e Amor”")
                ]),
                _vm._v(",\n                    "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("“Colônia Vera Cruz”")
                ]),
                _vm._v(" e\n                    "),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("“Hospital Escola André Luiz”")
                ]),
                _vm._v(".\n                ")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h2", { staticClass: "text-center" }, [_vm._v("Intitucional")]),
          _vm._v(" "),
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              { staticClass: "row justify-content-md-center text-center" },
              [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src:
                        "/../../acolher/public/img/institucional/fraternidade.png",
                      title: "Fraternidade.png",
                      alt: "Fraternidade.png"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("p", [
                _c("strong", [_vm._v("Fraternidade Cruzeiro do Sul")]),
                _vm._v(
                  "é uma\n                            sociedade beneficente, sem fins lucrativos, políticos ou\n                            ideológicos. Tem como finalidade estudar em favor dos\n                            "
                ),
                _c("strong", [
                  _c("em", [_vm._v("desenvolvimentos Mental e Físico do")])
                ]),
                _vm._v(" "),
                _c("strong", [_c("em", [_vm._v("“ser”")])]),
                _vm._v(
                  ", realizando tratamentos alternativos e\n                            complementares às saúdes Física e Mental daqueles que à ela\n                            recorrem.\n                        "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                            O trabalho da Fraternidade é uma\n                            ferramenta, enquanto técnica, disponibilizada pelo plano\n                            Espiritual para o atendimento fraterno, podendo ser\n                            aplicado a todas as criaturas, não importando idade, gênero\n                            ou estado de sanidade mental e/ou física, respeitando e\n                            convivendo em harmonia com a ciência e todas as religiões\n                            fundadas na prática do bem e do amor.\n                        "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _c("strong", [_vm._v("A Fraternidade Cruzeiro do Sul")]),
                _vm._v(
                  " iniciou\n                            suas atividades em Março de 2005, através de uma palestra\n                            com o título “\n                            "
                ),
                _c("em", [_vm._v("O que é Apometria")]),
                _vm._v(
                  "” proferida pelo professor Sr.\n                            "
                ),
                _c("strong", [_vm._v("Francisco Alberto da Eira")]),
                _vm._v(
                  ", dando origem ao\n                            curso de Apometria, configurado em 44 aulas visando formar\n                            pessoas para realização habilitada de tratamentos por meio\n                            das técnicas apométricas (“\n                            "
                ),
                _c("strong", [
                  _c("em", [
                    _vm._v(
                      "Muitos foram os chamados, mas poucos os\n                                    escolhidos..."
                    )
                  ])
                ]),
                _vm._v(
                  "” -\n\n                            Palavras citadas pelo aludido professor.\n                        "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                            Movidos pelo sentimento de altruísmo,\n                            com foco e determinação, desde sua formação e até então,\n                            sob coordenação dos primeiros membros,\n                            "
                ),
                _c("strong", [_vm._v("José Rubens e Ida Rosana")]),
                _vm._v(
                  ", a Fraternidade\n                            vem promovendo cursos para continuidade do trabalho de\n                            desenvolver novos membros, agregando mais pessoas que\n                            comungam do mesmo objetivo: “\n                            "
                ),
                _c("strong", [_c("em", [_vm._v("ajudar a quem nos procura")])]),
                _vm._v("”.\n                        ")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                            A Fraternidade busca servir com base\n                            em uma única palavra apontada por nosso\n                            "
                ),
                _c("strong", [_vm._v("Mestre Jesus")]),
                _vm._v(": “\n                            "),
                _c("strong", [_vm._v("Amor")]),
                _vm._v("”, e tem nossa\n                            "),
                _c("strong", [_vm._v("Mãe Maria")]),
                _vm._v(
                  "como padroeira, sendo seus\n                            propósitos também o acompanhamento dos avanços da ciência e\n                            o aprofundamento dos conhecimentos de seus membros através\n                            do estudo contínuo.\n\n                        "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                            Desta forma, a Fraternidade segue\n                            confiante e sempre pedindo que o\n                            "
                ),
                _c("strong", [_vm._v("Pai Maior")]),
                _vm._v(
                  " guie os pensamentos, palavras e\n                            atitudes de seus integrantes, apoiada na mensagem recebida\n                            do Plano espiritual:\n                            "
                ),
                _c("strong", [
                  _c("em", [_vm._v("“Vocês estão sob minha guarda...”")])
                ]),
                _vm._v(".\n\n                        ")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n\n                            O\n                            "
                ),
                _c("strong", [_vm._v("atendimento")]),
                _vm._v(
                  " a necessitados ocorre na\n                            "
                ),
                _c("strong", [_vm._v("sede")]),
                _vm._v(" do\n                            "),
                _c("strong", [_vm._v("Instituto")]),
                _vm._v(" "),
                _c("span", { staticClass: "font-weight-bold text-primary" }, [
                  _c("strong", [_vm._v("Acolher")])
                ]),
                _vm._v(
                  "\n                            às\n                            "
                ),
                _c("strong", [_vm._v("segundas-feiras")]),
                _vm._v(", com início às\n                            "),
                _c("strong", [_vm._v("19:00")]),
                _vm._v(
                  " h e previsão de término às 22:00 h (\n                            "
                ),
                _c("strong", [_vm._v("sempre com agendamento prévio")]),
                _vm._v(").\n\n                        ")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                            Os\n                            "
                ),
                _c("strong", [_vm._v("cursos")]),
                _vm._v(
                  " ministrados pela Fraternidade\n                            Cruzeiro do Sul, constam na\n                            "
                ),
                _c("strong", [_vm._v("programação")]),
                _vm._v(" do “\n                            "),
                _c("strong", [_vm._v("Semear")]),
                _vm._v(
                  ": Módulo de Formação e Estudo” e\n                            ocorrem às\n                            "
                ),
                _c("strong", [_vm._v("quartas-feiras")]),
                _vm._v(", com início às\n                            "),
                _c("strong", [_vm._v("20:00 h")]),
                _vm._v(
                  " e previsão de término às 22:00 h,\n                            "
                ),
                _c("strong", [_vm._v("somente para inscritos")]),
                _vm._v(".\n\n                        ")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                            A saber:\n                            "
                ),
                _c("strong", [_vm._v("Apometria")]),
                _vm._v(
                  "\n                            é uma técnica terapêutica, baseada no\n                            desdobramento anímico, ou seja, o afastamento dos três\n                            corpos pertencentes ao quaternário inferior - duplo etéreo,\n                            corpo astral e mental inferior ou concreto - provocado por\n                            um campo de força criado pela mente de outra pessoa ou\n                            grupo, através do qual se trata outro ser, sintonizando e\n                            acessando suas desarmonias.\n                        "
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row justify-content-md-center text-center" },
              [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: "/../../acolher/public/img/institucional/livro.png",
                      title: "Evangelho do ABC.png",
                      alt: "Evangelho do ABC.png"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("p", [
                _vm._v("\n                                O "),
                _c("strong", [
                  _vm._v("Grupo de Estudo do Evangelho – Região ABC")
                ]),
                _vm._v(
                  "é\n                                constituído pela comunhão de\n                                "
                ),
                _c("strong", [_vm._v("amigos de fé")]),
                _vm._v(
                  "que se reúnem para a\n                                "
                ),
                _c("strong", [_vm._v("prática do Evangelho no Lar")]),
                _vm._v(", do\n                                "),
                _c("strong", [_vm._v("estudo da Doutrina Kardecista")]),
                _vm._v("e para o\n                                "),
                _c("strong", [_vm._v("exercício da mediunidade")]),
                _vm._v(
                  "para comunicação\n                                com\n                                "
                ),
                _c("strong", [_vm._v("mentores e guias espirituais")]),
                _vm._v(
                  "e também para\n                                o\n                                "
                ),
                _c("strong", [
                  _vm._v("atendimento a irmãos desencarnados necessitados")
                ]),
                _vm._v(
                  ",\n                                trazidos pela poderosa corrente espiritual.                                    \n                            "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                                    As atividades do referido grupo\n                                    tiveram início no lar do casal\n                                    "
                ),
                _c("strong", [_vm._v("Nilton e Salette de Almeida")]),
                _vm._v(
                  ", no ano de\n                                    1985 (há 33 anos portanto), na\n                                    "
                ),
                _c("strong", [_vm._v("companhia de amigos e vizinhos")]),
                _vm._v(
                  ".\n                                   \n                                "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                                    Sob a égide da\n                                    "
                ),
                _c("strong", [_vm._v("Colônia Espiritual Paz e Amor")]),
                _vm._v(
                  "e com a\n                                    direção do estudioso irmão\n                                    "
                ),
                _c("strong", [_vm._v("Nilton de Almeida")]),
                _vm._v(
                  ", ao longo dos anos, os\n                                    trabalhos desenvolveram-se e\n                                    "
                ),
                _c("strong", [_vm._v("novos amigos juntaram-se ao grupo")]),
                _vm._v(
                  ", tendo\n                                    as reuniões passado a ocorrer de maneira\n                                    "
                ),
                _c("strong", [_vm._v("rotativa nos lares")]),
                _vm._v(
                  " de parte dos\n                                    participantes, como forma de\n                                    "
                ),
                _c("strong", [_vm._v("expandir")]),
                _vm._v(
                  " a distribuição dos\n                                    "
                ),
                _c("strong", [_vm._v("bálsamos")]),
                _vm._v(
                  "produzidos\n                                    \n                                    durante os encontros a\n                                    "
                ),
                _c("strong", [_vm._v("mais lares")]),
                _vm._v(
                  "e para um maior número de\n                                    "
                ),
                _c("strong", [_vm._v("irmãos encarnados e desencarnados")]),
                _vm._v(
                  ".\n                                    \n                                "
                )
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                                    Atualmente o grupo conta com\n                                    aproximadamente 15 irmãos com participação assídua em suas\n                                    reuniões semanais, os quais procuram aplicar os\n                                    ensinamentos e métodos adotados pelo irmão Nilton de\n                                    Almeida, mesmo após a sua partida para a Pátria Espiritual,\n                                    em Julho de 2017.\n                                "
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row justify-content-md-center text-center" },
              [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src:
                        "/../../acolher/public/img/institucional/regiaoabc.png",
                      title: "Evangelho do ABC.png",
                      alt: "Evangelho do ABC.png"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "text-editor" }, [
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("O "),
                      _c("strong", [
                        _vm._v("Grupo de Estudo do Evangelho – Guarulhos ")
                      ]),
                      _vm._v("é constituído pela comunhão de "),
                      _c("strong", [_vm._v("amigos de fé ")]),
                      _vm._v("que se reúnem para a "),
                      _c("strong", [_vm._v("prática do Evangelho no Lar")]),
                      _vm._v(", do "),
                      _c("strong", [_vm._v("estudo da Doutrina Kardecista ")]),
                      _vm._v("e para o "),
                      _c("strong", [_vm._v("exercício da mediunidade ")]),
                      _vm._v("para comunicação com "),
                      _c("strong", [_vm._v("mentores e guias espirituais ")]),
                      _vm._v("e também para o "),
                      _c("strong", [
                        _vm._v(
                          "atendimento a irmãos desencarnados necessitados"
                        )
                      ]),
                      _vm._v(", trazidos pela poderosa corrente espiritual.")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v(
                        "As atividades do referido grupo tiveram início no lar do casal "
                      ),
                      _c("strong", [_vm._v("Maurício e Fulvia")]),
                      _vm._v(", no ano de 1991 (há 28 anos portanto), na "),
                      _c("strong", [_vm._v("companhia de amigos e vizinhos")]),
                      _vm._v(". ")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v(
                        "Hoje, conta com a participação de 12 membros assíduos, mas, ao longo dos anos, contou com a presença de várias pessoas que precisaram estar com o grupo no caminho da evolução."
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("De maneira "),
                      _c("strong", [_vm._v("rotativa")]),
                      _vm._v(", as reuniões ocorrem às terças-feiras nos "),
                      _c("strong", [_vm._v("lares")]),
                      _vm._v(
                        " de parte dos participantes, com o propósito de auxiliar, orientar, proteger e fortalecer seus integrantes na "
                      ),
                      _c("strong", [_vm._v("busca do aprendizado ")]),
                      _vm._v("e do conhecimento do “"),
                      _c("strong", [_vm._v("eu interior")]),
                      _vm._v(
                        "” de cada um, sob a égide de uma equipe espiritual comandada pelo "
                      ),
                      _c("strong", [_vm._v("Dr. Carlos Augusto ")]),
                      _vm._v("e tendo como "),
                      _c("strong", [_vm._v("Colônia Principal a Vera Cruz")]),
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v(
                        "Os irmãos desencarnados atendidos durante nossos trabalhos são encaminhados à referida colônia ou a outras secundárias específicas, tais como Hospital Escola André Luiz para os enfermos e Colônia Pacificadora Luz e Vida, buscando levar conhecimento e luz a esses irmãos e a nós mesmos."
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row justify-content-md-center text-center" },
              [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: "/../../acolher/public/img/institucional/jesus.png",
                      title: "Evangelho do ABC.png",
                      alt: "Evangelho do ABC.png"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "text-editor" }, [
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("O "),
                      _c("strong", [_vm._v("Grupo Obreiros da Luz")]),
                      _vm._v(" foi formado por "),
                      _c("strong", [_vm._v("irmãos espíritas ")]),
                      _vm._v("que sentiram a "),
                      _c("strong", [_vm._v("necessidade")]),
                      _vm._v(" do desenvolvimento do "),
                      _c("strong", [
                        _vm._v("trabalho junto à entidades de Umbanda")
                      ]),
                      _vm._v(", "),
                      _c("strong", [_vm._v("complementarmente")]),
                      _vm._v(" ao estudo da "),
                      _c("strong", [_vm._v("Doutrina Kardecista")]),
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v(
                        "As atividades deste grupo tiveram início no lar do casal Nilton e Salette de Almeida, na companhia do casal Maurício Caetano e Fulvia Ferreira, em 1991, há 28 anos portanto. "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("Sob a égide da "),
                      _c("strong", [_vm._v("Colônia Espiritual Paz e Amor")]),
                      _vm._v(
                        ", os trabalhos passaram a ser realizados, de maneira habitual, na Praia Grande, no lar do casal Alice e Faustino Ferreira, mãe e padrasto de Nilton, respectivamente; sendo também este último, tio de Fulvia."
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("Com o "),
                      _c("strong", [_vm._v("decorrer do tempo")]),
                      _vm._v(", os participantes dos "),
                      _c("strong", [_vm._v("grupos de Estudo do Evangelho ")]),
                      _vm._v("realizados por Nilton e Salette de Almeida na "),
                      _c("strong", [_vm._v("Região do ABC ")]),
                      _vm._v("e por Maurício e Fulvia em "),
                      _c("strong", [_vm._v("Guarulhos")]),
                      _vm._v(", além de "),
                      _c("strong", [_vm._v("outros amigos e parentes")]),
                      _vm._v(", "),
                      _c("strong", [_vm._v("passaram a atuar ")]),
                      _vm._v(
                        "também nos trabalhos realizados com as entidades de Umbanda, resultando na formação atual de mais de 40 integrantes."
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v(
                        "Nestes anos de atuação, houve um período no qual as reuniões ocorreram na casa do casal Tadeu e Silvana, tendo retornado à Praia Grande, para serem finalmente transferidas para a cidade de Guarulhos, desde 2013."
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("O "),
                      _c("strong", [_vm._v("Obreiros da Luz ")])
                    ]),
                    _c("u", [
                      _c("span", { staticStyle: { color: "black" } }, [
                        _vm._v(
                          "não é caracterizado como um terreiro de Umbanda"
                        )
                      ])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(", ")
                    ]),
                    _c("u", [
                      _c("span", { staticStyle: { color: "black" } }, [
                        _vm._v(
                          "mas como uma reunião de kardecistas que dão passagem à manifestação de entidades ligadas às giras da Umbanda"
                        )
                      ])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(", na busca do "),
                      _c("strong", [
                        _vm._v("desenvolvimento dos médiuns e entidades ")
                      ]),
                      _vm._v("e a fim de promover a "),
                      _c("strong", [
                        _vm._v("ajuda a irmãos encarnados e desencarnados ")
                      ]),
                      _vm._v(
                        "que estejam necessitando e de acordo com seus merecimentos."
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("As "),
                      _c("strong", [_vm._v("reuniões")]),
                      _vm._v(" do grupo são realizadas na "),
                      _c("strong", [_vm._v("sede")]),
                      _vm._v(" do Instituto ")
                    ]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(" em "),
                      _c("strong", [_vm._v("um sábado ")]),
                      _vm._v("a "),
                      _c("strong", [_vm._v("cada mês")]),
                      _vm._v(", com início às "),
                      _c("strong", [_vm._v("18:00")]),
                      _vm._v(" h e término programado para às 21:00h (a "),
                      _c("strong", [_vm._v("cada")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _c("strong", [_vm._v("mês")]),
                      _vm._v(" é dada passagem a entidades de "),
                      _c("strong", [_vm._v("giras específicas")]),
                      _vm._v(", a saber: "),
                      _c("strong", [_vm._v("Caboclos")]),
                      _vm._v(", "),
                      _c("strong", [_vm._v("Pretos Velhos")]),
                      _vm._v(", "),
                      _c("strong", [_vm._v("Crianças")]),
                      _vm._v(" e "),
                      _c("strong", [_vm._v("Linha de Esquerda")]),
                      _vm._v(").")
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row justify-content-md-center text-center" },
              [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: "/../../acolher/public/img/institucional/semear.png",
                      title: "Evangelho do ABC.png",
                      alt: "Evangelho do ABC.png"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "text-editor" }, [
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("O “"),
                      _c("strong", [
                        _vm._v("Semear: Módulo de Formação e Estudo")
                      ]),
                      _vm._v(
                        "”, é uma iniciativa a ser aplicada pelo Instituto "
                      )
                    ]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(", contando com a "),
                      _c("strong", [
                        _vm._v("participação de seus integrantes ")
                      ]),
                      _vm._v("para a "),
                      _c("strong", [_vm._v("elaboração dos conteúdos")]),
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("As atividades, realizadas na sede do Instituto ")
                    ]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(", têm duas frentes: 1) "),
                      _c("strong", [
                        _vm._v("elaboração e aplicação de cursos de formação ")
                      ]),
                      _vm._v(
                        "aos integrantes do Instituto (orientação a médiuns, conceitos da Apometria, Doutrina Kardecista etc.); 2) "
                      ),
                      _c("strong", [
                        _vm._v(
                          "promoção de estudos e fóruns de debate para o aprofundamento do Saber"
                        )
                      ])
                    ])
                  ]),
                  _c("span", [
                    _c("span", { staticStyle: { color: "black" } }, [
                      _c("span", { staticStyle: { "font-size": "18px" } }, [
                        _vm._v(".")
                      ])
                    ])
                  ]),
                  _c("span", { staticStyle: { "font-size": "18px" } }, [
                    _c("span", { staticStyle: { color: "black" } })
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("A "),
                      _c("strong", [_vm._v("elaboração do conteúdo ")]),
                      _vm._v(
                        "dos cursos e dos grupos de estudos e fóruns de debate, "
                      ),
                      _c("strong", [_vm._v("está a cargo de integrantes ")]),
                      _vm._v("que já se encontram "),
                      _c("strong", [_vm._v("capacitados para tal")]),
                      _vm._v(
                        ", e poderá se estender aos que que venham a desenvolver conteúdo através da busca em literatura e/ou junto à associações que compartilhem módulos de formação (Federação Espírita, por exemplo)."
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("A "),
                      _c("strong", [_vm._v("realização de cursos ")]),
                      _vm._v(
                        "ou grupos de estudo está, obviamente, condicionada à "
                      ),
                      _c("strong", [
                        _vm._v(
                          "disponibilidade dos seus elaboradores e do interesse dos integrantes e/ou frequentadores"
                        )
                      ]),
                      _vm._v(" do ")
                    ]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("Segundo Kardec, “"),
                      _c("strong", [
                        _c("em", [
                          _vm._v(
                            "Os homens semeiam na Terra o que colherão na vida espiritual: os frutos da sua coragem ou da sua fraqueza"
                          )
                        ])
                      ]),
                      _vm._v("”.")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("A "),
                      _c("strong", [_vm._v("semente")]),
                      _vm._v(" foi "),
                      _c("strong", [_vm._v("plantada")]),
                      _vm._v(", agora a "),
                      _c("strong", [_vm._v("colheita")]),
                      _vm._v(" cabe a "),
                      _c("strong", [_vm._v("cada um")]),
                      _vm._v(", de acordo com o seu "),
                      _c("strong", [_vm._v("interesse")]),
                      _vm._v(" em "),
                      _c("strong", [_vm._v("compartilhar")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _c("strong", [_vm._v("conhecimentos")]),
                      _vm._v(" e "),
                      _c("strong", [_vm._v("aprofundar ")]),
                      _vm._v("o "),
                      _c("strong", [_vm._v("saber")]),
                      _vm._v("!")
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row justify-content-center text-center" },
              [
                _c("div", { staticClass: "col-8" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src:
                        "/../../acolher/public/img/institucional/semear-large.png",
                      title: "Evangelho do ABC.png",
                      alt: "Evangelho do ABC.png"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row justify-content-center text-center" },
              [
                _c("div", { staticClass: "col-8" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: "/../../acolher/public/img/institucional/debate.png",
                      title: "Evangelho do ABC.png",
                      alt: "Evangelho do ABC.png"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row justify-content-md-center text-center" },
              [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: "/../../acolher/public/img/institucional/estudo.png",
                      title: "Evangelho do ABC.png",
                      alt: "Evangelho do ABC.png"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "text-editor" }, [
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("As reuniões de “"),
                      _c("strong", [_vm._v("Estudo e Prática do Evangelho")]),
                      _vm._v("”, realizadas na sede do Instituto ")
                    ]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(", visam estabelecer com os "),
                      _c("strong", [_vm._v("visitantes")]),
                      _vm._v(" um "),
                      _c("strong", [_vm._v("primeiro contato ")]),
                      _vm._v("com o "),
                      _c("strong", [_vm._v("Kardecismo")]),
                      _vm._v(", ao mesmo tempo em que proporciona aos "),
                      _c("strong", [_vm._v("já praticantes ")]),
                      _vm._v("a oportunidade de "),
                      _c("strong", [_vm._v("aprofundar")]),
                      _vm._v(" o "),
                      _c("strong", [_vm._v("aprendizado")]),
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("As reuniões serão realizadas às "),
                      _c("strong", [_vm._v("quintas-feiras")]),
                      _vm._v(", com início às "),
                      _c("strong", [_vm._v("20:00 h ")]),
                      _vm._v("e término às "),
                      _c("strong", [_vm._v("22:00 h")]),
                      _vm._v(".")
                    ])
                  ]),
                  _vm._v("</\n                            ")
                ]),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("A reunião é composta de "),
                      _c("strong", [_vm._v("4 partes")]),
                      _vm._v(":")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("u", [_c("span", [_vm._v("Parte 1 - ")])]),
                    _c("u", [
                      _c("span", { staticStyle: { color: "black" } }, [
                        _c("strong", [_vm._v("Palestra")])
                      ])
                    ]),
                    _c("u", [
                      _c("span", { staticStyle: { color: "black" } }, [
                        _vm._v(":")
                      ])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(" destina-se à exposição "),
                      _c("strong", [_vm._v("evangélica-doutrinária")]),
                      _vm._v(" à luz do Kardecismo ("),
                      _c("strong", [_vm._v("10 minutos")]),
                      _vm._v(");")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("u", [_c("span", [_vm._v("Parte 2 - ")])]),
                    _c("u", [
                      _c("span", { staticStyle: { color: "black" } }, [
                        _c("strong", [_vm._v("Passes")])
                      ])
                    ]),
                    _c("u", [
                      _c("span", { staticStyle: { color: "black" } }, [
                        _vm._v(":")
                      ])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(" imposição de "),
                      _c("strong", [_vm._v("passes fluídicos ")]),
                      _vm._v("a todos os presentes: obreiros e visitantes ("),
                      _c("strong", [_vm._v("5 minutos")]),
                      _vm._v(");")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("u", [_c("span", [_vm._v("Parte 3 - ")])]),
                    _c("u", [
                      _c("span", { staticStyle: { color: "black" } }, [
                        _c("strong", [_vm._v("Estudo")])
                      ])
                    ]),
                    _c("u", [
                      _c("span", { staticStyle: { color: "black" } }, [
                        _vm._v(":")
                      ])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(" estudo de "),
                      _c("strong", [_vm._v("livro e ou texto ")]),
                      _vm._v("a ser efetuado com base nos "),
                      _c("strong", [_vm._v("princípios kardecistas")]),
                      _vm._v(", através do método da "),
                      _c("strong", [_vm._v("Mesa ")]),
                      _vm._v("Redonda, conduzida por um obreiro "),
                      _c("strong", [_vm._v("dirigente")]),
                      _vm._v(", com "),
                      _c("strong", [_vm._v("leitura coletiva ")]),
                      _vm._v(
                        "por parte dos demais obreiros integrantes da mesa e com possibilidade de os participantes (obreiros integrantes da mesa ou presentes na assistência) "
                      ),
                      _c("strong", [_vm._v("exporem")]),
                      _vm._v(" suas "),
                      _c("strong", [_vm._v("opiniões")]),
                      _vm._v(" e/ou "),
                      _c("strong", [_vm._v("dúvidas")]),
                      _vm._v(" a respeito do tema estudado ("),
                      _c("strong", [_vm._v("60 minutos")]),
                      _vm._v(").")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("u", [_c("span", [_vm._v("Parte 4 - ")])]),
                    _c("u", [
                      _c("span", { staticStyle: { color: "black" } }, [
                        _c("strong", [
                          _vm._v("Manifestação do Plano Espiritual")
                        ])
                      ])
                    ]),
                    _c("u", [
                      _c("span", { staticStyle: { color: "black" } }, [
                        _vm._v(":")
                      ])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(" estabelecimento de "),
                      _c("strong", [_vm._v("conexão")]),
                      _vm._v(" com o "),
                      _c("strong", [_vm._v("Plano Maior")]),
                      _vm._v(", oferecendo a possibilidade de "),
                      _c("strong", [_vm._v("manifestação")]),
                      _vm._v(" de "),
                      _c("strong", [_vm._v("mentores")]),
                      _vm._v(" e "),
                      _c("strong", [_vm._v("guias espirituais ")]),
                      _vm._v("ou de "),
                      _c("strong", [
                        _vm._v("irmãos desencarnados necessitados")
                      ]),
                      _vm._v(
                        ", através dos obreiros médiuns integrantes da mesa ("
                      ),
                      _c("strong", [_vm._v("45 minutos")]),
                      _vm._v("). ")
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row justify-content-md-center text-center" },
              [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src:
                        "/../../acolher/public/img/institucional/atendimento.png",
                      title: "Evangelho do ABC.png",
                      alt: "Evangelho do ABC.png"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "text-editor" }, [
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("O “"),
                      _c("strong", [
                        _vm._v("Atendimento Fraterno através do Diálogo")
                      ]),
                      _vm._v("“ consiste em "),
                      _c("strong", [_vm._v("orientar")]),
                      _vm._v(" e "),
                      _c("strong", [_vm._v("esclarecer")]),
                      _vm._v(" as pessoas que buscam o Instituto ")
                    ]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v(
                        "Essa atividade será realizada na sede do Instituto "
                      )
                    ]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(", às "),
                      _c("strong", [_vm._v("quintas-feiras")]),
                      _vm._v(", com início às "),
                      _c("strong", [_vm._v("20:15 h")]),
                      _vm._v(" e término às "),
                      _c("strong", [_vm._v("22:00 h")]),
                      _vm._v(", após a participação do assistido à "),
                      _c("strong", [_vm._v("Palestra")]),
                      _vm._v(" e à "),
                      _c("strong", [_vm._v("Sessão de Passes")]),
                      _vm._v(", organizadas pelo grupo de “"),
                      _c("strong", [_vm._v("Estudo e Prática do Evangelho")]),
                      _vm._v("”.")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("O "),
                      _c("strong", [_vm._v("Atendimento")]),
                      _vm._v(" é efetuado por "),
                      _c("strong", [_vm._v("dois obreiros ")]),
                      _vm._v("em "),
                      _c("strong", [_vm._v("sala reservada")]),
                      _vm._v(", onde o assistido é "),
                      _c("strong", [_vm._v("recebido")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _c("strong", [_vm._v("fraternalmente")]),
                      _vm._v(" e pode "),
                      _c("strong", [_vm._v("expor livremente")]),
                      _vm._v(", em "),
                      _c("strong", [_vm._v("caráter privativo")]),
                      _vm._v(", suas "),
                      _c("strong", [_vm._v("dificuldades")]),
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _c("strong", [_vm._v("Após")]),
                      _vm._v(" o assistido ser "),
                      _c("strong", [_vm._v("ouvido")]),
                      _vm._v(", os obreiros prestam "),
                      _c("strong", [_vm._v("orientações")]),
                      _vm._v(" e transmitem "),
                      _c("strong", [_vm._v("estímulos")]),
                      _vm._v(
                        " e, sempre que surgir a oportunidade, oferecem ligeiras "
                      ),
                      _c("strong", [_vm._v("noções")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _c("strong", [_vm._v("doutrinárias")]),
                      _vm._v(", para a "),
                      _c("strong", [_vm._v("compreensão")]),
                      _vm._v(" dos seus "),
                      _c("strong", [_vm._v("problemas")]),
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("Sempre que possível, "),
                      _c("strong", [_vm._v("encaminham")]),
                      _vm._v(" o assistido às "),
                      _c("strong", [_vm._v("atividades")]),
                      _vm._v(" do Instituto, que sejam mais "),
                      _c("strong", [_vm._v("adequadas")]),
                      _vm._v(" às suas "),
                      _c("strong", [_vm._v("necessidades")]),
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("O "),
                      _c("strong", [_vm._v("atendimento")]),
                      _vm._v(" sempre ocorre em "),
                      _c("strong", [_vm._v("duplas de obreiros")]),
                      _vm._v(", devidamente "),
                      _c("strong", [_vm._v("qualificados")]),
                      _vm._v(" e "),
                      _c("strong", [_vm._v("treinados")]),
                      _vm._v(", conscientes da enorme "),
                      _c("strong", [_vm._v("responsabilidade")]),
                      _vm._v(" em que está investido o ato do “"),
                      _c("strong", [_vm._v("orientar")]),
                      _vm._v("”.")
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row justify-content-md-center text-center" },
              [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src:
                        "/../../acolher/public/img/institucional/assistencia.png",
                      title: "Evangelho do ABC.png",
                      alt: "Evangelho do ABC.png"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "text-editor" }, [
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v(
                        "A criação do Grupo de Assistência Social Kardecista “"
                      ),
                      _c("strong", [
                        _vm._v("Fora da Caridade não há Salvação")
                      ]),
                      _vm._v("“ ocorrerá "),
                      _c("strong", [_vm._v("oportunamente")]),
                      _vm._v(", quando o Instituto ")
                    ]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(" tiver alcançado "),
                      _c("strong", [_vm._v("regularidade")]),
                      _vm._v(" em suas "),
                      _c("strong", [_vm._v("atividades")]),
                      _vm._v(" e sua configuração de "),
                      _c("strong", [_vm._v("integrantes")]),
                      _vm._v(" tiver alcançado a "),
                      _c("strong", [_vm._v("consistência necessária")]),
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("As "),
                      _c("strong", [_vm._v("atividades idealizadas ")]),
                      _vm._v(
                        "para o referido grupo referir-se-ão à organização de "
                      ),
                      _c("strong", [_vm._v("assistência à pessoas carentes")]),
                      _vm._v(", cujo "),
                      _c("strong", [_vm._v("formato")]),
                      _vm._v(" e "),
                      _c("strong", [_vm._v("regularidade ")]),
                      _vm._v("deverão ser ainda "),
                      _c("strong", [_vm._v("discutidos")]),
                      _vm._v(" e "),
                      _c("strong", [_vm._v("estabelecidos")]),
                      _vm._v(". ")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("Iniciativas como doação de "),
                      _c("strong", [_vm._v("roupas")]),
                      _vm._v(", coleta e doação de "),
                      _c("strong", [_vm._v("material escolar")]),
                      _vm._v(", distribuição de "),
                      _c("strong", [_vm._v("alimentos")]),
                      _vm._v(", meios e produtos para o "),
                      _c("strong", [_vm._v("asseio de moradores de rua")]),
                      _vm._v(", são "),
                      _c("strong", [_vm._v("fontes de inspiração ")]),
                      _vm._v("para o desenvolvimento das "),
                      _c("strong", [_vm._v("atividades")]),
                      _vm._v(" a "),
                      _c("strong", [_vm._v("serem implementadas")]),
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [_vm._v("O fato do Instituto ")]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _c("strong", [_vm._v("congregar ")]),
                      _vm._v("diferentes grupos que já "),
                      _c("strong", [
                        _vm._v("militam na causa espírita ou espiritualizada")
                      ]),
                      _vm._v(", deve configurar-se em "),
                      _c("strong", [_vm._v("facilitador")]),
                      _vm._v(" para que seus membros "),
                      _c("strong", [
                        _vm._v("unam-se no propósito da prática da caridade ")
                      ]),
                      _vm._v("e levem a "),
                      _c("strong", [
                        _vm._v("efeito as atividades ora idealizadas")
                      ]),
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v(
                        "Através de Kardec os Espíritos nos ensinaram que “"
                      ),
                      _c("strong", [
                        _c("em", [
                          _vm._v(
                            "a nossa felicidade será naturalmente proporcional em relação à felicidade que fizermos para os outros"
                          )
                        ])
                      ]),
                      _vm._v("”.")
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row justify-content-md-center text-center" },
              [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: "/../../acolher/public/img/institucional/nilton.png",
                      title: "Evangelho do ABC.png",
                      alt: "Evangelho do ABC.png"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "text-editor" }, [
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("Desde a sua fundação tem o Instituto ")
                    ]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(" como meta também a "),
                      _c("strong", [_vm._v("divulgação")]),
                      _vm._v(" do "),
                      _c("strong", [_vm._v("Kardecismo")]),
                      _vm._v(". Para promover a "),
                      _c("strong", [_vm._v("difusão da Doutrina Espírita")]),
                      _vm._v(
                        ", buscará implantar e manter a Biblioteca Espírita “Nilton de Almeida”, em homenagem ao nosso querido irmão e obreiro do Kardecismo."
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("O "),
                      _c("strong", [_vm._v("funcionamento")]),
                      _vm._v(" da biblioteca será "),
                      _c("strong", [_vm._v("coincidente")]),
                      _vm._v(" com os "),
                      _c("strong", [_vm._v("trabalhos")]),
                      _vm._v(" do Instituto ")
                    ]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(", facultando o "),
                      _c("strong", [_vm._v("acesso")]),
                      _vm._v(" a "),
                      _c("strong", [_vm._v("todos")]),
                      _vm._v(" os "),
                      _c("strong", [_vm._v("frequentadores")]),
                      _vm._v(" da Casa. ")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("A Biblioteca Espírita estará à "),
                      _c("strong", [_vm._v("disposição")]),
                      _vm._v(" dos "),
                      _c("strong", [_vm._v("frequentadores")]),
                      _vm._v(" de todas as atividades do Instituto ")
                    ]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(", facilitando igualmente o "),
                      _c("strong", [_vm._v("acesso")]),
                      _vm._v(" de "),
                      _c("strong", [_vm._v("todos")]),
                      _vm._v(" às "),
                      _c("strong", [_vm._v("obras")]),
                      _vm._v(" de cunho reconhecidamente espíritas, para "),
                      _c("strong", [_vm._v("empréstimos")]),
                      _vm._v(", por tempo determinado. Será criado um "),
                      _c("strong", [_vm._v("local específico ")]),
                      _vm._v("para "),
                      _c("strong", [_vm._v("disposição")]),
                      _vm._v(" e "),
                      _c("strong", [_vm._v("consulta")]),
                      _vm._v(" das "),
                      _c("strong", [_vm._v("obras")]),
                      _vm._v(
                        ", e, futuramente implementado sistema informatizado de pesquisas e controle de empréstimo."
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _c("strong", [_vm._v("Conduta Espírita")]),
                      _vm._v(", segundo André Luiz: “"),
                      _c("strong", [_vm._v("Divulgar")]),
                      _vm._v(", por todos os meios lícitos, os "),
                      _c("strong", [_vm._v("livros")]),
                      _vm._v(" que "),
                      _c("strong", [_vm._v("esclareçam")]),
                      _vm._v(" os "),
                      _c("strong", [_vm._v("postulados")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _c("strong", [_vm._v("espíritas")]),
                      _vm._v(", prestigiando as "),
                      _c("strong", [_vm._v("obras santificantes ")]),
                      _vm._v("que objetivam o "),
                      _c("strong", [_vm._v("ingresso")]),
                      _vm._v(" da "),
                      _c("strong", [_vm._v("Humanidade")]),
                      _vm._v(" no roteiro da "),
                      _c("strong", [_vm._v("redenção")]),
                      _vm._v(" com "),
                      _c("strong", [_vm._v("Jesus")]),
                      _vm._v("”.")
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row justify-content-md-center text-center" },
              [
                _c("div", { staticClass: "col-md-4" }, [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: {
                      src: "/../../acolher/public/img/institucional/ikae.png",
                      title: "Evangelho do ABC.png",
                      alt: "Evangelho do ABC.png"
                    }
                  })
                ])
              ]
            ),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "text-editor" }, [
                _c("p", [
                  _c("span", [
                    _c("span", [_vm._v("O Instituto ")]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(" entende que a "),
                      _c("strong", [_vm._v("evolução")]),
                      _vm._v(" de uma "),
                      _c("strong", [_vm._v("sociedade")]),
                      _vm._v(", está direta e fundamentalmente ligada à "),
                      _c("strong", [_vm._v("educação")]),
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("A "),
                      _c("strong", [_vm._v("educação")]),
                      _vm._v(" propicia o "),
                      _c("strong", [_vm._v("conhecimento")]),
                      _vm._v(" que por sua vez habilita o ser humano para os "),
                      _c("strong", [_vm._v("crescimentos intelectual")]),
                      _vm._v(" e "),
                      _c("strong", [_vm._v("moral")]),
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("O "),
                      _c("strong", [_vm._v("saber")]),
                      _vm._v(" promove a "),
                      _c("strong", [_vm._v("consciência cidadã")]),
                      _vm._v(", abrindo caminhos para a "),
                      _c("strong", [_vm._v("fraternidade ")]),
                      _vm._v("e")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v("produzindo uma "),
                      _c("strong", [_vm._v("sociedade")]),
                      _vm._v(" mais "),
                      _c("strong", [_vm._v("justa")]),
                      _vm._v(", "),
                      _c("strong", [_vm._v("solidária")]),
                      _vm._v(", "),
                      _c("strong", [_vm._v("tolerante")]),
                      _vm._v(" e "),
                      _c("strong", [_vm._v("igualitária")]),
                      _vm._v(
                        ", transformando homens e mulheres em seres mais "
                      ),
                      _c("strong", [_vm._v("generosos")]),
                      _vm._v(" e "),
                      _c("strong", [_vm._v("livres")]),
                      _vm._v(".")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [_vm._v("Por esta razão, o Instituto ")]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(" acalenta o "),
                      _c("strong", [_vm._v("sonho")]),
                      _vm._v(
                        " de poder fundar e gerir um instituto que ofereça "
                      ),
                      _c("strong", [_vm._v("ensino fundamental gratuito ")]),
                      _vm._v("e de "),
                      _c("strong", [_vm._v("elevada qualidade ")]),
                      _vm._v("a "),
                      _c("strong", [_vm._v("crianças carentes")]),
                      _vm._v(".  ")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("Com o "),
                      _c("strong", [_vm._v("trabalho sério ")]),
                      _vm._v("e "),
                      _c("strong", [_vm._v("dedicado")]),
                      _vm._v(" dos obreiros do Instituto ")
                    ]),
                    _c("span", { staticStyle: { color: "#203864" } }, [
                      _c("strong", [_vm._v("Acolher")])
                    ]),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _vm._v(", "),
                      _c("strong", [_vm._v("um dia")]),
                      _vm._v(", o "),
                      _c("strong", [_vm._v("sonho")])
                    ]),
                    _vm._v(" "),
                    _c("span", { staticStyle: { color: "black" } }, [
                      _c("strong", [
                        _vm._v(
                          "IKAE - Instituto Kardecista Acolher de Educação"
                        )
                      ]),
                      _vm._v(", será uma "),
                      _c("strong", [_vm._v("realidade")]),
                      _vm._v("!")
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [
                    _c("span", [
                      _vm._v("Segundo "),
                      _c("strong", [_vm._v("Albert Einstein")]),
                      _vm._v(
                        ": “Não existem sonhos impossíveis para aqueles que realmente acreditam que o poder realizador reside no interior de cada ser humano. Sempre que alguém descobre esse poder, algo antes considerado impossível, se torna realidade”.  "
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publicacoes.vue?vue&type=template&id=ee1de1d2&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Publicacoes.vue?vue&type=template&id=ee1de1d2& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("nav-header"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("Footer")],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row row-space" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "row  row-space justify-content-center" }, [
            _c("div", { staticClass: "col-12 text-center" }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: {
                  src: "/../../acolher/public/img/publicacao/disponiveis.png",
                  alt: ""
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("h3", { staticClass: "text-center text-primary" }, [
            _vm._v("Prática do Evangelho no Lar")
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h5", { staticClass: "text-primary" }, [_vm._v("CONCEITO")]),
          _vm._v(" "),
          _c("section", { attrs: { id: "conceito" } }, [
            _c("p", [
              _vm._v(
                "\n                            O Estudo do Evangelho no Lar é uma reunião em família, em dia e hora da semana determinados, para estudo e conversa sobre os preceitos cristãos, visando o aprofundamento dos conhecimentos doutrinários e a manutenção da harmonia e do equilíbrio no lar.\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " Adotando a prática ensinada pelo Mestre Jesus, é um encontro familiar e fraternal, do qual participam os mentores espirituais, espíritos afins e demais envolvidos no progresso moral e espiritual dos integrantes do grupo.\n                            "
              ),
              _c("br"),
              _vm._v(
                " Trata-se de uma prática cristã recomendada pela Doutrina Espírita e um poderoso recurso para a limpeza e higiene espiritual do lar.\n    \n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " É uma das formas mais saudáveis de fraternidade, que começa na família através do diálogo sincero e do exercício da caridade. Cada lição do Evangelho é um roteiro de luz e de bênçãos para o grupo familiar, para toda a\n                            área circunvizinha do lar que o pratique e de espíritos necessitados de esclarecimentos, trazidos pela Espiritualidade para acompanharem os estudos.\n    \n                            "
              ),
              _c("br"),
              _c("br")
            ])
          ]),
          _vm._v(" "),
          _c("h5", { staticClass: "text-primary" }, [
            _vm._v("IMPORTÂNCIA DO EVANGELHO NO LAR")
          ]),
          _vm._v(" "),
          _c("section", { attrs: { id: "evangelho" } }, [
            _c("p", [
              _vm._v(
                "\n                            O Estudo do Evangelho no Lar abre as portas da nossa casa aos benefícios espirituais, contribuindo para os trabalhos de amparo e intuição dos mentores espirituais aos membros da família.\n    \n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " A busca pela compreensão dos ensinamentos cristãos, com sua absorção através da razão, nos permite o entendimento dos acontecimentos de nossas vidas, oferecendo-nos ânimo para enfrentar as vicissitudes e diretrizes para\n                            que façamos as melhores escolhas para as questões da vida terrena.\n    \n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " Através da prática disciplinada e séria do Evangelho, modificamos e melhoramos o padrão vibratório dos nossos pensamentos e sentimentos, desanuviando as nossas mentes congestionadas pelas criações inferiores, agentes da\n                            enfermidade e dos desequilíbrios. Com Jesus no Lar, pelo estudo e vivência do Evangelho, tem-se a verdadeira paz.\n    \n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " Com o Evangelho no Lar formamos as defesas magnéticas da nossa casa, envolvendo o ambiente espiritual em energias positivas que desestimulam toda ação maléfica. É uma verdadeira segurança espiritual que passa a funcionar\n                            em benefício de todo o grupo.\n    \n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " Além da ajuda que essa prática proporciona no programa espiritual de todo o grupo familiar, estende a caridade aos vizinhos e a quantos se sintam também estimulados a mudar com o exemplo, além de socorrer espíritos diversos\n                            igualmente beneficiados pela fonte de luz!\n                            "
              ),
              _c("br"),
              _c("br")
            ])
          ]),
          _vm._v(" "),
          _c("h5", { staticClass: "text-primary" }, [
            _vm._v("ORIENTAÇÕES PARA REALIZAÇÃO DO EVANGELHO NO LAR")
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("section", { staticClass: "orientacoes" }, [
            _c("p", [
              _vm._v(
                "\n                            Determine um dia e uma hora da semana em que seja possível a presença de todos os membros da família ou daqueles que desejarem participar da reunião.\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " O dia e horário definidos devem ser entendidos como compromisso sério, firmado entre o grupo familiar e a espiritualidade, portanto, devem ser cumpridos rigorosa e disciplinarmente, a fim de permitir a efetiva participação\n                            dos mentores espirituais e de espíritos superiores.\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                ' A reunião deve ser iniciada com uma prece simples e espontânea num local da casa menos exposto às perturbações exteriores, fazendo-se em seguida a leitura de um trecho de "O Evangelho Segundo o Espiritismo", aberto ao\n                            acaso ou previamente programado para estudo em sequência.\n                            '
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " A fim de oferecer maior dinâmica à reunião, sugere-se que a leitura seja coletiva e em voz alta, realizada por quantos integrantes sentirem-se à vontade a fazê-la, dedicando-se cada um a um parágrafo do texto por vez.\n                            "
              ),
              _c("br"),
              _vm._v(
                " É importante que a leitura seja feita em voz alta e clara, para que os ensinamentos alcancem também os irmãos desencarnados trazidos pelo Plano Espiritual a participarem dos estudos.\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " Os participantes devem promover breve e saudável debate sobre o texto lido, explorando o entendimento de cada um sobre a aplicação dos ensinamentos na vida diária, bem como a colocação de questões a serem esclarecidas\n                            ou pontos de vista a serem compartilhados.\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " Não deve haver discussões, críticas e julgamento entre os membros do grupo. O debate de ideias deve ocorrer à luz da Doutrina e eventuais dúvidas levantadas devem ter seu esclarecimento pesquisado e trazido por um dos\n                            membros em próximos encontros.\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " A reunião deve ser dirigida por um membro da família ou pela pessoa que tiver mais conhecimento doutrinário, que deverá estimular a participação de todos e conduzir as explicações ao nível do entendimento prático dos presentes.\n                            Pode-se promover a leitura de outras publicações voltadas à Doutrina (“O Livro dos Espíritos”, “O Livro dos Médiuns”, “O que é o Espiritismo”, “A Gênese”, “O Céu e o Inferno” etc).\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " Sugere-se que seja colocada toalha branca sobre a mesa e pode-se ainda colocar água em uma jarra sobre a mesma, para que seja fluidificada pelos Espíritos presentes, no transcorrer da reunião. Música suave pode contribuir\n                            para melhor ambientação, auxiliando as vibrações e preces.\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " Após a leitura do texto e o debate entre os participantes, deve ser proferida prece de encerramento, agradecendo pela assistência dos mentores espirituais e pelos bálsamos depositados na água pelos mesmos, os quais nos\n                            auxiliarão na busca da evolução espiritual através da verdadeira reforma íntima, pedindo que os bons fluidos produzidos na reunião permaneçam em cada um dos integrantes e em todo o lar, até a próxima reunião.\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " Recomenda-se que a duração seja de 30 a 45 minutos, a contar da prece de abertura à de encerramento.\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " Vale esclarecer que, ainda que somente um integrante do lar deseje introduzir a Prática do Evangelho, a realização é possível. Ressaltando que poderá estar solitário do ponto de vista da companhia de encarnados, entretanto\n                            estará acompanhado de Irmãos de Luz da Espiritualidade, os quais se regozijarão com a iniciativa do estudo e da busca pela reforma íntima.\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " Com o tempo, o exemplo da prática e os resultados benéficos do concurso em favor dos valores cristãos, motivarão outros membros da família a juntarem-se aos estudos. Nossos votos de muita Paz!\n    \n                        "
              )
            ])
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "text-primary" }, [_vm._v("Acolher")]),
          _vm._v(" "),
          _c("h6", { staticClass: "font-weigth-bold" }, [
            _vm._v("Instituto Kardecista de Estudos e Amparo")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-md-2" }, [
              _c("img", {
                staticClass: "img-fluid align-center",
                attrs: { src: "/../../acolher/public/img/logo.png", alt: "" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h3", { staticClass: "text-center text-primary" }, [
            _vm._v("Vibrações\n                    ")
          ]),
          _c("br"),
          _vm._v(" "),
          _c("section", [
            _c("p", [
              _vm._v(
                "\n                            Elevemos o nosso pensamento a Deus, através de Jesus, e solicitemos ao Divino Mestre a permissão para acompanha-Lo com os nossos corações, distribuindo vibrações de amor neste momento:\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(" Vibremos com Jesus!\n                            "),
              _c("br"),
              _vm._v(
                " Pela paz no nosso planeta;\n                            "
              ),
              _c("br"),
              _vm._v(
                " pelos enfermos encarnados e pelos moribundos;\n                            "
              ),
              _c("br"),
              _vm._v(
                " pelos sofredores desencarnados que se encontram na Crosta, no Umbral e nas Trevas;\n                            "
              ),
              _c("br"),
              _vm._v(
                " pela confraternização religiosa;\n                            "
              ),
              _c("br"),
              _vm._v(
                " pela expansão do Evangelho como norma de conduta;\n                            "
              ),
              _c("br"),
              _vm._v(
                " pelos espíritos que estão reencarnando com tarefas evangélicas definidas;\n                            "
              ),
              _c("br"),
              _vm._v(
                " pelos trabalhadores do bem;\n                            "
              ),
              _c("br"),
              _vm._v(
                " por nossos guias e mentores espirituais;\n                            "
              ),
              _c("br"),
              _vm._v(
                " pelo triunfo do bem em relação ao mal como guia dos nossos pensamentos e ações;\n                            "
              ),
              _c("br"),
              _vm._v(
                " por esta casa que nos acolhe;\n                            "
              ),
              _c("br"),
              _vm._v(
                " por todas as creches, asilos, orfanatos, hospitais, sanatórios e cadeias;\n                            "
              ),
              _c("br"),
              _vm._v(
                " pelas crianças, pelos jovens e pelos idosos;\n                            "
              ),
              _c("br"),
              _vm._v(
                " pelos nossos lares, nossos familiares, nossos amigos e inimigos!\n                            "
              ),
              _c("br"),
              _vm._v(" Que assim seja!\n                        ")
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row justify-content-center" }, [
            _c("div", { staticClass: "col-md-2" }, [
              _c("img", {
                staticClass: "img-fluid align-center",
                attrs: { src: "/../../acolher/public/img/logo.png", alt: "" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h3", { staticClass: "text-center text-danger" }, [
            _vm._v("Novena\n                    ")
          ]),
          _c("br"),
          _vm._v(" "),
          _c("section", { attrs: { id: "novena" } }, [
            _c("p", [
              _vm._v(
                "\n    \n    \n                            Realizar durante "
              ),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("9 dias")
              ]),
              _vm._v(
                " consecutivos, sem interrupção, o seguinte procedimento:\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("Etapa 1:")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" Acender "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("uma vela")
              ]),
              _vm._v(" no\n                            "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("quarto")
              ]),
              _vm._v(" e oferece-la ao\n                            "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("Anjo da Guarda")
              ]),
              _vm._v("; \n                            "),
              _c("br"),
              _vm._v("Prece: um "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("Pai Nosso")
              ]),
              _vm._v(" e uma\n                            "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("Ave Maria")
              ]),
              _vm._v(".\n    \n                            "),
              _c("br"),
              _c("br"),
              _vm._v(" ​​​​​​​\n                            "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("Etapa 2:")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" Acender "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("uma vela")
              ]),
              _vm._v(" atrás da\n                            "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("porta de entrada")
              ]),
              _vm._v(" da casa e oferece-la à\n                            "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("Nossa Senhora do Desterro")
              ]),
              _vm._v("; \n                            "),
              _c("br"),
              _vm._v("Prece: um "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("Pai Nosso")
              ]),
              _vm._v(" e uma\n                            "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("Ave Maria")
              ]),
              _vm._v(".\n                            "),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("Etapa 3:")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" Posicionar em "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("forma de triângulo")
              ]),
              _vm._v(" e acender "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("3 velas")
              ]),
              _vm._v(", ao "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("ar livre")
              ]),
              _vm._v(", e oferece-las à "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("“Corrente do Retorno”")
              ]),
              _vm._v(";\n                            "),
              _c("br"),
              _vm._v(
                "Não deve ser realizada prece nesta etapa.\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " Em caso de não realização em um dos dias, deve ser reiniciada a Novena.\n                            "
              ),
              _c("br"),
              _c("br"),
              _vm._v(
                " Nossos votos de muita Paz!\n                            "
              ),
              _c("br")
            ])
          ]),
          _vm._v(" "),
          _c("h6", { staticClass: "text-primary" }, [_vm._v("Acolher")]),
          _vm._v(" "),
          _c("h6", { staticClass: "font-weigth-bold" }, [
            _vm._v("Instituto Kardecista de Estudos e Amparo")
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h3", { staticClass: "text-center text-primary" }, [
            _vm._v("Bibliografia - Apometria\n                    ")
          ]),
          _c("br"),
          _vm._v(" "),
          _c("section", { attrs: { id: "bibliografia" } }, [
            _c("p", { staticClass: "text-primary" }, [
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nAZEVEDO, José Lacerda de\n"),
                _c("br"),
                _vm._v(
                  "\nEspirito e Matéria – Novos Horizontes para a Medicina.\n"
                ),
                _c("br")
              ]),
              _vm._v("\nPorto Alegre: Palotti, 1988. 296p.\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nAZEVEDO, José Lacerda de\n"),
                _c("br"),
                _vm._v(
                  "\nEnergia e Espírito – Teoria e Prática da Apometria.\n"
                ),
                _c("br")
              ]),
              _vm._v(
                "\n3a. ed. Caxias do Sul: Gráfica da UCS (Universidade de Caxias do Sul), 2002. 199p.\n"
              ),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("ANGELO INÁCIO")
              ]),
              _vm._v(" [psicografado por Robson Pinheiro Santos].\n"),
              _c("br"),
              _vm._v("\nTambores de Angola.\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("ANGELO INÁCIO")
              ]),
              _vm._v(" [psicografado por Robson Pinheiro Santos].\n"),
              _c("br"),
              _vm._v("\nAruanda.\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("ANGELO INÁCIO")
              ]),
              _vm._v(" [psicografado por Robson Pinheiro Santos].\n"),
              _c("br"),
              _vm._v("\nNo Reino das Sombras – Livro 1 – Legião\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v(
                  "BARSANULFO, Eurípedes; Ismael Alonso & Miguel de Alcântara."
                )
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v("\n[psicografado Por João Berbel].\n"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("Apometria Vista do Além. 3a. ed. Franca:")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v("\nEd. Farol das Três - Colinas, 2000. 216p.\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nBARZ, Patrícia e Geraldo Magela Borbagatto\n"),
                _c("br"),
                _vm._v("\nApometria para Iniciantes\n"),
                _c("br"),
                _c("br")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nFILHO, Gilberto Staniezki.\n"),
                _c("br"),
                _vm._v("\nApometria – Mais um Instrumento\n"),
                _c("br"),
                _c("br")
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nCOSTA, Vítor Ronaldo.\n"),
                _c("br"),
                _vm._v(
                  "\nApometria – Novos Horizontes da Medicina Espiritual.\n"
                ),
                _c("br")
              ]),
              _vm._v("\nMatão: Casa Editora O Clarim, 1997. 188p.\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nGODINHO, J. S.\n"),
                _c("br"),
                _vm._v("\nApometria – A Nova Ciência Da Alma.\n"),
                _c("br")
              ]),
              _vm._v("\nLages Holus Editora\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nGODINHO, J. S.\n"),
                _c("br"),
                _vm._v("\nRegressão de Memória e Apometria.\n"),
                _c("br")
              ]),
              _vm._v("\nLages Holus Editora\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nGODINHO, J. S.\n"),
                _c("br"),
                _vm._v("\nOs Portais da Felicidade – Apometria na Prática\n"),
                _c("br")
              ]),
              _vm._v("\nLages: HeckPublicações, 1997. 172p\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nGODINHO, J. S.\n"),
                _c("br"),
                _vm._v(
                  "\nApometria –O Caminho da Harmonia Espiritual e da Felicidade A Nova Ciência da Alma\n"
                ),
                _c("br")
              ]),
              _vm._v("\nLondrina: Editora Universalista, 1999.202p\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nGODINHO, J. S.\n"),
                _c("br"),
                _vm._v("\nDesvendando o Psiquismo – O Espírito em Terapia\n"),
                _c("br")
              ]),
              _vm._v("\nLages: Holus Editora, 1999. 222p\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nGODINHO, J. S.\n"),
                _c("br"),
                _vm._v(
                  "\nPsiquismo em Terapia – Regressão de Memória e Apometria\n"
                ),
                _c("br")
              ]),
              _vm._v("\nLimeira: Ed. Do Conhecimento, 2000. 256p\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nGODINHO, J. S.\n"),
                _c("br"),
                _vm._v("\nMediunidade e Apometria – Terapêutica Espiritual\n"),
                _c("br")
              ]),
              _vm._v("\nLages: Holus  Editora, 2002. 226p\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v(
                  "\nHERVÉ, Ivan Vianna, Rogério Sele da Silva, Volnei Borges, Eva Isabel Tejada\n"
                ),
                _c("br"),
                _vm._v(
                  "\nApometria – A conexão entre a Ciência e o Espiritismo\n"
                ),
                _c("br")
              ]),
              _vm._v("\nCasa Espírita João Pedro\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v(
                  "\nOLIVEIRA, AUGUSTO BRANDÃO DE , CARVALHO, PEDRO DIAS DE, OLIVEIRA, SHIRLEY ROSANA.\n"
                ),
                _c("br"),
                _vm._v("\nIntrodução à Apometria sem Incorporação\n"),
                _c("br")
              ]),
              _vm._v("\nshirleyroli@yahoo.com.br\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nRAMATÍS [psicografado por Norberto Peixoto]\n"),
                _c("br"),
                _vm._v("\nChama Crística\n"),
                _c("br")
              ]),
              _vm._v("\nLimeira: Ed. Do Conhecimento, 2001. 160p\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nRAMATÍS [psicografado por Norberto Peixoto]\n"),
                _c("br"),
                _vm._v("\nSamadhi\n"),
                _c("br")
              ]),
              _vm._v("\nLimeira: Ed. Do Conhecimento, 2002. 208p\n"),
              _c("br"),
              _c("br"),
              _vm._v(" "),
              _c("span", { staticClass: "font-weight-bold" }, [
                _vm._v("\nRAMATÍS [psicografado por Norberto Peixoto]\n"),
                _c("br"),
                _vm._v("\nTRILOGIA: APOMETRIA E UMBANDA\n"),
                _c("br")
              ]),
              _vm._v("\nLimeira: Ed. Do Conhecimento\n"),
              _c("br")
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuemSomos.vue?vue&type=template&id=2200f66e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuemSomos.vue?vue&type=template&id=2200f66e& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("nav-header"),
      _vm._v(" "),
      _c("div", { staticClass: "container" }),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SedeRecursos.vue?vue&type=template&id=7cc127b0&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SedeRecursos.vue?vue&type=template&id=7cc127b0& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("nav-header"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("Footer")],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-md-center" }, [
        _c("div", { staticClass: "col-md-3" }, [
          _c("img", {
            staticClass: "img-fluid align-center img-logo-home",
            attrs: { src: "/../../acolher/public/img/logo.png", alt: "" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row row-space" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("h2", { staticClass: "text-center" }, [_vm._v("SEDE E RECURSOS")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("  \nO Instituto "),
            _c("span", { staticClass: "font-weight-bold text-primary" }, [
              _vm._v("Acolher")
            ]),
            _vm._v(" possui \n"),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("Sede Própria")
            ]),
            _vm._v(
              " (disponibilizada através de comodato sem custos) onde\nocorrem as "
            ),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("atividades")
            ]),
            _vm._v(" dos \n"),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("diferentes grupos")
            ]),
            _vm._v(
              " que o constitui, \nbem como as iniciativas decorrentes\ndo próprio instituto."
            ),
            _c("br"),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "font-weight-bold" }, [_vm._v("Todas")]),
            _vm._v(" as atividades de "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("assistência")
            ]),
            _vm._v("\n e "),
            _c("span", { staticClass: "font-weight-bold" }, [_vm._v("apoio")]),
            _vm._v(" a "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("necessitados")
            ]),
            _vm._v("\n oferecidas nas dependências do\nInstituto "),
            _c("span", { staticClass: "font-weight-bold text-primary" }, [
              _vm._v("Acolher")
            ]),
            _vm._v(" são prestadas de maneira \n"),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("totalmente gratuita.")
            ]),
            _vm._v(" "),
            _c("br"),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v(
                "Em hipótese alguma pessoas em atendimento serão chamadas\n     a contribuir financeiramente com o instituto."
              )
            ]),
            _vm._v("\n Da mesma forma, são "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("vetadas")
            ]),
            _vm._v(" as práticas de \n "),
            _c("span", { staticClass: "font-weight-bold" }, [_vm._v("venda")]),
            _vm._v(" de "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("rifas, ingressos ")
            ]),
            _vm._v("\n ou "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("convites, durante ")
            ]),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("sessões")
            ]),
            _vm._v("\n  de "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("atendimento,")
            ]),
            _vm._v(" ocorridas nas dependências do \n Instituto "),
            _c("span", { staticClass: "font-weight-bold text-primary" }, [
              _vm._v("Acolher.")
            ]),
            _vm._v(" "),
            _c("br"),
            _c("br"),
            _vm._v("\n\nNo caso de "),
            _c("span", { staticClass: "font-weight-bold" }, [_vm._v("Cursos")]),
            _vm._v(" e "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("Palestras>,")
            ]),
            _vm._v("\n     poderão ser estabelecidas "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("taxas de contribuição")
            ]),
            _vm._v("\na serem "),
            _c("span", { staticClass: "font-weight-bold" }, [_vm._v("pagas")]),
            _vm._v(" pelos "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("participantes,")
            ]),
            _vm._v(" \n    como forma de "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("auxílio")
            ]),
            _vm._v(" nas \n    "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("despesas gerais,")
            ]),
            _vm._v("\n tais como: elaboração de "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("materiais de estudo,")
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("manutenção")
            ]),
            _vm._v(", "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("limpeza")
            ]),
            _vm._v(" etc. "),
            _c("br"),
            _c("br"),
            _vm._v("\n\nOs "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("interessados")
            ]),
            _vm._v(" em \n"),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("contribuir financeiramente")
            ]),
            _vm._v(" com o Instituto \n"),
            _c("span", { staticClass: "font-weight-bold text-primary" }, [
              _vm._v("Acolher")
            ]),
            _vm._v(
              " poderão fazê-lo\natravés das seguintes modalidades previstas em seu Estatuto: "
            ),
            _c("br"),
            _c("br"),
            _vm._v(" "),
            _c("ul", [
              _c("li", [
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("Associados Contribuintes:")
                ]),
                _vm._v(
                  "\n    membros registrados na secretaria do Instituto\ncomprometidos em efetuar contribuição mensal no valor de "
                ),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("R$ 60,00.")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("Frequentadores:")
                ]),
                _vm._v(
                  " membros registrados na secretaria do Instituto, \nparticipantes de cursos ou frequentadores das atividades de atendimento da casa, que, voluntariamente, \nqueiram contribuir com o valor de "
                ),
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("R$ 60,00")
                ]),
                _vm._v(" ou outro montante acordado com o Instituto.\n\n    ")
              ])
            ]),
            _vm._v(" "),
            _c("ul", [
              _c("li", [
                _c("span", { staticClass: "font-weight-bold" }, [
                  _vm._v("Simpatizantes: ")
                ]),
                _vm._v(
                  "  pessoas interessadas em contribuir pontualmente com o Instituto.\n    "
                )
              ])
            ]),
            _vm._v("\n\nO "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("registro")
            ]),
            _vm._v(" de "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("doações")
            ]),
            _vm._v(" na secretaria do Instituto \n"),
            _c("span", { staticClass: "font-weight-bold text-primary" }, [
              _vm._v("Acolher")
            ]),
            _vm._v(" é "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("confidencial")
            ]),
            _vm._v(" e "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("sigiloso,")
            ]),
            _vm._v("\n sendo mantido "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("exclusivamente")
            ]),
            _vm._v("\n para o devido "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("planejamento financeiro")
            ]),
            _vm._v(" da instituição e para "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("prestação de contas")
            ]),
            _vm._v("\n  ao "),
            _c("span", { staticClass: "font-weight-bold" }, [
              _vm._v("Conselho Fiscal.")
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Semear.vue?vue&type=template&id=7c2751c6&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Semear.vue?vue&type=template&id=7c2751c6& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("nav-header"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("Footer")],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row row-space" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("h3", { staticClass: "text-center" }, [
            _vm._v("CURSOS DISPONÍVEIS NO SEMEAR - ACOLHER ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row  row-space justify-content-center" }, [
            _c("div", { staticClass: "col-12 text-center" }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: {
                  src: "/../../acolher/public/img/semear/1.png",
                  alt: ""
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row  row-space justify-content-center" }, [
            _c("div", { staticClass: "col-12 text-center" }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: {
                  src: "/../../acolher/public/img/semear/2.png",
                  alt: ""
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row  row-space justify-content-center" }, [
            _c("div", { staticClass: "col-12 text-center" }, [
              _c("img", {
                staticClass: "img-fluid",
                attrs: {
                  src: "/../../acolher/public/img/semear/3.png",
                  alt: ""
                }
              })
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row row-space justify-content-center" }, [
          _c("div", { staticClass: "col-12 bg-light" }, [
            _c("p", { staticClass: "text-center" }, [
              _vm._v(
                "Rua Antônio Cristóvam, 134 - Jardim Bom Clima - Guarulhos / SP - CEP 07122-120"
              ),
              _c("br"),
              _vm._v(
                "\n          www.acolher.org | acolher.instituto@hotmail.com"
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/NavHeader.vue?vue&type=template&id=09a101af&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/NavHeader.vue?vue&type=template&id=09a101af& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid container-top" }, [
    _c("div", { staticClass: "row no-print justify-content-center nav-top" }, [
      _c(
        "div",
        { staticClass: "col-12 col-xs-12 col-sm-12 col-md-2 text-center" },
        [
          _c("router-link", { attrs: { to: "/" } }, [
            _c("img", {
              staticClass: "img-fluid align-center img-logo",
              attrs: { src: "/../../acolher/public/img/logo.png", alt: "" }
            })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-12 col-xs-12 col-sm-12 col-md-9" }, [
        _c("nav", { staticClass: "navbar navbar-expand-lg navbar-light" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "collapse navbar-collapse",
              attrs: { id: "navbarSupportedContent" }
            },
            [
              _c(
                "ul",
                { staticClass: "nav navbar-nav mx-auto" },
                [
                  _c(
                    "li",
                    { staticClass: "nav-item active" },
                    [
                      _c("router-link", { attrs: { to: "/" } }, [
                        _c(
                          "a",
                          { staticClass: "nav-link", attrs: { href: "#" } },
                          [
                            _vm._v(
                              "\n                                    Home\n                                    "
                            ),
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("(current)")
                            ])
                          ]
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c("router-link", { attrs: { to: "/institucional" } }, [
                        _c(
                          "a",
                          { staticClass: "nav-link", attrs: { href: "#" } },
                          [_vm._v("Institucional")]
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c("router-link", { attrs: { to: "/sederecursos" } }, [
                        _c(
                          "a",
                          { staticClass: "nav-link", attrs: { href: "#" } },
                          [_vm._v("Sede e Recursos")]
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c("router-link", { attrs: { to: "/direcao" } }, [
                        _c(
                          "a",
                          { staticClass: "nav-link", attrs: { href: "#" } },
                          [_vm._v("Direção")]
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("li", { staticClass: "nav-item" }),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c("router-link", { attrs: { to: "/publicacoes" } }, [
                        _c(
                          "a",
                          { staticClass: "nav-link", attrs: { href: "#" } },
                          [_vm._v("Publicações")]
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c("router-link", { attrs: { to: "/contato" } }, [
                        _c(
                          "a",
                          { staticClass: "nav-link", attrs: { href: "#" } },
                          [_vm._v("Contato")]
                        )
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { attrs: { to: "/horariodeatendimento" } },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-link", attrs: { href: "#" } },
                        [_vm._v("Horários de Atendimento")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c("router-link", { attrs: { to: "/semear" } }, [
                        _c(
                          "a",
                          { staticClass: "nav-link", attrs: { href: "#" } },
                          [_vm._v("Conteúdo dos Cursos")]
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ]
          )
        ]),
        _vm._v(" "),
        !_vm.login.data.id
          ? _c(
              "div",
              { staticClass: "text-center" },
              [
                _c("router-link", { attrs: { to: "/login" } }, [
                  _c("button", { staticClass: "btn btn-success btn-sm" }, [
                    _vm._v("Login")
                  ])
                ]),
                _vm._v(" "),
                _c("router-link", { attrs: { to: "/register" } }, [
                  _c("button", { staticClass: "btn btn-primary btn-sm" }, [
                    _vm._v("Cadastrar")
                  ])
                ])
              ],
              1
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.login.data.id
          ? _c("nav", { staticClass: "navbar navbar-expand-lg" }, [
              _c(
                "div",
                {
                  staticClass: "collapse navbar-collapse",
                  attrs: { id: "navbarSupportedContent" }
                },
                [
                  _c("ul", { staticClass: "nav navbar-nav mx-auto" }, [
                    _vm.login.data.user
                      ? _c("li", { staticClass: "nav-item dropdown" }, [
                          _c(
                            "a",
                            {
                              staticClass: "nav-link dropdown-toggle",
                              attrs: {
                                href: "#",
                                id: "navbarDropdown",
                                "data-hover": "dropdown",
                                role: "button",
                                "data-toggle": "dropdown",
                                "aria-haspopup": "true",
                                "aria-expanded": "false"
                              }
                            },
                            [
                              _vm._v(
                                "\n                                    Formulários\n                                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "dropdown-menu",
                              attrs: { "aria-labelledby": "navbarDropdown" }
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: "/formularios/atendimentoadulto"
                                  }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "dropdown-item",
                                      attrs: { href: "#" }
                                    },
                                    [
                                      _vm._v(
                                        "Cadastro Prévio para Atendimento a Adulto 1ª Vez"
                                      )
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.exibirCardObreiro
                      ? _c("li", { staticClass: "nav-item dropdown" }, [
                          _vm.login.data.id
                            ? _c(
                                "a",
                                {
                                  staticClass:
                                    "nav-link dropdown-toggle text-primary",
                                  attrs: {
                                    href: "#atendimentoDropdown",
                                    "aria-expanded": "false",
                                    "data-toggle": "collapse"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    Fluxo Operacional\n                                "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "ul",
                            {
                              staticClass: "collapse list-unstyled ",
                              attrs: { id: "atendimentoDropdown" }
                            },
                            [
                              _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: { to: { name: "encerramentos" } }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            Encerramentos Apometria\n                                        "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "fazertipoatendimento",
                                          params: {
                                            tipoatendimento:
                                              "Apometria (2as. feiras)"
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            Apometria\n                                        "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "fazertipoatendimento",
                                          params: {
                                            tipoatendimento:
                                              "Obreiros da Luz - Entidades de Umbanda(1 Sábado por mês)"
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            Obreiros da Luz\n                                        "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "fazertipoatendimento",
                                          params: {
                                            tipoatendimento:
                                              "Passes (2as. feiras)"
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            Passes\n                                        "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                [
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "fazertipoatendimento",
                                          params: {
                                            tipoatendimento:
                                              "Prática do Evangelho (5as. feiras)"
                                          }
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                            Prática do Evangelho\n                                        "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.login.data.id
                      ? _c(
                          "li",
                          { staticClass: "nav-item" },
                          [
                            _c(
                              "router-link",
                              { attrs: { to: "/atendimento" } },
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "nav-link text-primary",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("Solicitação de Atendimento")]
                                )
                              ]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.exibirCardObreiro
                      ? _c(
                          "li",
                          { staticClass: "nav-item" },
                          [
                            _vm.login.data.id
                              ? _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "cartaofrequentador",
                                        params: { id: _vm.login.data.id }
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link text-primary",
                                        attrs: { href: "#" }
                                      },
                                      [_vm._v("Carteirinha Frequentador")]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.exibirCardObreiro
                      ? _c(
                          "li",
                          { staticClass: "nav-item" },
                          [
                            _vm.login.data.id
                              ? _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "cartao",
                                        params: { id: _vm.login.data.id }
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link text-primary",
                                        attrs: { href: "#" }
                                      },
                                      [_vm._v("Cartão do Obreiro")]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.exibirCardObreiro
                      ? _c(
                          "li",
                          { staticClass: "nav-item" },
                          [
                            _vm.login.data.id
                              ? _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "cracha",
                                        params: { id: _vm.login.data.id }
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "nav-link text-primary",
                                        attrs: { href: "#" }
                                      },
                                      [_vm._v("Crachá do Obreiro")]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass: " btn btn-danger btn-sm",
                          on: {
                            click: function($event) {
                              _vm.sair()
                            }
                          }
                        },
                        [_vm._v("Sair")]
                      )
                    ])
                  ])
                ]
              )
            ])
          : _vm._e()
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
     true &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ( true && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),

/***/ "./resources/js/components/App.vue":
/*!*****************************************!*\
  !*** ./resources/js/components/App.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=332fccf4& */ "./resources/js/components/App.vue?vue&type=template&id=332fccf4&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/App.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/components/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/App.vue?vue&type=template&id=332fccf4&":
/*!************************************************************************!*\
  !*** ./resources/js/components/App.vue?vue&type=template&id=332fccf4& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=332fccf4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App.vue?vue&type=template&id=332fccf4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_332fccf4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Contato.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Contato.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contato_vue_vue_type_template_id_12adaae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contato.vue?vue&type=template&id=12adaae2& */ "./resources/js/components/Contato.vue?vue&type=template&id=12adaae2&");
/* harmony import */ var _Contato_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contato.vue?vue&type=script&lang=js& */ "./resources/js/components/Contato.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Contato_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Contato_vue_vue_type_template_id_12adaae2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Contato_vue_vue_type_template_id_12adaae2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Contato.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Contato.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Contato.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contato_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Contato.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contato.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contato_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Contato.vue?vue&type=template&id=12adaae2&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Contato.vue?vue&type=template&id=12adaae2& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contato_vue_vue_type_template_id_12adaae2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Contato.vue?vue&type=template&id=12adaae2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Contato.vue?vue&type=template&id=12adaae2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contato_vue_vue_type_template_id_12adaae2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contato_vue_vue_type_template_id_12adaae2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Direcao.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Direcao.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Direcao_vue_vue_type_template_id_5615b43e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Direcao.vue?vue&type=template&id=5615b43e&scoped=true& */ "./resources/js/components/Direcao.vue?vue&type=template&id=5615b43e&scoped=true&");
/* harmony import */ var _Direcao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Direcao.vue?vue&type=script&lang=js& */ "./resources/js/components/Direcao.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Direcao_vue_vue_type_style_index_0_id_5615b43e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Direcao.vue?vue&type=style&index=0&id=5615b43e&scoped=true&lang=css& */ "./resources/js/components/Direcao.vue?vue&type=style&index=0&id=5615b43e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Direcao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Direcao_vue_vue_type_template_id_5615b43e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Direcao_vue_vue_type_template_id_5615b43e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5615b43e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Direcao.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Direcao.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Direcao.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Direcao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Direcao.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Direcao.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Direcao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Direcao.vue?vue&type=style&index=0&id=5615b43e&scoped=true&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Direcao.vue?vue&type=style&index=0&id=5615b43e&scoped=true&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Direcao_vue_vue_type_style_index_0_id_5615b43e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Direcao.vue?vue&type=style&index=0&id=5615b43e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Direcao.vue?vue&type=style&index=0&id=5615b43e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Direcao_vue_vue_type_style_index_0_id_5615b43e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Direcao_vue_vue_type_style_index_0_id_5615b43e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Direcao_vue_vue_type_style_index_0_id_5615b43e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Direcao_vue_vue_type_style_index_0_id_5615b43e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Direcao_vue_vue_type_style_index_0_id_5615b43e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Direcao.vue?vue&type=template&id=5615b43e&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Direcao.vue?vue&type=template&id=5615b43e&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Direcao_vue_vue_type_template_id_5615b43e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Direcao.vue?vue&type=template&id=5615b43e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Direcao.vue?vue&type=template&id=5615b43e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Direcao_vue_vue_type_template_id_5615b43e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Direcao_vue_vue_type_template_id_5615b43e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony import */ var _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExampleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c& */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=f2b6376c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_f2b6376c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/HorarioAtendimento.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/HorarioAtendimento.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorarioAtendimento_vue_vue_type_template_id_85d8d18e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorarioAtendimento.vue?vue&type=template&id=85d8d18e& */ "./resources/js/components/HorarioAtendimento.vue?vue&type=template&id=85d8d18e&");
/* harmony import */ var _HorarioAtendimento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorarioAtendimento.vue?vue&type=script&lang=js& */ "./resources/js/components/HorarioAtendimento.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HorarioAtendimento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorarioAtendimento_vue_vue_type_template_id_85d8d18e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorarioAtendimento_vue_vue_type_template_id_85d8d18e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HorarioAtendimento.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/HorarioAtendimento.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/HorarioAtendimento.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorarioAtendimento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HorarioAtendimento.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HorarioAtendimento.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorarioAtendimento_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/HorarioAtendimento.vue?vue&type=template&id=85d8d18e&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/HorarioAtendimento.vue?vue&type=template&id=85d8d18e& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorarioAtendimento_vue_vue_type_template_id_85d8d18e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HorarioAtendimento.vue?vue&type=template&id=85d8d18e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HorarioAtendimento.vue?vue&type=template&id=85d8d18e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorarioAtendimento_vue_vue_type_template_id_85d8d18e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorarioAtendimento_vue_vue_type_template_id_85d8d18e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Institucional.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Institucional.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Institucional_vue_vue_type_template_id_8103da0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Institucional.vue?vue&type=template&id=8103da0e&scoped=true& */ "./resources/js/components/Institucional.vue?vue&type=template&id=8103da0e&scoped=true&");
/* harmony import */ var _Institucional_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Institucional.vue?vue&type=script&lang=js& */ "./resources/js/components/Institucional.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Institucional_vue_vue_type_style_index_0_id_8103da0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Institucional.vue?vue&type=style&index=0&id=8103da0e&scoped=true&lang=css& */ "./resources/js/components/Institucional.vue?vue&type=style&index=0&id=8103da0e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Institucional_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Institucional_vue_vue_type_template_id_8103da0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Institucional_vue_vue_type_template_id_8103da0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8103da0e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Institucional.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Institucional.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Institucional.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Institucional_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Institucional.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Institucional.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Institucional_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Institucional.vue?vue&type=style&index=0&id=8103da0e&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Institucional.vue?vue&type=style&index=0&id=8103da0e&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Institucional_vue_vue_type_style_index_0_id_8103da0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Institucional.vue?vue&type=style&index=0&id=8103da0e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Institucional.vue?vue&type=style&index=0&id=8103da0e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Institucional_vue_vue_type_style_index_0_id_8103da0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Institucional_vue_vue_type_style_index_0_id_8103da0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Institucional_vue_vue_type_style_index_0_id_8103da0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Institucional_vue_vue_type_style_index_0_id_8103da0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Institucional_vue_vue_type_style_index_0_id_8103da0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Institucional.vue?vue&type=template&id=8103da0e&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Institucional.vue?vue&type=template&id=8103da0e&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Institucional_vue_vue_type_template_id_8103da0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Institucional.vue?vue&type=template&id=8103da0e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Institucional.vue?vue&type=template&id=8103da0e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Institucional_vue_vue_type_template_id_8103da0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Institucional_vue_vue_type_template_id_8103da0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Publicacoes.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Publicacoes.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Publicacoes_vue_vue_type_template_id_ee1de1d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Publicacoes.vue?vue&type=template&id=ee1de1d2& */ "./resources/js/components/Publicacoes.vue?vue&type=template&id=ee1de1d2&");
/* harmony import */ var _Publicacoes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Publicacoes.vue?vue&type=script&lang=js& */ "./resources/js/components/Publicacoes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Publicacoes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Publicacoes_vue_vue_type_template_id_ee1de1d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Publicacoes_vue_vue_type_template_id_ee1de1d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Publicacoes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Publicacoes.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Publicacoes.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Publicacoes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Publicacoes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publicacoes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Publicacoes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Publicacoes.vue?vue&type=template&id=ee1de1d2&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Publicacoes.vue?vue&type=template&id=ee1de1d2& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Publicacoes_vue_vue_type_template_id_ee1de1d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Publicacoes.vue?vue&type=template&id=ee1de1d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Publicacoes.vue?vue&type=template&id=ee1de1d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Publicacoes_vue_vue_type_template_id_ee1de1d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Publicacoes_vue_vue_type_template_id_ee1de1d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/QuemSomos.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/QuemSomos.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuemSomos_vue_vue_type_template_id_2200f66e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuemSomos.vue?vue&type=template&id=2200f66e& */ "./resources/js/components/QuemSomos.vue?vue&type=template&id=2200f66e&");
/* harmony import */ var _QuemSomos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuemSomos.vue?vue&type=script&lang=js& */ "./resources/js/components/QuemSomos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuemSomos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuemSomos_vue_vue_type_template_id_2200f66e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuemSomos_vue_vue_type_template_id_2200f66e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/QuemSomos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/QuemSomos.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/QuemSomos.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuemSomos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./QuemSomos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuemSomos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuemSomos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/QuemSomos.vue?vue&type=template&id=2200f66e&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/QuemSomos.vue?vue&type=template&id=2200f66e& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuemSomos_vue_vue_type_template_id_2200f66e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./QuemSomos.vue?vue&type=template&id=2200f66e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuemSomos.vue?vue&type=template&id=2200f66e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuemSomos_vue_vue_type_template_id_2200f66e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuemSomos_vue_vue_type_template_id_2200f66e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SedeRecursos.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/SedeRecursos.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SedeRecursos_vue_vue_type_template_id_7cc127b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SedeRecursos.vue?vue&type=template&id=7cc127b0& */ "./resources/js/components/SedeRecursos.vue?vue&type=template&id=7cc127b0&");
/* harmony import */ var _SedeRecursos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SedeRecursos.vue?vue&type=script&lang=js& */ "./resources/js/components/SedeRecursos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SedeRecursos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SedeRecursos_vue_vue_type_template_id_7cc127b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SedeRecursos_vue_vue_type_template_id_7cc127b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SedeRecursos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SedeRecursos.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/SedeRecursos.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SedeRecursos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SedeRecursos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SedeRecursos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SedeRecursos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SedeRecursos.vue?vue&type=template&id=7cc127b0&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/SedeRecursos.vue?vue&type=template&id=7cc127b0& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SedeRecursos_vue_vue_type_template_id_7cc127b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SedeRecursos.vue?vue&type=template&id=7cc127b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SedeRecursos.vue?vue&type=template&id=7cc127b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SedeRecursos_vue_vue_type_template_id_7cc127b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SedeRecursos_vue_vue_type_template_id_7cc127b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Semear.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Semear.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Semear_vue_vue_type_template_id_7c2751c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Semear.vue?vue&type=template&id=7c2751c6& */ "./resources/js/components/Semear.vue?vue&type=template&id=7c2751c6&");
/* harmony import */ var _Semear_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Semear.vue?vue&type=script&lang=js& */ "./resources/js/components/Semear.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Semear_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Semear_vue_vue_type_template_id_7c2751c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Semear_vue_vue_type_template_id_7c2751c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Semear.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Semear.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Semear.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Semear_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Semear.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Semear.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Semear_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Semear.vue?vue&type=template&id=7c2751c6&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Semear.vue?vue&type=template&id=7c2751c6& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Semear_vue_vue_type_template_id_7c2751c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Semear.vue?vue&type=template&id=7c2751c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Semear.vue?vue&type=template&id=7c2751c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Semear_vue_vue_type_template_id_7c2751c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Semear_vue_vue_type_template_id_7c2751c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/Footer.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/layouts/Footer.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=a242bae8& */ "./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Footer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/layouts/Footer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=a242bae8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Footer.vue?vue&type=template&id=a242bae8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_a242bae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/NavHeader.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/layouts/NavHeader.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavHeader_vue_vue_type_template_id_09a101af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavHeader.vue?vue&type=template&id=09a101af& */ "./resources/js/components/layouts/NavHeader.vue?vue&type=template&id=09a101af&");
/* harmony import */ var _NavHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/NavHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NavHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavHeader.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/layouts/NavHeader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NavHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavHeader_vue_vue_type_template_id_09a101af___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavHeader_vue_vue_type_template_id_09a101af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/NavHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/NavHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/layouts/NavHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/NavHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/NavHeader.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/layouts/NavHeader.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavHeader.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/NavHeader.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavHeader_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/layouts/NavHeader.vue?vue&type=template&id=09a101af&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/layouts/NavHeader.vue?vue&type=template&id=09a101af& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavHeader_vue_vue_type_template_id_09a101af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavHeader.vue?vue&type=template&id=09a101af& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/NavHeader.vue?vue&type=template&id=09a101af&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavHeader_vue_vue_type_template_id_09a101af___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavHeader_vue_vue_type_template_id_09a101af___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 2:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/js/components/App.vue ./resources/js/components/Contato.vue ./resources/js/components/Direcao.vue ./resources/js/components/ExampleComponent.vue ./resources/js/components/Home.vue ./resources/js/components/HorarioAtendimento.vue ./resources/js/components/Institucional.vue ./resources/js/components/Publicacoes.vue ./resources/js/components/QuemSomos.vue ./resources/js/components/SedeRecursos.vue ./resources/js/components/Semear.vue ./resources/js/components/layouts/Footer.vue ./resources/js/components/layouts/NavHeader.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /opt/lampp/htdocs/acolher/resources/js/components/App.vue */"./resources/js/components/App.vue");
__webpack_require__(/*! /opt/lampp/htdocs/acolher/resources/js/components/Contato.vue */"./resources/js/components/Contato.vue");
__webpack_require__(/*! /opt/lampp/htdocs/acolher/resources/js/components/Direcao.vue */"./resources/js/components/Direcao.vue");
__webpack_require__(/*! /opt/lampp/htdocs/acolher/resources/js/components/ExampleComponent.vue */"./resources/js/components/ExampleComponent.vue");
__webpack_require__(/*! /opt/lampp/htdocs/acolher/resources/js/components/Home.vue */"./resources/js/components/Home.vue");
__webpack_require__(/*! /opt/lampp/htdocs/acolher/resources/js/components/HorarioAtendimento.vue */"./resources/js/components/HorarioAtendimento.vue");
__webpack_require__(/*! /opt/lampp/htdocs/acolher/resources/js/components/Institucional.vue */"./resources/js/components/Institucional.vue");
__webpack_require__(/*! /opt/lampp/htdocs/acolher/resources/js/components/Publicacoes.vue */"./resources/js/components/Publicacoes.vue");
__webpack_require__(/*! /opt/lampp/htdocs/acolher/resources/js/components/QuemSomos.vue */"./resources/js/components/QuemSomos.vue");
__webpack_require__(/*! /opt/lampp/htdocs/acolher/resources/js/components/SedeRecursos.vue */"./resources/js/components/SedeRecursos.vue");
__webpack_require__(/*! /opt/lampp/htdocs/acolher/resources/js/components/Semear.vue */"./resources/js/components/Semear.vue");
__webpack_require__(/*! /opt/lampp/htdocs/acolher/resources/js/components/layouts/Footer.vue */"./resources/js/components/layouts/Footer.vue");
module.exports = __webpack_require__(/*! /opt/lampp/htdocs/acolher/resources/js/components/layouts/NavHeader.vue */"./resources/js/components/layouts/NavHeader.vue");


/***/ })

/******/ });