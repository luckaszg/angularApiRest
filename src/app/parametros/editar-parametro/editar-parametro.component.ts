import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ParametroService} from '../service/parametro.service';
import {Parametro} from '../ParametroInterface';

@Component({
  selector: 'app-editar-parametro',
  templateUrl: './editar-parametro.component.html',
  styleUrls: ['./editar-parametro.component.css']
})
export class EditarParametroComponent implements OnInit {
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private service: ParametroService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getParametroById(id);
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log( this.form.value);
    if (this.form.valid) {
      this.service.editar(
        this.form.value).subscribe(
        data => this.editadoCorrectamente(data),
        error => this.editadoIncorrecto(error));
    }
  }
  editadoCorrectamente(data: Parametro) {
    console.log('Editado Correctamente');
    console.log(data);
    this.form.reset();
  }
  editadoIncorrecto(error) {
    console.log('No se ha podido guardar los cambios. Error en el servidor!');
    console.log(error);
  }

  getParametroById(id: number) {
    this.service.getParametroById(id).subscribe(
      respuesta => {
        this.cargarFormulario(respuesta);
        console.log(respuesta);
      },
      errorRespuesta => {
        console.log('Ha ocurrido un error al intentar cargar los datos del postulante');
        console.log(errorRespuesta);
      }
    );
  }
  cargarFormulario(parametro: Parametro) {
    this.form = this.formBuilder.group({
      id: parametro.id,
      fechaInicioValidez: new FormControl(parametro.fechaInicioValidez),
      fechaFinValidez: new FormControl(parametro.fechaFinValidez),
      diasDuracion: new FormControl(parametro.diasDuracion),
    });
  }
  onclickBack() {
    this.router.navigate(['/parametros']);
  }

}
