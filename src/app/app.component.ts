import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/Header/header.component';
import { NavigationComponent } from './Components/Navigation/navigation.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import {provideHttpClient} from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { withPreloading } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { withDebugTracing } from '@angular/router';

@Component({
  standalone: true,
  imports: [HeaderComponent, RouterModule,NavigationComponent,RouterLink, RouterOutlet],
  selector: 'angular-vite-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-vite';
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    // provider to inject routes, preload all modules and trace route change events
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules), withDebugTracing())
  ]
});