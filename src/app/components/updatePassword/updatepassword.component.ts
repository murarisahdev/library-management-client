import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ValidatePassword } from 'src/app/shared/user.validator';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  passwordUpdateForm = this.formBuilder.group({
    current_password: ['', Validators.required],
    new_password: ['', [Validators.required, ValidatePassword]],
    confirmPassword: ['', Validators.required]
  },  {validators: this.passwordValidation} );
  statusMessage: any;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.updatePassword(this.passwordUpdateForm.getRawValue())
    .subscribe(
      updateSuccess => this.router.navigate(['/profile']),
      error => this.statusMessage = 'Current Password Not Correct',
    );
  }

  passwordValidation(group: AbstractControl): {[key: string]: any} | null {
    const passwordControl = group.get('new_password');
    const confirmPasswordControl = group.get('confirmPassword');
    if (passwordControl.value === confirmPasswordControl.value || confirmPasswordControl.pristine) {
      return null;
    } else {
      return {passwordMismatch: true};
    }
  }

}
