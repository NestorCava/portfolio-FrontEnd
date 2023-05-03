import { Component, OnInit, Input } from '@angular/core';

import { PERSONA, Persona } from 'src/People';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Input() persona: Persona = PERSONA;

  constructor(){}
  
  ngOnInit(): void {}
}
