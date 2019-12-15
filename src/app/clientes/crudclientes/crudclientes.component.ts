import { Component, OnInit } from '@angular/core';
import {ListaClientesServiceService} from '../lista-clientes/lista-clientes-service.service';

@Component({
  selector: 'app-crudclientes',
  templateUrl: './crudclientes.component.html',
  styleUrls: ['./crudclientes.component.css']
})
export class CRUDclientesComponent implements OnInit {

  constructor(private service: ListaClientesServiceService) { }

  ngOnInit() {
  }
  onClear() {
    this.service.form.reset();
    this.service.inicializarFormulario();
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.form.value.fechaNacimiento = this.service.form.value.fechaNacimiento._i.year + '-' +
                                                this.service.form.value.fechaNacimiento._i.month + '-' +
                                                this.service.form.value.fechaNacimiento._i.date;
      console.log(this.service.form.value);
      console.log(this.service.form.value.nombre);
      console.log(this.service.form.value.fechaNacimiento);
      // this.service.form.postCliente(this.service.form.value);
      this.onClear();
    }
  }
}
