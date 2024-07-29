import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
})
export class StarRatingComponent implements OnInit {
  @Input() rating: any;
  @Input()
  isReadOnly: boolean = false;
  constructor() {}
  ngOnInit(): void {}

  ariaValueText(current: number, max: number): string {
    return `${current} out of ${max}`;
  }
}
