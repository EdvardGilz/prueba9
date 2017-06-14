import { Component } from '@angular/core';
import { IonicPage, ViewController, AlertController } from 'ionic-angular';

import { Api } from '../../providers/api';
import { CommonFunctions } from '../../providers/common-functions';
import { Global } from '../../providers/global';

import { UserModel, UserDataModel, PagoDataModel } from '../../models/models';

/**
 * Generated class for the Usuarios page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class Usuarios {
  public users: UserModel;
  public usuarios: UserDataModel[] = [];
  public vacio;
  public passGral;
  public pagoData: PagoDataModel = new PagoDataModel();

  constructor(public viewCtrl: ViewController,
              public api: Api,
              public commonFctns: CommonFunctions,
              public global: Global,
              public alertCtrl: AlertController) {

    this.passGral = this.global.getUserData().passGral;
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.api.buscaUsuarios().then((data) => {
      this.users = data;
      this.usuarios = data.data;
      this.vacio = this.users.success;
    });
  }

  agregar() {
    let prompt = this.alertCtrl.create({
      title: "Nuevo usuario",
      message: "Introduce el número de casa o departamento",
      inputs: [
        {
          name: "dpto",
          placeholder: "Ej: 311, 12-A, B",
          type: "text"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Guardar",
          handler: data => {
            this.api.guardarUser(data.dpto).then((data) => {
              this.buscarUsuarios();
              if (data.id == -1) {
                this.commonFctns.despliegaAlerta("Error", "Ese número de casa/departamento ya existe");
              }
              else if (data.id == 0) {
                this.commonFctns.despliegaAlerta("Error", "Ocurrió un error inesperado, intentalo de nuevo");
              }
            });
          }
        }
      ]
    });

    prompt.present();
  }

  pagar(user) {
    let prompt = this.alertCtrl.create({
      title: "Pago",
      message: "Agrega un pago del usuario",
      inputs: [
        {
          name: "cantidad",
          placeholder: "Cantidad",
          type: "number"
        },
        {
          name: "notas",
          placeholder: "Notas",
          type: "text"
        }
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel"
        },
        {
          text: "Guardar",
          handler: data => {
            if (data.cantidad != "") {
              this.pagoData.idCondominio = this.global.getUserData().idCondominio;
              this.pagoData.idUser = user.id;
              this.pagoData.cantidad = data.cantidad;
              this.pagoData.nota = data.notas;

              this.api.pagar(this.pagoData).then((data) => {
                if (data.success == 1) {
                  this.commonFctns.despliegaAlerta("Correcto", "El pago fue registrado");
                }
                else {
                  this.commonFctns.despliegaAlerta("Error", "Ocurrió un error inesperado, intentalo de nuevo");
                }
              });
            }
          }
        }
      ]
    });

    prompt.present();
  }

  salir() {
    this.viewCtrl.dismiss();
  }

}
