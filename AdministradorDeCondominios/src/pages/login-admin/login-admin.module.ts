import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginAdmin } from './login-admin';

@NgModule({
  declarations: [
    LoginAdmin,
  ],
  imports: [
    IonicPageModule.forChild(LoginAdmin),
  ],
  exports: [
    LoginAdmin
  ]
})
export class LoginAdminModule {}
