import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, of} from 'rxjs';

import { USUARIO, Usuario } from 'src/Usuario';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //private apiUrl = 'http://localhost:5000/usuarios';
  private apiUrl = 'http://localhost:8080';
  usuarioLog: Usuario = USUARIO;

  constructor(
    private http:HttpClient
  ) { }

  /* getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.apiUrl);
  } */

  evaluarLogin(datos: any):Observable<Usuario>{
    const url = this.apiUrl + "/login";
    console.log("Service");
    console.log(datos);
    return this.http.post<Usuario>(url,datos);//{params:parametros,});

  }
}
