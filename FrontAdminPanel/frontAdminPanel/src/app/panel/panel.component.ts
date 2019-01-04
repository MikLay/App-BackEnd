import {Component, HostBinding, OnInit} from '@angular/core';
import {InsideWorkService} from './services/inside-work.service';
import {LoginService} from './services/login.service';
import {AuthService} from './services/auth.service';
import {isNullOrUndefined, log} from 'util';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @HostBinding('class.is-open')
  isLogin: boolean;



  constructor(
    private  changeService: InsideWorkService,
    private loginService: LoginService,
    private authServer: AuthService
  ) { }

  ngOnInit() {
    this.isLogin = (!isNullOrUndefined(this.authServer.getCurrentUser()));
    this.changeService.change.subscribe(() => { this.isLogin = true; });
  }
  logOut() {
    this.isLogin = false;
    log('awdawd');
    this.loginService.logout();
    this.authServer.logout();
  }


}
