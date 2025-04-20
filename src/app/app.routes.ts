import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CreateRfqComponent } from './components/create-rfq/create-rfq.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: LandingComponent,
    title: 'Home',
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'create-rfq',
    component: CreateRfqComponent,
  },
];
