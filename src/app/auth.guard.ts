import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let password = prompt("Írd be a jelszót a belépéshez(jelszó: teszt):");
  if (password === 'teszt') {
    return true;
  } else {
    alert('Hibás jelszó!');
    return false;
  }
};
