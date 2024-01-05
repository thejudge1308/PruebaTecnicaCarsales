import { ActionReducerMap } from "@ngrx/store";
import { EpisodeState } from "../../dao/models/episodes.state";
import { episodesReducer } from "./reducers/episodes.reducers";
import { EpisodeItemState } from "../../dao/models/episode.state";
import { episodeReducer } from "./reducers/episode.reducers";

export interface MainState {
  episodes: EpisodeState;
  episode: EpisodeItemState;
}

export const FeatureMainReducer: ActionReducerMap<MainState> = {
  episodes: episodesReducer,
  episode: episodeReducer,
};
