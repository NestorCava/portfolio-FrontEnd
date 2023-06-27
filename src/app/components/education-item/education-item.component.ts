import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Educacion, PERSONA } from 'src/People';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent {
  loggin: boolean=false;
  subscription?: Subscription;
  edition_mode: boolean = false;

  educacionForm: FormGroup;

  @Input() educacion: Educacion = PERSONA.educacion[0];
  @Output() onDeleteEducacion: EventEmitter<Educacion> = new EventEmitter();
  @Output() onEditEducacion: EventEmitter<Educacion> = new EventEmitter();

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.loggin = value);
                                      this.loggin = this.uiService.getLoggin();

    this.educacionForm = new FormGroup({
                                        tituloInput: new FormControl(""),
                                        institucionInput: new FormControl(""),
                                        fechaInicioInput: new FormControl(""),
                                        fechaFinInput: new FormControl(""),
                                        mensionesInput: new FormControl(""),
                                      });
  }

  onCancelEdition(){
    this.educacion.titulo = this.educacionForm.get("tituloInput")?.value;
    this.educacion.institucion = this.educacionForm.get("institucionInput")?.value;
    this.educacion.fecha_inicio = this.educacionForm.get("fechaInicioInput")?.value;
    this.educacion.fecha_fin = this.educacionForm.get("fechaFinInput")?.value;
    this.educacion.mensiones = this.educacionForm.get("mensionesInput")?.value;

    this.edition_mode = false;
  }

  onEdit(){
    this.edition_mode = true;
     
  }

}
