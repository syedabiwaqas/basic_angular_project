import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FakeLoginCredentials } from '../config/constants';
import { AuthServcie } from '../auth_guard/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error =  false;
  errorMessage = '';
  LoginForm: FormGroup;
  constructor(private authService : AuthServcie) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    });
  }

  onSubmit(){
    debugger;
    const data = {
      name: this.LoginForm.value.name,
      password: this.LoginForm.value.password
    };
    if (data.name === FakeLoginCredentials.username && data.password === FakeLoginCredentials.password) {
      this.error = false;
      this.authService.login();

    }else {
      this.error = true;
      this.errorMessage="Invalid login credential";
      this.authService.logout();
    }
  }

}
