import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageEvent} from '@angular/material';
import {Regla} from '../Regla';
import {ReglasService} from '../service/reglas.service';

@Component({
  selector: 'app-lista-reglas',
  templateUrl: './lista-reglas.component.html',
  styleUrls: ['./lista-reglas.component.css']
})
export class ListaReglasComponent implements OnInit {
  reglas: Regla[];
  pageSize = 5;
  pageNumber = 1;
  pageSizeOptions = [5, 10, 15];
  constructor(private reglaService: ReglasService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
  }
  handlePage(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
  }
  ngOnInit() {
    this.reglaService.getAllReglas().subscribe(
      data => {
        this.reglas = data['data']['reglas'];
      }
    );
  }
}
