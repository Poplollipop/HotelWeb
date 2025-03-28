import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule, NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule, NzSelectModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private message: NzMessageService,
    private router: Router,
  ) { }


  ngOnInit() {
    this.validateForm = this.fb.group({
      email: this.fb.control('', [Validators.email, Validators.required]),
      password: this.fb.control('', [Validators.required]),
      name: this.fb.control('', [Validators.required]),
    });
  }


  submitForm() {
    if (this.validateForm.valid) {
      this.authservice.register(this.validateForm.value).subscribe(res => {
        if (res.id != null) {
          this.message.success("您已成功註冊！", { nzDuration: 5000 });
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
