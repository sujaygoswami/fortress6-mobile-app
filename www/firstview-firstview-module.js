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

module.exports = "<ion-content *ngFor=\"let firstPageContent of firstPage\">\n\n\t<div class=\"start-page-holder\" [style.backgroundImage]=\"'url(' + firstPageContent.image + ')'\">\n\t\t\t\n\t\t\t<div class=\"main-wrap\">\n\t\t\t\t<div class=\"table-wrap pull-text-left\">\n\t\t\t\t\t<div class=\"table-cell middle-line\">\n\t\t\t\t\t\t<h1>{{firstPageContent.excerpt}}</h1>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"dig-to-site pull-text-center\"><div (click)=\"goNavigationPanel()\"><span>GO</span></div></div>\n\n\t\t\t</div>\t\t\n\n\t</div>\t\n\n</ion-content>"

/***/ }),

/***/ "./src/app/firstview/firstview.page.scss":
/*!***********************************************!*\
  !*** ./src/app/firstview/firstview.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-page-holder {\n  height: 100vh;\n  background-size: cover;\n  background-position: center top;\n  background-repeat: no-repeat;\n  position: fixed;\n  overflow: hidden;\n  width: 100%;\n  left: 0px;\n  top: 0px; }\n  .start-page-holder > .main-wrap {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 2;\n    padding: 15px; }\n  .start-page-holder > .main-wrap h1 {\n      font-size: 40px;\n      margin: 0 0 15px 0;\n      font-weight: var(--primary-custom-font-light);\n      position: relative;\n      padding: 10px 0 10px 15px;\n      text-transform: uppercase; }\n  .start-page-holder > .main-wrap h1:before {\n        content: ' ';\n        width: 3px;\n        height: 100%;\n        position: absolute;\n        left: 0px;\n        top: 0px;\n        background-color: var(--site-primary-color); }\n  .start-page-holder > .main-wrap .dig-to-site {\n      width: 100%;\n      position: absolute;\n      left: 0px;\n      bottom: 15px; }\n  .start-page-holder > .main-wrap .dig-to-site div {\n        display: inline-block;\n        width: 70px;\n        height: 70px;\n        border: 2px solid var(--site-primary-color);\n        border-radius: 100%; }\n  .start-page-holder > .main-wrap .dig-to-site span {\n        display: inline-block;\n        width: 50px;\n        height: 50px;\n        border-radius: 100%;\n        background-color: var(--site-primary-color);\n        line-height: 50px;\n        margin-top: 8px; }\n  .start-page-holder * {\n    color: var(--ion-custom-color-white); }\n  .start-page-holder:before {\n    content: ' ';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    z-index: 1;\n    background-color: rgba(0, 0, 0, 0.6); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWpheWdvc3dhbWkvRG9jdW1lbnRzL1NVSkFZX0dPU1dBTUlfUFJPSkVDVFMvYXBwL2ZvcnRyZXNzNi1tb2JpbGUtYXBwL3NyYy9hcHAvZmlyc3R2aWV3L2ZpcnN0dmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsU0FBUztFQUNULFFBQVEsRUFBQTtFQVRUO0lBWUUsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWEsRUFBQTtFQWhCZjtNQW1CRyxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLDZDQUE2QztNQUM3QyxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLHlCQUF5QixFQUFBO0VBeEI1QjtRQTZCSSxZQUFZO1FBQ1osVUFBVTtRQUNWLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsU0FBUztRQUNULFFBQVE7UUFDUiwyQ0FBMkMsRUFBQTtFQW5DL0M7TUF5Q0csV0FBVztNQUNYLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsWUFBWSxFQUFBO0VBNUNmO1FBZ0RJLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsWUFBWTtRQUNaLDJDQUEyQztRQUMzQyxtQkFBbUIsRUFBQTtFQXBEdkI7UUF5REkscUJBQXFCO1FBQ3JCLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLDJDQUEyQztRQUMzQyxpQkFBaUI7UUFDakIsZUFBZSxFQUFBO0VBL0RuQjtJQXNFRSxvQ0FBb0MsRUFBQTtFQXRFdEM7SUEwRUUsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLG9DQUFpQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmlyc3R2aWV3L2ZpcnN0dmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zdGFydC1wYWdlLWhvbGRlcntcblx0aGVpZ2h0OiAxMDB2aDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHR3aWR0aDogMTAwJTtcblx0bGVmdDogMHB4O1xuXHR0b3A6IDBweDtcblxuXHQmID4gLm1haW4td3JhcHtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlOztcblx0XHR6LWluZGV4OiAyO1xuXHRcdHBhZGRpbmc6IDE1cHg7XG5cblx0XHRoMXtcblx0XHRcdGZvbnQtc2l6ZTogNDBweDtcblx0XHRcdG1hcmdpbjogMCAwIDE1cHggMDtcblx0XHRcdGZvbnQtd2VpZ2h0OiB2YXIoLS1wcmltYXJ5LWN1c3RvbS1mb250LWxpZ2h0KTtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG5cblx0XHRcdCY6YmVmb3Jle1xuXG5cdFx0XHRcdGNvbnRlbnQ6ICcgJztcblx0XHRcdFx0d2lkdGg6IDNweDtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGxlZnQ6IDBweDtcblx0XHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpdGUtcHJpbWFyeS1jb2xvcik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LmRpZy10by1zaXRle1xuXG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdGxlZnQ6IDBweDtcblx0XHRcdGJvdHRvbTogMTVweDtcblxuXHRcdFx0ZGl2e1xuXG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jazs7XG5cdFx0XHRcdHdpZHRoOiA3MHB4O1xuXHRcdFx0XHRoZWlnaHQ6IDcwcHg7XG5cdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXNpdGUtcHJpbWFyeS1jb2xvcik7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwMCU7XG5cdFx0XHR9XG5cblx0XHRcdHNwYW57XG5cblx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHR3aWR0aDogNTBweDtcblx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaXRlLXByaW1hcnktY29sb3IpO1xuXHRcdFx0XHRsaW5lLWhlaWdodDogNTBweDtcblx0XHRcdFx0bWFyZ2luLXRvcDogOHB4O1xuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0JiAqe1xuXHRcdGNvbG9yOiB2YXIoLS1pb24tY3VzdG9tLWNvbG9yLXdoaXRlKTtcblx0fVxuXG5cdCY6YmVmb3Jle1xuXHRcdGNvbnRlbnQ6ICcgJztcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDBweDtcblx0XHR0b3A6IDBweDtcblx0XHR6LWluZGV4OiAxO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcblx0fVxufSJdfQ== */"

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