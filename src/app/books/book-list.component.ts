import { Component, OnInit } from '@angular/core';

import { IBook } from './book';
import { BookService } from "app/books/book.service";

@Component({
    selector: 'lib-books',
    templateUrl: 'book-list.component.html',
    styleUrls: ['book-list.component.css']
})
export class BookListComponent implements OnInit{
    books: IBook[];

    constructor(private _bookService: BookService){}

    ngOnInit(): void {
        this.books = this._bookService.getBooks();
    }
}