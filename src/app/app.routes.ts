import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { DashboardComponent } from './pages/admin/pages/dashboard/dashboard.component';
import { UpdateRoomsComponent } from './pages/admin/pages/update-rooms/update-rooms.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.routes').then(m => m.ADMIN_ROUTES) },
  { path: 'customer', component: CustomerComponent },
  { path: 'customer', loadChildren: () => import('./pages/customer/customer.routes').then(m => m.CUSTMOER_ROUTES) },
  { path: 'dashborad', component: DashboardComponent },
  { path: 'rooms/:id/edit', component: UpdateRoomsComponent },


];
