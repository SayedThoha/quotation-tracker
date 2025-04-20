import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'QuotationTracker';

  userService = inject(UserService);

  constructor() {}
  onLogout() {
    this.userService.loggedUserData = undefined;
    sessionStorage.removeItem('RfqUser');
  }
}
