import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Parametro} from '../ParametroInterface';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParametroService {

  baseUrl = 'http://gy7228.myfoscam.org:8080';
  public httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient,
              private router: Router) { }
  form: FormGroup = new FormGroup({
      id: new FormControl(null),
      fechaInicioValidez: new FormControl('', Validators.required),
      fechaFinValidez: new FormControl('', Validators.required),
      diasDuracion: new FormControl('', Validators.required)
    }
  );
  getAllParametros(): Observable<Parametro[]> {
    return this.http.get<Parametro[]>(
      this.baseUrl + '/rest/parametros/all',
      {headers: this.httpHeaders});
  }
  getParametroById(id: number): Observable<Parametro> {
    return this.http.get<Parametro>(this.baseUrl + '/rest/parametros/id/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateParametro(id: number, parametro: Parametro): Observable<Parametro> {
    return this.http.put<Parametro>(this.baseUrl + '/parametros/edit/' + id, parametro)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  editar(parametro: Parametro): Observable<Parametro> {
    return this.http.put<Parametro>(this.baseUrl + '/rest/parametros/edit/' + parametro.id, parametro);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  postParametro(parametro: Parametro): Observable<Parametro> {
    return this.http.post<Parametro>(
      this.baseUrl + '/rest/parametros/add',
      parametro);
  }
  inicializarFormulario() {
    this.form.setValue({
      id: null,
      fechaInicioValidez: '',
      fechaFinValidez: '',
      diasDuracion: ''
    });
  }
  refrescar() {
    this.router.navigate(['/parametros'], { skipLocationChange: true });
  }
}
