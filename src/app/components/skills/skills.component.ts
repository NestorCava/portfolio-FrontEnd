import { Component, Input } from '@angular/core';

import { PERSONA, Persona } from 'src/People';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  @Input() persona: Persona = PERSONA;
}
