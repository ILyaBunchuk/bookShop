
import {BookCategory, BookModel } from '../models/book.model';
import { Component } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent{  
  bookList: BookModel[] = [
    {name: "Book1", description: "Cool comedy book", price: 5, category: BookCategory.comedy, createDate: 2021, isAvailable: true,},
    {name: "Book2", description: "Horror, boooo", price: 10, category: BookCategory.horror, createDate: 2021, isAvailable: true,},
    {name: "Book3", description: "Cool comedy book", price: 3, category: BookCategory.comedy, createDate: 2021, isAvailable: false,},
    {name: "Book4", description: "Action", price: 7, category: BookCategory.action, createDate: 2021, isAvailable: true,},
  ];
}
