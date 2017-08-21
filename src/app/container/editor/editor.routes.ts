import { RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';

export const EditorRouter = RouterModule.forChild(
  [
    {
      path: '', children: [
      { path: '', component: EditorComponent }
    ]
    },
  ]
)

