import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google',
  standalone: true,
  imports: [],
  templateUrl: './google.component.html',
  styleUrl: './google.component.css'
})
export class GoogleComponent {

  constructor(private router: Router) {}


  toLogin() {
    this.router.navigate(['login'])
  }

}
