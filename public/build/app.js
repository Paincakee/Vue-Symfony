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
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _images_encore_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../images/encore.jpg */ "./assets/images/encore.jpg");
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
      image: _images_encore_jpg__WEBPACK_IMPORTED_MODULE_27__
    };
  },
  created: function created() {
    var _this = this;
    this.socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_26__.io)("http://127.0.0.1:3000");
    this.socket.emit("storeUser", this.currentUser.username);
    this.socket.on("joined", function (user) {
      return console.log("user: ".concat(user.username, " joined"));
    });
    this.socket.on("next-question", function (index) {
      _this.questionIndex = index;
      _this.clickable = true;
      _this.checkCorrect();
      localStorage.setItem("questionIndex", index);
      localStorage.setItem("playerScore", _this.player.score);
      localStorage.setItem("clickable", _this.clickable);
    });
    this.socket.on("end-game", function (gameOver) {
      _this.gameOver = gameOver;
      _this.checkCorrect();
      localStorage.setItem("gameOver", gameOver);
      localStorage.setItem("playerScore", _this.player.score);
    });
    this.socket.on("clear-data", function () {
      _this.clearLocalData();
    });
  },
  mounted: function mounted() {
    var _this2 = this;
    // Load from localStorage on component mount
    var storedQuestionIndex = localStorage.getItem("questionIndex");
    var storedGameOver = localStorage.getItem("gameOver");
    var storedScore = localStorage.getItem("playerScore");
    var storedClickable = localStorage.getItem("clickable");
    if (storedQuestionIndex !== null) {
      this.questionIndex = parseInt(storedQuestionIndex);
    }
    if (storedGameOver !== null) {
      this.gameOver = JSON.parse(storedGameOver);
    }
    if (storedScore !== null) {
      this.player.score = parseInt(storedScore);
    }
    if (storedClickable !== null) {
      this.clickable = JSON.parse(storedClickable);
    }
    this.currentUser.roles.forEach(function (role) {
      if (role === "ROLE_ADMIN") {
        _this2.player.admin = true;
      }
    });
  },
  methods: {
    nextQuestion: function nextQuestion() {
      var _this3 = this;
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var answered;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_this3.questionIndex < _this3.quiz.questions.length - 1 && _this3.player.answer !== null)) {
                _context.next = 7;
                break;
              }
              answered = true;
              _context.next = 4;
              return _this3.getUsers().then(function (users) {
                users.forEach(function (user) {
                  if (!user.answer) {
                    console.log("".concat(user.username, " hasnt filled in their answer"));
                    answered = false;
                  }
                });
              });
            case 4:
              if (answered) {
                _this3.socket.emit("next-question", _this3.questionIndex);
              }
              _context.next = 8;
              break;
            case 7:
              _this3.socket.emit("end-game", _this3.gameOver);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    },
    checkCorrect: function checkCorrect() {
      if (this.player.answer.correct === true) {
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
    },
    answerQuestion: function answerQuestion(answer) {
      this.player.answer = answer;
      console.log(this.player.answer.correct);
      this.clickable = false;
      localStorage.setItem("clickable", this.clickable);
      this.socket.emit("answer-question", [this.currentUser.username, this.player.answer]);
    },
    getAnswerClass: function getAnswerClass(index) {
      // Determine class based on index for Kahoot!-style colors
      switch (index % 4) {
        case 0:
          return "kahoot-answer-red";
        case 1:
          return "kahoot-answer-blue";
        case 2:
          return "kahoot-answer-yellow";
        case 3:
          return "kahoot-answer-green";
        default:
          return "";
        // Handle additional cases if needed
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
              return axios__WEBPACK_IMPORTED_MODULE_28__["default"].get("http://127.0.0.1:3000/users");
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
      return Math.round((this.questionIndex + 1 / this.quiz.questions.length) * 100);
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
  "class": "mt-2"
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
var _hoisted_15 = ["disabled", "onClick"];
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
    src: $data.image,
    alt: "",
    "class": "game-image mt-1"
  }, null, 8 /* PROPS */, _hoisted_8)]), !$data.gameOver && $props.quiz.questions && $data.questionIndex < $props.quiz.questions.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.questionIndex + 1), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.quiz.questions[$data.questionIndex].question), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.quiz.questions[$data.questionIndex].answers, function (answer, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
      key: answer.id,
      disabled: !$data.clickable,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["game-answer", $options.getAnswerClass(index)]),
      onClick: function onClick($event) {
        return $options.answerQuestion(answer);
      }
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(String.fromCharCode(65 + index)) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(answer.answer), 11 /* TEXT, CLASS, PROPS */, _hoisted_15);
  }), 128 /* KEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        <p v-else class=\"kahoot-message\">No questions available</p>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("        <div class=\"score-controls\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            <h2>Score: {{ player.score }}</h2>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            <div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                <button @click=\"nextQuestion\" v-if=\"player.admin\" class=\"kahoot-button\">Next Question</button>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                <button @click=\"socket.emit('clear-data')\" v-if=\"player.admin\" class=\"kahoot-button\">Reset Data</button>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            </div>")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js-node_modules_symfony_stimulus-br-26de77"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJzRTtBQUNEO0FBQ3JFLGlFQUFlO0FBQ2YsbUNBQW1DLGtGQUFZO0FBQy9DLDBCQUEwQixpRkFBWTtBQUN0QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0wrQzs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsSUFBQUMsUUFBQSwwQkFBQUMsV0FBQTtFQUFBLFNBQUFELFNBQUE7SUFBQUUsZUFBQSxPQUFBRixRQUFBO0lBQUEsT0FBQUcsVUFBQSxPQUFBSCxRQUFBLEVBQUFJLFNBQUE7RUFBQTtFQUFBQyxTQUFBLENBQUFMLFFBQUEsRUFBQUMsV0FBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQU4sUUFBQTtJQUFBTyxHQUFBO0lBQUFDLEtBQUEsRUFVSSxTQUFBQyxRQUFBLEVBQVU7TUFDTixJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsV0FBVyxHQUFHLG1FQUFtRTtJQUNsRztFQUFDO0FBQUEsRUFId0JaLDJEQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNYMkI7QUFDMUM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0FlLG1CQUFPLENBQUMsbURBQW1CLENBQUM7QUFFNUJELGdGQUErQixDQUFDQyxzRUFBb0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1p6Qjs7QUFFNUQ7QUFDTyxJQUFNRyxHQUFHLEdBQUdELDBFQUFnQixDQUFDRix5SUFJbkMsQ0FBQztBQUNGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNJc0M7QUFFdEMsaUVBQWU7RUFDWEssS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDO0VBQ2ZDLElBQUksV0FBQUEsS0FBQSxFQUFHO0lBQ0gsT0FBTztNQUNIQyxNQUFNLEVBQUUsSUFBSTtNQUNaQyxPQUFPLEVBQUUsRUFBRTtNQUNYQyxRQUFRLEVBQUU7SUFDZCxDQUFDO0VBQ0wsQ0FBQztFQUNEQyxPQUFPLFdBQUFBLFFBQUEsRUFBRztJQUFBLElBQUFDLEtBQUE7SUFDTixJQUFJLENBQUNKLE1BQUssR0FBSUgsb0RBQUUsQ0FBQyx1QkFBdUIsQ0FBQztJQUV6QyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLFdBQVcsRUFBRyxJQUFJLENBQUNDLElBQUssQ0FBQztJQUMxQyxJQUFJLENBQUNOLE1BQU0sQ0FBQ08sRUFBRSxDQUFDLFFBQVEsRUFBRyxVQUFDRCxJQUFJO01BQUEsT0FDM0JFLE9BQU8sQ0FBQ0MsR0FBRyxVQUFBQyxNQUFBLENBQVVKLElBQUksQ0FBQ0ssUUFBUSxZQUFTO0lBQUEsQ0FDL0MsQ0FBQztJQUVELElBQUksQ0FBQ1gsTUFBTSxDQUFDTyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUNLLEdBQUcsRUFBSztNQUMvQlIsS0FBSSxDQUFDRixRQUFRLENBQUNXLElBQUksQ0FBQ0QsR0FBRyxDQUFDO0lBQzNCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ1osTUFBTSxDQUFDTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQU07TUFDL0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9DQUFvQyxDQUFDO0lBQ3JELENBQUMsQ0FBQztFQUNOLENBQUM7RUFDREssT0FBTyxFQUFFO0lBQ0xDLFdBQVcsV0FBQUEsWUFBQSxFQUFHO01BQ1YsSUFBSSxDQUFDZixNQUFNLENBQUNLLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDSixPQUFPLENBQUM7TUFDekMsSUFBSSxDQUFDQSxPQUFNLEdBQUksRUFBRTtJQUNyQjtFQUNKO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNHLGlFQUFlO0VBQ1hILEtBQUssRUFBRSxDQUFDLFNBQVM7QUFFckIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDcUNMLHFKQUFBa0IsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQWhDLEtBQUEsS0FBQXVDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBaEIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBOUIsS0FBQSxFQUFBZ0MsQ0FBQSxFQUFBZ0IsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQW5CLENBQUEsQ0FBQUQsQ0FBQSxXQUFBaUIsTUFBQSxtQkFBQWhCLENBQUEsSUFBQWdCLE1BQUEsWUFBQUEsT0FBQWhCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBbUIsS0FBQXBCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUksQ0FBQSxHQUFBVCxDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBa0IsU0FBQSxHQUFBdEIsQ0FBQSxHQUFBc0IsU0FBQSxFQUFBWCxDQUFBLEdBQUFSLE1BQUEsQ0FBQW9CLE1BQUEsQ0FBQWQsQ0FBQSxDQUFBTCxTQUFBLEdBQUFTLENBQUEsT0FBQVcsT0FBQSxDQUFBbkIsQ0FBQSxnQkFBQUUsQ0FBQSxDQUFBSSxDQUFBLGVBQUF6QyxLQUFBLEVBQUF1RCxnQkFBQSxDQUFBeEIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFXLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBekIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUF5QixJQUFBLFlBQUFDLEdBQUEsRUFBQTNCLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTdCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEwQixJQUFBLFdBQUFDLEdBQUEsRUFBQTNCLENBQUEsUUFBQUQsQ0FBQSxDQUFBcUIsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQW5DLE1BQUEsQ0FBQW9DLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdEMsQ0FBQSxJQUFBRyxDQUFBLENBQUF3QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFoQyxTQUFBLEdBQUFrQixTQUFBLENBQUFsQixTQUFBLEdBQUFELE1BQUEsQ0FBQW9CLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTFDLENBQUEsZ0NBQUEyQyxPQUFBLFdBQUE1QyxDQUFBLElBQUFpQixNQUFBLENBQUFoQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTRDLE9BQUEsQ0FBQTdDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQTZDLGNBQUE3QyxDQUFBLEVBQUFELENBQUEsYUFBQStDLE9BQUE3QyxDQUFBLEVBQUFLLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBekIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU0sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBN0MsS0FBQSxTQUFBNEQsQ0FBQSxnQkFBQWtCLE9BQUEsQ0FBQWxCLENBQUEsS0FBQXpCLENBQUEsQ0FBQXdCLElBQUEsQ0FBQUMsQ0FBQSxlQUFBOUIsQ0FBQSxDQUFBaUQsT0FBQSxDQUFBbkIsQ0FBQSxDQUFBb0IsT0FBQSxFQUFBQyxJQUFBLFdBQUFsRCxDQUFBLElBQUE4QyxNQUFBLFNBQUE5QyxDQUFBLEVBQUFRLENBQUEsRUFBQUUsQ0FBQSxnQkFBQVYsQ0FBQSxJQUFBOEMsTUFBQSxVQUFBOUMsQ0FBQSxFQUFBUSxDQUFBLEVBQUFFLENBQUEsUUFBQVgsQ0FBQSxDQUFBaUQsT0FBQSxDQUFBbkIsQ0FBQSxFQUFBcUIsSUFBQSxXQUFBbEQsQ0FBQSxJQUFBYyxDQUFBLENBQUE3QyxLQUFBLEdBQUErQixDQUFBLEVBQUFRLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWQsQ0FBQSxXQUFBOEMsTUFBQSxVQUFBOUMsQ0FBQSxFQUFBUSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTFCLENBQUEsRUFBQUssQ0FBQSxvQkFBQXJDLEtBQUEsV0FBQUEsTUFBQStCLENBQUEsRUFBQUksQ0FBQSxhQUFBK0MsMkJBQUEsZUFBQXBELENBQUEsV0FBQUEsQ0FBQSxFQUFBRSxDQUFBLElBQUE2QyxNQUFBLENBQUE5QyxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUQsSUFBQSxDQUFBQywwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTNCLGlCQUFBekIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUUsQ0FBQSxHQUFBdUIsQ0FBQSxtQkFBQXJCLENBQUEsRUFBQUUsQ0FBQSxRQUFBSixDQUFBLEtBQUF5QixDQUFBLFFBQUFxQixLQUFBLHNDQUFBOUMsQ0FBQSxLQUFBMEIsQ0FBQSxvQkFBQXhCLENBQUEsUUFBQUUsQ0FBQSxXQUFBekMsS0FBQSxFQUFBK0IsQ0FBQSxFQUFBcUQsSUFBQSxlQUFBakQsQ0FBQSxDQUFBa0QsTUFBQSxHQUFBOUMsQ0FBQSxFQUFBSixDQUFBLENBQUF1QixHQUFBLEdBQUFqQixDQUFBLFVBQUFFLENBQUEsR0FBQVIsQ0FBQSxDQUFBbUQsUUFBQSxNQUFBM0MsQ0FBQSxRQUFBRSxDQUFBLEdBQUEwQyxtQkFBQSxDQUFBNUMsQ0FBQSxFQUFBUixDQUFBLE9BQUFVLENBQUEsUUFBQUEsQ0FBQSxLQUFBbUIsQ0FBQSxtQkFBQW5CLENBQUEscUJBQUFWLENBQUEsQ0FBQWtELE1BQUEsRUFBQWxELENBQUEsQ0FBQXFELElBQUEsR0FBQXJELENBQUEsQ0FBQXNELEtBQUEsR0FBQXRELENBQUEsQ0FBQXVCLEdBQUEsc0JBQUF2QixDQUFBLENBQUFrRCxNQUFBLFFBQUFoRCxDQUFBLEtBQUF1QixDQUFBLFFBQUF2QixDQUFBLEdBQUEwQixDQUFBLEVBQUE1QixDQUFBLENBQUF1QixHQUFBLEVBQUF2QixDQUFBLENBQUF1RCxpQkFBQSxDQUFBdkQsQ0FBQSxDQUFBdUIsR0FBQSx1QkFBQXZCLENBQUEsQ0FBQWtELE1BQUEsSUFBQWxELENBQUEsQ0FBQXdELE1BQUEsV0FBQXhELENBQUEsQ0FBQXVCLEdBQUEsR0FBQXJCLENBQUEsR0FBQXlCLENBQUEsTUFBQUssQ0FBQSxHQUFBWCxRQUFBLENBQUExQixDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxvQkFBQWdDLENBQUEsQ0FBQVYsSUFBQSxRQUFBcEIsQ0FBQSxHQUFBRixDQUFBLENBQUFpRCxJQUFBLEdBQUFyQixDQUFBLEdBQUFGLENBQUEsRUFBQU0sQ0FBQSxDQUFBVCxHQUFBLEtBQUFNLENBQUEscUJBQUFoRSxLQUFBLEVBQUFtRSxDQUFBLENBQUFULEdBQUEsRUFBQTBCLElBQUEsRUFBQWpELENBQUEsQ0FBQWlELElBQUEsa0JBQUFqQixDQUFBLENBQUFWLElBQUEsS0FBQXBCLENBQUEsR0FBQTBCLENBQUEsRUFBQTVCLENBQUEsQ0FBQWtELE1BQUEsWUFBQWxELENBQUEsQ0FBQXVCLEdBQUEsR0FBQVMsQ0FBQSxDQUFBVCxHQUFBLG1CQUFBNkIsb0JBQUF6RCxDQUFBLEVBQUFFLENBQUEsUUFBQUcsQ0FBQSxHQUFBSCxDQUFBLENBQUFxRCxNQUFBLEVBQUFoRCxDQUFBLEdBQUFQLENBQUEsQ0FBQVksUUFBQSxDQUFBUCxDQUFBLE9BQUFFLENBQUEsS0FBQU4sQ0FBQSxTQUFBQyxDQUFBLENBQUFzRCxRQUFBLHFCQUFBbkQsQ0FBQSxJQUFBTCxDQUFBLENBQUFZLFFBQUEsZUFBQVYsQ0FBQSxDQUFBcUQsTUFBQSxhQUFBckQsQ0FBQSxDQUFBMEIsR0FBQSxHQUFBM0IsQ0FBQSxFQUFBd0QsbUJBQUEsQ0FBQXpELENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLENBQUFxRCxNQUFBLGtCQUFBbEQsQ0FBQSxLQUFBSCxDQUFBLENBQUFxRCxNQUFBLFlBQUFyRCxDQUFBLENBQUEwQixHQUFBLE9BQUFrQyxTQUFBLHVDQUFBekQsQ0FBQSxpQkFBQTZCLENBQUEsTUFBQXpCLENBQUEsR0FBQWlCLFFBQUEsQ0FBQW5CLENBQUEsRUFBQVAsQ0FBQSxDQUFBWSxRQUFBLEVBQUFWLENBQUEsQ0FBQTBCLEdBQUEsbUJBQUFuQixDQUFBLENBQUFrQixJQUFBLFNBQUF6QixDQUFBLENBQUFxRCxNQUFBLFlBQUFyRCxDQUFBLENBQUEwQixHQUFBLEdBQUFuQixDQUFBLENBQUFtQixHQUFBLEVBQUExQixDQUFBLENBQUFzRCxRQUFBLFNBQUF0QixDQUFBLE1BQUF2QixDQUFBLEdBQUFGLENBQUEsQ0FBQW1CLEdBQUEsU0FBQWpCLENBQUEsR0FBQUEsQ0FBQSxDQUFBMkMsSUFBQSxJQUFBcEQsQ0FBQSxDQUFBRixDQUFBLENBQUErRCxVQUFBLElBQUFwRCxDQUFBLENBQUF6QyxLQUFBLEVBQUFnQyxDQUFBLENBQUE4RCxJQUFBLEdBQUFoRSxDQUFBLENBQUFpRSxPQUFBLGVBQUEvRCxDQUFBLENBQUFxRCxNQUFBLEtBQUFyRCxDQUFBLENBQUFxRCxNQUFBLFdBQUFyRCxDQUFBLENBQUEwQixHQUFBLEdBQUEzQixDQUFBLEdBQUFDLENBQUEsQ0FBQXNELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVQsQ0FBQSxDQUFBcUQsTUFBQSxZQUFBckQsQ0FBQSxDQUFBMEIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTVELENBQUEsQ0FBQXNELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFqRSxDQUFBLFFBQUFELENBQUEsS0FBQW1FLE1BQUEsRUFBQWxFLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFvRSxRQUFBLEdBQUFuRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBcUUsVUFBQSxHQUFBcEUsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRSxRQUFBLEdBQUFyRSxDQUFBLFdBQUFzRSxVQUFBLENBQUEzRSxJQUFBLENBQUFJLENBQUEsY0FBQXdFLGNBQUF2RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBd0UsVUFBQSxRQUFBekUsQ0FBQSxDQUFBMkIsSUFBQSxvQkFBQTNCLENBQUEsQ0FBQTRCLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXdFLFVBQUEsR0FBQXpFLENBQUEsYUFBQXdCLFFBQUF2QixDQUFBLFNBQUFzRSxVQUFBLE1BQUFKLE1BQUEsYUFBQWxFLENBQUEsQ0FBQTJDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVEsS0FBQSxpQkFBQWpDLE9BQUF6QyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVcsQ0FBQSxPQUFBVCxDQUFBLFNBQUFBLENBQUEsQ0FBQTJCLElBQUEsQ0FBQTdCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWdFLElBQUEsU0FBQWhFLENBQUEsT0FBQTJFLEtBQUEsQ0FBQTNFLENBQUEsQ0FBQTRFLE1BQUEsU0FBQXJFLENBQUEsT0FBQUUsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBekQsQ0FBQSxHQUFBUCxDQUFBLENBQUE0RSxNQUFBLE9BQUF2RSxDQUFBLENBQUF3QixJQUFBLENBQUE3QixDQUFBLEVBQUFPLENBQUEsVUFBQXlELElBQUEsQ0FBQTlGLEtBQUEsR0FBQThCLENBQUEsQ0FBQU8sQ0FBQSxHQUFBeUQsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsU0FBQUEsSUFBQSxDQUFBOUYsS0FBQSxHQUFBK0IsQ0FBQSxFQUFBK0QsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQXZELENBQUEsQ0FBQXVELElBQUEsR0FBQXZELENBQUEsZ0JBQUFxRCxTQUFBLENBQUFkLE9BQUEsQ0FBQWhELENBQUEsa0NBQUFtQyxpQkFBQSxDQUFBL0IsU0FBQSxHQUFBZ0MsMEJBQUEsRUFBQTdCLENBQUEsQ0FBQW1DLENBQUEsbUJBQUF4RSxLQUFBLEVBQUFrRSwwQkFBQSxFQUFBakIsWUFBQSxTQUFBWixDQUFBLENBQUE2QiwwQkFBQSxtQkFBQWxFLEtBQUEsRUFBQWlFLGlCQUFBLEVBQUFoQixZQUFBLFNBQUFnQixpQkFBQSxDQUFBMEMsV0FBQSxHQUFBNUQsTUFBQSxDQUFBbUIsMEJBQUEsRUFBQXJCLENBQUEsd0JBQUFmLENBQUEsQ0FBQThFLG1CQUFBLGFBQUE3RSxDQUFBLFFBQUFELENBQUEsd0JBQUFDLENBQUEsSUFBQUEsQ0FBQSxDQUFBOEUsV0FBQSxXQUFBL0UsQ0FBQSxLQUFBQSxDQUFBLEtBQUFtQyxpQkFBQSw2QkFBQW5DLENBQUEsQ0FBQTZFLFdBQUEsSUFBQTdFLENBQUEsQ0FBQWdGLElBQUEsT0FBQWhGLENBQUEsQ0FBQWlGLElBQUEsYUFBQWhGLENBQUEsV0FBQUUsTUFBQSxDQUFBK0UsY0FBQSxHQUFBL0UsTUFBQSxDQUFBK0UsY0FBQSxDQUFBakYsQ0FBQSxFQUFBbUMsMEJBQUEsS0FBQW5DLENBQUEsQ0FBQWtGLFNBQUEsR0FBQS9DLDBCQUFBLEVBQUFuQixNQUFBLENBQUFoQixDQUFBLEVBQUFjLENBQUEseUJBQUFkLENBQUEsQ0FBQUcsU0FBQSxHQUFBRCxNQUFBLENBQUFvQixNQUFBLENBQUFtQixDQUFBLEdBQUF6QyxDQUFBLEtBQUFELENBQUEsQ0FBQW9GLEtBQUEsYUFBQW5GLENBQUEsYUFBQWlELE9BQUEsRUFBQWpELENBQUEsT0FBQTBDLHFCQUFBLENBQUFHLGFBQUEsQ0FBQTFDLFNBQUEsR0FBQWEsTUFBQSxDQUFBNkIsYUFBQSxDQUFBMUMsU0FBQSxFQUFBUyxDQUFBLGlDQUFBYixDQUFBLENBQUE4QyxhQUFBLEdBQUFBLGFBQUEsRUFBQTlDLENBQUEsQ0FBQXFGLEtBQUEsYUFBQXBGLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxlQUFBQSxDQUFBLEtBQUFBLENBQUEsR0FBQTZFLE9BQUEsT0FBQTNFLENBQUEsT0FBQW1DLGFBQUEsQ0FBQXpCLElBQUEsQ0FBQXBCLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsR0FBQUUsQ0FBQSxVQUFBVCxDQUFBLENBQUE4RSxtQkFBQSxDQUFBNUUsQ0FBQSxJQUFBUyxDQUFBLEdBQUFBLENBQUEsQ0FBQXFELElBQUEsR0FBQWIsSUFBQSxXQUFBbEQsQ0FBQSxXQUFBQSxDQUFBLENBQUFxRCxJQUFBLEdBQUFyRCxDQUFBLENBQUEvQixLQUFBLEdBQUF5QyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBMUMsQ0FBQSxDQUFBdUYsSUFBQSxhQUFBdEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBTixJQUFBLENBQUFTLENBQUEsVUFBQUgsQ0FBQSxDQUFBc0YsT0FBQSxhQUFBeEIsS0FBQSxXQUFBOUQsQ0FBQSxDQUFBMEUsTUFBQSxTQUFBM0UsQ0FBQSxHQUFBQyxDQUFBLENBQUF1RixHQUFBLFFBQUF4RixDQUFBLElBQUFELENBQUEsU0FBQWdFLElBQUEsQ0FBQTlGLEtBQUEsR0FBQStCLENBQUEsRUFBQStELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUFoRSxDQUFBLENBQUF5QyxNQUFBLEdBQUFBLE1BQUEsRUFBQWpCLE9BQUEsQ0FBQXBCLFNBQUEsS0FBQTJFLFdBQUEsRUFBQXZELE9BQUEsRUFBQWtELEtBQUEsV0FBQUEsTUFBQTFFLENBQUEsYUFBQTBGLElBQUEsV0FBQTFCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUExRCxDQUFBLE9BQUFxRCxJQUFBLFlBQUFFLFFBQUEsY0FBQUQsTUFBQSxnQkFBQTNCLEdBQUEsR0FBQTNCLENBQUEsT0FBQXNFLFVBQUEsQ0FBQTNCLE9BQUEsQ0FBQTRCLGFBQUEsSUFBQXhFLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBeUYsTUFBQSxPQUFBdEYsQ0FBQSxDQUFBd0IsSUFBQSxPQUFBM0IsQ0FBQSxNQUFBeUUsS0FBQSxFQUFBekUsQ0FBQSxDQUFBMEYsS0FBQSxjQUFBMUYsQ0FBQSxJQUFBRCxDQUFBLE1BQUE0RixJQUFBLFdBQUFBLEtBQUEsU0FBQXZDLElBQUEsV0FBQXJELENBQUEsUUFBQXNFLFVBQUEsSUFBQUUsVUFBQSxrQkFBQXhFLENBQUEsQ0FBQTBCLElBQUEsUUFBQTFCLENBQUEsQ0FBQTJCLEdBQUEsY0FBQWtFLElBQUEsS0FBQWxDLGlCQUFBLFdBQUFBLGtCQUFBNUQsQ0FBQSxhQUFBc0QsSUFBQSxRQUFBdEQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBNkYsT0FBQTFGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSSxDQUFBLENBQUFnQixJQUFBLFlBQUFoQixDQUFBLENBQUFpQixHQUFBLEdBQUE1QixDQUFBLEVBQUFFLENBQUEsQ0FBQThELElBQUEsR0FBQTNELENBQUEsRUFBQUUsQ0FBQSxLQUFBTCxDQUFBLENBQUFxRCxNQUFBLFdBQUFyRCxDQUFBLENBQUEwQixHQUFBLEdBQUEzQixDQUFBLEtBQUFNLENBQUEsYUFBQUEsQ0FBQSxRQUFBZ0UsVUFBQSxDQUFBSyxNQUFBLE1BQUFyRSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBOEQsVUFBQSxDQUFBaEUsQ0FBQSxHQUFBSSxDQUFBLEdBQUFGLENBQUEsQ0FBQWdFLFVBQUEsaUJBQUFoRSxDQUFBLENBQUEwRCxNQUFBLFNBQUE0QixNQUFBLGFBQUF0RixDQUFBLENBQUEwRCxNQUFBLFNBQUF1QixJQUFBLFFBQUE3RSxDQUFBLEdBQUFSLENBQUEsQ0FBQXdCLElBQUEsQ0FBQXBCLENBQUEsZUFBQU0sQ0FBQSxHQUFBVixDQUFBLENBQUF3QixJQUFBLENBQUFwQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQTJFLElBQUEsR0FBQWpGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTJCLE1BQUEsQ0FBQXRGLENBQUEsQ0FBQTJELFFBQUEsZ0JBQUFzQixJQUFBLEdBQUFqRixDQUFBLENBQUE0RCxVQUFBLFNBQUEwQixNQUFBLENBQUF0RixDQUFBLENBQUE0RCxVQUFBLGNBQUF4RCxDQUFBLGFBQUE2RSxJQUFBLEdBQUFqRixDQUFBLENBQUEyRCxRQUFBLFNBQUEyQixNQUFBLENBQUF0RixDQUFBLENBQUEyRCxRQUFBLHFCQUFBckQsQ0FBQSxRQUFBc0MsS0FBQSxxREFBQXFDLElBQUEsR0FBQWpGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTBCLE1BQUEsQ0FBQXRGLENBQUEsQ0FBQTRELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBNUQsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQXFFLFVBQUEsQ0FBQUssTUFBQSxNQUFBMUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFLLENBQUEsUUFBQWdFLFVBQUEsQ0FBQXJFLENBQUEsT0FBQUssQ0FBQSxDQUFBNEQsTUFBQSxTQUFBdUIsSUFBQSxJQUFBckYsQ0FBQSxDQUFBd0IsSUFBQSxDQUFBdEIsQ0FBQSx3QkFBQW1GLElBQUEsR0FBQW5GLENBQUEsQ0FBQThELFVBQUEsUUFBQTVELENBQUEsR0FBQUYsQ0FBQSxhQUFBRSxDQUFBLGlCQUFBUixDQUFBLG1CQUFBQSxDQUFBLEtBQUFRLENBQUEsQ0FBQTBELE1BQUEsSUFBQW5FLENBQUEsSUFBQUEsQ0FBQSxJQUFBUyxDQUFBLENBQUE0RCxVQUFBLEtBQUE1RCxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLENBQUFnRSxVQUFBLGNBQUE5RCxDQUFBLENBQUFnQixJQUFBLEdBQUExQixDQUFBLEVBQUFVLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTVCLENBQUEsRUFBQVMsQ0FBQSxTQUFBOEMsTUFBQSxnQkFBQVMsSUFBQSxHQUFBdkQsQ0FBQSxDQUFBNEQsVUFBQSxFQUFBbkMsQ0FBQSxTQUFBOEQsUUFBQSxDQUFBckYsQ0FBQSxNQUFBcUYsUUFBQSxXQUFBQSxTQUFBL0YsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUEwQixJQUFBLFFBQUExQixDQUFBLENBQUEyQixHQUFBLHFCQUFBM0IsQ0FBQSxDQUFBMEIsSUFBQSxtQkFBQTFCLENBQUEsQ0FBQTBCLElBQUEsUUFBQXFDLElBQUEsR0FBQS9ELENBQUEsQ0FBQTJCLEdBQUEsZ0JBQUEzQixDQUFBLENBQUEwQixJQUFBLFNBQUFtRSxJQUFBLFFBQUFsRSxHQUFBLEdBQUEzQixDQUFBLENBQUEyQixHQUFBLE9BQUEyQixNQUFBLGtCQUFBUyxJQUFBLHlCQUFBL0QsQ0FBQSxDQUFBMEIsSUFBQSxJQUFBM0IsQ0FBQSxVQUFBZ0UsSUFBQSxHQUFBaEUsQ0FBQSxHQUFBa0MsQ0FBQSxLQUFBK0QsTUFBQSxXQUFBQSxPQUFBaEcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF1RSxVQUFBLENBQUFLLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFxRSxVQUFBLENBQUF2RSxDQUFBLE9BQUFFLENBQUEsQ0FBQW1FLFVBQUEsS0FBQXBFLENBQUEsY0FBQStGLFFBQUEsQ0FBQTlGLENBQUEsQ0FBQXVFLFVBQUEsRUFBQXZFLENBQUEsQ0FBQW9FLFFBQUEsR0FBQUUsYUFBQSxDQUFBdEUsQ0FBQSxHQUFBZ0MsQ0FBQSx5QkFBQWdFLE9BQUFqRyxDQUFBLGFBQUFELENBQUEsUUFBQXVFLFVBQUEsQ0FBQUssTUFBQSxNQUFBNUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXFFLFVBQUEsQ0FBQXZFLENBQUEsT0FBQUUsQ0FBQSxDQUFBaUUsTUFBQSxLQUFBbEUsQ0FBQSxRQUFBSSxDQUFBLEdBQUFILENBQUEsQ0FBQXVFLFVBQUEsa0JBQUFwRSxDQUFBLENBQUFzQixJQUFBLFFBQUFwQixDQUFBLEdBQUFGLENBQUEsQ0FBQXVCLEdBQUEsRUFBQTRDLGFBQUEsQ0FBQXRFLENBQUEsWUFBQUssQ0FBQSxZQUFBOEMsS0FBQSw4QkFBQThDLGFBQUEsV0FBQUEsY0FBQW5HLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGdCQUFBbUQsUUFBQSxLQUFBNUMsUUFBQSxFQUFBNkIsTUFBQSxDQUFBekMsQ0FBQSxHQUFBK0QsVUFBQSxFQUFBN0QsQ0FBQSxFQUFBK0QsT0FBQSxFQUFBNUQsQ0FBQSxvQkFBQWtELE1BQUEsVUFBQTNCLEdBQUEsR0FBQTNCLENBQUEsR0FBQWlDLENBQUEsT0FBQWxDLENBQUE7QUFBQSxTQUFBb0csbUJBQUEvRixDQUFBLEVBQUFKLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFLLENBQUEsRUFBQUksQ0FBQSxFQUFBRSxDQUFBLGNBQUFKLENBQUEsR0FBQUosQ0FBQSxDQUFBTSxDQUFBLEVBQUFFLENBQUEsR0FBQUUsQ0FBQSxHQUFBTixDQUFBLENBQUF2QyxLQUFBLFdBQUFtQyxDQUFBLGdCQUFBTCxDQUFBLENBQUFLLENBQUEsS0FBQUksQ0FBQSxDQUFBNkMsSUFBQSxHQUFBckQsQ0FBQSxDQUFBYyxDQUFBLElBQUF1RSxPQUFBLENBQUFyQyxPQUFBLENBQUFsQyxDQUFBLEVBQUFvQyxJQUFBLENBQUFqRCxDQUFBLEVBQUFLLENBQUE7QUFBQSxTQUFBOEYsa0JBQUFoRyxDQUFBLDZCQUFBSixDQUFBLFNBQUFELENBQUEsR0FBQWxDLFNBQUEsYUFBQXdILE9BQUEsV0FBQXBGLENBQUEsRUFBQUssQ0FBQSxRQUFBSSxDQUFBLEdBQUFOLENBQUEsQ0FBQWlHLEtBQUEsQ0FBQXJHLENBQUEsRUFBQUQsQ0FBQSxZQUFBdUcsTUFBQWxHLENBQUEsSUFBQStGLGtCQUFBLENBQUF6RixDQUFBLEVBQUFULENBQUEsRUFBQUssQ0FBQSxFQUFBZ0csS0FBQSxFQUFBQyxNQUFBLFVBQUFuRyxDQUFBLGNBQUFtRyxPQUFBbkcsQ0FBQSxJQUFBK0Ysa0JBQUEsQ0FBQXpGLENBQUEsRUFBQVQsQ0FBQSxFQUFBSyxDQUFBLEVBQUFnRyxLQUFBLEVBQUFDLE1BQUEsV0FBQW5HLENBQUEsS0FBQWtHLEtBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ1o7QUFDc0I7QUFFaEQsaUVBQWU7RUFDWDFILEtBQUssRUFBRTtJQUNIOEgsSUFBSSxFQUFFO01BQ0ZoRixJQUFJLEVBQUV4QixNQUFNO01BQ1p5RyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBQ0RDLFdBQVcsRUFBRTtNQUNUbEYsSUFBSSxFQUFFeEI7SUFDVjtFQUNKLENBQUM7RUFDRHJCLElBQUksV0FBQUEsS0FBQSxFQUFHO0lBQ0gsT0FBTztNQUNIZ0ksYUFBYSxFQUFFLENBQUM7TUFDaEJDLFFBQVEsRUFBRSxLQUFLO01BQ2ZDLE1BQU0sRUFBRTtRQUNKM0gsSUFBSSxFQUFFLElBQUksQ0FBQ3dILFdBQVc7UUFDdEJJLE1BQU0sRUFBRSxJQUFJO1FBQ1pDLEtBQUssRUFBRSxDQUFDO1FBQ1JDLEtBQUssRUFBRTtNQUNYLENBQUM7TUFDREMsU0FBUyxFQUFFLElBQUk7TUFDZnJJLE1BQU0sRUFBRSxJQUFJO01BQ1pzSSxLQUFLLEVBQUVYLGdEQUFXQTtJQUN0QixDQUFDO0VBQ0wsQ0FBQztFQUNEeEgsT0FBTyxXQUFBQSxRQUFBLEVBQUc7SUFBQSxJQUFBQyxLQUFBO0lBQ04sSUFBSSxDQUFDSixNQUFLLEdBQUlILHFEQUFFLENBQUMsdUJBQXVCLENBQUM7SUFFekMsSUFBSSxDQUFDRyxNQUFNLENBQUNLLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDeUgsV0FBVyxDQUFDbkgsUUFBUSxDQUFDO0lBQ3hELElBQUksQ0FBQ1gsTUFBTSxDQUFDTyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUNELElBQUk7TUFBQSxPQUFLRSxPQUFPLENBQUNDLEdBQUcsVUFBQUMsTUFBQSxDQUFVSixJQUFJLENBQUNLLFFBQVEsWUFBUyxDQUFDO0lBQUEsRUFBQztJQUVoRixJQUFJLENBQUNYLE1BQU0sQ0FBQ08sRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFDZ0ksS0FBSyxFQUFLO01BQ3ZDbkksS0FBSSxDQUFDMkgsYUFBWSxHQUFJUSxLQUFLO01BQzFCbkksS0FBSSxDQUFDaUksU0FBUSxHQUFJLElBQUk7TUFDckJqSSxLQUFJLENBQUNvSSxZQUFZLENBQUMsQ0FBQztNQUVuQkMsWUFBWSxDQUFDQyxPQUFPLENBQUMsZUFBZSxFQUFFSCxLQUFLLENBQUM7TUFDNUNFLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGFBQWEsRUFBRXRJLEtBQUksQ0FBQzZILE1BQU0sQ0FBQ0UsS0FBSyxDQUFDO01BQ3RETSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxXQUFXLEVBQUV0SSxLQUFJLENBQUNpSSxTQUFTLENBQUM7SUFDckQsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDckksTUFBTSxDQUFDTyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQUN5SCxRQUFRLEVBQUs7TUFDckM1SCxLQUFJLENBQUM0SCxRQUFPLEdBQUlBLFFBQVE7TUFDeEI1SCxLQUFJLENBQUNvSSxZQUFZLENBQUMsQ0FBQztNQUVuQkMsWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBVSxFQUFFVixRQUFRLENBQUM7TUFDMUNTLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGFBQWEsRUFBRXRJLEtBQUksQ0FBQzZILE1BQU0sQ0FBQ0UsS0FBSyxDQUFDO0lBQzFELENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ25JLE1BQU0sQ0FBQ08sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFNO01BQy9CSCxLQUFJLENBQUN1SSxjQUFjLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUM7RUFDTixDQUFDO0VBQ0RDLE9BQU8sV0FBQUEsUUFBQSxFQUFHO0lBQUEsSUFBQUMsTUFBQTtJQUNOO0lBQ0EsSUFBTUMsbUJBQWtCLEdBQUlMLFlBQVksQ0FBQ00sT0FBTyxDQUFDLGVBQWUsQ0FBQztJQUNqRSxJQUFNQyxjQUFhLEdBQUlQLFlBQVksQ0FBQ00sT0FBTyxDQUFDLFVBQVUsQ0FBQztJQUN2RCxJQUFNRSxXQUFVLEdBQUlSLFlBQVksQ0FBQ00sT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN2RCxJQUFNRyxlQUFjLEdBQUlULFlBQVksQ0FBQ00sT0FBTyxDQUFDLFdBQVcsQ0FBQztJQUV6RCxJQUFJRCxtQkFBa0IsS0FBTSxJQUFJLEVBQUU7TUFDOUIsSUFBSSxDQUFDZixhQUFZLEdBQUlvQixRQUFRLENBQUNMLG1CQUFtQixDQUFDO0lBQ3REO0lBRUEsSUFBSUUsY0FBYSxLQUFNLElBQUksRUFBRTtNQUN6QixJQUFJLENBQUNoQixRQUFPLEdBQUlvQixJQUFJLENBQUNDLEtBQUssQ0FBQ0wsY0FBYyxDQUFDO0lBQzlDO0lBRUEsSUFBSUMsV0FBVSxLQUFNLElBQUksRUFBRTtNQUN0QixJQUFJLENBQUNoQixNQUFNLENBQUNFLEtBQUksR0FBSWdCLFFBQVEsQ0FBQ0YsV0FBVyxDQUFDO0lBQzdDO0lBRUEsSUFBSUMsZUFBYyxLQUFNLElBQUksRUFBRTtNQUMxQixJQUFJLENBQUNiLFNBQVEsR0FBSWUsSUFBSSxDQUFDQyxLQUFLLENBQUNILGVBQWUsQ0FBQztJQUNoRDtJQUVBLElBQUksQ0FBQ3BCLFdBQVcsQ0FBQ3dCLEtBQUssQ0FBQ3pGLE9BQU8sQ0FBQyxVQUFDMEYsSUFBSSxFQUFLO01BQ3JDLElBQUlBLElBQUcsS0FBTSxZQUFZLEVBQUU7UUFDdkJWLE1BQUksQ0FBQ1osTUFBTSxDQUFDRyxLQUFJLEdBQUksSUFBSTtNQUM1QjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFDRHRILE9BQU8sRUFBRTtJQUNDMEksWUFBWSxXQUFBQSxhQUFBLEVBQUc7TUFBQSxJQUFBQyxNQUFBO01BQUEsT0FBQW5DLGlCQUFBLGVBQUF0RyxtQkFBQSxHQUFBa0YsSUFBQSxVQUFBd0QsUUFBQTtRQUFBLElBQUFDLFFBQUE7UUFBQSxPQUFBM0ksbUJBQUEsR0FBQXNCLElBQUEsVUFBQXNILFNBQUFDLFFBQUE7VUFBQSxrQkFBQUEsUUFBQSxDQUFBbEQsSUFBQSxHQUFBa0QsUUFBQSxDQUFBNUUsSUFBQTtZQUFBO2NBQUEsTUFDYndFLE1BQUksQ0FBQzFCLGFBQVksR0FBSTBCLE1BQUksQ0FBQzdCLElBQUksQ0FBQ2tDLFNBQVMsQ0FBQ2pFLE1BQUssR0FBSSxLQUFLNEQsTUFBSSxDQUFDeEIsTUFBTSxDQUFDQyxNQUFLLEtBQU0sSUFBSTtnQkFBQTJCLFFBQUEsQ0FBQTVFLElBQUE7Z0JBQUE7Y0FBQTtjQUM5RTBFLFFBQU8sR0FBSSxJQUFJO2NBQUFFLFFBQUEsQ0FBQTVFLElBQUE7Y0FBQSxPQUNid0UsTUFBSSxDQUFDTSxRQUFRLENBQUMsQ0FBQyxDQUFDM0YsSUFBSSxDQUFDLFVBQUM0RixLQUFLLEVBQUs7Z0JBQ2xDQSxLQUFLLENBQUNuRyxPQUFPLENBQUMsVUFBQ3ZELElBQUksRUFBSztrQkFDcEIsSUFBSSxDQUFDQSxJQUFJLENBQUM0SCxNQUFNLEVBQUU7b0JBQ2QxSCxPQUFPLENBQUNDLEdBQUcsSUFBQUMsTUFBQSxDQUFJSixJQUFJLENBQUNLLFFBQVEsa0NBQStCLENBQUM7b0JBQzVEZ0osUUFBTyxHQUFJLEtBQUs7a0JBQ3BCO2dCQUNKLENBQUMsQ0FBQztjQUNOLENBQUMsQ0FBQztZQUFBO2NBRUYsSUFBSUEsUUFBUSxFQUFFO2dCQUNWRixNQUFJLENBQUN6SixNQUFNLENBQUNLLElBQUksQ0FBQyxlQUFlLEVBQUVvSixNQUFJLENBQUMxQixhQUFhLENBQUM7Y0FDekQ7Y0FBQThCLFFBQUEsQ0FBQTVFLElBQUE7Y0FBQTtZQUFBO2NBRUF3RSxNQUFJLENBQUN6SixNQUFNLENBQUNLLElBQUksQ0FBQyxVQUFVLEVBQUVvSixNQUFJLENBQUN6QixRQUFRLENBQUM7WUFBQTtZQUFBO2NBQUEsT0FBQTZCLFFBQUEsQ0FBQS9DLElBQUE7VUFBQTtRQUFBLEdBQUE0QyxPQUFBO01BQUE7SUFFbkQsQ0FBQztJQUNEbEIsWUFBWSxXQUFBQSxhQUFBLEVBQUc7TUFDWCxJQUFJLElBQUksQ0FBQ1AsTUFBTSxDQUFDQyxNQUFNLENBQUMrQixPQUFNLEtBQU0sSUFBSSxFQUFFO1FBQ3JDLElBQUksQ0FBQ2hDLE1BQU0sQ0FBQ0UsS0FBSyxFQUFFO01BQ3ZCO01BQ0EsSUFBSSxDQUFDRixNQUFNLENBQUNDLE1BQUssR0FBSSxJQUFJO0lBQzdCLENBQUM7SUFDRFMsY0FBYyxXQUFBQSxlQUFBLEVBQUc7TUFDYkYsWUFBWSxDQUFDeUIsS0FBSyxDQUFDLENBQUM7TUFDcEIsSUFBSSxDQUFDbEMsUUFBTyxHQUFJLEtBQUs7TUFDckIsSUFBSSxDQUFDRCxhQUFZLEdBQUksQ0FBQztNQUN0QixJQUFJLENBQUNFLE1BQU0sQ0FBQ0UsS0FBSSxHQUFJLENBQUM7TUFDckIsSUFBSSxDQUFDRSxTQUFRLEdBQUksSUFBSTtJQUN6QixDQUFDO0lBQ0Q4QixjQUFjLFdBQUFBLGVBQUNqQyxNQUFNLEVBQUU7TUFDbkIsSUFBSSxDQUFDRCxNQUFNLENBQUNDLE1BQUssR0FBSUEsTUFBTTtNQUMzQjFILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ3dILE1BQU0sQ0FBQ0MsTUFBTSxDQUFDK0IsT0FBTyxDQUFDO01BQ3ZDLElBQUksQ0FBQzVCLFNBQVEsR0FBSSxLQUFLO01BQ3RCSSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDTCxTQUFTLENBQUM7TUFDakQsSUFBSSxDQUFDckksTUFBTSxDQUFDSyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUN5SCxXQUFXLENBQUNuSCxRQUFRLEVBQUUsSUFBSSxDQUFDc0gsTUFBTSxDQUFDQyxNQUFNLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBQ0RrQyxjQUFjLFdBQUFBLGVBQUM3QixLQUFLLEVBQUU7TUFDbEI7TUFDQSxRQUFRQSxLQUFJLEdBQUksQ0FBQztRQUNiLEtBQUssQ0FBQztVQUNGLE9BQU8sbUJBQW1CO1FBQzlCLEtBQUssQ0FBQztVQUNGLE9BQU8sb0JBQW9CO1FBQy9CLEtBQUssQ0FBQztVQUNGLE9BQU8sc0JBQXNCO1FBQ2pDLEtBQUssQ0FBQztVQUNGLE9BQU8scUJBQXFCO1FBQ2hDO1VBQ0ksT0FBTyxFQUFFO1FBQUU7TUFDbkI7SUFDSixDQUFDO0lBQ0t3QixRQUFRLFdBQUFBLFNBQUEsRUFBRztNQUFBLE9BQUF6QyxpQkFBQSxlQUFBdEcsbUJBQUEsR0FBQWtGLElBQUEsVUFBQW1FLFNBQUE7UUFBQSxJQUFBQyxRQUFBO1FBQUEsT0FBQXRKLG1CQUFBLEdBQUFzQixJQUFBLFVBQUFpSSxVQUFBQyxTQUFBO1VBQUEsa0JBQUFBLFNBQUEsQ0FBQTdELElBQUEsR0FBQTZELFNBQUEsQ0FBQXZGLElBQUE7WUFBQTtjQUFBdUYsU0FBQSxDQUFBN0QsSUFBQTtjQUFBNkQsU0FBQSxDQUFBdkYsSUFBQTtjQUFBLE9BRWN5Qyw4Q0FBSyxDQUFDK0MsR0FBRyxDQUFDLDZCQUE2QixDQUFDO1lBQUE7Y0FBekRILFFBQU8sR0FBQUUsU0FBQSxDQUFBN0YsSUFBQTtjQUFBLE9BQUE2RixTQUFBLENBQUExRixNQUFBLFdBQ053RixRQUFRLENBQUN2SyxJQUFJO1lBQUE7Y0FBQXlLLFNBQUEsQ0FBQTdELElBQUE7Y0FBQTZELFNBQUEsQ0FBQUUsRUFBQSxHQUFBRixTQUFBO2NBRXBCaEssT0FBTyxDQUFDbUssS0FBSyxDQUFDLHdDQUF3QyxFQUFBSCxTQUFBLENBQUFFLEVBQU8sQ0FBQztjQUFBLE9BQUFGLFNBQUEsQ0FBQTFGLE1BQUEsV0FDdkQsRUFBRTtZQUFBO1lBQUE7Y0FBQSxPQUFBMEYsU0FBQSxDQUFBMUQsSUFBQTtVQUFBO1FBQUEsR0FBQXVELFFBQUE7TUFBQTtJQUVqQixDQUFDO0lBQ0RPLHFCQUFxQixXQUFBQSxzQkFBQSxFQUFHO01BQ3BCLE9BQU9DLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDL0MsYUFBYSxHQUFDLElBQUksSUFBSSxDQUFDSCxJQUFJLENBQUNrQyxTQUFTLENBQUNqRSxNQUFNLElBQUksR0FBRyxDQUFDO0lBRWhGO0VBQ0o7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkY1TU9rRix1REFBQSxDQUF1QixZQUFuQixnQkFBYzs7MkRBRHRCQyx1REFBQSxDQU1NLGNBTEZDLFVBQXVCLEVBQ3ZCRix1REFBQSxDQUVLLG9FQUREQyx1REFBQSxDQUF3RUUseUNBQUEsUUFOcEZDLCtDQUFBLENBTTJDQyxLQUFBLENBQUFsTCxRQUFRLEVBTm5ELFVBTXdCRCxPQUFPLEVBQUVzSSxLQUFLOzZEQUExQnlDLHVEQUFBLENBQXdFO01BQTlCOUwsR0FBRyxFQUFFcUo7SUFBSyxHQUFBOEMsb0RBQUEsQ0FBS3BMLE9BQU87d0ZBRXBFOEssdURBQUEsQ0FBaUY7SUFSekYsdUJBQUFPLE1BQUEsUUFBQUEsTUFBQSxnQkFBQUMsTUFBQTtNQUFBLE9BUXdCSCxLQUFBLENBQUFuTCxPQUFPLEdBQUFzTCxNQUFBO0lBQUE7SUFBR0MsT0FBSyxFQUFBRixNQUFBLFFBQUFBLE1BQUEsTUFSdkNHLDZDQUFBO01BQUEsT0FRK0NDLFFBQUEsQ0FBQTNLLFdBQUEsSUFBQTJLLFFBQUEsQ0FBQTNLLFdBQUEsQ0FBQXdHLEtBQUEsQ0FBQW1FLFFBQUEsRUFBQTNNLFNBQUEsQ0FBVztJQUFBO0lBQUU0TSxXQUFXLEVBQUM7aUdBQWhEUCxLQUFBLENBQUFuTCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJER1AzQitLLHVEQUFBLENBQTRCLGFBQXZCLFFBQU0sR0FBQUssb0RBQUEsQ0FBR08sTUFBQSxDQUFBM0YsSUFBSSxJQUFHLEdBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkZDbEI4RSx1REFBQSxDQUEwQixZQUF0QixtQkFBaUI7aUJBRjdCOzsyREFBQUMsdURBQUEsQ0FBQUUseUNBQUEsU0FDSUgsdURBQUEsQ0FPTSxjQU5GRSxVQUEwQixFQUMxQkYsdURBQUEsQ0FJSyxvRUFIREMsdURBQUEsQ0FFS0UseUNBQUEsUUFOakJDLCtDQUFBLENBSStCUyxNQUFBLENBQUFDLE9BQU8sRUFKdEMsVUFJdUJqRSxJQUFJOzZEQUFmb0QsdURBQUEsQ0FFSztNQUZ3QjlMLEdBQUcsRUFBRTBJLElBQUksQ0FBQ2tFO1FBQ25DZix1REFBQSxDQUF1QztNQUFuQ2dCLElBQUksRUFBRW5FLElBQUksQ0FBQ29FOzREQUFRcEUsSUFBSSxDQUFDcUUsS0FBSyx3QkFMakRDLFVBQUE7c0NBQUFDLG9EQUFBLENBUVUsR0FDTixHQUFBZCxvREFBQSxDQUFFTyxNQUFBLENBQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUNSSixTQUFNO0FBQXNEOztFQUN4RCxTQUFNO0FBQWE7O0VBQ2YsU0FBTTtBQUE4Qzs7RUFDakQsU0FBTTtBQUFVOztFQUNoQixTQUFNO0FBQVU7O0VBRW5CLFNBQU07QUFBZTtpQkFQdEM7aUJBQUE7O0VBQUEzTSxHQUFBO0VBb0J5RixTQUFNOzs7RUFDOUUsU0FBTTtBQUF5Qzs7RUFDM0MsU0FBTTtBQUFrRTs7RUFDbkUsU0FBTTtBQUFNOztFQUVsQixTQUFNO0FBQUs7O0VBRWQsU0FBTTtBQUFnQztrQkEzQnZEOzsyREFDSThMLHVEQUFBLENBZ0RNLE9BaEROQyxVQWdETSxHQS9DRkYsdURBQUEsQ0FpQk0sT0FqQk5tQixVQWlCTSxHQWhCRm5CLHVEQUFBLENBR00sT0FITnFCLFVBR00sR0FGRnJCLHVEQUFBLENBQXdDLE1BQXhDc0IsVUFBd0MsRUFBQWhCLG9EQUFBLENBQWpCTyxNQUFBLENBQUFoRSxJQUFJLENBQUNxRSxLQUFLLGtCQUNqQ2xCLHVEQUFBLENBQThFLE1BQTlFdUIsVUFBOEUsRUFBQWpCLG9EQUFBLENBQXZERCxLQUFBLENBQUFyRCxhQUFhLFFBQU0sTUFBSSxHQUFBc0Qsb0RBQUEsQ0FBR08sTUFBQSxDQUFBaEUsSUFBSSxDQUFDa0MsU0FBUyxDQUFDakUsTUFBTSxvQkFFMUVrRix1REFBQSxDQVVNLE9BVk53QixVQVVNLEdBVEZ4Qix1REFBQSxDQVFNO0lBUkQsU0FBTSxjQUFjO0lBQ3BCeEIsSUFBSSxFQUFDLGFBQWE7SUFDakIsZUFBYSxFQUFFbUMsUUFBQSxDQUFBZCxxQkFBcUI7SUFDckMsZUFBYSxFQUFDLEdBQUc7SUFDakIsZUFBYSxFQUFDLEtBQUs7SUFDbEI0QixLQUFLLEVBYjNCQyxtREFBQTtNQUFBQyxLQUFBLEVBYXNDaEIsUUFBQSxDQUFBZCxxQkFBcUI7SUFBQTswREFFcENjLFFBQUEsQ0FBQWQscUJBQXFCLE1BQUssSUFDakMsK0JBaEJoQitCLFVBQUEsS0FrQlk1Qix1REFBQSxDQUFrRDtJQUE1QzZCLEdBQUcsRUFBRXhCLEtBQUEsQ0FBQTlDLEtBQUs7SUFBRXVFLEdBQUcsRUFBQyxFQUFFO0lBQUMsU0FBTTswQkFsQjNDQyxVQUFBLE1Bb0JvQjFCLEtBQUEsQ0FBQXBELFFBQVEsSUFBSTRELE1BQUEsQ0FBQWhFLElBQUksQ0FBQ2tDLFNBQVMsSUFBSXNCLEtBQUEsQ0FBQXJELGFBQWEsR0FBRzZELE1BQUEsQ0FBQWhFLElBQUksQ0FBQ2tDLFNBQVMsQ0FBQ2pFLE1BQU0sc0RBQS9FbUYsdURBQUEsQ0E0Qk0sT0E1Qk4rQixVQTRCTSxHQTNCRmhDLHVEQUFBLENBS00sT0FMTmlDLFdBS00sR0FKRmpDLHVEQUFBLENBRU0sT0FGTmtDLFdBRU0sR0FERmxDLHVEQUFBLENBQStDLFFBQS9DbUMsV0FBK0MsRUFBQTdCLG9EQUFBLENBQTFCRCxLQUFBLENBQUFyRCxhQUFhLHdCQUV0Q2dELHVEQUFBLENBQWlFLE1BQWpFb0MsV0FBaUUsRUFBQTlCLG9EQUFBLENBQTlDTyxNQUFBLENBQUFoRSxJQUFJLENBQUNrQyxTQUFTLENBQUNzQixLQUFBLENBQUFyRCxhQUFhLEVBQUVxRixRQUFRLG9CQUU3RHJDLHVEQUFBLENBWU0sT0FaTnNDLFdBWU0sMERBWEZyQyx1REFBQSxDQVVTRSx5Q0FBQSxRQXRDekJDLCtDQUFBLENBNkI4Q1MsTUFBQSxDQUFBaEUsSUFBSSxDQUFDa0MsU0FBUyxDQUFDc0IsS0FBQSxDQUFBckQsYUFBYSxFQUFFdUYsT0FBTyxFQTdCbkYsVUE2QjRCcEYsTUFBTSxFQUFFSyxLQUFLOzZEQUR6QnlDLHVEQUFBLENBVVM7TUFSSjlMLEdBQUcsRUFBRWdKLE1BQU0sQ0FBQzRELEVBQUU7TUFDZHlCLFFBQVEsR0FBR25DLEtBQUEsQ0FBQS9DLFNBQVM7TUFDckIsU0FoQ3BCbUYsbURBQUEsRUFnQzBCLGFBQWEsRUFDWDlCLFFBQUEsQ0FBQXRCLGNBQWMsQ0FBQzdCLEtBQUs7TUFDM0JrRixPQUFLLFdBQUFBLFFBQUFsQyxNQUFBO1FBQUEsT0FBRUcsUUFBQSxDQUFBdkIsY0FBYyxDQUFDakMsTUFBTTtNQUFBOzREQUcxQndGLE1BQU0sQ0FBQ0MsWUFBWSxNQUFNcEYsS0FBSyxLQUFJLEdBQUMsR0FBQThDLG9EQUFBLENBQUduRCxNQUFNLENBQUNBLE1BQU0sZ0NBckMxRTBGLFdBQUE7b0NBd0NBQyx1REFBQSxrQkFBcUIsRUFDckJBLHVEQUFBLHlFQUEwRSxFQUMxRUEsdURBQUEsMENBQTJDLEVBQzNDQSx1REFBQSxrREFBcUQsRUFDckRBLHVEQUFBLHFCQUF3QixFQUN4QkEsdURBQUEsd0hBQXFILEVBQ3JIQSx1REFBQSxrSUFBK0gsRUFDL0hBLHVEQUFBLHNCQUF5QixNQS9DekJBLHVEQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFQWdEO0FBQ3ZCO0FBQUEsSUFFbkJDLGdCQUFnQiwwQkFBQWxQLFdBQUE7RUFBQSxTQUFBa1AsaUJBQUE7SUFBQWpQLGVBQUEsT0FBQWlQLGdCQUFBO0lBQUEsT0FBQWhQLFVBQUEsT0FBQWdQLGdCQUFBLEVBQUEvTyxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBOE8sZ0JBQUEsRUFBQWxQLFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUE2TyxnQkFBQTtBQUFBLEVBQVNwUCwyREFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIRTtBQUUzQyxTQUFTYywrQkFBK0JBLENBQUNFLE9BQU8sRUFBRTtFQUM5QyxJQUFNc08sY0FBYyxHQUFHdE8sT0FBTyxDQUFDOEcsSUFBSSxDQUFDLENBQUMsQ0FBQ3lILE1BQU0sQ0FBQyxVQUFDQyxHQUFHLEVBQUVoUCxHQUFHLEVBQUs7SUFDdkRnUCxHQUFHLENBQUNoUCxHQUFHLENBQUMsR0FBR2lQLFNBQVM7SUFDcEIsT0FBT0QsR0FBRztFQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztFQUNOLFNBQVNFLGFBQWFBLENBQUNuSSxJQUFJLEVBQUU7SUFDekIsSUFBTW9JLGFBQWEsUUFBQTNOLE1BQUEsQ0FBUXVGLElBQUksU0FBTTtJQUNyQyxJQUFJLEVBQUVvSSxhQUFhLElBQUlMLGNBQWMsQ0FBQyxFQUFFO01BQ3BDLElBQU1NLGNBQWMsR0FBR2xOLE1BQU0sQ0FBQ29GLElBQUksQ0FBQ3dILGNBQWMsQ0FBQyxDQUFDTyxHQUFHLENBQUMsVUFBQ3JQLEdBQUc7UUFBQSxPQUFLQSxHQUFHLENBQUNzUCxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDQSxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztNQUFBLEVBQUM7TUFDMUcsTUFBTSxJQUFJbEssS0FBSyxxQkFBQTVELE1BQUEsQ0FBb0J1RixJQUFJLDBDQUFBdkYsTUFBQSxDQUFzQzROLGNBQWMsQ0FBQ0csSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUM7SUFDN0c7SUFDQSxJQUFJLE9BQU9ULGNBQWMsQ0FBQ0ssYUFBYSxDQUFDLEtBQUssV0FBVyxFQUFFO01BQ3RELElBQU1LLE1BQU0sR0FBR2hQLE9BQU8sQ0FBQzJPLGFBQWEsQ0FBQztNQUNyQyxJQUFJSyxNQUFNLFdBQVEsRUFBRTtRQUNoQlYsY0FBYyxDQUFDSyxhQUFhLENBQUMsR0FBR0ssTUFBTSxXQUFRO01BQ2xELENBQUMsTUFDSSxJQUFJQSxNQUFNLFlBQVluSSxPQUFPLEVBQUU7UUFDaEN5SCxjQUFjLENBQUNLLGFBQWEsQ0FBQyxHQUFHTiwwREFBb0IsQ0FBQztVQUFBLE9BQU0sSUFBSXhILE9BQU8sQ0FBQyxVQUFDckMsT0FBTyxFQUFFeUssTUFBTSxFQUFLO1lBQ3hGRCxNQUFNLENBQ0R0SyxJQUFJLENBQUMsVUFBQ3dLLGNBQWMsRUFBSztjQUMxQixJQUFJQSxjQUFjLFdBQVEsRUFBRTtnQkFDeEIxSyxPQUFPLENBQUMwSyxjQUFjLFdBQVEsQ0FBQztjQUNuQyxDQUFDLE1BQ0k7Z0JBQ0RELE1BQU0sQ0FBQyxJQUFJckssS0FBSyx5REFBQTVELE1BQUEsQ0FBd0R1RixJQUFJLFFBQUksQ0FBQyxDQUFDO2NBQ3RGO1lBQ0osQ0FBQyxDQUFDLFNBQ1EsQ0FBQzBJLE1BQU0sQ0FBQztVQUN0QixDQUFDLENBQUM7UUFBQSxFQUFDO01BQ1AsQ0FBQyxNQUNJO1FBQ0QsTUFBTSxJQUFJckssS0FBSyxxQkFBQTVELE1BQUEsQ0FBb0J1RixJQUFJLHVCQUFtQixDQUFDO01BQy9EO0lBQ0o7SUFDQSxPQUFPK0gsY0FBYyxDQUFDSyxhQUFhLENBQUM7RUFDeEM7RUFDQVEsTUFBTSxDQUFDQyxtQkFBbUIsR0FBRyxVQUFDN0ksSUFBSSxFQUFLO0lBQ25DLE9BQU9tSSxhQUFhLENBQUNuSSxJQUFJLENBQUM7RUFDOUIsQ0FBQztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNnRDtBQUNoQjtBQUFBLElBRTFCK0ksU0FBUywwQkFBQXBRLFdBQUE7RUFBQSxTQUFBb1EsVUFBQTtJQUFBblEsZUFBQSxPQUFBbVEsU0FBQTtJQUFBLE9BQUFsUSxVQUFBLE9BQUFrUSxTQUFBLEVBQUFqUSxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBZ1EsU0FBQSxFQUFBcFEsV0FBQTtFQUFBLE9BQUFLLFlBQUEsQ0FBQStQLFNBQUE7SUFBQTlQLEdBQUE7SUFBQUMsS0FBQSxFQUNYLFNBQUFDLFFBQUEsRUFBVTtNQUNOLElBQUk2UCxFQUFFO01BQ04sSUFBSSxDQUFDblAsS0FBSyxHQUFHLENBQUNtUCxFQUFFLEdBQUcsSUFBSSxDQUFDQyxVQUFVLE1BQU0sSUFBSSxJQUFJRCxFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUdBLEVBQUUsR0FBRyxJQUFJO01BQ3pFLElBQUksQ0FBQ0UsYUFBYSxDQUFDLFNBQVMsRUFBRTtRQUFFQyxhQUFhLEVBQUUsSUFBSSxDQUFDQyxjQUFjO1FBQUV2UCxLQUFLLEVBQUUsSUFBSSxDQUFDQTtNQUFNLENBQUMsQ0FBQztNQUN4RixJQUFNd1AsU0FBUyxHQUFHVCxNQUFNLENBQUNDLG1CQUFtQixDQUFDLElBQUksQ0FBQ08sY0FBYyxDQUFDO01BQ2pFLElBQUksQ0FBQ3pQLEdBQUcsR0FBR21QLCtDQUFTLENBQUNPLFNBQVMsRUFBRSxJQUFJLENBQUN4UCxLQUFLLENBQUM7TUFDM0MsSUFBSSxJQUFJLENBQUNULE9BQU8sQ0FBQ2tRLFdBQVcsS0FBS3BCLFNBQVMsRUFBRTtRQUN4QyxJQUFJLENBQUM5TyxPQUFPLENBQUNrUSxXQUFXLENBQUNDLE9BQU8sQ0FBQyxDQUFDO01BQ3RDO01BQ0EsSUFBSSxDQUFDTCxhQUFhLENBQUMsY0FBYyxFQUFFO1FBQy9CQyxhQUFhLEVBQUUsSUFBSSxDQUFDQyxjQUFjO1FBQ2xDQyxTQUFTLEVBQUVBLFNBQVM7UUFDcEJ4UCxLQUFLLEVBQUUsSUFBSSxDQUFDQSxLQUFLO1FBQ2pCRixHQUFHLEVBQUUsSUFBSSxDQUFDQTtNQUNkLENBQUMsQ0FBQztNQUNGLElBQUksQ0FBQ0EsR0FBRyxDQUFDNlAsS0FBSyxDQUFDLElBQUksQ0FBQ3BRLE9BQU8sQ0FBQztNQUM1QixJQUFJLENBQUM4UCxhQUFhLENBQUMsT0FBTyxFQUFFO1FBQ3hCQyxhQUFhLEVBQUUsSUFBSSxDQUFDQyxjQUFjO1FBQ2xDQyxTQUFTLEVBQUVBLFNBQVM7UUFDcEJ4UCxLQUFLLEVBQUUsSUFBSSxDQUFDQTtNQUNoQixDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFaLEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUF1USxXQUFBLEVBQWE7TUFDVCxJQUFJLENBQUM5UCxHQUFHLENBQUM0UCxPQUFPLENBQUMsQ0FBQztNQUNsQixJQUFJLENBQUNMLGFBQWEsQ0FBQyxTQUFTLEVBQUU7UUFDMUJDLGFBQWEsRUFBRSxJQUFJLENBQUNDLGNBQWM7UUFDbEN2UCxLQUFLLEVBQUUsSUFBSSxDQUFDQTtNQUNoQixDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFaLEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUFnUSxjQUFjbEosSUFBSSxFQUFFMEosT0FBTyxFQUFFO01BQ3pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDM0osSUFBSSxFQUFFO1FBQUU0SixNQUFNLEVBQUVGLE9BQU87UUFBRUcsTUFBTSxFQUFFO01BQU0sQ0FBQyxDQUFDO0lBQzNEO0VBQUM7QUFBQSxFQWhDbUJwUiwyREFBVTtBQWtDbENzUSxTQUFTLENBQUN0TCxNQUFNLEdBQUc7RUFDZjRMLFNBQVMsRUFBRTVCLE1BQU07RUFDakI1TixLQUFLLEVBQUVzQjtBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN4Q0Q7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FpRTtBQUNWO0FBQ0w7O0FBRWxELENBQW1GO0FBQ25GLGlDQUFpQyx5RkFBZSxDQUFDLHlFQUFNLGFBQWEsMkVBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJtRDtBQUNDO0FBQ0w7O0FBRTlELENBQW1GO0FBQ25GLGlDQUFpQyx5RkFBZSxDQUFDLHFGQUFNLGFBQWEsNEVBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEIwRDtBQUNWO0FBQ0w7O0FBRTFELENBQW1GO0FBQ25GLGlDQUFpQyx5RkFBZSxDQUFDLGlGQUFNLGFBQWEsbUZBQU07QUFDMUU7QUFDQSxJQUFJLEtBQVUsRUFBRSxFQVlmOzs7QUFHRCxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCbUU7QUFDdEI7QUFDTDs7QUFFdkQsQ0FBZ0Y7O0FBRUc7QUFDbkYsaUNBQWlDLHlGQUFlLENBQUMsOEVBQU0sYUFBYSw0RkFBTTtBQUMxRTtBQUNBLElBQUksS0FBVSxFQUFFLEVBWWY7OztBQUdELGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEIwTDs7Ozs7Ozs7Ozs7Ozs7OztBQ0FZOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUo7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBSCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvIHN5bmMgXFwudnVlJCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9DaGF0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotY2hvb3Nlci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9RdWl6LWdhbWUudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvSGVsbG8udnVlIiwid2VicGFjazovLy8uL3ZlbmRvci9zeW1mb255L3V4LXR1cmJvL2Fzc2V0cy9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdnVlL2Fzc2V0cy9kaXN0L3JlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtdnVlL2Fzc2V0cy9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLnNjc3M/ZThiOCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotZ2FtZS52dWU/YTY3NSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL0NoYXQudnVlPzQ4YTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9IZWxsby52dWU/NjhhMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotY2hvb3Nlci52dWU/ZjQzYyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotZ2FtZS52dWU/Y2QzOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL0NoYXQudnVlPzI5NTciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9IZWxsby52dWU/MzYxNyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotY2hvb3Nlci52dWU/NDM4ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotZ2FtZS52dWU/ZmUxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vaGVsbG9fY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQ2hhdC52dWVcIjogXCIuL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvQ2hhdC52dWVcIixcblx0XCIuL0hlbGxvLnZ1ZVwiOiBcIi4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9IZWxsby52dWVcIixcblx0XCIuL1F1aXotY2hvb3Nlci52dWVcIjogXCIuL2Fzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1jaG9vc2VyLnZ1ZVwiLFxuXHRcIi4vUXVpei1nYW1lLnZ1ZVwiOiBcIi4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9RdWl6LWdhbWUudnVlXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3Z1ZS9jb250cm9sbGVycyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLnZ1ZSRcIjsiLCJpbXBvcnQgY29udHJvbGxlcl8wIGZyb20gJ0BzeW1mb255L3V4LXR1cmJvL2Rpc3QvdHVyYm9fY29udHJvbGxlci5qcyc7XG5pbXBvcnQgY29udHJvbGxlcl8xIGZyb20gJ0BzeW1mb255L3V4LXZ1ZS9kaXN0L3JlbmRlcl9jb250cm9sbGVyLmpzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS10dXJiby1jb3JlJzogY29udHJvbGxlcl8wLFxuICAnc3ltZm9ueS0tdXgtdnVlLS12dWUnOiBjb250cm9sbGVyXzEsXG59OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVnaXN0ZXJWdWVDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXZ1ZSc7XHJcbmltcG9ydCAnLi9ib290c3RyYXAuanMnO1xyXG4vKlxyXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXHJcbiAqXHJcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcclxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cclxuICovXHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbnJlcXVpcmUoJy4vc3R5bGVzL2FwcC5zY3NzJyk7XHJcblxyXG5yZWdpc3RlclZ1ZUNvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi92dWUvY29udHJvbGxlcnMnLCB0cnVlLCAvXFwudnVlJC8pKTtcclxuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXHJcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycycsXHJcbiAgICB0cnVlLFxyXG4gICAgL1xcLltqdF1zeD8kL1xyXG4pKTtcclxuLy8gcmVnaXN0ZXIgYW55IGN1c3RvbSwgM3JkIHBhcnR5IGNvbnRyb2xsZXJzIGhlcmVcclxuLy8gYXBwLnJlZ2lzdGVyKCdzb21lX2NvbnRyb2xsZXJfbmFtZScsIFNvbWVJbXBvcnRlZENvbnRyb2xsZXIpO1xyXG4iLCI8IS0tIHZ1ZS1mcm9udGVuZC9zcmMvY29tcG9uZW50cy9DaGF0LnZ1ZSAtLT5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPlJlYWwtdGltZSBDaGF0PC9oMT5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSB2LWZvcj1cIihtZXNzYWdlLCBpbmRleCkgaW4gbWVzc2FnZXNcIiA6a2V5PVwiaW5kZXhcIj57eyBtZXNzYWdlIH19PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxpbnB1dCB2LW1vZGVsPVwibWVzc2FnZVwiIEBrZXl1cC5lbnRlcj1cInNlbmRNZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJUeXBlIGEgbWVzc2FnZVwiPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFsndXNlciddLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzb2NrZXQ6IG51bGwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgICAgICAgICBtZXNzYWdlczogW11cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBpbygnaHR0cDovLzEyNy4wLjAuMTozMDAwJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoJ3N0b3JlVXNlcicsICB0aGlzLnVzZXIgKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbignam9pbmVkJywgICh1c2VyKSA9PlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgdXNlcjogJHt1c2VyLnVzZXJuYW1lfSBqb2luZWRgKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKCdtZXNzYWdlJywgKG1zZykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobXNnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaXNjb25uZWN0ZWQgZnJvbSBXZWJTb2NrZXQgc2VydmVyJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNlbmRNZXNzYWdlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KCdtZXNzYWdlJywgdGhpcy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDI+QXZhaWxhYmxlIFF1aXp6ZXM8L2gyPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIHYtZm9yPVwicXVpeiBpbiBxdWl6emVzXCIgOmtleT1cInF1aXouaWRcIj5cclxuICAgICAgICAgICAgICAgIDxhIDpocmVmPVwicXVpei5saW5rXCI+e3txdWl6LnRpdGxlfX08L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICAge3txdWl6emVzfX1cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgcHJvcHM6IFsncXVpenplcyddLFxyXG5cclxuICAgIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImdhbWUtY29udGFpbmVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1jb2x1bW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyIG10LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLXdyYXBwZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtLTAgZnMtM1wiPnt7cXVpei50aXRsZX19PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cIm0tMCBmcy0zXCI+e3txdWVzdGlvbkluZGV4ICsgMX19IG9mIHt7IHF1aXoucXVlc3Rpb25zLmxlbmd0aCB9fTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MgbXQtMVwiID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICA6YXJpYS12YWx1ZW5vdz1cImdldFByb2dyZXNzUGVyY2VudGFnZSgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgOnN0eWxlPVwieyB3aWR0aDogZ2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCkgKyAnJScgfVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgZ2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCkgfX0lXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cImltYWdlXCIgYWx0PVwiXCIgY2xhc3M9XCJnYW1lLWltYWdlIG10LTFcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiIWdhbWVPdmVyICYmIHF1aXoucXVlc3Rpb25zICYmIHF1ZXN0aW9uSW5kZXggPCBxdWl6LnF1ZXN0aW9ucy5sZW5ndGhcIiBjbGFzcz1cIm10LTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtcXVlc3Rpb24gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtaW5kZXggZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1lLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZzLTJcIj57e3F1ZXN0aW9uSW5kZXggKyAxfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cIm0tMFwiPnt7IHF1aXoucXVlc3Rpb25zW3F1ZXN0aW9uSW5kZXhdLnF1ZXN0aW9uIH19PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnN3ZXItZ3JpZCBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihhbnN3ZXIsIGluZGV4KSBpbiBxdWl6LnF1ZXN0aW9uc1txdWVzdGlvbkluZGV4XS5hbnN3ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiYW5zd2VyLmlkXCJcclxuICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhY2xpY2thYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImdhbWUtYW5zd2VyXCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJnZXRBbnN3ZXJDbGFzcyhpbmRleClcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImFuc3dlclF1ZXN0aW9uKGFuc3dlcilcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHt7IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpbmRleCkgfX0ge3sgYW5zd2VyLmFuc3dlciB9fVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG48IS0tICAgICAgICA8L2Rpdj4tLT5cclxuPCEtLSAgICAgICAgPHAgdi1lbHNlIGNsYXNzPVwia2Fob290LW1lc3NhZ2VcIj5ObyBxdWVzdGlvbnMgYXZhaWxhYmxlPC9wPi0tPlxyXG48IS0tICAgICAgICA8ZGl2IGNsYXNzPVwic2NvcmUtY29udHJvbHNcIj4tLT5cclxuPCEtLSAgICAgICAgICAgIDxoMj5TY29yZToge3sgcGxheWVyLnNjb3JlIH19PC9oMj4tLT5cclxuPCEtLSAgICAgICAgICAgIDxkaXY+LS0+XHJcbjwhLS0gICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJuZXh0UXVlc3Rpb25cIiB2LWlmPVwicGxheWVyLmFkbWluXCIgY2xhc3M9XCJrYWhvb3QtYnV0dG9uXCI+TmV4dCBRdWVzdGlvbjwvYnV0dG9uPi0tPlxyXG48IS0tICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic29ja2V0LmVtaXQoJ2NsZWFyLWRhdGEnKVwiIHYtaWY9XCJwbGF5ZXIuYWRtaW5cIiBjbGFzcz1cImthaG9vdC1idXR0b25cIj5SZXNldCBEYXRhPC9idXR0b24+LS0+XHJcbjwhLS0gICAgICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBlbmNvcmVJbWFnZSBmcm9tICcuLi8uLi9pbWFnZXMvZW5jb3JlLmpwZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgcXVpejoge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VycmVudFVzZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBxdWVzdGlvbkluZGV4OiAwLFxyXG4gICAgICAgICAgICBnYW1lT3ZlcjogZmFsc2UsXHJcbiAgICAgICAgICAgIHBsYXllcjoge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogdGhpcy5jdXJyZW50VXNlcixcclxuICAgICAgICAgICAgICAgIGFuc3dlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIHNjb3JlOiAwLFxyXG4gICAgICAgICAgICAgICAgYWRtaW46IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHNvY2tldDogbnVsbCxcclxuICAgICAgICAgICAgaW1hZ2U6IGVuY29yZUltYWdlXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgIHRoaXMuc29ja2V0ID0gaW8oXCJodHRwOi8vMTI3LjAuMC4xOjMwMDBcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJzdG9yZVVzZXJcIiwgdGhpcy5jdXJyZW50VXNlci51c2VybmFtZSk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oXCJqb2luZWRcIiwgKHVzZXIpID0+IGNvbnNvbGUubG9nKGB1c2VyOiAke3VzZXIudXNlcm5hbWV9IGpvaW5lZGApKTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oXCJuZXh0LXF1ZXN0aW9uXCIsIChpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnF1ZXN0aW9uSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgdGhpcy5jbGlja2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ29ycmVjdCgpO1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJxdWVzdGlvbkluZGV4XCIsIGluZGV4KTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwbGF5ZXJTY29yZVwiLCB0aGlzLnBsYXllci5zY29yZSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2xpY2thYmxlXCIsIHRoaXMuY2xpY2thYmxlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oXCJlbmQtZ2FtZVwiLCAoZ2FtZU92ZXIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGdhbWVPdmVyO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ29ycmVjdCgpO1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnYW1lT3ZlclwiLCBnYW1lT3Zlcik7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicGxheWVyU2NvcmVcIiwgdGhpcy5wbGF5ZXIuc2NvcmUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5vbihcImNsZWFyLWRhdGFcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyTG9jYWxEYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgICAvLyBMb2FkIGZyb20gbG9jYWxTdG9yYWdlIG9uIGNvbXBvbmVudCBtb3VudFxyXG4gICAgICAgIGNvbnN0IHN0b3JlZFF1ZXN0aW9uSW5kZXggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInF1ZXN0aW9uSW5kZXhcIik7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVkR2FtZU92ZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImdhbWVPdmVyXCIpO1xyXG4gICAgICAgIGNvbnN0IHN0b3JlZFNjb3JlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwbGF5ZXJTY29yZVwiKTtcclxuICAgICAgICBjb25zdCBzdG9yZWRDbGlja2FibGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNsaWNrYWJsZVwiKTtcclxuXHJcbiAgICAgICAgaWYgKHN0b3JlZFF1ZXN0aW9uSW5kZXggIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkluZGV4ID0gcGFyc2VJbnQoc3RvcmVkUXVlc3Rpb25JbmRleCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3RvcmVkR2FtZU92ZXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IEpTT04ucGFyc2Uoc3RvcmVkR2FtZU92ZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0b3JlZFNjb3JlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNjb3JlID0gcGFyc2VJbnQoc3RvcmVkU2NvcmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHN0b3JlZENsaWNrYWJsZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrYWJsZSA9IEpTT04ucGFyc2Uoc3RvcmVkQ2xpY2thYmxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIucm9sZXMuZm9yRWFjaCgocm9sZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm9sZSA9PT0gXCJST0xFX0FETUlOXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmFkbWluID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhc3luYyBuZXh0UXVlc3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXN0aW9uSW5kZXggPCB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aCAtIDEgJiYgdGhpcy5wbGF5ZXIuYW5zd2VyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5nZXRVc2VycygpLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVzZXIuYW5zd2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt1c2VyLnVzZXJuYW1lfSBoYXNudCBmaWxsZWQgaW4gdGhlaXIgYW5zd2VyYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYW5zd2VyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KFwibmV4dC1xdWVzdGlvblwiLCB0aGlzLnF1ZXN0aW9uSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcImVuZC1nYW1lXCIsIHRoaXMuZ2FtZU92ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja0NvcnJlY3QoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5hbnN3ZXIuY29ycmVjdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2NvcmUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5hbnN3ZXIgPSBudWxsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJMb2NhbERhdGEoKSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25JbmRleCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNjb3JlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jbGlja2FibGUgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYW5zd2VyUXVlc3Rpb24oYW5zd2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLmFuc3dlciA9IGFuc3dlcjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wbGF5ZXIuYW5zd2VyLmNvcnJlY3QpO1xyXG4gICAgICAgICAgICB0aGlzLmNsaWNrYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNsaWNrYWJsZVwiLCB0aGlzLmNsaWNrYWJsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LmVtaXQoXCJhbnN3ZXItcXVlc3Rpb25cIiwgW3RoaXMuY3VycmVudFVzZXIudXNlcm5hbWUsIHRoaXMucGxheWVyLmFuc3dlcl0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0QW5zd2VyQ2xhc3MoaW5kZXgpIHtcclxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIGNsYXNzIGJhc2VkIG9uIGluZGV4IGZvciBLYWhvb3QhLXN0eWxlIGNvbG9yc1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGluZGV4ICUgNCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImthaG9vdC1hbnN3ZXItcmVkXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwia2Fob290LWFuc3dlci1ibHVlXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwia2Fob290LWFuc3dlci15ZWxsb3dcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJrYWhvb3QtYW5zd2VyLWdyZWVuXCI7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiOyAvLyBIYW5kbGUgYWRkaXRpb25hbCBjYXNlcyBpZiBuZWVkZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgZ2V0VXNlcnMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly8xMjcuMC4wLjE6MzAwMC91c2Vyc1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgdXNlcnMhXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvZ3Jlc3NQZXJjZW50YWdlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgodGhpcy5xdWVzdGlvbkluZGV4KzEgLyB0aGlzLnF1aXoucXVlc3Rpb25zLmxlbmd0aCkgKiAxMDApO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5oZWFkZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG4uZ2FtZS1pbWFnZSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG4uZ2FtZS1pbmRleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgxNjgsIDE0LCAyMjIsIDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+SGVsbG8ge3sgbmFtZSB9fSE8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgc2V0dXA+XHJcbiAgICBkZWZpbmVQcm9wcyh7XHJcbiAgICAgICAgbmFtZTogU3RyaW5nXHJcbiAgICB9KTtcclxuPC9zY3JpcHQ+IiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcbmltcG9ydCAnQGhvdHdpcmVkL3R1cmJvJztcclxuXHJcbmNsYXNzIHR1cmJvX2NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxufVxyXG5cclxuZXhwb3J0IHsgdHVyYm9fY29udHJvbGxlciBhcyBkZWZhdWx0IH07XHJcbiIsImltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSAndnVlJztcclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyVnVlQ29udHJvbGxlckNvbXBvbmVudHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgdnVlQ29udHJvbGxlcnMgPSBjb250ZXh0LmtleXMoKS5yZWR1Y2UoKGFjYywga2V5KSA9PiB7XHJcbiAgICAgICAgYWNjW2tleV0gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIGFjYztcclxuICAgIH0sIHt9KTtcclxuICAgIGZ1bmN0aW9uIGxvYWRDb21wb25lbnQobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFBhdGggPSBgLi8ke25hbWV9LnZ1ZWA7XHJcbiAgICAgICAgaWYgKCEoY29tcG9uZW50UGF0aCBpbiB2dWVDb250cm9sbGVycykpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zc2libGVWYWx1ZXMgPSBPYmplY3Qua2V5cyh2dWVDb250cm9sbGVycykubWFwKChrZXkpID0+IGtleS5yZXBsYWNlKCcuLycsICcnKS5yZXBsYWNlKCcudnVlJywgJycpKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBWdWUgY29udHJvbGxlciBcIiR7bmFtZX1cIiBkb2VzIG5vdCBleGlzdC4gUG9zc2libGUgdmFsdWVzOiAke3Bvc3NpYmxlVmFsdWVzLmpvaW4oJywgJyl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdnVlQ29udHJvbGxlcnNbY29tcG9uZW50UGF0aF0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IGNvbnRleHQoY29tcG9uZW50UGF0aCk7XHJcbiAgICAgICAgICAgIGlmIChtb2R1bGUuZGVmYXVsdCkge1xyXG4gICAgICAgICAgICAgICAgdnVlQ29udHJvbGxlcnNbY29tcG9uZW50UGF0aF0gPSBtb2R1bGUuZGVmYXVsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChtb2R1bGUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICB2dWVDb250cm9sbGVyc1tjb21wb25lbnRQYXRoXSA9IGRlZmluZUFzeW5jQ29tcG9uZW50KCgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2R1bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc29sdmVkTW9kdWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNvbHZlZE1vZHVsZS5kZWZhdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkTW9kdWxlLmRlZmF1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgZGVmYXVsdCBleHBvcnQgaW4gYXN5bmMgVnVlIGNvbnRyb2xsZXIgXCIke25hbWV9XCIuYCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKHJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFZ1ZSBjb250cm9sbGVyIFwiJHtuYW1lfVwiIGRvZXMgbm90IGV4aXN0LmApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2dWVDb250cm9sbGVyc1tjb21wb25lbnRQYXRoXTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5yZXNvbHZlVnVlQ29tcG9uZW50ID0gKG5hbWUpID0+IHtcclxuICAgICAgICByZXR1cm4gbG9hZENvbXBvbmVudChuYW1lKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJlZ2lzdGVyVnVlQ29udHJvbGxlckNvbXBvbmVudHMgfTtcclxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XHJcbmltcG9ydCB7IGNyZWF0ZUFwcCB9IGZyb20gJ3Z1ZSc7XHJcblxyXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcclxuICAgIGNvbm5lY3QoKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIHRoaXMucHJvcHMgPSAoX2EgPSB0aGlzLnByb3BzVmFsdWUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0JywgeyBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogdGhpcy5wcm9wcyB9KTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVZ1ZUNvbXBvbmVudCh0aGlzLmNvbXBvbmVudFZhbHVlKTtcclxuICAgICAgICB0aGlzLmFwcCA9IGNyZWF0ZUFwcChjb21wb25lbnQsIHRoaXMucHJvcHMpO1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuX192dWVfYXBwX18gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuX192dWVfYXBwX18udW5tb3VudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2JlZm9yZS1tb3VudCcsIHtcclxuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcclxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXHJcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzLFxyXG4gICAgICAgICAgICBhcHA6IHRoaXMuYXBwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYXBwLm1vdW50KHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtb3VudCcsIHtcclxuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcclxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXHJcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZGlzY29ubmVjdCgpIHtcclxuICAgICAgICB0aGlzLmFwcC51bm1vdW50KCk7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCd1bm1vdW50Jywge1xyXG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxyXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wcyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ3Z1ZScgfSk7XHJcbiAgICB9XHJcbn1cclxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcclxuICAgIGNvbXBvbmVudDogU3RyaW5nLFxyXG4gICAgcHJvcHM6IE9iamVjdCxcclxufTtcclxuXHJcbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0NoYXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlM2FhODA3XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX2ZpbGUnLFwiYXNzZXRzL3Z1ZS9jb250cm9sbGVycy9DaGF0LnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI2ZTNhYTgwN1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzZlM2FhODA3JywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNmUzYWE4MDcnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NoYXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlM2FhODA3XCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzZlM2FhODA3JywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9IZWxsby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDI3ZTA3MzNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9IZWxsby52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9IZWxsby52dWU/dnVlJnR5cGU9c2NyaXB0JnNldHVwPXRydWUmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvdnVlL2NvbnRyb2xsZXJzL0hlbGxvLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCI0MjdlMDczM1wiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzQyN2UwNzMzJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnNDI3ZTA3MzMnLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0hlbGxvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MjdlMDczM1wiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc0MjdlMDczMycsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vUXVpei1jaG9vc2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zM2M1ZTQxY1wiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1F1aXotY2hvb3Nlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUXVpei1jaG9vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvdnVlL2NvbnRyb2xsZXJzL1F1aXotY2hvb3Nlci52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiMzNjNWU0MWNcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCczM2M1ZTQxYycsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJzMzYzVlNDFjJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9RdWl6LWNob29zZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzYzVlNDFjXCIsICgpID0+IHtcbiAgICBhcGkucmVyZW5kZXIoJzMzYzVlNDFjJywgcmVuZGVyKVxuICB9KVxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgX19leHBvcnRzX18iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiLi9RdWl6LWdhbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3MDg0ZTRiJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUXVpei1nYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9RdWl6LWdhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuaW1wb3J0IFwiLi9RdWl6LWdhbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzcwODRlNGImc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LTM3MDg0ZTRiXCJdLFsnX19maWxlJyxcImFzc2V0cy92dWUvY29udHJvbGxlcnMvUXVpei1nYW1lLnZ1ZVwiXV0pXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBfX2V4cG9ydHNfXy5fX2htcklkID0gXCIzNzA4NGU0YlwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzM3MDg0ZTRiJywgX19leHBvcnRzX18pKSB7XG4gICAgYXBpLnJlbG9hZCgnMzcwODRlNGInLCBfX2V4cG9ydHNfXylcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1F1aXotZ2FtZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzcwODRlNGImc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignMzcwODRlNGInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0NoYXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vQ2hhdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL0hlbGxvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vSGVsbG8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9anNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL1F1aXotY2hvb3Nlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9RdWl6LWNob29zZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9RdWl6LWdhbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlWzBdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMF0udXNlWzBdIS4vUXVpei1nYW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJyZWdpc3RlclZ1ZUNvbnRyb2xsZXJDb21wb25lbnRzIiwicmVxdWlyZSIsImNvbnRleHQiLCJzdGFydFN0aW11bHVzQXBwIiwiYXBwIiwiaW8iLCJwcm9wcyIsImRhdGEiLCJzb2NrZXQiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJjcmVhdGVkIiwiX3RoaXMiLCJlbWl0IiwidXNlciIsIm9uIiwiY29uc29sZSIsImxvZyIsImNvbmNhdCIsInVzZXJuYW1lIiwibXNnIiwicHVzaCIsIm1ldGhvZHMiLCJzZW5kTWVzc2FnZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJheGlvcyIsImVuY29yZUltYWdlIiwicXVpeiIsInJlcXVpcmVkIiwiY3VycmVudFVzZXIiLCJxdWVzdGlvbkluZGV4IiwiZ2FtZU92ZXIiLCJwbGF5ZXIiLCJhbnN3ZXIiLCJzY29yZSIsImFkbWluIiwiY2xpY2thYmxlIiwiaW1hZ2UiLCJpbmRleCIsImNoZWNrQ29ycmVjdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjbGVhckxvY2FsRGF0YSIsIm1vdW50ZWQiLCJfdGhpczIiLCJzdG9yZWRRdWVzdGlvbkluZGV4IiwiZ2V0SXRlbSIsInN0b3JlZEdhbWVPdmVyIiwic3RvcmVkU2NvcmUiLCJzdG9yZWRDbGlja2FibGUiLCJwYXJzZUludCIsIkpTT04iLCJwYXJzZSIsInJvbGVzIiwicm9sZSIsIm5leHRRdWVzdGlvbiIsIl90aGlzMyIsIl9jYWxsZWUiLCJhbnN3ZXJlZCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJxdWVzdGlvbnMiLCJnZXRVc2VycyIsInVzZXJzIiwiY29ycmVjdCIsImNsZWFyIiwiYW5zd2VyUXVlc3Rpb24iLCJnZXRBbnN3ZXJDbGFzcyIsIl9jYWxsZWUyIiwicmVzcG9uc2UiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJnZXQiLCJ0MCIsImVycm9yIiwiZ2V0UHJvZ3Jlc3NQZXJjZW50YWdlIiwiTWF0aCIsInJvdW5kIiwiX2NyZWF0ZUVsZW1lbnRWTm9kZSIsIl9jcmVhdGVFbGVtZW50QmxvY2siLCJfaG9pc3RlZF8xIiwiX0ZyYWdtZW50IiwiX3JlbmRlckxpc3QiLCIkZGF0YSIsIl90b0Rpc3BsYXlTdHJpbmciLCJfY2FjaGUiLCIkZXZlbnQiLCJvbktleXVwIiwiX3dpdGhLZXlzIiwiJG9wdGlvbnMiLCJwbGFjZWhvbGRlciIsIiRwcm9wcyIsInF1aXp6ZXMiLCJpZCIsImhyZWYiLCJsaW5rIiwidGl0bGUiLCJfaG9pc3RlZF8yIiwiX2NyZWF0ZVRleHRWTm9kZSIsIl9ob2lzdGVkXzMiLCJfaG9pc3RlZF80IiwiX2hvaXN0ZWRfNSIsIl9ob2lzdGVkXzYiLCJzdHlsZSIsIl9ub3JtYWxpemVTdHlsZSIsIndpZHRoIiwiX2hvaXN0ZWRfNyIsInNyYyIsImFsdCIsIl9ob2lzdGVkXzgiLCJfaG9pc3RlZF85IiwiX2hvaXN0ZWRfMTAiLCJfaG9pc3RlZF8xMSIsIl9ob2lzdGVkXzEyIiwiX2hvaXN0ZWRfMTMiLCJxdWVzdGlvbiIsIl9ob2lzdGVkXzE0IiwiYW5zd2VycyIsImRpc2FibGVkIiwiX25vcm1hbGl6ZUNsYXNzIiwib25DbGljayIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIl9ob2lzdGVkXzE1IiwiX2NyZWF0ZUNvbW1lbnRWTm9kZSIsInR1cmJvX2NvbnRyb2xsZXIiLCJkZWZpbmVBc3luY0NvbXBvbmVudCIsInZ1ZUNvbnRyb2xsZXJzIiwicmVkdWNlIiwiYWNjIiwidW5kZWZpbmVkIiwibG9hZENvbXBvbmVudCIsImNvbXBvbmVudFBhdGgiLCJwb3NzaWJsZVZhbHVlcyIsIm1hcCIsInJlcGxhY2UiLCJqb2luIiwibW9kdWxlIiwicmVqZWN0IiwicmVzb2x2ZWRNb2R1bGUiLCJ3aW5kb3ciLCJyZXNvbHZlVnVlQ29tcG9uZW50IiwiY3JlYXRlQXBwIiwiZGVmYXVsdF8xIiwiX2EiLCJwcm9wc1ZhbHVlIiwiZGlzcGF0Y2hFdmVudCIsImNvbXBvbmVudE5hbWUiLCJjb21wb25lbnRWYWx1ZSIsImNvbXBvbmVudCIsIl9fdnVlX2FwcF9fIiwidW5tb3VudCIsIm1vdW50IiwiZGlzY29ubmVjdCIsInBheWxvYWQiLCJkaXNwYXRjaCIsImRldGFpbCIsInByZWZpeCJdLCJzb3VyY2VSb290IjoiIn0=