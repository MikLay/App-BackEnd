import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {LoginService} from '../services/login.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {isNullOrUndefined} from 'util';
import {InsideWorkService} from '../services/inside-work.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(
    private userService: LoginService,
              private changeService: InsideWorkService,
              private authService: AuthService,
              private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin() {
    console.log('Login tapped data: ', this.user);
    const user = this.user;
    this.userService.login(user.username, user.password).subscribe(response => {
      console.log(response);
      this.authService.setUser(response.user);
      this.authService.setToken(response.id);
      this.router.navigate(['/AdminPanel/AdminProfile']);

      if (!isNullOrUndefined(localStorage.getItem('accessToken'))) {
        this.changeService.changeIsLogIn();
      }

    }, err => {console.log(err);
    });
  }

}
