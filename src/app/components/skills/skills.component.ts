import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PERSONA, Persona, Skill } from 'src/People';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  @Input() persona: Persona = PERSONA;
  @Output() updatePersona: EventEmitter<Persona> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {}

  deleteSkill(skill: Skill){

    this.persona.skills = this.persona.skills.filter(sk => sk.id !== skill.id)
    this.updatePersona.emit(this.persona);
  }

  editSkill(skill: Skill){

    let posicion = this.persona.skills.indexOf(skill);
    this.persona.skills[posicion]=skill;
    this.updatePersona.emit(this.persona);
   }
  
}
