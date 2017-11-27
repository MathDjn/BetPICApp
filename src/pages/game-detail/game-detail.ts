import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController, ModalController} from 'ionic-angular';
import {GameService} from '../../providers/game-service-rest';
import {BetService} from '../../providers/bet-service-rest';
import {BetModal} from '../bet-modal/bet-modal'

@Component({
    selector: 'page-game-detail',
    templateUrl: 'game-detail.html'
})
export class GameDetailPage {

    game: any;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public GameService: GameService, public BetService: BetService, public toastCtrl: ToastController, public modalCtrl: ModalController) {
        this.game = {};
        let gameId = this.navParams.data;
        GameService.findById(gameId).then(
            game => this.game = game
        );
    }

    favorite(game) {
        this.GameService.favorite(game)
            .then(game => {
                let toast = this.toastCtrl.create({
                    message: "C'est dans tes favs !",
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

    bet(game) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Parier sur',
            buttons: [
                {
                    text: game.team_A+" l'emporte",
                    handler: () => {
                      let betModal = this.modalCtrl.create(BetModal);
                      betModal.onDidDismiss(username => {
                        let bet = {
                          username: username,
                          GameId: game.id,
                          result: 'Home Team wins'
                        };
                        this.BetService.create(bet);
                      });
                      betModal.present();
                    }
                },
                {
                    text: "Match nul",
                    handler: () => {
                      let betModal = this.modalCtrl.create(BetModal);
                      betModal.onDidDismiss(username => {
                        let bet = {
                          username: username,
                          GameId: game.id,
                          result: 'Draw'
                        };
                        this.BetService.create(bet);
                      });
                      betModal.present();
                    }
                },
                {
                    text: game.team_B+" l'emporte",
                    handler: () => {
                      let betModal = this.modalCtrl.create(BetModal);
                      betModal.onDidDismiss(username => {
                        let bet = {
                          username: username,
                          GameId: game.id,
                          result: 'Away team wins'
                        };
                        this.BetService.create(bet);
                      });
                      betModal.present();
                    }
                },
                {
                    text: 'Annuler',
                    role: 'cancel',
                    handler: () => console.log('Pari annulé')
                }
            ]
        });

        actionSheet.present();
    }

}
