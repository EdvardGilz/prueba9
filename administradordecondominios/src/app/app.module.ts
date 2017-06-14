import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { LoginAdmin } from '../pages/login-admin/login-admin';
import { Usuarios } from '../pages/usuarios/usuarios';
import { Balance } from '../pages/balance/balance';
import { Asuntos } from '../pages/asuntos/asuntos';
import { Avisos } from '../pages/avisos/avisos';

import { Api } from '../providers/api';
import { CommonFunctions } from '../providers/common-functions';
import { Global } from '../providers/global';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    LoginAdmin,
    Usuarios,
    Balance,
    Asuntos,
    Avisos
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    LoginAdmin,
    Usuarios,
    Balance,
    Asuntos,
    Avisos
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Api,
    CommonFunctions,
    Global
  ]
})
export class AppModule {}
