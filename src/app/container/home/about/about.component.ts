import { AfterViewInit, ChangeDetectorRef, Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs/observable/from';
import { Observable } from 'rxjs/Observable';
import { slideInOutAnimation } from '../../../component/animation/slide.animation';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [slideInOutAnimation],
  host: {
    '[@slideInOutAnimation]': '',
    '(@slideInOutAnimation.start)': 'animationStart($event)',
    '(@slideInOutAnimation.done)': 'animationDone($event)'
  }
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
    // this.results = this.http.get('https://node-hnapi.herokuapp.com/news?page=1');
    // this.cd.detectChanges();
    // Observable.timer(3000).subscribe(() => {
    //   this.results = this.http.get('https://node-hnapi.herokuapp.com/news?page=1');
    //   this.cd.detectChanges();
    // });
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
