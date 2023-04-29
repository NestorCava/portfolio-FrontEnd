import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http'
import { Observable, of} from 'rxjs';

import { People } from 'src/People';

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
}
