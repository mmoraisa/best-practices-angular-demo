import { Component } from '@angular/core';
import { BookService } from "app/books/book.service";
import { AuthorService } from "app/authors/author.service";
import { CategoryService } from "app/categories/category.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService, AuthorService, CategoryService]
})
export class AppComponent {
  title = 'app';
}
