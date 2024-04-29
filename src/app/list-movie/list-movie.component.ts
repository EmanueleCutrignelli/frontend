import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import {ServiceService } from '../services/service.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: []
})
export class ListMovieComponent implements OnInit {
  //movies: any=[]
  constructor(private Service: ServiceService, private router: Router){}

  items: any = []

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.Service.GetAll().subscribe({
      next: (response) => {
        this.items = response;
        console.log(response);
      },
      error: (error) => console.error(error)
    })
  }

  create(){
    this.router.navigateByUrl("/movie/new");
  }

  delete(id: number){
    this.Service.Delete(id).subscribe({complete: () => this.getAll() });
    
  }

  update(id:number){
    this.router.navigate(['/movie/edit',id]);
  }
}
