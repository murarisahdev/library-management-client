import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { UserService } from '../../services/user.service';
import { AuthorService } from '../../services/author.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authorList: any;
  categoryList: any;

  constructor(private userService: UserService,
              private bookService: BookService,
              private authorService: AuthorService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.authorService.allAuthors().subscribe(authorData => {
      this.authorList = authorData;
      this.bookService.allCategories().subscribe(categoryData => this.categoryList = categoryData);
    });
  }

  isLoggedIn() {
    return this.userService.isLoggedIn();
  }

  getUser() {
    return this.userService.getStore('User');
  }

  authorDetail(authorId) {
    this.router.navigate(['/authordetail', { author_id: authorId }]);
  }

  categoryDetail(categoryId) {
    this.router.navigate(['/categorydetail', { category_id: categoryId }]);
  }

  logout() {
    this.userService.logout().subscribe(success => {
      this.userService.destroyStore('Token');
      this.userService.destroyStore('User');
      this.userService.destroyStore('Alias');
      this.userService.destroyStore('Admin');
      this.userService.destroyStore('Social');
      this.router.navigate(['']);
    });
  }

  userProfile() {
    this.router.navigate(['/profile']);
  }

  userReview() {
    this.router.navigate(['myreviews']);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
