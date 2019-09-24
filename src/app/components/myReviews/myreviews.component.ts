import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-myreviews',
  templateUrl: './myreviews.component.html',
  styleUrls: ['./myreviews.component.css']
})
export class MyreviewsComponent implements OnInit {
  myReviewList: any;
  userId: number;
  reviewId: any;
  reviewData: any;
  reviewValue: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserReview();
  }

  getUserReview() {
    this.userService.userReview().subscribe(userReviewData => {
      this.myReviewList = userReviewData; });
  }

  updateReviewReach(reviewId, review, bookId)  {
    this.reviewValue = review;
    this.reviewData = {book: bookId , review_id: reviewId};
  }

  updateReview(userReview) {
    this.userId = Number(localStorage.getItem('Alias'));
    this.reviewData.reader = this.userId;
    this.reviewData.review = userReview;
    this.reviewId = this.reviewData.review_id;
    this.userService.updateUserReview(this.reviewData, this.reviewId).subscribe(updateReviewSuccess => {
      document.getElementById('closeModal').click();
      this.getUserReview();
    });
  }

  deleteReview(reviewId) {
    this.userService.deleteUserReview(reviewId).subscribe(deleteSuccess => {
      this.getUserReview();
    });
  }

}
