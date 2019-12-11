import { Component, OnInit } from '@angular/core';
import {ListaClientesServiceService} from './lista-clientes-service.service';
import {Cliente} from '../ClienteInterface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
  providers: [ListaClientesServiceService]
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[];
  pageSize = 5;
  pageNumber = 1;
  constructor(private clientService: ListaClientesServiceService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit() {
    this.clientService.getAllClients().subscribe(
      data => {
        this.clientes = data['data']['clientes'];
      }
    );
  }

}
