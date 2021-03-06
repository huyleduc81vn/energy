function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content padding>\r\n  <form class=\"form\" [formGroup]=\"validations_form\" (ngSubmit)=\"tryLogin(validations_form.value)\">\r\n    <ion-row class=\"login-logo\"> <img src=\"/assets/viethas.jpg\" alt=\"Viethas Logo\" /> </ion-row>\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"medium\">\r\n          <ion-icon src=\"./assets/icon/account.svg\"> </ion-icon> Tên đăng nhập\r\n        </ion-label>\r\n        <ion-input type=\"text\" formControlName=\"email\" required></ion-input>\r\n      </ion-item>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\r\n            {{validation.message}}</div>\r\n        </ng-container>\r\n      </div>\r\n      <ion-item>\r\n        <ion-label position=\"floating\" color=\"medium\">\r\n          <ion-icon src=\"./assets/icon/lock.svg\"></ion-icon> Mật khẩu\r\n        </ion-label>\r\n        <ion-input [attr.type]=\"text_password?'text':'password'\" formControlName=\"password\"></ion-input>\r\n        <ion-icon [src]=\"text_password?'./assets/icon/eye.svg':'./assets/icon/eye-off.svg'\" color=\"gray\"\r\n          (click)=\"text_password=!text_password\" slot=\"end\"\r\n          style=\"font-size: 1em; position: absolute; right: 0; bottom: 0; z-index: 9\"></ion-icon>\r\n      </ion-item>\r\n      <div class=\"validation-errors\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"validations_form.get('password').hasError(validation.type) && (validations_form.get('password').dirty || validations_form.get('password').touched)\">\r\n            {{validation.message}}</div>\r\n        </ng-container>\r\n      </div>\r\n    </ion-list>\r\n    <ion-row class=\"btn_login\">\r\n      <ion-button type=\"submit\" [disabled]=\"!validations_form.valid\">Đăng nhập</ion-button> <label\r\n        class=\"error-message\">{{errorMessage}}</label>\r\n    </ion-row>\r\n    <ion-row class=\"login_fogot\"> <span (click)=\"resetPassword()\">Quên mật khẩu?</span> <u (click)=\"goRegisterPage()\"\r\n        style=\"color: var(--ion-color-default_green); margin-left: 0.5rem;\"> Đăng ký </u> </ion-row>\r\n  </form>\r\n</ion-content>\r\n<!-- Source code này đã được mã hóa, Cty Viethas nghiêm cấm giải mã trong bất kỳ trường hợp nào.\r\nNếu cần cho công việc, vui lòng liên hệ anh chị quản lý mình, để lấy Source code gốc.\r\nHãy thể hiện là người văn minh khi tôn trọng, tuân thủ luật sở hữu trí tuệ của Vietnam và Quốc tế. -->";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: "",
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.error-message {\n  color: var(--ion-color-danger);\n}\n.login-logo {\n  margin-top: 15%;\n  height: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20%;\n}\n@media only screen and (orientation: landscape) {\n  .login-logo {\n    margin-bottom: 5%;\n  }\n}\n.login-logo img {\n  width: 200px;\n}\n.btn_login {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.btn_login ion-button {\n  width: 80vw;\n  height: 3rem;\n  border-radius: 1rem;\n  --background-activated: var(--ion-color-default_green_light);\n  --background: var(--ion-color-default_green);\n}\n.login_fogot {\n  margin-top: 5%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n}\n/*\nSource code này đã được mã hóa, Cty Viethas nghiêm cấm giải mã trong bất kỳ trường hợp nào.\nNếu cần cho công việc, vui lòng liên hệ anh chị quản lý mình, để lấy Source code gốc.\nHãy thể hiện là người văn minh khi tôn trọng, tuân thủ luật sở hữu trí tuệ của Vietnam và Quốc tế.\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9DOlxcQ09ESU5HXFx2aWV0aGFzIDE1MDdcXENhcGFjaXRvci1TdGFuZGFyZC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsOEJBQUE7QURFRjtBQ0FBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FER0Y7QUNGRTtFQVBGO0lBUUksaUJBQUE7RURLRjtBQUNGO0FDSkU7RUFDRSxZQUFBO0FETUo7QUNIQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QURNRjtBQ0xFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0VBQ0EsNENBQUE7QURPSjtBQ0pBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QURPRjtBQ0xBOzs7O0NBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZXJyb3ItbWVzc2FnZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIGhlaWdodDogMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAubG9naW4tbG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIH1cbn1cbi5sb2dpbi1sb2dvIGltZyB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmJ0bl9sb2dpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJ0bl9sb2dpbiBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDgwdnc7XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRlZmF1bHRfZ3JlZW5fbGlnaHQpO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kZWZhdWx0X2dyZWVuKTtcbn1cblxuLmxvZ2luX2ZvZ290IHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4vKlxuU291cmNlIGNvZGUgbsOgeSDEkcOjIMSRxrDhu6NjIG3DoyBow7NhLCBDdHkgVmlldGhhcyBuZ2hpw6ptIGPhuqVtIGdp4bqjaSBtw6MgdHJvbmcgYuG6pXQga+G7syB0csaw4budbmcgaOG7o3AgbsOgby5cbk7hur91IGPhuqduIGNobyBjw7RuZyB2aeG7h2MsIHZ1aSBsw7JuZyBsacOqbiBo4buHIGFuaCBjaOG7iyBxdeG6o24gbMO9IG3DrG5oLCDEkeG7gyBs4bqleSBTb3VyY2UgY29kZSBn4buRYy5cbkjDo3kgdGjhu4MgaGnhu4duIGzDoCBuZ8aw4budaSB2xINuIG1pbmgga2hpIHTDtG4gdHLhu41uZywgdHXDom4gdGjhu6cgbHXhuq10IHPhu58gaOG7r3UgdHLDrSB0deG7hyBj4bunYSBWaWV0bmFtIHbDoCBRdeG7kWMgdOG6vy5cbiovIiwiLmVycm9yLW1lc3NhZ2Uge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxufVxyXG4ubG9naW4tbG9nbyB7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIGhlaWdodDogMjAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMCU7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgfVxyXG59XHJcbi5idG5fbG9naW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLWRlZmF1bHRfZ3JlZW5fbGlnaHQpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGVmYXVsdF9ncmVlbik7XHJcbiAgfVxyXG59XHJcbi5sb2dpbl9mb2dvdCB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLypcclxuU291cmNlIGNvZGUgbsOgeSDEkcOjIMSRxrDhu6NjIG3DoyBow7NhLCBDdHkgVmlldGhhcyBuZ2hpw6ptIGPhuqVtIGdp4bqjaSBtw6MgdHJvbmcgYuG6pXQga+G7syB0csaw4budbmcgaOG7o3AgbsOgby5cclxuTuG6v3UgY+G6p24gY2hvIGPDtG5nIHZp4buHYywgdnVpIGzDsm5nIGxpw6puIGjhu4cgYW5oIGNo4buLIHF14bqjbiBsw70gbcOsbmgsIMSR4buDIGzhuqV5IFNvdXJjZSBjb2RlIGfhu5FjLlxyXG5Iw6N5IHRo4buDIGhp4buHbiBsw6AgbmfGsOG7nWkgdsSDbiBtaW5oIGtoaSB0w7RuIHRy4buNbmcsIHR1w6JuIHRo4bunIGx14bqtdCBz4bufIGjhu691IHRyw60gdHXhu4cgY+G7p2EgVmlldG5hbSB2w6AgUXXhu5FjIHThur8uXHJcbiovXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! vhframeworks */
    "./node_modules/vhframeworks/index.js");
    /* harmony import */


    var vhframeworks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vhframeworks__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var _0xfa83 = ["\x53\x61\x79\x48\x65\x6C\x6C\x6F", "\x47\x65\x74\x43\x6F\x75\x6E\x74", "\x4D\x65\x73\x73\x61\x67\x65\x20\x3A\x20"];

    function NewObject(_0xdb6ex2) {
      var _0xdb6ex3 = 0;

      this[_0xfa83[0]] = function (_0xdb6ex4) {
        _0xdb6ex3++;
        alert(_0xdb6ex2 + _0xdb6ex4);
      };

      this[_0xfa83[1]] = function () {
        return _0xdb6ex3;
      };
    }

    var obj = new NewObject(_0xfa83[2]);

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(formBuilder, navCtrl, router, firebaseAuth, ordinaryComponent, loadingCtrl, alertController, toastController) {
        _classCallCheck(this, LoginPage);

        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.router = router;
        this.firebaseAuth = firebaseAuth;
        this.ordinaryComponent = ordinaryComponent;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.toastController = toastController;
        this.errorMessage = "";
        this.validation_messages = {
          email: [{
            type: "required",
            message: "Email is required."
          }, {
            type: "pattern",
            message: "Please enter a valid email."
          }],
          password: [{
            type: "required",
            message: "Password is required."
          }, {
            type: "minlength",
            message: "Password must be at least 5 characters long."
          }]
        };
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _$_b806 = ["\x76\x61\x6C\x69\x64\x61\x74\x69\x6F\x6E\x73\x5F\x66\x6F\x72\x6D", "\x73\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D", "\x72\x65\x71\x75\x69\x72\x65\x64", "\x5E\x5B\x61\x2D\x7A\x41\x2D\x5A\x30\x2D\x39\x5F\x2E\x2B\x2D\x5D\x2B\x40\x5B\x61\x2D\x7A\x41\x2D\x5A\x30\x2D\x39\x2D\x5D\x2B\x2E\x5B\x61\x2D\x7A\x41\x2D\x5A\x30\x2D\x39\x2D\x2E\x5D\x2B\x24", "\x70\x61\x74\x74\x65\x72\x6E", "\x63\x6F\x6D\x70\x6F\x73\x65", "", "\x6D\x69\x6E\x4C\x65\x6E\x67\x74\x68", "\x67\x72\x6F\x75\x70", "\x66\x6F\x72\x6D\x42\x75\x69\x6C\x64\x65\x72"];
          this[_$_b806[0]] = this[_$_b806[9]][_$_b806[8]]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_$_b806[1], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"][_$_b806[5]]([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"][_$_b806[2]], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"][_$_b806[4]](_$_b806[3])])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](_$_b806[6], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"][_$_b806[5]]([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"][_$_b806[7]](5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"][_$_b806[2]]]))
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          var _this = this;

          var _$_f469 = ["\x65\x6D\x61\x69\x6C", "", "\x45\x6D\x61\x69\x6C\x20\x73\x65\x6E\x74", "\x73\x68\x6F\x77\x54\x6F\x61\x73\x74", "\x6F\x72\x64\x69\x6E\x61\x72\x79\x43\x6F\x6D\x70\x6F\x6E\x65\x6E\x74", "\x43\x61\x6E\x27\x74\x20\x72\x65\x73\x65\x74\x20\x70\x61\x73\x73\x77\x6F\x72\x64", "\x74\x68\x65\x6E", "\x64\x6F\x52\x65\x73\x65\x74\x5F\x50\x61\x73\x73\x77\x6F\x72\x64", "\x66\x69\x72\x65\x62\x61\x73\x65\x41\x75\x74\x68", "\x43\x61\x6E\x63\x65\x6C", "\x6C\x6F\x67", "Nh\u1EADp email c\u1EE7a b\u1EA1n", "\x59\x65\x73", "\x61\x6C\x65\x72\x74\x49\x6E\x70\x75\x74"];
          var options = [{
            name: _$_f469[0],
            placeholder: _$_f469[0],
            value: _$_f469[1]
          }];

          this[_$_f469[4]][_$_f469[13]](_$_f469[11], options, _$_f469[12], _$_f469[9])[_$_f469[6]](function (a) {
            var b = a[_$_f469[0]];

            _this[_$_f469[8]][_$_f469[7]](b)[_$_f469[6]](function (a) {
              if (a) {
                _this[_$_f469[4]][_$_f469[3]](2000, _$_f469[2]);
              } else {
                _this[_$_f469[4]][_$_f469[3]](2000, _$_f469[5]);
              }
            });
          }, function () {
            console[_$_f469[10]](_$_f469[9]);
          });
        }
      }, {
        key: "tryLogin",
        value: function tryLogin(value) {
          var _this2 = this;

          var _$_5ef7 = ["\x2F\x74\x61\x62\x73", "\x6E\x61\x76\x69\x67\x61\x74\x65\x52\x6F\x6F\x74", "\x6E\x61\x76\x43\x74\x72\x6C", "\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65", "\x6D\x65\x73\x73\x61\x67\x65", "\x74\x68\x65\x6E", "\x64\x6F\x4C\x6F\x67\x69\x6E", "\x66\x69\x72\x65\x62\x61\x73\x65\x41\x75\x74\x68"];

          this[_$_5ef7[7]][_$_5ef7[6]](value)[_$_5ef7[5]](function () {
            _this2[_$_5ef7[2]][_$_5ef7[1]](_$_5ef7[0]);
          }, function (a) {
            _this2[_$_5ef7[3]] = a[_$_5ef7[4]];
          });
        }
      }, {
        key: "goRegisterPage",
        value: function goRegisterPage() {
          this.router.navigate(["/login/register"]);
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: vhframeworks__WEBPACK_IMPORTED_MODULE_1__["FirebaseAuth"]
      }, {
        type: vhframeworks__WEBPACK_IMPORTED_MODULE_1__["OrdinaryComponent"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-login",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    })], LoginPage);
    /*
    Source code này đã được mã hóa, Cty Viethas nghiêm cấm giải mã trong bất kỳ trường hợp nào.
    Nếu cần cho công việc, vui lòng liên hệ anh chị quản lý mình, để lấy Source code gốc.
    Hãy thể hiện là người văn minh khi tôn trọng, tuân thủ luật sở hữu trí tuệ của Vietnam và Quốc tế.
    */

    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map