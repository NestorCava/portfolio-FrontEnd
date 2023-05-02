//import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../app/services/persona.service';

import { People } from 'src/People';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio-frontend';

  peoples: People[] = [];
  id_persona = 0;

  constructor(
    private personaService: PersonaService
  ){}

  ngOnInit(): void {
    this.personaService.getPeoples().subscribe((peoples) => {this.peoples = peoples});
  }
}
