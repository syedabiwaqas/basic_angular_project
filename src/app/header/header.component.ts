import { Component, OnInit } from '@angular/core';
import { AuthServcie } from '../auth_guard/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(public authService : AuthServcie) { }

  ngOnInit(): void {
    
    console.log(this.authService.loggedIn)
  }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  logout(){
      this.authService.logout();
  }

}
