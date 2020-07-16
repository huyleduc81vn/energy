(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n    <ion-tab-bar slot=\"bottom\">\r\n        <ion-tab-button tab=\"overviews\">\r\n            <ion-ripple-effect></ion-ripple-effect>\r\n            <ion-icon src=\"./assets/icon/overviews.svg\"></ion-icon>\r\n            <ion-label>Test IOT</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"reports\">\r\n            <ion-ripple-effect></ion-ripple-effect>\r\n            <ion-icon src=\"./assets/icon/reports.svg\"></ion-icon>\r\n            <ion-label>Test Database</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"products\">\r\n            <ion-ripple-effect></ion-ripple-effect>\r\n            <ion-icon src=\"./assets/icon/products.svg\"></ion-icon>\r\n            <ion-label>Sản phẩm</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"sell\">\r\n            <ion-ripple-effect></ion-ripple-effect>\r\n            <ion-icon src=\"./assets/icon/sell.svg\"></ion-icon>\r\n            <ion-label>Bán hàng</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <!-- <ion-tab-button tab=\"other\">\r\n            <ion-ripple-effect></ion-ripple-effect>\r\n            <ion-icon src=\"./assets/icon/other.svg\"></ion-icon>\r\n            <ion-label>Khác</ion-label>\r\n        </ion-tab-button> -->\r\n    </ion-tab-bar>\r\n</ion-tabs>");

/***/ }),

/***/ "./src/app/pages/tabs/tabs-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'overviews',
                loadChildren: () => __webpack_require__.e(/*! import() | overviews-overviews-module */ "overviews-overviews-module").then(__webpack_require__.bind(null, /*! ../overviews/overviews.module */ "./src/app/pages/overviews/overviews.module.ts")).then(m => m.OverviewsPageModule)
            },
            {
                path: 'reports',
                loadChildren: () => __webpack_require__.e(/*! import() | reports-reports-module */ "reports-reports-module").then(__webpack_require__.bind(null, /*! ../reports/reports.module */ "./src/app/pages/reports/reports.module.ts")).then(m => m.ReportsPageModule)
            },
            {
                path: 'products',
                loadChildren: () => __webpack_require__.e(/*! import() | products-products-module */ "products-products-module").then(__webpack_require__.bind(null, /*! ../products/products.module */ "./src/app/pages/products/products.module.ts")).then(m => m.ProductsPageModule)
            },
            {
                path: 'sell',
                loadChildren: () => __webpack_require__.e(/*! import() | sell-sell-module */ "sell-sell-module").then(__webpack_require__.bind(null, /*! ../sell/sell.module */ "./src/app/pages/sell/sell.module.ts")).then(m => m.SellPageModule)
            },
            // {
            //   path: 'other',
            //   loadChildren: () => import('../other/other.module').then(m => m.OtherPageModule)
            // },
            {
                path: '',
                redirectTo: 'overviews',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'overviews',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/tabs/tabs.page.ts");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/pages/tabs/tabs-routing.module.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-button {\n  --background-focused: var(--ion-color-default_green);\n  --color-selected: var(--ion-color-default_green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy9DOlxcQ09ESU5HXFx2aWV0aGFzIDE1MDdcXENhcGFjaXRvci1TdGFuZGFyZC9zcmNcXGFwcFxccGFnZXNcXHRhYnNcXHRhYnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0RBQUE7RUFDQSxnREFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWItYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLWRlZmF1bHRfZ3JlZW4pO1xyXG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1kZWZhdWx0X2dyZWVuKTtcclxufVxyXG4iLCJpb24tdGFiLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1pb24tY29sb3ItZGVmYXVsdF9ncmVlbik7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1kZWZhdWx0X2dyZWVuKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/tabs/tabs.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module-es2015.js.map