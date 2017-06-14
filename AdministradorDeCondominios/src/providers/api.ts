import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { SuccessModel, UserModel } from '../models/models';

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
      this.http.get(`http://localhost:8888/api/api.php/guardarC/${nombre}/${pass}/`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  buscarC(nombre) {
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://localhost:8888/api/api.php/buscarC/${nombre}/`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  loginC(pass) {
    var id = this.global.getUserData().idCondominio;
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://localhost:8888/api/api.php/loginC/${id}/${pass}/`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  altaAdmin() {
    var id = this.global.getUserData().idCondominio;
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://localhost:8888/api/api.php/altaAdmin/${id}/`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  buscaAdmin() {
    var id = this.global.getUserData().idCondominio;
    return new Promise<SuccessModel>(resolve => {
      this.http.get(`http://localhost:8888/api/api.php/buscaAdmin/${id}/`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  buscaUsuarios() {
    var id = this.global.getUserData().idCondominio;
    return new Promise<UserModel>(resolve => {
      this.http.get(`http://localhost:8888/api/api.php/buscaUsuarios/${id}/`)
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
      this.http.get(`http://localhost:8888/api/api.php/guardarUser/${id}/${passGral}/${dpto}/`)
        .map(res => <SuccessModel>(res.json()))
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}
