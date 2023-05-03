import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PERSONA, Persona } from '../../../People';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css']
})
export class PortfolioHeaderComponent implements OnInit{

  @Input() persona: Persona = PERSONA;

  @Output() updatePersona: EventEmitter<Persona> = new EventEmitter();
 

  constructor(){}

  ngOnInit(): void {}

  deleteAbout(persona: Persona){
    this.updatePersona.emit(this.persona);
  }
}
