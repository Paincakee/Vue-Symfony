(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/vue/controllers sync recursive \\.vue$":
/*!*********************************************!*\
  !*** ./assets/vue/controllers/ sync \.vue$ ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Chat.vue": "./assets/vue/controllers/Chat.vue",
	"./Hello.vue": "./assets/vue/controllers/Hello.vue",
	"./Quiz-chooser.vue": "./assets/vue/controllers/Quiz-chooser.vue",
	"./Quiz-game.vue": "./assets/vue/controllers/Quiz-game.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/vue/controllers sync recursive \\.vue$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js");
/* harmony import */ var _symfony_ux_vue_dist_render_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-vue/dist/render_controller.js */ "./vendor/symfony/ux-vue/assets/dist/render_controller.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-turbo--turbo-core': _symfony_ux_turbo_dist_turbo_controller_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  'symfony--ux-vue--vue': _symfony_ux_vue_dist_render_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"],
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _symfony_ux_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/ux-vue */ "./vendor/symfony/ux-vue/assets/dist/register_controller.js");
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
__webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
(0,_symfony_ux_vue__WEBPACK_IMPORTED_MODULE_0__.registerVueControllerComponents)(__webpack_require__("./assets/vue/controllers sync recursive \\.vue$"));

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Chat.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Chat.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['user'],
  data: function data() {
    return {
      socket: null,
      message: '',
      messages: []
    };
  },
  created: function created() {
    var _this = this;
    this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.io)('http://127.0.0.1:3000');
    this.socket.emit('storeUser', this.user);
    this.socket.on('joined', function (user) {
      return console.log("user: ".concat(user.username, " joined"));
    });
    this.socket.on('message', function (msg) {
      _this.messages.push(msg);
    });
    this.socket.on('disconnect', function () {
      console.log('Disconnected from WebSocket server');
    });
  },
  methods: {
    sendMessage: function sendMessage() {
      this.socket.emit('message', this.message);
      this.message = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Hello.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Hello.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Hello',
  props: {
    name: String
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var __returned__ = {};
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-chooser.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-chooser.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['quizzes']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-game.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-game.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _images_encore_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../images/encore.jpg */ "./assets/images/encore.jpg");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }































/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    quiz: {
      type: Object,
      required: true
    },
    currentUser: {
      type: Object
    }
  },
  data: function data() {
    return {
      questionIndex: 0,
      gameOver: false,
      player: {
        user: this.currentUser,
        answer: null,
        score: 0,
        admin: false
      },
      clickable: true,
      socket: null,
      activeAnswerId: null,
      image: _images_encore_jpg__WEBPACK_IMPORTED_MODULE_29__
    };
  },
  created: function created() {
    this.initializeSocket();
  },
  mounted: function mounted() {
    this.loadFromLocalStorage();
    this.checkAdminRole();
  },
  methods: {
    initializeSocket: function initializeSocket() {
      this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_28__.io)("http://127.0.0.1:3000");
      this.socket.emit("storeUser", this.currentUser.username);
      this.socket.on("joined", function (user) {
        return console.log("User: ".concat(user.username, " joined"));
      });
      this.socket.on("next-question", this.handleNextQuestion);
      this.socket.on("end-game", this.handleEndGame);
      this.socket.on("clear-data", this.clearLocalData);
    },
    loadFromLocalStorage: function loadFromLocalStorage() {
      var storedQuestionIndex = localStorage.getItem("questionIndex");
      var storedGameOver = localStorage.getItem("gameOver");
      var storedScore = localStorage.getItem("playerScore");
      var storedClickable = localStorage.getItem("clickable");
      if (storedQuestionIndex !== null) this.questionIndex = parseInt(storedQuestionIndex);
      if (storedGameOver !== null) this.gameOver = JSON.parse(storedGameOver);
      if (storedScore !== null) this.player.score = parseInt(storedScore);
      if (storedClickable !== null) this.clickable = JSON.parse(storedClickable);
    },
    checkAdminRole: function checkAdminRole() {
      if (this.currentUser.roles.includes("ROLE_ADMIN")) {
        this.player.admin = true;
      }
    },
    handleNextQuestion: function handleNextQuestion(index) {
      this.checkCorrect();
      this.questionIndex = index;
      this.clickable = true;
      this.activeAnswerId = null;
      this.player.answer = null;
      this.updateLocalStorage();
    },
    handleEndGame: function handleEndGame(gameOver) {
      this.gameOver = gameOver;
      this.checkCorrect();
      this.updateLocalStorage();
    },
    updateLocalStorage: function updateLocalStorage() {
      localStorage.setItem("questionIndex", this.questionIndex);
      localStorage.setItem("playerScore", this.player.score);
      localStorage.setItem("clickable", this.clickable);
      localStorage.setItem("gameOver", this.gameOver);
    },
    nextQuestion: function nextQuestion() {
      var _this = this;
      if (this.questionIndex < this.quiz.questions.length - 1) {
        this.checkAllAnswersProvided().then(function (answered) {
          if (answered) _this.socket.emit("next-question", _this.questionIndex);
        });
      } else {
        this.checkAllAnswersProvided().then(function (answered) {
          if (answered) _this.socket.emit("end-game", true);
        });
      }
    },
    checkAllAnswersProvided: function checkAllAnswersProvided() {
      var _this2 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var allAnswered, users;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              allAnswered = true;
              _context.next = 3;
              return _this2.getUsers();
            case 3:
              users = _context.sent;
              users.forEach(function (user) {
                if (!user.answer) {
                  console.log("".concat(user.username, " hasn't filled in their answer"));
                  allAnswered = false;
                }
              });
              return _context.abrupt("return", allAnswered);
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    checkCorrect: function checkCorrect() {
      var _this$player$answer;
      if ((_this$player$answer = this.player.answer) !== null && _this$player$answer !== void 0 && _this$player$answer.correct) {
        this.player.score++;
      }
      this.player.answer = null;
    },
    clearLocalData: function clearLocalData() {
      localStorage.clear();
      this.gameOver = false;
      this.questionIndex = 0;
      this.player.score = 0;
      this.clickable = true;
      this.activeAnswerId = null;
    },
    resetData: function resetData() {
      this.socket.emit('clear-data');
    },
    answerQuestion: function answerQuestion(answer) {
      if (this.clickable) {
        console.log(answer);
        this.player.answer = answer;
        this.activeAnswerId = answer.id;
        this.clickable = false;
        this.updateLocalStorage();
        this.socket.emit("answer-question", [this.currentUser.username, this.player.answer]);
      }
    },
    getUsers: function getUsers() {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("http://127.0.0.1:3000/users");
            case 3:
              response = _context2.sent;
              return _context2.abrupt("return", response.data);
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error("There was an error fetching the users!", _context2.t0);
              return _context2.abrupt("return", []);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    getProgressPercentage: function getProgressPercentage() {
      return Math.round((this.questionIndex + 1) / this.quiz.questions.length * 100);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Chat.vue?vue&type=template&id=6e3aa807":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Chat.vue?vue&type=template&id=6e3aa807 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", null, "Real-time Chat", -1 /* HOISTED */);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.messages, function (message, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(message), 1 /* TEXT */);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.message = $event;
    }),
    onKeyup: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)(function () {
      return $options.sendMessage && $options.sendMessage.apply($options, arguments);
    }, ["enter"])),
    placeholder: "Type a message"
  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.message]])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Hello.vue?vue&type=template&id=427e0733":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Hello.vue?vue&type=template&id=427e0733 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("div", null, "Hello " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($props.name) + "!", 1 /* TEXT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-chooser.vue?vue&type=template&id=33c5e41c":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-chooser.vue?vue&type=template&id=33c5e41c ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("h2", null, "Available Quizzes", -1 /* HOISTED */);
