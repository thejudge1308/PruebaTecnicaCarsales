import { createAction, props } from "@ngrx/store";
import {
  EpisodeItemInfo,
  EpisodeScheme,
} from "../../../dao/models/episodes.model";
import { EpisodeActionType } from "../../enums/action/episode.action.enum";

/**
 * Episodes
 */
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

/**
 * Episode Item
 */
export const loadEpisode = createAction(
  EpisodeActionType.ITEM_LOAD,
  props<{ episode: number }>()
);

export const loadedEpisode = createAction(
  EpisodeActionType.ITEM_LOADED,
  props<{ episode: EpisodeItemInfo }>()
);

export const loadErrorEpisode = createAction(
  EpisodeActionType.ERROR,
  props<{ hasError: boolean }>()
);
