import { Component,  OnInit } from '@angular/core';
import { timestamp } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { UrlConstants } from '../config/constants';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books = [];
  errorMessage = '';
  error = false;
  currentType = 'name';
  // @ViewChild('type', {static: true}) type: ElementRef;
  constructor(private dataService: ConfigService) { }

  ngOnInit(): void {
    this.dataService.createGetRequest(UrlConstants.getBooks).subscribe(
        data => {
          this.books = data['data'];
      },
      error => {
        this.error = true;
        this.errorMessage = JSON.stringify(error['message']);
      });
    }

    onKeyUpEvent(event): void{
      this.books = [];
      const queryString = '?type=' + this.currentType + '&value=' + event.target.value;
      console.log(UrlConstants.getBooks + queryString);
      this.dataService.createGetRequest(UrlConstants.getBooks + queryString).subscribe(
        data => {
          this.books = data['data'];
      },
      error => {
        this.error = true;
        this.errorMessage = JSON.stringify(error['message']);
      });
    }
    onOptionsSelected(type){
      this.currentType =  type.target.value;
 }

}
