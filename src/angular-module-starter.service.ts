import { Injectable } from '@angular/core';

@Injectable()
export class AngularModuleStarterService {

  constructor(
  ) {
    console.log('AngularModuleStarterService constructor')
  }

  getMessage() {
    return 'Hello from the Service!'
  }
}
