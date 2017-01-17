import { NgModule } from '@angular/core';

import { AngularModuleStarterService } from './angular-module-starter.service';
import { AngularModuleStarterComponent } from './angular-module-starter.component';

export function asyncLocalStorageFactory() {
  return new AngularModuleStarterService();
}

@NgModule({
  declarations: [
    AngularModuleStarterComponent,
  ],
  exports: [
    AngularModuleStarterComponent,
  ],
  providers: [
    {
      provide: AngularModuleStarterService,
      useFactory: asyncLocalStorageFactory
    }
  ]
})
export class AngularModuleStarterModule {
}
