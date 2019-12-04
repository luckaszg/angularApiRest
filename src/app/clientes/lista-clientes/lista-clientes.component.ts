import { Component, OnInit } from '@angular/core';
import {ListaClientesServiceService} from './lista-clientes-service.service';
import {Cliente} from '../ClienteInterface';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
  providers: [ListaClientesServiceService]
})
export class ListaClientesComponent implements OnInit {

  clientes = [];
  constructor(private clientService: ListaClientesServiceService) {
  }
  ngOnInit() {
    this.clientService.getAllClients().subscribe(
      data => {
        this.clientes = data['data']['clientes'];
      }
    );
  }
}
