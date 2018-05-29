webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/Message.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=Message.js.map

/***/ }),

/***/ "../../../../../src/app/User.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thumbnail{\r\n  background-color: rgba(210,202,255,0.96);\r\n  color:  black;\r\n}\r\n\r\n.caption {\r\n\r\n  color:  black;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\"  >\n  <div class=\"thumbnail\" style=\"background-color: tomato\">\n    <div class=\"text-center\" >\n      <h2>Welcome to Mini Twitter Application</h2>\n    </div>\n  </div>\n</div>\n<div class=\"col-lg-12\">\n<div class=\"thumbnail\" >\n  <div class=\"caption\">\n   <a style=\"color:  crimson\">\n    <b> An endpoint to read the message list for the current user (as identified by their HTTP Basic authentication credentials). Include messages they have sent and messages sent by users they follow. Support a “search=” parameter that can be used to further filter messages based on keyword.\n    </b>\n   </a>\n    <hr>\n    http://localhost:8080/people/messages\n    <hr>\n    http://localhost:8080/people/messages?search=keyword\n    <hr>\n    Messages are ordered by user id\n  </div>\n</div>\n</div>\n\n<div class=\"col-lg-12\">\n  <div class=\"thumbnail\" >\n    <div class=\"caption\">\n      <a style=\"color:  crimson\">\n        <b>Endpoint to get the list of people the user is following</b>\n      </a>\n      <hr>\n      http://localhost:8080/people/following\n    </div>\n  </div>\n</div>\n\n<div class=\"col-lg-12\">\n  <div class=\"thumbnail\" >\n    <div class=\"caption\">\n      <a style=\"color:  crimson\">\n        <b>Endpoint to get the list of followers of the user</b>\n      </a>\n        <hr>\n      http://localhost:8080/people/followers\n    </div>\n  </div>\n</div>\n\n<div class=\"col-lg-12\">\n  <div class=\"thumbnail\" >\n    <div class=\"caption\">\n      <a style=\"color:  crimson\">\n       <b> An endpoint to start following another user</b>\n      </a>\n      <hr>\n      http://localhost:8080/people/follow/ userId\n      <hr>\n      <b>Note:</b> userId of user to be followed\n    </div>\n  </div>\n</div>\n\n<div class=\"col-lg-12\">\n  <div class=\"thumbnail\">\n    <div class=\"caption\">\n      <a style=\"color:  crimson\">\n        <b>  An endpoint to unfollow another user</b>\n      </a>\n      <hr>\n      http://localhost:8080/people/unfollow/ userId\n      <hr>\n      <b>Note:</b> userId of user to be unfollowed\n    </div>\n  </div>\n</div>\n\n<div class=\"col-lg-12\"  >\n  <div class=\"thumbnail\" style=\"background-color: tomato\">\n    <div class=\"text-center\" >\n    <h2>Additional functionality</h2>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-lg-12\">\n  <div class=\"thumbnail\" >\n    <div class=\"caption\">\n      <a style=\"color:  crimson\">\n        <b> 1.  An endpoint that returns the current user's \"shortest distance\" to some other user. The shortest distance is defined as the number of hops needed to reach a user through the users you are following (not through your followers; direction matters). For example, if you follow user B, your shortest distance to B is 1. If you do not follow user B, but you do follow user C who follows user B, your shortest distance to B is 2.\n        </b></a>\n      <hr>\n      http://localhost:8080/people/distance/ userId\n      <hr>\n      <a href=\"http://localhost:8080/people/distance/10\" target=\"_blank\">Distance to User 10 from current user</a>\n      <hr>\n      <b>Note:</b> userId of user for which we need to find distance<br>\n      Distance of -1 indicates no connection<br>\n      In target is same as user that is logged in then distance is 0\n    </div>\n  </div>\n</div>\n\n<div class=\"col-lg-12\">\n  <div class=\"thumbnail\">\n    <div class=\"caption\">\n      <a style=\"color:  crimson\">\n        <b>  2. An endpoint that returns a list of all users, paired with their most \"popular\" follower. The more followers someone has, the more \"popular\" they are. Hint: this is possible to do with a single SQL query!\n        </b></a>\n      <hr>\n      http://localhost:8080/people/popular\n      <hr>\n      <a href=\"http://localhost:8080/people/popular/\" target=\"_blank\">Check it out</a>\n      <hr>\n      <b>Note:</b>  Returns key value pair of User and Most popular follower\n\n\n    </div>\n  </div>\n</div>\n\n\n<div class=\"col-lg-12\">\n  <div class=\"thumbnail\">\n    <div class=\"caption\">\n      <a style=\"color:  crimson\">\n        <b> 3.  Write a small web interface for your API in JavaScript. Don't use server-side templates (like JSPs). Instead, write a single-page application that interacts with your API via AJAX calls. Feel free to use any modern JavaScript frameworks (e.g., AngularJS, ReactJS, etc.)\n        </b></a>\n      <hr>\n      Still in a learning  phase when it comes to front-end part. But its fun. Lot of scope for improvement :-)\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/all-message/all-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-message/all-message.component.html":
/***/ (function(module, exports) {

module.exports = "//not used....dekete\n<div class=\"col-lg-6\">\n  <div *ngFor = \"let message of messsage \">\n    <app-message-card [message]=\"message\"  class=\"col-lg-6\"></app-message-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/all-message/all-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service_message_service_component__ = __webpack_require__("../../../../../src/app/message-service/message-service.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllMessageComponent = (function () {
    function AllMessageComponent(messageService) {
        this.messageService = messageService;
    }
    AllMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getAllMessages()
            .subscribe(function (data) { return _this.messsage = data; });
    };
    return AllMessageComponent;
}());
AllMessageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-all-message',
        template: __webpack_require__("../../../../../src/app/all-message/all-message.component.html"),
        styles: [__webpack_require__("../../../../../src/app/all-message/all-message.component.css")]
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__message_service_message_service_component__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__message_service_message_service_component__["a" /* MessageService */]) === "function" && _a || Object])
], AllMessageComponent);

