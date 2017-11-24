import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {GameService} from '../../providers/game-service-rest';

@Component({
    selector: 'page-game-detail',
    templateUrl: 'game-detail.html'
})
export class GameDetailPage {

    game: any;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public GameService: GameService, public toastCtrl: ToastController) {
        this.game = this.navParams.data;
        GameService.findById(this.game.id).then(
            game => this.game = game
        );
    }

    favorite(game) {
        this.GameService.favorite(game)
            .then(game => {
                let toast = this.toastCtrl.create({
                    message: 'Game added to your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

    share(game) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => console.log('share via twitter')
                },
                {
                    text: 'Facebook',
                    handler: () => console.log('share via facebook')
                },
                {
                    text: 'Email',
                    handler: () => console.log('share via email')
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });

        actionSheet.present();
    }

}
