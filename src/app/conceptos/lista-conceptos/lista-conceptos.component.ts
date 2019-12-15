import { Component, OnInit } from '@angular/core';
import {Concepto} from '../concepto/ConceptoInterface';
import {ConceptoService} from '../service/concepto.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-lista-conceptos',
  templateUrl: './lista-conceptos.component.html',
  styleUrls: ['./lista-conceptos.component.css']
})
export class ListaConceptosComponent implements OnInit {

  conceptos: Concepto[];
  pageSize = 5;
  pageNumber = 1;
  pageSizeOptions = [5, 10, 15];
  constructor(private conceptoService: ConceptoService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
  }
  handlePage(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex + 1;
  }
  ngOnInit() {
    this.conceptoService.getAllConceptos().subscribe(
      data => {
        this.conceptos = data['data']['vales'];
      }
    );
  }
}
