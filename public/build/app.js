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
  }, "Next Question")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $data.player.admin ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    onClick: _cache[2] || (_cache[2] = function () {
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-6db41a"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7TUFBTSxDQUFDLENBQUM7SUFDM0Q7RUFBQztBQUFBLEVBaENtQjNTLDJEQUFVO0FBa0NsQzZSLFNBQVMsQ0FBQzdNLE1BQU0sR0FBRztFQUNmbU4sU0FBUyxFQUFFOUIsTUFBTTtFQUNqQmpQLEtBQUssRUFBRXNCO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3hDRDs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWlFO0FBQ1Y7QUFDTDs7QUFFbEQsQ0FBbUY7QUFDbkYsaUNBQWlDLHlGQUFlLENBQUMseUVBQU0sYUFBYSwyRUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qm1EO0FBQ0M7QUFDTDs7QUFFOUQsQ0FBbUY7QUFDbkYsaUNBQWlDLHlGQUFlLENBQUMscUZBQU0sYUFBYSw0RUFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjBEO0FBQ1Y7QUFDTDs7QUFFMUQsQ0FBbUY7QUFDbkYsaUNBQWlDLHlGQUFlLENBQUMsaUZBQU0sYUFBYSxtRkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJtRTtBQUN0QjtBQUNMOztBQUV2RCxDQUFnRjs7QUFFRztBQUNuRixpQ0FBaUMseUZBQWUsQ0FBQyw4RUFBTSxhQUFhLDRGQUFNO0FBQzFFO0FBQ0EsSUFBSSxLQUFVLEVBQUUsRUFZZjs7O0FBR0QsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjBMOzs7Ozs7Ozs7Ozs7Ozs7O0FDQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBSjs7Ozs7Ozs7Ozs7Ozs7OztBQ0FIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLyBcXC5banRdc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy8gc3luYyBcXC52dWUkIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL0NoYXQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1jaG9vc2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotZ2FtZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9IZWxsby52dWUiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdHVyYm8vYXNzZXRzL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC12dWUvYXNzZXRzL2Rpc3QvcmVnaXN0ZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC12dWUvYXNzZXRzL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz9lOGI4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1nYW1lLnZ1ZT9hNjc1Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvQ2hhdC52dWU/NDhhOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL0hlbGxvLnZ1ZT82OGEyIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1jaG9vc2VyLnZ1ZT9mNDNjIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1nYW1lLnZ1ZT9jZDM5Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvQ2hhdC52dWU/Mjk1NyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL0hlbGxvLnZ1ZT8zNjE3Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1jaG9vc2VyLnZ1ZT80MzhmIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1nYW1lLnZ1ZT9mZTFiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSAuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEgXFxcXC5banRdc3g/JFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9DaGF0LnZ1ZVwiOiBcIi4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9DaGF0LnZ1ZVwiLFxuXHRcIi4vSGVsbG8udnVlXCI6IFwiLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL0hlbGxvLnZ1ZVwiLFxuXHRcIi4vUXVpei1jaG9vc2VyLnZ1ZVwiOiBcIi4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9RdWl6LWNob29zZXIudnVlXCIsXG5cdFwiLi9RdWl6LWdhbWUudnVlXCI6IFwiLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotZ2FtZS52dWVcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwudnVlJFwiOyIsImltcG9ydCBjb250cm9sbGVyXzAgZnJvbSAnQHN5bWZvbnkvdXgtdHVyYm8vZGlzdC90dXJib19jb250cm9sbGVyLmpzJztcbmltcG9ydCBjb250cm9sbGVyXzEgZnJvbSAnQHN5bWZvbnkvdXgtdnVlL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQge1xuICAnc3ltZm9ueS0tdXgtdHVyYm8tLXR1cmJvLWNvcmUnOiBjb250cm9sbGVyXzAsXG4gICdzeW1mb255LS11eC12dWUtLXZ1ZSc6IGNvbnRyb2xsZXJfMSxcbn07IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcblxyXG4vKlxyXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgU3RpbXVsdXMgY29udHJvbGxlciFcclxuICpcclxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcclxuICogdGhpcyBjb250cm9sbGVyIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbmFtZSBcImhlbGxvXCIgY29tZXMgZnJvbSB0aGUgZmlsZW5hbWU6XHJcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXHJcbiAqXHJcbiAqIERlbGV0ZSB0aGlzIGZpbGUgb3IgYWRhcHQgaXQgZm9yIHlvdXIgdXNlIVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyByZWdpc3RlclZ1ZUNvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSAnQHN5bWZvbnkvdXgtdnVlJztcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcyc7XHJcbi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuXHJcbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcclxucmVxdWlyZSgnLi9zdHlsZXMvYXBwLnNjc3MnKTtcclxuXHJcbnJlZ2lzdGVyVnVlQ29udHJvbGxlckNvbXBvbmVudHMocmVxdWlyZS5jb250ZXh0KCcuL3Z1ZS9jb250cm9sbGVycycsIHRydWUsIC9cXC52dWUkLykpO1xyXG4iLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcclxuXHJcbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XHJcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcclxuICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzJyxcclxuICAgIHRydWUsXHJcbiAgICAvXFwuW2p0XXN4PyQvXHJcbikpO1xyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsIjwhLS0gdnVlLWZyb250ZW5kL3NyYy9jb21wb25lbnRzL0NoYXQudnVlIC0tPlxyXG5cclxuPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDE+UmVhbC10aW1lIENoYXQ8L2gxPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIHYtZm9yPVwiKG1lc3NhZ2UsIGluZGV4KSBpbiBtZXNzYWdlc1wiIDprZXk9XCJpbmRleFwiPnt7IG1lc3NhZ2UgfX08L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJtZXNzYWdlXCIgQGtleXVwLmVudGVyPVwic2VuZE1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIlR5cGUgYSBtZXNzYWdlXCI+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWyd1c2VyJ10sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNvY2tldDogbnVsbCxcclxuICAgICAgICAgICAgbWVzc2FnZTogJycsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IGlvKCdodHRwOi8vMTI3LjAuMC4xOjMwMDAnKTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc3RvcmVVc2VyJywgIHRoaXMudXNlciApO1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdqb2luZWQnLCAgKHVzZXIpID0+XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1c2VyOiAke3VzZXIudXNlcm5hbWV9IGpvaW5lZGApXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ21lc3NhZ2UnLCAobXNnKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtc2cpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Rpc2Nvbm5lY3RlZCBmcm9tIFdlYlNvY2tldCBzZXJ2ZXInKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc2VuZE1lc3NhZ2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ21lc3NhZ2UnLCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxoMj5BdmFpbGFibGUgUXVpenplczwvaDI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGkgdi1mb3I9XCJxdWl6IGluIHF1aXp6ZXNcIiA6a2V5PVwicXVpei5pZFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgOmhyZWY9XCJxdWl6LmxpbmtcIj57e3F1aXoudGl0bGV9fTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICB7e3F1aXp6ZXN9fVxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBwcm9wczogWydxdWl6emVzJ10sXHJcblxyXG4gICAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ2FtZS1jb250YWluZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXIgbXQtNCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS13cmFwcGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibS0wIGZzLTNcIj57e3F1aXoudGl0bGV9fTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtLTAgZnMtM1wiPnt7cXVlc3Rpb25JbmRleCArIDF9fSBvZiB7eyBxdWl6LnF1ZXN0aW9ucy5sZW5ndGggfX08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzIG10LTEgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICA6YXJpYS12YWx1ZW5vdz1cImdldFByb2dyZXNzUGVyY2VudGFnZSgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwieyB3aWR0aDogZ2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCkgKyAnJScgfVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgZ2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCkgfX0lXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cImltYWdlU291cmNlXCIgYWx0PVwiXCIgY2xhc3M9XCJnYW1lLWltYWdlIG10LTFcIiBAZXJyb3I9XCJoYW5kbGVJbWFnZUVycm9yXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1pZj1cIiFnYW1lT3ZlciAmJiBxdWl6LnF1ZXN0aW9ucyAmJiBxdWVzdGlvbkluZGV4IDwgcXVpei5xdWVzdGlvbnMubGVuZ3RoXCIgY2xhc3M9XCJtdC0yIHdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtcXVlc3Rpb24gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtaW5kZXggZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1lLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZzLTNcIj57e3F1ZXN0aW9uSW5kZXggKyAxfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm0tMFwiPnt7IHF1aXoucXVlc3Rpb25zW3F1ZXN0aW9uSW5kZXhdLnF1ZXN0aW9uIH19PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXItZ3JpZCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihhbnN3ZXIsIGluZGV4KSBpbiBxdWl6LnF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XS5hbnN3ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiYW5zd2VyLmlkXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImdhbWUtYW5zd2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJhbnN3ZXJRdWVzdGlvbihhbnN3ZXIpXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdhY3RpdmUtYW5zd2VyJzogYW5zd2VyLmlkID09PSBhY3RpdmVBbnN3ZXJJZCB9XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+PHNwYW4gY2xhc3M9XCJhbnN3ZXItaW5kZXhcIj57eyBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaW5kZXgpIH19PC9zcGFuPiB7eyBhbnN3ZXIuYW5zd2VyIH19PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCB2LWVsc2UtaWY9XCJnYW1lT3ZlclwiIGNsYXNzPVwia2Fob290LW1lc3NhZ2VcIj5ObyBxdWVzdGlvbnMgYXZhaWxhYmxlPC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhZG1pbi1ncm91cFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cIm5leHRRdWVzdGlvblwiIHYtaWY9XCJwbGF5ZXIuYWRtaW4gJiYgIWdhbWVPdmVyXCIgY2xhc3M9XCJrYWhvb3QtYnV0dG9uXCI+TmV4dCBRdWVzdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInJlc2V0RGF0YVwiIHYtaWY9XCJwbGF5ZXIuYWRtaW5cIiBjbGFzcz1cImthaG9vdC1idXR0b25cIj5SZXNldCBEYXRhPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IGlvIH0gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBxdWl6OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdXJyZW50VXNlcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHF1ZXN0aW9uSW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGdhbWVPdmVyOiBmYWxzZSxcclxuICAgICAgICAgICAgcGxheWVyOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyOiB0aGlzLmN1cnJlbnRVc2VyLFxyXG4gICAgICAgICAgICAgICAgYW5zd2VyOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc2NvcmU6IDAsXHJcbiAgICAgICAgICAgICAgICBhZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgc29ja2V0OiBudWxsLFxyXG4gICAgICAgICAgICBhY3RpdmVBbnN3ZXJJZDogbnVsbCxcclxuICAgICAgICAgICAgaW1hZ2VQYXRoOiAnJyxcclxuICAgICAgICAgICAgZmFsbGJhY2tJbWFnZVBhdGg6ICcvaW1hZ2VzL2ZhbGxiYWNrLmpwZycsXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIHF1ZXN0aW9uSW5kZXg6IHtcclxuICAgICAgICAgICAgaW1tZWRpYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBoYW5kbGVyKG5ld0luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRJbWFnZShuZXdJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZCgpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVTb2NrZXQoKTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICB0aGlzLmNoZWNrQWRtaW5Sb2xlKCk7XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBpbWFnZVNvdXJjZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VQYXRoIHx8IHRoaXMuZmFsbGJhY2tJbWFnZVBhdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBpbml0aWFsaXplU29ja2V0KCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IGlvKFwiaHR0cDovLzEyNy4wLjAuMTozMDAwXCIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcInN0b3JlVXNlclwiLCB0aGlzLmN1cnJlbnRVc2VyLnVzZXJuYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oXCJqb2luZWRcIiwgKHVzZXIpID0+IGNvbnNvbGUubG9nKGBVc2VyOiAke3VzZXIudXNlcm5hbWV9IGpvaW5lZGApKTtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oXCJuZXh0LXF1ZXN0aW9uXCIsIHRoaXMuaGFuZGxlTmV4dFF1ZXN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zb2NrZXQub24oXCJlbmQtZ2FtZVwiLCB0aGlzLmhhbmRsZUVuZEdhbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbihcImNsZWFyLWRhdGFcIiwgdGhpcy5jbGVhckxvY2FsRGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkSW1hZ2UoaW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gQXNzdW1pbmcgdGhlIGltYWdlIHBhdGggaXMganVzdCB0aGUgZmlsZW5hbWVcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VGaWxlID0gdGhpcy5xdWl6LnF1ZXN0aW9uc1tpbmRleF0/LmltYWdlUGF0aDtcclxuICAgICAgICAgICAgaWYgKGltYWdlRmlsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVBhdGggPSBgL2ltYWdlcy8ke2ltYWdlRmlsZX1gO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVBhdGggPSB0aGlzLmZhbGxiYWNrSW1hZ2VQYXRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVJbWFnZUVycm9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlUGF0aCA9IHRoaXMuZmFsbGJhY2tJbWFnZVBhdGg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RvcmVkUXVlc3Rpb25JbmRleCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicXVlc3Rpb25JbmRleFwiKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RvcmVkR2FtZU92ZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdhbWVPdmVyXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBzdG9yZWRTY29yZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGxheWVyU2NvcmVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlZENsaWNrYWJsZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2xpY2thYmxlXCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0b3JlZFF1ZXN0aW9uSW5kZXggIT09IG51bGwpIHRoaXMucXVlc3Rpb25JbmRleCA9IHBhcnNlSW50KHN0b3JlZFF1ZXN0aW9uSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmVkR2FtZU92ZXIgIT09IG51bGwpIHRoaXMuZ2FtZU92ZXIgPSBKU09OLnBhcnNlKHN0b3JlZEdhbWVPdmVyKTtcclxuICAgICAgICAgICAgaWYgKHN0b3JlZFNjb3JlICE9PSBudWxsKSB0aGlzLnBsYXllci5zY29yZSA9IHBhcnNlSW50KHN0b3JlZFNjb3JlKTtcclxuICAgICAgICAgICAgaWYgKHN0b3JlZENsaWNrYWJsZSAhPT0gbnVsbCkgdGhpcy5jbGlja2FibGUgPSBKU09OLnBhcnNlKHN0b3JlZENsaWNrYWJsZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja0FkbWluUm9sZSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFVzZXIucm9sZXMuaW5jbHVkZXMoXCJST0xFX0FETUlOXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5hZG1pbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZU5leHRRdWVzdGlvbihpbmRleCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ29ycmVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgdGhpcy5jbGlja2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUFuc3dlcklkID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYW5zd2VyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZUVuZEdhbWUoZ2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGdhbWVPdmVyO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ29ycmVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInF1ZXN0aW9uSW5kZXhcIiwgdGhpcy5xdWVzdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwbGF5ZXJTY29yZVwiLCB0aGlzLnBsYXllci5zY29yZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2xpY2thYmxlXCIsIHRoaXMuY2xpY2thYmxlKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnYW1lT3ZlclwiLCB0aGlzLmdhbWVPdmVyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5leHRRdWVzdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucXVlc3Rpb25JbmRleCA8IHRoaXMucXVpei5xdWVzdGlvbnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FsbEFuc3dlcnNQcm92aWRlZCgpLnRoZW4oYW5zd2VyZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXJlZCkgdGhpcy5zb2NrZXQuZW1pdChcIm5leHQtcXVlc3Rpb25cIiwgdGhpcy5xdWVzdGlvbkluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0FsbEFuc3dlcnNQcm92aWRlZCgpLnRoZW4oYW5zd2VyZWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXJlZCkgdGhpcy5zb2NrZXQuZW1pdChcImVuZC1nYW1lXCIsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBjaGVja0FsbEFuc3dlcnNQcm92aWRlZCgpIHtcclxuICAgICAgICAgICAgbGV0IGFsbEFuc3dlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCB0aGlzLmdldFVzZXJzKCk7XHJcbiAgICAgICAgICAgIHVzZXJzLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXVzZXIuYW5zd2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dXNlci51c2VybmFtZX0gaGFzbid0IGZpbGxlZCBpbiB0aGVpciBhbnN3ZXJgKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGxBbnN3ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGFsbEFuc3dlcmVkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tDb3JyZWN0KCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIuYW5zd2VyPy5jb3JyZWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zY29yZSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmFuc3dlciA9IG51bGw7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGVhckxvY2FsRGF0YSgpIHtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkluZGV4ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2NvcmUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQW5zd2VySWQgPSBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzZXREYXRhKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdjbGVhci1kYXRhJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbnN3ZXJRdWVzdGlvbihhbnN3ZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2thYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbnN3ZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5hbnN3ZXIgPSBhbnN3ZXI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUFuc3dlcklkID0gYW5zd2VyLmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja2FibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KFwiYW5zd2VyLXF1ZXN0aW9uXCIsIFt0aGlzLmN1cnJlbnRVc2VyLnVzZXJuYW1lLCB0aGlzLnBsYXllci5hbnN3ZXJdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgZ2V0VXNlcnMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly8xMjcuMC4wLjE6MzAwMC91c2Vyc1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgdXNlcnMhXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgoKHRoaXMucXVlc3Rpb25JbmRleCArIDEpIC8gdGhpcy5xdWl6LnF1ZXN0aW9ucy5sZW5ndGgpICogMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmhlYWRlciB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcbi5nYW1lLWltYWdlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgbWF4LWhlaWdodDogNTB2aDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5nYW1lLWluZGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1pbi13aWR0aDogNDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDE2OCwgMTQsIDIyMiwgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLndyYXBwZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG4uZ2FtZS1hbnN3ZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE2OCwgMTQsIDIyMiwgMSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogRW5zdXJlIGJ1dHRvbnMgYXJlIGNsaWNrYWJsZSAqL1xyXG59XHJcbi5nYW1lLWFuc3dlciBoMiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmFuc3dlci1pbmRleCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG59XHJcbi5nYW1lLXF1ZXN0aW9uIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmFkbWluLWdyb3VwIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4uYWRtaW4tZ3JvdXAgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBib3JkZXI6IHJnYmEoMTY4LCAxNCwgMjIyLCAxKSAycHggc29saWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4uYW5zd2VyLWdyaWQgYnV0dG9uOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYWN0aXZlLWFuc3dlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDIzNCwgMCk7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5IZWxsbyB7eyBuYW1lIH19ITwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBzZXR1cD5cclxuICAgIGRlZmluZVByb3BzKHtcclxuICAgICAgICBuYW1lOiBTdHJpbmdcclxuICAgIH0pO1xyXG48L3NjcmlwdD4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuaW1wb3J0ICdAaG90d2lyZWQvdHVyYm8nO1xyXG5cclxuY2xhc3MgdHVyYm9fY29udHJvbGxlciBleHRlbmRzIENvbnRyb2xsZXIge1xyXG59XHJcblxyXG5leHBvcnQgeyB0dXJib19jb250cm9sbGVyIGFzIGRlZmF1bHQgfTtcclxuIiwiaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tICd2dWUnO1xyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJWdWVDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCB2dWVDb250cm9sbGVycyA9IGNvbnRleHQua2V5cygpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgICBhY2Nba2V5XSA9IHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwge30pO1xyXG4gICAgZnVuY3Rpb24gbG9hZENvbXBvbmVudChuYW1lKSB7XHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50UGF0aCA9IGAuLyR7bmFtZX0udnVlYDtcclxuICAgICAgICBpZiAoIShjb21wb25lbnRQYXRoIGluIHZ1ZUNvbnRyb2xsZXJzKSkge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NzaWJsZVZhbHVlcyA9IE9iamVjdC5rZXlzKHZ1ZUNvbnRyb2xsZXJzKS5tYXAoKGtleSkgPT4ga2V5LnJlcGxhY2UoJy4vJywgJycpLnJlcGxhY2UoJy52dWUnLCAnJykpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZ1ZSBjb250cm9sbGVyIFwiJHtuYW1lfVwiIGRvZXMgbm90IGV4aXN0LiBQb3NzaWJsZSB2YWx1ZXM6ICR7cG9zc2libGVWYWx1ZXMuam9pbignLCAnKX1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2dWVDb250cm9sbGVyc1tjb21wb25lbnRQYXRoXSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc3QgbW9kdWxlID0gY29udGV4dChjb21wb25lbnRQYXRoKTtcclxuICAgICAgICAgICAgaWYgKG1vZHVsZS5kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB2dWVDb250cm9sbGVyc1tjb21wb25lbnRQYXRoXSA9IG1vZHVsZS5kZWZhdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG1vZHVsZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgIHZ1ZUNvbnRyb2xsZXJzW2NvbXBvbmVudFBhdGhdID0gZGVmaW5lQXN5bmNDb21wb25lbnQoKCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzb2x2ZWRNb2R1bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc29sdmVkTW9kdWxlLmRlZmF1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb2x2ZWRNb2R1bGUuZGVmYXVsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBDYW5ub3QgZmluZCBkZWZhdWx0IGV4cG9ydCBpbiBhc3luYyBWdWUgY29udHJvbGxlciBcIiR7bmFtZX1cIi5gKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2gocmVqZWN0KTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVnVlIGNvbnRyb2xsZXIgXCIke25hbWV9XCIgZG9lcyBub3QgZXhpc3QuYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZ1ZUNvbnRyb2xsZXJzW2NvbXBvbmVudFBhdGhdO1xyXG4gICAgfVxyXG4gICAgd2luZG93LnJlc29sdmVWdWVDb21wb25lbnQgPSAobmFtZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBsb2FkQ29tcG9uZW50KG5hbWUpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgcmVnaXN0ZXJWdWVDb250cm9sbGVyQ29tcG9uZW50cyB9O1xyXG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcclxuaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcclxuXHJcbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IChfYSA9IHRoaXMucHJvcHNWYWx1ZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGNvbXBvbmVudE5hbWU6IHRoaXMuY29tcG9uZW50VmFsdWUsIHByb3BzOiB0aGlzLnByb3BzIH0pO1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlVnVlQ29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xyXG4gICAgICAgIHRoaXMuYXBwID0gY3JlYXRlQXBwKGNvbXBvbmVudCwgdGhpcy5wcm9wcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5fX3Z1ZV9hcHBfXyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5fX3Z1ZV9hcHBfXy51bm1vdW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnYmVmb3JlLW1vdW50Jywge1xyXG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcclxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXHJcbiAgICAgICAgICAgIGFwcDogdGhpcy5hcHAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hcHAubW91bnQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21vdW50Jywge1xyXG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxyXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcclxuICAgICAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBkaXNjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuYXBwLnVubW91bnQoKTtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VubW91bnQnLCB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IHRoaXMuY29tcG9uZW50VmFsdWUsXHJcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAndnVlJyB9KTtcclxuICAgIH1cclxufVxyXG5kZWZhdWx0XzEudmFsdWVzID0ge1xyXG4gICAgY29tcG9uZW50OiBTdHJpbmcsXHJcbiAgICBwcm9wczogT2JqZWN0LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQ2hhdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmUzYWE4MDdcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9DaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvdnVlL2NvbnRyb2xsZXJzL0NoYXQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjZlM2FhODA3XCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNmUzYWE4MDcnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc2ZTNhYTgwNycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2hhdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmUzYWE4MDdcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignNmUzYWE4MDcnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0hlbGxvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjdlMDczM1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0hlbGxvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hlbGxvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy92dWUvY29udHJvbGxlcnMvSGVsbG8udnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjQyN2UwNzMzXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnNDI3ZTA3MzMnLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCc0MjdlMDczMycsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSGVsbG8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQyN2UwNzMzXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzQyN2UwNzMzJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9RdWl6LWNob29zZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzYzVlNDFjXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUXVpei1jaG9vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9RdWl6LWNob29zZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1sncmVuZGVyJyxyZW5kZXJdLFsnX19maWxlJyxcImFzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1jaG9vc2VyLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIzM2M1ZTQxY1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzMzYzVlNDFjJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMzNjNWU0MWMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1F1aXotY2hvb3Nlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzNjNWU0MWNcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMzNjNWU0MWMnLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL1F1aXotZ2FtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzcwODRlNGImc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9RdWl6LWdhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL1F1aXotZ2FtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL1F1aXotZ2FtZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zNzA4NGU0YiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtMzcwODRlNGJcIl0sWydfX2ZpbGUnLFwiYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9RdWl6LWdhbWUudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcIjM3MDg0ZTRiXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnMzcwODRlNGInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCczNzA4NGU0YicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUXVpei1nYW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzA4NGU0YiZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCczNzA4NGU0YicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9DaGF0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vSGVsbG8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9IZWxsby52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz1qc1wiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vUXVpei1jaG9vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1F1aXotY2hvb3Nlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1F1aXotZ2FtZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9RdWl6LWdhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIl9kZWZhdWx0IiwiX0NvbnRyb2xsZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2FsbFN1cGVyIiwiYXJndW1lbnRzIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb25uZWN0IiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiZGVmYXVsdCIsInJlZ2lzdGVyVnVlQ29udHJvbGxlckNvbXBvbmVudHMiLCJyZXF1aXJlIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJpbyIsInByb3BzIiwiZGF0YSIsInNvY2tldCIsIm1lc3NhZ2UiLCJtZXNzYWdlcyIsImNyZWF0ZWQiLCJfdGhpcyIsImVtaXQiLCJ1c2VyIiwib24iLCJjb25zb2xlIiwibG9nIiwiY29uY2F0IiwidXNlcm5hbWUiLCJtc2ciLCJwdXNoIiwibWV0aG9kcyIsInNlbmRNZXNzYWdlIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsImF4aW9zIiwicXVpeiIsInJlcXVpcmVkIiwiY3VycmVudFVzZXIiLCJxdWVzdGlvbkluZGV4IiwiZ2FtZU92ZXIiLCJwbGF5ZXIiLCJhbnN3ZXIiLCJzY29yZSIsImFkbWluIiwiY2xpY2thYmxlIiwiYWN0aXZlQW5zd2VySWQiLCJpbWFnZVBhdGgiLCJmYWxsYmFja0ltYWdlUGF0aCIsIndhdGNoIiwiaW1tZWRpYXRlIiwiaGFuZGxlciIsIm5ld0luZGV4IiwibG9hZEltYWdlIiwiaW5pdGlhbGl6ZVNvY2tldCIsIm1vdW50ZWQiLCJsb2FkRnJvbUxvY2FsU3RvcmFnZSIsImNoZWNrQWRtaW5Sb2xlIiwiY29tcHV0ZWQiLCJpbWFnZVNvdXJjZSIsImhhbmRsZU5leHRRdWVzdGlvbiIsImhhbmRsZUVuZEdhbWUiLCJjbGVhckxvY2FsRGF0YSIsImluZGV4IiwiX3RoaXMkcXVpeiRxdWVzdGlvbnMkIiwiaW1hZ2VGaWxlIiwicXVlc3Rpb25zIiwiaGFuZGxlSW1hZ2VFcnJvciIsInN0b3JlZFF1ZXN0aW9uSW5kZXgiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkR2FtZU92ZXIiLCJzdG9yZWRTY29yZSIsInN0b3JlZENsaWNrYWJsZSIsInBhcnNlSW50IiwiSlNPTiIsInBhcnNlIiwicm9sZXMiLCJpbmNsdWRlcyIsImNoZWNrQ29ycmVjdCIsInVwZGF0ZUxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJuZXh0UXVlc3Rpb24iLCJjaGVja0FsbEFuc3dlcnNQcm92aWRlZCIsImFuc3dlcmVkIiwiX3RoaXMyIiwiX2NhbGxlZSIsImFsbEFuc3dlcmVkIiwidXNlcnMiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZ2V0VXNlcnMiLCJfdGhpcyRwbGF5ZXIkYW5zd2VyIiwiY29ycmVjdCIsImNsZWFyIiwicmVzZXREYXRhIiwiYW5zd2VyUXVlc3Rpb24iLCJpZCIsIl9jYWxsZWUyIiwicmVzcG9uc2UiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXQiLCJ0MCIsImVycm9yIiwiZ2V0UHJvZ3Jlc3NQZXJjZW50YWdlIiwiTWF0aCIsInJvdW5kIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCIkZGF0YSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY2FjaGUiLCIkZXZlbnQiLCJvbktleXVwIiwiX3dpdGhLZXlzIiwiJG9wdGlvbnMiLCJwbGFjZWhvbGRlciIsIiRwcm9wcyIsInF1aXp6ZXMiLCJocmVmIiwibGluayIsInRpdGxlIiwiX2hvaXN0ZWRfMiIsIl9jcmVhdGVUZXh0Vk5vZGUiLCJfaG9pc3RlZF8zIiwiX2hvaXN0ZWRfNCIsIl9ob2lzdGVkXzUiLCJfaG9pc3RlZF82Iiwicm9sZSIsInN0eWxlIiwiX25vcm1hbGl6ZVN0eWxlIiwid2lkdGgiLCJfaG9pc3RlZF83Iiwic3JjIiwiYWx0Iiwib25FcnJvciIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF85IiwiX2hvaXN0ZWRfMTAiLCJfaG9pc3RlZF8xMSIsIl9ob2lzdGVkXzEyIiwiX2hvaXN0ZWRfMTMiLCJxdWVzdGlvbiIsIl9ob2lzdGVkXzE0IiwiYW5zd2VycyIsIl9ub3JtYWxpemVDbGFzcyIsIm9uQ2xpY2siLCJfaG9pc3RlZF8xNiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIl9ob2lzdGVkXzE1IiwiX2hvaXN0ZWRfMTciLCJfY3JlYXRlQ29tbWVudFZOb2RlIiwiX2hvaXN0ZWRfMTgiLCJ0dXJib19jb250cm9sbGVyIiwiZGVmaW5lQXN5bmNDb21wb25lbnQiLCJ2dWVDb250cm9sbGVycyIsInJlZHVjZSIsImFjYyIsInVuZGVmaW5lZCIsImxvYWRDb21wb25lbnQiLCJjb21wb25lbnRQYXRoIiwicG9zc2libGVWYWx1ZXMiLCJtYXAiLCJyZXBsYWNlIiwiam9pbiIsIm1vZHVsZSIsInJlamVjdCIsInJlc29sdmVkTW9kdWxlIiwid2luZG93IiwicmVzb2x2ZVZ1ZUNvbXBvbmVudCIsImNyZWF0ZUFwcCIsImRlZmF1bHRfMSIsIl9hIiwicHJvcHNWYWx1ZSIsImRpc3BhdGNoRXZlbnQiLCJjb21wb25lbnROYW1lIiwiY29tcG9uZW50VmFsdWUiLCJjb21wb25lbnQiLCJfX3Z1ZV9hcHBfXyIsInVubW91bnQiLCJtb3VudCIsImRpc2Nvbm5lY3QiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiXSwic291cmNlUm9vdCI6IiJ9