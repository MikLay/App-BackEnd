import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
import {Category} from '../models/category.model';
import {ValidProduct} from '../models/valid-product';
import {LoginService} from '../../services/login.service';
import {isNullOrUndefined} from 'util';
import {User} from '../../login/user';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  choosedProduct: ValidProduct;
  products: ValidProduct[];
  addProduct: Product;
  categories: Category[] = [];
  user: User = new User();

  constructor(private authService: AuthService, private insertService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();

    if (this.user === null) {
      this.router.navigate(['/AdminPanel/LogIn']);
    }
    this.products = [];
    this.categories = [];
    this.loadCategories();
    this.loadProducts();
    this.choosedProduct = new ValidProduct(null, null, null, null, null, null, null);
    this.addProduct = new Product(null, null, null, null, null, null);
  }

  loadProducts() {
    this.insertService.getAllProducts()
      .subscribe(
        (products: any[]) => {
          this.products = products;
        },
        (error) => console.log(error)
      );
  }

  chooseProduct(product: ValidProduct) {
    this.choosedProduct.id = product.id;
    this.choosedProduct.name = product.name;
    this.choosedProduct.special_price = product.special_price;
    this.choosedProduct.category = product.category;
    this.choosedProduct.price = product.price;
    this.choosedProduct.image_url = product.image_url;
    this.choosedProduct.description = product.description;

  }

  loadCategories() {
    this.insertService.getAllCategories()
      .subscribe(
        (categories: any[]) => {
          this.categories = categories;
        },
        (error) => console.log(error)
      );
  }


  postProduct() {
    if (!isNullOrUndefined(this.addProduct.price) && !isNullOrUndefined(this.addProduct.name) ) {
      this.insertService.addProduct(this.addProduct).subscribe((error) => console.log(error));
      this.loadProducts();
    }
  }


  deleteProduct() {
    if (!isNullOrUndefined(this.choosedProduct.id)) {
      this.insertService.deleteProduct(this.choosedProduct.id);
      this.loadProducts();
    }
  }

  editProduct() {
    if (!isNullOrUndefined(this.choosedProduct.id)) {
      this.insertService.editProduct(this.choosedProduct);
      this.loadProducts();
    }
  }

}
