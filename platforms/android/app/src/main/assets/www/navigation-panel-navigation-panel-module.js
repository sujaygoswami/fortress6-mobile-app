(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation-panel-navigation-panel-module"],{

/***/ "./src/app/navigation-panel/navigation-panel.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/navigation-panel/navigation-panel.module.ts ***!
  \*************************************************************/
/*! exports provided: NavigationPanelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPanelPageModule", function() { return NavigationPanelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _navigation_panel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation-panel.page */ "./src/app/navigation-panel/navigation-panel.page.ts");







var routes = [
    {
        path: '',
        component: _navigation_panel_page__WEBPACK_IMPORTED_MODULE_6__["NavigationPanelPage"]
    }
];
var NavigationPanelPageModule = /** @class */ (function () {
    function NavigationPanelPageModule() {
    }
    NavigationPanelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_navigation_panel_page__WEBPACK_IMPORTED_MODULE_6__["NavigationPanelPage"]]
        })
    ], NavigationPanelPageModule);
    return NavigationPanelPageModule;
}());



/***/ }),

/***/ "./src/app/navigation-panel/navigation-panel.page.html":
/*!*************************************************************!*\
  !*** ./src/app/navigation-panel/navigation-panel.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n\n\t<div class=\"navigation-panel-holder\">\n\n\t\t<div class=\"logo-holder\"><div><img src=\"assets/images/company-logo.png\"></div></div>\n\n\t\t\t<div *ngFor=\"let navpanlebackground of navpanelBackImage\">\n\t\t\t\t<div class=\"back-img-holder\" [style.backgroundImage]=\"'url(' + navpanlebackground.image + ')'\"></div>\n\t\t\t</div>\n\t\t\n\t\t\n\t\t\t\n\t\t<div class=\"main-navigation-panel clearfix\">\n\t\t\t<div class=\"table-wrap\"><div class=\"table-cell middle-line\">\n\t\t\t\t<div class=\"row two-column-grid\">\n\n\t\t\t\t\t<div class=\"col\" *ngFor=\"let navItem of navigations\">\n\t\t\t\t\t\t<div class=\"main-wrap full-height pull-text-center\" routerLink=\"{{navItem.link}}\">\n\t\t\t\t\t\t\t<div class=\"table-wrap\"><div class=\"table-cell middle-line\">\n\t\t\t\t\t\t\t\t<i class=\"fa {{navItem.icon}}\"></i>\n\t\t\t\t\t\t\t\t<span>{{navItem.text}}</span>\n\t\t\t\t\t\t\t</div></div>\t\n\t\t\t\t\t\t</div>\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\n\t\t\t\t</div>\n\t\t\t</div></div>\t\n\t\t</div>\n\t\t\n\n\t</div>\t\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/navigation-panel/navigation-panel.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/navigation-panel/navigation-panel.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-panel-holder {\n  height: 100vh;\n  overflow-x: hidden; }\n\n.back-img-holder {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  background-position: center top;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.back-img-holder:before {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 1;\n    content: ' '; }\n\n.main-navigation-panel {\n  position: fixed;\n  width: 100%;\n  left: 0px;\n  top: 12vh;\n  color: var(--site-primary-color);\n  height: 88vh;\n  z-index: 5;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.main-navigation-panel .col {\n    height: 100px; }\n\n.main-navigation-panel .fa {\n    font-size: 30px;\n    display: block;\n    margin-bottom: 10px; }\n\n.main-navigation-panel span {\n    display: block;\n    text-transform: uppercase;\n    font-weight: var(--primary-custom-font-light); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWpheWdvc3dhbWkvRG9jdW1lbnRzL1NVSkFZX0dPU1dBTUlfUFJPSkVDVFMvYXBwL2ZvcnRyZXNzNi1tb2JpbGUtYXBwL3NyYy9hcHAvbmF2aWdhdGlvbi1wYW5lbC9uYXZpZ2F0aW9uLXBhbmVsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFHbkI7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtFQUNSLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEIsNEJBQTRCLEVBQUE7O0FBUjdCO0lBV0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7SUFDUixvQ0FBaUM7SUFDakMsVUFBVTtJQUNWLFlBQVcsRUFBQTs7QUFLYjtFQUNDLGVBQWU7RUFDZixXQUFXO0VBQ1gsU0FBUztFQUNULFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBVGpCO0lBWUUsYUFBYSxFQUFBOztBQVpmO0lBZ0JFLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CLEVBQUE7O0FBbEJyQjtJQXNCRSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLDZDQUE2QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi1wYW5lbC9uYXZpZ2F0aW9uLXBhbmVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0aW9uLXBhbmVsLWhvbGRlcntcblx0aGVpZ2h0OiAxMDB2aDtcblx0b3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4uYmFjay1pbWctaG9sZGVye1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGxlZnQ6IDBweDtcblx0dG9wOiAwcHg7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cblx0JjpiZWZvcmV7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRsZWZ0OiAwcHg7XG5cdFx0dG9wOiAwcHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xuXHRcdHotaW5kZXg6IDE7XG5cdFx0Y29udGVudDonICc7XG5cdH1cbn1cblxuXG4ubWFpbi1uYXZpZ2F0aW9uLXBhbmVse1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHdpZHRoOiAxMDAlO1xuXHRsZWZ0OiAwcHg7XG5cdHRvcDogMTJ2aDtcblx0Y29sb3I6IHZhcigtLXNpdGUtcHJpbWFyeS1jb2xvcik7XG5cdGhlaWdodDogODh2aDtcblx0ei1pbmRleDogNTtcblx0b3ZlcmZsb3cteDogaGlkZGVuO1xuXHRvdmVyZmxvdy15OiBhdXRvO1xuXG5cdC5jb2x7XG5cdFx0aGVpZ2h0OiAxMDBweDtcblx0fVxuXG5cdC5mYXtcblx0XHRmb250LXNpemU6IDMwcHg7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxuXG5cdHNwYW57XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXdlaWdodDogdmFyKC0tcHJpbWFyeS1jdXN0b20tZm9udC1saWdodCk7XG5cdH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/navigation-panel/navigation-panel.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/navigation-panel/navigation-panel.page.ts ***!
  \***********************************************************/
