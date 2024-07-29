import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { NgFor } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbRatingModule,NgbModule,HttpClientModule,NgbModule,HeaderComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;
  rat: any = 1;
  // ariaValueText!: string;
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    this.http
      .get('http://localhost:3000/trending')
      .subscribe((movies) => {
        this.trendingMovies = movies;
      });
  }

  getTheatreMovies() {
    this.http
      .get('http://localhost:3000/theatre')
      .subscribe((movies) => {
        this.theatreMovies = movies;
      });
  }

  getPopularMovies() {
    this.http.get('http://localhost:3000/popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    console.log(this.popularMovies);
    

  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }
}
