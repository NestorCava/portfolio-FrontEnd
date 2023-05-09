import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent {
  usuario: string ="";
  pass: string ="";

  loggin: boolean=false;
  subscription?: Subscription;

  constructor(
    private uiService:UiService,
    private router:Router
  ){
    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.loggin = value)
  }

  onSubmit(){
    //console.log("this.loggin");
    //this.uiService.setLoggin(true);
    this.uiService.toogleLog();
    console.log(this.loggin);
    console.log(this.loggin);
    console.log(this.loggin);
    console.log(this.loggin);
    console.log(this.loggin);
    console.log(this.loggin);
    this.router.navigate(['/']);
  }

  onCancel(){

  }
}
