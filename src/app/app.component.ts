import { Component } from '@angular/core';
// First and foremost we'll include our authentication service
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

// We'll need to include a reference to our authService in the constructor to gain access to the API's in the view
  constructor(private authService: AuthService) {}

}
