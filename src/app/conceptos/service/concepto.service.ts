import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Concepto} from '../concepto/ConceptoInterface';

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {
  baseUrl = 'http://gy7228.myfoscam.org:8080';
  public httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient,
              private router: Router) { }
  form: FormGroup = new FormGroup({
      // id: new FormControl(null),
      descripcion: new FormControl('', Validators.required),
      cantidadRequerida: new FormControl('', Validators.required),
    }
  );
  getAllConceptos(): Observable<Concepto[]> {
    return this.http.get<Concepto[]>(
      this.baseUrl + '/rest/vales/all',
      {headers: this.httpHeaders});
  }
  postConcepto(concepto: Concepto): Observable<Concepto> {
    return this.http.post<Concepto>(
      this.baseUrl + '/rest/vales/add',
      concepto);
  }
  inicializarFormulario() {
    this.form.setValue({
      // id: null,
      descripcion: '',
      cantidadRequerida: '',
    });
  }
  refrescar() {
    this.router.navigate(['/conceptos'], { skipLocationChange: true });
  }
}
