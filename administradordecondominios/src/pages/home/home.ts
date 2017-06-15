import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Global } from '../../providers/global';

import { UserDataModel } from '../../models/models';

import { Login } from '../login/login';
import { Usuarios } from '../usuarios/usuarios';
import { Balance } from '../balance/balance';
import { Asuntos } from '../asuntos/asuntos';
import { Avisos } from '../avisos/avisos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public txt;
  public nombreAdm = "";
  public usuario = "";
  public userData: UserDataModel;

  constructor(public navCtrl: NavController,
              public global: Global,
              private storage: Storage,
              private modalCtrl: ModalController) {

    storage.get("condominioData").then((data) => {
      this.userData = global.getUserData();
      if (data == null) {
        storage.set("condominioData", this.userData);
      }
    })
    .then(() => {
      if (this.userData.admin == 1) {
        this.txt = "Administrador";
      }
      else {
        this.txt = "Casa / Dpto:";
        this.usuario = this.userData.dpto;
      }

      this.nombreAdm = this.userData.nombreAdmin;
      console.log(this.userData);
    });
  }

  modal(tipo) {
    var modal;
    
    switch (tipo) {
      case 0:
        modal = this.modalCtrl.create(Usuarios);
        break;
      case 1:
        modal = this.modalCtrl.create(Balance);
        break;
      case 2:
        modal = this.modalCtrl.create(Asuntos);
        break;
      case 3:
        modal = this.modalCtrl.create(Avisos);
        break;
    
      default:
        break;
    }
    modal.present();
  }

  salir() {
    this.storage.clear();
    this.navCtrl.setRoot(Login);
  }

}
