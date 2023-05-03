import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PEOPLE, People, Experiencia, Educacion } from 'src/People';

@Component({
  selector: 'app-experience-education',
  templateUrl: './experience-education.component.html',
  styleUrls: ['./experience-education.component.css']
})
export class ExperienceEducationComponent implements OnInit{
  @Input() people: People = PEOPLE;
  @Output() updatePersona: EventEmitter<People> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {}

  deleteExperiencia(experiencia: Experiencia){

    this.people.experiencias = this.people.experiencias.filter(e => e.id !== experiencia.id)
    this.updatePersona.emit(this.people);
  }

  deleteEducacion(educacion: Educacion){

    this.people.educacion = this.people.educacion.filter(e => e.id !== educacion.id)
    this.updatePersona.emit(this.people);
  }
}
