import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Role } from './role';
import { AuthService } from '../services/auth/auth.service';

export const authorizedGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const userRole: Role = inject(AuthService).getUserRole();
  const expectedRoles: Role[] = route.data['roles'];
  const isLoggedIn: string = inject(AuthService).getLoggedInStatus();

  const isAuthorized: boolean = expectedRoles.some((role) => userRole === role);
  const test: string = isLoggedIn;

  return isAuthorized || router.navigate(['unauthorized']);
};
