import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiInvited {
  private http = inject(HttpClient);
  setInvited(invited:Person):Observable<Person>{
    return this.http.post<Person>('api/v1/person',invited);
  }
}
