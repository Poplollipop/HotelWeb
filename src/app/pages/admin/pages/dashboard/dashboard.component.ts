import { Component, TemplateRef } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../../../service/admin-service/admin.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterLink } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@Component({
  selector: 'app-dashboard',
  imports: [
    NzButtonModule,
    NzCardModule,
    NzSkeletonModule,
    NzPaginationModule,
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
  ) {
    this.getRooms();
  }

  getRooms() {
    this.adminService.getRoom(this.current_page - 1).subscribe(res => {
      console.log(res);
      this.rooms = res.roomsDtoList;
      this.total = res.pages * 1;
    })
  }

  pageIndexChange(value: any) {
    this.current_page = value;
    this.getRooms();
  }

}
