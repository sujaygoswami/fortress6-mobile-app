(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foundation-foundation-module"],{

/***/ "./src/app/foundation/foundation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/foundation/foundation.module.ts ***!
  \*************************************************/
/*! exports provided: FoundationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoundationPageModule", function() { return FoundationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foundation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foundation.page */ "./src/app/foundation/foundation.page.ts");







var routes = [
    {
        path: '',
        component: _foundation_page__WEBPACK_IMPORTED_MODULE_6__["FoundationPage"]
    }
];
var FoundationPageModule = /** @class */ (function () {
    function FoundationPageModule() {
    }
    FoundationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_foundation_page__WEBPACK_IMPORTED_MODULE_6__["FoundationPage"]]
        })
    ], FoundationPageModule);
    return FoundationPageModule;
}());



/***/ }),

/***/ "./src/app/foundation/foundation.page.html":
/*!*************************************************!*\
  !*** ./src/app/foundation/foundation.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"inner-page\">\n\n\t<div class=\"logo-holder\"><div><img src=\"assets/images/company-logo.png\"></div></div>\n\t\n\t<div class=\"fixed-page-header\">\n\t\t<div class=\"table-wrap\"><div class=\"table-cell middle-line\">\n\t\t\t<div class=\"main-wrap\">\n\t\t\t\t<span>Foundation</span>\n\t\t\t</div>\n\t\t</div></div>\n\t</div>\n\n\t<div class=\"main-content-wrap\">\n\t\t<div class=\"main-wrap\">\t\n\t\t\t<div class=\"entry\">\n\t\t\t\t<p>Fortress6 Technologies is an obsessive bunch of young and enthusiast professionals who strive to offer innovative web development, web design and managed outsourcing services with a unique combination of technology and creativity. Our constant struggle and commitment to quality are the main driving forces behind our unprecedented success and growth.</p>\n\t\t\t\t<p>With deep industry experience and technical expertise of more than ten years, we got the opportunity to work closely with some top organizations and technological brands and stimulating them with core IT solutions and marketing ideas. We offer tailored business solutions to our clients and this makes us fortunate to work with more than 100 clients across the globe.</p>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\n\t<div class=\"bootom-listing-nav\"><i class=\"fa fa-th\" routerLink=\"/navigation-panel\"></i></div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/foundation/foundation.page.scss":
/*!*************************************************!*\
  !*** ./src/app/foundation/foundation.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/foundation/foundation.page.ts":
/*!***********************************************!*\
  !*** ./src/app/foundation/foundation.page.ts ***!
  \***********************************************/
/*! exports provided: FoundationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoundationPage", function() { return FoundationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FoundationPage = /** @class */ (function () {
    function FoundationPage() {
    }
    FoundationPage.prototype.ngOnInit = function () {
    };
    FoundationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-foundation',
            template: __webpack_require__(/*! ./foundation.page.html */ "./src/app/foundation/foundation.page.html"),
            styles: [__webpack_require__(/*! ./foundation.page.scss */ "./src/app/foundation/foundation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FoundationPage);
    return FoundationPage;
}());



/***/ })

}]);
//# sourceMappingURL=foundation-foundation-module.js.map