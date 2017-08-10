import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideInOutAnimation } from '../animation/slide.animation';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [slideInOutAnimation],
  host: {
    '[@slideInOutAnimation]': '',
    '(@slideInOutAnimation.done)': 'animationDone($event)'
  }
})

export class HomeComponent implements AfterViewInit {

  @HostListener('click', ['$event'])
  onWindowClick(event) {
    this.router.navigate(['home/about']);
  }

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  animationDone($event) {
    if ( $event.fromState === 'void' ) {
      console.log('animationDoneHome');
    }
  }
}
