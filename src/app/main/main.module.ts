import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./ui/main/main.component";
import { HomeComponent } from "./ui/pages/home/home.component";
import { RouterModule } from "@angular/router";
import { routes } from "./main.routing";
import { HeaderComponent } from "./ui/components/header/header.component";
import { SharedModule } from "../shared/shared.module";
import { ApiService } from "./services/api/api.service";
import { StoreModule } from "@ngrx/store";
import { FeatureMainReducer } from "./uc/state/main.state";
import { InfoTableComponent } from './ui/components/info-table/info-table.component';
import { LoadingComponent } from './ui/components/loading/loading.component';

@NgModule({
  declarations: [MainComponent, HomeComponent, HeaderComponent, InfoTableComponent, LoadingComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("MainFeature", FeatureMainReducer),
  ],
  providers: [ApiService],
})
export class MainModule {}
