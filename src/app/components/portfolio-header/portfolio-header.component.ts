import { Component, OnInit, Input } from '@angular/core';

import { PEOPLE, People } from '../../../People';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css']
})
export class PortfolioHeaderComponent implements OnInit{

  @Input() people: People = PEOPLE;

  constructor(){}

  ngOnInit(): void {}

  
}
