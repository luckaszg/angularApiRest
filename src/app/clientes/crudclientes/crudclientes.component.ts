import { Component, OnInit } from '@angular/core';
import {ListaClientesServiceService} from '../lista-clientes/lista-clientes-service.service';
import {Router} from '@angular/router';
import {Cliente} from '../ClienteInterface';

@Component({
  selector: 'app-crudclientes',
  templateUrl: './crudclientes.component.html',
  styleUrls: ['./crudclientes.component.css']
})
export class CRUDclientesComponent implements OnInit {

  constructor(private service: ListaClientesServiceService,
              private router: Router) { }

  ngOnInit() {
  }
  onClear() {
    this.service.form.reset();
    this.service.inicializarFormulario();
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (typeof this.service.form.value.fechaNacimiento !== 'string') {
          this.service.form.value.fechaNacimiento = this.service.form.value.fechaNacimiento._i.year + '-' +
          this.service.form.value.fechaNacimiento._i.month + '-' +
          this.service.form.value.fechaNacimiento._i.date;
      }
      this.service.postClient(this.service.form.value).subscribe(
        data => this.recibidoCorrectamente(data),
        error => this.errorRecibido(error)
      );
      console.log(this.service.form.value);
      this.onClear();
    }
  }

  public recibidoCorrectamente(data: Cliente) {
    console.log('Creado ' + data);
    this.volverAlListado();

  }
  public errorRecibido(error) {
    console.log('se produjo un error ');
  }
  public volverAlListado() {
    this.router.navigate(['/clientes'], { skipLocationChange: true });
  }

}
