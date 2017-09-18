import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RootRouter } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { PopupModule } from './container/popup/popup.module';
import { CommonModule } from '@angular/common';
import { PopupContainerComponent } from './container/popup/popup-container/popup-container.component';
import { HomeModule } from './container/home/home.module';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseService } from './router-reuse';

@NgModule({
  declarations: [
    AppComponent,
    PopupContainerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    HomeModule,
    PopupModule,
    RootRouter,
    StoreModule.forRoot({}),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseService }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
