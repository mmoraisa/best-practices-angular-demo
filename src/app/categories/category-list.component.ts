import { Component, OnInit } from '@angular/core';
import { ICategory } from "app/categories/category";
import { CategoryService } from "app/categories/category.service";

@Component({
    selector: 'lib-categories',
    templateUrl: 'category-list.component.html',
    styleUrls: ['category-list.component.css']
})
export class CategoryListComponent implements OnInit{
    categories: ICategory[];

    constructor(private __categoryService: CategoryService){}

    editCategory(categoryId: number): void{
        debugger;
    }

    ngOnInit(): void {
        this.categories = this.__categoryService.getCategories();
    }
}