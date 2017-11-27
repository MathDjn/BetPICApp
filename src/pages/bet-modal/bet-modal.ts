import {Component} from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-bet-modal',
  templateUrl: 'bet-modal.html'
})
export class BetModal {

  username: ''; //Declare the username object to be bound to your html
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {}

CloseModal() {
  this.viewCtrl.dismiss(this.username);
 }

}
