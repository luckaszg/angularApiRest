import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatNativeDateModule,
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

const material = [
  MatSliderModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
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
