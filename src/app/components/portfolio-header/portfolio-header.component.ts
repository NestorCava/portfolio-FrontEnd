import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { PERSONA, Persona } from '../../../People';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css']
})
export class PortfolioHeaderComponent implements OnInit{

  loggin: boolean=false;
  subscription?: Subscription;
  edition_mode: boolean = false;

  datosPersonalesForm: FormGroup;

  @Input() persona: Persona = PERSONA;
  @Output() uploadAboutPersona: EventEmitter<Persona> = new EventEmitter();

  @Output() updatePersona: EventEmitter<Persona> = new EventEmitter();
 

  constructor(private uiService:UiService){
    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.loggin = value);
                                      this.loggin = this.uiService.getLoggin();

    this.datosPersonalesForm = new FormGroup({
                                              nombreInput: new FormControl(""),
                                              apellidoInput: new FormControl(""),
                                              posicionInput: new FormControl(""),
                                              localidadInput: new FormControl("")
                                            });
    
    for(let i=0; i<this.persona.redesSociales.length; i++){
      let nombre: string = "red" + this.persona.redesSociales[i] + "Input";
      this.datosPersonalesForm.addControl(nombre,new FormControl("")); 
    }
    
  }

  ngOnInit(): void {
  }

  deleteAboutEdition(){
    
  }

  uploadAbout(persona: Persona){
    this.uploadAboutPersona.emit(this.persona);
  }
  
  deleteAbout(persona: Persona){
    this.updatePersona.emit(this.persona);
  }

  editPersona(persona: Persona){
    this.persona=persona;
    this.updatePersona.emit(this.persona);
  }

  onEditDatos(persona: Persona){
    persona.nombre=(document.getElementById("nombre-portfolio-header"+persona.id))
                                            ?.textContent as string;
    persona.apellido=(document.getElementById("apellido-portfolio-header"+persona.id))
                                            ?.textContent as string;
    persona.posicion=(document.getElementById("posicion-portfolio-header"+persona.id))
                                            ?.textContent as string;
    persona.localidad=(document.getElementById("localidad-portfolio-header"+persona.id))
                                            ?.textContent as string;
                    
    this.editPersona(persona);
  }

  onEdit(){
    for(let i=0; i<this.persona.redesSociales.length; i++){
      console.log("Entro");
      let nombre: string = "red" + this.persona.redesSociales[i].id + "Input";
      this.datosPersonalesForm.addControl(nombre,new FormControl("nombre")); 
    }
    this.edition_mode = true;
  }

  onCancelEdition(){
    this.persona.nombre = this.datosPersonalesForm.get("nombreInput")?.value;
    this.persona.apellido = this.datosPersonalesForm.get("apellidoInput")?.value;
    this.persona.posicion = this.datosPersonalesForm.get("posicionInput")?.value;
    this.persona.localidad = this.datosPersonalesForm.get("localidadInput")?.value;

    for(let i=0; i<this.persona.redesSociales.length; i++){
      let nombre: string = "red" + this.persona.redesSociales[i].id + "Input";
      this.persona.redesSociales[i].url = this.datosPersonalesForm.get(nombre)?.value;
    }

    this.edition_mode = false;
  }
}
