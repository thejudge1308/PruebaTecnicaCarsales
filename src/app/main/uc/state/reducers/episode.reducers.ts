import { createReducer, on } from "@ngrx/store";
import { EpisodeItemState } from "../../../dao/models/episode.state";
import { EpisodeItemInfo } from "../../../dao/models/episodes.model";
import { loadEpisode, loadedEpisode } from "../actions/episodes.actions";

export const initialEpisodeState: EpisodeItemState = {
  loading: false,
  episode: {} as EpisodeItemInfo,
  hasError: false,
};

export const episodeReducer = createReducer(
  initialEpisodeState,
  on(loadEpisode, (state) => {
    return { ...state, loading: true, hasError: false };
  }),
  on(loadedEpisode, (state, { episode }) => {
    return { ...state, loading: false, episode: episode };
  })
  /*on(loadEpiso, (state) => {
    return { ...state, loading: false, hasError: false };
  })*/
);
