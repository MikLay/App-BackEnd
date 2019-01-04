import { Component, OnInit } from '@angular/core';
import {isNullOrUndefined} from 'util';
import {User} from '../login/user';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  user: User = new User();
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();

    if (this.user === null) {
      this.router.navigate(['/AdminPanel/LogIn']);
    }
  }

  isNotAuthorized() {
    return isNullOrUndefined(this.user);
  }

}
