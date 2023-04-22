import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-user',
  templateUrl: './icon-user.component.html',
  styleUrls: ['./icon-user.component.css']
})
export class IconUserComponent {

  @Input() padding: string="";
  @Input() icon: string ="";
  @Input() url: string="";

}
