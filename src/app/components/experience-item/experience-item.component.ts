import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Experiencia, PEOPLE } from 'src/People';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent {

  @Input() experiencia: Experiencia = PEOPLE.experiencias[0];
  @Output() onDeleteExperiencia: EventEmitter<Experiencia> = new EventEmitter();

  constructor(){}

  onDelete(experiencia: Experiencia){
    this.onDeleteExperiencia.emit(experiencia);
  }

}
