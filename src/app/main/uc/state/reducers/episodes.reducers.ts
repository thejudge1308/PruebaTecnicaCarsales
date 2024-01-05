import { createReducer, on } from "@ngrx/store";
import { EpisodeScheme } from "../../../dao/models/episodes.model";
import {
  loadEpisodes,
  loadErrorEpisodes,
  loadedEpisodes,
} from "../actions/episodes.actions";
import { EpisodeState } from "../../../dao/models/episodes.state";

export const initialEpisodeState: EpisodeState = {
  loading: false,
  items: {} as EpisodeScheme,
  hasError: false,
};

export const episodesReducer = createReducer(
  initialEpisodeState,
  on(loadEpisodes, (state) => {
    return { ...state, loading: true, hasError: false };
  }),
  on(loadedEpisodes, (state, { episodes }) => {
    return { ...state, loading: false, items: episodes };
  }),
  on(loadErrorEpisodes, (state) => {
    return { ...state, loading: false, hasError: false };
  })
);
