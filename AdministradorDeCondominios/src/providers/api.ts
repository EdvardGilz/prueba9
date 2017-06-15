import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SuccessModel, UserModel, PagoDataModel, PagoModel } from '../models/models';

import { Global } from './global';

/*
  Generated class for the Api provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Api {

  constructor(private http: Http,
              private global: Global) {
  }

  guardarC(nombre, pass) {
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://pointown.com/tech/api2/api.php/guardarC/${nombre}/${pass}/`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  buscarC(nombre) {
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://pointown.com/tech/api2/api.php/buscarC/${nombre}/`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  loginC(pass) {
    var id = this.global.getUserData().idCondominio;
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://pointown.com/tech/api2/api.php/loginC/${id}/${pass}/`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  altaAdmin() {
    var id = this.global.getUserData().idCondominio;
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://pointown.com/tech/api2/api.php/altaAdmin/${id}/`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  buscaAdmin() {
    var id = this.global.getUserData().idCondominio;
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://pointown.com/tech/api2/api.php/buscaAdmin/${id}/`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  buscaUsuarios() {
    var id = this.global.getUserData().idCondominio;
    return new Promise<UserModel>(resolve => {
      this.http.get(`http://pointown.com/tech/api2/api.php/buscaUsuarios/${id}/`)
        .map(res => <UserModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  guardarUser(dpto) {
    var id = this.global.getUserData().idCondominio;
    var passGral = this.global.getUserData().passGral;
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://pointown.com/tech/api2/api.php/guardarUser/${id}/${passGral}/${dpto}/`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  loginUsuario(user, pass) {
    var id = this.global.getUserData().idCondominio;
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://pointown.com/tech/api2/api.php/loginUsuario/${id}/${user}/${pass}/`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  pagar(pagoData: PagoDataModel) {
    var data = JSON.stringify({"data": pagoData});
    return new Promise<SuccessModel>(resolve => {
      this.http.post(`http://pointown.com/tech/api2/api.php/pagar/`, data)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  buscarIngresos() {
    var id = this.global.getUserData().idCondominio;
    return new Promise<PagoModel>(resolve => {
      this.http.get(`http://pointown.com/tech/api2/api.php/buscarIngresos/${id}/`)
        .map(res => <PagoModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}
