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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
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
      imagePath: '',
      fallbackImagePath: '/images/fallback.jpg'
    };
  },
  watch: {
    questionIndex: {
      immediate: true,
      handler: function handler(newIndex) {
        this.loadImage(newIndex);
      }
    }
  },
  created: function created() {
    this.initializeSocket();
  },
  mounted: function mounted() {
    this.loadFromLocalStorage();
    this.checkAdminRole();
  },
  computed: {
    imageSource: function imageSource() {
      return this.imagePath || this.fallbackImagePath;
    }
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
    loadImage: function loadImage(index) {
      var _this$quiz$questions$;
      // Assuming the image path is just the filename
      var imageFile = (_this$quiz$questions$ = this.quiz.questions[index]) === null || _this$quiz$questions$ === void 0 ? void 0 : _this$quiz$questions$.imagePath;
      if (imageFile) {
        this.imagePath = "/images/".concat(imageFile);
      } else {
        this.imagePath = this.fallbackImagePath;
      }
    },
    handleImageError: function handleImageError() {
      this.imagePath = this.fallbackImagePath;
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
              return axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("http://127.0.0.1:3000/users");
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
  "class": "header mt-4 d-flex flex-column align-items-center"
};
var _hoisted_3 = {
  "class": "title-wrapper d-flex justify-content-between w-100"
};
var _hoisted_4 = {
  "class": "m-0 fs-3"
};
var _hoisted_5 = {
  "class": "m-0 fs-3"
};
var _hoisted_6 = {
  "class": "progress mt-1 w-100"
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
  "class": "fs-3"
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
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quiz.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.questionIndex + 1) + " of " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quiz.questions.length), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "progress-bar",
    role: "progressbar",
    "aria-valuenow": $options.getProgressPercentage(),
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      width: $options.getProgressPercentage() + '%'
    })
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.getProgressPercentage()) + "% ", 13 /* TEXT, STYLE, PROPS */, _hoisted_7)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: $options.imageSource,
    alt: "",
    "class": "game-image mt-1",
    onError: _cache[0] || (_cache[0] = function () {
      return $options.handleImageError && $options.handleImageError.apply($options, arguments);
    })
  }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_8)]), !$data.gameOver && $props.quiz.questions && $data.questionIndex < $props.quiz.questions.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.questionIndex + 1), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quiz.questions[$data.questionIndex].question), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.quiz.questions[$data.questionIndex].answers, function (answer, index) {
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
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.nextQuestion && $options.nextQuestion.apply($options, arguments);
    }),
    "class": "kahoot-button"
  }, "Next")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.player.admin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.resetData && $options.resetData.apply($options, arguments);
    }),
    "class": "kahoot-button"
  }, "Reset")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]);
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-6db41a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7TUFBTSxDQUFDLENBQUM7SUFDM0Q7RUFBQztBQUFBLEVBaENtQjNTLDJEQUFVO0FBa0NsQzZSLFNBQVMsQ0FBQzdNLE1BQU0sR0FBRztFQUNmbU4sU0FBUyxFQUFFOUIsTUFBTTtFQUNqQmpQLEtBQUssRUFBRXNCO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3hDRDs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWlFO0FBQ1Y7QUFDTDs7QUFFbEQsQ0FBbUY7QUFDbkYsaUNBQWlDLHlGQUFlLENBQUMseUVBQU0sYUFBYSwyRUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qm1EO0FBQ0M7QUFDTDs7QUFFOUQsQ0FBbUY7QUFDbkYsaUNBQWlDLHlGQUFlLENBQUMscUZBQU0sYUFBYSw0RUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjBEO0FBQ1Y7QUFDTDs7QUFFMUQsQ0FBbUY7QUFDbkYsaUNBQWlDLHlGQUFlLENBQUMsaUZBQU0sYUFBYSxtRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJtRTtBQUN0QjtBQUNMOztBQUV2RCxDQUFnRjs7QUFFRztBQUNuRixpQ0FBaUMseUZBQWUsQ0FBQyw4RUFBTSxhQUFhLDRGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjBMOzs7Ozs7Ozs7Ozs7Ozs7O0FDQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBSjs7Ozs7Ozs7Ozs7Ozs7OztBQ0FIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy8gc3luYyBcXC52dWUkIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL0NoYXQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1jaG9vc2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotZ2FtZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9IZWxsby52dWUiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHVyYm8vYXNzZXRzL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC12dWUvYXNzZXRzL2Rpc3QvcmVnaXN0ZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC12dWUvYXNzZXRzL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz9lOGI4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1nYW1lLnZ1ZT9hNjc1Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvQ2hhdC52dWU/NDhhOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL0hlbGxvLnZ1ZT82OGEyIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1jaG9vc2VyLnZ1ZT9mNDNjIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1nYW1lLnZ1ZT9jZDM5Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvQ2hhdC52dWU/Mjk1NyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL0hlbGxvLnZ1ZT8zNjE3Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1jaG9vc2VyLnZ1ZT80MzhmIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1nYW1lLnZ1ZT9mZTFiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9DaGF0LnZ1ZVwiOiBcIi4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9DaGF0LnZ1ZVwiLFxuXHRcIi4vSGVsbG8udnVlXCI6IFwiLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL0hlbGxvLnZ1ZVwiLFxuXHRcIi4vUXVpei1jaG9vc2VyLnZ1ZVwiOiBcIi4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9RdWl6LWNob29zZXIudnVlXCIsXG5cdFwiLi9RdWl6LWdhbWUudnVlXCI6IFwiLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotZ2FtZS52dWVcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwudnVlJFwiOyIsImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtdHVyYm8vZGlzdC90dXJib19jb250cm9sbGVyLmpzJztcbmltcG9ydCBjb250cm9sbGVyXzEgZnJvbSAnQHN5bWZvbnkvdXgtdnVlL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtdHVyYm8tLXR1cmJvLWNvcmUnOiBjb250cm9sbGVyXzAsXG4gICdzeW1mb255LS11eC12dWUtLXZ1ZSc6IGNvbnRyb2xsZXJfMSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyByZWdpc3RlclZ1ZUNvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtdnVlJztcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxucmVxdWlyZSgnLi9zdHlsZXMvYXBwLnNjc3MnKTtcclxuXHJcbnJlZ2lzdGVyVnVlQ29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3Z1ZS9jb250cm9sbGVycycsIHRydWUsIC9cXC52dWUkLykpO1xyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcclxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcclxuICAgIHRydWUsXHJcbiAgICAvXFwuW2p0XXN4PyQvXHJcbikpO1xyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsIjwhLS0gdnVlLWZyb250ZW5kL3NyYy9jb21wb25lbnRzL0NoYXQudnVlIC0tPlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDE+UmVhbC10aW1lIENoYXQ8L2gxPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIHYtZm9yPVwiKG1lc3NhZ2UsIGluZGV4KSBpbiBtZXNzYWdlc1wiIDprZXk9XCJpbmRleFwiPnt7IG1lc3NhZ2UgfX08L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJtZXNzYWdlXCIgQGtleXVwLmVudGVyPVwic2VuZE1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlXCI+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWyd1c2VyJ10sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNvY2tldDogbnVsbCxcclxuICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IGlvKCdodHRwOi8vMTI3LjAuMC4xOjMwMDAnKTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc3RvcmVVc2VyJywgIHRoaXMudXNlciApO1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdqb2luZWQnLCAgKHVzZXIpID0+XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1c2VyOiAke3VzZXIudXNlcm5hbWV9IGpvaW5lZGApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Rpc2Nvbm5lY3RlZCBmcm9tIFdlYlNvY2tldCBzZXJ2ZXInKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc2VuZE1lc3NhZ2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5BdmFpbGFibGUgUXVpenplczwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgdi1mb3I9XCJxdWl6IGluIHF1aXp6ZXNcIiA6a2V5PVwicXVpei5pZFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJxdWl6LmxpbmtcIj57e3F1aXoudGl0bGV9fTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7e3F1aXp6ZXN9fVxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogWydxdWl6emVzJ10sXHJcblxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1jb250YWluZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgbXQtNCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS13cmFwcGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibS0wIGZzLTNcIj57e3F1aXoudGl0bGV9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtLTAgZnMtM1wiPnt7cXVlc3Rpb25JbmRleCArIDF9fSBvZiB7eyBxdWl6LnF1ZXN0aW9ucy5sZW5ndGggfX08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIG10LTEgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICA6YXJpYS12YWx1ZW5vdz1cImdldFByb2dyZXNzUGVyY2VudGFnZSgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwieyB3aWR0aDogZ2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCkgKyAnJScgfVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgZ2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCkgfX0lXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cImltYWdlU291cmNlXCIgYWx0PVwiXCIgY2xhc3M9XCJnYW1lLWltYWdlIG10LTFcIiBAZXJyb3I9XCJoYW5kbGVJbWFnZUVycm9yXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1pZj1cIiFnYW1lT3ZlciAmJiBxdWl6LnF1ZXN0aW9ucyAmJiBxdWVzdGlvbkluZGV4IDwgcXVpei5xdWVzdGlvbnMubGVuZ3RoXCIgY2xhc3M9XCJtdC0yIHdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtcXVlc3Rpb24gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtaW5kZXggZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1lLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZzLTNcIj57e3F1ZXN0aW9uSW5kZXggKyAxfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm0tMFwiPnt7IHF1aXoucXVlc3Rpb25zW3F1ZXN0aW9uSW5kZXhdLnF1ZXN0aW9uIH19PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXItZ3JpZCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihhbnN3ZXIsIGluZGV4KSBpbiBxdWl6LnF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XS5hbnN3ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiYW5zd2VyLmlkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImdhbWUtYW5zd2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJhbnN3ZXJRdWVzdGlvbihhbnN3ZXIpXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdhY3RpdmUtYW5zd2VyJzogYW5zd2VyLmlkID09PSBhY3RpdmVBbnN3ZXJJZCB9XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+PHNwYW4gY2xhc3M9XCJhbnN3ZXItaW5kZXhcIj57eyBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaW5kZXgpIH19PC9zcGFuPiB7eyBhbnN3ZXIuYW5zd2VyIH19PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCB2LWVsc2UtaWY9XCJnYW1lT3ZlclwiIGNsYXNzPVwia2Fob290LW1lc3NhZ2VcIj5ObyBxdWVzdGlvbnMgYXZhaWxhYmxlPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZG1pbi1ncm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cIm5leHRRdWVzdGlvblwiIHYtaWY9XCJwbGF5ZXIuYWRtaW4gJiYgIWdhbWVPdmVyXCIgY2xhc3M9XCJrYWhvb3QtYnV0dG9uXCI+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInJlc2V0RGF0YVwiIHYtaWY9XCJwbGF5ZXIuYWRtaW5cIiBjbGFzcz1cImthaG9vdC1idXR0b25cIj5SZXNldDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBpbyB9IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgcXVpejoge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VycmVudFVzZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBxdWVzdGlvbkluZGV4OiAwLFxyXG4gICAgICAgICAgICBnYW1lT3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBsYXllcjoge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogdGhpcy5jdXJyZW50VXNlcixcclxuICAgICAgICAgICAgICAgIGFuc3dlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiAwLFxyXG4gICAgICAgICAgICAgICAgYWRtaW46IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNvY2tldDogbnVsbCxcclxuICAgICAgICAgICAgYWN0aXZlQW5zd2VySWQ6IG51bGwsXHJcbiAgICAgICAgICAgIGltYWdlUGF0aDogJycsXHJcbiAgICAgICAgICAgIGZhbGxiYWNrSW1hZ2VQYXRoOiAnL2ltYWdlcy9mYWxsYmFjay5qcGcnLFxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICBxdWVzdGlvbkluZGV4OiB7XHJcbiAgICAgICAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgaGFuZGxlcihuZXdJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkSW1hZ2UobmV3SW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplU29ja2V0KCk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0FkbWluUm9sZSgpO1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgaW1hZ2VTb3VyY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmltYWdlUGF0aCB8fCB0aGlzLmZhbGxiYWNrSW1hZ2VQYXRoO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaW5pdGlhbGl6ZVNvY2tldCgpIHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSBpbyhcImh0dHA6Ly8xMjcuMC4wLjE6MzAwMFwiKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJzdG9yZVVzZXJcIiwgdGhpcy5jdXJyZW50VXNlci51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKFwiam9pbmVkXCIsICh1c2VyKSA9PiBjb25zb2xlLmxvZyhgVXNlcjogJHt1c2VyLnVzZXJuYW1lfSBqb2luZWRgKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKFwibmV4dC1xdWVzdGlvblwiLCB0aGlzLmhhbmRsZU5leHRRdWVzdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uKFwiZW5kLWdhbWVcIiwgdGhpcy5oYW5kbGVFbmRHYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oXCJjbGVhci1kYXRhXCIsIHRoaXMuY2xlYXJMb2NhbERhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9hZEltYWdlKGluZGV4KSB7XHJcbiAgICAgICAgICAgIC8vIEFzc3VtaW5nIHRoZSBpbWFnZSBwYXRoIGlzIGp1c3QgdGhlIGZpbGVuYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlRmlsZSA9IHRoaXMucXVpei5xdWVzdGlvbnNbaW5kZXhdPy5pbWFnZVBhdGg7XHJcbiAgICAgICAgICAgIGlmIChpbWFnZUZpbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VQYXRoID0gYC9pbWFnZXMvJHtpbWFnZUZpbGV9YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VQYXRoID0gdGhpcy5mYWxsYmFja0ltYWdlUGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFuZGxlSW1hZ2VFcnJvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZVBhdGggPSB0aGlzLmZhbGxiYWNrSW1hZ2VQYXRoO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlZFF1ZXN0aW9uSW5kZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInF1ZXN0aW9uSW5kZXhcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlZEdhbWVPdmVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJnYW1lT3ZlclwiKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RvcmVkU2NvcmUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBsYXllclNjb3JlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBzdG9yZWRDbGlja2FibGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNsaWNrYWJsZVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdG9yZWRRdWVzdGlvbkluZGV4ICE9PSBudWxsKSB0aGlzLnF1ZXN0aW9uSW5kZXggPSBwYXJzZUludChzdG9yZWRRdWVzdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgaWYgKHN0b3JlZEdhbWVPdmVyICE9PSBudWxsKSB0aGlzLmdhbWVPdmVyID0gSlNPTi5wYXJzZShzdG9yZWRHYW1lT3Zlcik7XHJcbiAgICAgICAgICAgIGlmIChzdG9yZWRTY29yZSAhPT0gbnVsbCkgdGhpcy5wbGF5ZXIuc2NvcmUgPSBwYXJzZUludChzdG9yZWRTY29yZSk7XHJcbiAgICAgICAgICAgIGlmIChzdG9yZWRDbGlja2FibGUgIT09IG51bGwpIHRoaXMuY2xpY2thYmxlID0gSlNPTi5wYXJzZShzdG9yZWRDbGlja2FibGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tBZG1pblJvbGUoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRVc2VyLnJvbGVzLmluY2x1ZGVzKFwiUk9MRV9BRE1JTlwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYWRtaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVOZXh0UXVlc3Rpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0NvcnJlY3QoKTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2thYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVBbnN3ZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmFuc3dlciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVFbmRHYW1lKGdhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBnYW1lT3ZlcjtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0NvcnJlY3QoKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWVzdGlvbkluZGV4XCIsIHRoaXMucXVlc3Rpb25JbmRleCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGxheWVyU2NvcmVcIiwgdGhpcy5wbGF5ZXIuc2NvcmUpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNsaWNrYWJsZVwiLCB0aGlzLmNsaWNrYWJsZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZU92ZXJcIiwgdGhpcy5nYW1lT3Zlcik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBuZXh0UXVlc3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uSW5kZXggPCB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBbGxBbnN3ZXJzUHJvdmlkZWQoKS50aGVuKGFuc3dlcmVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyZWQpIHRoaXMuc29ja2V0LmVtaXQoXCJuZXh0LXF1ZXN0aW9uXCIsIHRoaXMucXVlc3Rpb25JbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBbGxBbnN3ZXJzUHJvdmlkZWQoKS50aGVuKGFuc3dlcmVkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyZWQpIHRoaXMuc29ja2V0LmVtaXQoXCJlbmQtZ2FtZVwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgY2hlY2tBbGxBbnN3ZXJzUHJvdmlkZWQoKSB7XHJcbiAgICAgICAgICAgIGxldCBhbGxBbnN3ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgdGhpcy5nZXRVc2VycygpO1xyXG4gICAgICAgICAgICB1c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyLmFuc3dlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3VzZXIudXNlcm5hbWV9IGhhc24ndCBmaWxsZWQgaW4gdGhlaXIgYW5zd2VyYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsQW5zd2VyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhbGxBbnN3ZXJlZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrQ29ycmVjdCgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyLmFuc3dlcj8uY29ycmVjdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2NvcmUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5hbnN3ZXIgPSBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJMb2NhbERhdGEoKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25JbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNjb3JlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jbGlja2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUFuc3dlcklkID0gbnVsbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlc2V0RGF0YSgpIHtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnY2xlYXItZGF0YScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5zd2VyUXVlc3Rpb24oYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYW5zd2VyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYW5zd2VyID0gYW5zd2VyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBbnN3ZXJJZCA9IGFuc3dlci5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2thYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcImFuc3dlci1xdWVzdGlvblwiLCBbdGhpcy5jdXJyZW50VXNlci51c2VybmFtZSwgdGhpcy5wbGF5ZXIuYW5zd2VyXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIGdldFVzZXJzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjMwMDAvdXNlcnNcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgdGhlIHVzZXJzIVwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb2dyZXNzUGVyY2VudGFnZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKCh0aGlzLnF1ZXN0aW9uSW5kZXggKyAxKSAvIHRoaXMucXVpei5xdWVzdGlvbnMubGVuZ3RoKSAqIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5oZWFkZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG4uZ2FtZS1pbWFnZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIG1heC1oZWlnaHQ6IDUwdmg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4uZ2FtZS1pbmRleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtaW4td2lkdGg6IDQwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgxNjgsIDE0LCAyMjIsIDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi53cmFwcGVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuLmdhbWUtYW5zd2VyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxNjgsIDE0LCAyMjIsIDEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAycHggMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEVuc3VyZSBidXR0b25zIGFyZSBjbGlja2FibGUgKi9cclxufVxyXG4uZ2FtZS1hbnN3ZXIgaDIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5hbnN3ZXItaW5kZXgge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjBweDtcclxufVxyXG4uZ2FtZS1xdWVzdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5hZG1pbi1ncm91cCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmFkbWluLWdyb3VwIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgYm9yZGVyOiByZ2JhKDE2OCwgMTQsIDIyMiwgMSkgMnB4IHNvbGlkO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLmFuc3dlci1ncmlkIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFjdGl2ZS1hbnN3ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAyMzQsIDApO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+SGVsbG8ge3sgbmFtZSB9fSE8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgc2V0dXA+XHJcbiAgICBkZWZpbmVQcm9wcyh7XHJcbiAgICAgICAgbmFtZTogU3RyaW5nXHJcbiAgICB9KTtcclxuPC9zY3JpcHQ+IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcbmltcG9ydCAnQGhvdHdpcmVkL3R1cmJvJztcclxuXHJcbmNsYXNzIHR1cmJvX2NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxufVxyXG5cclxuZXhwb3J0IHsgdHVyYm9fY29udHJvbGxlciBhcyBkZWZhdWx0IH07XHJcbiIsImltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSAndnVlJztcclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyVnVlQ29udHJvbGxlckNvbXBvbmVudHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgdnVlQ29udHJvbGxlcnMgPSBjb250ZXh0LmtleXMoKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XHJcbiAgICAgICAgYWNjW2tleV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxuICAgIGZ1bmN0aW9uIGxvYWRDb21wb25lbnQobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFBhdGggPSBgLi8ke25hbWV9LnZ1ZWA7XHJcbiAgICAgICAgaWYgKCEoY29tcG9uZW50UGF0aCBpbiB2dWVDb250cm9sbGVycykpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zc2libGVWYWx1ZXMgPSBPYmplY3Qua2V5cyh2dWVDb250cm9sbGVycykubWFwKChrZXkpID0+IGtleS5yZXBsYWNlKCcuLycsICcnKS5yZXBsYWNlKCcudnVlJywgJycpKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWdWUgY29udHJvbGxlciBcIiR7bmFtZX1cIiBkb2VzIG5vdCBleGlzdC4gUG9zc2libGUgdmFsdWVzOiAke3Bvc3NpYmxlVmFsdWVzLmpvaW4oJywgJyl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdnVlQ29udHJvbGxlcnNbY29tcG9uZW50UGF0aF0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IGNvbnRleHQoY29tcG9uZW50UGF0aCk7XHJcbiAgICAgICAgICAgIGlmIChtb2R1bGUuZGVmYXVsdCkge1xyXG4gICAgICAgICAgICAgICAgdnVlQ29udHJvbGxlcnNbY29tcG9uZW50UGF0aF0gPSBtb2R1bGUuZGVmYXVsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChtb2R1bGUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICB2dWVDb250cm9sbGVyc1tjb21wb25lbnRQYXRoXSA9IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2R1bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc29sdmVkTW9kdWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlZE1vZHVsZS5kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkTW9kdWxlLmRlZmF1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgZGVmYXVsdCBleHBvcnQgaW4gYXN5bmMgVnVlIGNvbnRyb2xsZXIgXCIke25hbWV9XCIuYCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZ1ZSBjb250cm9sbGVyIFwiJHtuYW1lfVwiIGRvZXMgbm90IGV4aXN0LmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2dWVDb250cm9sbGVyc1tjb21wb25lbnRQYXRoXTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5yZXNvbHZlVnVlQ29tcG9uZW50ID0gKG5hbWUpID0+IHtcclxuICAgICAgICByZXR1cm4gbG9hZENvbXBvbmVudChuYW1lKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlZ2lzdGVyVnVlQ29udHJvbGxlckNvbXBvbmVudHMgfTtcclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcbmltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSc7XHJcblxyXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSAoX2EgPSB0aGlzLnByb3BzVmFsdWUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0JywgeyBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogdGhpcy5wcm9wcyB9KTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVZ1ZUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudFZhbHVlKTtcclxuICAgICAgICB0aGlzLmFwcCA9IGNyZWF0ZUFwcChjb21wb25lbnQsIHRoaXMucHJvcHMpO1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuX192dWVfYXBwX18gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuX192dWVfYXBwX18udW5tb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2JlZm9yZS1tb3VudCcsIHtcclxuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcclxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXHJcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzLFxyXG4gICAgICAgICAgICBhcHA6IHRoaXMuYXBwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXBwLm1vdW50KHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtb3VudCcsIHtcclxuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcclxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXHJcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmFwcC51bm1vdW50KCk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd1bm1vdW50Jywge1xyXG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxyXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wcyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ3Z1ZScgfSk7XHJcbiAgICB9XHJcbn1cclxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcclxuICAgIGNvbXBvbmVudDogU3RyaW5nLFxyXG4gICAgcHJvcHM6IE9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NoYXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlM2FhODA3XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9DaGF0LnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2ZTNhYTgwN1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzZlM2FhODA3JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNmUzYWE4MDcnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NoYXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlM2FhODA3XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzZlM2FhODA3JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9IZWxsby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI3ZTA3MzNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9IZWxsby52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9IZWxsby52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvdnVlL2NvbnRyb2xsZXJzL0hlbGxvLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI0MjdlMDczM1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzQyN2UwNzMzJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNDI3ZTA3MzMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hlbGxvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjdlMDczM1wiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc0MjdlMDczMycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vUXVpei1jaG9vc2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zM2M1ZTQxY1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1F1aXotY2hvb3Nlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUXVpei1jaG9vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotY2hvb3Nlci52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMzNjNWU0MWNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczM2M1ZTQxYycsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzMzYzVlNDFjJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9RdWl6LWNob29zZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzYzVlNDFjXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzMzYzVlNDFjJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9RdWl6LWdhbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3MDg0ZTRiJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUXVpei1nYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9RdWl6LWdhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9RdWl6LWdhbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzcwODRlNGImc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTM3MDg0ZTRiXCJdLFsnX19maWxlJyxcImFzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1nYW1lLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIzNzA4NGU0YlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzM3MDg0ZTRiJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMzcwODRlNGInLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1F1aXotZ2FtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzcwODRlNGImc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMzcwODRlNGInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0hlbGxvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vSGVsbG8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1F1aXotY2hvb3Nlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9RdWl6LWNob29zZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9RdWl6LWdhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vUXVpei1nYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJyZWdpc3RlclZ1ZUNvbnRyb2xsZXJDb21wb25lbnRzIiwicmVxdWlyZSIsImNvbnRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiaW8iLCJwcm9wcyIsImRhdGEiLCJzb2NrZXQiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJjcmVhdGVkIiwiX3RoaXMiLCJlbWl0IiwidXNlciIsIm9uIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsInVzZXJuYW1lIiwibXNnIiwicHVzaCIsIm1ldGhvZHMiLCJzZW5kTWVzc2FnZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJheGlvcyIsInF1aXoiLCJyZXF1aXJlZCIsImN1cnJlbnRVc2VyIiwicXVlc3Rpb25JbmRleCIsImdhbWVPdmVyIiwicGxheWVyIiwiYW5zd2VyIiwic2NvcmUiLCJhZG1pbiIsImNsaWNrYWJsZSIsImFjdGl2ZUFuc3dlcklkIiwiaW1hZ2VQYXRoIiwiZmFsbGJhY2tJbWFnZVBhdGgiLCJ3YXRjaCIsImltbWVkaWF0ZSIsImhhbmRsZXIiLCJuZXdJbmRleCIsImxvYWRJbWFnZSIsImluaXRpYWxpemVTb2NrZXQiLCJtb3VudGVkIiwibG9hZEZyb21Mb2NhbFN0b3JhZ2UiLCJjaGVja0FkbWluUm9sZSIsImNvbXB1dGVkIiwiaW1hZ2VTb3VyY2UiLCJoYW5kbGVOZXh0UXVlc3Rpb24iLCJoYW5kbGVFbmRHYW1lIiwiY2xlYXJMb2NhbERhdGEiLCJpbmRleCIsIl90aGlzJHF1aXokcXVlc3Rpb25zJCIsImltYWdlRmlsZSIsInF1ZXN0aW9ucyIsImhhbmRsZUltYWdlRXJyb3IiLCJzdG9yZWRRdWVzdGlvbkluZGV4IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0b3JlZEdhbWVPdmVyIiwic3RvcmVkU2NvcmUiLCJzdG9yZWRDbGlja2FibGUiLCJwYXJzZUludCIsIkpTT04iLCJwYXJzZSIsInJvbGVzIiwiaW5jbHVkZXMiLCJjaGVja0NvcnJlY3QiLCJ1cGRhdGVMb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibmV4dFF1ZXN0aW9uIiwiY2hlY2tBbGxBbnN3ZXJzUHJvdmlkZWQiLCJhbnN3ZXJlZCIsIl90aGlzMiIsIl9jYWxsZWUiLCJhbGxBbnN3ZXJlZCIsInVzZXJzIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImdldFVzZXJzIiwiX3RoaXMkcGxheWVyJGFuc3dlciIsImNvcnJlY3QiLCJjbGVhciIsInJlc2V0RGF0YSIsImFuc3dlclF1ZXN0aW9uIiwiaWQiLCJfY2FsbGVlMiIsInJlc3BvbnNlIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZ2V0IiwidDAiLCJlcnJvciIsImdldFByb2dyZXNzUGVyY2VudGFnZSIsIk1hdGgiLCJyb3VuZCIsIl9jcmVhdGVFbGVtZW50Vk5vZGUiLCJfY3JlYXRlRWxlbWVudEJsb2NrIiwiX2hvaXN0ZWRfMSIsIl9GcmFnbWVudCIsIl9yZW5kZXJMaXN0IiwiJGRhdGEiLCJfdG9EaXNwbGF5U3RyaW5nIiwiX2NhY2hlIiwiJGV2ZW50Iiwib25LZXl1cCIsIl93aXRoS2V5cyIsIiRvcHRpb25zIiwicGxhY2Vob2xkZXIiLCIkcHJvcHMiLCJxdWl6emVzIiwiaHJlZiIsImxpbmsiLCJ0aXRsZSIsIl9ob2lzdGVkXzIiLCJfY3JlYXRlVGV4dFZOb2RlIiwiX2hvaXN0ZWRfMyIsIl9ob2lzdGVkXzQiLCJfaG9pc3RlZF81IiwiX2hvaXN0ZWRfNiIsInJvbGUiLCJzdHlsZSIsIl9ub3JtYWxpemVTdHlsZSIsIndpZHRoIiwiX2hvaXN0ZWRfNyIsInNyYyIsImFsdCIsIm9uRXJyb3IiLCJfaG9pc3RlZF84IiwiX2hvaXN0ZWRfOSIsIl9ob2lzdGVkXzEwIiwiX2hvaXN0ZWRfMTEiLCJfaG9pc3RlZF8xMiIsIl9ob2lzdGVkXzEzIiwicXVlc3Rpb24iLCJfaG9pc3RlZF8xNCIsImFuc3dlcnMiLCJfbm9ybWFsaXplQ2xhc3MiLCJvbkNsaWNrIiwiX2hvaXN0ZWRfMTYiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJfaG9pc3RlZF8xNSIsIl9ob2lzdGVkXzE3IiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsIl9ob2lzdGVkXzE4IiwidHVyYm9fY29udHJvbGxlciIsImRlZmluZUFzeW5jQ29tcG9uZW50IiwidnVlQ29udHJvbGxlcnMiLCJyZWR1Y2UiLCJhY2MiLCJ1bmRlZmluZWQiLCJsb2FkQ29tcG9uZW50IiwiY29tcG9uZW50UGF0aCIsInBvc3NpYmxlVmFsdWVzIiwibWFwIiwicmVwbGFjZSIsImpvaW4iLCJtb2R1bGUiLCJyZWplY3QiLCJyZXNvbHZlZE1vZHVsZSIsIndpbmRvdyIsInJlc29sdmVWdWVDb21wb25lbnQiLCJjcmVhdGVBcHAiLCJkZWZhdWx0XzEiLCJfYSIsInByb3BzVmFsdWUiLCJkaXNwYXRjaEV2ZW50IiwiY29tcG9uZW50TmFtZSIsImNvbXBvbmVudFZhbHVlIiwiY29tcG9uZW50IiwiX192dWVfYXBwX18iLCJ1bm1vdW50IiwibW91bnQiLCJkaXNjb25uZWN0IiwicGF5bG9hZCIsImRpc3BhdGNoIiwiZGV0YWlsIiwicHJlZml4Il0sInNvdXJjZVJvb3QiOiIifQ==