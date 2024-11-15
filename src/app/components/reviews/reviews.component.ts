import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
  animations:[trigger('backInRight', [
    state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
    transition(':enter', [
      animate('1s ease-in', style({ opacity: 1, transform: 'translateX(0)' }))
    ]),
    transition(':leave', [
      animate('1s ease-out', style({ opacity: 0, transform: 'translateX(100%)' }))
    ])
  ])
]
})
export class ReviewsComponent {
  image2:string='../../../assets/client-1.png';
  image3:string='../../../assets/client-2.png';
  image4:string='../../../assets/client-3.png';
  image5:string='../../../assets/client-4.png';
  image6:string='../../../assets/client-5.png';
  image7:string='../../../assets/client-6.png';
  image8:string='../../../assets/client-7.png';

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
