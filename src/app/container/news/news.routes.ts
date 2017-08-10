import { RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';

export const NewsRouter = RouterModule.forChild(
  [
    {
      path: '', children: [
      { path: '', component: NewsComponent }
    ]
    },
  ]
)

