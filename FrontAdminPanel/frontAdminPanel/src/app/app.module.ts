import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { LoginComponent } from './panel/login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './panel/services/login.service';
import {AuthService} from './panel/services/auth.service';
import { AdminProfileComponent } from './panel/admin-profile/admin-profile.component';
import { CategoriesComponent } from './panel/admin-profile/categories/categories.component';
import { ProductsComponent } from './panel/admin-profile/products/products.component';
import { OrdersComponent } from './panel/admin-profile/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    LoginComponent,
    AdminProfileComponent,
    CategoriesComponent,
    ProductsComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
