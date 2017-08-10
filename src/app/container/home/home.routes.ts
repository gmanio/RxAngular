import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';

export const HomeRouter = RouterModule.forChild(
  [
    {
      path: '', children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent }
    ]
    },
  ]
)

