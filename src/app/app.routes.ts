import { Route } from '@angular/router';

// lazy-load standalone component
export const APP_ROUTES: Route[] = [{
  path: 'expense',
//   component:ExpenseComponent,
  loadComponent: () => import('./Components/Expense/expense.component')
    .then(mod => mod.ExpenseComponent)
}, 
{
  path: 'income',
//   component:IncomeComponent,
  pathMatch: 'full',
     loadComponent: () => import('./Components/Income/income.component').then(mod => mod.IncomeComponent)
},
{
  path: '**',
//   component:DashboardComponent,
  loadComponent: () => import('./Components/Dashboard/dashboard.component')
    .then(mod => mod.DashboardComponent)
}];