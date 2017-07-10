import { Component, OnInit } from '@angular/core';

import { IBook } from './book';

@Component({
    selector: 'lib-books',
    templateUrl: 'book-list.component.html'
})
export class BookListComponent implements OnInit{
    books: IBook[];

    ngOnInit(): void {
        this.books = [
            {
                id: 1,
                name: 'Book 1',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae augue ut est convallis congue. Curabitur vitae eleifend ipsum, at elementum tortor. Quisque congue mattis lacus, nec tristique libero iaculis sit amet. Morbi varius mollis risus, in malesuada erat bibendum at. Morbi vestibulum hendrerit dui, sit amet sodales dui ullamcorper.',
                author: {
                    id: 1,
                    name: 'Carmen',
                    imageUrl: 'http://lorempixel.com/128/128/people/'
                },
                category: {
                    id: 1,
                    name: 'Drama'
                }
            }
        ];
    }
}