import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit, OnDestroy {

  bookId: any;
  bookInfo: any;
  userId: any;
  reviewData: any;
  canReviewStatus: boolean;
  subscription: Subscription;
  authorList: any;
  categoryList: any;
  filesToUpload: Array<File> = [];
  submitted: boolean;
  updateBookData: any;
  authorId: any;
  updateBookForm = this.formBuilder.group({
    name: [''],
    category: [''],
    author: [''],
    reviews: [''],
    description: ['']
  });
  uploadBookCover = this.formBuilder.group({
    book_cover: ['', Validators.required]
  });
  pdfToUpload: Array<File> = [];
  uploadBookPdf = this.formBuilder.group({
    file: ['', Validators.required]
  });

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private bookService: BookService,
              private authorService: AuthorService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBook();
  }

  getBook() {
    this.subscription = this.route.params.subscribe(bookData => {
      this.bookId = bookData.id;
      this.bookService.bookDetail(this.bookId).subscribe(data => {
        this.bookInfo = data,
          this.canReviewStatus = this.bookInfo.can_review;
        this.authorService.allAuthors().subscribe(authorData => {
          this.authorList = authorData;
          this.bookService.allCategories().subscribe(categoryData =>
            this.categoryList = categoryData);
        });
      });
    });
  }

  isAdmin() {
    return this.userService.isAdmin();
  }

  canReviewBook() {
    if (this.canReviewStatus === true) {
      return true;
    } else {
      return false;
    }
  }

  reviewBook(userReview, bookId) {
    this.userId = Number(localStorage.getItem('Alias'));
    this.reviewData = { reader: this.userId, review: userReview, book: bookId };
    this.bookService.bookReview(this.reviewData).subscribe(reviewSuccess => {
      this.getBook();
    });
  }

  readBook(bookId) {
    this.router.navigate(['/readbook/', bookId]);
  }

  updateBook(bookId) {
    this.bookInfo.author.forEach(element => {
      this.authorId = element.id;
    });

    this.updateBookForm.patchValue({
      name: this.bookInfo.name,
      category: this.bookInfo.category.id,
      author: [this.authorId],
      description: this.bookInfo.description,
      reviews: this.bookInfo.reviews
    });
  }

  updateBookSubmit(bookId) {
    this.updateBookData = this.updateBookForm.getRawValue();
    this.updateBookData.category = (this.updateBookData.category);
    this.updateBookData.author = [Number(this.updateBookData.author)];
    this.bookService.updateBook(this.updateBookData, bookId).subscribe(updateSuccess => {
      document.getElementById('closeModalUpdate').click();
      this.getBook();
    });
  }

  deleteBook(bookId) {
    this.bookService.deleteBook(bookId).subscribe(deleteSuccess =>
      this.router.navigate(['/dashboard']));
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = fileInput.target.files as Array<File>;
  }

  updateBookCover(bookId) {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    const name = 'name';

    formData.append('book_cover', files[0], files[0][name]);
    formData.append('book_cover', [files[0]]);
    this.bookService.updateBook(formData, bookId).subscribe(updateCoverSuccess => {
      document.getElementById('closeModal').click();
      this.getBook();
    });
  }

  updatePdfEvent(fileInput: any) {
    this.pdfToUpload = fileInput.target.files as Array<File>;
  }

  updatePdf(bookId) {
    const formData: any = new FormData();
    const files: Array<File> = this.pdfToUpload;

    formData.append('file', files[0]);
    this.bookService.updateBook(formData, bookId).subscribe(updatePdfSuccess => {
      document.getElementById('closeModalPdf').click();
      this.getBook();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