var _hoisted_2 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("div", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.renderList)($props.quizzes, function (quiz) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)("li", {
      key: quiz.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)("a", {
      href: quiz.link
    }, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(quiz.title), 9 /* TEXT, PROPS */, _hoisted_2)]);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)($props.quizzes), 1 /* TEXT */)], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-game.vue?vue&type=template&id=37084e4b&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-game.vue?vue&type=template&id=37084e4b&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-37084e4b"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = {
  "class": "game-container d-flex align-items-center flex-column"
};
var _hoisted_2 = {
  "class": "header mt-4"
};
var _hoisted_3 = {
  "class": "title-wrapper d-flex justify-content-between"
};
var _hoisted_4 = {
  "class": "m-0 fs-3"
};
var _hoisted_5 = {
  "class": "m-0 fs-3"
};
var _hoisted_6 = {
  "class": "progress mt-1"
};
var _hoisted_7 = ["aria-valuenow"];
var _hoisted_8 = ["src"];
var _hoisted_9 = {
  key: 0,
  "class": "mt-2 wrapper"
};
var _hoisted_10 = {
  "class": "game-question d-flex align-items-center"
};
var _hoisted_11 = {
  "class": "game-index d-flex align-items-center justify-content-center me-2"
};
var _hoisted_12 = {
  "class": "fs-2"
};
var _hoisted_13 = {
  "class": "m-0"
};
var _hoisted_14 = {
  "class": "answer-grid d-flex flex-column"
};
var _hoisted_15 = ["onClick"];
var _hoisted_16 = {
  "class": "answer-index"
};
var _hoisted_17 = {
  key: 1,
  "class": "kahoot-message"
};
var _hoisted_18 = {
  "class": "admin-group"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quiz.title) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.player.score) + " - " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.gameOver), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.questionIndex + 1) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quiz.questions.length), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "progress-bar",
    role: "progressbar",
    "aria-valuenow": $options.getProgressPercentage(),
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: $options.getProgressPercentage() + '%'
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getProgressPercentage()) + "% ", 13 /* TEXT, STYLE, PROPS */, _hoisted_7)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $data.image,
    alt: "",
    "class": "game-image mt-1"
  }, null, 8 /* PROPS */, _hoisted_8)]), !$data.gameOver && $props.quiz.questions && $data.questionIndex < $props.quiz.questions.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.questionIndex + 1), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quiz.questions[$data.questionIndex].question), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.quiz.questions[$data.questionIndex].answers, function (answer, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: answer.id,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["game-answer", {
        'active-answer': answer.id === $data.activeAnswerId
      }]),
      onClick: function onClick($event) {
        return $options.answerQuestion(answer);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(String.fromCharCode(65 + index)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(answer.answer), 1 /* TEXT */)])], 10 /* CLASS, PROPS */, _hoisted_15);
  }), 128 /* KEYED_FRAGMENT */))])])) : $data.gameOver ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_17, "No questions available")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [$data.player.admin && !$data.gameOver ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.nextQuestion && $options.nextQuestion.apply($options, arguments);
    }),
    "class": "kahoot-button"
  }, "Next Question")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.player.admin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.resetData && $options.resetData.apply($options, arguments);
    }),
    "class": "kahoot-button"
  }, "Reset Data")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
}

/***/ }),

/***/ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js":
/*!*****************************************************************!*\
  !*** ./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ turbo_controller)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _hotwired_turbo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/turbo */ "./node_modules/@hotwired/turbo/dist/turbo.es2017-esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


















function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var turbo_controller = /*#__PURE__*/function (_Controller) {
  function turbo_controller() {
    _classCallCheck(this, turbo_controller);
    return _callSuper(this, turbo_controller, arguments);
  }
  _inherits(turbo_controller, _Controller);
  return _createClass(turbo_controller);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__.Controller);


/***/ }),

