import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private readonly router: Router) { }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Input e Output', action: this.goInput.bind(this) },
    { label: 'Users', action: this.goUsers.bind(this) }
  ];

  private goInput() {
    this.router.navigate(['/inputOutput']);
  }

  private goUsers() {
    this.router.navigate(['/users']);
  }

}
