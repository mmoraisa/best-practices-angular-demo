import { Component, OnInit } from '@angular/core';

import { IBook } from "app/books/book";
import { ActivatedRoute } from "@angular/router";
import { BookService } from "app/books/book.service";

@Component({
    selector: 'lib-book-details',
    templateUrl: 'book-details.component.html',
    styleUrls: ['book-details.component.css']
})
export class BookDetailsComponent implements OnInit{
    book: IBook;

    constructor(private __route: ActivatedRoute, private __bookService: BookService){}

    ngOnInit(): void{
        let id = +this.__route.snapshot.params['id'];
        this.book = this.__bookService.getBook(id);
    }

    saveBook(): void{
        if(this.__bookService.saveBook(this.book)){
            console.log(this.book);
        }
    }
}