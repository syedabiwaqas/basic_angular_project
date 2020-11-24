import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../config/config.service';
import { UrlConstants } from '../config/constants';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  authors = [];
  error =  false;
  errorMessage = '';
  createBookForm: FormGroup;
  constructor(private dataService: ConfigService, private router: Router) { }

  ngOnInit(): void {
    this.createBookForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
      'author': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
      'quantity': new FormControl('', Validators.required),
    });
    this.dataService.createGetRequest(UrlConstants.getAuthor).subscribe(
      data => {
        this.authors = data['data'];
    },
    error => {
      this.error = true;
      this.errorMessage = JSON.stringify(error['message']);
    });
  }
  onSubmit(): void {
    const data = {
      name: this.createBookForm.value.name,
      description: this.createBookForm.value.description,
      // tslint:disable-next-line: radix
      author: parseInt(this.createBookForm.value.author),
      price: this.createBookForm.value.price,
      quantity: this.createBookForm.value.quantity
    };

    this.dataService.createPostRequest(UrlConstants.createBook, data).subscribe({
      next: data => {
        console.log(data);
        this.router.navigate(['/books']);
      },
      error: error => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  });
  }

}
