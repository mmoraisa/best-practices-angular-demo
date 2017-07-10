import { Injectable } from '@angular/core';
import { ICategory } from "app/categories/category";

@Injectable()
export class CategoryService{

    getCategories(): ICategory[]{
        return [
            {
                id: 1,
                name: 'Drama'
            },
            {
                id: 2,
                name: 'Comedy'
            }
        ];
    }

    getCategory(id: number): ICategory{
        return {
            id: 1,
            name: 'Drama'
        };
    }

    saveCategory(category: ICategory): boolean{
        return true;
    }

}