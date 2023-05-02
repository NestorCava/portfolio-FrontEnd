import { Component, OnInit, Input } from '@angular/core';

import { PEOPLE, People } from 'src/People';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Input() people: People = PEOPLE;

  constructor(){}
  
  ngOnInit(): void {}
}
