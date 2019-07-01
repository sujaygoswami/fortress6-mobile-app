(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-detail-service-detail-module"],{

/***/ "./src/app/service-detail/service-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/service-detail/service-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: ServiceDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailPageModule", function() { return ServiceDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service-detail.page */ "./src/app/service-detail/service-detail.page.ts");







var routes = [
    {
        path: '',
        component: _service_detail_page__WEBPACK_IMPORTED_MODULE_6__["ServiceDetailPage"]
    }
];
var ServiceDetailPageModule = /** @class */ (function () {
    function ServiceDetailPageModule() {
    }
    ServiceDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_service_detail_page__WEBPACK_IMPORTED_MODULE_6__["ServiceDetailPage"]]
        })
    ], ServiceDetailPageModule);
    return ServiceDetailPageModule;
}());



/***/ }),

/***/ "./src/app/service-detail/service-detail.page.html":
/*!*********************************************************!*\
  !*** ./src/app/service-detail/service-detail.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"inner-page\">\n\n\t<div class=\"logo-holder no-background fixed-header\"><div><img src=\"assets/images/company-logo.png\"></div></div>\n\n\n\n\t<div class=\"main-content-wrap force-no-pad\">\n\t\t<div class=\"main-wrap\">\t\n\t\t\t<div class=\"entry full-height\">\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t<div class=\"service-detail-banner\" [style.backgroundImage]=\"'url(' + ourservicescontent?.bg + ')'\"></div>\n\n\t\t\t\t<div class=\"detail-header\">\n\t\t\t\t\t<div class=\"table-wrap\"><div class=\"table-cell middle-line\">\n\t\t\t\t\t\t<i class=\"fa {{ourservicescontent?.serviceicon}}\"></i>\n\t\t\t\t\t\t<span>{{ourservicescontent?.servicename}}</span>\n\t\t\t\t\t</div></div>\t\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"service-detail-content-holder\">\n\t\t\t\t\t<div class=\"main-wrap\">\n\t\t\t\t\t\t<div class=\"content-section\">\n\t\t\t\t\t\t\t<div [innerHTML]=\"ourservicescontent?.content\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\t\n\n\n\t\t\t</div>\n\t\t</div>\t\n\t</div>\n\n\n\n\n\n\t<!-- <span>{{ ourservicescontent?.servicename }}</span> -->\n\n\n\n\n\n\t<div class=\"bootom-listing-nav\"><i class=\"fa fa-th\" routerLink=\"/navigation-panel\"></i><i class=\"fa fa-chevron-left\" routerLink=\"/our-services\"></i></div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/service-detail/service-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/service-detail/service-detail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content-wrap {\n  height: 90vh; }\n\n.service-detail-banner {\n  position: fixed;\n  width: 100%;\n  left: 0px;\n  top: 0px;\n  height: 90vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center top; }\n\n.service-detail-banner:before {\n    position: fixed;\n    content: ' ';\n    width: 100%;\n    height: 90vh;\n    z-index: 5;\n    background-color: rgba(0, 0, 0, 0.7);\n    left: 0px;\n    top: 0px; }\n\n.service-detail-content-holder {\n  position: fixed;\n  width: 100%;\n  left: 0px;\n  top: 40vh;\n  height: 50vh;\n  z-index: 10; }\n\n.service-detail-content-holder .main-wrap {\n    position: fixed;\n    width: 100%;\n    left: 0px;\n    top: 40vh;\n    height: 50vh;\n    background-color: #fff;\n    border-radius: 30px 30px 0 0;\n    padding: 20px; }\n\n.service-detail-content-holder .main-wrap .content-section {\n      overflow-y: auto;\n      overflow-x: hidden;\n      height: 100%; }\n\n.detail-header {\n  text-align: center;\n  height: 40vh;\n  z-index: 10;\n  position: fixed;\n  width: 100%;\n  left: 0px;\n  top: 0px; }\n\n.detail-header i {\n    display: block;\n    font-size: 60px;\n    color: var(--site-primary-color);\n    margin-top: 10vh;\n    margin-bottom: 10px; }\n\n.detail-header span {\n    display: block;\n    font-size: 22px;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: var(--primary-custom-font-light); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWpheWdvc3dhbWkvRG9jdW1lbnRzL1NVSkFZX0dPU1dBTUlfUFJPSkVDVFMvTGVhcm4gSW9uaWMvVGFiLU1lbnUtV2l0aC1EZXRhaWwvY29tcGFueS1hcHAvc3JjL2FwcC9zZXJ2aWNlLWRldGFpbC9zZXJ2aWNlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFZLEVBQUE7O0FBR2I7RUFDQyxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsK0JBQStCLEVBQUE7O0FBUmhDO0lBWUUsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixvQ0FBaUM7SUFDakMsU0FBUztJQUNULFFBQVEsRUFBQTs7QUFJVjtFQUNDLGVBQWU7RUFDZixXQUFXO0VBQ1gsU0FBUztFQUNULFNBQVM7RUFDVCxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQU5aO0lBVUUsZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QsU0FBUztJQUNULFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGFBQWEsRUFBQTs7QUFqQmY7TUFvQkcsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixZQUFZLEVBQUE7O0FBS2Y7RUFFQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRLEVBQUE7O0FBUlQ7SUFZRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7O0FBaEJyQjtJQW9CRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsNkNBQTZDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlLWRldGFpbC9zZXJ2aWNlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50LXdyYXB7XG5cdGhlaWdodDogOTB2aDtcbn1cblxuLnNlcnZpY2UtZGV0YWlsLWJhbm5lcntcblx0cG9zaXRpb246IGZpeGVkO1xuXHR3aWR0aDogMTAwJTtcblx0bGVmdDogMHB4O1xuXHR0b3A6IDBweDtcblx0aGVpZ2h0OiA5MHZoO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuXG5cdCY6YmVmb3Jle1xuXG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdGNvbnRlbnQ6ICcgJztcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDkwdmg7XG5cdFx0ei1pbmRleDogNTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XG5cdFx0bGVmdDogMHB4O1xuXHRcdHRvcDogMHB4O1xuXHR9XG59XG5cbi5zZXJ2aWNlLWRldGFpbC1jb250ZW50LWhvbGRlcntcblx0cG9zaXRpb246IGZpeGVkO1xuXHR3aWR0aDogMTAwJTtcblx0bGVmdDogMHB4O1xuXHR0b3A6IDQwdmg7XG5cdGhlaWdodDogNTB2aDtcblx0ei1pbmRleDogMTA7XG5cdFxuXG5cdC5tYWluLXdyYXB7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGxlZnQ6IDBweDtcblx0XHR0b3A6IDQwdmg7XG5cdFx0aGVpZ2h0OiA1MHZoO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0Ym9yZGVyLXJhZGl1czogMzBweCAzMHB4IDAgMDtcblx0XHRwYWRkaW5nOiAyMHB4O1xuXG5cdFx0LmNvbnRlbnQtc2VjdGlvbntcblx0XHRcdG92ZXJmbG93LXk6IGF1dG87XG5cdFx0XHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0fVxuXHR9XG59XG5cbi5kZXRhaWwtaGVhZGVye1xuXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0aGVpZ2h0OiA0MHZoO1xuXHR6LWluZGV4OiAxMDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR3aWR0aDogMTAwJTtcblx0bGVmdDogMHB4O1xuXHR0b3A6IDBweDtcblxuXG5cdGl7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Zm9udC1zaXplOiA2MHB4O1xuXHRcdGNvbG9yOiB2YXIoLS1zaXRlLXByaW1hcnktY29sb3IpO1xuXHRcdG1hcmdpbi10b3A6IDEwdmg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxuXG5cdHNwYW57XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Zm9udC1zaXplOiAyMnB4O1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Zm9udC13ZWlnaHQ6IHZhcigtLXByaW1hcnktY3VzdG9tLWZvbnQtbGlnaHQpO1xuXHR9XG59XG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/service-detail/service-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/service-detail/service-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: ServiceDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDetailPage", function() { return ServiceDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_our_services_content_our_services_content_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/our-services-content/our-services-content.page */ "./src/app/services/our-services-content/our-services-content.page.ts");




var ServiceDetailPage = /** @class */ (function () {
    function ServiceDetailPage(route, ourserviceContentPage) {
        this.route = route;
        this.ourserviceContentPage = ourserviceContentPage;
    }
    ServiceDetailPage.prototype.ionViewWillEnter = function () {
        var ourservicecontentId = this.route.snapshot.paramMap.get('id');
        this.ourservicescontent = this.ourserviceContentPage.getTodo(ourservicecontentId);
    };
    ServiceDetailPage.prototype.ngOnInit = function () {
    };
    ServiceDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-detail',
            template: __webpack_require__(/*! ./service-detail.page.html */ "./src/app/service-detail/service-detail.page.html"),
            styles: [__webpack_require__(/*! ./service-detail.page.scss */ "./src/app/service-detail/service-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_our_services_content_our_services_content_page__WEBPACK_IMPORTED_MODULE_3__["OurServicesContentPage"]])
    ], ServiceDetailPage);
    return ServiceDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=service-detail-service-detail-module.js.map