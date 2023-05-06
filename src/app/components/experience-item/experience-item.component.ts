import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Experiencia, PERSONA } from 'src/People';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent {

  @Input() experiencia: Experiencia = PERSONA.experiencias[0];
  @Output() onDeleteExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  @Output() onEditExperiencia: EventEmitter<Experiencia> = new EventEmitter();

  constructor(){}

  onDelete(experiencia: Experiencia){
    this.onDeleteExperiencia.emit(experiencia);
  }

  onEdit(experiencia: Experiencia){
    
    experiencia.empresa=(document.getElementById("empresa-educacion"+experiencia.id))
                          ?.textContent as string;
    experiencia.cargo=(document.getElementById("cargo-educacion"+experiencia.id))
                          ?.textContent as string;
    experiencia.fecha_inicio=(document.getElementById("fecha-inicio-educacion"+experiencia.id))
                          ?.textContent as string;
    experiencia.fecha_fin=(document.getElementById("fecha-fin-educacion"+experiencia.id))
                          ?.textContent as string;
    experiencia.descripcion=(document.getElementById("descripcion-educacion"+experiencia.id))
                          ?.textContent as string;
    
    this.experiencia = experiencia;

    this.onEditExperiencia.emit(this.experiencia);
    
  }

}
