import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of} from 'rxjs';

import { USUARIO, Usuario } from 'src/Usuario';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })

}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //private apiUrl = 'http://localhost:5000/usuarios';
  private apiUrl = 'http://localhost:8080/login';
  usuarioLog: Usuario = USUARIO;

  constructor(
    private http:HttpClient
  ) { }

  /* getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUrl);
  } */

  evaluarLogin():Observable<boolean>{
    const url = this.apiUrl + "?usuario=admin&password=admin";
    console.log("ACA");
    console.log("ACA");
    console.log("ACA");
    return this.http.get<boolean>(url);

  }
}
