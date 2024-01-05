import { CharacterModel } from "./character.model";

export interface EpisodeScheme {
  info: EpisodeInfo;
  results: EpisodeItemInfo[];
}

export interface EpisodeInfo {
  count: number;
  pages: number;
  next: string | undefined;
  prev: string | undefined;
}

export interface EpisodeItemInfo {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[] | CharacterModel[];
  url: string;
  created: string;
}
