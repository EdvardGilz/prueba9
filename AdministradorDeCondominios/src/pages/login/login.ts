import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Api } from '../../providers/api';
import { CommonFunctions } from '../../providers/common-functions';
import { Global } from '../../providers/global';

import { SuccessModel } from '../../models/models';

import { LoginAdmin } from '../login-admin/login-admin';
import { HomePage } from '../home/home';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  public nombre = "";
  public casa = "";
  public pass = "";
  public disbled = true;
  public disabled2 = true;
  public resData: SuccessModel;
  public encontrado = 0;

  constructor(public navCtrl: NavController,
              private api: Api,
              private commonFctns: CommonFunctions,
              private global: Global,
              private storage: Storage) {
    storage.get("condominioData").then((data) => {
      if (data != null) {
        this.global.setAllData(data);
        this.navCtrl.setRoot(HomePage);
      }
    })
  }

  verificaLlenado() {
      if (this.nombre != "") {
        this.disbled = false;
      }
      else {
        this.disbled = true;
        this.encontrado = 0;
        this.pass = "";
      }
      if (this.nombre != "" && this.casa != "" && this.pass != "") {
        this.disabled2 = false;
      }
      else {
        this.disabled2 = true;
      }
  }

  buscar() {
      this.api.buscarC(this.nombre)
      .then((data) => {
        this.resData = data;
        if (this.resData.success == 0) {
          this.commonFctns.despliegaAlerta("Error", "Administración no encontrada");
        }
        else {
          this.encontrado = 1;
          this.global.setCondominio(this.resData.id);
        }
      });
  }

  entrar() {
    this.api.loginUsuario(this.casa, this.pass)
    .then((data) => {
      this.resData = data;
      if (this.resData.success == 0) {
        if (this.resData.id == -1) {
          this.commonFctns.despliegaAlerta("Error", "Contraseña incorrecta");
        }
        else if (this.resData.id == -2) {
          this.commonFctns.despliegaAlerta("Error", "Usuario no encontrado");
        }
        else {
          this.commonFctns.despliegaAlerta("Error", "Ocurrió un error inesperado, intentalo de nuevo");
        }
      }
      else {
        this.global.setUsuario(this.resData.id);
        this.global.setAdmin(0);
        this.global.setDpto(this.casa);
        this.global.setNombreAdm(this.nombre);
        this.navCtrl.setRoot(HomePage);
      }
    });
  }

  admin() {
    this.navCtrl.setRoot(LoginAdmin);
  }

}
