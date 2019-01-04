import { Component, OnInit } from '@angular/core';
import {Category} from '../models/category.model';
import {OrderModel} from '../models/order.model';
import {LoginService} from '../../services/login.service';
import {User} from '../../login/user';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: OrderModel[] = [];
  user: User = new User();

  constructor(private authService: AuthService, private insertService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();

    if (this.user === null) {
      this.router.navigate(['/AdminPanel/LogIn']);
    }

    this.orders = [];
    this.loadOrders();
  }

  loadOrders() {
    this.insertService.getAllOrders()
      .subscribe(
        (orders: any[]) => {
          this.orders = orders;
        },
        (error) => console.log(error)
      );
  }
}
