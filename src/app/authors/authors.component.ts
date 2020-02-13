import { Component, OnInit } from '@angular/core';
import { DocumentCollection } from 'ngx-jsonapi';
import { AuthorsService, Author } from '../servcies/authors.service';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../servcies/books.service'


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  public authors: DocumentCollection<Author>;
  
  public constructor(private route: ActivatedRoute, private authorsService: AuthorsService, booksService: BooksService) {
    this.getData(route, authorsService, booksService);
  }

  public getData(route: ActivatedRoute, authorsService: AuthorsService, booksService: BooksService){
    route.queryParams.subscribe(({ page }) => {
      authorsService
          .all({
              include: ['books'],
              sort: ['name'],
              page: { number: page || 1 },
              ttl: 3600
          })
          .subscribe(
              authors => {
                  this.authors = authors;
              },
              error => console.error('Could not load authors :(', error)
          );
      });
  }
}