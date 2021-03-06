import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { tokenNotExpired } from 'angular2-jwt';
declare var Auth0Lock: any;

@Injectable()
export class AuthService {

// We'll use the Auth0 Lock widget for capturing user credentials
  lock = new Auth0Lock('MYClientID', 'myname.auth0.com', {});
  constructor(private router: Router) {
    this.lock.on('authenticated', (authResult: any) => {
          localStorage.setItem('id_token', authResult.idToken);

          this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
            if (error) {
              console.log(error);
            }

            localStorage.setItem('profile', JSON.stringify(profile));
          });

          this.lock.hide();
        });
  }

  // This method will display the lock widget
  login() {
    this.lock.show();
  }

// This method will log the user out
  logout() {
    // To log out, just remove the token and profile
    // from local storage
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');

    // Send the user back to the public deals page after logout
    this.router.navigateByUrl('/deals');
  }

// Finally, this method will check to see if the user is logged in. We'll be able to tell by checking to see if they have a token and whether that token is valid or not.
  loggedIn() {
    return tokenNotExpired();
  }

}
