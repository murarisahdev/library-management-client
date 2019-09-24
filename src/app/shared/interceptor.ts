
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    token: string;

    constructor(public userService: UserService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.token = this.userService.getStore('Token');
        if (typeof this.token === 'string') {
            request = request.clone({
                setHeaders: {
                    Authorization: `Token ${this.userService.getStore('Token')}`
                }
            });
            return next.handle(request).pipe(
                catchError((err: HttpErrorResponse) => {
                    if (err.status === 401) {
                        this.userService.signOut();
                        this.userService.destroyStore('Token');
                        this.userService.destroyStore('User');
                        this.userService.destroyStore('Alias');
                        this.userService.destroyStore('Mccain');
                        this.userService.destroyStore('Social');
                        this.router.navigate(['/login']);
                    }
                    return throwError(err);
                })
            );
        } else {
            return next.handle(request);
        }
    }

}
