import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
