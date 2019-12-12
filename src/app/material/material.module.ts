import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatPaginatorModule
} from '@angular/material';

const material = [
  MatSliderModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatPaginatorModule
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
