import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';


const routes: Routes = [
  {
    path: 'authors', 
    component: AuthorsComponent
  },
   {
     path: 'authors/:id', 
    component: AuthorComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
