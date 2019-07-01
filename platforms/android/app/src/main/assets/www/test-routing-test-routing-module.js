(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["test-routing-test-routing-module"],{

/***/ "./src/app/test-routing/test-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/test-routing/test-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TestRoutingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRoutingPageModule", function() { return TestRoutingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_routing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-routing.page */ "./src/app/test-routing/test-routing.page.ts");







var routes = [
    {
        path: '',
        component: _test_routing_page__WEBPACK_IMPORTED_MODULE_6__["TestRoutingPage"]
    }
];
var TestRoutingPageModule = /** @class */ (function () {
    function TestRoutingPageModule() {
    }
    TestRoutingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_test_routing_page__WEBPACK_IMPORTED_MODULE_6__["TestRoutingPage"]]
        })
    ], TestRoutingPageModule);
    return TestRoutingPageModule;
}());



/***/ }),

/***/ "./src/app/test-routing/test-routing.page.html":
/*!*****************************************************!*\
  !*** ./src/app/test-routing/test-routing.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>test-routing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/test-routing/test-routing.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/test-routing/test-routing.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3Qtcm91dGluZy90ZXN0LXJvdXRpbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/test-routing/test-routing.page.ts":
/*!***************************************************!*\
  !*** ./src/app/test-routing/test-routing.page.ts ***!
  \***************************************************/
/*! exports provided: TestRoutingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestRoutingPage", function() { return TestRoutingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestRoutingPage = /** @class */ (function () {
    function TestRoutingPage() {
    }
    TestRoutingPage.prototype.ngOnInit = function () {
    };
    TestRoutingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-routing',
            template: __webpack_require__(/*! ./test-routing.page.html */ "./src/app/test-routing/test-routing.page.html"),
            styles: [__webpack_require__(/*! ./test-routing.page.scss */ "./src/app/test-routing/test-routing.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestRoutingPage);
    return TestRoutingPage;
}());



/***/ })

}]);
//# sourceMappingURL=test-routing-test-routing-module.js.map