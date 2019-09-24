import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authorList: any;
  totalAuthors: any;
  createAuthorForm = this.formBuilder.group({
    name: ['', Validators.required]
  });

  constructor(private authorService: AuthorService,
              private router: Router,
              private userService: UserService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAllAuthors();
  }

  getAllAuthors() {
    this.authorService.allAuthors().subscribe(data => {
      this.authorList = data;
      this.totalAuthors = this.authorList.length;
    });
  }

  isAdmin() {
    return this.userService.isAdmin();
  }

  authorDetail(authorId) {
    this.router.navigate(['/authordetail/', authorId]);
  }

  createAuthorSubmit() {
    this.authorService.createAuthor(this.createAuthorForm.getRawValue()).subscribe(createSuccess => {
      document.getElementById('closeModal').click();
      this.getAllAuthors();
    });
  }

}
