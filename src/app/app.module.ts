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
import { BookDetailsComponent } from "app/books/book-details.component";
import { AuthorDetailGuard } from "app/authors/author-guard.service";
import { BookDetailGuard } from "app/books/book-guard.service";
import { CategoryDetailGuard } from "app/categories/category-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailsComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    BookThumbComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'authors',
        component: AuthorListComponent
      },
      {
        path: 'author/:id',
        canActivate: [ AuthorDetailGuard ],
        component: AuthorDetailsComponent
      },
      {
        path: 'books',
        component: BookListComponent
      },
      {
        path: 'book/:id',
        canActivate: [ BookDetailGuard ],
        component: BookDetailsComponent
      },
      {
        path: 'categories',
        component: CategoryListComponent
      },
      {
        path: 'category/:id',
        canActivate: [ CategoryDetailGuard ],
        component: CategoryDetailsComponent
      },
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
      },
      // { path: '**', component: PageNotFoundComponent },
    ]),
    FormsModule
  ],
  providers: [ AuthorDetailGuard, BookDetailGuard, CategoryDetailGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
