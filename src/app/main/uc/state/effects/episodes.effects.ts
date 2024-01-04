import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, exhaustMap, catchError } from "rxjs/operators";
import { ApiService } from "../../../services/api/api.service";
import { EpisodeActionType } from "../../enums/action/episode.action.enum";

@Injectable()
export class EpisodesEffects {
  loadEpisodes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EpisodeActionType.LOAD),
      exhaustMap(({ page }) =>
        this.apiService.getEpisodes(page).pipe(
          map((episodes) => ({
            type: EpisodeActionType.LOADED,
            episodes: episodes,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
