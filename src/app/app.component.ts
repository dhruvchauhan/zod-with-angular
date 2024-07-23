import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { z } from 'zod';
import { ZodError } from 'zod/lib/external';

const UserForm = z.object({
  name: z.string(),
  phoneNumber: z.string().optional(),
  email: z.string().email(),
  website: z.string().optional(),
});

@Component({
  selector: 'app-zod',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PeopleService],
})
export class AppComponent implements OnInit {
  readonly peopleService = inject(PeopleService);
  allPeople$ = this.peopleService
    .getAllPeople()
    .pipe(map((response) => response.results));

  ngOnInit() {
    try {
      this.validateFormInput({
        name: 'abc',
        email: 'abc@a.com'
      });
    } catch (e) {
      console.log((e as ZodError).errors);
    }
  }

  validateFormInput = (values: unknown) => {
    const parsedData = UserForm.parse(values);
    return parsedData;
  };
}
