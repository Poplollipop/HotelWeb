import { SessionService } from './../../service/session/session.service';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthService } from '../../service/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule,RouterLink, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private authservice: AuthService,
    private message: NzMessageService,
    private router: Router,

  ) { }

  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    remember: this.fb.control(true)
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      this.authservice.login(this.validateForm.value).subscribe(res => {
        if (res.id != null) {
          const user = {
            id: res.id,
            role: res.userRole
          }
          SessionService.saveUser(user);
          SessionService.saveToken(res.jwt);

          if (SessionService.isAdmin()) {
            this.router.navigateByUrl('/admin/dashboard')
          }
          if (SessionService.isCustomer()) {
            this.router.navigateByUrl('/customer/rooms')
          }

          this.message.success("您已成功登入！", { nzDuration: 5000 });
          this.router.navigateByUrl('/welcome');
          return
        }
        this.message.error(`${res.message}`, { nzDuration: 5000 })
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
