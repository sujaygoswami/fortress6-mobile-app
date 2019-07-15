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

module.exports = ".main-content-wrap {\n  height: 90vh; }\n\n.service-detail-banner {\n  position: fixed;\n  width: 100%;\n  left: 0px;\n  top: 0px;\n  height: 90vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center top; }\n\n.service-detail-banner:before {\n    position: fixed;\n    content: ' ';\n    width: 100%;\n    height: 90vh;\n    z-index: 5;\n    background-color: rgba(0, 0, 0, 0.7);\n    left: 0px;\n    top: 0px; }\n\n.service-detail-content-holder {\n  position: fixed;\n  width: 100%;\n  left: 0px;\n  top: 40vh;\n  height: 50vh;\n  z-index: 10; }\n\n.service-detail-content-holder .main-wrap {\n    position: fixed;\n    width: 100%;\n    left: 0px;\n    top: 40vh;\n    height: 50vh;\n    background-color: #fff;\n    border-radius: 30px 30px 0 0;\n    padding: 20px; }\n\n.service-detail-content-holder .main-wrap .content-section {\n      overflow-y: auto;\n      overflow-x: hidden;\n      height: 100%; }\n\n.detail-header {\n  text-align: center;\n  height: 40vh;\n  z-index: 10;\n  position: fixed;\n  width: 100%;\n  left: 0px;\n  top: 0px; }\n\n.detail-header i {\n    display: block;\n    font-size: 60px;\n    color: var(--site-primary-color);\n    margin-top: 10vh;\n    margin-bottom: 10px; }\n\n.detail-header span {\n    display: block;\n    font-size: 22px;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: var(--primary-custom-font-light); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWpheWdvc3dhbWkvRG9jdW1lbnRzL1NVSkFZX0dPU1dBTUlfUFJPSkVDVFMvYXBwL2ZvcnRyZXNzNi1tb2JpbGUtYXBwL3NyYy9hcHAvc2VydmljZS1kZXRhaWwvc2VydmljZS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBWSxFQUFBOztBQUdiO0VBQ0MsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLCtCQUErQixFQUFBOztBQVJoQztJQVlFLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysb0NBQWlDO0lBQ2pDLFNBQVM7SUFDVCxRQUFRLEVBQUE7O0FBSVY7RUFDQyxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7RUFDVCxTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFOWjtJQVVFLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixhQUFhLEVBQUE7O0FBakJmO01Bb0JHLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsWUFBWSxFQUFBOztBQUtmO0VBRUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsUUFBUSxFQUFBOztBQVJUO0lBWUUsY0FBYztJQUNkLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBOztBQWhCckI7SUFvQkUsY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLDZDQUE2QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZS1kZXRhaWwvc2VydmljZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudC13cmFwe1xuXHRoZWlnaHQ6IDkwdmg7XG59XG5cbi5zZXJ2aWNlLWRldGFpbC1iYW5uZXJ7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0d2lkdGg6IDEwMCU7XG5cdGxlZnQ6IDBweDtcblx0dG9wOiAwcHg7XG5cdGhlaWdodDogOTB2aDtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcblxuXHQmOmJlZm9yZXtcblxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRjb250ZW50OiAnICc7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiA5MHZoO1xuXHRcdHotaW5kZXg6IDU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xuXHRcdGxlZnQ6IDBweDtcblx0XHR0b3A6IDBweDtcblx0fVxufVxuXG4uc2VydmljZS1kZXRhaWwtY29udGVudC1ob2xkZXJ7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0d2lkdGg6IDEwMCU7XG5cdGxlZnQ6IDBweDtcblx0dG9wOiA0MHZoO1xuXHRoZWlnaHQ6IDUwdmg7XG5cdHotaW5kZXg6IDEwO1xuXHRcblxuXHQubWFpbi13cmFwe1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRsZWZ0OiAwcHg7XG5cdFx0dG9wOiA0MHZoO1xuXHRcdGhlaWdodDogNTB2aDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwIDA7XG5cdFx0cGFkZGluZzogMjBweDtcblxuXHRcdC5jb250ZW50LXNlY3Rpb257XG5cdFx0XHRvdmVyZmxvdy15OiBhdXRvO1xuXHRcdFx0b3ZlcmZsb3cteDogaGlkZGVuO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdH1cblx0fVxufVxuXG4uZGV0YWlsLWhlYWRlcntcblxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGhlaWdodDogNDB2aDtcblx0ei1pbmRleDogMTA7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0d2lkdGg6IDEwMCU7XG5cdGxlZnQ6IDBweDtcblx0dG9wOiAwcHg7XG5cblxuXHRpe1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGZvbnQtc2l6ZTogNjBweDtcblx0XHRjb2xvcjogdmFyKC0tc2l0ZS1wcmltYXJ5LWNvbG9yKTtcblx0XHRtYXJnaW4tdG9wOiAxMHZoO1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdH1cblxuXHRzcGFue1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdGZvbnQtc2l6ZTogMjJweDtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtd2VpZ2h0OiB2YXIoLS1wcmltYXJ5LWN1c3RvbS1mb250LWxpZ2h0KTtcblx0fVxufVxuXG5cblxuXG5cblxuXG5cblxuXG4iXX0= */"

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