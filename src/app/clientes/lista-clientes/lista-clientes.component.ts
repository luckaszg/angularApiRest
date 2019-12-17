import { Component, OnInit, ViewChild } from '@angular/core';
import {ListaClientesServiceService} from './lista-clientes-service.service';
import {Cliente} from '../ClienteInterface';
import { ActivatedRoute, Router } from '@angular/router';
import {MatSort, PageEvent} from '@angular/material';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
  providers: [ListaClientesServiceService]
})
export class ListaClientesComponent implements OnInit {

  clientes: Cliente[];
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  pageSize = 5;
  pageNumber = 1;
  pageSizeOptions = [5, 10, 15];
  constructor(private clientService: ListaClientesServiceService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
  }
  searchKey: string;
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
  onSearchClear() {
    this.searchKey = '';
  }
  // applyFilter() {
  //   this.clientes.filter = this.searchKey.trim().toLowerCase();
  // }
}
