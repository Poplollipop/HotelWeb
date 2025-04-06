import { Component, TemplateRef } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../../../service/admin-service/admin.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterLink } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-dashboard',
  imports: [
    NzButtonModule,
    NzCardModule,
    NzSkeletonModule,
    NzPaginationModule,
    NzModalModule,
    NzToolTipModule,
    NzIconModule,
    RouterLink,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  current_page = 1;
  rooms = [];
  total: any;
  actionEdit: TemplateRef<void>;
  actionDelete: TemplateRef<void>;
  avatarTemplate: TemplateRef<void>;

  constructor(
    private message: NzMessageService,
    private adminService: AdminService,
    private nzModal: NzModalService,
  ) {
    this.getRooms();
  }

  getRooms() {
    this.adminService.getRoom(this.current_page - 1).subscribe(res => {
      this.rooms = res.roomsDtoList;
      this.total = res.pages * 1;
    })
  }

  showConfirmed(roomId: number) {
    this.nzModal.confirm({
      nzTitle: '確認',
      nzContent: '您確認要刪除嗎？刪除後無法回復！',
      nzOkText: '刪除',
      nzCancelText: '取消',
      nzOnOk: () => this.deleteRoom(roomId)
    })
  }

  deleteRoom(roomId: number) {
    this.adminService.deleteRoom(roomId).subscribe(res => {
      this.message.success(`房間已成功刪除！`, { nzDuration: 5000 });
      this.getRooms();
    }, error => {
      this.message.error(`${error.error}`, { nzDuration: 5000 })
    })
  }

  pageIndexChange(value: any) {
    this.current_page = value;
    this.getRooms();
  }

}
