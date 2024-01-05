import { EpisodeItemInfo } from "./episodes.model";

export interface EpisodeItemState {
  loading: boolean;
  episode: EpisodeItemInfo;
  hasError: boolean;
}
