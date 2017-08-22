import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})

export class SettingComponent implements OnInit {
  hoverTab(event) {
    if ( event ) {
      const elTarget = event.currentTarget;
      console.log(elTarget);
      elTarget.classList.add('on');
    }

    if ( event.type === 'mouseleave' ) {
      const elTarget = event.currentTarget;

      elTarget.classList.remove('on');
    }
  }

  // @HostListener('click', ['$event'])
  // onWindowClick(event) {
  //   this.router.navigate(['news']);
  // }

  constructor(private router: Router,
              private el: ElementRef) {
  }

  ngOnInit() {
  }
}
