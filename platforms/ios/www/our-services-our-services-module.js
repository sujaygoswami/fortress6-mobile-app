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

module.exports = "<ion-content class=\"inner-page\">\r\n\r\n\t<div class=\"logo-holder\">\r\n\r\n\t\t<div class=\"service-menu left\">\r\n\t\t\t<a *ngFor=\"let constantsvalue of constantpage.constantsvaluesleft\" href=\"{{constantsvalue.action}}: {{constantsvalue.content}}\"><i class=\"fa {{constantsvalue.icon}}\"></i></a>\r\n\t\t</div>\t\r\n\r\n\t\t<div class=\"logo\"><img src=\"assets/images/company-logo.png\"></div>\r\n\r\n\r\n\t\t<div class=\"service-menu right\">\r\n\t\t\t<a *ngFor=\"let constantsvalue of constantpage.constantsvaluesright\" href=\"{{constantsvalue.content}}\" target=\"_blank\"><i class=\"fa {{constantsvalue.icon}}\"></i></a>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\t\r\n\r\n\r\n\t<div class=\"main-content-wrap force-no-pad\">\r\n\t\t<div class=\"main-wrap\">\t\r\n\t\t\t<div class=\"entry full-height\">\r\n\t\t\t\t\r\n\t\t\t\t<!-- services module -->\r\n\t\t\t\t<div class=\"services-module full-height clearfix\">\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t\t\t<!-- col -->\r\n\t\t\t\t\t\t<div class=\"col\" [routerLink]=\"'/service-detail/' + ourservicescontent.id\" detail=\"true\" *ngFor=\"let ourservicescontent of ourserviceContentPage.ourservicescontents\">\r\n\t\t\t\t\t\t\t<div class=\"main-wrap\">\r\n\t\t\t\t\t\t\t\t<div class=\"table-wrap\"><div class=\"table-cell middle-line\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa {{ourservicescontent.serviceicon}}\"></i>\r\n\t\t\t\t\t\t\t\t\t<span>{{ourservicescontent.servicename}}</span>\r\n\t\t\t\t\t\t\t\t</div></div>\t\r\n\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t<!-- col -->\r\n\r\n\r\n\r\n\t\t\t\t</div>\t\r\n\t\t\t\t<!-- services module -->\r\n\r\n\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\r\n\r\n\r\n\t<div class=\"bootom-listing-nav\"><i class=\"fa fa-th\" routerLink=\"/navigation-panel\"></i></div>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/our-services/our-services.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/our-services/our-services.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".services-module .col {\n  float: left;\n  width: 50%;\n  height: 50%;\n  box-shadow: 0 0 1px #ccc; }\n  .services-module .col > .main-wrap {\n    height: 100%;\n    text-align: center;\n    color: var(--site-primary-color);\n    padding: 15px; }\n  .services-module .col > .main-wrap .fa {\n      font-size: 50px;\n      display: block;\n      margin-bottom: 10px; }\n  .services-module .col > .main-wrap span {\n      display: block;\n      font-weight: var(--primary-custom-font-light);\n      font-size: 14px;\n      text-transform: uppercase; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyLXNlcnZpY2VzL0U6XFxTdWpheSBHb3N3YW1pXFxQcm9qZWN0c1xcYXBwXFxmb3J0cmVzczYtbW9iaWxlLWFwcC9zcmNcXGFwcFxcb3VyLXNlcnZpY2VzXFxvdXItc2VydmljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsd0JBQXdCLEVBQUE7RUFOMUI7SUFRRyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxhQUFhLEVBQUE7RUFYaEI7TUFjSSxlQUFlO01BQ2YsY0FBYztNQUNkLG1CQUFtQixFQUFBO0VBaEJ2QjtNQW9CSSxjQUFjO01BQ2QsNkNBQTZDO01BQzdDLGVBQWU7TUFDZix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL291ci1zZXJ2aWNlcy9vdXItc2VydmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZpY2VzLW1vZHVsZXtcclxuXHJcblx0LmNvbHtcclxuXHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0d2lkdGg6IDUwJTtcclxuXHRcdGhlaWdodDogNTAlO1xyXG5cdFx0Ym94LXNoYWRvdzogMCAwIDFweCAjY2NjO1xyXG5cdFx0JiA+IC5tYWluLXdyYXB7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRjb2xvcjogdmFyKC0tc2l0ZS1wcmltYXJ5LWNvbG9yKTtcclxuXHRcdFx0cGFkZGluZzogMTVweDtcclxuXHJcblx0XHRcdC5mYXtcclxuXHRcdFx0XHRmb250LXNpemU6IDUwcHg7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3BhbntcclxuXHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRmb250LXdlaWdodDogdmFyKC0tcHJpbWFyeS1jdXN0b20tZm9udC1saWdodCk7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */"

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
/* harmony import */ var _constants_constants_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants.page */ "./src/app/constants/constants.page.ts");




var OurServicesPage = /** @class */ (function () {
    function OurServicesPage(ourserviceContentPage, constantpage) {
        this.ourserviceContentPage = ourserviceContentPage;
        this.constantpage = constantpage;
    }
    OurServicesPage.prototype.ngOnInit = function () {
    };
    OurServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-services',
            template: __webpack_require__(/*! ./our-services.page.html */ "./src/app/our-services/our-services.page.html"),
            styles: [__webpack_require__(/*! ./our-services.page.scss */ "./src/app/our-services/our-services.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_our_services_content_our_services_content_page__WEBPACK_IMPORTED_MODULE_2__["OurServicesContentPage"], _constants_constants_page__WEBPACK_IMPORTED_MODULE_3__["ConstantsPage"]])
    ], OurServicesPage);
    return OurServicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=our-services-our-services-module.js.map