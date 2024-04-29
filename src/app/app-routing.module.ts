import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' }, 
{ path: 'home', component: HomeComponent },
{ path: 'movie', component: ListMovieComponent },
{ path: 'movie/edit/:id', component: FormComponent }, 
{ path: 'movie/new', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
