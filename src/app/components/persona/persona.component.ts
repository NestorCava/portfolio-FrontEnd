import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from '../../services/persona.service';

import { PEOPLE, People } from 'src/People';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit{

  @Input() people: People = PEOPLE;

  constructor(
    private personaService: PersonaService
  ){}

  ngOnInit(): void {
  }

}
