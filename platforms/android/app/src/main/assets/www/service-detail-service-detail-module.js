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

module.exports = "<ion-content class=\"inner-page\">\r\n\r\n\t<div class=\"logo-holder\">\r\n\r\n\t\t<div class=\"service-menu left\">\r\n\t\t\t<a href=\"mailto: contact(at)fortress6.com\"><i class=\"fa fa-envelope\"></i></a>\r\n\t\t\t<a href=\"tel: 03365555256\"><i class=\"fa fa-phone\"></i></a>\r\n\t\t</div>\t\r\n\r\n\t\t<div class=\"logo\"><img src=\"assets/images/company-logo.png\"></div>\r\n\r\n\r\n\t\t<div class=\"service-menu right\">\r\n\t\t\t<a href=\"https://www.facebook.com/Fortress6-Technologies-1637880229835858/\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\r\n\t\t\t<a href=\"https://twitter.com/Fortress6Tech\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\r\n\t<div class=\"main-content-wrap force-no-pad\">\r\n\t\t<div class=\"main-wrap\">\t\r\n\t\t\t<div class=\"entry full-height\">\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"service-detail-banner\" [style.backgroundImage]=\"'url(' + ourservicescontent?.bg + ')'\"></div>\r\n\r\n\t\t\t\t<div class=\"detail-header\">\r\n\t\t\t\t\t<div class=\"table-wrap\"><div class=\"table-cell middle-line\">\r\n\t\t\t\t\t\t<i class=\"fa {{ourservicescontent?.serviceicon}}\"></i>\r\n\t\t\t\t\t\t<span>{{ourservicescontent?.servicename}}</span>\r\n\t\t\t\t\t</div></div>\t\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"service-detail-content-holder\">\r\n\t\t\t\t\t<div class=\"main-wrap\">\r\n\t\t\t\t\t\t<div class=\"content-section\">\r\n\t\t\t\t\t\t\t<div [innerHTML]=\"ourservicescontent?.content\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t</div>\t\r\n\r\n\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</div>\r\n\r\n\r\n\r\n\r\n\r\n\t<!-- <span>{{ ourservicescontent?.servicename }}</span> -->\r\n\r\n\r\n\r\n\r\n\r\n\t<div class=\"bootom-listing-nav\"><i class=\"fa fa-th\" routerLink=\"/navigation-panel\"></i><i class=\"fa fa-chevron-left\" routerLink=\"/our-services\"></i></div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/service-detail/service-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/service-detail/service-detail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content-wrap {\n  height: 75vh; }\n\n.service-detail-banner {\n  position: fixed;\n  width: 100%;\n  left: 0px;\n  top: 15vh;\n  height: 65vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center top; }\n\n.service-detail-banner:before {\n    position: fixed;\n    content: ' ';\n    width: 100%;\n    height: 65vh;\n    z-index: 5;\n    background-color: rgba(0, 0, 0, 0.7);\n    left: 0px;\n    top: 15vh; }\n\n.service-detail-content-holder {\n  position: fixed;\n  width: 100%;\n  left: 0px;\n  top: 40vh;\n  height: 50vh;\n  z-index: 10; }\n\n.service-detail-content-holder .main-wrap {\n    position: fixed;\n    width: 100%;\n    left: 0px;\n    top: 40vh;\n    height: 50vh;\n    background-color: #fff;\n    padding: 20px; }\n\n.service-detail-content-holder .main-wrap .content-section {\n      overflow-y: auto;\n      overflow-x: hidden;\n      height: 100%; }\n\n.detail-header {\n  text-align: center;\n  height: 40vh;\n  z-index: 10;\n  position: fixed;\n  width: 100%;\n  left: 0px;\n  top: 3vh; }\n\n.detail-header i {\n    display: block;\n    font-size: 60px;\n    color: var(--site-primary-color);\n    margin-top: 10vh;\n    margin-bottom: 10px; }\n\n.detail-header span {\n    display: block;\n    font-size: 22px;\n    color: #fff;\n    text-transform: uppercase;\n    font-weight: var(--primary-custom-font-light); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZS1kZXRhaWwvRTpcXFN1amF5IEdvc3dhbWlcXFByb2plY3RzXFxhcHBcXGZvcnRyZXNzNi1tb2JpbGUtYXBwL3NyY1xcYXBwXFxzZXJ2aWNlLWRldGFpbFxcc2VydmljZS1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsWUFBWSxFQUFBOztBQUdiO0VBQ0MsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsU0FBUztFQUNULFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLCtCQUErQixFQUFBOztBQVJoQztJQVlFLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysb0NBQWlDO0lBQ2pDLFNBQVM7SUFDVCxTQUFTLEVBQUE7O0FBSVg7RUFDQyxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7RUFDVCxTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFOWjtJQVVFLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztJQUNULFNBQVM7SUFDVCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWEsRUFBQTs7QUFoQmY7TUFtQkcsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixZQUFZLEVBQUE7O0FBS2Y7RUFFQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRLEVBQUE7O0FBUlQ7SUFZRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7O0FBaEJyQjtJQW9CRSxjQUFjO0lBQ2QsZUFBZTtJQUNmLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsNkNBQTZDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlLWRldGFpbC9zZXJ2aWNlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50LXdyYXB7XHJcblx0aGVpZ2h0OiA3NXZoO1xyXG59XHJcblxyXG4uc2VydmljZS1kZXRhaWwtYmFubmVye1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRsZWZ0OiAwcHg7XHJcblx0dG9wOiAxNXZoO1xyXG5cdGhlaWdodDogNjV2aDtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuXHJcblx0JjpiZWZvcmV7XHJcblxyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Y29udGVudDogJyAnO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDY1dmg7XHJcblx0XHR6LWluZGV4OiA1O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xyXG5cdFx0bGVmdDogMHB4O1xyXG5cdFx0dG9wOiAxNXZoO1xyXG5cdH1cclxufVxyXG5cclxuLnNlcnZpY2UtZGV0YWlsLWNvbnRlbnQtaG9sZGVye1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRsZWZ0OiAwcHg7XHJcblx0dG9wOiA0MHZoO1xyXG5cdGhlaWdodDogNTB2aDtcclxuXHR6LWluZGV4OiAxMDtcclxuXHRcclxuXHJcblx0Lm1haW4td3JhcHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bGVmdDogMHB4O1xyXG5cdFx0dG9wOiA0MHZoO1xyXG5cdFx0aGVpZ2h0OiA1MHZoO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRcdHBhZGRpbmc6IDIwcHg7XHJcblxyXG5cdFx0LmNvbnRlbnQtc2VjdGlvbntcclxuXHRcdFx0b3ZlcmZsb3cteTogYXV0bztcclxuXHRcdFx0b3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uZGV0YWlsLWhlYWRlcntcclxuXHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGhlaWdodDogNDB2aDtcclxuXHR6LWluZGV4OiAxMDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bGVmdDogMHB4O1xyXG5cdHRvcDogM3ZoO1xyXG5cclxuXHJcblx0aXtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0Zm9udC1zaXplOiA2MHB4O1xyXG5cdFx0Y29sb3I6IHZhcigtLXNpdGUtcHJpbWFyeS1jb2xvcik7XHJcblx0XHRtYXJnaW4tdG9wOiAxMHZoO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcblxyXG5cdHNwYW57XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdGZvbnQtc2l6ZTogMjJweDtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdGZvbnQtd2VpZ2h0OiB2YXIoLS1wcmltYXJ5LWN1c3RvbS1mb250LWxpZ2h0KTtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

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