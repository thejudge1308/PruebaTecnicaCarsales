import { createAction, props } from "@ngrx/store";
import { EpisodeScheme } from "../../../dao/models/episodes.model";
import { EpisodeActionType } from "../../enums/action/episode.action.enum";

export const loadEpisodes = createAction(
  EpisodeActionType.LOAD,
  props<{ page: number }>()
);

export const loadedEpisodes = createAction(
  EpisodeActionType.LOADED,
  props<{ episodes: EpisodeScheme }>()
);

export const loadErrorEpisodes = createAction(
  EpisodeActionType.ERROR,
  props<{ hasError: boolean }>()
);
