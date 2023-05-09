import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private loggin: boolean=false;
  private subject= new Subject<any>();

  constructor() { }

  setLoggin(loggin: boolean):void{
    this.loggin=loggin;
    this.subject.next(this.loggin);
  }

  getLoggin():boolean{
    return this.loggin;
  }
  toogleLog():void{
    this.loggin = !this.loggin;
    this.subject.next(this.loggin);
  }

  onToogle():Observable<any>{
    return this.subject.asObservable();
  }
}
