import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-vd23-dom-sanitizer',
  templateUrl: './vd23-dom-sanitizer.component.html',
  styleUrls: ['./vd23-dom-sanitizer.component.scss']
})
export class Vd23DomSanitizerComponent implements OnInit {

  htmlCode = `<button type="button" onclick="alert('Clicked!')">Click!</button>`;

  sanitizedHtmlCode!: SafeHtml;

  constructor(private sanitizedSvc: DomSanitizer) { }

  ngOnInit(): void {
    this.sanitizedHtmlCode = this.sanitizedSvc.bypassSecurityTrustHtml(this.htmlCode);
  }

}

