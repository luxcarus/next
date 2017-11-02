webpackJsonp([0],{

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rt_device_Bluetooth__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BluetoothRnbs = function () {
  function BluetoothRnbs() {
    _classCallCheck(this, BluetoothRnbs);

    this.seed = new __WEBPACK_IMPORTED_MODULE_0_rt_device_Bluetooth__["a" /* default */]();
  }

  _createClass(BluetoothRnbs, [{
    key: 'getOne',
    value: function getOne() {
      return this.seed.getOne();
    }
  }, {
    key: 'getThree',
    value: function getThree() {
      return this.seed.getThree();
    }
  }, {
    key: 'getA',
    value: function getA() {
      return this.seed.getA();
    }
  }, {
    key: 'getB',
    value: function getB() {
      return this.seed.getB();
    }
  }]);

  return BluetoothRnbs;
}();

/* harmony default export */ __webpack_exports__["default"] = (BluetoothRnbs);

/***/ })

},[2]);