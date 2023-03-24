import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  serverElements = [
    {type: 'server', name: 'Testserver 1', content: 'Testserver 1 content...'}
  ];

  onClicked({name, index}) {
    this.serverElements[index].name = name;
  }

  onClickDestroy() {
    this.serverElements.splice(0, 1);
  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }

  //<---Assignment--->
  // counter: number = 0;

  // getIncrementedNumber({counter}: {counter: number}) {
  //   this.counter = counter;
  // }

  constructor() {
    
  }

  ngOnInit(): void {
    
  }
}
