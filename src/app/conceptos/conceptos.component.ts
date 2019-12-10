import { Component, OnInit } from '@angular/core';
import {Concepto} from './concepto/ConceptoInterface';
import {ConceptoService} from './service/concepto.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.component.html',
  styleUrls: ['./conceptos.component.css']
})
export class ConceptosComponent implements OnInit {
  conceptos: Concepto[];
  constructor(private conceptoService: ConceptoService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    this.conceptoService.getAllConceptos().subscribe(
      data => {
        this.conceptos = data['data']['vales'];
      }
    );
  }

}
