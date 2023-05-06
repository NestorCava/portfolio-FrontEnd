import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PERSONA, Persona } from '../../../People';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css']
})
export class PortfolioHeaderComponent implements OnInit{

  @Input() loggin:boolean = false;
  @Input() persona: Persona = PERSONA;

  @Output() updatePersona: EventEmitter<Persona> = new EventEmitter();
 

  constructor(){}

  ngOnInit(): void {}

  deleteAbout(persona: Persona){
    this.updatePersona.emit(this.persona);
  }

  editPersona(persona: Persona){
    this.persona=persona;
    this.updatePersona.emit(this.persona);
  }

  onEditDatos(persona: Persona){
    persona.nombre=(document.getElementById("nombre-portfolio-header"+persona.id))
                                            ?.textContent as string;
    persona.apellido=(document.getElementById("apellido-portfolio-header"+persona.id))
                                            ?.textContent as string;
    persona.posicion=(document.getElementById("posicion-portfolio-header"+persona.id))
                                            ?.textContent as string;
    persona.localidad=(document.getElementById("localidad-portfolio-header"+persona.id))
                                            ?.textContent as string;
                    
    this.editPersona(persona);
  }
}
