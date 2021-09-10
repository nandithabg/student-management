import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthService,
    private router:Router) { }

    signOut() {
      this.auth.SignOut();
      this.router.navigate(['/']);
      }

  ngOnInit() {
  }

}
