import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  imports: [NzButtonModule],

})
export class WelcomeComponent {

  constructor(private router: Router) { }


  toLogin() {
    this.router.navigateByUrl('login')
  }

  toRegister() {
    this.router.navigateByUrl('register')
    }
}
