import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList: any;
  category: any;
  totalCategories: any;
  createCategoryForm = this.formBuilder.group({
    name: ['', Validators.required]
  });

  constructor(private bookService: BookService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.bookService.allCategories().subscribe(data => {
      this.categoryList = data;
      this.totalCategories = this.categoryList.length;
    });
  }

  isAdmin() {
    return this.userService.isAdmin();
  }

  categoryDetail(categoryId) {
    this.router.navigate(['/categorydetail/', categoryId]);
  }

  createCategorySubmit() {
    this.bookService.createCategory(this.createCategoryForm.getRawValue()).subscribe(createSuccess => {
      document.getElementById('closeModal').click();
      this.getAllCategories();
    });
  }

}
