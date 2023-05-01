import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent {

  @Input() icono: string ="";
  @Input() titulo: string ="";
  @Input() institucion: string ="";
  @Input() fecha_inicio: string ="";
  @Input() fecha_fin: string ="";
  @Input() mensiones: string ="";

}
