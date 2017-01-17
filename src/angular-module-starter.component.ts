import { Component } from '@angular/core';
import { AngularModuleStarterService } from './angular-module-starter.service'

@Component({
  selector: 'angular-module-starter',
  template: `
        <h1>{{message}}</h1>
    `
})
export class AngularModuleStarterComponent {

  public message: string;

  constructor(
    private service: AngularModuleStarterService
  ) {
    this.message = this.service.getMessage()
  }

}
