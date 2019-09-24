import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userBookList: any;
  userReviews: any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.getUserBooks();
  }

  getUserBooks() {
    this.userService.readedBooks().subscribe(readedBooksData => {
      this.userBookList = readedBooksData;
      this.userService.userReview().subscribe(userReviewData => this.userReviews = userReviewData);
    });
  }

  bookDetail(bookId) {
    this.router.navigate(['/bookdetail/', bookId]);
  }

}
