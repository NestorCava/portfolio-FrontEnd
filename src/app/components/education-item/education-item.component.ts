import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

import { Educacion, PERSONA } from 'src/People';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent {
  loggin: boolean=false;
  subscription?: Subscription;

  @Input() educacion: Educacion = PERSONA.educacion[0];
  @Output() onDeleteEducacion: EventEmitter<Educacion> = new EventEmitter();
  @Output() onEditEducacion: EventEmitter<Educacion> = new EventEmitter();

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.loggin = value);
                                      this.loggin = this.uiService.getLoggin();
  }

  onDelete(educacion: Educacion){
    this.onDeleteEducacion.emit(educacion);
  }

  onEdit(educacion: Educacion){
    
    /* educacion.titulo=(document.getElementById("titulo-educacion"+educacion.id))
                          ?.textContent as string;
    educacion.institucion=(document.getElementById("institucion-educacion"+educacion.id))
                          ?.textContent as string;
    educacion.fecha_inicio=((document.getElementById("fecha-inicio-educacion"+educacion.id))
                            ?.textContent as string);
    educacion.fecha_fin=(document.getElementById("fecha-fin-educacion"+educacion.id))
                        ?.textContent as string;
    educacion.mensiones=(document.getElementById("mensiones-educacion"+educacion.id))
                        ?.textContent as string;
     */
    
    this.educacion = educacion;

    this.onEditEducacion.emit(this.educacion);
    
  }

}