/*! exports provided: NavigationPanelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPanelPage", function() { return NavigationPanelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationPanelPage = /** @class */ (function () {
    function NavigationPanelPage() {
        this.navpanelBackImage = [
            {
                image: "assets/images/navigation-page-image.jpg",
            }
        ];
        this.navigations = [
            {
                icon: "fa-birthday-cake",
                text: "Foundation",
                link: "/foundation",
            },
            {
                icon: "fa-group",
                text: "about us",
                link: "/aboutus",
            },
            {
                icon: "fa-code",
                text: "Services",
                link: "/our-services",
            },
            {
                icon: "fa-list",
                text: "Platforms",
                link: "/platforms",
            },
            {
                icon: "fa-black-tie",
                text: "Team",
            },
            {
                icon: "fa-thumbs-o-up",
                text: "Carrer",
            },
            {
                icon: "fa-facebook",
                text: "Follow US",
            },
            {
                icon: "fa-phone",
                text: "Contact Us",
            }
        ];
    }
    NavigationPanelPage.prototype.ngOnInit = function () {
    };
    NavigationPanelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation-panel',
            template: __webpack_require__(/*! ./navigation-panel.page.html */ "./src/app/navigation-panel/navigation-panel.page.html"),
            styles: [__webpack_require__(/*! ./navigation-panel.page.scss */ "./src/app/navigation-panel/navigation-panel.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationPanelPage);
    return NavigationPanelPage;
}());



/***/ })

}]);
//# sourceMappingURL=navigation-panel-navigation-panel-module.js.map