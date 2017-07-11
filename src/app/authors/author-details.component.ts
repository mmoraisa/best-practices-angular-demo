import { Component, OnInit } from "@angular/core";

import { IAuthor } from "app/authors/author";
import { IBook } from "app/books/book";
import { BookService } from "app/books/book.service";
import { ActivatedRoute } from "@angular/router";
import { AuthorService } from "app/authors/author.service";

@Component({
    selector: 'lib-author-details',
    templateUrl: 'author-details.component.html',
    styleUrls: ['author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit{
    author: IAuthor;
    books: IBook[];

    constructor(private __route: ActivatedRoute, private __authorService: AuthorService, private __bookService: BookService){}

    ngOnInit(): void{
        let id = +this.__route.snapshot.params['id'];
        this.author = this.__authorService.getAuthor(id);
        this.books = this.__bookService.getBooksByAuthor(this.author.id);
    }

    saveAuthor(){
        if(this.__authorService.saveAuthor(this.author)){
            console.log(this.author);
        }
    }
}