/***/ "./vendor/symfony/ux-vue/assets/dist/register_controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-vue/assets/dist/register_controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerVueControllerComponents: () => (/* binding */ registerVueControllerComponents)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");














function registerVueControllerComponents(context) {
  var vueControllers = context.keys().reduce(function (acc, key) {
    acc[key] = undefined;
    return acc;
  }, {});
  function loadComponent(name) {
    var componentPath = "./".concat(name, ".vue");
    if (!(componentPath in vueControllers)) {
      var possibleValues = Object.keys(vueControllers).map(function (key) {
        return key.replace('./', '').replace('.vue', '');
      });
      throw new Error("Vue controller \"".concat(name, "\" does not exist. Possible values: ").concat(possibleValues.join(', ')));
    }
    if (typeof vueControllers[componentPath] === 'undefined') {
      var module = context(componentPath);
      if (module["default"]) {
        vueControllers[componentPath] = module["default"];
      } else if (module instanceof Promise) {
        vueControllers[componentPath] = (0,vue__WEBPACK_IMPORTED_MODULE_13__.defineAsyncComponent)(function () {
          return new Promise(function (resolve, reject) {
            module.then(function (resolvedModule) {
              if (resolvedModule["default"]) {
                resolve(resolvedModule["default"]);
              } else {
                reject(new Error("Cannot find default export in async Vue controller \"".concat(name, "\".")));
              }
            })["catch"](reject);
          });
        });
      } else {
        throw new Error("Vue controller \"".concat(name, "\" does not exist."));
      }
    }
    return vueControllers[componentPath];
  }
  window.resolveVueComponent = function (name) {
    return loadComponent(name);
  };
}


/***/ }),

/***/ "./vendor/symfony/ux-vue/assets/dist/render_controller.js":
/*!****************************************************************!*\
  !*** ./vendor/symfony/ux-vue/assets/dist/render_controller.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var default_1 = /*#__PURE__*/function (_Controller) {
  function default_1() {
    _classCallCheck(this, default_1);
    return _callSuper(this, default_1, arguments);
  }
  _inherits(default_1, _Controller);
  return _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var _a;
      this.props = (_a = this.propsValue) !== null && _a !== void 0 ? _a : null;
      this.dispatchEvent('connect', {
        componentName: this.componentValue,
        props: this.props
      });
      var component = window.resolveVueComponent(this.componentValue);
      this.app = (0,vue__WEBPACK_IMPORTED_MODULE_19__.createApp)(component, this.props);
      if (this.element.__vue_app__ !== undefined) {
        this.element.__vue_app__.unmount();
      }
      this.dispatchEvent('before-mount', {
        componentName: this.componentValue,
        component: component,
        props: this.props,
        app: this.app
      });
      this.app.mount(this.element);
      this.dispatchEvent('mount', {
        componentName: this.componentValue,
        component: component,
        props: this.props
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.app.unmount();
      this.dispatchEvent('unmount', {
        componentName: this.componentValue,
        props: this.props
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'vue'
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__.Controller);
default_1.values = {
  component: String,
  props: Object
};


/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-game.vue?vue&type=style&index=0&id=37084e4b&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-game.vue?vue&type=style&index=0&id=37084e4b&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/vue/controllers/Chat.vue":
/*!*****************************************!*\
  !*** ./assets/vue/controllers/Chat.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chat_vue_vue_type_template_id_6e3aa807__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=6e3aa807 */ "./assets/vue/controllers/Chat.vue?vue&type=template&id=6e3aa807");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js */ "./assets/vue/controllers/Chat.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Chat_vue_vue_type_template_id_6e3aa807__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/vue/controllers/Chat.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/vue/controllers/Hello.vue":
/*!******************************************!*\
  !*** ./assets/vue/controllers/Hello.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hello_vue_vue_type_template_id_427e0733__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hello.vue?vue&type=template&id=427e0733 */ "./assets/vue/controllers/Hello.vue?vue&type=template&id=427e0733");
/* harmony import */ var _Hello_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hello.vue?vue&type=script&setup=true&lang=js */ "./assets/vue/controllers/Hello.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Hello_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Hello_vue_vue_type_template_id_427e0733__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/vue/controllers/Hello.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/vue/controllers/Quiz-chooser.vue":
/*!*************************************************!*\
  !*** ./assets/vue/controllers/Quiz-chooser.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Quiz_chooser_vue_vue_type_template_id_33c5e41c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quiz-chooser.vue?vue&type=template&id=33c5e41c */ "./assets/vue/controllers/Quiz-chooser.vue?vue&type=template&id=33c5e41c");
/* harmony import */ var _Quiz_chooser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quiz-chooser.vue?vue&type=script&lang=js */ "./assets/vue/controllers/Quiz-chooser.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Quiz_chooser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Quiz_chooser_vue_vue_type_template_id_33c5e41c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"assets/vue/controllers/Quiz-chooser.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/vue/controllers/Quiz-game.vue":
/*!**********************************************!*\
  !*** ./assets/vue/controllers/Quiz-game.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Quiz_game_vue_vue_type_template_id_37084e4b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quiz-game.vue?vue&type=template&id=37084e4b&scoped=true */ "./assets/vue/controllers/Quiz-game.vue?vue&type=template&id=37084e4b&scoped=true");
