import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Concepto} from '../../conceptos/concepto/ConceptoInterface';
import {ReglasService} from '../service/reglas.service';
import {Regla} from '../Regla';

@Component({
  selector: 'app-regla',
  templateUrl: './regla.component.html',
  styleUrls: ['./regla.component.css']
})
export class ReglaComponent implements OnInit {

  constructor(private service: ReglasService,
              private router: Router) { }

  ngOnInit() {
  }
  onClear() {
    this.service.form.reset();
    this.service.inicializarFormulario();
  }
  onSubmit() {
    if (this.service.form.valid) {
      this.service.postRegla(this.service.form.value).subscribe(
        data => this.recibidoCorrectamente(data),
        error => this.errorRecibido(error)
      );
      console.log(this.service.form.value);
      this.onClear();
    }
  }
  public recibidoCorrectamente(data: Regla) {
    console.log('Creado ' + data);
    this.volverAlListado();

  }
  public errorRecibido(error) {
    console.log('se produjo un error ');
  }
  public volverAlListado() {
    this.router.navigate(['/reglas'], { skipLocationChange: true });
  }

}
