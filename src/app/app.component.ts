import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //มันก็จะไปเรียก authService
  constructor(public authService: AuthService) { }

  logout() {
    this.authService.doLogout()
  }

}