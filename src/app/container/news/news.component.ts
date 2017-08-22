import * as ScrollReveal from '../../../assets/vendor/scrollreveal/scrollreveal.min.js';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HackerNewsService } from '../../service/hacker-news.service';
import { Observable } from 'rxjs/Observable';

export interface FeedItem {
  id: number;
  title: string;
  points?: number | null;
  user?: string | null;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit, AfterViewInit {
  public responseData: Observable<FeedItem>;
  public sr: any;

  constructor(private router: Router,
              private apiService: HackerNewsService) {
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
    this.router.navigate(['editor']);
  }

  fetchNews() {
    this.responseData = this.apiService.fetchNEWS();
  }

  fetchJobs() {
    this.responseData = this.apiService.fetchJOBS();
  }
}

