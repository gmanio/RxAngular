import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRouter } from './news.routes';
import { HackerNewsService } from '../../service/hacker-news.service';

@NgModule({
  imports: [
    CommonModule,
    NewsRouter
  ],
  declarations: [
    NewsComponent
  ],
  providers: [
    HackerNewsService
  ]
})
export class NewsModule {
}
