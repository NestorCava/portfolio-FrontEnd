import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';

import { People } from 'src/People';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  people: People[] = [];

  constructor(
    private personaService: PersonaService
  ){}

  ngOnInit(): void {
    this.personaService.getPeoples().subscribe((people) => {this.people = people});
  }
}
