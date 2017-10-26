import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

const ACCESS_TOKEN = 'b0a78f90bb8c88e1fb9a13a09d0dbbe0a568ed4946a4ec05f66f10ed5a6efbbe';
const URL_BASE = 'https://api.dribbble.com/v1/shots?per_page=9';

@Injectable()
export class ShotsService {
  pageNumber = 1;

  constructor(public http: HttpClient) { }

  nextShotsPage() {
    this.pageNumber++;
    return this.fetchShots();
  }

  fetchShots() {
    return this.http.get(this.url);
  }

  get url() {
    return `${URL_BASE}&page=${this.pageNumber}&access_token=${ACCESS_TOKEN}`;
  }
}
