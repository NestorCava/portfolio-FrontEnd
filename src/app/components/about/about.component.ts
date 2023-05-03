import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PERSONA, Persona } from 'src/People';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  @Input() persona: Persona = PERSONA;
  @Output() onDeleteAbout: EventEmitter<Persona> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {}

  onDelete(persona: Persona){
    persona.acerca="";
    this.onDeleteAbout.emit(this.persona);
  }
}
