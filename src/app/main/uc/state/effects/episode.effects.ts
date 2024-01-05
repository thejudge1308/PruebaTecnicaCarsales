import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, of } from "rxjs";
import { map, exhaustMap, catchError } from "rxjs/operators";
import { ApiService } from "../../../services/api/api.service";
import { EpisodeActionType } from "../../enums/action/episode.action.enum";

@Injectable()
export class EpisodeEffects {
  loadEpisodeItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EpisodeActionType.ITEM_LOAD),
      exhaustMap(({ episode }) =>
        this.apiService.getEpisode(episode).pipe(
          map((episode) => ({
            type: EpisodeActionType.ITEM_LOADED,
            episode: episode,
          })),
          catchError(() =>
            of({
              type: EpisodeActionType.ITEM_ERROR,
              episode: {},
            })
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
