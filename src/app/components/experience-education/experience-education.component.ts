import { Component, OnInit, Input } from '@angular/core';

import { PEOPLE, People } from 'src/People';

@Component({
  selector: 'app-experience-education',
  templateUrl: './experience-education.component.html',
  styleUrls: ['./experience-education.component.css']
})
export class ExperienceEducationComponent implements OnInit{
  @Input() people: People = PEOPLE;

  constructor(){}

  ngOnInit(): void {}
}
