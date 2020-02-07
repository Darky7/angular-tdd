import { Injectable } from '@angular/core';
import { Autoregister, Service, Resource, DocumentCollection } from 'ngx-jsonapi';
import { Book } from '../servcies/books.service'

export class Author extends Resource {
    public attributes = {
        name: 'default name',
        birthplace: '',
        date_of_birth: '',
        date_of_death: ''
    };

    public relationships = {
        books: new DocumentCollection<Book>()
    };

}

@Injectable({
    providedIn: 'root'
  })
export class AuthorsService extends Service<Author> {
    public resource = Author;
    public type = 'authors';
}
