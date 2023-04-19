import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-icon-network',
  templateUrl: './icon-network.component.html',
  styleUrls: ['./icon-network.component.css']
})
export class IconNetworkComponent {
  icon = faGithub;
}
