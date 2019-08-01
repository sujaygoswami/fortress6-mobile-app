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

module.exports = "<ion-content>\r\n\r\n\r\n\t<div class=\"navigation-panel-holder\">\r\n\r\n\t\t<div class=\"logo-holder\">\r\n\r\n\t\t<div class=\"service-menu left\">\r\n\t\t\t<a href=\"mailto: contact(at)fortress6.com\"><i class=\"fa fa-envelope\"></i></a>\r\n\t\t\t<a href=\"tel: 03365555256\"><i class=\"fa fa-phone\"></i></a>\r\n\t\t</div>\t\r\n\r\n\t\t<div class=\"logo\"><img src=\"assets/images/company-logo.png\"></div>\r\n\r\n\r\n\t\t<div class=\"service-menu right\">\r\n\t\t\t<a href=\"https://www.facebook.com/Fortress6-Technologies-1637880229835858/\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\r\n\t\t\t<a href=\"https://twitter.com/Fortress6Tech\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\t\t\t<div *ngFor=\"let navpanlebackground of navpanelBackImage\">\r\n\t\t\t\t<div class=\"back-img-holder\" [style.backgroundImage]=\"'url(' + navpanlebackground.image + ')'\"></div>\r\n\t\t\t</div>\r\n\t\t\r\n\t\t\r\n\t\t\t\r\n\t\t<div class=\"main-navigation-panel clearfix\">\r\n\t\t\t<div class=\"table-wrap\"><div class=\"table-cell middle-line\">\r\n\t\t\t\t<div class=\"row two-column-grid\">\r\n\r\n\t\t\t\t\t<div class=\"col\" *ngFor=\"let navItem of navigations\">\r\n\t\t\t\t\t\t<div class=\"main-wrap full-height pull-text-center\" routerLink=\"{{navItem.link}}\">\r\n\t\t\t\t\t\t\t<div class=\"table-wrap\"><div class=\"table-cell middle-line\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa {{navItem.icon}}\"></i>\r\n\t\t\t\t\t\t\t\t<span>{{navItem.text}}</span>\r\n\t\t\t\t\t\t\t</div></div>\t\r\n\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div></div>\t\r\n\t\t</div>\r\n\t\t\r\n\r\n\t</div>\t\r\n\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/navigation-panel/navigation-panel.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/navigation-panel/navigation-panel.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-panel-holder {\n  height: 100vh;\n  overflow-x: hidden; }\n\n.back-img-holder {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0px;\n  top: 0px;\n  background-position: center top;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.back-img-holder:before {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 1;\n    content: ' '; }\n\n.main-navigation-panel {\n  position: fixed;\n  width: 100%;\n  left: 0px;\n  top: 12vh;\n  color: var(--site-primary-color);\n  height: 88vh;\n  z-index: 5;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.main-navigation-panel .col {\n    height: 100px; }\n\n.main-navigation-panel .fa {\n    font-size: 30px;\n    display: block;\n    margin-bottom: 10px; }\n\n.main-navigation-panel span {\n    display: block;\n    text-transform: uppercase;\n    font-weight: var(--primary-custom-font-light); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi1wYW5lbC9FOlxcU3VqYXkgR29zd2FtaVxcUHJvamVjdHNcXGFwcFxcZm9ydHJlc3M2LW1vYmlsZS1hcHAvc3JjXFxhcHBcXG5hdmlnYXRpb24tcGFuZWxcXG5hdmlnYXRpb24tcGFuZWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7RUFDVCxRQUFRO0VBQ1IsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0Qiw0QkFBNEIsRUFBQTs7QUFSN0I7SUFXRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLG9DQUFpQztJQUNqQyxVQUFVO0lBQ1YsWUFBVyxFQUFBOztBQUtiO0VBQ0MsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsU0FBUztFQUNULGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFUakI7SUFZRSxhQUFhLEVBQUE7O0FBWmY7SUFnQkUsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUIsRUFBQTs7QUFsQnJCO0lBc0JFLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsNkNBQTZDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uLXBhbmVsL25hdmlnYXRpb24tcGFuZWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24tcGFuZWwtaG9sZGVye1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0b3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uYmFjay1pbWctaG9sZGVye1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0bGVmdDogMHB4O1xyXG5cdHRvcDogMHB4O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cclxuXHQmOmJlZm9yZXtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0bGVmdDogMHB4O1xyXG5cdFx0dG9wOiAwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdFx0Y29udGVudDonICc7XHJcblx0fVxyXG59XHJcblxyXG5cclxuLm1haW4tbmF2aWdhdGlvbi1wYW5lbHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bGVmdDogMHB4O1xyXG5cdHRvcDogMTJ2aDtcclxuXHRjb2xvcjogdmFyKC0tc2l0ZS1wcmltYXJ5LWNvbG9yKTtcclxuXHRoZWlnaHQ6IDg4dmg7XHJcblx0ei1pbmRleDogNTtcclxuXHRvdmVyZmxvdy14OiBoaWRkZW47XHJcblx0b3ZlcmZsb3cteTogYXV0bztcclxuXHJcblx0LmNvbHtcclxuXHRcdGhlaWdodDogMTAwcHg7XHJcblx0fVxyXG5cclxuXHQuZmF7XHJcblx0XHRmb250LXNpemU6IDMwcHg7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHRzcGFue1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IHZhcigtLXByaW1hcnktY3VzdG9tLWZvbnQtbGlnaHQpO1xyXG5cdH1cclxufVxyXG5cclxuIl19 */"

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
                link: "/team",
            },
            {
                icon: "fa-thumbs-o-up",
                text: "Career",
                link: "/career",
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