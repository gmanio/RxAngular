import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouter } from './home.routes';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { HackerNewsService } from '../../service/hacker-news.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRouter
  ],
  declarations: [HomeComponent, AboutComponent],
  providers: [HackerNewsService]
})
export class HomeModule {
}
