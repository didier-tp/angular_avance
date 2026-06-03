import { CanActivateFn, createUrlTreeFromSnapshot } from '@angular/router';
import { of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
 let username = sessionStorage.getItem("username");
  console.log("authGard with username="+username);
  if(username!=null && username!= "" && username != "null") 
    return true;
  //else return false;
  else return  of(createUrlTreeFromSnapshot(route, ['../notAuthorized']));
};