var _a;
//# sourceMappingURL=all-message.component.js.map

/***/ }),

/***/ "../../../../../src/app/all-users/all-users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/all-users/all-users.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"col-sm-9\">\n<div *ngFor = \"let user of user \">\n  <app-user-card [user]=\"user\"  class=\"col-sm-4\"></app-user-card>\n</div>\n</div>-->\n<div class=\"col-lg-12\"  >\n  <div class=\"thumbnail\" style=\"background-color: tomato\">\n    <div class=\"text-center\" >\n      <h4>Users you are not following</h4>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-sm-12\">\n  <div *ngFor = \"let user of userNotFollowing \">\n    <app-user-card [user]=\"user\"  class=\"col-sm-3\"></app-user-card>\n  </div>\n</div>\n\n\n<div class=\"col-lg-12\"  >\n  <div class=\"thumbnail\" style=\"background-color: tomato\">\n    <div class=\"text-center\" >\n      <h4>Users you are  following</h4>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n<div class=\"col-sm-12\">\n  <div *ngFor = \"let user of userFollowing \">\n    <app-user-following-card [user]=\"user\"  class=\"col-sm-3\"></app-user-following-card>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/all-users/all-users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_user_service_component__ = __webpack_require__("../../../../../src/app/user-service/user-service.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllUsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllUsersComponent = (function () {
    function AllUsersComponent(userServiceComponent) {
        this.userServiceComponent = userServiceComponent;
    }
    AllUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userServiceComponent.getAllPerson()
            .subscribe(function (data) { return _this.user = data; });
        this.userServiceComponent.getAllNotFollowing()
            .subscribe(function (data) { return _this.userNotFollowing = data; });
        this.userServiceComponent.getAllFollowing()
            .subscribe(function (data) { return _this.userFollowing = data; });
    };
    return AllUsersComponent;
}());
AllUsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-all-users',
        template: __webpack_require__("../../../../../src/app/all-users/all-users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/all-users/all-users.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_user_service_component__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_user_service_component__["a" /* UserService */]) === "function" && _a || Object])
], AllUsersComponent);

