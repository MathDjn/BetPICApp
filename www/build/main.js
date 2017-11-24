webpackJsonp([0],{

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_service_rest__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_detail_game_detail__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameListPage = (function () {
    function GameListPage(navCtrl, service, config) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.config = config;
        this.searchKey = "";
        this.viewMode = "list";
        this.findAll();
    }
    GameListPage.prototype.openGameDetail = function (game) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__game_detail_game_detail__["a" /* GameDetailPage */], game);
    };
    GameListPage.prototype.onInput = function (event) {
        // Reset items back to all of the items
        this.games = this.gamesForSearch;
        // set val to the value of the searchbar
        var val = this.searchKey;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.games = this.games.filter(function (game) {
                return (game.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    GameListPage.prototype.onCancel = function (event) {
        this.findAll();
    };
    GameListPage.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) {
            _this.games = data;
            _this.gamesForSearch = data;
        })
            .catch(function (error) { return alert(error); });
    };
    GameListPage.prototype.gameMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.map("map").setView([48.85, 2.35], 10);
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(_this.map);
            _this.gameMarkers();
        });
    };
    GameListPage.prototype.gameMarkers = function () {
        var _this = this;
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.layerGroup([]);
        this.games.forEach(function (game) {
            if (game.lat, game.lng) {
                var marker = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.marker([game.lat, game.lng]).on('click', function (event) { return _this.openGameDetail(event.target.data); });
                marker.data = game;
                _this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    };
    return GameListPage;
}());
GameListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-game-list',template:/*ion-inline-start:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\game-list\game-list.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="game-list">\n\n\n\n    <ion-list *ngIf="viewMode===\'list\'">\n\n\n\n        <ion-item-sliding *ngFor="let game of games">\n\n            <button ion-item (click)="openGameDetail(game)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="{{game.image}}"/>\n\n                </ion-thumbnail>\n\n                <h2>{{game.name}}</h2>\n\n                <p>{{game.date}}</p>\n\n            </button>\n\n            <ion-item-options>\n\n                <button danger (click)="deleteItem(game)">Delete</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n    <div *ngIf="viewMode===\'map\'" style="width:100%;height:100%;" id="map"></div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer padding>\n\n    <ion-segment [(ngModel)]="viewMode">\n\n        <ion-segment-button value="list">\n\n            <ion-icon name="list"></ion-icon>\n\n        </ion-segment-button>\n\n        <ion-segment-button value="map" (ionSelect)="gameMap()">\n\n            <ion-icon name="map"></ion-icon>\n\n        </ion-segment-button>\n\n    </ion-segment>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\game-list\game-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_game_service_rest__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Config */]])
], GameListPage);

//# sourceMappingURL=game-list.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_service_rest__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameDetailPage = (function () {
    function GameDetailPage(actionSheetCtrl, navCtrl, navParams, GameService, toastCtrl) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GameService = GameService;
        this.toastCtrl = toastCtrl;
        this.game = this.navParams.data;
        GameService.findById(this.game.id).then(function (game) { return _this.game = game; });
    }
    GameDetailPage.prototype.favorite = function (game) {
        var _this = this;
        this.GameService.favorite(game)
            .then(function (game) {
            var toast = _this.toastCtrl.create({
                message: 'Game added to your favorites',
                cssClass: 'mytoast',
                duration: 1000
            });
            toast.present(toast);
        });
    };
    GameDetailPage.prototype.share = function (game) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: function () { return console.log('share via twitter'); }
                },
                {
                    text: 'Facebook',
                    handler: function () { return console.log('share via facebook'); }
                },
                {
                    text: 'Email',
                    handler: function () { return console.log('share via email'); }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { return console.log('cancel share'); }
                }
            ]
        });
        actionSheet.present();
    };
    return GameDetailPage;
}());
GameDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-game-detail',template:/*ion-inline-start:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\game-detail\game-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Matchs</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card *ngIf="game.id">\n\n        <ion-card-content>\n\n            <h2 class="card-title">{{game.team_A}} versus {{game.team_B}}</h2>\n\n            <!-- <p>{{game.stadium}}</p> -->\n\n        </ion-card-content>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-icon item-left name="clock"></ion-icon>\n\n                <h3>Date</h3>\n\n                <ion-note item-right>{{game.date}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left name="home"></ion-icon>\n\n                <h3>Stade</h3>\n\n                <ion-note item-right>{{game.stadium}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left name="globe"></ion-icon>\n\n                <h3>Ligue</h3>\n\n                <ion-note item-right>{{game.league}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-note item-right>{{game.team_A}} {{game.goals_team_A}} - {{game.goals_team_B}} {{game.team_B}}</ion-note>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-item>\n\n            <button ion-button icon-left (click)="favorite(game)" clear item-left>\n\n                <ion-icon name="star"></ion-icon>\n\n                Favorite\n\n            </button>\n\n            <button ion-button icon-left (click)="share(game)" clear item-right>\n\n                <ion-icon name="share"></ion-icon>\n\n                Share\n\n            </button>\n\n        </ion-item>\n\n\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\game-detail\game-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_game_service_rest__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], GameDetailPage);

