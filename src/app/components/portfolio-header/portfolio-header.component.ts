import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../services/persona.service';

import { People } from 'src/People';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css']
})
export class PortfolioHeaderComponent implements OnInit{

  people: People[] = [];

  constructor(
    private personaService: PersonaService
  ){}

  ngOnInit(): void {
    this.personaService.getPeoples().subscribe((people) => {this.people = people});
  }
}
