import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

/**
 * Generated class for the Balance page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html',
})
export class Balance {

  constructor(public viewCtrl: ViewController) {
  }

  salir() {
    this.viewCtrl.dismiss();
  }

}
