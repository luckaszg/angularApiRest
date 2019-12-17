import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Concepto} from '../../conceptos/concepto/ConceptoInterface';
import {ReglasService} from '../service/reglas.service';
import {Regla} from '../Regla';
import {Cliente} from '../../clientes/ClienteInterface';
import {NotificationsService} from '../../shared/notifications.service';

@Component({
  selector: 'app-regla',
  templateUrl: './regla.component.html',
  styleUrls: ['./regla.component.css']
})
export class ReglaComponent implements OnInit {

  constructor(private service: ReglasService,
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
    this.notificationService.onSuccess('Regla Agregada!');
  }
  public errorRecibido(error) {
    console.log('se produjo un error ');
    this.notificationService.onError('Ocurrió un error');
  }
  public volverAlListado() {
    this.router.navigate(['/reglas'], { skipLocationChange: true });
  }

}