/* harmony import */ var _Quiz_game_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quiz-game.vue?vue&type=script&lang=js */ "./assets/vue/controllers/Quiz-game.vue?vue&type=script&lang=js");
/* harmony import */ var _Quiz_game_vue_vue_type_style_index_0_id_37084e4b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Quiz-game.vue?vue&type=style&index=0&id=37084e4b&scoped=true&lang=css */ "./assets/vue/controllers/Quiz-game.vue?vue&type=style&index=0&id=37084e4b&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Quiz_game_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Quiz_game_vue_vue_type_template_id_37084e4b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-37084e4b"],['__file',"assets/vue/controllers/Quiz-game.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/vue/controllers/Chat.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./assets/vue/controllers/Chat.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Chat.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Chat.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/vue/controllers/Hello.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************!*\
  !*** ./assets/vue/controllers/Hello.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Hello_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Hello_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Hello.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Hello.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./assets/vue/controllers/Quiz-chooser.vue?vue&type=script&lang=js":
/*!*************************************************************************!*\
  !*** ./assets/vue/controllers/Quiz-chooser.vue?vue&type=script&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Quiz_chooser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Quiz_chooser_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Quiz-chooser.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-chooser.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/vue/controllers/Quiz-game.vue?vue&type=script&lang=js":
/*!**********************************************************************!*\
  !*** ./assets/vue/controllers/Quiz-game.vue?vue&type=script&lang=js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Quiz_game_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Quiz_game_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Quiz-game.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-game.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./assets/vue/controllers/Chat.vue?vue&type=template&id=6e3aa807":
/*!***********************************************************************!*\
  !*** ./assets/vue/controllers/Chat.vue?vue&type=template&id=6e3aa807 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_template_id_6e3aa807__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Chat_vue_vue_type_template_id_6e3aa807__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Chat.vue?vue&type=template&id=6e3aa807 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Chat.vue?vue&type=template&id=6e3aa807");


/***/ }),

/***/ "./assets/vue/controllers/Hello.vue?vue&type=template&id=427e0733":
/*!************************************************************************!*\
  !*** ./assets/vue/controllers/Hello.vue?vue&type=template&id=427e0733 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Hello_vue_vue_type_template_id_427e0733__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Hello_vue_vue_type_template_id_427e0733__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Hello.vue?vue&type=template&id=427e0733 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Hello.vue?vue&type=template&id=427e0733");


/***/ }),

/***/ "./assets/vue/controllers/Quiz-chooser.vue?vue&type=template&id=33c5e41c":
/*!*******************************************************************************!*\
  !*** ./assets/vue/controllers/Quiz-chooser.vue?vue&type=template&id=33c5e41c ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Quiz_chooser_vue_vue_type_template_id_33c5e41c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Quiz_chooser_vue_vue_type_template_id_33c5e41c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Quiz-chooser.vue?vue&type=template&id=33c5e41c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-chooser.vue?vue&type=template&id=33c5e41c");


/***/ }),

/***/ "./assets/vue/controllers/Quiz-game.vue?vue&type=template&id=37084e4b&scoped=true":
/*!****************************************************************************************!*\
  !*** ./assets/vue/controllers/Quiz-game.vue?vue&type=template&id=37084e4b&scoped=true ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Quiz_game_vue_vue_type_template_id_37084e4b_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Quiz_game_vue_vue_type_template_id_37084e4b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Quiz-game.vue?vue&type=template&id=37084e4b&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-game.vue?vue&type=template&id=37084e4b&scoped=true");


/***/ }),

/***/ "./assets/vue/controllers/Quiz-game.vue?vue&type=style&index=0&id=37084e4b&scoped=true&lang=css":
/*!******************************************************************************************************!*\
  !*** ./assets/vue/controllers/Quiz-game.vue?vue&type=style&index=0&id=37084e4b&scoped=true&lang=css ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Quiz_game_vue_vue_type_style_index_0_id_37084e4b_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Quiz-game.vue?vue&type=style&index=0&id=37084e4b&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/vue/controllers/Quiz-game.vue?vue&type=style&index=0&id=37084e4b&scoped=true&lang=css");


/***/ }),

