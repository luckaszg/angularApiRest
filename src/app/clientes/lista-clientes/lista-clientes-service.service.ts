import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cliente} from '../ClienteInterface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaClientesServiceService {
  baseUrl = 'http://gy7228.myfoscam.org:8080';
  public httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(
      this.baseUrl + '/rest/clientes/all',
      {headers: this.httpHeaders});
  }
}
