import * as Quill from 'quill';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: [
    './editor.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})

export class EditorComponent implements AfterViewInit, OnDestroy {
  editor: any;

  constructor(private router: Router,
              private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    console.log('ngAfterView Editor');
    const editor = new Quill(this.el.nativeElement.querySelector('#editor'),
      { theme: 'snow' }
    );
  }

  goHome() {
    this.router.navigate(['home']);
  }

  ngOnDestroy() {
  }
}
