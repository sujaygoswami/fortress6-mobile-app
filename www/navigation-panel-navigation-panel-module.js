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

module.exports = ".navigation-panel-holder {\n  height: 100vh;\n  overflow-x: hidden; }\n\n.back-img-holder {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  background-position: center top;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.back-img-holder:before {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 1;\n    content: ' '; }\n\n.main-navigation-panel {\n  position: fixed;\n  width: 100%;\n  left: 0px;\n  top: 12vh;\n  color: var(--site-primary-color);\n  height: 88vh;\n  z-index: 5;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.main-navigation-panel .col {\n    height: 100px; }\n\n.main-navigation-panel .fa {\n    font-size: 30px;\n    display: block;\n    margin-bottom: 10px; }\n\n.main-navigation-panel span {\n    display: block;\n    text-transform: uppercase;\n    font-weight: var(--primary-custom-font-light); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdWpheWdvc3dhbWkvRG9jdW1lbnRzL1NVSkFZX0dPU1dBTUlfUFJPSkVDVFMvTGVhcm4gSW9uaWMvVGFiLU1lbnUtV2l0aC1EZXRhaWwvY29tcGFueS1hcHAvc3JjL2FwcC9uYXZpZ2F0aW9uLXBhbmVsL25hdmlnYXRpb24tcGFuZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0Qiw0QkFBNEIsRUFBQTs7QUFSN0I7SUFXRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLG9DQUFpQztJQUNqQyxVQUFVO0lBQ1YsWUFBVyxFQUFBOztBQUtiO0VBQ0MsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsU0FBUztFQUNULGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFUakI7SUFZRSxhQUFhLEVBQUE7O0FBWmY7SUFnQkUsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUIsRUFBQTs7QUFsQnJCO0lBc0JFLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsNkNBQTZDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uLXBhbmVsL25hdmlnYXRpb24tcGFuZWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24tcGFuZWwtaG9sZGVye1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5iYWNrLWltZy1ob2xkZXJ7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0bGVmdDogMHB4O1xuXHR0b3A6IDBweDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHRvcDtcblx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblxuXHQmOmJlZm9yZXtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0cG9zaXRpb246IGZpeGVkO1xuXHRcdGxlZnQ6IDBweDtcblx0XHR0b3A6IDBweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XG5cdFx0ei1pbmRleDogMTtcblx0XHRjb250ZW50OicgJztcblx0fVxufVxuXG5cbi5tYWluLW5hdmlnYXRpb24tcGFuZWx7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0d2lkdGg6IDEwMCU7XG5cdGxlZnQ6IDBweDtcblx0dG9wOiAxMnZoO1xuXHRjb2xvcjogdmFyKC0tc2l0ZS1wcmltYXJ5LWNvbG9yKTtcblx0aGVpZ2h0OiA4OHZoO1xuXHR6LWluZGV4OiA1O1xuXHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdG92ZXJmbG93LXk6IGF1dG87XG5cblx0LmNvbHtcblx0XHRoZWlnaHQ6IDEwMHB4O1xuXHR9XG5cblx0LmZhe1xuXHRcdGZvbnQtc2l6ZTogMzBweDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG5cblx0c3Bhbntcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdGZvbnQtd2VpZ2h0OiB2YXIoLS1wcmltYXJ5LWN1c3RvbS1mb250LWxpZ2h0KTtcblx0fVxufVxuXG4iXX0= */"

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