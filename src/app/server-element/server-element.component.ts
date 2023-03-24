import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, Output, EventEmitter, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @Input() index: string;
  @Output() serverClick = new EventEmitter<{name: string, index: string}>();
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  onServerClick(serverIndex: string) {
    this.serverClick.emit({name: "Changed!!", index: serverIndex});
  }
  
  constructor() { 
    console.log("[server-element.component.ts] constructor called...");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called...");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("[server-element.component.ts] ngOnInit called...");
    console.log(this.header.nativeElement.textContent);
  }

  ngDoCheck(): void {
      console.log('[server-element.component.ts] ngDoCheck called...');
  }

  ngAfterContentInit(): void {
      console.log("[server-element.component.ts] ngAfterContentInit called...");
      console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log("[server-element.component.ts] ngAfterContentChecked called...");
  }

  ngAfterViewInit(): void {
    console.log("[server-element.component.ts] ngAfterViewInit called...");
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log("[server-element.component.ts] ngAfterViewChecked called...");
  }

  ngOnDestroy(): void {
    console.log("[server-element.component.ts] ngOnDestroy called...");
  }
}
