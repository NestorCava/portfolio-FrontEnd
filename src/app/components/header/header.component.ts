import { Component, Output, Input } from '@angular/core';

import { PEOPLES } from 'src/mock-people';
import { People } from 'src/People';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  people: People[] = PEOPLES;

  constructor(){}
  
}