//# sourceMappingURL=game-detail.js.map

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_service_rest__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_detail_game_detail__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoriteListPage = (function () {
    function FavoriteListPage(navCtrl, service) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.getFavorites();
    }
    FavoriteListPage.prototype.itemTapped = function (favorite) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__game_detail_game_detail__["a" /* GameDetailPage */], favorite.game);
    };
    FavoriteListPage.prototype.deleteItem = function (favorite) {
        var _this = this;
        this.service.unfavorite(favorite)
            .then(function () {
            _this.getFavorites();
        })
            .catch(function (error) { return alert(JSON.stringify(error)); });
    };
    FavoriteListPage.prototype.getFavorites = function () {
        var _this = this;
        this.service.getFavorites()
            .then(function (data) { return _this.favorites = data; });
    };
    return FavoriteListPage;
}());
FavoriteListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-favorite-list',template:/*ion-inline-start:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\favorite-list\favorite-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Favorites</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let favorite of favorites">\n\n            <button ion-item (click)="itemTapped(favorite)">\n\n                <h2>{{favorite.game.name}}</h2>\n\n                <p>{{favorite.game.team_A}} vs {{favorite.game.team_B}}</p>\n\n                <p>{{favorite.game.date}} ∙ {{favorite.game.stadium}}</p>\n\n            </button>\n\n            <ion-item-options>\n\n                <button danger (click)="deleteItem(favorite)">Delete</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\favorite-list\favorite-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_game_service_rest__["a" /* GameService */]])
], FavoriteListPage);

//# sourceMappingURL=favorite-list.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_list_game_list__ = __webpack_require__(125);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WelcomePage = (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WelcomePage.prototype.ngAfterViewInit = function () {
        this.slides.pager = true;
    };
    WelcomePage.prototype.openGameList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__game_list_game_list__["a" /* GameListPage */]);
    };
    return WelcomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
], WelcomePage.prototype, "slides", void 0);
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\welcome\welcome.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Welcome</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n    <ion-slides>\n\n        <ion-slide style="background-image: url(\'assets/img/slide_1.jpg\');">\n\n            <p>L\'important, ce ne sont pas les apps.<br/>C\'est ce que vous en faites.</p>\n\n        </ion-slide>\n\n\n\n        <ion-slide style="background-image: url(\'assets/img/slide_2.jpg\')">\n\n            <p>Discover the best shows</p>\n\n        </ion-slide>\n\n\n\n        <ion-slide style="background-image: url(\'assets/img/slide_3.jpg\')">\n\n            <p>\n\n                Learn how to code with HackX! <br />\n\n                <button ion-button (click)="openGameList()">\n\n                    Start\n\n                </button>\n\n            </p>\n\n        </ion-slide>\n\n    </ion-slides>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\welcome\welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\about\about.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>About</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <div class="about-header">\n\n        <img src="assets/img/logo.jpg">\n\n    </div>\n\n\n\n    <div padding class="about-info">\n\n\n\n        <h4>Bet\'PIC 2017</h4>\n\n\n\n        <p>\n\n            Bet\'PIC, pour parier entre amis !\n\n        </p>\n\n\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(306);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_game_list_game_list__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_game_detail_game_detail__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_favorite_list_favorite_list__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_game_service_rest__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(276);
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_game_list_game_list__["a" /* GameListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_game_detail_game_detail__["a" /* GameDetailPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_game_list_game_list__["a" /* GameListPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_game_detail_game_detail__["a" /* GameDetailPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__providers_game_service_rest__["a" /* GameService */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_game_list_game_list__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favorite_list_favorite_list__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Games', component: __WEBPACK_IMPORTED_MODULE_4__pages_game_list_game_list__["a" /* GameListPage */], icon: 'bonfire' },
            { title: 'Favorites', component: __WEBPACK_IMPORTED_MODULE_5__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */], icon: 'star' }
        ];
        this.helpMenuItems = [
            { title: 'Welcome', component: __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */], icon: 'bookmark' },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */], icon: 'information-circle' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to game in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-content>\n\n\n\n    <img src="assets/img/logo.jpg" class="menu-logo"/>\n\n\n\n    <ion-list>\n\n      <ion-list-header>\n\n        BetPic\n\n      </ion-list-header>\n\n      <button menuClose ion-item *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n\n        {{menuItem.title}}\n\n      </button>\n\n    </ion-list>\n\n\n\n    <ion-list>\n\n      <ion-list-header>\n\n        Help\n\n      </ion-list-header>\n\n      <button menuClose ion-item *ngFor="let menuItem of helpMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n\n        {{menuItem.title}}\n\n      </button>\n\n    </ion-list>\n\n\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_URL; });
var SERVER_URL = "https://young-atoll-17718.herokuapp.com/";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var gamesURL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */] + 'api/games/';
var GameService = (function () {
    function GameService(http) {
        this.http = http;
        this.favoriteCounter = 0;
        this.favorites = [];
        this.http = http;
    }
    GameService.prototype.findAll = function () {
        return this.http.get(gamesURL)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    GameService.prototype.findById = function (id) {
        return this.http.get(gamesURL + "id/" + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    GameService.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    GameService.prototype.favorite = function (game) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({ id: this.favoriteCounter, game: game });
        return Promise.resolve();
    };
    GameService.prototype.unfavorite = function (favorite) {
        var index = this.favorites.indexOf(favorite);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    };
    return GameService;
}());
GameService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], GameService);

//# sourceMappingURL=game-service-rest.js.map

/***/ })

},[301]);
//# sourceMappingURL=main.js.map