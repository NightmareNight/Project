import { Component, OnInit, OnChanges } from '@angular/core';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css'],
})
export class BooksPageComponent implements OnInit {

  constructor(public BooksInBucket: BooksService, ) { }

  ngOnInit() {
  }
  
  BookName = '';
  BookAuthor = '';
  BookPrice = 1;
  BookAmount = 1;

  Books = [
    {name: "НЛО", author: "Майкл Вазовски", price: 300, amount: 30},
    {name: "История моей жизни", author: "Николь Беннет", price: 600, amount: 10},
    {name: "Как я поиграл в Майнкрафт", author: "Павел Воля", price: 1000, amount: 1}
  ]

  AddBook() {
    this.Books.push({name: this.BookName, author: this.BookAuthor , price: this.BookPrice, amount: this.BookAmount});
    alert('Книга была добавлена!');
  }

  BuyBook(name) {
    let book = this.Books.find(book => book.name === name);
    if(book.amount > 0) {
      let bookInBucket = this.BooksInBucket.Books.find(book => book.name === name);
      if(bookInBucket !== undefined){
        bookInBucket.amount += 1;

        let newPrice = this.BooksInBucket.Price.getValue() + book.price
        this.BooksInBucket.Price.next(newPrice);
      }
      else{
        let NewBook = {
          name: name,
          author: book.author,
          price: book.price,
          amount: 1,
        }
        this.BooksInBucket.Books.push(NewBook)

        let newPrice = this.BooksInBucket.Price.getValue() + book.price
        this.BooksInBucket.Price.next(newPrice);
      }
      book.amount = book.amount - 1;
    }
    else{
      alert('Товара нет в наличии!')
    }
  }
}
