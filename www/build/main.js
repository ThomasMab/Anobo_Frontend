webpackJsonp([0],{

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NewUpUE_NewUpUE__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    // fonction qui utilise la méthode Push pour accéder à NewUpUEPage
    HomePage.prototype.onGoToNewUpUE = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__NewUpUE_NewUpUE__["a" /* NewUpUEPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/thomas.mabire/Bureau/application/anobo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Anobo formulaire\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<!-- creation du bouton en appelant la fonction qui utilise la méthode Push --> \n  <ion-item>\n    <button ion-button full (click)="onGoToNewUpUE()"> Unité d\'enregistrement </button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/thomas.mabire/Bureau/application/anobo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUpUEPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__NewUE_NewUE__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__UpUE_UpUE__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewUpUEPage = /** @class */ (function () {
    function NewUpUEPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NewUpUEPage.prototype.onGoToNewUE = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__NewUE_NewUE__["a" /* NewUEPage */]);
    };
    NewUpUEPage.prototype.onGoToUpUE = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__UpUE_UpUE__["a" /* UpUEPage */]);
    };
    NewUpUEPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-NewUpUE',template:/*ion-inline-start:"/home/thomas.mabire/Bureau/application/anobo/src/pages/NewUpUE/NewUpUE.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title> créer et éditer UE</ion-title>\n    </ion-navbar>\n</ion-header>\n\n  <ion-content padding>\n  <!-- creation des boutons en appelant la fonction qui utilise la méthode Push --> \n    <ion-item>\n      <button ion-button full (click)="onGoToNewUE()"> Création </button>\n    </ion-item>\n    <ion-item>\n      <button ion-button full (click)="onGoToUpUE()"> Edition </button>\n    </ion-item>\n  </ion-content>'/*ion-inline-end:"/home/thomas.mabire/Bureau/application/anobo/src/pages/NewUpUE/NewUpUE.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], NewUpUEPage);
    return NewUpUEPage;
}());

//# sourceMappingURL=NewUpUE.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUEPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import  {Observable} from 'rxjs/Observable'
var NewUEPage = /** @class */ (function () {
    function NewUEPage(http) {
        this.http = http;
        this.ue = {};
    }
    NewUEPage.prototype.saveUeToServer = function () {
        this.http.post('http://localhost:5050/ue', this.ue, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', Accept: 'application/json', Authorization: '' }) })
            .subscribe(function (response) { console.log(response); });
    };
    NewUEPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-NewUE',template:/*ion-inline-start:"/home/thomas.mabire/Bureau/application/anobo/src/pages/NewUpUE/NewUE/NewUE.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title> Création UE</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content >\n    <ion-item>\n        <ion-label color="primary">Identidiant</ion-label>\n        <ion-input [(ngModel)]="ue.id_ue"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-label color="primary">Classe</ion-label>\n        <ion-select [(ngModel)]="ue.classe" placeholder="Sélectionnez dans la liste">\n            <ion-option value="Groupe UE">Groupe UE</ion-option>\n            <ion-option value="US">US</ion-option>\n            <ion-option value="Subdivision">Subdivision</ion-option>\n        </ion-select>    \n    </ion-item>\n\n        <!-- Menu déroulant en cascade en fonction de Classe -->\n    <ion-item>\n        <ion-label color="primary">Type</ion-label>\n        <ion-select [(ngModel)]="ue.type" placeholder="Sélectionnez dans la liste">\n            <ion-option value="Groupe UE A">Groupe UE A</ion-option>\n            <ion-option value="Groupe UE B">Groupe UE B</ion-option>\n            <ion-option value="Groupe UE C">Groupe UE C</ion-option>\n        </ion-select>\n    </ion-item> \n\n    <!-- Menu déroulant en cascade en fonction de Type -->\n    <ion-item>\n        <ion-label color="primary">Désignation</ion-label>\n        <ion-select [(ngModel)]="ue.designation" placeholder="Sélectionnez dans la liste">\n            <ion-option value="A1">A1</ion-option>\n            <ion-option value="B1">A2</ion-option>\n        </ion-select>\n        </ion-item>\n\n    <ion-item>\n        <ion-label color="primary">Description</ion-label>\n        <ion-textarea auto-grow= "true" [(ngModel)]="ue.description"></ion-textarea> \n    </ion-item>\n\n    <ion-item>\n        <ion-label color="primary">Interpretation </ion-label>\n       <ion-textarea auto-grow= "true" [(ngModel)]="ue.intepretation"></ion-textarea>\n    </ion-item>\n\n    <ion-item>\n        <ion-label color="primary">Secteur</ion-label>\n        <ion-input [(ngModel)]="ue.secteur"></ion-input>\n    </ion-item>\n\n    <button ion-button full (click)="saveUeToServer()"> Enregistrer </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/thomas.mabire/Bureau/application/anobo/src/pages/NewUpUE/NewUE/NewUE.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NewUEPage);
    return NewUEPage;
}());

//# sourceMappingURL=NewUE.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpUEPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpUEPage = /** @class */ (function () {
    function UpUEPage(http) {
        this.http = http;
        this.listUE = [];
    }
    UpUEPage.prototype.getUeList = function () {
        var _this = this;
        this.http.get('http://localhost:5050/ue/').subscribe(function (response) {
            console.log(response);
            _this.listUE = response;
        });
    };
    UpUEPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-UpUE',template:/*ion-inline-start:"/home/thomas.mabire/Bureau/application/anobo/src/pages/NewUpUE/UpUE/UpUE.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title> Edition UE </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item>\n        <button ion-button full (click)="getUeList()"> uelist </button>\n    </ion-item>\n\n    <ion-list>\n        <ion-item *ngFor= "let ue of listUE">\n            <ion-label color="tertiary">{{ue.id_ue}}</ion-label>\n            <ion-label color="primary">{{ue.classe}}</ion-label>\n            <ion-label color="primary">{{ue.type}}</ion-label>\n        </ion-item>\n    </ion-list>\n\n\n    <ion-list>\n        <!-- POST un nouvel id de 1 à n -->\n        <ion-item>\n            <ion-label color="primary">Identidiant</ion-label>\n            <ion-input  readonly placeholder="...."></ion-input>\n        </ion-item>\n\n        <button ion-button type="submit" block>Rechercher identifiant</button>\n\n\n        <!-- PATCH l\'entite ci dessus pour remplir les attributs -->\n        <ion-item>\n            <ion-label color="primary">Classe</ion-label>\n            <ion-select [(ngModel)]="classe" placeholder="Sélectionnez dans la liste">\n            <ion-option value="groupe">Groupe UE</ion-option>\n            <ion-option value="us">US</ion-option>\n            <ion-option value="subdivision">Subdivison</ion-option>\n            </ion-select>\n        </ion-item>\n\n            <!-- Menu déroulant en cascade en fonction de Classe -->\n        <ion-item>\n            <ion-label color="primary">Type</ion-label>\n            <ion-select [(ngModel)]="type" placeholder="Sélectionnez dans la liste">\n                <ion-option value="A">A</ion-option>\n                <ion-option value="B">B</ion-option>\n                <ion-option value="C">C</ion-option>\n            </ion-select>\n        </ion-item>\n\n        <!-- Menu déroulant en cascade en fonction de Type -->\n        <ion-item>\n            <ion-label color="primary">Désignation</ion-label>\n            <ion-select [(ngModel)]="designation" placeholder="Sélectionnez dans la liste">\n                <ion-option value="A1">A1</ion-option>\n                <ion-option value="A2">A2</ion-option>\n            </ion-select>        \n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary">Description</ion-label>\n            <ion-textarea auto-grow= "true"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary">Interpretation </ion-label>\n            <ion-textarea auto-grow= "true"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n            <ion-label color="primary">Secteur</ion-label>\n            <ion-textarea auto-grow= "true"></ion-textarea>\n        </ion-item>\n\n        <button ion-button type="submit" block>Mise à jour UE</button>\n    </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/thomas.mabire/Bureau/application/anobo/src/pages/NewUpUE/UpUE/UpUE.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UpUEPage);
    return UpUEPage;
}());

//# sourceMappingURL=UpUE.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_NewUpUE_NewUpUE__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_NewUpUE_NewUE_NewUE__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_NewUpUE_UpUE_UpUE__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// ajout des pages que exporté de chaque fichier js (export class) (1)





// Ajout chaque import (1) dans declaration
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_NewUpUE_NewUpUE__["a" /* NewUpUEPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_NewUpUE_NewUE_NewUE__["a" /* NewUEPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_NewUpUE_UpUE_UpUE__["a" /* UpUEPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            // Ajout chaque import (1) dans entryComponent
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_NewUpUE_NewUpUE__["a" /* NewUpUEPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_NewUpUE_NewUE_NewUE__["a" /* NewUEPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_NewUpUE_UpUE_UpUE__["a" /* UpUEPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/thomas.mabire/Bureau/application/anobo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/thomas.mabire/Bureau/application/anobo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map