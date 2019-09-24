import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserService } from './services/user.service';
import { CanActivateRouteGuard } from './guards/can-activate-route.guard';
import { TokenInterceptor } from './shared/interceptor';
import { BookService } from './services/book.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookdetailComponent } from './components/bookDetail/bookdetail.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthordetailComponent } from './components/authorDetail/authordetail.component';
import { AuthorService } from './services/author.service';
import { CategorydetailComponent } from './components/categoryDetail/categorydetail.component';
import { ForgetpasswordComponent } from './components/forgetPassword/forgetpassword.component';
import { PasswordresetComponent } from './components/passwordReset/passwordreset.component';
import { CategoryComponent } from './components/category/category.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountconfirmationComponent } from './components/accountConfirmation/accountconfirmation.component';
import { ReadbookComponent } from './components/readBook/readbook.component';
import { UpdatepasswordComponent } from './components/updatePassword/updatepassword.component';
import { MyreviewsComponent } from './components/myReviews/myreviews.component';


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('386064084837-c0106l6ne79veah90merfsi3mj66caac.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    BookdetailComponent,
    AuthorComponent,
    AuthordetailComponent,
    CategorydetailComponent,
    ForgetpasswordComponent,
    PasswordresetComponent,
    CategoryComponent,
    ProfileComponent,
    AccountconfirmationComponent,
    ReadbookComponent,
    UpdatepasswordComponent,
    MyreviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    PdfViewerModule
  ],
  providers: [UserService, BookService, AuthorService, CanActivateRouteGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
