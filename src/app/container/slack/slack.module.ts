import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlackComponent } from './slack.component';
import { SlackRouter } from './slack.routes';

@NgModule({
  imports: [
    CommonModule,
    SlackRouter
  ],
  declarations: [
    SlackComponent
  ]
})
export class SlackModule {
}
