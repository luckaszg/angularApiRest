import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Concepto} from '../concepto/ConceptoInterface';

@Injectable({
  providedIn: 'root'
})
export class ConceptoService {
  baseUrl = 'http://gy7228.myfoscam.org:8080';
  public httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }

  getAllConceptos(): Observable<Concepto[]> {
    return this.http.get<Concepto[]>(
      this.baseUrl + '/rest/vales/all',
      {headers: this.httpHeaders});
  }
}
