import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NuntExampleModule} from "../lib/public_api";
import {NuntDesignModule} from "@nunt/design";
import {NuntCmsModule, NuntCoreModule} from "@nunt/core";
import {RouterModule} from "@angular/router";
import { ShowcaseComponent } from './showcase/showcase.component';
import {routes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    NuntCoreModule.forRoot({
      host: 'https://nunt.io',
      apiUrl: 'https://nunt.io'
    }),
    NuntDesignModule.forRoot(),
    NuntExampleModule.forRoot(),
    NuntCmsModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
