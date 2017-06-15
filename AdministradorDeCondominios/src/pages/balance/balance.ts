import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

import { Api } from '../../providers/api';

import { PagoDataModel } from '../../models/models';

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
  public pagos: PagoDataModel[];
  public suma = 0;
  public balance = "entradas";

  constructor(public viewCtrl: ViewController,
              public api: Api) {
    this.api.buscarIngresos().then((data) => {
      if (data.success == 1) {
        this.pagos = data.data;
      }
      
      console.log(this.pagos);
      this.pagos.forEach(element => {
        console.log((element.cantidad.toString()));
        console.log(parseFloat(element.cantidad.toString()));
        this.suma += parseFloat(element.cantidad.toString());
      });

      console.log(this.suma);
    });
  }

  salir() {
    this.viewCtrl.dismiss();
  }

}
