import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SessionService } from './service/session/session.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isCollapsed = false;

  isCustomer: boolean = SessionService.isCustomer();
  isAdmin: boolean = SessionService.isAdmin();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event=>{
      if (event.constructor.name == 'NavigationEnd') {
        this.isCustomer = SessionService.isCustomer();
        this.isAdmin = SessionService.isAdmin();
      }
    })
  }

  loggout(){
    SessionService.loggout();
    this.router.navigateByUrl('/')
  }

}
