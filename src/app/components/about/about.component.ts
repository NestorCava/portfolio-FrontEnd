import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PEOPLE, People } from 'src/People';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  @Input() people: People = PEOPLE;
  @Output() onDeleteAbout: EventEmitter<People> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {}

  onDelete(people: People){
    people.about="";
    this.onDeleteAbout.emit(this.people);
  }
}
