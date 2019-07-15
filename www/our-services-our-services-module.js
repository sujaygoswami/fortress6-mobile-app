(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["our-services-our-services-module"],{

/***/ "./src/app/our-services/our-services.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/our-services/our-services.module.ts ***!
  \*****************************************************/
/*! exports provided: OurServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesPageModule", function() { return OurServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _our_services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-services.page */ "./src/app/our-services/our-services.page.ts");







var routes = [
    {
        path: '',
        component: _our_services_page__WEBPACK_IMPORTED_MODULE_6__["OurServicesPage"]
    }
];
var OurServicesPageModule = /** @class */ (function () {
    function OurServicesPageModule() {
    }
    OurServicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_our_services_page__WEBPACK_IMPORTED_MODULE_6__["OurServicesPage"]]
        })
    ], OurServicesPageModule);
    return OurServicesPageModule;
}());



/***/ }),

/***/ "./src/app/our-services/our-services.page.html":
/*!*****************************************************!*\
  !*** ./src/app/our-services/our-services.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"inner-page\">\n\n\t<div class=\"logo-holder\"><div><img src=\"assets/images/company-logo.png\"></div></div>\n\n\t<div class=\"fixed-page-header\">\n\t\t<div class=\"table-wrap\"><div class=\"table-cell middle-line\">\n\t\t\t<div class=\"main-wrap\">\n\t\t\t\t<span>Our Services</span>\n\t\t\t</div>\n\t\t</div></div>\n\t</div>\n\n\n\t<div class=\"main-content-wrap force-no-pad\">\n\t\t<div class=\"main-wrap\">\t\n\t\t\t<div class=\"entry full-height\">\n\t\t\t\t\n\t\t\t\t<!-- services module -->\n\t\t\t\t<div class=\"services-module full-height clearfix\">\n\t\t\t\t\t\n\n\t\t\t\t\t\t<!-- col -->\n\t\t\t\t\t\t<div class=\"col\" [routerLink]=\"'/service-detail/' + ourservicescontent.id\" detail=\"true\" *ngFor=\"let ourservicescontent of ourserviceContentPage.ourservicescontents\">\n\t\t\t\t\t\t\t<div class=\"main-wrap\">\n\t\t\t\t\t\t\t\t<div class=\"table-wrap\"><div class=\"table-cell middle-line\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa {{ourservicescontent.serviceicon}}\"></i>\n\t\t\t\t\t\t\t\t\t<span>{{ourservicescontent.servicename}}</span>\n\t\t\t\t\t\t\t\t</div></div>\t\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t<!-- col -->\n\n\n\n\t\t\t\t</div>\t\n\t\t\t\t<!-- services module -->\n\n\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\n\n\n\n\t<div class=\"bootom-listing-nav\"><i class=\"fa fa-th\" routerLink=\"/navigation-panel\"></i></div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/our-services/our-services.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/our-services/our-services.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".services-module .col {\n  float: left;\n  width: 50%;\n  height: 50%;\n  box-shadow: 0 0 1px #ccc; }\n  .services-module .col > .main-wrap {\n    height: 100%;\n    text-align: center;\n    color: var(--site-primary-color);\n    padding: 15px; }\n  .services-module .col > .main-wrap .fa {\n      font-size: 50px;\n      display: block;\n      margin-bottom: 10px; }\n  .services-module .col > .main-wrap span {\n      display: block;\n      font-weight: var(--primary-custom-font-light);\n      font-size: 14px;\n      text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWpheWdvc3dhbWkvRG9jdW1lbnRzL1NVSkFZX0dPU1dBTUlfUFJPSkVDVFMvYXBwL2ZvcnRyZXNzNi1tb2JpbGUtYXBwL3NyYy9hcHAvb3VyLXNlcnZpY2VzL291ci1zZXJ2aWNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCx3QkFBd0IsRUFBQTtFQU4xQjtJQVFHLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGFBQWEsRUFBQTtFQVhoQjtNQWNJLGVBQWU7TUFDZixjQUFjO01BQ2QsbUJBQW1CLEVBQUE7RUFoQnZCO01Bb0JJLGNBQWM7TUFDZCw2Q0FBNkM7TUFDN0MsZUFBZTtNQUNmLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvb3VyLXNlcnZpY2VzL291ci1zZXJ2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZXMtbW9kdWxle1xuXG5cdC5jb2x7XG5cdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0d2lkdGg6IDUwJTtcblx0XHRoZWlnaHQ6IDUwJTtcblx0XHRib3gtc2hhZG93OiAwIDAgMXB4ICNjY2M7XG5cdFx0JiA+IC5tYWluLXdyYXB7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRjb2xvcjogdmFyKC0tc2l0ZS1wcmltYXJ5LWNvbG9yKTtcblx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cblx0XHRcdC5mYXtcblx0XHRcdFx0Zm9udC1zaXplOiA1MHB4O1xuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdH1cblxuXHRcdFx0c3Bhbntcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiB2YXIoLS1wcmltYXJ5LWN1c3RvbS1mb250LWxpZ2h0KTtcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/our-services/our-services.page.ts":
/*!***************************************************!*\
  !*** ./src/app/our-services/our-services.page.ts ***!
  \***************************************************/
/*! exports provided: OurServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurServicesPage", function() { return OurServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_our_services_content_our_services_content_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/our-services-content/our-services-content.page */ "./src/app/services/our-services-content/our-services-content.page.ts");



var OurServicesPage = /** @class */ (function () {
    function OurServicesPage(ourserviceContentPage) {
        this.ourserviceContentPage = ourserviceContentPage;
    }
    OurServicesPage.prototype.ngOnInit = function () {
    };
    OurServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-services',
            template: __webpack_require__(/*! ./our-services.page.html */ "./src/app/our-services/our-services.page.html"),
            styles: [__webpack_require__(/*! ./our-services.page.scss */ "./src/app/our-services/our-services.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_our_services_content_our_services_content_page__WEBPACK_IMPORTED_MODULE_2__["OurServicesContentPage"]])
    ], OurServicesPage);
    return OurServicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=our-services-our-services-module.js.map