(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["firstview-firstview-module"],{

/***/ "./src/app/firstview/firstview.module.ts":
/*!***********************************************!*\
  !*** ./src/app/firstview/firstview.module.ts ***!
  \***********************************************/
/*! exports provided: FirstviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstviewPageModule", function() { return FirstviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _firstview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firstview.page */ "./src/app/firstview/firstview.page.ts");







var routes = [
    {
        path: '',
        component: _firstview_page__WEBPACK_IMPORTED_MODULE_6__["FirstviewPage"]
    }
];
var FirstviewPageModule = /** @class */ (function () {
    function FirstviewPageModule() {
    }
    FirstviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_firstview_page__WEBPACK_IMPORTED_MODULE_6__["FirstviewPage"]]
        })
    ], FirstviewPageModule);
    return FirstviewPageModule;
}());



/***/ }),

/***/ "./src/app/firstview/firstview.page.html":
/*!***********************************************!*\
  !*** ./src/app/firstview/firstview.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content *ngFor=\"let firstPageContent of firstPage\">\r\n\r\n\t<div class=\"start-page-holder\" [style.backgroundImage]=\"'url(' + firstPageContent.image + ')'\">\r\n\t\t\t\r\n\t\t\t<div class=\"main-wrap\">\r\n\t\t\t\t<div class=\"table-wrap pull-text-left\">\r\n\t\t\t\t\t<div class=\"table-cell middle-line\">\r\n\t\t\t\t\t\t<h1>{{firstPageContent.excerpt}}</h1>\r\n\t\t\t\t\t</div>\t\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"dig-to-site pull-text-center\"><div (click)=\"goNavigationPanel()\"><span>GO</span></div></div>\r\n\r\n\t\t\t</div>\t\t\r\n\r\n\t</div>\t\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/firstview/firstview.page.scss":
/*!***********************************************!*\
  !*** ./src/app/firstview/firstview.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-page-holder {\n  height: 100vh;\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat;\n  position: fixed;\n  overflow: hidden;\n  width: 100%;\n  left: 0px;\n  top: 0px; }\n  .start-page-holder > .main-wrap {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 2;\n    padding: 15px; }\n  .start-page-holder > .main-wrap h1 {\n      font-size: 40px;\n      margin: 0 0 15px 0;\n      font-weight: var(--primary-custom-font-light);\n      position: relative;\n      padding: 10px 0 10px 15px;\n      text-transform: uppercase; }\n  .start-page-holder > .main-wrap h1:before {\n        content: ' ';\n        width: 3px;\n        height: 100%;\n        position: absolute;\n        left: 0px;\n        top: 0px;\n        background-color: var(--site-primary-color); }\n  .start-page-holder > .main-wrap .dig-to-site {\n      width: 100%;\n      position: absolute;\n      left: 0px;\n      bottom: 15px; }\n  .start-page-holder > .main-wrap .dig-to-site div {\n        display: inline-block;\n        width: 70px;\n        height: 70px;\n        border: 2px solid var(--site-primary-color);\n        border-radius: 100%; }\n  .start-page-holder > .main-wrap .dig-to-site span {\n        display: inline-block;\n        width: 50px;\n        height: 50px;\n        border-radius: 100%;\n        background-color: var(--site-primary-color);\n        line-height: 50px;\n        margin-top: 8px; }\n  .start-page-holder * {\n    color: var(--ion-custom-color-white); }\n  .start-page-holder:before {\n    content: ' ';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.6); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyc3R2aWV3L0U6XFxTdWpheSBHb3N3YW1pXFxQcm9qZWN0c1xcYXBwXFxmb3J0cmVzczYtbW9iaWxlLWFwcC9zcmNcXGFwcFxcZmlyc3R2aWV3XFxmaXJzdHZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0MsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0IsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFNBQVM7RUFDVCxRQUFRLEVBQUE7RUFUVDtJQVlFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhLEVBQUE7RUFoQmY7TUFtQkcsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQiw2Q0FBNkM7TUFDN0Msa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6Qix5QkFBeUIsRUFBQTtFQXhCNUI7UUE2QkksWUFBWTtRQUNaLFVBQVU7UUFDVixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxRQUFRO1FBQ1IsMkNBQTJDLEVBQUE7RUFuQy9DO01BeUNHLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFlBQVksRUFBQTtFQTVDZjtRQWdESSxxQkFBcUI7UUFDckIsV0FBVztRQUNYLFlBQVk7UUFDWiwyQ0FBMkM7UUFDM0MsbUJBQW1CLEVBQUE7RUFwRHZCO1FBeURJLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQiwyQ0FBMkM7UUFDM0MsaUJBQWlCO1FBQ2pCLGVBQWUsRUFBQTtFQS9EbkI7SUFzRUUsb0NBQW9DLEVBQUE7RUF0RXRDO0lBMEVFLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixvQ0FBaUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0dmlldy9maXJzdHZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zdGFydC1wYWdlLWhvbGRlcntcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGxlZnQ6IDBweDtcclxuXHR0b3A6IDBweDtcclxuXHJcblx0JiA+IC5tYWluLXdyYXB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTs7XHJcblx0XHR6LWluZGV4OiAyO1xyXG5cdFx0cGFkZGluZzogMTVweDtcclxuXHJcblx0XHRoMXtcclxuXHRcdFx0Zm9udC1zaXplOiA0MHB4O1xyXG5cdFx0XHRtYXJnaW46IDAgMCAxNXB4IDA7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiB2YXIoLS1wcmltYXJ5LWN1c3RvbS1mb250LWxpZ2h0KTtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xyXG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuXHJcblx0XHRcdCY6YmVmb3Jle1xyXG5cclxuXHRcdFx0XHRjb250ZW50OiAnICc7XHJcblx0XHRcdFx0d2lkdGg6IDNweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0XHR0b3A6IDBweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaXRlLXByaW1hcnktY29sb3IpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0LmRpZy10by1zaXRle1xyXG5cclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0bGVmdDogMHB4O1xyXG5cdFx0XHRib3R0b206IDE1cHg7XHJcblxyXG5cdFx0XHRkaXZ7XHJcblxyXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jazs7XHJcblx0XHRcdFx0d2lkdGg6IDcwcHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA3MHB4O1xyXG5cdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNpdGUtcHJpbWFyeS1jb2xvcik7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTAwJTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3BhbntcclxuXHJcblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0XHRcdGhlaWdodDogNTBweDtcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpdGUtcHJpbWFyeS1jb2xvcik7XHJcblx0XHRcdFx0bGluZS1oZWlnaHQ6IDUwcHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogOHB4O1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0JiAqe1xyXG5cdFx0Y29sb3I6IHZhcigtLWlvbi1jdXN0b20tY29sb3Itd2hpdGUpO1xyXG5cdH1cclxuXHJcblx0JjpiZWZvcmV7XHJcblx0XHRjb250ZW50OiAnICc7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDBweDtcclxuXHRcdHRvcDogMHB4O1xyXG5cdFx0ei1pbmRleDogMTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuXHR9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/firstview/firstview.page.ts":
/*!*********************************************!*\
  !*** ./src/app/firstview/firstview.page.ts ***!
  \*********************************************/
/*! exports provided: FirstviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstviewPage", function() { return FirstviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FirstviewPage = /** @class */ (function () {
    function FirstviewPage(navController, router) {
        this.navController = navController;
        this.router = router;
        this.firstPage = [
            {
                image: "assets/images/start-page-image.jpg",
                excerpt: "TURN A BUSINESS INTO SUCCESS",
            }
        ];
    }
    FirstviewPage.prototype.ngOnInit = function () {
    };
    FirstviewPage.prototype.goNavigationPanel = function () {
        this.router.navigateByUrl('/navigation-panel');
    };
    FirstviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-firstview',
            template: __webpack_require__(/*! ./firstview.page.html */ "./src/app/firstview/firstview.page.html"),
            styles: [__webpack_require__(/*! ./firstview.page.scss */ "./src/app/firstview/firstview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FirstviewPage);
    return FirstviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=firstview-firstview-module.js.map