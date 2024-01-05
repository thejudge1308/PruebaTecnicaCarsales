import { Component, OnInit } from "@angular/core";
import { EpisodeItemInfo } from "../../../dao/models/episodes.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { selectEpisodeItem } from "../../../uc/state/selectors/episode.selector";
import { CharacterModel } from "../../../dao/models/character.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-show-episode",
  templateUrl: "./show-episode.component.html",
  styleUrl: "./show-episode.component.scss",
})
export class ShowEpisodeComponent implements OnInit {
  public episode$: Observable<EpisodeItemInfo> = new Observable();
  public currentEpisode: EpisodeItemInfo | undefined;
  constructor(private store: Store<any>, private router: Router) {}

  ngOnInit(): void {
    this.episode$ = this.store.select(selectEpisodeItem);
    this.episode$.subscribe((data) => {
      this.currentEpisode = data;
    });
  }

  public getName(): string {
    return !!this.currentEpisode ? this.currentEpisode.name : "";
  }

  public getCapAndSeason(): string {
    return !!this.currentEpisode ? this.currentEpisode.episode : "";
  }

  public getRelease(): string {
    return !!this.currentEpisode ? this.currentEpisode.air_date : "";
  }

  public getCharacters(): CharacterModel[] {
    return !!this.currentEpisode
      ? (this.currentEpisode.characters as CharacterModel[])
      : [];
  }

  public onBack(): void {
    this.router.navigate(["../"]);
  }
}
