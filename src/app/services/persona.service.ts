import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of} from 'rxjs';

import { People, Experiencia } from 'src/People';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })

}

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private apiUrl = 'http://localhost:5000/peoples';

  constructor(
    private http:HttpClient
  ) { }

  getPeoples():Observable<People[]>{
    return this.http.get<People[]>(this.apiUrl);
  }

  deleteAbout(people:People):Observable<People>{
    const url =  `${this.apiUrl}/${people.id}`;
    return this.http.put<People>(url,people,httpOptions);
  }

  update(people: People):Observable<People>{
    const url = `${this.apiUrl}/${people.id}`;
    return this.http.put<People>(url,people,httpOptions);
  }
}
