import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { PopupService } from './service/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
  title = 'app';

  constructor(private popup: PopupService) {
  }

  ngAfterViewInit(): void {
  }
}
