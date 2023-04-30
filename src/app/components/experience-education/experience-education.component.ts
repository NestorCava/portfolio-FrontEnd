import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';

import { People } from 'src/People';

@Component({
  selector: 'app-experience-education',
  templateUrl: './experience-education.component.html',
  styleUrls: ['./experience-education.component.css']
})
export class ExperienceEducationComponent implements OnInit{
  people: People[] = [];

  constructor(
    private personaService: PersonaService
  ){}

  ngOnInit(): void {
    this.personaService.getPeoples().subscribe((people) => {this.people = people});
  }
}
