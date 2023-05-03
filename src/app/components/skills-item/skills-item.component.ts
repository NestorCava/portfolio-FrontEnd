import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PERSONA, Skill } from 'src/People';
@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent {

  @Input() skill:Skill = PERSONA.skills[0];
  @Output() onDeleteSkill: EventEmitter<Skill> = new EventEmitter();

  constructor(){}

  onDelete(skill: Skill){
    this.onDeleteSkill.emit(skill);
  }
}
