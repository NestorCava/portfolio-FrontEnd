import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PEOPLE, People, Experiencia } from 'src/People';

@Component({
  selector: 'app-experience-education',
  templateUrl: './experience-education.component.html',
  styleUrls: ['./experience-education.component.css']
})
export class ExperienceEducationComponent implements OnInit{
  @Input() people: People = PEOPLE;
  @Output() deleteExperienciaPersona: EventEmitter<People> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {}

  deleteExperiencia(experiencia: Experiencia){

    this.people.experiencias = this.people.experiencias.filter(e => e.id !== experiencia.id)
    this.deleteExperienciaPersona.emit(this.people);

    //() => {this.people.experiencias = this.people.experiencias.filter(e => e.id !== experiencia.id)}
  }
}
