import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CanActivateRouteGuard } from './guards/can-activate-route.guard';
import { BookdetailComponent } from './components/bookDetail/bookdetail.component';
import { AuthorComponent } from './components/author/author.component';
import { AuthordetailComponent } from './components/authorDetail/authordetail.component';
import { CategoryComponent } from './components/category/category.component';
import { CategorydetailComponent } from './components/categoryDetail/categorydetail.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ForgetpasswordComponent } from './components/forgetPassword/forgetpassword.component';
import { PasswordresetComponent } from './components/passwordReset/passwordreset.component';
import { AccountconfirmationComponent } from './components/accountConfirmation/accountconfirmation.component';
import { ReadbookComponent } from './components/readBook/readbook.component';
import { UpdatepasswordComponent } from './components/updatePassword/updatepassword.component';
import { MyreviewsComponent } from './components/myReviews/myreviews.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'accountconfirmation', component: AccountconfirmationComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'passwordreset/:id', component: PasswordresetComponent },
  { path: 'changepassword', component: UpdatepasswordComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'myreviews', component: MyreviewsComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'bookdetail/:id', component: BookdetailComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'readbook/:id', component: ReadbookComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'authors', component: AuthorComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'authordetail/:id', component: AuthordetailComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'categories', component: CategoryComponent, canActivate: [CanActivateRouteGuard] },
  { path: 'categorydetail/:id', component: CategorydetailComponent, canActivate: [CanActivateRouteGuard] },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
