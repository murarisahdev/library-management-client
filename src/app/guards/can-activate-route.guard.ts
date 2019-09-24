import { Injectable } from '@angular/core';
import { CanActivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         Router} from '@angular/router';
import { UserService } from '../services/user.service';


@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.userService.isLoggedIn()) {
        return true;
      } else {
        this.router.navigate(['/login'], {
          queryParams: {
            return: state.url
          }
        });
        return false;
      }
  }

}
