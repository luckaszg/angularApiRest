import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from '../ClienteInterface';
import { FormGroup, FormControl, NgForm, Validators, FormGroupDirective } from '@angular/forms';
import {map} from 'rxjs/operators';
import {ErrorStateMatcher} from '@angular/material/core';
@Injectable({
  providedIn: 'root'
})
export class ListaClientesServiceService {
  baseUrl = 'http://gy7228.myfoscam.org:8080';
  public httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }
  form: FormGroup = new FormGroup({
      id: new FormControl(null),
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      nroDocumento: new FormControl('', [Validators.required, Validators.minLength(7)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl(''),
      fechaNacimiento: new FormControl('', Validators.required)
    }
  );
  getAllClients(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(
      this.baseUrl + '/rest/clientes/all',
      {headers: this.httpHeaders});
  }

  inicializarFormulario() {
    this.form.setValue({
      id: null,
      nombre: '',
      apellido: '',
      nroDocumento: '',
      email: '',
      telefono: '',
      fechaNacimiento: ''
    });
  }
}
