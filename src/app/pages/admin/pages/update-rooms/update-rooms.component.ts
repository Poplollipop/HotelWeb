import { AdminService } from './../../../../service/admin-service/admin.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
@Component({
  selector: 'app-update-rooms',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  templateUrl: './update-rooms.component.html',
  styleUrl: './update-rooms.component.scss'
})
export class UpdateRoomsComponent {

  updateRoomFrom: FormGroup;

  id: number

  constructor(private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private adminService: AdminService,
    private activatedroute: ActivatedRoute,
  ) {
    this.updateRoomFrom = fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required]
    })
  }
  ngOnInit() {
    this.id = this.activatedroute.snapshot.params['id'];
    this.getRoomById();
  }

  getRoomById() {
    this.adminService.getRoomById(this.id).subscribe(res => {
      this.updateRoomFrom.patchValue(res);
      console.log(res);

    }, error => {
      this.message.error(`${error.error}`, { nzDuration: 5000 })
    })
  }

  submitForm() {
    this.adminService.updateRoom(this.id, this.updateRoomFrom.value).subscribe(res => {
      this.message.success(
        `您已成功修改房間資訊！`,
        { nzDuration: 5000 }
      );
      this.router.navigateByUrl('admin/dashboard')
    }, error => {
      this.message.error(
        `${error.error}`,
        { nzDuration: 5000 }
      )
    })
  }

}
