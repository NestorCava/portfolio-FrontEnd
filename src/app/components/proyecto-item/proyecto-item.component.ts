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

  constructor(){}

  onDelete(proyecto: Proyecto){
    this.onDeleteProyecto.emit(proyecto);
  }

}
