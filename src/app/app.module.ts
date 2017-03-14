import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS, AuthHttp, AuthConfig } from 'angular2-jwt';

import { MaterialModule } from '@angular/material';

import { vaAuthyRouting } from './va-authy.route';

import { DealService } from './deal.service';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

import { AppComponent } from './app.component';
import { PublicDealsComponent } from './public-deals/public-deals.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';

// fix angular-cli ridiculous error

import {Http, RequestOptions} from '@angular/http';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    PublicDealsComponent,
    PrivateDealsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    MaterialModule,

    vaAuthyRouting
  ],
  providers: [
    DealService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
