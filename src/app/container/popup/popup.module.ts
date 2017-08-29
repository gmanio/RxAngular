import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupGreetingComponent } from './popup-greeting/popup-greeting.component';
import { PopupService } from '../../service/popup.service';
import { PopupContainerComponent } from './popup-container/popup-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PopupGreetingComponent
  ],
  entryComponents: [
    PopupGreetingComponent
  ],
  providers: [PopupService]
})
export class PopupModule {
}
