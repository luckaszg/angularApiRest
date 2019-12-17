import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Regla} from '../../reglas/Regla';
import {ParametroService} from '../service/parametro.service';
import {Parametro} from '../ParametroInterface';
import {Cliente} from '../../clientes/ClienteInterface';
import {NotificationsService} from '../../shared/notifications.service';

@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.component.html',
  styleUrls: ['./parametro.component.css']
})
export class ParametroComponent implements OnInit {

  constructor(private service: ParametroService,
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
      if (typeof this.service.form.value.fechaInicioValidez !== 'string') {
        this.service.form.value.fechaInicioValidez = this.service.form.value.fechaInicioValidez._i.year + '-' +
          this.service.form.value.fechaInicioValidez._i.month + '-' +
          this.service.form.value.fechaInicioValidez._i.date;
      }
      if (typeof this.service.form.value.fechaFinValidez !== 'string') {
        this.service.form.value.fechaFinValidez = this.service.form.value.fechaFinValidez._i.year + '-' +
          this.service.form.value.fechaFinValidez._i.month + '-' +
          this.service.form.value.fechaFinValidez._i.date;
      }
      this.service.postParametro(this.service.form.value).subscribe(
        data => this.recibidoCorrectamente(data),
        error => this.errorRecibido(error)
      );
      console.log(this.service.form.value);
      this.onClear();
    }
  }
  public recibidoCorrectamente(data: Parametro) {
    console.log('Creado ' + data);
    this.notificationService.onSuccess('Parámetro Establecido!');
  }
  public errorRecibido(error) {
    console.log('se produjo un error ');
    this.notificationService.onError('Ocurrió un error');
  }
  public volverAlListado() {
    this.router.navigate(['/parametros'], { skipLocationChange: true });
  }

}
