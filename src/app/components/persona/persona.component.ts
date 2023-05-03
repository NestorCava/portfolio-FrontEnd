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

  @Output() updatePersona: EventEmitter<People> = new EventEmitter();

  constructor(
    private personaService: PersonaService
  ){}

  ngOnInit(): void {
  }

  update(people: People){
    this.updatePersona.emit(people);
  }
}
