import { ShotsService } from './../services/shots.service';

import { Component, OnInit, ViewChild, ElementRef,  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shots: any = [];
  small: any = false;
  modalContent: Object;
  searchResult: any;
  loading: any;

  search$ = new Subject();

  constructor(public shotsService: ShotsService) { }

  ngOnInit() {
    this.loading = true;

    this.shotsService.fetchShots()
      .subscribe(this.concatShots.bind(this));

    this.search$
      .asObservable()
      .debounceTime(500)
      .subscribe(
        query => this.searchShots(query)
      );
  }

  concatShots(newShots) {
      this.shots = [...this.shots, ...newShots];
      this.loading = false;
  }

  onSearch(query) {
    this.search$.next(query);
  }

  showShotDetails(shot) {
    this.modalContent = shot;
  }

  searchShots(query) {
    if (query instanceof Event) {
      query = '';
    }

    this.searchResult = this.shots.filter( shot =>
      (shot.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
       shot.user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    );
  }

  loadMore() {
    this.loading = true;
    this.searchResult = undefined;
    this.shotsService.nextShotsPage()
      .subscribe(this.concatShots.bind(this));
  }

}
