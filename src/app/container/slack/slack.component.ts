import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as slack from 'slack';
import * as Swiper from './swiper.min.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slack',
  templateUrl: './slack.component.html',
  styleUrls: ['/slack.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SlackComponent implements OnInit, AfterViewInit {
  bot: any;
  public TOKEN = 'xoxp-231235385382-229812384465-231439914343-0fe39d92f2913e8ff964d000570cf60f';

  constructor(private router: Router) {
    this.bot = slack.rtm.client();

    this.bot.started(function (payload) {
      console.log('payload from rtm.start', payload);
    });
    console.log(this.bot);

    this.bot.listen({ token: this.TOKEN });
    console.log(Swiper);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: '.swiper-pagination',

      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',

    })
  }

  goSetting() {
    this.router.navigate(['setting']);
  }
}
