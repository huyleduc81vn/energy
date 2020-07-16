function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reports-reports-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reports/reports.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reports/reports.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesReportsReportsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"default_white\">\r\n        <ion-title color=\"default_green\">Test Database By iotID</ion-title>\r\n    </ion-toolbar>\r\n    <ion-toobar>\r\n        <ion-item>         \r\n          <ion-input value = \"iot_id\" [(ngModel)] = \"iot_id\"  type=\"text \" placeholder=\"iotID... \"></ion-input>        \r\n          <button (click)=\"connectDevice()\">{{connect?\"Disconnect\":\"Connect\"}}</button>     \r\n      </ion-item>\r\n      </ion-toobar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-item *ngFor=\"let message of list_messages; index as i\" class=\"message\">       \r\n        <ion-grid>\r\n          <ion-row>\r\n            {{i+1}} {{message}}\r\n            <!-- <ion-col class=\"username\">\r\n              {{ message.topic }}\r\n            </ion-col>\r\n            <ion-col class=\"messageContent\">\r\n              {{ message.value }}\r\n            </ion-col>\r\n            <ion-col class=\"messageDate\">\r\n              {{ message.date | date : \"hh:mm:ss\" }}\r\n            </ion-col>          -->\r\n          </ion-row>\r\n        </ion-grid>\r\n        <!-- <div class=\"username\">{{ message.topic }}</div>\r\n        <div class=\"messageContent\">{{ message.value }}</div>           \r\n        <div class=\"messageDate \">{{ message.date | date : \"hh:mm:ss\" }}</div>        -->\r\n      </ion-item>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/reports/reports-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/reports/reports-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ReportsPageRoutingModule */

  /***/
  function srcAppPagesReportsReportsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsPageRoutingModule", function () {
      return ReportsPageRoutingModule;
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


    var _reports_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reports.page */
    "./src/app/pages/reports/reports.page.ts");

    var routes = [{
      path: "",
      component: _reports_page__WEBPACK_IMPORTED_MODULE_3__["ReportsPage"]
    }];

    var ReportsPageRoutingModule = function ReportsPageRoutingModule() {
      _classCallCheck(this, ReportsPageRoutingModule);
    };

    ReportsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReportsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/reports/reports.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/reports/reports.module.ts ***!
    \*************************************************/

  /*! exports provided: ReportsPageModule */

  /***/
  function srcAppPagesReportsReportsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsPageModule", function () {
      return ReportsPageModule;
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


    var _reports_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reports-routing.module */
    "./src/app/pages/reports/reports-routing.module.ts");
    /* harmony import */


    var _reports_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./reports.page */
    "./src/app/pages/reports/reports.page.ts");

    var ReportsPageModule = function ReportsPageModule() {
      _classCallCheck(this, ReportsPageModule);
    };

    ReportsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _reports_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportsPageRoutingModule"]],
      declarations: [_reports_page__WEBPACK_IMPORTED_MODULE_6__["ReportsPage"]]
    })], ReportsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/reports/reports.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/reports/reports.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesReportsReportsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydHMvcmVwb3J0cy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/reports/reports.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/reports/reports.page.ts ***!
    \***********************************************/

  /*! exports provided: ReportsPage */

  /***/
  function srcAppPagesReportsReportsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsPage", function () {
      return ReportsPage;
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


    var vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! vhframeworks */
    "./node_modules/vhframeworks/index.js");
    /* harmony import */


    var vhframeworks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vhframeworks__WEBPACK_IMPORTED_MODULE_3__);

    var ReportsPage = /*#__PURE__*/function () {
      function ReportsPage(router, ordinaryQueryBusiness, queryVhenergy, ordinaryComponent) {
        _classCallCheck(this, ReportsPage);

        this.router = router;
        this.ordinaryQueryBusiness = ordinaryQueryBusiness;
        this.queryVhenergy = queryVhenergy;
        this.ordinaryComponent = ordinaryComponent;
        this.connect = false;
        this.iot_id = "CCC27BAE114C";
        this.list_messages = [];
        this.listMessages = [];
      }

      _createClass(ReportsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "connectDevice",
        value: function connectDevice() {
          var _this = this;

          if (this.iot_id != "") {
            this.connect = !this.connect;

            if (this.connect) {
              this.subscription = this.queryVhenergy.callbackLogValues(this.iot_id, 10).subscribe(function (data) {
                _this.list_messages = new Array();

                if (data.size > 0) {
                  for (var i = data.size - 1; i >= 0; i--) {
                    var val = data.docs[i].data();
                    val.date = val.date.toDate().toString();
                    var value = JSON.stringify(val);

                    _this.list_messages.push(value);
                  } //console.log(this.list_messages);

                }
              });
            } else {
              this.subscription.unsubscribe();
              this.list_messages = new Array();
            }
          } else {
            this.ordinaryComponent.showToast(1000, "Vui lòng nhập iotID");
          }
          /*this.queryVhenergy.callbackLogValues(messages => {
            if (!messages.empty) {
              this.listMessages = new Array(messages.size);
              let messagesReverse = messages.docs.reverse();
              this.listMessages = messagesReverse;
              console.log(this.listMessages)
              //this.scrollBottom();
            }
          },'CCC27BAE114C', 6)*/

        }
      }]);

      return ReportsPage;
    }();

    ReportsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: vhframeworks__WEBPACK_IMPORTED_MODULE_3__["OrdinaryQueryBusiness"]
      }, {
        type: vhframeworks__WEBPACK_IMPORTED_MODULE_3__["QueryVhenergy"]
      }, {
        type: vhframeworks__WEBPACK_IMPORTED_MODULE_3__["OrdinaryComponent"]
      }];
    };

    ReportsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./reports.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reports/reports.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./reports.page.scss */
      "./src/app/pages/reports/reports.page.scss"))["default"]]
    })], ReportsPage);
    /***/
  }
}]);
//# sourceMappingURL=reports-reports-module-es5.js.map