import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { EditorRouter } from './editor.routes';

@NgModule({
  imports: [
    CommonModule,
    EditorRouter
  ],
  declarations: [
    EditorComponent
  ]
})
export class EditorModule {
}
