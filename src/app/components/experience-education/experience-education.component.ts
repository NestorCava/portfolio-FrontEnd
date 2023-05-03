import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PERSONA, Persona, Experiencia, Educacion } from 'src/People';

@Component({
  selector: 'app-experience-education',
  templateUrl: './experience-education.component.html',
  styleUrls: ['./experience-education.component.css']
})
export class ExperienceEducationComponent implements OnInit{
  @Input() persona: Persona = PERSONA;
  @Output() updatePersona: EventEmitter<Persona> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {}

  deleteExperiencia(experiencia: Experiencia){

    this.persona.experiencias = this.persona.experiencias.filter(e => e.id !== experiencia.id)
    this.updatePersona.emit(this.persona);
  }

  deleteEducacion(educacion: Educacion){

    this.persona.educacion = this.persona.educacion.filter(e => e.id !== educacion.id)
    this.updatePersona.emit(this.persona);
  }
}
