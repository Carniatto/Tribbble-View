import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  shots;
  modalContent;
  readMore;
  small = false;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    const access_token = localStorage.getItem('access_token');
    const url = 'https://api.dribbble.com/v1/shots?' +
      'access_token=b0a78f90bb8c88e1fb9a13a09d0dbbe0a568ed4946a4ec05f66f10ed5a6efbbe&page=1&per_page=12';
    this.http.get(url).subscribe(
      (res: any) => this.shots = res
    );
  }

  showShotDetails(shot) {
    console.log(shot);
    this.readMore = false;
    this.modalContent = shot;
  }

  searchShots() {

  }

}
