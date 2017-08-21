import { RouterModule } from '@angular/router';

export const RootRouter = RouterModule.forRoot(
  [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './container/home/home.module#HomeModule' },
    { path: 'setting', loadChildren: './container/setting/setting.module#SettingModule' },
    { path: 'news', loadChildren: './container/news/news.module#NewsModule' },
    { path: 'editor', loadChildren: './container/editor/editor.module#EditorModule' }
  ],

  /**
   *  Some browsers does not support HTML5 pushstate.
   */
  {
    useHash: true
  }
)

