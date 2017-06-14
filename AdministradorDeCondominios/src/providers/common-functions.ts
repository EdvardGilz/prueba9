import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the CommonFunctions provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CommonFunctions {

  constructor(private alertController: AlertController) {
  }

  despliegaAlerta(titulo: string, subtitulo: string) {
    let alert = this.alertController.create({
      title: titulo,
      subTitle: subtitulo,
      buttons: ['OK']
    });
    alert.present();
  }

}
