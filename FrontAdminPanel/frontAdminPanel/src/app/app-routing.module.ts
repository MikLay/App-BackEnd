import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminProfileComponent} from './panel/admin-profile/admin-profile.component';
import {LoginComponent} from './panel/login/login.component';
import {CategoriesComponent} from './panel/admin-profile/categories/categories.component';
import {ProductsComponent} from './panel/admin-profile/products/products.component';
import {OrderModel} from './panel/admin-profile/models/order.model';
import {OrdersComponent} from './panel/admin-profile/orders/orders.component';

const routes: Routes = [
  {path : 'AdminPanel/AdminProfile', component: AdminProfileComponent},
  {path: 'AdminPanel/LogIn', component: LoginComponent},
  {path: 'AdminPanel/Category', component: CategoriesComponent},
  {path: 'AdminPanel/Product', component: ProductsComponent},
  {path: 'AdminPanel/Order', component: OrdersComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
