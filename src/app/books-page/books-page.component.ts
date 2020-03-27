import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css'],
  providers: [BooksService]
})
export class BooksPageComponent implements OnInit {

  constructor(public service: BooksService, ) { }

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
      let NewBook = {
        name: name,
        author: book.author,
        price: book.price,
        amount: 1,
      }
      this.service.Books.push(NewBook)
      console.log(this.service.Books);
    }
    else if(book.amount < 0) {
      alert('Товара нет в наличии!')
    }
   
    
    //Находит продукт по его имени 
    //let product = this.Products.find(product => product.name === name);
   // console.log(product);
    //Если количество продукта > 0
   // if(product.amount > 0) {
      // его  добавляют в корзину
     // let newProduct = {
       // name: name,
      //  price: product.price,
       // amount: 1,
     // }
     // this.productVKorzine.Products.push(newProduct)
   // }
    //else if(product.amount < 0) {
     // console.log("SSSS")
     // alert('Товар отсутствует!');
   // }

  }
}
