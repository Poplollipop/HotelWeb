import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../../../service/admin-service/admin.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  current_page = 1;
  rooms = [];

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
    })
  }

}
