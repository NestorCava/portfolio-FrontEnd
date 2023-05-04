import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PERSONA, Persona, Proyecto } from 'src/People';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  @Input() persona: Persona = PERSONA;
  @Output() updatePersona: EventEmitter<Persona> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {}

  deleteProyecto(proyecto: Proyecto){

    this.persona.proyectos = this.persona.proyectos.filter(p => p.id !== proyecto.id)
    this.updatePersona.emit(this.persona);
  }
}
