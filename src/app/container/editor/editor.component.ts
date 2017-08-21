import { AfterViewInit, Component, ElementRef, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import * as Quill from 'quill';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: [
    './editor.component.css',
    './quill.snow.css'
  ],
  encapsulation: ViewEncapsulation.None
})

export class EditorComponent implements AfterViewInit, OnDestroy {
  editor: any;

  constructor(private router: Router,
              private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    // const container = document.getElementById('editor');
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
