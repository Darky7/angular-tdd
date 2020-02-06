import { Component, OnInit } from '@angular/core';
import { DocumentCollection } from 'ngx-jsonapi';
import { AuthorsService, Author } from './../authors.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  public authors: DocumentCollection<Author>;
  
  public constructor(private authorsService: AuthorsService) {
    this.getData(authorsService);
  }

  public getData(authorsService: AuthorsService){
    authorsService
          .all({
              // include: ['books', 'photos'],
          })
          .subscribe(authors => (this.authors = authors));
  }
}