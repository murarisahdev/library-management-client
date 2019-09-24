import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-categorydetail',
  templateUrl: './categorydetail.component.html',
  styleUrls: ['./categorydetail.component.css']
})
export class CategorydetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  categoryId: any;
  category: any;
  categoryBookList: any;
  updateCategoryForm = this.formBuilder.group({
    name: ['']
  });

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private bookService: BookService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCategoryDetail();
  }

  getCategoryDetail() {
    this.subscription = this.route.params.subscribe(data => {
      this.categoryId = data.id;
      this.bookService.categoryDetail(this.categoryId).subscribe(categoryData => {
        this.category = categoryData;
        this.bookService.categoryBooks(this.categoryId).subscribe(
          categoryBooksData => this.categoryBookList = categoryBooksData);
      });
    });
  }

  isAdmin() {
    return this.userService.isAdmin();
  }

  bookDetail(bookId) {
    this.router.navigate(['/bookdetail/', bookId]);
  }

  updateCategory() {
    this.updateCategoryForm.patchValue({
      name: this.category.name
    });
  }

  updateCategorySubmit(categoryId) {
    this.bookService.updateCategory(this.updateCategoryForm.getRawValue(), categoryId).subscribe(updateSuccess => {
      document.getElementById('closeModal').click();
      this.getCategoryDetail();
    });
  }

  deleteCategory(categoryId) {
    this.bookService.deleteCategory(categoryId)
      .subscribe(deleteSucces => this.router.navigate(['/categories']));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
