import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  Observable,
  catchError,
  forkJoin,
  map,
  switchMap,
  tap,
  throwError,
} from "rxjs";
import {
  EpisodeInfo,
  EpisodeItemInfo,
  EpisodeScheme,
} from "../../dao/models/episodes.model";
import { CharacterModel } from "../../dao/models/character.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private Base_URL = "https://rickandmortyapi.com/api";
  private currentPage = 0;
  //private currentInfo: EpisodeInfo | undefined;
  constructor(private client: HttpClient) {}

  /**
   *
   * @param page Page number
   * @returns A object EpisodeScheme
   */
  public getEpisodes(page: number): Observable<EpisodeScheme> {
    this.currentPage = page;
    const url = `${this.Base_URL}/episode/?page=${page}`;
    return this.client.get<EpisodeScheme>(url).pipe(
      tap((value) => {
        if (this.currentPage == 0) {
          //this.currentInfo = value?.info;
        }
      })
    );
  }

  /**
   *
   * @param episode
   * @returns
   */
  public getEpisode(episode: number): Observable<EpisodeItemInfo> {
    const url = `${this.Base_URL}/episode/${episode}`;
    return this.client.get<EpisodeItemInfo>(url).pipe(
      switchMap((value) => {
        const characterRequests = (value.characters as string[]).map(
          (url: string) => this.getCharacter(url)
        );
        return forkJoin(characterRequests).pipe(
          catchError((error) => {
            //console.error("Error fetching character:", error);
            return throwError(error);
          }),
          map((characters) => ({ ...value, characters }))
        );
      })
    );
  }

  public getCharacter(url: string): Observable<CharacterModel> {
    return this.client.get<CharacterModel>(url);
  }
}
