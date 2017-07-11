import { Component, OnInit, Input } from '@angular/core';

import { IBook } from './book';
import { BookService } from "app/books/book.service";

@Component({
    selector: 'lib-book-thumb',
    templateUrl: '../books/book-thumb.component.html',
    styleUrls: ['book-thumb.component.css']
})
export class BookThumbComponent implements OnInit{
    books: IBook[];
    @Input() filterBy: string;
    @Input() id: number;

    constructor(private __bookService: BookService){}

    ngOnInit(): void{
        switch(this.filterBy){
            case 'author':
                this.books = this.__bookService.getBooksByAuthor(this.id);
                break;
            case 'category':
                this.books = this.__bookService.getBooksByCategory(this.id);
                break;
        }
    }
}