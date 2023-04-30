import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent {

  @Input() icono: string ="";
  @Input() empresa: string ="";
  @Input() cargo: string ="";
  @Input() fecha_inicio: string ="";
  @Input() fecha_fin: string ="";
  @Input() descripcion: string ="";

}
