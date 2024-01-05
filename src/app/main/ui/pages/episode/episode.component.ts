import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, catchError, of, switchMap, tap, throwError } from "rxjs";
import { ApiService } from "../../../services/api/api.service";
import { Store } from "@ngrx/store";
import { selectEpisodeItemLoading } from "../../../uc/state/selectors/episode.selector";
import { loadEpisode } from "../../../uc/state/actions/episodes.actions";

@Component({
  selector: "app-episode",
  templateUrl: "./episode.component.html",
  styleUrl: "./episode.component.scss",
})
export class EpisodeComponent implements OnInit {
  public currentId: number;
  isloading$: Observable<boolean> = new Observable();
  constructor(private route: ActivatedRoute, private store: Store<any>) {
    this.currentId = -1;
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((value) => {
          return !!value["id"] && !isNaN(Number(value["id"]))
            ? of(Number(value["id"]))
            : throwError("Is NAN");
        }),
        tap((data) => {
          this.getEpisodeInfo(data);
        }),
        catchError((err) => throwError(err))
      )
      .subscribe({
        next: (data) => {},
        error: (err) => {
          console.error(err);
        },
      });
  }

  public getEpisodeInfo(id: number) {
    this.isloading$ = this.store.select(selectEpisodeItemLoading);

    this.store.dispatch(loadEpisode({ episode: id }));
  }
}
