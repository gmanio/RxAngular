import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit, AfterViewInit {
  public results: Observable<any>;

  @HostListener('click', ['$event'])
  onWindowClick(event) {
    this.router.navigate(['setting']);
  }

  constructor(private router: Router,
              private http: HttpClient,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  animationStart($event) {
    if ( $event.fromState === 'void' ) {
      console.log('animationStartHome>>ABOUT');
    }
  }

  animationDone($event) {
    console.log('animationDoneHome>>ABOUT');
    console.log($event.fromState);

    if ( $event.fromState === 'void' ) {

    }
  }
}
