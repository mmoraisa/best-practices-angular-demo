import { Component, OnInit } from '@angular/core';
import { ICategory } from "app/categories/category";
import { CategoryService } from "app/categories/category.service";

@Component({
    selector: '',
    templateUrl: 'category-list.component.html'
})
export class CategoryListComponent implements OnInit{
    categories: ICategory[];

    constructor(private __categoryService: CategoryService){}

    ngOnInit(): void {
        this.categories = this.__categoryService.getCategories();
    }
}