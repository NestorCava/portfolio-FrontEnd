//import { Component } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from '../app/services/persona.service';

import { PEOPLE, People, Experiencia } from 'src/People';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @Input() experiencia: Experiencia = PEOPLE.experiencias[0];
  title = 'portfolio-frontend';

  peoples: People[] = [];
  id_persona = 0;

  constructor(
    private personaService: PersonaService
  ){}

  ngOnInit(): void {
    this.personaService.getPeoples().subscribe((peoples) => {this.peoples = peoples});
  }

  deleteAbout(people:People){
    this.personaService.deleteAbout(people).subscribe();
  }

  deleteExperiencia(people: People){
    this.personaService.deleteExperiencia(people).subscribe();
  }
}
