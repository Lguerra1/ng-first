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
  showPassword: boolean = false;
  servers = ['Test Server', 'Test Server 2'];
  logs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    if (this.serverName) {
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
    }
  }

  onShowPassword() {
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());

    this.showPassword === false
      ? (this.showPassword = true)
      : (this.showPassword = false);
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
