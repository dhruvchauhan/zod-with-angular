import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { tap, Observable } from 'rxjs';
import { People, PeopleSchema } from './people.model';

@Injectable()
export class PeopleService {
  private readonly http = inject(HttpClient);

  getAllPeople(): Observable<People> {
    return this.http.get<People>('https://swapi.dev/api/people').pipe(
      tap((response) => {
        const zodPeopleSchema = PeopleSchema.safeParse(response);
        if (zodPeopleSchema.success) {
          console.log('Zod parsed result', zodPeopleSchema.data);
        }
        console.log('Normal data', response);
      })
    );
  }
}
