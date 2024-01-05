import { createSelector } from "@ngrx/store";
import { MainState } from "../main.state";
import { EpisodeState } from "../../../dao/models/episodes.state";

export const selectEpisodesFeature = (state: MainState) => state.episodes;

export const selectEpisodesList = createSelector(
  selectEpisodesFeature,
  (state: EpisodeState) => state.items
);

export const selectEpisodesLoading = createSelector(
  selectEpisodesFeature,
  (state: EpisodeState) => state.loading
);

export const selectEpisodeError = createSelector(
  selectEpisodesFeature,
  (state: EpisodeState) => state.hasError
);
