import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = '';
  serverCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    if (this.serverName) {
      this.serverCreated = true;
      this.serverCreationStatus =
        `Server was created! Name is ${this.serverName}`;
    }
  }
  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
