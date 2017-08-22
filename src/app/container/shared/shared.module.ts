import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../../component/list/list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent
  ],
  declarations: [
    ListComponent
  ]
})
export class SharedModule {
}
