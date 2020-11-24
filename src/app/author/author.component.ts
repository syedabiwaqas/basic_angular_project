import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { UrlConstants } from '../config/constants';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors = [];
  errorMessage = '';
  error = false;
  constructor(private dataService: ConfigService) { }

  ngOnInit(): void {
    this.dataService.createGetRequest(UrlConstants.getAuthor).subscribe(
      data => {
        this.authors = data['data'];
    },
    error => {
      this.error = true;
      this.errorMessage = JSON.stringify(error['message']);
    });
  }
}