var _a;
//# sourceMappingURL=all-users.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__following_following_component__ = __webpack_require__("../../../../../src/app/following/following.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__followers_followers_component__ = __webpack_require__("../../../../../src/app/followers/followers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__all_users_all_users_component__ = __webpack_require__("../../../../../src/app/all-users/all-users.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: '', redirectTo: '/endPoints', pathMatch: 'full' },
    { path: 'endPoints', component: __WEBPACK_IMPORTED_MODULE_5__about_about_component__["a" /* AboutComponent */] },
    { path: 'following', component: __WEBPACK_IMPORTED_MODULE_2__following_following_component__["a" /* FollowingComponent */] },
    { path: 'followers', component: __WEBPACK_IMPORTED_MODULE_3__followers_followers_component__["a" /* FollowersComponent */] },
    { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_4__messages_messages_component__["a" /* MessagesComponent */] },
    { path: 'allUsers', component: __WEBPACK_IMPORTED_MODULE_6__all_users_all_users_component__["a" /* AllUsersComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__following_following_component__ = __webpack_require__("../../../../../src/app/following/following.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__followers_followers_component__ = __webpack_require__("../../../../../src/app/followers/followers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__all_users_all_users_component__ = __webpack_require__("../../../../../src/app/all-users/all-users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_card_user_card_component__ = __webpack_require__("../../../../../src/app/user-card/user-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_service_user_service_component__ = __webpack_require__("../../../../../src/app/user-service/user-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_following_card_user_following_card_component__ = __webpack_require__("../../../../../src/app/user-following-card/user-following-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__message_card_message_card_component__ = __webpack_require__("../../../../../src/app/message-card/message-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__all_message_all_message_component__ = __webpack_require__("../../../../../src/app/all-message/all-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__message_service_message_service_component__ = __webpack_require__("../../../../../src/app/message-service/message-service.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__following_following_component__["a" /* FollowingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__followers_followers_component__["a" /* FollowersComponent */],
            __WEBPACK_IMPORTED_MODULE_7__all_users_all_users_component__["a" /* AllUsersComponent */],
            __WEBPACK_IMPORTED_MODULE_8__messages_messages_component__["a" /* MessagesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__user_card_user_card_component__["a" /* UserCardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__user_following_card_user_following_card_component__["a" /* UserFollowingCardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__message_card_message_card_component__["a" /* MessageCardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__all_message_all_message_component__["a" /* AllMessageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__user_service_user_service_component__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_17__message_service_message_service_component__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_16__all_message_all_message_component__["a" /* AllMessageComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/followers/followers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/followers/followers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\"  >\n  <div class=\"thumbnail\" style=\"background-color: tomato\">\n    <div class=\"text-center\" >\n      <h4>Followers</h4>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-sm-12\">\n  <div *ngFor = \"let user of user \">\n    <app-user-card [user]=\"user\"  class=\"col-sm-4\"></app-user-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/followers/followers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_user_service_component__ = __webpack_require__("../../../../../src/app/user-service/user-service.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowersComponent = (function () {
    function FollowersComponent(userServiceComponent) {
        this.userServiceComponent = userServiceComponent;
    }
    FollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userServiceComponent.getAllFollowers()
            .subscribe(function (data) { return _this.user = data; });
    };
    return FollowersComponent;
}());
FollowersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-followers',
        template: __webpack_require__("../../../../../src/app/followers/followers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/followers/followers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_user_service_component__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_user_service_component__["a" /* UserService */]) === "function" && _a || Object])
], FollowersComponent);

var _a;
//# sourceMappingURL=followers.component.js.map

/***/ }),

/***/ "../../../../../src/app/following/following.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/following/following.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\"  >\n  <div class=\"thumbnail\" style=\"background-color: tomato\">\n    <div class=\"text-center\" >\n      <h4>Following</h4>\n    </div>\n  </div>\n</div>\n<div class=\"col-sm-12\">\n  <div *ngFor = \"let user of user \">\n    <app-user-following-card [user]=\"user\"  class=\"col-sm-4\"></app-user-following-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/following/following.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_user_service_component__ = __webpack_require__("../../../../../src/app/user-service/user-service.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowingComponent = (function () {
    function FollowingComponent(userServiceComponent) {
        this.userServiceComponent = userServiceComponent;
    }
    FollowingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userServiceComponent.getAllFollowing()
            .subscribe(function (data) { return _this.user = data; });
    };
    return FollowingComponent;
}());
FollowingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-following',
        template: __webpack_require__("../../../../../src/app/following/following.component.html"),
        styles: [__webpack_require__("../../../../../src/app/following/following.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_user_service_component__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_user_service_component__["a" /* UserService */]) === "function" && _a || Object])
], FollowingComponent);

