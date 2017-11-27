import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {GameListPage} from '../pages/game-list/game-list';
import {BetListPage} from '../pages/bet-list/bet-list';
import {GameDetailPage} from '../pages/game-detail/game-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {BetModal} from '../pages/bet-modal/bet-modal';

import {GameService} from "../providers/game-service-rest";
import {BetService} from "../providers/bet-service-rest";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    GameListPage,
    GameDetailPage,
    BetListPage,
    FavoriteListPage,
    BetModal
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    GameListPage,
    GameDetailPage,
    BetListPage,
    FavoriteListPage,
    BetModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GameService,
    BetService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
