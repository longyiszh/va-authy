import { RouterModule, Routes, CanActivate } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

import { PublicDealsComponent } from './public-deals/public-deals.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';

const vaAuthyRoute = [
 // Add the redirect
  {
    path: '',
    redirectTo: '/deals',
    pathMatch: 'full'
  },
  // Add our routes
  {
    path: 'deals',
    component: PublicDealsComponent
  },
  {
    path: 'special',
    component: PrivateDealsComponent,
    // We'll use the canActivate API and pass in our AuthGuard. Now any time the /special route is hit, the AuthGuard will run first to make sure the user is logged in before activating and loading this route.
    canActivate: [AuthGuardService]
  },
  {
      //wild card
    path: '**',
    redirectTo: '/deals'
  }
];

// Here we are combining our routing components into a single array. We will use this a little later when we update our root module
//export const routedComponents = [PublicDealsComponent, PrivateDealsComponent];

export const vaAuthyRouting = RouterModule.forRoot(vaAuthyRoute, { useHash: false });