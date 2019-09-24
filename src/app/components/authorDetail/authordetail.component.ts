import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-authordetail',
  templateUrl: './authordetail.component.html',
  styleUrls: ['./authordetail.component.css']
})
export class AuthordetailComponent implements OnInit, OnDestroy {
  authorId: any;
  author: any;
  authorBookList: any;
  subscription: Subscription;
  updateAuthorForm = this.formBuilder.group({
    name: ['']
  });

  constructor(private authorService: AuthorService,
              private route: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAuthorDetail();
  }

  getAuthorDetail() {
    this.subscription = this.route.params.subscribe(data => {
      this.authorId = data.id;
      this.authorService.authorDetail(this.authorId).subscribe(authorData => {
        this.author = authorData;
        this.authorService.authorBooks(this.authorId).subscribe(authorBooksdata => this.authorBookList = authorBooksdata);
      });
    });
  }

  isAdmin() {
    return this.userService.isAdmin();
  }

  bookDetail(bookId) {
    this.router.navigate(['/bookdetail/', bookId]);
  }

  updateAuthor() {
    this.updateAuthorForm.patchValue({
      name: this.author.name
    });
  }

  updateAuthorSubmit(authorId) {
    this.authorService.updateAuthor(this.updateAuthorForm.getRawValue(), authorId).subscribe(updateSucces => {
      document.getElementById('closeModal').click();
      this.getAuthorDetail();
    });
  }

  deleteAuthor(authorId) {
    this.authorService.deleteAuthor(authorId).subscribe(deleteSuccess => this.router.navigate(['/authors']));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
