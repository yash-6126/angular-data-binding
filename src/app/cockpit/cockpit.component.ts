import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContent') serverContentInput: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
    // console.log(this.serverContentInput);
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({blueprintName: nameInput.value, blueprintContent: this.serverContentInput.nativeElement.value});
  }

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }
}
