import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {GameService} from '../../providers/game-service-rest';
import {GameDetailPage} from '../game-detail/game-detail';

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {

    favorites: Array<any>;

    constructor(public navCtrl: NavController, public service: GameService) {
        this.getFavorites();
    }

    itemTapped(favorite) {
        this.navCtrl.push(GameDetailPage, favorite.game.id);
    }


    deleteItem(favorite) {
        this.service.unfavorite(favorite)
            .then(() => {
                this.getFavorites();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    getFavorites() {
        this.service.getFavorites()
            .then(data => this.favorites = data);
    }

}
