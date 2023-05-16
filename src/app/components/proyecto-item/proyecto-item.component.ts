import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

import { PERSONA, Proyecto } from 'src/People';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent {

  loggin: boolean=false;
  subscription?: Subscription;

  @Input() proyecto: Proyecto = PERSONA.proyectos[0];
  @Output() onDeleteProyecto: EventEmitter<Proyecto> = new EventEmitter();
  @Output() onEditProyecto: EventEmitter<Proyecto> = new EventEmitter();

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.loggin = value);
                                      this.loggin = this.uiService.getLoggin();
  }

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
