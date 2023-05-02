import { Component, Input } from '@angular/core';

import { PEOPLE, People } from 'src/People';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  @Input() people: People = PEOPLE;
}
