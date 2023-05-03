import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Educacion, PERSONA } from 'src/People';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent {

  @Input() educacion: Educacion = PERSONA.educacion[0];
  @Output() onDeleteEducacion: EventEmitter<Educacion> = new EventEmitter();

  constructor(){}

  onDelete(educacion: Educacion){
    this.onDeleteEducacion.emit(educacion);
  }

}
