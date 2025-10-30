import { Routes } from '@angular/router';
import { Dashboard } from '../features/dashboard/dashboard';
import { Home } from '../features/home/home';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dashboard'
  },
  {
    path:'dashboard',
    component:Dashboard,
  },
  {
    path:'home',
    component:Home,
  },
];