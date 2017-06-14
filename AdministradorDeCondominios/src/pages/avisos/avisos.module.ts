import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Avisos } from './avisos';

@NgModule({
  declarations: [
    Avisos,
  ],
  imports: [
    IonicPageModule.forChild(Avisos),
  ],
  exports: [
    Avisos
  ]
})
export class AvisosModule {}
