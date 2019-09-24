import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ValidatePassword } from 'src/app/shared/user.validator';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.css']
})
export class PasswordresetComponent implements OnInit {

  passwordResetForm = this.formBuilder.group({
    password: ['', [Validators.required, ValidatePassword]],
    confirmPassword: ['', Validators.required]
  }, { validators: this.passwordValidation });
  token: any;
  resetData: any;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('id');
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
    this.userService.setStore('Token', this.token);
    this.userService.passwordReset(this.passwordResetForm.getRawValue())
      .subscribe(resetSuccess => this.router.navigate(['/login']));
  }

}
