import { Component, OnInit } from '@angular/core';
import {ListaClientesServiceService} from './lista-clientes-service.service';
import {Cliente} from '../ClienteInterface';
import { ActivatedRoute, Router } from '@angular/router';
import {PageEvent} from '@angular/material';

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
  pageSizeOptions = [5, 10, 15];
  constructor(private clientService: ListaClientesServiceService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
  }
  handlePage(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
  }
  ngOnInit() {
    this.clientService.getAllClients().subscribe(
      data => {
        this.clientes = data['data']['clientes'];
      }
    );
  }
  onRefrescar() {}
}
