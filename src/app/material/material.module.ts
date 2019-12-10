import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';

const material = [
  MatSliderModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    material
  ],
  exports: [
    material
  ]
})
export class MaterialModule { }
