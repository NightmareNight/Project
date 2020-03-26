import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css'],
  providers: [BooksService]
})
export class BooksPageComponent implements OnInit {

  constructor(private service: BooksService, ) { }

  ngOnInit() {
  }
  
  BookName = '';
  BookAuthor = '';
  BookPrice = 1;

  Books = [
    {name: "НЛО", author: "Майкл Вазовски", price: 200},
    {name: "История моей жизни", author: "Николь Беннет", price: 200},
    {name: "Как я поиграл в Майнкрафт", author: "Павел Воля", price: 200}
  ]

  AddBook() {
    this.Books.push({name: this.BookName, author: this.BookAuthor , price: this.BookPrice});
  }
}
