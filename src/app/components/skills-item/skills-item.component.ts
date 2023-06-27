import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { PERSONA, Skill } from 'src/People';
@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent {
  loggin: boolean=false;
  subscription?: Subscription;
  edition_mode: boolean = false;

  skillForm: FormGroup;

  @Input() skill:Skill = PERSONA.skills[0];
  @Output() onDeleteSkill: EventEmitter<Skill> = new EventEmitter();
  @Output() onEditSkill: EventEmitter<Skill> = new EventEmitter();

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.loggin = value);
                                      this.loggin = this.uiService.getLoggin();
    
    this.skillForm = new FormGroup({
                                    skillInput: new FormControl(""),
                                    porcentajeInput: new FormControl("")
                                      });
  }


  onCancelEdition(){
    this.skill.skill = this.skillForm.get("skillInput")?.value;
    this.skill.porcentaje = this.skillForm.get("porcentajeInput")?.value;

    this.edition_mode = false;
  }

  onEdit(){

    this.edition_mode = true;
      
    }

  
}
