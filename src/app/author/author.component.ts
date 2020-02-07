import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from 'ngx-jsonapi';
import { AuthorsService, Author } from '../servcies/authors.service';
import { BooksService } from '../servcies/books.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  public author: Author;
  public relatedbooks: Array<Resource>;

  public constructor(
      protected authorsService: AuthorsService,
      protected booksService: BooksService,
      private route: ActivatedRoute
  ) {
      route.params.subscribe(({ id }) => {
          authorsService.get(id, { include: ['books'], ttl: 100 })
          .subscribe(
              author => {
                  this.author = author;
              },
              error => console.error('Could not load author.', error)
          );
      });
  }
}
