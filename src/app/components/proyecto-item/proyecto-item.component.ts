import { Component, Input } from '@angular/core';

import { PERSONA, Proyecto } from 'src/People';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent {

  @Input() proyecto: Proyecto = PERSONA.proyectos[0];

}
