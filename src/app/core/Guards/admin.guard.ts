import { AuthService } from 'src/app/auth/services/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {

 const _AuthService = inject(AuthService);
  const _Router = inject(Router);
  const role = _AuthService.role;

  if (localStorage.getItem('userToken') !== null && role == 'SuperAdmin') {
    return true;
  } else{
   _Router.navigate(['/auth']);
    return false
  }

};
