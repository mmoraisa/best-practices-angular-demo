import { Component, OnInit } from '@angular/core';
import { ICategory } from "app/categories/category";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "app/categories/category.service";
import { IBook } from "../books/book";
import { BookService } from "app/books/book.service";

@Component({
    selector: 'lib-category-details',
    templateUrl: 'category-details.component.html',
    styleUrls: ['category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit{
    category: ICategory;
    books: IBook[];

    constructor(private __route: ActivatedRoute, private __categoryService: CategoryService, private __bookService: BookService){}
    
    ngOnInit(): void {
        let id = +this.__route.snapshot.params['id'];
        this.category = this.__categoryService.getCategory(id);
        this.books = this.__bookService.getBooksByCategory(id);
    }

    saveCategory(): void {
        if(this.__categoryService.saveCategory(this.category)){
            console.log(this.category);
        }
    }
}