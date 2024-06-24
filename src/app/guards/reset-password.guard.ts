import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

export const resetPasswordGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const queryParams = route.queryParams;
  const token = queryParams['token']; 

  const isValidToken = token !== undefined && token !== null && token !== '';

  return isValidToken;
};
