import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  forgetPasswordForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });
  statusMessage: any;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.forgetPassword(this.forgetPasswordForm.getRawValue()).subscribe(forgetSuccess => {
      this.statusMessage = forgetSuccess.message;
    });
  }

}
