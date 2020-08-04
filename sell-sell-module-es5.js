function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sell-sell-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sell/sell.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sell/sell.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSellSellPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"default_white\">\r\n        <ion-title color=\"default_green\">Bán Hàng</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/sell/sell-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/sell/sell-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: SellPageRoutingModule */

  /***/
  function srcAppPagesSellSellRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellPageRoutingModule", function () {
      return SellPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _sell_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sell.page */
    "./src/app/pages/sell/sell.page.ts");

    var routes = [{
      path: "",
      component: _sell_page__WEBPACK_IMPORTED_MODULE_3__["SellPage"]
    }];

    var SellPageRoutingModule = function SellPageRoutingModule() {
      _classCallCheck(this, SellPageRoutingModule);
    };

    SellPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SellPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/sell/sell.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/sell/sell.module.ts ***!
    \*******************************************/

  /*! exports provided: SellPageModule */

  /***/
  function srcAppPagesSellSellModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellPageModule", function () {
      return SellPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _sell_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sell-routing.module */
    "./src/app/pages/sell/sell-routing.module.ts");
    /* harmony import */


    var _sell_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sell.page */
    "./src/app/pages/sell/sell.page.ts");
    /* harmony import */


    var vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! vhframeworks */
    "./node_modules/vhframeworks/index.js");
    /* harmony import */


    var vhframeworks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vhframeworks__WEBPACK_IMPORTED_MODULE_7__);

    var SellPageModule = function SellPageModule() {
      _classCallCheck(this, SellPageModule);
    };

    SellPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], vhframeworks__WEBPACK_IMPORTED_MODULE_7__["vhPipeModule"], _sell_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellPageRoutingModule"]],
      declarations: [_sell_page__WEBPACK_IMPORTED_MODULE_6__["SellPage"]]
    })], SellPageModule);
    /***/
  },

  /***/
  "./src/app/pages/sell/sell.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/sell/sell.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSellSellPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbGwvc2VsbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/sell/sell.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/sell/sell.page.ts ***!
    \*****************************************/

  /*! exports provided: SellPage */

  /***/
  function srcAppPagesSellSellPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellPage", function () {
      return SellPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SellPage = function SellPage() {
      _classCallCheck(this, SellPage);
    };

    SellPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sell",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sell.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sell/sell.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sell.page.scss */
      "./src/app/pages/sell/sell.page.scss"))["default"]]
    })], SellPage);
    /***/
  }
}]);
//# sourceMappingURL=sell-sell-module-es5.js.map