import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-network',
  templateUrl: './icon-network.component.html',
  styleUrls: ['./icon-network.component.css']
})
export class IconNetworkComponent {
  
  @Input() padding: string="";
  @Input() icon: string ="";
  @Input() url: string="";
}