var _a;
//# sourceMappingURL=following.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav style=\"background: transparent\" class=\"navbar navbar-collapse\">\n  <div style=\"background: transparent\" class=\"container-fluid\">\n    <div style=\"background: transparent\" class=\"navbar-header\">\n      <br>\n      </div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li routerLinkActive=\"active\"><a routerLink=\"/endPoints\">End Points</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/allUsers\">All Users</a></li>\n        <li routerLinkActive=\"active\" ><a routerLink=\"/following\">Following</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/followers\">Followers</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/messages\">Messages</a></li>\n\n      </ul>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service_user_service_component__ = __webpack_require__("../../../../../src/app/user-service/user-service.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(userServiceComponent) {
        this.userServiceComponent = userServiceComponent;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.userServiceComponent.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service_user_service_component__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service_user_service_component__["a" /* UserService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/message-card/message-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-card/message-card.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"thumbnail\">\n\n  <div class=\"caption\">\n    <h5>\n        <span class=\"label label-primary\">\n          Message Id :{{ message.id }}\n        </span>\n    </h5>\n    <h5>\n      <i class=\"glyphicon glyphicon-user\"></i>\n      User Id :{{ message.person_id }}\n    </h5>\n    <h5>\n      <i class=\"glyphicon glyphicon-envelope\"></i>\n      {{ message.content }}\n    </h5>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/message-card/message-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Message__ = __webpack_require__("../../../../../src/app/Message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Message__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageCardComponent = (function () {
    function MessageCardComponent() {
    }
    MessageCardComponent.prototype.ngOnInit = function () {
    };
    return MessageCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('message'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Message__["Message"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Message__["Message"]) === "function" && _a || Object)
], MessageCardComponent.prototype, "message", void 0);
MessageCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-message-card',
        template: __webpack_require__("../../../../../src/app/message-card/message-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/message-card/message-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MessageCardComponent);

var _a;
//# sourceMappingURL=message-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/message-service/message-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
        this.newUserSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
    }
    MessageService.prototype.getAllMessages = function () {
        return this.http.get('http://localhost:8080/people/messages').map(function (res) { return res.json(); });
    };
    MessageService.prototype.find = function (data) {
        console.log(data);
        this.line = 'http://localhost:8080/people/messages?search=' + data;
        return this.http.get(this.line).map(function (res) { return res.json(); });
    };
    return MessageService;
}());
MessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MessageService);

var _a;
//# sourceMappingURL=message-service.component.js.map

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12\">\n  <div class=\"thumbnail\" style=\"background-color: tomato\">\n    <div class=\"text-center\" >\n      <h4>Messages by you and people you follow</h4>\n    </div>\n  </div>\n</div>\n<div class=\"col-lg-12\">\n  <input type=\"text\" required #titleInput>\n <button\n    class=\"btn btn-primary listing-button\"\n    type=\"submit\"(click) = 'find(titleInput.value)'>Search</button>\n</div>\n<br>\n<hr>\n<br>\n<div class=\"col-lg-12\">\n  <hr>\n</div>\n\n<div class=\"col-lg-12\">\n  <div *ngFor = \"let message of messsage \">\n    <app-message-card [message]=\"message\"  class=\"col-lg-6\"></app-message-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service_message_service_component__ = __webpack_require__("../../../../../src/app/message-service/message-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
        this.clickMessage = '';
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getAllMessages()
            .subscribe(function (data) { return _this.messsage = data; });
    };
    MessagesComponent.prototype.find = function (data1) {
        var _this = this;
        this.clickMessage = data1;
        if (this.clickMessage !== '') {
            this.messageService.find(this.clickMessage)
                .subscribe(function (data) { return _this.messsage = data; });
        }
        else {
            this.ngOnInit();
        }
    };
    return MessagesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('newUserForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], MessagesComponent.prototype, "newUserForm", void 0);
MessagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-messages',
        template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__message_service_message_service_component__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__message_service_message_service_component__["a" /* MessageService */]) === "function" && _b || Object])
], MessagesComponent);

