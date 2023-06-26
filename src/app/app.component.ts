import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/Header/header.component';
import { NavigationComponent } from './Components/Navigation/navigation.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, RouterModule,NavigationComponent],
  selector: 'angular-vite-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-vite';
}
