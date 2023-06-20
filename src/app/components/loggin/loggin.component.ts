import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router'
import { USUARIO, Usuario } from 'src/Usuario';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit{

  loginForm: FormGroup;
  
  user: string ="";
  password: string ="";

  usuario : Usuario = USUARIO;

  logo : boolean=false;
  loggin: boolean=false;
  subscription?: Subscription;

  constructor(
    private uiService:UiService,
    private loginService:LoginService,
    private router:Router,
  ){
    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.loggin = value);
    this.loginForm = new FormGroup({
                                    userName: new FormControl(''),
                                    password: new FormControl('')
                                    });
  }

  ngOnInit(){
    //this.loginService.evaluarLogin().subscribe((logo) => {this.logo = logo});
    this.loginForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }
  onSubmit(){
    
    const datos = { 
      id : 0,
      user: this.loginForm.get('userName')?.value, 
      password: this.loginForm.get('password')?.value ,
      idPersona: 0
    };
    console.log("datos");
    console.log(datos);
    this.loginService.evaluarLogin(datos).subscribe((u) => {this.usuario = u;console.log(u);});

    this.uiService.toogleLog();
    this.router.navigate(['/']);
  }

  onCancel(){

  }
}
