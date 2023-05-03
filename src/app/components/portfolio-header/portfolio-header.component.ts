import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PEOPLE, People } from '../../../People';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css']
})
export class PortfolioHeaderComponent implements OnInit{

  @Input() people: People = PEOPLE;

  @Output() updatePersona: EventEmitter<People> = new EventEmitter();
 

  constructor(){}

  ngOnInit(): void {}

  deleteAbout(people: People){
    this.updatePersona.emit(this.people);
  }
}
