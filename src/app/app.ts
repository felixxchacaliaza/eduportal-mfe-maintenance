import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div style="padding: 1.5rem; font-family: sans-serif;">
      <header style="background: #0284c7; color: white; padding: 1rem 1.5rem; border-radius: 8px; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
        <h1 style="margin: 0; font-size: 1.25rem;">MFE Mantenimiento y Catálogos (Microfrontend Independiente)</h1>
        <span style="background: rgba(255,255,255,0.2); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.8rem; font-weight: bold;">Puerto 4208</span>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
    </div>
  `
})
export class AppComponent {}
