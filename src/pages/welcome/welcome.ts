import {Component, ViewChild} from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import {GameListPage} from '../game-list/game-list';
import {BetListPage} from '../bet-list/bet-list';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;

    constructor(public navCtrl: NavController) {
    }

    ngAfterViewInit() {
      this.slides.pager = true;
    }

    openGameList() {
        this.navCtrl.push(GameListPage);
    }

    openBetList() {
        this.navCtrl.push(BetListPage);
    }
}
