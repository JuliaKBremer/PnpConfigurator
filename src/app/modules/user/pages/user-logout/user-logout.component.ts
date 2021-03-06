import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from '../../services/firebase-auth.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {


  constructor(private loginService: FirebaseAuthService, private router: Router) {
  }

  async ngOnInit() {
    await this.loginService.logout();
    await this.router.navigate(['/user']);
  }
}
