import { Component, Input } from '@angular/core';

import { PEOPLE, People } from 'src/People';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  @Input() people: People = PEOPLE;
}
