import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Zod in Angular</h1>
    <app-zod></app-zod>
  `,
  imports: [AppComponent],
})
export class App {}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
