import { Component, OnInit } from '@angular/core';

import { IAuthor } from './author';
import { AuthorService } from "app/authors/author.service";

@Component({
    selector: 'lib-authors',
    templateUrl: 'author-list.component.html',
    styleUrls: ['author-list.component.css']
})
export class AuthorListComponent implements OnInit{
    authors: IAuthor[];

    constructor(private __authorService: AuthorService){}

    ngOnInit(): void {
        this.authors = this.__authorService.getAuthors();
    }
}