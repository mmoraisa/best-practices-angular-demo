import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { BookListComponent } from "app/books/book-list.component";
import { AuthorListComponent } from "app/authors/author-list.component";
import { CategoryListComponent } from "app/categories/category-list.component";
import { CategoryDetailsComponent } from "app/categories/category-details.component";
import { BookThumbComponent } from "app/books/book-thumb.component";
import { AuthorDetailsComponent } from "app/authors/author-details.component";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    BookThumbComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'authors', component: AuthorListComponent },
      { path: 'author/:id', component: AuthorDetailsComponent },
      { path: 'books', component: BookListComponent },
      // { path: 'book/:id', component: BookDetailComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'category/:id', component: CategoryDetailsComponent },
      { path: '', redirectTo: 'books', pathMatch: 'full' },
      // { path: '**', component: PageNotFoundComponent },
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
