import { createSelector } from "@ngrx/store";
import { MainState } from "../main.state";
import { EpisodeItemState } from "../../../dao/models/episode.state";

export const selectEpisodeFeature = (state: MainState) => state.episode;

export const selectEpisodeItem = createSelector(
  selectEpisodeFeature,
  (state: EpisodeItemState) => state.episode
);

export const selectEpisodeItemLoading = createSelector(
  selectEpisodeFeature,
  (state: EpisodeItemState) => state.loading
);

export const selectEpisodeItemError = createSelector(
  selectEpisodeFeature,
  (state: EpisodeItemState) => state.hasError
);
