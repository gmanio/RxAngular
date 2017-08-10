import { RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';

export const SettingRouter = RouterModule.forChild(
  [
    {
      path: '', children: [
      { path: '', component: SettingComponent }
    ]
    },
  ]
)

