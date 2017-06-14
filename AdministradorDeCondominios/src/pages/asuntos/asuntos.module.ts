import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Asuntos } from './asuntos';

@NgModule({
  declarations: [
    Asuntos,
  ],
  imports: [
    IonicPageModule.forChild(Asuntos),
  ],
  exports: [
    Asuntos
  ]
})
export class AsuntosModule {}
