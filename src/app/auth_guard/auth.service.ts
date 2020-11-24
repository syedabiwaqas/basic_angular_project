import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export class AuthServcie{
    loggedIn = false;

  constructor(private router: Router) {}
    authenticated() {
        const promise = new Promise (
            (resolve, reject) => {
                resolve(this.loggedIn);
            }
        );
        return promise;
    }
    login() {
        this.loggedIn = true;
        this.router.navigate(['/books']);
    }
    logout() {
        this.loggedIn = false;
        this.router.navigate(['/login']);
    }
}
