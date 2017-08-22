import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
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
