import { Injectable } from '@angular/core';
import { IAuthor } from "./author";

@Injectable()
export class AuthorService{

    getAuthors(): IAuthor[]{
        return [
            {
                id: 1,
                name: 'Carmen',
                imageUrl: 'http://lorempixel.com/128/128/people/'
            }
        ];
    }

}