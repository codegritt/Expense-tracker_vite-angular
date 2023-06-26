/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';







@Component({
  selector: 'angular-vite-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {

  menuItems = [
    {
        id: 1,
        title: 'Dashboard',
     
        link: '/dashboard'
    },
    {
        id: 2,
        title: "View Transactions",
   
        link: "/dashboard",
    },
    {
        id: 3,
        title: "Incomes",
      
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",

        link: "/dashboard",
    },
]

}
