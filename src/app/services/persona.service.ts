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
  private apiUrl = 'http://localhost:8080/ver/personadto';

  constructor(
    private http:HttpClient
  ) { }

   /* getPeoples():Observable<Persona[]>{
    //return this.http.get<Persona[]>(this.apiUrl);
    return this.http.get<Persona[]>('http://localhost:8080/ver/personadto');
  }  */

  getPeople(id_persona:number):Observable<Persona>{
    const url = `${this.apiUrl}/${id_persona}`;
    return this.http.get<Persona>(url);
  }

  update(persona: Persona):Observable<Persona>{
    const url = `${this.apiUrl}/${persona.id}`;
    return this.http.put<Persona>(url,persona,httpOptions);
  }
}
