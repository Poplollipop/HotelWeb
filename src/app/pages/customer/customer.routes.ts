import { CustomerComponent } from './customer.component';
import { Routes } from '@angular/router';
import { RoomsComponent } from './pages/rooms/rooms.component';

export const CUSTMOER_ROUTES: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'rooms', component: RoomsComponent },

];
