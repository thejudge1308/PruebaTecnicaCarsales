import { Routes } from "@angular/router";
import { MainComponent } from "./ui/main/main.component";
import path from "path";
import { HomeComponent } from "./ui/pages/home/home.component";
import { EpisodeComponent } from "./ui/pages/episode/episode.component";

export const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "episodes/:id",
        component: EpisodeComponent,
      },
    ],
  },
];