var _a, _b;
//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-card/user-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-card/user-card.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"thumbnail\">\n\n  <div class=\"caption\">\n\n    <h3>\n        <span class=\"label label-primary\">\n          {{ user.handle }}\n        </span>\n      </h3>\n      <h4>\n        <i class=\"glyphicon glyphicon-pushpin\"></i>\n        {{ user.id }}\n      </h4>\n      <h4>\n        <i class=\"glyphicon glyphicon-user\"></i>\n        {{ user.name  }}\n      </h4>\n\n      <hr>\n\n    <button\n      class=\"btn btn-sm btn-success\"\n\n      (click)=follow(user.id)>\n      Follow\n    </button>\n\n\n     </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/user-card/user-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__("../../../../../src/app/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__User__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_user_service_component__ = __webpack_require__("../../../../../src/app/user-service/user-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_message_all_message_component__ = __webpack_require__("../../../../../src/app/all-message/all-message.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserCardComponent = (function () {
    function UserCardComponent(router, userServiceComponent, all) {
        this.router = router;
        this.userServiceComponent = userServiceComponent;
        this.all = all;
    }
    UserCardComponent.prototype.ngOnInit = function () {
    };
    UserCardComponent.prototype.follow = function (id) {
        this.userServiceComponent.follow(id).subscribe(function (response) { return console.log(response); });
        this.all.ngOnInit();
        this.router.navigate(['following']);
    };
    return UserCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('user'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__User__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__User__["User"]) === "function" && _a || Object)
], UserCardComponent.prototype, "user", void 0);
UserCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-card',
        template: __webpack_require__("../../../../../src/app/user-card/user-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-card/user-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_user_service_component__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_user_service_component__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__all_message_all_message_component__["a" /* AllMessageComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__all_message_all_message_component__["a" /* AllMessageComponent */]) === "function" && _d || Object])
], UserCardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-following-card/user-following-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-following-card/user-following-card.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"thumbnail\">\n\n  <div class=\"caption\">\n\n    <h3>\n        <span class=\"label label-primary\">\n         {{ user.handle }}\n        </span>\n    </h3>\n    <h4>\n      <i class=\"glyphicon glyphicon-pushpin\"></i>\n      {{ user.id }}\n    </h4>\n    <h4>\n      <i class=\"glyphicon glyphicon-user\"></i>\n      {{ user.name }}\n    </h4>\n\n    <hr>\n\n    <button\n      class=\"btn btn-sm btn-danger\"\n      (click)=unFollow(user.id)>\n      UnFollow\n    </button>\n\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/user-following-card/user-following-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User__ = __webpack_require__("../../../../../src/app/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__User___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__User__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_user_service_component__ = __webpack_require__("../../../../../src/app/user-service/user-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_message_all_message_component__ = __webpack_require__("../../../../../src/app/all-message/all-message.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFollowingCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserFollowingCardComponent = (function () {
    function UserFollowingCardComponent(router, userServiceComponent, all) {
        this.router = router;
        this.userServiceComponent = userServiceComponent;
        this.all = all;
    }
    UserFollowingCardComponent.prototype.ngOnInit = function () {
    };
    UserFollowingCardComponent.prototype.unFollow = function (id) {
        this.userServiceComponent.unFollow(id).subscribe(function (response) { return console.log(response); });
        this.all.ngOnInit();
        if (this.router.url === '/allUsers') {
            this.router.navigate(['following']);
        }
        else {
            this.router.navigate(['allUsers']);
        }
    };
    return UserFollowingCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('user'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__User__["User"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__User__["User"]) === "function" && _a || Object)
], UserFollowingCardComponent.prototype, "user", void 0);
UserFollowingCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-following-card',
        template: __webpack_require__("../../../../../src/app/user-following-card/user-following-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-following-card/user-following-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__user_service_user_service_component__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service_user_service_component__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__all_message_all_message_component__["a" /* AllMessageComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__all_message_all_message_component__["a" /* AllMessageComponent */]) === "function" && _d || Object])
], UserFollowingCardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-following-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-service/user-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(router, http) {
        this.router = router;
        this.http = http;
        this.messageSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    UserService.prototype.logout = function () {
        console.log('called');
        this.http.post('http://localhost:8080/people/logout', null);
        this.router.navigate(['http://localhost:8080/login']);
    };
    UserService.prototype.getAllNotFollowing = function () {
        return this.http.get('http://localhost:8080/people/getAllNotFollowing').map(function (res) { return res.json(); });
    };
    UserService.prototype.findPopular = function () {
        return this.http.get('http://localhost:8080/people/popular').map(function (res) { return res.json(); });
    };
    UserService.prototype.follow = function (id) {
        this.line = 'http://localhost:8080/people/follow/' + id;
        return this.http.get(this.line);
    };
    UserService.prototype.getAllPerson = function () {
        return this.http.get('http://localhost:8080/people/all').map(function (res) { return res.json(); });
    };
    UserService.prototype.unFollow = function (id) {
        this.line = 'http://localhost:8080/people/unfollow/' + id;
        return this.http.get(this.line);
    };
    UserService.prototype.getAllFollowers = function () {
        return this.http.get('http://localhost:8080/people/followers').map(function (res) { return res.json(); });
        /*return this.http.get('http://ec2-52-42-1-90.us-west-2.compute.amazonaws.com:8080/Test-0.0.1/users')
         .map(res  => res.json());
         */
    };
    UserService.prototype.getAllFollowing = function () {
        return this.http.get('http://localhost:8080/people/following').map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user-service.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map