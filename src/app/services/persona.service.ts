import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of} from 'rxjs';

import { Persona, Experiencia } from 'src/People';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })

}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //private apiUrl = 'http://localhost:5000/personas';
  private apiUrl = 'http://localhost:8080/personadto';

  constructor(
    private http:HttpClient
  ) { }

   /* getPeoples():Observable<Persona[]>{
    //return this.http.get<Persona[]>(this.apiUrl);
    return this.http.get<Persona[]>('http://localhost:8080/ver/personadto');
  }  */

  getPeople(id_persona:number):Observable<Persona>{
    const url = `${this.apiUrl}/ver/${id_persona}`;
    return this.http.get<Persona>(url);
  }

  getAbout(id_persona:number):Observable<Persona>{
    const url = `${this.apiUrl}/${id_persona}`;
    return this.http.get<Persona>(url);
  }

  update(persona: Persona):Observable<Persona>{
    const url = `${this.apiUrl}/actualizar/about`;
    const parametros ={id:persona.id,about:persona.acerca};
    console.log("Llega hasta acá??")
    console.log(parametros);
    //return this.http.put<Persona>(url,persona,httpOptions);
    return this.http.post<Persona>(url,parametros,httpOptions);
  }
}
