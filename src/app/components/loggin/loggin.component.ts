import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router'
import { Usuario } from 'src/Usuario';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent {
  usuario: Usuario[]= [];

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
  }
  onSubmit(){
    this.uiService.toogleLog();
    this.router.navigate(['/']);
  }

  onCancel(){

  }
}
