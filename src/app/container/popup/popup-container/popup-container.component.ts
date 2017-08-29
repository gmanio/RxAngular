import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { PopupService } from '../../../service/popup.service';

@Component({
  selector: 'app-popup-container',
  templateUrl: './popup-container.component.html',
  styleUrls: ['./popup-container.component.css']
})
export class PopupContainerComponent implements OnInit {

  constructor(private popupService: PopupService,
              private viewContainerRef: ViewContainerRef) {
    this.popupService.viewRef = this.viewContainerRef;
  }

  ngOnInit() {
  }
}
