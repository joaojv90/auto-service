import { CanActivateFn, Router } from '@angular/router';

export const loginGuardGuard: CanActivateFn = (route, state) => {

  let access = localStorage.getItem('login');

  if(access === "true"){
    return true;
  } else {
    let ruta:Router = new Router();
    ruta.navigate(['/us'])
    return false
  }

};
