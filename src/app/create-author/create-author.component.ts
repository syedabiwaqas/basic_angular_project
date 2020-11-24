import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';
import { UrlConstants } from '../config/constants';

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styleUrls: ['./create-author.component.css']
})
export class CreateAuthorComponent implements OnInit {

  error =  false;
  errorMessage = '';
  createAuthorForm: FormGroup;
  constructor(private dataService: ConfigService, private router: Router) { }

  ngOnInit(): void {
    this.createAuthorForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'username': new FormControl('', Validators.required),
    })
  }

  onSubmit(){
    const data = {
      name: this.createAuthorForm.value.name,
      username: this.createAuthorForm.value.username,

    };
    this.dataService.createPostRequest(UrlConstants.createAuthor,data).subscribe({
      next: data => {
        this.router.navigate(['/author']);
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
    })
  }

}
