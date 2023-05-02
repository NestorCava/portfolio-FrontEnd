import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../../services/persona.service';

import { PEOPLE, People, Experiencia } from 'src/People';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit{

  @Input() people: People = PEOPLE;
  @Input() experiencia: Experiencia = PEOPLE.experiencias[0];

  @Output() deleteAboutPersona: EventEmitter<People> = new EventEmitter();
  @Output() deleteExperienciaPersona: EventEmitter<People> = new EventEmitter();

  constructor(
    private personaService: PersonaService
  ){}

  ngOnInit(): void {
  }

  deleteAbout(people:People){
    this.deleteAboutPersona.emit(this.people);
  }

  deleteExperiencia(people: People){
    this.deleteExperienciaPersona.emit(people);
  }
}
