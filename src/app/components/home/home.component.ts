import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ])
    ]),
    trigger('shakeX', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 }))
      ]),
      transition('* => shake', [
        animate('5s', keyframes([
          style({ transform: 'translateX(0)', offset: 0 }),
          style({ transform: 'translateX(-10px)', offset: 0.25 }),
          style({ transform: 'translateX(10px)', offset: 0.5 }),
          style({ transform: 'translateX(-10px)', offset: 0.75 }),
          style({ transform: 'translateX(0)', offset: 1.0 })
        ]))
      ])
    ]),
    trigger('shakeY', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 }))
      ]),
      transition('* => shake', [
        animate('1s', keyframes([
          style({ transform: 'translateY(0)', offset: 0 }),
          style({ transform: 'translateY(-10px)', offset: 0.25 }),
          style({ transform: 'translateY(10px)', offset: 0.5 }),
          style({ transform: 'translateY(-10px)', offset: 0.75 }),
          style({ transform: 'translateY(0)', offset: 1.0 })
        ]))
      ])
    ]),
 trigger('fadeInDown', [
  state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
  transition(':enter', [
    animate('1.5s cubic-bezier(0.25, 0.8, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
  ]),
  transition(':leave', [
    animate('1s ease-out', style({ opacity: 0, transform: 'translateY(-100%)' }))
  ])
])
  ]
})
export class HomeComponent {
  image1:string='../../../assets/AdobeStock_220637252-scaled.jpeg';
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
