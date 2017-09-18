import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as slack from 'slack';
import * as Swiper from './swiper.min.js';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-slack',
  templateUrl: './slack.component.html',
  styleUrls: ['/slack.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SlackComponent implements OnInit, AfterViewInit {
  bot: any;
  public TOKEN = 'xoxp-231235385382-229812384465-231439914343-0fe39d92f2913e8ff964d000570cf60f';

  constructor(private router: Router,
              private http: HttpClient) {
    // this.bot = slack.rtm.client();
    //
    // this.bot.started(function (payload) {
    //   console.log('payload from rtm.start', payload);
    // });

    // this.bot.hello(message => {
    //   console.log(`Got a message: ${message}`)
    //   this.bot.close();
    // })
    //
    // this.bot.listen({ token: this.TOKEN });
    // console.log(Swiper);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');

    const body = {
        text: 'workdisssssnf'
    }

    this.http.post('/services/T6T6XBBB8/B6T85K6ES/szHBRnk2wdECs0NDaWc07Eou', body, { headers: headers })
      .subscribe((res) => {
      })
    // const params = new HttpParams();
    // params.set('stype', 'Q');
    // params.set('type', 'S');
    //
    // this.http.get('/xml/xmlallpanel.daum?stype=Q&type=S')
    //   .subscribe((res) => {
    //     // debugger;
    //   });

    const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: '.swiper-pagination',

      // Navigation arrows
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    });
  }

  goSetting() {
    this.router.navigate(['setting']);
  }
}
