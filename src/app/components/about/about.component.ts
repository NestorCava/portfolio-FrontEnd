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
  edition_mode: boolean = false;

  aboutForm: FormGroup;

  @Input() persona: Persona = PERSONA;

  @Output() onUploadAbout: EventEmitter<Persona> = new EventEmitter();
  @Output() onEditPersona: EventEmitter<Persona> = new EventEmitter();

  @Output() onDeleteAbout: EventEmitter<Persona> = new EventEmitter();
  

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.loggin = value);
                                      this.loggin = this.uiService.getLoggin();
  
    this.aboutForm = new FormGroup({textoAcerca: new FormControl("")});
  }

  ngOnInit(): void {
    
  }

  onCancelEditionAbout(){
    this.persona.acerca = this.aboutForm.get("textoAcerca")?.value;
    this.edition_mode = false;
    
  }

  onEdit(){
    this.edition_mode = true;
  }
}
