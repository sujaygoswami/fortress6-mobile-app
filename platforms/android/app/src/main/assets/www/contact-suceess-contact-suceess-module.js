(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-suceess-contact-suceess-module"],{

/***/ "./src/app/contact-suceess/contact-suceess.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/contact-suceess/contact-suceess.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactSuceessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSuceessPageModule", function() { return ContactSuceessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_suceess_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-suceess.page */ "./src/app/contact-suceess/contact-suceess.page.ts");







var routes = [
    {
        path: '',
        component: _contact_suceess_page__WEBPACK_IMPORTED_MODULE_6__["ContactSuceessPage"]
    }
];
var ContactSuceessPageModule = /** @class */ (function () {
    function ContactSuceessPageModule() {
    }
    ContactSuceessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_suceess_page__WEBPACK_IMPORTED_MODULE_6__["ContactSuceessPage"]]
        })
    ], ContactSuceessPageModule);
    return ContactSuceessPageModule;
}());



/***/ }),

/***/ "./src/app/contact-suceess/contact-suceess.page.html":
/*!***********************************************************!*\
  !*** ./src/app/contact-suceess/contact-suceess.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"inner-page\">\r\n<div class=\"logo-holder\">\r\n\t<div class=\"service-menu left\">\r\n\t\t<a *ngFor=\"let constantsvalue of constantpage.constantsvaluesleft\" href=\"{{constantsvalue.action}}: {{constantsvalue.content}}\"><i class=\"fa {{constantsvalue.icon}}\"></i></a>\r\n\t</div>\r\n\t<div class=\"logo\"><img src=\"assets/images/company-logo.png\"></div>\r\n\t<div class=\"service-menu right\">\r\n\t\t<a *ngFor=\"let constantsvalue of constantpage.constantsvaluesright\" href=\"{{constantsvalue.content}}\" target=\"_blank\"><i class=\"fa {{constantsvalue.icon}}\"></i></a>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"main-content-wrap\">\r\n\t<div class=\"main-wrap\">\r\n\t\t<div class=\"entry element-gap element-gap-default\" *ngFor=\"let content of pageContent\">\r\n\t\t\t<h1 class=\"page-title\" [innerHTML]=\"content.title\"></h1>\r\n\t\t\t<div [innerHTML]=\"content.text\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"bootom-listing-nav\"><i class=\"fa fa-th\" routerLink=\"/navigation-panel\"></i></div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/contact-suceess/contact-suceess.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/contact-suceess/contact-suceess.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3Qtc3VjZWVzcy9jb250YWN0LXN1Y2Vlc3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact-suceess/contact-suceess.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/contact-suceess/contact-suceess.page.ts ***!
  \*********************************************************/
/*! exports provided: ContactSuceessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactSuceessPage", function() { return ContactSuceessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_constants_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants.page */ "./src/app/constants/constants.page.ts");



var ContactSuceessPage = /** @class */ (function () {
    function ContactSuceessPage(constantpage) {
        this.constantpage = constantpage;
        this.pageContent = [
            {
                title: "Thank you <i class='fa fa-smile-o'></i>",
                text: "<p>Your information and query has been submitted to us successfuly. We will back to you very soon.</p>",
            }
        ];
    }
    ContactSuceessPage.prototype.ngOnInit = function () {
    };
    ContactSuceessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-suceess',
            template: __webpack_require__(/*! ./contact-suceess.page.html */ "./src/app/contact-suceess/contact-suceess.page.html"),
            styles: [__webpack_require__(/*! ./contact-suceess.page.scss */ "./src/app/contact-suceess/contact-suceess.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_constants_constants_page__WEBPACK_IMPORTED_MODULE_2__["ConstantsPage"]])
    ], ContactSuceessPage);
    return ContactSuceessPage;
}());



/***/ })

}]);
//# sourceMappingURL=contact-suceess-contact-suceess-module.js.map