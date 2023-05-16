import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

import { PERSONA, Persona } from '../../../People';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css']
})
export class PortfolioHeaderComponent implements OnInit{

  loggin: boolean=false;
  subscription?: Subscription;

  @Input() persona: Persona = PERSONA;

  @Output() updatePersona: EventEmitter<Persona> = new EventEmitter();
 

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.loggin = value);
                                      this.loggin = this.uiService.getLoggin();
  }

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
