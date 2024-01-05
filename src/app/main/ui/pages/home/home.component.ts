import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadEpisodes } from "../../../uc/state/actions/episodes.actions";
import { Observable } from "rxjs";
import {
  selectEpisodeError,
  selectEpisodesLoading,
} from "../../../uc/state/selectors/episodes.selector";
import { ApiService } from "../../../services/api/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  loading$: Observable<boolean> = new Observable();
  hasError$: Observable<boolean> = new Observable();
  constructor(private store: Store<any>, private apiService: ApiService) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectEpisodesLoading);
    this.hasError$ = this.store.select(selectEpisodeError);
    this.store.dispatch(loadEpisodes({ page: 1 }));
  }
}
