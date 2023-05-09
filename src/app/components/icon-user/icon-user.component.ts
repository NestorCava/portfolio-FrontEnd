import { Component, OnInit, Input } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router'
import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-user',
  templateUrl: './icon-user.component.html',
  styleUrls: ['./icon-user.component.css']
})
export class IconUserComponent {

  usuarioLogin = faUser;
  usuarioLogout = faRightToBracket;

  usuarioLog = this.usuarioLogout;
  loggin: boolean=false;
  subscription?: Subscription;


  @Input() padding: string="";
  @Input() icon: string ="";
  @Input() url: string="";
 

  constructor(
    private uiService:UiService,
    private router:Router
  ){
    this.subscription = this.uiService.onToogle()
                                      .subscribe(value => this.loggin = value);
                                      this.loggin = this.uiService.getLoggin();
                        
    if(this.loggin){
      this.usuarioLog = this.usuarioLogin;
    }else{
      this.usuarioLog = this.usuarioLogout;
    }
  }

  toogleLog(){
        
    if(this.loggin){
      this.router.navigate(['/']);
      this.uiService.toogleLog();
    }else{
      this.router.navigate(['/login']);
    }
    
    
  }
}
