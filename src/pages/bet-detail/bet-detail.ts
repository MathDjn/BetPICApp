import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {BetService} from '../../providers/bet-service-rest';

@Component({
    selector: 'page-bet-detail',
    templateUrl: 'bet-detail.html'
})
export class BetDetailPage {

    bet: any;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public BetService: BetService, public toastCtrl: ToastController) {
        this.bet = this.navParams.data;
        BetService.findById(this.bet.id).then(
            bet => this.bet = bet
        );
    }

    // favorite(bet) {
    //     this.BetService.favorite(bet)
    //         .then(bet => {
    //             let toast = this.toastCtrl.create({
    //                 message: 'Bet added to your favorites',
    //                 cssClass: 'mytoast',
    //                 duration: 1000
    //             });
    //             toast.present(toast);
    //         });
    // }

    share(bet) {
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
