import { AdminService } from './../../../../service/admin-service/admin.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NonNullableFormBuilder, ReactiveFormsModule, } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
@Component({
  selector: 'app-rooms',
  imports: [ReactiveFormsModule, NzButtonModule, NzFormModule, NzInputModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  roomFrom: FormGroup;


  constructor(private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private adminService: AdminService,
  ) {
    this.roomFrom = fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  submitForm() {
    this.adminService.postRoom(this.roomFrom.value).subscribe(res => {
      this.message.success(
        `您已成功新增房間資訊！`,
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
