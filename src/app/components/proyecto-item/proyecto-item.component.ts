import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PERSONA, Proyecto } from 'src/People';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent {

  @Input() proyecto: Proyecto = PERSONA.proyectos[0];
  @Output() onDeleteProyecto: EventEmitter<Proyecto> = new EventEmitter();
  @Output() onEditProyecto: EventEmitter<Proyecto> = new EventEmitter();

  constructor(){}

  onDelete(proyecto: Proyecto){
    this.onDeleteProyecto.emit(proyecto);
  }

  onEdit(proyecto: Proyecto){
    
    proyecto.titulo=(document.getElementById("titulo-proyecto"+proyecto.id))
                          ?.textContent as string;
    proyecto.descripcion=(document.getElementById("descripcion-proyecto"+proyecto.id))
                          ?.textContent as string;
    
    this.proyecto = proyecto;

    this.onEditProyecto.emit(this.proyecto);
    
  }

}
