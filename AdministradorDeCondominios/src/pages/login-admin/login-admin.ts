import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Api } from '../../providers/api';
import { CommonFunctions } from '../../providers/common-functions';
import { Global } from '../../providers/global';

import { SuccessModel } from '../../models/models';

import { Login } from '../login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginAdmin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-admin',
  templateUrl: 'login-admin.html',
})
export class LoginAdmin {
  public buscar = 1;
  public nombre = "";
  public pass = "";
  public disbled = true;
  public disabled2 = true;
  public resData: SuccessModel;
  public encontrado = 0;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private api: Api,
              private commonFctns: CommonFunctions,
              private global: Global) {
  }

  nuevo() {
    this.buscar = 0;
    this.pass = "";
    this.disbled = true;
  }

  buscarC() {
    this.buscar = 1;
    this.nombre = "";
    this.pass = "";
    this.encontrado = 0;
  }

  verificaLlenado() {
    if (this.buscar == 0) {
      if (this.nombre != "" && this.pass != "") {
        this.disbled = false;
      }
      else {
        this.disbled = true;
      }
    }
    else {
      if (this.nombre != "") {
        this.disbled = false;
      }
      else {
        this.disbled = true;
        this.encontrado = 0;
        this.pass = "";
      }
      if (this.nombre != "" && this.pass != "") {
        this.disabled2 = false;
      }
      else {
        this.disabled2 = true;
      }
    }
  }

  buscarAdm() {
    if (this.buscar == 0) {
      this.api.guardarC(this.nombre, this.pass)
      .then((data) => {
        this.resData = data;
        if (this.resData.success == 0) {
          if (this.resData.id == -1) {
            this.commonFctns.despliegaAlerta("Error", "El nombre de esa administración ya esta ocupado");
            this.nombre = "";
            this.pass = "";
            this.disbled = true;
          }
          else {
            this.commonFctns.despliegaAlerta("Error", "Ocurrió un error inesperado, intentalo de nuevo");
            this.nombre = "";
            this.pass = "";
            this.disbled = true;
          }
        }
        else {
          this.global.setCondominio(this.resData.id);
          this.api.altaAdmin()
          .then((data) => {
            this.resData = data;
            if (this.resData.success == 0) {
              this.commonFctns.despliegaAlerta("Error", "Ocurrió un error inesperado, intentalo de nuevo");
            }
            else {
              this.global.setUsuario(this.resData.id);
              this.global.setAdmin(1);
              this.global.setDpto(0);
              this.global.setNombreAdm(this.nombre);
              this.global.setPassGral(this.generarPass());
              this.navCtrl.setRoot(HomePage);
            }
          });
        }
      });
    }
    else {
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
  }

  entrar() {
    this.api.loginC(this.pass)
    .then((data) => {
      this.resData = data;
      if (this.resData.success == 0) {
        this.commonFctns.despliegaAlerta("Error", "Contraseña incorrecta");
      }
      else {
        this.api.buscaAdmin()
        .then((data) => {
          this.resData = data;
          if (this.resData.success == 0) {
            this.commonFctns.despliegaAlerta("Error", "Ocurrió un error inesperado, intentalo de nuevo");
            this.nombre = "";
            this.verificaLlenado();
          }
          else {
            this.global.setUsuario(this.resData.id);
            this.global.setAdmin(1);
            this.global.setDpto(0);
            this.global.setNombreAdm(this.nombre);
            this.navCtrl.setRoot(HomePage);
          }
        })
      }
    });
  }

  usuario() {
    this.navCtrl.setRoot(Login);
  }

  generarPass() {
    return Math.random().toString(36).substring(7);
  }

}
