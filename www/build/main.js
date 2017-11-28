webpackJsonp([0],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_service_rest__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_detail_game_detail__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(303);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__game_detail_game_detail__["a" /* GameDetailPage */], game.id);
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
        selector: 'page-game-list',template:/*ion-inline-start:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\game-list\game-list.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="game-list">\n\n\n\n    <ion-list *ngIf="viewMode===\'list\'">\n\n\n\n        <ion-item-sliding *ngFor="let game of games">\n\n            <button ion-item (click)="openGameDetail(game)">\n\n                <ion-thumbnail item-left>\n\n                    <img src="{{game.logoTeam_A}}"/>\n\n                </ion-thumbnail>\n\n                <div text-center>\n\n                  <h2> <b>{{game.team_A}}</b> {{game.goals_team_A}}<b> - </b>{{game.goals_team_B}} <b>{{game.team_B}} </b></h2>\n\n                  <p>{{game.date | date: \'dd/MM/yyyy\' }}</p>\n\n                </div>\n\n                <ion-thumbnail item-right>\n\n                    <img src="{{game.logoTeam_B}}"/>\n\n                </ion-thumbnail>\n\n            </button>\n\n            <ion-item-options>\n\n                <button danger (click)="deleteItem(game)">Delete</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n    <!-- <div *ngIf="viewMode===\'map\'" style="width:100%;height:100%;" id="map"></div> -->\n\n\n\n</ion-content>\n\n\n\n<!-- TODO <button ion-button (click)="openCreateBet()">\n\n      Parier !\n\n</button> -->\n\n'/*ion-inline-end:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\game-list\game-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_game_service_rest__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Config */]])
], GameListPage);

//# sourceMappingURL=game-list.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(280);
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




var betsURL = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* SERVER_URL */] + 'api/bets/';
var BetService = (function () {
    function BetService(http) {
        this.http = http;
        this.favoriteCounter = 0;
        this.favorites = [];
        this.http = http;
    }
    BetService.prototype.findAll = function () {
        return this.http.get(betsURL)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    BetService.prototype.findById = function (id) {
        return this.http.get(betsURL + "id/" + id)
            .map(function (res) { return res.json(); })
            .toPromise();
    };
    BetService.prototype.create = function (bet) {
        return this.http.post(betsURL + "create", bet);
    };
    return BetService;
}());
BetService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], BetService);

//# sourceMappingURL=bet-service-rest.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bet_service_rest__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_detail_game_detail__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__(303);
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





var BetListPage = (function () {
    function BetListPage(navCtrl, service, config) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.config = config;
        this.searchKey = "";
        this.viewMode = "list";
        this.findAll();
    }
    BetListPage.prototype.openGameDetail = function (bet) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__game_detail_game_detail__["a" /* GameDetailPage */], bet);
    };
    BetListPage.prototype.onInput = function (event) {
        // Reset items back to all of the items
        this.bets = this.betsForSearch;
        // set val to the value of the searchbar
        var val = this.searchKey;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.bets = this.bets.filter(function (bet) {
                return (bet.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    BetListPage.prototype.onCancel = function (event) {
        this.findAll();
    };
    BetListPage.prototype.findAll = function () {
        var _this = this;
        this.service.findAll()
            .then(function (data) {
            _this.bets = data;
            _this.betsForSearch = data;
        })
            .catch(function (error) { return alert(error); });
    };
    BetListPage.prototype.betMap = function () {
        var _this = this;
        setTimeout(function () {
            _this.map = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.map("map").setView([48.85, 2.35], 10);
            __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(_this.map);
            _this.betMarkers();
        });
    };
    BetListPage.prototype.betMarkers = function () {
        var _this = this;
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.layerGroup([]);
        this.bets.forEach(function (bet) {
            if (bet.lat, bet.lng) {
                var marker = __WEBPACK_IMPORTED_MODULE_4_leaflet___default.a.marker([bet.lat, bet.lng]).on('click', function (event) { return _this.openGameDetail(event.target.data); });
                marker.data = bet;
                _this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    };
    return BetListPage;
}());
BetListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-bet-list',template:/*ion-inline-start:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\bet-list\bet-list.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-searchbar [(ngModel)]="searchKey" (ionInput)="onInput($event)"\n\n                       (ionCancel)="onCancel($event)"></ion-searchbar>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bet-list">\n\n\n\n    <ion-list *ngIf="viewMode===\'list\'">\n\n\n\n        <ion-item-sliding *ngFor="let bet of bets">\n\n            <button ion-item (click)="openGameDetail(bet.GameId)">\n\n                <h2><b>{{bet.team_A}}</b> {{bet.goals_team_A}}<b> - </b>{{bet.goals_team_B}} <b>{{bet.team_B}} </b></h2>\n\n                <p *ngIf=" bet.result == \'Home team wins\' ">{{bet.team_A}} l\'emporte</p>\n\n                <p *ngIf=" bet.result == \'Draw\' ">Match nul</p>\n\n                <p *ngIf=" bet.result == \'Away team wins\' ">{{bet.team_B}} l\'emporte</p>\n\n                <i>Pari réalisé par {{bet.username}}</i>\n\n            </button>\n\n            <ion-item-options>\n\n                <button danger (click)="deleteItem(bet)">Delete</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\bet-list\bet-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_bet_service_rest__["a" /* BetService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Config */]])
], BetListPage);

//# sourceMappingURL=bet-list.js.map

/***/ }),

/***/ 146:
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
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_URL; });
var SERVER_URL = "https://bet-pic.herokuapp.com/";
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BetModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BetModal = (function () {
    function BetModal(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BetModal.prototype.CloseModal = function () {
        this.viewCtrl.dismiss(this.username);
    };
    return BetModal;
}());
BetModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-bet-modal',template:/*ion-inline-start:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\bet-modal\bet-modal.html"*/'<form>\n\n  <ion-item>\n\n    <ion-label stacked>Ton petit nom ? </ion-label>\n\n    <ion-input [(ngModel)]="username" name="username" type="text" ></ion-input>\n\n  </ion-item>\n\n  <button ion-button block (click)="CloseModal()">C\'est mon dernier mot Jean-Pierre</button>\n\n</form>\n\n'/*ion-inline-end:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\bet-modal\bet-modal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], BetModal);

//# sourceMappingURL=bet-modal.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_service_rest__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_detail_game_detail__ = __webpack_require__(76);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__game_detail_game_detail__["a" /* GameDetailPage */], favorite.game.id);
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
        selector: 'page-favorite-list',template:/*ion-inline-start:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\favorite-list\favorite-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Favorites</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let favorite of favorites">\n\n            <button ion-item (click)="itemTapped(favorite)">\n\n                <!-- <h2>{{favorite.game.name}}</h2> -->\n\n                <h2 text-center class="card-title"> <ion-icon name="football"></ion-icon> <b> {{favorite.game.team_A}} vs {{favorite.game.team_B}} </b><ion-icon name="football"></ion-icon></h2>\n\n                <p text-center class="card-title">{{favorite.game.date | date: \'dd/MM/yyyy\' }} ∙ {{favorite.game.stadium}}</p>\n\n            </button>\n\n            <ion-item-options>\n\n                <button danger (click)="deleteItem(favorite)">Delete</button>\n\n            </ion-item-options>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\favorite-list\favorite-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_game_service_rest__["a" /* GameService */]])
], FavoriteListPage);

