import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

@Injectable()
export class CustomReuseService implements RouteReuseStrategy {
  private saveRouter: string[] = ['home'];
  private handlers: { [key: string]: DetachedRouteHandle } = {};

  constructor() {

  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    const routerUrl = route.url.join('/') || route.parent.url.join('/');

    for ( const url  of this.saveRouter ) {
      if ( url === routerUrl ) {
        this.handlers[route.url.join('/') || route.parent.url.join('/')] = handle;
      }
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this.handlers[route.url.join('/') || route.parent.url.join('/')];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return this.handlers[route.url.join('/') || route.parent.url.join('/')];
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }

}
