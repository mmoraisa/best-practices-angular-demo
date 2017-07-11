import { Injectable } from '@angular/core';

import { IBook } from './book';

@Injectable()
export class BookService{

    getBook(id: number): IBook {
        return {
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
        };
    }

    getBooks(): IBook[] {
        return [
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

    getBooksByAuthor(id: number): IBook[] {
        return [
            {
                id: 2,
                name: 'Book 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae augue ut est convallis congue. Curabitur vitae eleifend ipsum, at elementum tortor. Quisque congue mattis lacus, nec tristique libero iaculis sit amet. Morbi varius mollis risus, in malesuada erat bibendum at. Morbi vestibulum hendrerit dui, sit amet sodales dui ullamcorper.',
                author: {
                    id: 3,
                    name: 'Murillo',
                    imageUrl: 'http://lorempixel.com/128/128/people/'
                },
                category: {
                    id: 1,
                    name: 'Drama'
                }
            },
            {
                id: 5,
                name: 'Book 5',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae augue ut est convallis congue. Curabitur vitae eleifend ipsum, at elementum tortor. Quisque congue mattis lacus, nec tristique libero iaculis sit amet. Morbi varius mollis risus, in malesuada erat bibendum at. Morbi vestibulum hendrerit dui, sit amet sodales dui ullamcorper.',
                author: {
                    id: 4,
                    name: 'Carla',
                    imageUrl: 'http://lorempixel.com/128/128/people/'
                },
                category: {
                    id: 1,
                    name: 'Drama'
                }
            }
        ];
    }

    getBooksByCategory(id: number): IBook[] {
        return [
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
            },
            {
                id: 2,
                name: 'Book 2',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae augue ut est convallis congue. Curabitur vitae eleifend ipsum, at elementum tortor. Quisque congue mattis lacus, nec tristique libero iaculis sit amet. Morbi varius mollis risus, in malesuada erat bibendum at. Morbi vestibulum hendrerit dui, sit amet sodales dui ullamcorper.',
                author: {
                    id: 3,
                    name: 'Murillo',
                    imageUrl: 'http://lorempixel.com/128/128/people/'
                },
                category: {
                    id: 1,
                    name: 'Drama'
                }
            },
            {
                id: 5,
                name: 'Book 5',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae augue ut est convallis congue. Curabitur vitae eleifend ipsum, at elementum tortor. Quisque congue mattis lacus, nec tristique libero iaculis sit amet. Morbi varius mollis risus, in malesuada erat bibendum at. Morbi vestibulum hendrerit dui, sit amet sodales dui ullamcorper.',
                author: {
                    id: 4,
                    name: 'Carla',
                    imageUrl: 'http://lorempixel.com/128/128/people/'
                },
                category: {
                    id: 1,
                    name: 'Drama'
                }
            },
            {
                id: 6,
                name: 'Book 6',
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
            },
            {
                id: 12,
                name: 'Book 12',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae augue ut est convallis congue. Curabitur vitae eleifend ipsum, at elementum tortor. Quisque congue mattis lacus, nec tristique libero iaculis sit amet. Morbi varius mollis risus, in malesuada erat bibendum at. Morbi vestibulum hendrerit dui, sit amet sodales dui ullamcorper.',
                author: {
                    id: 4,
                    name: 'Carla',
                    imageUrl: 'http://lorempixel.com/128/128/people/'
                },
                category: {
                    id: 1,
                    name: 'Drama'
                }
            }
        ];
    }

    saveBook(book: IBook): boolean{
        return true;
    }

}