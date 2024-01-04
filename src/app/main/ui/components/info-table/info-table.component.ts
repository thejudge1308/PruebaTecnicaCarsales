import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  EpisodeItemInfo,
  EpisodeScheme,
} from "../../../dao/models/episodes.model";
import { selectEpisodesList } from "../../../uc/state/selectors/episodes.selector";
import { PageEvent } from "@angular/material/paginator";
import { loadEpisodes } from "../../../uc/state/actions/episodes.actions";

@Component({
  selector: "app-info-table",
  templateUrl: "./info-table.component.html",
  styleUrl: "./info-table.component.scss",
})
export class InfoTableComponent implements OnInit {
  public displayedColumns: string[] = ["name", "episode", "air_date", "action"];
  public dataSource = new MatTableDataSource<EpisodeItemInfo>([]);
  public list$: Observable<EpisodeScheme> = new Observable();
  public totalPages: number;
  public itemsPerPage: number;
  public pageIndex = 0;

  constructor(private store: Store<any>) {
    this.totalPages = 0;
    this.itemsPerPage = 20;
    this.pageIndex = 0;
  }
  ngOnInit(): void {
    this.list$ = this.store.select(selectEpisodesList);
    this.list$.subscribe((value) => {
      this.totalPages = value.info.count;
      this.dataSource.data = !!value?.results ? value.results : [];
    });
  }

  public handlePageEvent(e: PageEvent) {
    this.pageIndex = e.pageIndex;
    this.store.dispatch(loadEpisodes({ page: e.pageIndex + 1 }));
  }
}
