import { Component, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule } from '@angular/forms';
import { formatDate } from '@angular/common';
import { CustomerService } from '../../../../service/customer-service/customer.service';
import { SessionService } from '../../../../service/session/session.service';




@Component({
  selector: 'app-rooms',
  imports: [
    NzButtonModule,
    NzCardModule,
    NzSkeletonModule,
    NzPaginationModule,
    NzModalModule,
    NzIconModule,
    NzToolTipModule,
    NzDatePickerModule,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {


  current_page = 1;
  rooms = [];
  total: any;
  actionCheck: TemplateRef<void>;
  avatarTemplate: TemplateRef<void>;

  isVisiable = false;
  date: Date[] = [];
  checkInDate: Date;
  checkOutDate: Date;
  id: number;

  constructor(
    private message: NzMessageService,
    private customerService: CustomerService,
    private nzModal: NzModalService,

  ) {
    this.getRooms();
  }

  getRooms() {
    this.customerService.getRoom(this.current_page - 1).subscribe(res => {
      console.log(res);
      this.rooms = res.roomsDtoList;
      this.total = res.pages * 1;
    })
  }

  pageIndexChange(value: any) {
    this.current_page = value;
    this.getRooms();
  }


  onChange(res: Date[]) {
    if (res.length == 2) {
      this.checkInDate = res[0];
      this.checkOutDate = res[1];
    }
  }

  cancelMiddle() {
    this.isVisiable = false;
  }

  okMiddle() {
    const data = {
      userId: SessionService.getUserId(),
      roomId: this.id,
      checkInDate: formatDate(this.checkInDate, 'yyyy-MM-dd', 'en-US'),
      checkOutDate: formatDate(this.checkOutDate, 'yyyy-MM-dd', 'en-US'),
    }

    this.customerService.bookingRoom(data).subscribe(res => {

      console.log(data);

      this.message.success(`房間已成功預訂！等待確認訂單中！`, { nzDuration: 5000 });
      this.isVisiable = false;
    }, error => {
      this.message.error(`${error.error}`, { nzDuration: 5000 })
    })
  }

  showModal(id: number) {
    this.id = id;
    this.isVisiable = true;
  }


}
