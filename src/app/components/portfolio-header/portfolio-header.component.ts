import { Component, Output, Input } from '@angular/core';

import { PEOPLES } from 'src/mock-people';
import { People } from 'src/People';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css']
})
export class PortfolioHeaderComponent {

  people: People[] = PEOPLES;

  constructor(){}
}
