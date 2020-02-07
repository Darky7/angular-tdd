import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AuthorComponent } from './authors/author.component'
import { AuthorsComponent } from './authors/authors.component';
import { NgxJsonapiModule } from 'ngx-jsonapi';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    //AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxJsonapiModule.forRoot({
      url: '//jsonapiplayground.reyesoft.com/v2/'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
