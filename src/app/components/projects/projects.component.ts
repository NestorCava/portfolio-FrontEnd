import { Component, Input } from '@angular/core';

import { PERSONA, Persona } from 'src/People';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  @Input() persona: Persona = PERSONA;
}
