import { Component, OnInit } from '@angular/core';
import {ConceptoService} from '../service/concepto.service';
import {Router} from '@angular/router';
import {Concepto} from './ConceptoInterface';

@Component({
  selector: 'app-concepto',
  templateUrl: './concepto.component.html',
  styleUrls: ['./concepto.component.css']
})
export class ConceptoComponent implements OnInit {

  constructor(private service: ConceptoService,
              private router: Router) { }

  ngOnInit() {
  }
  onClear() {
    this.service.form.reset();
    this.service.inicializarFormulario();
  }
  onSubmit() {
    if (this.service.form.valid) {
      this.service.postConcepto(this.service.form.value).subscribe(
        data => this.recibidoCorrectamente(data),
        error => this.errorRecibido(error)
      );
      console.log(this.service.form.value);
      this.onClear();
    }
  }
  public recibidoCorrectamente(data: Concepto) {
    console.log('Creado ' + data);
    this.volverAlListado();

  }
  public errorRecibido(error) {
    console.log('se produjo un error ');
  }
  public volverAlListado() {
    this.router.navigate(['/conceptos'], { skipLocationChange: true });
  }
}
