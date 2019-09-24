import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: this.passwordValidation });
  statusMessage: any;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  passwordValidation(group: AbstractControl): { [key: string]: any } | null {
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');
    if (passwordControl.value === confirmPasswordControl.value || confirmPasswordControl.pristine) {
      return null;
    } else {
      return { passwordMismatch: true };
    }
  }

  onSubmit() {
    this.userService.signup(this.signUpForm.value).subscribe(
      data => this.router.navigate(['/login']),
      error => this.statusMessage = 'An account exist with this e-mail'
    );
  }

}
