import { RouterModule } from '@angular/router';
import { SlackComponent } from './slack.component';

export const SlackRouter = RouterModule.forChild(
  [
    {
      path: '', children: [
      { path: '', component: SlackComponent }
    ]
    },
  ]
)

