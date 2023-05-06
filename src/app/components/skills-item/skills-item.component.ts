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
  @Output() onEditSkill: EventEmitter<Skill> = new EventEmitter();

  constructor(){}

  onDelete(skill: Skill){
    this.onDeleteSkill.emit(skill);
  }

  onEdit(skill: Skill){

    //let s: string =(document.getElementById("porcentaje-skill"+skill.id)?.textContent as String);
    
    let isNumeric: boolean = !Number(document.getElementById("porcentaje-skill"+skill.id)?.textContent as String);

    if (isNumeric){
      alert("Ingrese un valor numérico");
    }else{
      let porcentaje: number = Number(document.getElementById("porcentaje-skill"+skill.id)?.textContent as String);
      if (porcentaje<=100){
        skill.porcentaje=porcentaje
        skill.skill=(document.getElementById("skill-skill"+skill.id))
                                              ?.textContent as string;
        this.onEditSkill.emit(this.skill);
      }else alert("Ingrese un valor entre 0 y 100");
      
    }

  }
}