/***/ "./assets/images/encore.jpg":
/*!**********************************!*\
  !*** ./assets/images/encore.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/encore.49664372.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-6db41a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FDeEIwTDs7Ozs7Ozs7Ozs7Ozs7OztBQ0FZOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUo7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvIHN5bmMgXFwudnVlJCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9DaGF0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotY2hvb3Nlci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9RdWl6LWdhbWUudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvSGVsbG8udnVlIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR1cmJvL2Fzc2V0cy9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdnVlL2Fzc2V0cy9kaXN0L3JlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdnVlL2Fzc2V0cy9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/ZThiOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotZ2FtZS52dWU/YTY3NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL0NoYXQudnVlPzQ4YTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9IZWxsby52dWU/NjhhMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotY2hvb3Nlci52dWU/ZjQzYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotZ2FtZS52dWU/Y2QzOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL0NoYXQudnVlPzI5NTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9IZWxsby52dWU/MzYxNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotY2hvb3Nlci52dWU/NDM4ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotZ2FtZS52dWU/ZmUxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQ2hhdC52dWVcIjogXCIuL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvQ2hhdC52dWVcIixcblx0XCIuL0hlbGxvLnZ1ZVwiOiBcIi4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9IZWxsby52dWVcIixcblx0XCIuL1F1aXotY2hvb3Nlci52dWVcIjogXCIuL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1jaG9vc2VyLnZ1ZVwiLFxuXHRcIi4vUXVpei1nYW1lLnZ1ZVwiOiBcIi4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9RdWl6LWdhbWUudnVlXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLnZ1ZSRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyc7XG5pbXBvcnQgY29udHJvbGxlcl8xIGZyb20gJ0BzeW1mb255L3V4LXZ1ZS9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS10dXJiby1jb3JlJzogY29udHJvbGxlcl8wLFxuICAnc3ltZm9ueS0tdXgtdnVlLS12dWUnOiBjb250cm9sbGVyXzEsXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVnaXN0ZXJWdWVDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXZ1ZSc7XHJcbmltcG9ydCAnLi9ib290c3RyYXAuanMnO1xyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbnJlcXVpcmUoJy4vc3R5bGVzL2FwcC5zY3NzJyk7XHJcblxyXG5yZWdpc3RlclZ1ZUNvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi92dWUvY29udHJvbGxlcnMnLCB0cnVlLCAvXFwudnVlJC8pKTtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xyXG4iLCI8IS0tIHZ1ZS1mcm9udGVuZC9zcmMvY29tcG9uZW50cy9DaGF0LnZ1ZSAtLT5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlJlYWwtdGltZSBDaGF0PC9oMT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSB2LWZvcj1cIihtZXNzYWdlLCBpbmRleCkgaW4gbWVzc2FnZXNcIiA6a2V5PVwiaW5kZXhcIj57eyBtZXNzYWdlIH19PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxpbnB1dCB2LW1vZGVsPVwibWVzc2FnZVwiIEBrZXl1cC5lbnRlcj1cInNlbmRNZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZVwiPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFsndXNlciddLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzb2NrZXQ6IG51bGwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgICBtZXNzYWdlczogW11cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBpbygnaHR0cDovLzEyNy4wLjAuMTozMDAwJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3N0b3JlVXNlcicsICB0aGlzLnVzZXIgKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbignam9pbmVkJywgICh1c2VyKSA9PlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgdXNlcjogJHt1c2VyLnVzZXJuYW1lfSBqb2luZWRgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobXNnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaXNjb25uZWN0ZWQgZnJvbSBXZWJTb2NrZXQgc2VydmVyJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNlbmRNZXNzYWdlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdtZXNzYWdlJywgdGhpcy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+QXZhaWxhYmxlIFF1aXp6ZXM8L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIHYtZm9yPVwicXVpeiBpbiBxdWl6emVzXCIgOmtleT1cInF1aXouaWRcIj5cclxuICAgICAgICAgICAgICAgIDxhIDpocmVmPVwicXVpei5saW5rXCI+e3txdWl6LnRpdGxlfX08L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAge3txdWl6emVzfX1cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFsncXVpenplcyddLFxyXG5cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImdhbWUtY29udGFpbmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIG10LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLXdyYXBwZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtLTAgZnMtM1wiPnt7cXVpei50aXRsZX19IC0ge3twbGF5ZXIuc2NvcmV9fSAtIHt7Z2FtZU92ZXJ9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtLTAgZnMtM1wiPnt7cXVlc3Rpb25JbmRleCArIDF9fSBvZiB7eyBxdWl6LnF1ZXN0aW9ucy5sZW5ndGggfX08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIG10LTFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICA6YXJpYS12YWx1ZW5vdz1cImdldFByb2dyZXNzUGVyY2VudGFnZSgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwieyB3aWR0aDogZ2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCkgKyAnJScgfVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgZ2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCkgfX0lXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cImltYWdlXCIgYWx0PVwiXCIgY2xhc3M9XCJnYW1lLWltYWdlIG10LTFcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiIWdhbWVPdmVyICYmIHF1aXoucXVlc3Rpb25zICYmIHF1ZXN0aW9uSW5kZXggPCBxdWl6LnF1ZXN0aW9ucy5sZW5ndGhcIiBjbGFzcz1cIm10LTIgd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1xdWVzdGlvbiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1pbmRleCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbWUtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZnMtMlwiPnt7cXVlc3Rpb25JbmRleCArIDF9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibS0wXCI+e3sgcXVpei5xdWVzdGlvbnNbcXVlc3Rpb25JbmRleF0ucXVlc3Rpb24gfX08L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuc3dlci1ncmlkIGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGFuc3dlciwgaW5kZXgpIGluIHF1aXoucXVlc3Rpb25zW3F1ZXN0aW9uSW5kZXhdLmFuc3dlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJhbnN3ZXIuaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZ2FtZS1hbnN3ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImFuc3dlclF1ZXN0aW9uKGFuc3dlcilcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2FjdGl2ZS1hbnN3ZXInOiBhbnN3ZXIuaWQgPT09IGFjdGl2ZUFuc3dlcklkIH1cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj48c3BhbiBjbGFzcz1cImFuc3dlci1pbmRleFwiPnt7IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpbmRleCkgfX08L3NwYW4+IHt7IGFuc3dlci5hbnN3ZXIgfX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIHYtZWxzZS1pZj1cImdhbWVPdmVyXCIgY2xhc3M9XCJrYWhvb3QtbWVzc2FnZVwiPk5vIHF1ZXN0aW9ucyBhdmFpbGFibGU8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFkbWluLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwibmV4dFF1ZXN0aW9uXCIgdi1pZj1cInBsYXllci5hZG1pbiAmJiAhZ2FtZU92ZXJcIiBjbGFzcz1cImthaG9vdC1idXR0b25cIj5OZXh0IFF1ZXN0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwicmVzZXREYXRhXCIgdi1pZj1cInBsYXllci5hZG1pblwiIGNsYXNzPVwia2Fob290LWJ1dHRvblwiPlJlc2V0IERhdGE8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBlbmNvcmVJbWFnZSBmcm9tICcuLi8uLi9pbWFnZXMvZW5jb3JlLmpwZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHF1aXo6IHtcclxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGN1cnJlbnRVc2VyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcXVlc3Rpb25JbmRleDogMCxcclxuICAgICAgICAgICAgZ2FtZU92ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBwbGF5ZXI6IHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHRoaXMuY3VycmVudFVzZXIsXHJcbiAgICAgICAgICAgICAgICBhbnN3ZXI6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzY29yZTogMCxcclxuICAgICAgICAgICAgICAgIGFkbWluOiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBzb2NrZXQ6IG51bGwsXHJcbiAgICAgICAgICAgIGFjdGl2ZUFuc3dlcklkOiBudWxsLFxyXG4gICAgICAgICAgICBpbWFnZTogZW5jb3JlSW1hZ2UsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVNvY2tldCgpO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tBZG1pblJvbGUoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaW5pdGlhbGl6ZVNvY2tldCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBpbyhcImh0dHA6Ly8xMjcuMC4wLjE6MzAwMFwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJzdG9yZVVzZXJcIiwgdGhpcy5jdXJyZW50VXNlci51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKFwiam9pbmVkXCIsICh1c2VyKSA9PiBjb25zb2xlLmxvZyhgVXNlcjogJHt1c2VyLnVzZXJuYW1lfSBqb2luZWRgKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKFwibmV4dC1xdWVzdGlvblwiLCB0aGlzLmhhbmRsZU5leHRRdWVzdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKFwiZW5kLWdhbWVcIiwgdGhpcy5oYW5kbGVFbmRHYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oXCJjbGVhci1kYXRhXCIsIHRoaXMuY2xlYXJMb2NhbERhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlZFF1ZXN0aW9uSW5kZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInF1ZXN0aW9uSW5kZXhcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlZEdhbWVPdmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnYW1lT3ZlclwiKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RvcmVkU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllclNjb3JlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBzdG9yZWRDbGlja2FibGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNsaWNrYWJsZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdG9yZWRRdWVzdGlvbkluZGV4ICE9PSBudWxsKSB0aGlzLnF1ZXN0aW9uSW5kZXggPSBwYXJzZUludChzdG9yZWRRdWVzdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgaWYgKHN0b3JlZEdhbWVPdmVyICE9PSBudWxsKSB0aGlzLmdhbWVPdmVyID0gSlNPTi5wYXJzZShzdG9yZWRHYW1lT3Zlcik7XHJcbiAgICAgICAgICAgIGlmIChzdG9yZWRTY29yZSAhPT0gbnVsbCkgdGhpcy5wbGF5ZXIuc2NvcmUgPSBwYXJzZUludChzdG9yZWRTY29yZSk7XHJcbiAgICAgICAgICAgIGlmIChzdG9yZWRDbGlja2FibGUgIT09IG51bGwpIHRoaXMuY2xpY2thYmxlID0gSlNPTi5wYXJzZShzdG9yZWRDbGlja2FibGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tBZG1pblJvbGUoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRVc2VyLnJvbGVzLmluY2x1ZGVzKFwiUk9MRV9BRE1JTlwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYWRtaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVOZXh0UXVlc3Rpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0NvcnJlY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2thYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVBbnN3ZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmFuc3dlciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVFbmRHYW1lKGdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBnYW1lT3ZlcjtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0NvcnJlY3QoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWVzdGlvbkluZGV4XCIsIHRoaXMucXVlc3Rpb25JbmRleCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGxheWVyU2NvcmVcIiwgdGhpcy5wbGF5ZXIuc2NvcmUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNsaWNrYWJsZVwiLCB0aGlzLmNsaWNrYWJsZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZU92ZXJcIiwgdGhpcy5nYW1lT3Zlcik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXh0UXVlc3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uSW5kZXggPCB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBbGxBbnN3ZXJzUHJvdmlkZWQoKS50aGVuKGFuc3dlcmVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyZWQpIHRoaXMuc29ja2V0LmVtaXQoXCJuZXh0LXF1ZXN0aW9uXCIsIHRoaXMucXVlc3Rpb25JbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBbGxBbnN3ZXJzUHJvdmlkZWQoKS50aGVuKGFuc3dlcmVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyZWQpIHRoaXMuc29ja2V0LmVtaXQoXCJlbmQtZ2FtZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgY2hlY2tBbGxBbnN3ZXJzUHJvdmlkZWQoKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxBbnN3ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgdGhpcy5nZXRVc2VycygpO1xyXG4gICAgICAgICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyLmFuc3dlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3VzZXIudXNlcm5hbWV9IGhhc24ndCBmaWxsZWQgaW4gdGhlaXIgYW5zd2VyYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsQW5zd2VyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGxBbnN3ZXJlZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrQ29ycmVjdCgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmFuc3dlcj8uY29ycmVjdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2NvcmUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5hbnN3ZXIgPSBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJMb2NhbERhdGEoKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25JbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNjb3JlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jbGlja2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUFuc3dlcklkID0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0RGF0YSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnY2xlYXItZGF0YScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5zd2VyUXVlc3Rpb24oYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYW5zd2VyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYW5zd2VyID0gYW5zd2VyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBbnN3ZXJJZCA9IGFuc3dlci5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2thYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcImFuc3dlci1xdWVzdGlvblwiLCBbdGhpcy5jdXJyZW50VXNlci51c2VybmFtZSwgdGhpcy5wbGF5ZXIuYW5zd2VyXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGdldFVzZXJzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjMwMDAvdXNlcnNcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgdGhlIHVzZXJzIVwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb2dyZXNzUGVyY2VudGFnZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKCh0aGlzLnF1ZXN0aW9uSW5kZXggKyAxKSAvIHRoaXMucXVpei5xdWVzdGlvbnMubGVuZ3RoKSAqIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5oZWFkZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG4uZ2FtZS1pbWFnZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uZ2FtZS1pbmRleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgxNjgsIDE0LCAyMjIsIDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuLmdhbWUtYW5zd2VyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxNjgsIDE0LCAyMjIsIDEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogRW5zdXJlIGJ1dHRvbnMgYXJlIGNsaWNrYWJsZSAqL1xyXG59XHJcbi5nYW1lLWFuc3dlciBoMiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmFuc3dlci1pbmRleCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG59XHJcbi5nYW1lLXF1ZXN0aW9uIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmFkbWluLWdyb3VwIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uYWRtaW4tZ3JvdXAgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBib3JkZXI6IHJnYmEoMTY4LCAxNCwgMjIyLCAxKSAycHggc29saWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uYW5zd2VyLWdyaWQgYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYWN0aXZlLWFuc3dlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDIzNCwgMCk7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5IZWxsbyB7eyBuYW1lIH19ITwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBzZXR1cD5cclxuICAgIGRlZmluZVByb3BzKHtcclxuICAgICAgICBuYW1lOiBTdHJpbmdcclxuICAgIH0pO1xyXG48L3NjcmlwdD4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuaW1wb3J0ICdAaG90d2lyZWQvdHVyYm8nO1xyXG5cclxuY2xhc3MgdHVyYm9fY29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xyXG59XHJcblxyXG5leHBvcnQgeyB0dXJib19jb250cm9sbGVyIGFzIGRlZmF1bHQgfTtcclxuIiwiaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tICd2dWUnO1xyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJWdWVDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCB2dWVDb250cm9sbGVycyA9IGNvbnRleHQua2V5cygpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgICBhY2Nba2V5XSA9IHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pO1xyXG4gICAgZnVuY3Rpb24gbG9hZENvbXBvbmVudChuYW1lKSB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50UGF0aCA9IGAuLyR7bmFtZX0udnVlYDtcclxuICAgICAgICBpZiAoIShjb21wb25lbnRQYXRoIGluIHZ1ZUNvbnRyb2xsZXJzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NzaWJsZVZhbHVlcyA9IE9iamVjdC5rZXlzKHZ1ZUNvbnRyb2xsZXJzKS5tYXAoKGtleSkgPT4ga2V5LnJlcGxhY2UoJy4vJywgJycpLnJlcGxhY2UoJy52dWUnLCAnJykpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZ1ZSBjb250cm9sbGVyIFwiJHtuYW1lfVwiIGRvZXMgbm90IGV4aXN0LiBQb3NzaWJsZSB2YWx1ZXM6ICR7cG9zc2libGVWYWx1ZXMuam9pbignLCAnKX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2dWVDb250cm9sbGVyc1tjb21wb25lbnRQYXRoXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kdWxlID0gY29udGV4dChjb21wb25lbnRQYXRoKTtcclxuICAgICAgICAgICAgaWYgKG1vZHVsZS5kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB2dWVDb250cm9sbGVyc1tjb21wb25lbnRQYXRoXSA9IG1vZHVsZS5kZWZhdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG1vZHVsZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgIHZ1ZUNvbnRyb2xsZXJzW2NvbXBvbmVudFBhdGhdID0gZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzb2x2ZWRNb2R1bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc29sdmVkTW9kdWxlLmRlZmF1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb2x2ZWRNb2R1bGUuZGVmYXVsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBDYW5ub3QgZmluZCBkZWZhdWx0IGV4cG9ydCBpbiBhc3luYyBWdWUgY29udHJvbGxlciBcIiR7bmFtZX1cIi5gKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVnVlIGNvbnRyb2xsZXIgXCIke25hbWV9XCIgZG9lcyBub3QgZXhpc3QuYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZ1ZUNvbnRyb2xsZXJzW2NvbXBvbmVudFBhdGhdO1xyXG4gICAgfVxyXG4gICAgd2luZG93LnJlc29sdmVWdWVDb21wb25lbnQgPSAobmFtZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBsb2FkQ29tcG9uZW50KG5hbWUpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVnaXN0ZXJWdWVDb250cm9sbGVyQ29tcG9uZW50cyB9O1xyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcclxuXHJcbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IChfYSA9IHRoaXMucHJvcHNWYWx1ZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGNvbXBvbmVudE5hbWU6IHRoaXMuY29tcG9uZW50VmFsdWUsIHByb3BzOiB0aGlzLnByb3BzIH0pO1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlVnVlQ29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xyXG4gICAgICAgIHRoaXMuYXBwID0gY3JlYXRlQXBwKGNvbXBvbmVudCwgdGhpcy5wcm9wcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5fX3Z1ZV9hcHBfXyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5fX3Z1ZV9hcHBfXy51bm1vdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnYmVmb3JlLW1vdW50Jywge1xyXG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcclxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgIGFwcDogdGhpcy5hcHAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hcHAubW91bnQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21vdW50Jywge1xyXG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcclxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuYXBwLnVubW91bnQoKTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VubW91bnQnLCB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IHRoaXMuY29tcG9uZW50VmFsdWUsXHJcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAndnVlJyB9KTtcclxuICAgIH1cclxufVxyXG5kZWZhdWx0XzEudmFsdWVzID0ge1xyXG4gICAgY29tcG9uZW50OiBTdHJpbmcsXHJcbiAgICBwcm9wczogT2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQ2hhdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmUzYWE4MDdcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9DaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvdnVlL2NvbnRyb2xsZXJzL0NoYXQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjZlM2FhODA3XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNmUzYWE4MDcnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc2ZTNhYTgwNycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2hhdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmUzYWE4MDdcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNmUzYWE4MDcnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0hlbGxvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjdlMDczM1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hlbGxvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hlbGxvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy92dWUvY29udHJvbGxlcnMvSGVsbG8udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjQyN2UwNzMzXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNDI3ZTA3MzMnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc0MjdlMDczMycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSGVsbG8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyN2UwNzMzXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzQyN2UwNzMzJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9RdWl6LWNob29zZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzYzVlNDFjXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUXVpei1jaG9vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9RdWl6LWNob29zZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1jaG9vc2VyLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIzM2M1ZTQxY1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzMzYzVlNDFjJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMzNjNWU0MWMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1F1aXotY2hvb3Nlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzNjNWU0MWNcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMzNjNWU0MWMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1F1aXotZ2FtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzcwODRlNGImc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9RdWl6LWdhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1F1aXotZ2FtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL1F1aXotZ2FtZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNzA4NGU0YiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtMzcwODRlNGJcIl0sWydfX2ZpbGUnLFwiYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9RdWl6LWdhbWUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjM3MDg0ZTRiXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMzcwODRlNGInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCczNzA4NGU0YicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUXVpei1nYW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzA4NGU0YiZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCczNzA4NGU0YicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9DaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vSGVsbG8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9IZWxsby52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vUXVpei1jaG9vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1F1aXotY2hvb3Nlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1F1aXotZ2FtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9RdWl6LWdhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiZGVmYXVsdCIsInJlZ2lzdGVyVnVlQ29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJpbyIsInByb3BzIiwiZGF0YSIsInNvY2tldCIsIm1lc3NhZ2UiLCJtZXNzYWdlcyIsImNyZWF0ZWQiLCJfdGhpcyIsImVtaXQiLCJ1c2VyIiwib24iLCJjb25zb2xlIiwibG9nIiwiY29uY2F0IiwidXNlcm5hbWUiLCJtc2ciLCJwdXNoIiwibWV0aG9kcyIsInNlbmRNZXNzYWdlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsImF4aW9zIiwiZW5jb3JlSW1hZ2UiLCJxdWl6IiwicmVxdWlyZWQiLCJjdXJyZW50VXNlciIsInF1ZXN0aW9uSW5kZXgiLCJnYW1lT3ZlciIsInBsYXllciIsImFuc3dlciIsInNjb3JlIiwiYWRtaW4iLCJjbGlja2FibGUiLCJhY3RpdmVBbnN3ZXJJZCIsImltYWdlIiwiaW5pdGlhbGl6ZVNvY2tldCIsIm1vdW50ZWQiLCJsb2FkRnJvbUxvY2FsU3RvcmFnZSIsImNoZWNrQWRtaW5Sb2xlIiwiaGFuZGxlTmV4dFF1ZXN0aW9uIiwiaGFuZGxlRW5kR2FtZSIsImNsZWFyTG9jYWxEYXRhIiwic3RvcmVkUXVlc3Rpb25JbmRleCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdG9yZWRHYW1lT3ZlciIsInN0b3JlZFNjb3JlIiwic3RvcmVkQ2xpY2thYmxlIiwicGFyc2VJbnQiLCJKU09OIiwicGFyc2UiLCJyb2xlcyIsImluY2x1ZGVzIiwiaW5kZXgiLCJjaGVja0NvcnJlY3QiLCJ1cGRhdGVMb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibmV4dFF1ZXN0aW9uIiwicXVlc3Rpb25zIiwiY2hlY2tBbGxBbnN3ZXJzUHJvdmlkZWQiLCJhbnN3ZXJlZCIsIl90aGlzMiIsIl9jYWxsZWUiLCJhbGxBbnN3ZXJlZCIsInVzZXJzIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImdldFVzZXJzIiwiX3RoaXMkcGxheWVyJGFuc3dlciIsImNvcnJlY3QiLCJjbGVhciIsInJlc2V0RGF0YSIsImFuc3dlclF1ZXN0aW9uIiwiaWQiLCJfY2FsbGVlMiIsInJlc3BvbnNlIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZ2V0IiwidDAiLCJlcnJvciIsImdldFByb2dyZXNzUGVyY2VudGFnZSIsIk1hdGgiLCJyb3VuZCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiJGRhdGEiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NhY2hlIiwiJGV2ZW50Iiwib25LZXl1cCIsIl93aXRoS2V5cyIsIiRvcHRpb25zIiwicGxhY2Vob2xkZXIiLCIkcHJvcHMiLCJxdWl6emVzIiwiaHJlZiIsImxpbmsiLCJ0aXRsZSIsIl9ob2lzdGVkXzIiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX2hvaXN0ZWRfMyIsIl9ob2lzdGVkXzQiLCJfaG9pc3RlZF81IiwiX2hvaXN0ZWRfNiIsInJvbGUiLCJzdHlsZSIsIl9ub3JtYWxpemVTdHlsZSIsIndpZHRoIiwiX2hvaXN0ZWRfNyIsInNyYyIsImFsdCIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF85IiwiX2hvaXN0ZWRfMTAiLCJfaG9pc3RlZF8xMSIsIl9ob2lzdGVkXzEyIiwiX2hvaXN0ZWRfMTMiLCJxdWVzdGlvbiIsIl9ob2lzdGVkXzE0IiwiYW5zd2VycyIsIl9ub3JtYWxpemVDbGFzcyIsIm9uQ2xpY2siLCJfaG9pc3RlZF8xNiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIl9ob2lzdGVkXzE1IiwiX2hvaXN0ZWRfMTciLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX2hvaXN0ZWRfMTgiLCJ0dXJib19jb250cm9sbGVyIiwiZGVmaW5lQXN5bmNDb21wb25lbnQiLCJ2dWVDb250cm9sbGVycyIsInJlZHVjZSIsImFjYyIsInVuZGVmaW5lZCIsImxvYWRDb21wb25lbnQiLCJjb21wb25lbnRQYXRoIiwicG9zc2libGVWYWx1ZXMiLCJtYXAiLCJyZXBsYWNlIiwiam9pbiIsIm1vZHVsZSIsInJlamVjdCIsInJlc29sdmVkTW9kdWxlIiwid2luZG93IiwicmVzb2x2ZVZ1ZUNvbXBvbmVudCIsImNyZWF0ZUFwcCIsImRlZmF1bHRfMSIsIl9hIiwicHJvcHNWYWx1ZSIsImRpc3BhdGNoRXZlbnQiLCJjb21wb25lbnROYW1lIiwiY29tcG9uZW50VmFsdWUiLCJjb21wb25lbnQiLCJfX3Z1ZV9hcHBfXyIsInVubW91bnQiLCJtb3VudCIsImRpc2Nvbm5lY3QiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiXSwic291cmNlUm9vdCI6IiJ9