import { ActionReducerMap } from "@ngrx/store";
import { EpisodeState } from "../../dao/models/episodes.state";
import { episodesReducer } from "./reducers/episodes.reducers";

export interface MainState {
  episodes: EpisodeState;
}

export const FeatureMainReducer: ActionReducerMap<MainState> = {
  episodes: episodesReducer,
};
