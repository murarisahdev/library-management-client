import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BookService } from '../../services/book.service';
import { UserService } from 'src/app/services/user.service';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bookList: any;
  totalBooks: any;
  categoryList: any;
  newBookData: any;
  filesToUpload: Array<File> = [];
  pdfToUpload: Array<File> = [];
  createBookForm: FormGroup;
  authorList: any;
  previousPage: any;
  nextPage: any;
  createMessage: any;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private authorService: AuthorService,
              private bookService: BookService) { }

  ngOnInit() {
    this.initForm();
    this.getAllBooks();
  }

  initForm() {
    this.createBookForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      author: ['', Validators.required],
      book_cover: ['', Validators.required],
      description: ['', Validators.required],
      file: ['', Validators.required]
    });
  }

  getAllBooks() {
    this.bookService.bookCatalogue().subscribe(booksData => this.updateBookList(booksData));
  }

  updateBookList(booksData) {
    this.bookList = booksData.data;
    this.previousPage = booksData.meta.previous;
    this.nextPage = booksData.meta.next;
    this.totalBooks = booksData.meta.totalRecords;
    this.authorService.allAuthors().subscribe(authorData => {
      this.authorList = authorData;
      this.bookService.allCategories().subscribe(categoryData => this.categoryList = categoryData);
    });
  }

  previous() {
    this.bookService.paginatedBooks(this.previousPage)
      .subscribe(previousSuccess => this.updateBookList(previousSuccess));
  }

  next() {
    this.bookService.paginatedBooks(this.nextPage)
      .subscribe(nextSuccess => this.updateBookList(nextSuccess));
  }

  bookDetail(bookId) {
    this.router.navigate(['/bookdetail/', bookId]);
  }

  isAdmin() {
    return this.userService.isAdmin();
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = fileInput.target.files as Array<File>;
  }

  pdfUploadEvent(fileInput: any) {
    this.pdfToUpload = fileInput.target.files as Array<File>;
  }

  createBookSubmit() {
    const formData: any = new FormData();
    this.newBookData = this.createBookForm.getRawValue();
    const files: Array<File> = this.filesToUpload;
    const pdf: Array<File> = this.pdfToUpload;

    Object.keys(this.createBookForm.value).forEach((key) => {
      if (key === 'book_cover') {
        formData.append('book_cover', files[0]);
      } else if (key === 'file') {
        formData.append('file', pdf[0]);
      } else {
        formData.append(key, this.newBookData[key]);
      }
    });

    this.bookService.createBook(formData).subscribe(createSuccess => {
      document.getElementById('closeModal').click();
      this.createMessage = 'Book Created Succesfully !';
      this.initForm();
      this.getAllBooks();
    });
  }

}
