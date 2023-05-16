import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

import { PERSONA, Persona, Proyecto } from 'src/People';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

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

  deleteProyecto(proyecto: Proyecto){

    this.persona.proyectos = this.persona.proyectos.filter(p => p.id !== proyecto.id)
    this.updatePersona.emit(this.persona);
  }

  editProyecto(proyecto: Proyecto){

    let posicion = this.persona.proyectos.indexOf(proyecto);
    this.persona.proyectos[posicion]=proyecto;
    this.updatePersona.emit(this.persona);
   }
}
