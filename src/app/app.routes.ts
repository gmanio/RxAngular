import { RouterModule } from '@angular/router';

export const RootRouter = RouterModule.forRoot(
  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './container/home/home.module#HomeModule', data: { preload: true } },
    { path: 'setting', loadChildren: './container/setting/setting.module#SettingModule' },
    { path: 'news', loadChildren: './container/news/news.module#NewsModule' },
    { path: 'editor', loadChildren: './container/editor/editor.module#EditorModule' },
    { path: 'slack', loadChildren: './container/slack/slack.module#SlackModule' }
  ],

  /**
   *  Some browsers does not support HTML5 pushstate.
   */
  {
    useHash: true
  }
)

