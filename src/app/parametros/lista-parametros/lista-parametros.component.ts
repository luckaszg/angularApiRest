import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageEvent} from '@angular/material';
import {ParametroService} from '../service/parametro.service';
import {Parametro} from '../ParametroInterface';

@Component({
  selector: 'app-lista-parametros',
  templateUrl: './lista-parametros.component.html',
  styleUrls: ['./lista-parametros.component.css']
})
export class ListaParametrosComponent implements OnInit {

  parametros: Parametro[];
  pageSize = 5;
  pageNumber = 1;
  pageSizeOptions = [5, 10, 15];
  constructor(private paramService: ParametroService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
  }
  handlePage(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
  }
  ngOnInit() {
    this.paramService.getAllParametros().subscribe(
      data => {
        this.parametros = data['data']['parametros'];
      }
    );
  }
}
