import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../../../service/admin-service/admin.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterLink } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@Component({
  selector: 'app-dashboard',
  imports: [
    NzButtonModule,
    NzCardModule,
    NzSkeletonModule,
    RouterLink,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  current_page = 1;
  rooms = [];
  total: any;

  constructor(
    private message: NzMessageService,
    private adminService: AdminService,
  ) {
    this.getRooms();
  }

  getRooms() {
    this.adminService.getRoom(this.current_page - 1).subscribe(res => {
      console.log(res);
      this.rooms = res;
      this.total = res.pages * 1;
    })
  }

}
