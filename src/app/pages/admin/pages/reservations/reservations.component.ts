import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from './../../../../service/admin-service/admin.service';
import { Component } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-reservations',
  imports: [
    NzTableModule,
    NzPaginationModule,
    NzTagModule,
    NzIconModule,
    NzSpinModule,
  ],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {


  current_page: any = 1;
  total: any;
  reservations: any
  constructor(
    private adminService: AdminService,
    private message: NzMessageService,
  ) {
    this.getReservations();
  }


  getReservations() {
    this.adminService.getReservation(this.current_page - 1).subscribe(res => {
      this.reservations = res.roomStatusDto
      console.log(this.reservations);

      this.total = res.totalPages * 5
    })
  }

  changeStatus(bookingId: number, status: string) {
    this.adminService.changeReservationStatus(bookingId, status).subscribe(res => {
      this.message.success(`已成功更新預約狀態！`, { nzDuration: 5000 })
      this.getReservations();
    }, error => {
      this.message.error(`${error.error}`, { nzDuration: 5000 })
    })
  }



  pageChange(value: any) {
    this.current_page = value;
    this.getReservations();
  }

}
