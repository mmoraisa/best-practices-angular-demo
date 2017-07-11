import { Injectable } from '@angular/core';
import { IAuthor } from "./author";

@Injectable()
export class AuthorService{

    getAuthor(id: number): IAuthor{
        return {
            id: 1,
            name: 'Carmen',
            imageUrl: 'http://lorempixel.com/128/128/people/'
        };
    }

    getAuthors(): IAuthor[]{
        return [
            {
                id: 1,
                name: 'Carmen',
                imageUrl: 'http://lorempixel.com/128/128/people/'
            }
        ];
    }

    saveAuthor(author: IAuthor): boolean{
        return true;
    }

}