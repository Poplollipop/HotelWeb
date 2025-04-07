import { NzMessageService } from 'ng-zorro-antd/message';
import { CustomerService } from './../../../../service/customer-service/customer.service';
import { Component } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'app-view-bookings',
  imports: [
    NzTableModule,
    NzPaginationModule,
    NzTagModule,
    NzIconModule,
    NzSpinModule,
  ],
  templateUrl: './view-bookings.component.html',
  styleUrl: './view-bookings.component.scss'
})
export class ViewBookingsComponent {

  current_page: any = 1;

  total: any;
  bookings: any;

  constructor(
    private customerService: CustomerService,
    private message: NzMessageService,
  ) {
    this.getBookings();
  }

  getBookings() {
    this.customerService.getBookings(this.current_page - 1).subscribe(res => {
      console.log(res);
      this.bookings = res.roomStatusDto;
      this.total = res.totalPages * 5;
    }, error => {
      this.message.error(`${error.error}`, { nzDuration: 5000 })
    })
  }

  pageIndexChange(value: any) {
    this.current_page = value;
    this.getBookings();
  }


}
