//import { Component } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from '../app/services/persona.service';

import { PERSONA, Persona, Experiencia } from 'src/People';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @Input() experiencia: Experiencia = PERSONA.experiencias[0];
  
  title = 'portfolio-frontend';

  personas: Persona[] = [];
  id_persona = 0;
  loggin: boolean = true;

  constructor(
    private personaService: PersonaService
  ){}

  ngOnInit(): void {
    this.personaService.getPeoples().subscribe((personas) => {this.personas = personas});
  }

  update(persona: Persona){
    this.personaService.update(persona).subscribe();
  }
}
