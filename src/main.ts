import {bootstrapApplication} from "@angular/platform-browser";
import {NgxsModule} from "@ngxs/store";
import {importProvidersFrom} from "@angular/core";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {BreedState} from "./app/store/state/breed.state";

import {AppComponent} from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      NgxsModule.forRoot([BreedState]),
      NgxsReduxDevtoolsPluginModule.forRoot(),
      BrowserAnimationsModule
      )
  ]
})
  .catch(err => console.error(err));
