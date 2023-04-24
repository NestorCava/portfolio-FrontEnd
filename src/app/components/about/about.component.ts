import { Component } from '@angular/core';

import { PEOPLES } from 'src/mock-people';
import { People } from 'src/People';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  people: People[] = PEOPLES;
}
