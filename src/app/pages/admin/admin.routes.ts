import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { UpdateRoomsComponent } from './pages/update-rooms/update-rooms.component';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'post-rooms', component: RoomsComponent },
  { path: 'rooms/:id/edit', component: UpdateRoomsComponent },

];
