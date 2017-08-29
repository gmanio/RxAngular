import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RootRouter } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { PopupModule } from './container/popup/popup.module';
import { CommonModule } from '@angular/common';
import { PopupContainerComponent } from './container/popup/popup-container/popup-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    PopupModule,
    RootRouter,
    StoreModule.forRoot({}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
