(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["career-career-module"],{

/***/ "./src/app/career/career.module.ts":
/*!*****************************************!*\
  !*** ./src/app/career/career.module.ts ***!
  \*****************************************/
/*! exports provided: CareerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerPageModule", function() { return CareerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _career_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./career.page */ "./src/app/career/career.page.ts");







var routes = [
    {
        path: '',
        component: _career_page__WEBPACK_IMPORTED_MODULE_6__["CareerPage"]
    }
];
var CareerPageModule = /** @class */ (function () {
    function CareerPageModule() {
    }
    CareerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_career_page__WEBPACK_IMPORTED_MODULE_6__["CareerPage"]]
        })
    ], CareerPageModule);
    return CareerPageModule;
}());



/***/ }),

/***/ "./src/app/career/career.page.html":
/*!*****************************************!*\
  !*** ./src/app/career/career.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"inner-page\">\r\n<div class=\"logo-holder\">\r\n\t<div class=\"service-menu left\">\r\n\t\t<a *ngFor=\"let constantsvalue of constantpage.constantsvaluesleft\" href=\"{{constantsvalue.action}}: {{constantsvalue.content}}\"><i class=\"fa {{constantsvalue.icon}}\"></i></a>\r\n\t</div>\r\n\t<div class=\"logo\"><img src=\"assets/images/company-logo.png\"></div>\r\n\t<div class=\"service-menu right\">\r\n\t\t<a *ngFor=\"let constantsvalue of constantpage.constantsvaluesright\" href=\"{{constantsvalue.content}}\" target=\"_blank\"><i class=\"fa {{constantsvalue.icon}}\"></i></a>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"main-content-wrap\">\r\n\t<div class=\"main-wrap\">\r\n\t\t<div class=\"entry element-gap element-gap-default\" *ngFor=\"let content of pageContent\">\r\n\t\t\t<h1 class=\"page-title\">{{content.title}}</h1>\r\n\t\t\t<div [innerHTML]=\"content.text\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"career-form-module entry\">\r\n\r\n\t\t\t<h1>Get In Touch</h1>\r\n\t\t\t\r\n\t\t\t<form [formGroup]=\"validations_form\"  (ngSubmit)=\"onSubmit(validations_form.value)\" class=\"site-form\">\r\n\t\t\t\t\r\n\t\t\t\t<div class=\"field-group\">\r\n\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">First Name</ion-label>\r\n\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"firstname\"></ion-input>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t<div class=\"validation-errors\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let validation of validation_messages.firstname\">\r\n\t\t\t\t\t\t<div class=\"error-message\" *ngIf=\"validations_form.get('firstname').hasError(validation.type) && (validations_form.get('firstname').dirty || validations_form.get('firstname').touched)\">\r\n\t\t\t\t\t\t\t<ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"field-group\">\r\n\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">Last name</ion-label>\r\n\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"lastname\"></ion-input>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t<div class=\"validation-errors\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let validation of validation_messages.lastname\">\r\n\t\t\t\t\t\t<div class=\"error-message\" *ngIf=\"validations_form.get('lastname').hasError(validation.type) && (validations_form.get('lastname').dirty || validations_form.get('lastname').touched)\">\r\n\t\t\t\t\t\t\t<ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"field-group\">\r\n\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">Email</ion-label>\r\n\t\t\t\t\t\t<ion-input type=\"text\" formControlName=\"email\"></ion-input>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t<div class=\"validation-errors\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let validation of validation_messages.email\">\r\n\t\t\t\t\t\t<div class=\"error-message\" *ngIf=\"validations_form.get('email').hasError(validation.type) && (validations_form.get('email').dirty || validations_form.get('email').touched)\">\r\n\t\t\t\t\t\t\t<ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"field-group\">\r\n\t\t\t\t\t<ion-item>\r\n\t\t\t\t\t\t<ion-label position=\"floating\" color=\"primary\">Your Query</ion-label>\r\n\t\t\t\t\t\t<ion-textarea formControlName=\"query\"></ion-textarea>\r\n\t\t\t\t\t</ion-item>\r\n\t\t\t\t\t<div class=\"validation-errors\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let validation of validation_messages.query\">\r\n\t\t\t\t\t\t<div class=\"error-message\" *ngIf=\"validations_form.get('query').hasError(validation.type) && (validations_form.get('query').dirty || validations_form.get('query').touched)\">\r\n\t\t\t\t\t\t\t<ion-icon name=\"information-circle-outline\"></ion-icon> {{ validation.message }}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t\r\n\t\t\t\t<ion-button color=\"primary\" class=\"submit-btn\" expand=\"full\" type=\"submit\" [disabled]=\"!validations_form.valid\">Submit</ion-button>\r\n\t\t\t</form>\r\n\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"bootom-listing-nav\"><i class=\"fa fa-th\" routerLink=\"/navigation-panel\"></i></div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/career/career.page.scss":
/*!*****************************************!*\
  !*** ./src/app/career/career.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcmVlci9jYXJlZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/career/career.page.ts":
/*!***************************************!*\
  !*** ./src/app/career/career.page.ts ***!
  \***************************************/
/*! exports provided: CareerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerPage", function() { return CareerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_constants_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants.page */ "./src/app/constants/constants.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CareerPage = /** @class */ (function () {
    function CareerPage(constantpage, formBuilder, router) {
        this.constantpage = constantpage;
        this.formBuilder = formBuilder;
        this.router = router;
        this.validation_messages = {
            'firstname': [
                { type: 'required', message: 'Name is required.' }
            ],
            'lastname': [
                { type: 'required', message: 'Last name is required.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Please wnter a valid email.' }
            ],
            'query': [
                { type: 'required', message: 'Let us know your query' },
            ],
        };
        this.pageContent = [
            {
                title: "CURRENT OPENINGS",
                text: "<p>Are you passionate, energetic and a team player? If you have all three skills, Fortress6 Technologies is offering you a platform where you can get the opportunity to work with the best minds of the industry. With industry standard compensation, world-class infrastructure and an effective team of management that believes in nurturing talents, you will get the best environment to work here.If you wish to be a part of our team, please follow our current openings:</p><ul><li>PHP Developer - Mysql/javascript/jquery</li><li>UI Developer - Angularjs/html/css/javascript</li></ul>",
            }
        ];
    }
    CareerPage.prototype.ngOnInit = function () {
        this.validations_form = this.formBuilder.group({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    };
    CareerPage.prototype.onSubmit = function (values) {
        console.log(values);
        this.router.navigate(["/contact-suceess"]);
    };
    CareerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-career',
            template: __webpack_require__(/*! ./career.page.html */ "./src/app/career/career.page.html"),
            styles: [__webpack_require__(/*! ./career.page.scss */ "./src/app/career/career.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_constants_constants_page__WEBPACK_IMPORTED_MODULE_2__["ConstantsPage"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CareerPage);
    return CareerPage;
}());



/***/ })

}]);
//# sourceMappingURL=career-career-module.js.map