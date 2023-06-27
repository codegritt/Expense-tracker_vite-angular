/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';







@Component({
  selector: 'angular-vite-navigation',
  standalone: true,
  imports: [CommonModule,MatListModule,RouterModule,MatIconModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {



}
