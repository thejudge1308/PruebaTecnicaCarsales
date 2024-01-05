import { EpisodeScheme } from "./episodes.model";

export interface EpisodeState {
  loading: boolean;
  items: EpisodeScheme;
  hasError: boolean;
}
