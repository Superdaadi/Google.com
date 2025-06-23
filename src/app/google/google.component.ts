import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-google',
  standalone: true,
  imports: [],
  templateUrl: './google.component.html',
  styleUrl: './google.component.css'
})
export class GoogleComponent {
  constructor(public auth: AuthService) {}


  login(){
    this.auth.isAuthenticated$.subscribe(isAuthenthicated => {
      if(!isAuthenthicated){
        this.auth.loginWithRedirect()
      }
      else {
        this.auth.logout()
      }
    });
  }

}


