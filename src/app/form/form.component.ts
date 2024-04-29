import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.interface';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  model: Movie = {
    title: '',
    director: '',
    releaseDate: '',
  };
  ngOnInit(): void {
    this.route?.params?.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.get(this.id);
      }
    });
  }
  id: number | undefined = undefined;
  constructor(
    private Service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get(id: number) {
    this.Service.GetById(id).subscribe({
      next: (response: Movie) => {
        this.model = response;
      },
      error: (error) => console.error(error),
    });
  }

  save(): void {
    if (this.model.id) {
      this.Service.Update(this.model).subscribe({
        next: () => {
          this.router.navigateByUrl('/movie');
        },
        error: () => {
          alert('Failed to update the movie');
        }
      });
    } else {
      this.Service.Create(this.model).subscribe({
        next: () => {
          this.router.navigateByUrl('/movie');
        },
        error: () => {
          alert('Failed to create the movie');
        }
      });
    }
  }
}
