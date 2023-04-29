import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../../services/persona.service';

import { PEOPLES } from 'src/mock-people';
import { People } from 'src/People';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  people: People[] = [];

  constructor(
    private personaService: PersonaService
  ){}
  
  ngOnInit(): void {
    this.personaService.getPeoples().subscribe((people) => {this.people = people});
  }
}
