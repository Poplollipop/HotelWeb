import { CustomerComponent } from './customer.component';
import { Routes } from '@angular/router';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ViewBookingsComponent } from './pages/view-bookings/view-bookings.component';

export const CUSTMOER_ROUTES: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'bookings', component: ViewBookingsComponent },

];
