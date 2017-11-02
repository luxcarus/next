webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rt_device_Bluetooth__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var BluetoothObge = function () {
  function BluetoothObge() {
    _classCallCheck(this, BluetoothObge);

    this.seed = new __WEBPACK_IMPORTED_MODULE_0_rt_device_Bluetooth__["a" /* default */]();
    window.device.bluetooth = this;
  }

  _createClass(BluetoothObge, [{
    key: 'getOne',
    value: function getOne() {
      return this.seed.getOne();
    }
  }]);

  return BluetoothObge;
}();

/* harmony default export */ __webpack_exports__["default"] = (BluetoothObge);

/***/ })
],[1]);