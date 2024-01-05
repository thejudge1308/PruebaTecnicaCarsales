import { NgModule, isDevMode } from "@angular/core";
import {
  BrowserModule,
  provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { FeatureMainReducer } from "./main/uc/state/main.state";
import { EffectsModule } from "@ngrx/effects";
import { EpisodesEffects } from "./main/uc/state/effects/episodes.effects";
import { SharedModule } from "./shared/shared.module";
import { EpisodeEffects } from "./main/uc/state/effects/episode.effects";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot(FeatureMainReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([EpisodesEffects, EpisodeEffects]),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
