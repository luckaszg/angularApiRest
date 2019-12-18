import { Component, OnInit } from '@angular/core';
import {ConceptoService} from '../service/concepto.service';
import {Router} from '@angular/router';
import {Concepto} from './ConceptoInterface';
import {Cliente} from '../../clientes/ClienteInterface';
import {NotificationsService} from '../../shared/notifications.service';

@Component({
  selector: 'app-concepto',
  templateUrl: './concepto.component.html',
  styleUrls: ['./concepto.component.css']
})
export class ConceptoComponent implements OnInit {

  constructor(private service: ConceptoService,
              private router: Router,
              private notificationService: NotificationsService) { }

  ngOnInit() {
  }
  onClear() {
    this.service.form.reset();
    this.service.inicializarFormulario();
  }
  onSubmit() {
    if (this.service.form.valid) {
      this.service.form.value.cantidadRequerida = +this.service.form.value.cantidadRequerida;
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
    this.notificationService.onSuccess('Concepto Agregado!');
  }
  public errorRecibido(error) {
    console.log('se produjo un error ');
    this.notificationService.onError('Ocurrió un error');
  }
  public volverAlListado() {
    this.router.navigate(['/conceptos'], { skipLocationChange: true });
  }
}
