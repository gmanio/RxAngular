import * as ScrollReveal from '../../../assets/vendor/scrollreveal/scrollreveal.min.js';
import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../animation/slide.animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  animations: [slideInOutAnimation],
  host: {
    '[@slideInOutAnimation]': ''
  }
})

export class NewsComponent implements OnInit, AfterViewInit {
  public sr: any;

  constructor(private router: Router) {
    this.sr = ScrollReveal({
      reset: true,
      duration: 2000,
      scale: 1,
      beforeReveal: (domEl) => {
        console.log('before');
      },
      afterReveal: (domEl) => {
        console.log('after');
      }
    });
  }

  ngOnInit() {
    console.log(this.sr);
  }

  ngAfterViewInit(): void {
    this.sr.reveal('.article', { origin: 'bottom', opacity: 0 });
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
