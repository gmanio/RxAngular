import { ApplicationRef, ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { PopupGreetingComponent } from '../container/popup/popup-greeting/popup-greeting.component';

@Injectable()
export class PopupService {
  viewRef: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef) {
    this.appRef.isStable
      .subscribe((isStable: boolean) => {
        if ( isStable ) {
          this.loadComponent();
        }
      });
  }

  loadComponent() {
    this.viewRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PopupGreetingComponent);
    const componentRef = this.viewRef.createComponent(componentFactory);
  }
}
