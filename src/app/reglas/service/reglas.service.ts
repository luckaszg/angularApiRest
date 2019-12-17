import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Regla} from '../Regla';
import { map, retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReglasService {
  baseUrl = 'http://gy7228.myfoscam.org:8080';
  public httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient,
              private router: Router) { }
  form: FormGroup = new FormGroup({
      id: new FormControl(null),
      montoEquivalencia: new FormControl('', Validators.required),
      limiteInferior: new FormControl('', Validators.required),
      limiteSuperior: new FormControl('', Validators.required)
    }
  );
  getAllReglas(): Observable<Regla[]> {
    return this.http.get<Regla[]>(
      this.baseUrl + '/rest/reglas/all',
      {headers: this.httpHeaders});
  }
  getReglaById(id: number): Observable<Regla> {
    return this.http.get<Regla>(this.baseUrl + '/rest/reglas/id/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateRegla(id: number, regla: Regla): Observable<Regla> {
    return this.http.put<Regla>(this.baseUrl + '/reglas/edit/' + id, regla)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  editar(regla: Regla): Observable<Regla> {
    return this.http.put<Regla>(this.baseUrl + '/rest/reglas/edit/' + regla.id, regla);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  postRegla(regla: Regla): Observable<Regla> {
    return this.http.post<Regla>(
      this.baseUrl + '/rest/reglas/add',
      regla);
  }
  inicializarFormulario() {
    this.form.setValue({
      id: null,
      montoEquivalencia: '',
      limiteInferior: '',
      limiteSuperior: ''
    });
  }
  refrescar() {
    this.router.navigate(['/reglas'], { skipLocationChange: true });
  }
}
