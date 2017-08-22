import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsRouter } from './news.routes';
import { HackerNewsService } from '../../service/hacker-news.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
