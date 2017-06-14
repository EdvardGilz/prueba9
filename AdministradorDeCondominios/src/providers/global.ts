import { Injectable } from '@angular/core';

import { UserDataModel } from '../models/models';

/*
  Generated class for the Global provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Global {
  private userData: UserDataModel = new UserDataModel();

  constructor() {}

  public setCondominio(val) {
    this.userData.idCondominio = val;
  }

  public setUsuario(val) {
    this.userData.idUsuario = val;
  }

  public setAdmin(val) {
    this.userData.admin = val;
  }

  public setDpto(val) {
    this.userData.dpto = val;
  }

  public setNombreAdm(val) {
    this.userData.nombreAdmin = val;
  }

  public setPassGral(val) {
    this.userData.passGral = val;
  }

  public setAllData(val) {
    this.userData = val;
  }

  public getUserData() {
    return this.userData;
  }

}
