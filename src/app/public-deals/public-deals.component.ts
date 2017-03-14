import { Component, OnInit } from '@angular/core';

import { Deal } from '../deal';

import { AuthService } from '../auth.service';
import { DealService } from '../deal.service';


@Component({
  selector: 'app-public-deals',
  templateUrl: './public-deals.component.html',
  styleUrls: ['./public-deals.component.scss']
})
export class PublicDealsComponent implements OnInit {

  publicDeals: Deal[];

  constructor(
    private dealService: DealService,
    private authService: AuthService
    ) { }

  
// When this component is loaded, we'll call the dealService and get our public deals.
  ngOnInit(): void {
    this.dealService.getPublicDeals()
        .then(deals => this.publicDeals = deals);
  }

  purchase(item){
    alert("You bought the: " + item.name);
  }

}
