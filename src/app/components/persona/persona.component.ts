import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../../services/persona.service';

import { PERSONA, Persona, Experiencia } from 'src/People';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit{

  
  persona: Persona = PERSONA;
  @Input() loggin:boolean = false;
  //@Input() persona: Persona = PERSONA;
  @Input() experiencia: Experiencia = PERSONA.experiencias[0];

  @Output() updatePersona: EventEmitter<Persona> = new EventEmitter();

  constructor(
    private personaService: PersonaService
  ){}

  ngOnInit(): void {
    this.personaService.getPeople(1).subscribe((persona) => {this.persona = persona});
    console.log(this.persona);
  }

  update(persona: Persona){
    this.updatePersona.emit(persona);
  }
}
