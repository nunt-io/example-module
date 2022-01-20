import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleComponent} from "./example.component";
import {CMSService} from "@nunt/core";
import {ExampleService} from "./example.service";

@NgModule({
  declarations: [
    ExampleComponent
  ],
  exports: [
    ExampleComponent
  ],
  providers: [ExampleService],
  imports: [
    CommonModule
  ]
})
export class NuntExampleModule {
  constructor(private cmsService: CMSService) {
    cmsService.addClass('form', 'Text', ExampleComponent,
      {
        fields: [
          {name: 'test', type: 'text'},
        ]
      });
  }

  static forRoot(): ModuleWithProviders<NuntExampleModule> {
    return {
      ngModule: NuntExampleModule
    };
  }
}
