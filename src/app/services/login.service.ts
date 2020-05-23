import { Injectable } from '@angular/core';

import { interval } from "rxjs";
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private enable_login_button: boolean = false;

  constructor() { }


  setTimeout(time_in_milisec) {
    interval(time_in_milisec).pipe(map((x) => {
      this.enable_login_button = true;
    }));
  }
}
