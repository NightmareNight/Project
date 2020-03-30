import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BooksService } from '../books-page/books.service';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css'],
})
export class BucketComponent implements OnInit {

  Books = this.service.Books;
  Price$ = this.service.getCurrentPrice();

  constructor(public service: BooksService) { }

  ngOnInit() {
  } 
}
