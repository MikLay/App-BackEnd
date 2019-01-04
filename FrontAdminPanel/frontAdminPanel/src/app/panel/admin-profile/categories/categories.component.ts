import { Component, OnInit } from '@angular/core';
import {Category} from '../models/category.model';
import {LoginService} from '../../services/login.service';
import {isNullOrUndefined} from 'util';
import {User} from '../../login/user';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  choosedCategory: Category;
nameAdd: string;
descriptionAdd: string;
categories: Category[] = [];
  user: User = new User();

  constructor(private authService: AuthService, private insertService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();

    if (this.user === null) {
      this.router.navigate(['/AdminPanel/LogIn']);
    }
    this.categories = [];
   this.loadCategories();
   this.choosedCategory = new Category(null, null, null);
  }

  chooseCategory(id: string, name: string, description: string) {
    this.choosedCategory.id = id;
    this.choosedCategory.name = name;
    this.choosedCategory.description = description;
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

  postCategory() {
    this.insertService.addCategory(this.nameAdd, this.descriptionAdd).subscribe((error) => console.log(error));
    this.loadCategories();
  }

  deleteCategory() {
    if (!isNullOrUndefined(this.choosedCategory.id)) {
    this.insertService.deleteCategory(this.choosedCategory.id);
      this.loadCategories();
    }
   }

   editCategory() {
     if (!isNullOrUndefined(this.choosedCategory.id)) {
       console.log(this.choosedCategory);
       this.insertService.editCategory(this.choosedCategory);
       this.loadCategories();
     }
   }


}
