import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { BookListComponent } from "app/books/book-list.component";
import { AuthorListComponent } from "app/authors/author-list.component";
import { CategoryListComponent } from "app/categories/category-list.component";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AuthorListComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'authors', component: AuthorListComponent },
      // { path: 'author/:id', component: AuthorDetailComponent },
      { path: 'books', component: BookListComponent },
      // { path: 'book/:id', component: BookDetailComponent },
      { path: 'categories', component: CategoryListComponent },
      // { path: 'category/:id', component: CategoryDetailComponent },
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      // { path: '**', component: PageNotFoundComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