//# sourceMappingURL=favorite-list.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_list_game_list__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bet_list_bet_list__ = __webpack_require__(136);
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
    WelcomePage.prototype.openBetList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bet_list_bet_list__["a" /* BetListPage */]);
    };
    return WelcomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], WelcomePage.prototype, "slides", void 0);
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\welcome\welcome.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>BET\'PIC</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content no-bounce>\n\n    <ion-slides>\n\n        <ion-slide style="background-image: url(\'assets/img/slide_1.jpg\');">\n\n            <p>L\'important, ce ne sont pas les matchs.<br/>C\'est ce que vous en faites.</p>\n\n        </ion-slide>\n\n\n\n\n\n\n\n        <ion-slide style="background-image: url(\'assets/img/slide_3.jpg\')">\n\n            <p>\n\n                <button ion-button (click)="openGameList()" clear item-center color="secondary">\n\n                      Voir les matchs !\n\n                </button>\n\n            </p>\n\n        </ion-slide>\n\n\n\n        <ion-slide style="background-image: url(\'assets/img/slide_2.jpg\')">\n\n             <p>\n\n             <button ion-button (click)="openBetList()" clear item-center color="secondary">\n\n                      Voir les paris !\n\n                </button>\n\n                 </p>\n\n        </ion-slide>\n\n\n\n\n\n\n\n    </ion-slides>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\welcome\welcome.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(311);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_game_list_game_list__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_bet_list_bet_list__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_game_detail_game_detail__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_favorite_list_favorite_list__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_bet_modal_bet_modal__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_game_service_rest__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_bet_service_rest__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(278);
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
            __WEBPACK_IMPORTED_MODULE_6__pages_game_list_game_list__["a" /* GameListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_game_detail_game_detail__["a" /* GameDetailPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_bet_list_bet_list__["a" /* BetListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_bet_modal_bet_modal__["a" /* BetModal */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_game_list_game_list__["a" /* GameListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_game_detail_game_detail__["a" /* GameDetailPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_bet_list_bet_list__["a" /* BetListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_bet_modal_bet_modal__["a" /* BetModal */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__providers_game_service_rest__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_12__providers_bet_service_rest__["a" /* BetService */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_game_list_game_list__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_bet_list_bet_list__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_favorite_list_favorite_list__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__ = __webpack_require__(305);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */], icon: 'bookmark' },
            { title: 'Matchs', component: __WEBPACK_IMPORTED_MODULE_4__pages_game_list_game_list__["a" /* GameListPage */], icon: 'football' },
            { title: 'Favoris', component: __WEBPACK_IMPORTED_MODULE_6__pages_favorite_list_favorite_list__["a" /* FavoriteListPage */], icon: 'star' },
            { title: 'Paris', component: __WEBPACK_IMPORTED_MODULE_5__pages_bet_list_bet_list__["a" /* BetListPage */], icon: 'beer' }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n\n\n  <ion-content>\n\n\n\n    <img src="assets/img/logo.jpg" class="menu-logo"/>\n\n\n\n    <ion-list>\n\n      <ion-list-header>\n\n        BetPic\n\n      </ion-list-header>\n\n      <button menuClose ion-item *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n\n        <ion-icon item-left [name]="menuItem.icon"></ion-icon>\n\n        {{menuItem.title}}\n\n      </button>\n\n    </ion-list>\n\n\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(280);
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

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game_service_rest__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_bet_service_rest__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bet_modal_bet_modal__ = __webpack_require__(302);
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
    function GameDetailPage(actionSheetCtrl, navCtrl, navParams, GameService, BetService, toastCtrl, modalCtrl) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.GameService = GameService;
        this.BetService = BetService;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.game = {};
        var gameId = this.navParams.data;
        GameService.findById(gameId).then(function (game) { return _this.game = game; });
    }
    GameDetailPage.prototype.favorite = function (game) {
        var _this = this;
        this.GameService.favorite(game)
            .then(function (game) {
            var toast = _this.toastCtrl.create({
                message: "C'est dans tes favs !",
                cssClass: 'mytoast',
                duration: 1000
            });
            toast.present(toast);
        });
    };
    GameDetailPage.prototype.bet = function (game) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Parier sur',
            buttons: [
                {
                    text: game.team_A + " l'emporte",
                    handler: function () {
                        var betModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__bet_modal_bet_modal__["a" /* BetModal */]);
                        betModal.onDidDismiss(function (username) {
                            var bet = {
                                username: username,
                                GameId: game.id,
                                result: 'Home Team wins'
                            };
                            _this.BetService.create(bet);
                        });
                        betModal.present();
                    }
                },
                {
                    text: "Match nul",
                    handler: function () {
                        var betModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__bet_modal_bet_modal__["a" /* BetModal */]);
                        betModal.onDidDismiss(function (username) {
                            var bet = {
                                username: username,
                                GameId: game.id,
                                result: 'Draw'
                            };
                            _this.BetService.create(bet);
                        });
                        betModal.present();
                    }
                },
                {
                    text: game.team_B + " l'emporte",
                    handler: function () {
                        var betModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__bet_modal_bet_modal__["a" /* BetModal */]);
                        betModal.onDidDismiss(function (username) {
                            var bet = {
                                username: username,
                                GameId: game.id,
                                result: 'Away team wins'
                            };
                            _this.BetService.create(bet);
                        });
                        betModal.present();
                    }
                },
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () { return console.log('Pari annulé'); }
                }
            ]
        });
        actionSheet.present();
    };
    return GameDetailPage;
}());
GameDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-game-detail',template:/*ion-inline-start:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\game-detail\game-detail.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Matchs</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card *ngIf="game.id">\n\n        <ion-card-content>\n\n            <h2 text-center class="card-title"> <ion-icon name="football"></ion-icon> <b>{{game.team_A}}</b> {{game.goals_team_A}}<b> - </b>{{game.goals_team_B}} <b>{{game.team_B}} </b><ion-icon name="football"></ion-icon></h2>\n\n            <!-- <p>{{game.stadium}}</p> -->\n\n        </ion-card-content>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-icon item-left name="time"></ion-icon>\n\n                <h3>Date</h3>\n\n                <ion-note item-right>{{game.date | date: \'dd/MM/yyyy H:mm\' }}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left name="pin"></ion-icon>\n\n                <h3>Stade</h3>\n\n                <ion-note item-right>{{game.stadium}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left name="globe"></ion-icon>\n\n                <h3>Ligue</h3>\n\n                <ion-note item-right>{{game.league}}</ion-note>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-icon item-left name="beer"></ion-icon>\n\n                <h3>Paris</h3>\n\n\n\n                <ion-list>\n\n                  <ion-item-sliding *ngFor="let bet of bets">\n\n                    <h5>{{bet.username}}</h5>\n\n                    <ion-note item-right>{{bet.result}}</ion-note>\n\n                  </ion-item-sliding>\n\n                </ion-list>\n\n\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <ion-item>\n\n            <button ion-button icon-left (click)="favorite(game)" clear item-left color="secondary">\n\n                <ion-icon name="star"></ion-icon>\n\n                Favoris\n\n            </button>\n\n            <button ion-button icon-left (click)="bet(game)" clear item-right color="secondary">\n\n                <ion-icon name="bet"></ion-icon>\n\n                Parier !\n\n            </button>\n\n        </ion-item>\n\n\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mathilde.dujon\Documents\GitHub\BetPICApp\src\pages\game-detail\game-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_game_service_rest__["a" /* GameService */], __WEBPACK_IMPORTED_MODULE_3__providers_bet_service_rest__["a" /* BetService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], GameDetailPage);

//# sourceMappingURL=game-detail.js.map

/***/ })

},[306]);
//# sourceMappingURL=main.js.map