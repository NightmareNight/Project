import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books-page/books.service';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css'],
})
export class BucketComponent implements OnInit {

  constructor(public service: BooksService) { }

  Books = this.service.Books;

  ngOnInit() {
  }

 
}
