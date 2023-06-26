import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/Header/header.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, RouterModule],
  selector: 'angular-vite-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-vite';
}
