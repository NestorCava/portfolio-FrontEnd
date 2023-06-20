import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { PERSONA, Persona } from 'src/People';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{

  loggin: boolean=false;
  subscription?: Subscription;

  aboutForm: FormGroup;

  @Input() persona: Persona = PERSONA;
  @Output() onDeleteAbout: EventEmitter<Persona> = new EventEmitter();
  @Output() onEditPersona: EventEmitter<Persona> = new EventEmitter();

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.loggin = value);
                                      this.loggin = this.uiService.getLoggin();
  
    this.aboutForm = new FormGroup({textoAcerca: new FormControl("")});
  }

  ngOnInit(): void {
    //this.aboutForm.setValue({'textoAcerca':this.persona.acerca});
  }

  onDelete(persona: Persona){
    persona.acerca="";
    this.onDeleteAbout.emit(this.persona);
  }

  onEdit(id_element: string){
    
    this.persona.acerca=(document.getElementById(id_element))?.textContent as string;
    this.onEditPersona.emit(this.persona);
  }
}
