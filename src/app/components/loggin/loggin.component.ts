import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router'
import { USUARIO, Usuario } from 'src/Usuario';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent {
  usuario: Usuario = USUARIO;

  logo : boolean=false;
  loggin: boolean=false;
  subscription?: Subscription;

  constructor(
    private uiService:UiService,
    private loginService:LoginService,
    private router:Router
  ){
    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.loggin = value)
  }

  ngInit():void{
    this.loginService.evaluarLogin().subscribe((logo) => {this.logo = logo});
  }
  onSubmit(){
    //let usuario = document.getElementById("usuarioInput")?.textContent as string;
    //let password = document.getElementById("contraseniaInput")?.textContent as string;
    let retorno = false;
    this.loginService.evaluarLogin().subscribe((logo) => {this.logo = logo});
    console.log("OOOOOO");
    console.log("OOOOOO");
    console.log("OOOOOO");
    console.log(this.logo);

    this.uiService.toogleLog();
    this.router.navigate(['/']);
  }

  onCancel(){

  }
}
