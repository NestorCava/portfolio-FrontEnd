import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonaService } from '../../services/persona.service';

import { People } from 'src/People';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  @Output() onDeleteAbout: EventEmitter<People> = new EventEmitter();

  people: People[] = [];

  constructor(
    private personaService: PersonaService
  ){}

  ngOnInit(): void {
    this.personaService.getPeoples().subscribe((people) => {this.people = people});
  }

  onDelete(){
    console.log();
    this.onDeleteAbout.emit(this.people[0]);
  }
}
