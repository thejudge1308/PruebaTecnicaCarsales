import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { EpisodeInfo, EpisodeScheme } from "../../dao/models/episodes.model";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private Base_URL = "https://rickandmortyapi.com/api";
  private currentPage = 0;
  private currentInfo: EpisodeInfo | undefined;
  constructor(private client: HttpClient) {}

  public getEpisodes(page: number): Observable<EpisodeScheme> {
    this.currentPage = page;
    const url = `${this.Base_URL}/episode/?page=${page}`;
    return this.client.get<EpisodeScheme>(url).pipe(
      tap((value) => {
        if (this.currentPage == 0) {
          this.currentInfo = value?.info;
        }
      })
    );
  }

  public getApiInfoPages(): EpisodeInfo | undefined {
    return this.currentInfo;
  }
}
