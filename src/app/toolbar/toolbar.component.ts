import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private activatedRouted: ActivatedRoute,
              private route: Router) { }
  onListarClientes(): void {
    this.route.navigate(['/clientes'], { skipLocationChange: true });
  }
  onHome(): void {
    this.route.navigate(['/'], { skipLocationChange: true });
  }
  onListarConceptos(): void {
    this.route.navigate(['/conceptos'], { skipLocationChange: true });
  }
  ngOnInit() {
  }

}
