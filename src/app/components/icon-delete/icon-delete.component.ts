import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-delete',
  templateUrl: './icon-delete.component.html',
  styleUrls: ['./icon-delete.component.css']
})
export class IconDeleteComponent {
  icono = faXmark;

}
