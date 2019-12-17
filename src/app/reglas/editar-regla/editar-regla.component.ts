import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ReglasService} from '../service/reglas.service';
import {Regla} from '../Regla';

@Component({
  selector: 'app-editar-regla',
  templateUrl: './editar-regla.component.html',
  styleUrls: ['./editar-regla.component.css']
})
export class EditarReglaComponent implements OnInit {
  public form: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private service: ReglasService
              ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getReglaById(id);

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
  editadoCorrectamente(data: Regla) {
    console.log('Editado Correctamente');
    console.log(data);
    this.form.reset();
  }
  editadoIncorrecto(error) {
    console.log('No se ha podido guardar los cambios. Error en el servidor!');
    console.log(error);
  }

  getReglaById(id: number) {
    this.service.getReglaById(id).subscribe(
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
  cargarFormulario(regla: Regla) {
    this.form = this.formBuilder.group({
      id: regla.id,
      limiteInferior: new FormControl(regla.limiteInferior),
      limiteSuperior: new FormControl(regla.limiteSuperior),
      montoEquivalencia: new FormControl(regla.montoEquivalencia),
    });
  }
  onclickBack() {
    this.router.navigate(['/reglas']);
  }

}
