import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef,  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

const ACCESS_TOKEN = 'b0a78f90bb8c88e1fb9a13a09d0dbbe0a568ed4946a4ec05f66f10ed5a6efbbe';
const URL_BASE = 'https://api.dribbble.com/v1/shots?per_page=9';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shots = [];
  modalContent;
  searchResult;
  loading;
  pageNumber = 1;
  small = false;
  @ViewChild('query') input: ElementRef;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.fetchShots(this.pageNumber);

    Observable.fromEvent(this.input.nativeElement, 'input')
      .debounceTime(500)
      .subscribe(
        () => this.searchShots(this.input.nativeElement.value)
      );
  }

  buildUrl(pageNumber) {
    return `${URL_BASE}&page=${pageNumber}&access_token=${ACCESS_TOKEN}`;
  }

  fetchShots(pageNumber) {
    this.loading = true;
    this.http.get(this.buildUrl(pageNumber)).subscribe(
      (res: any) => {
        this.shots = [...this.shots, ...res];
        const query = this.input.nativeElement.value;
        if (query) {
          this.searchShots(query);
        }
        this.loading = false;
    });
  }

  showShotDetails(shot) {
    this.modalContent = shot;
  }

  searchShots(query) {
    this.searchResult = this.shots.filter( shot =>
      (shot.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
       shot.user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    );
  }

  loadMore() {
    this.fetchShots(++this.pageNumber);
  }

}
