import * as Quill from 'quill';


import { AfterViewInit, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
    const container = document.getElementById('editor');
    const editor = new Quill(container,
      { theme: 'snow' }
    );
  }

  goHome() {
    this.router.navigate(['home']);
  }

  ngOnDestroy() {
  }
}
