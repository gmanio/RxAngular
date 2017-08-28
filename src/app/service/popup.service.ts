import { ApplicationRef, ComponentFactoryResolver, Injectable } from '@angular/core';
import { PopupGreetingComponent } from '../container/popup/popup-greeting/popup-greeting.component';

@Injectable()
export class PopupService {
  viewRef: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef) {
    this.appRef.isStable
      .subscribe((isStable: boolean) => {
        if ( isStable ) {
          this.viewRef = this.appRef.components[0].instance.viewContainerRef;

          this.loadComponent();
        }
      });
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PopupGreetingComponent);
    const viewContianerRef = this.viewRef;

    const componentRef = this.viewRef.createComponent(componentFactory);

  }
}
