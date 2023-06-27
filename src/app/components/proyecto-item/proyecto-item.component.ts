import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { PERSONA, Proyecto } from 'src/People';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent {

  loggin: boolean=false;
  subscription?: Subscription;
  edition_mode: boolean = false;

  proyectoForm: FormGroup;

  @Input() proyecto: Proyecto = PERSONA.proyectos[0];
  @Output() onDeleteProyecto: EventEmitter<Proyecto> = new EventEmitter();
  @Output() onEditProyecto: EventEmitter<Proyecto> = new EventEmitter();

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.loggin = value);
                                      this.loggin = this.uiService.getLoggin();
                                      
    this.proyectoForm = new FormGroup({
                                        proyectoTituloInput: new FormControl(""),
                                        proyectoDescripcionInput: new FormControl("")
                                      });
  }

  onCancelEdition(){
    this.proyecto.titulo = this.proyectoForm.get("proyectoTituloInput")?.value;
    this.proyecto.descripcion = this.proyectoForm.get("proyectoDescripcionInput")?.value;

    this.edition_mode = false;
  }

  onEdit(){
    
    this.edition_mode = true;
    
  }

}
