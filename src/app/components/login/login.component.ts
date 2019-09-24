import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email_or_username: ['', Validators.required],
    password: ['', Validators.required]
  });
  return: string;
  errorMessage: string;
  user: any;
  loggedIn: boolean;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private userService: UserService,
              private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        this.userService.socialLogin(this.user).subscribe(socialSuccess => {
          this.userService.setStore('Token', socialSuccess.token);
          this.userService.setStore('User', socialSuccess.username);
          this.userService.setStore('Alias', socialSuccess.user_id);
          this.userService.setStore('Mccain', socialSuccess.is_admin);
          this.userService.setStore('Social', socialSuccess.authToken);
          this.router.navigate(['/dashboard']);
        });
      } else if (this.userService.isLoggedIn) {
        this.router.navigate(['/dashboard']);
      }
    });
    this.route.queryParams
      .subscribe(params => this.return = params.return || '');
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  onSubmit() {
    this.userService.login(this.loginForm.value).subscribe(data => {
      this.userService.setStore('Token', data.token);
      this.userService.setStore('User', data.username);
      this.userService.setStore('Alias', data.user_id);
      this.userService.setStore('Mccain', data.is_admin);
      this.router.navigate(['/dashboard']);
    }, error => {
      this.errorMessage = 'Your Username, Email or Password Is Invalid';
    });
  }

}
