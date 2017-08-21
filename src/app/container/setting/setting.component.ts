import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideInOutAnimation } from '../../component/animation/slide.animation';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  animations: [slideInOutAnimation],
  host: {
    '[@slideInOutAnimation]': ''
  }
})

export class SettingComponent implements OnInit {
  @HostListener('click', ['$event'])
  onWindowClick(event) {
    this.router.navigate(['news']);
  }

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
