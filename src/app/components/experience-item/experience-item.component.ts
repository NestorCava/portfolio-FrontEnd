import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Experiencia, PERSONA } from 'src/People';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent {

  loggin: boolean=false;
  subscription?: Subscription;
  edition_mode: boolean = false;

  experienciaForm: FormGroup;

  @Input() experiencia: Experiencia = PERSONA.experiencias[0];
  @Output() onDeleteExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  @Output() onEditExperiencia: EventEmitter<Experiencia> = new EventEmitter();

   constructor(private uiService:UiService){
    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.loggin = value);
                                      this.loggin = this.uiService.getLoggin();

    this.experienciaForm = new FormGroup({
                                        empresaInput: new FormControl(""),
                                        cargoInput: new FormControl(""),
                                        fechaInicioInput: new FormControl(""),
                                        fechaFinInput: new FormControl(""),
                                        descripcionInput: new FormControl("")
                                      });
  }

  onCancelEdition(){
    this.edition_mode = false;
  }

  onEdit(){
    this.experiencia.empresa = this.experienciaForm.get("empresaInput")?.value;
    this.experiencia.cargo = this.experienciaForm.get("cargoInput")?.value;
    this.experiencia.fecha_inicio = this.experienciaForm.get("fechaInicioInput")?.value;
    this.experiencia.fecha_fin = this.experienciaForm.get("fechaFinInput")?.value;
    this.experiencia.descripcion = this.experienciaForm.get("descripcionInput")?.value;

    this.edition_mode = true;
    
  }

}
