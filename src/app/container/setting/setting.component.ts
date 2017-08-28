import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopupService } from '../../service/popup.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})

export class SettingComponent implements OnInit, AfterViewInit {


  hoverTab(event) {
    if ( event ) {
      const elTarget = event.currentTarget;
      const elBar = this.el.nativeElement.querySelector('.animated_bg_bar');
      console.log(elTarget.offsetLeft);
      console.log(elTarget.offsetWidth);
      console.log(elBar);

      elBar.style.left = `${elTarget.offsetLeft}px`;
      elBar.style.width = `${elTarget.offsetWidth}px`;
      elTarget.classList.add('on');
    }

    if ( event.type === 'mouseleave' ) {
      const elTarget = event.currentTarget;

      elTarget.classList.remove('on');
    }
  }

  @HostListener('click', ['$event'])
  onWindowClick(event) {
    this.router.navigate(['news']);
  }

  constructor(private router: Router,
              private el: ElementRef) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit() {
  }
}
