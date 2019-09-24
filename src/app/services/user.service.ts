import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { strictEqual } from 'assert';

@Injectable()
export class UserService {
    BASE_URL: string;
    ADMINSTATUS: string;
    user: any;
    loggedIn: boolean;

    constructor(private http: HttpClient, private authService: AuthService) {
        this.BASE_URL = 'http://awesomeblog.in/api/';
    }

    socialLogin(socialUser): Observable<any> {
        return this.http.post(this.BASE_URL + 'create-user-social/', socialUser);
    }

    signup(signUpForm): Observable<any> {
        return this.http.post(this.BASE_URL + 'create-user/', signUpForm);
    }

    login(loginForm): Observable<any> {
        return this.http.post(this.BASE_URL + 'login-user/', loginForm);
    }

    logout() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            if (this.loggedIn) {
                this.signOut();
            }
        });
        return this.http.post(this.BASE_URL + 'logout/', '');
    }

    updatePassword(passwordData): Observable<any> {
        return this.http.post(this.BASE_URL + 'update-password/', passwordData);
    }

    readedBooks(): Observable<any> {
        return this.http.get(this.BASE_URL + 'track-readed-books/');
    }

    userReview(): Observable<any> {
        return this.http.get(this.BASE_URL + 'review/');
    }

    updateUserReview(reviewData, reviewId): Observable<any> {
        return this.http.put(this.BASE_URL + 'review/' + reviewId + '/', reviewData);
    }

    deleteUserReview(reviewId): Observable<any> {
        return this.http.delete(this.BASE_URL + 'review/' + reviewId + '/');
    }

    forgetPassword(email): Observable<any> {
        return this.http.post(this.BASE_URL + 'forget-password/', email);
    }

    passwordReset(resetForm): Observable<any> {
        return this.http.post(this.BASE_URL + 'reset-password/', resetForm);
    }

    setStore(name, token) {
        localStorage.setItem(name, token);
    }

    getStore(name) {
        return localStorage.getItem(name);
    }

    destroyStore(name) {
        localStorage.removeItem(name);
    }

    isLoggedIn() {
        if (localStorage.getItem('Token')) {
            return true;
        } else {
            return false;
        }
    }

    isAdmin() {
        this.ADMINSTATUS = localStorage.getItem('Mccain');
        if (this.ADMINSTATUS && this.ADMINSTATUS === 'true') {
            return true;
        } else {
            return false;
        }
    }

    signOut(): void {
        /*Social Signout*/
        this.authService.signOut();
    }

}
