import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  code;
  state;
  client_id = '30fb1bc0ab16fb1b2d8852d559e93ce56e2761f622c27d77bef17bf3aa2f1c7b';
  client_secret = '7bff61648a19b28183a496474c76f31af5c6d3e489803d207b4e193db29cabbf';
  constructor(
    public http: HttpClient,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    if(!localStorage.getItem('access_token')) {
      this.route.queryParams.subscribe(
        res => {
          this.code = res.code;
          this.state = res.state;
        }
      )
      const url = 'https://dribbble.com/oauth/token';
      if(this.code) {
        this.http.post(url, {
          client_id: this.client_id,
          client_secret: this.client_secret,
          code: this.code
        }, ).subscribe(
          res => {
            localStorage.setItem('access_token', res['access_token']);
            this.router.navigateByUrl('home');
          }
        )
      }
    } else {
      this.router.navigateByUrl('home');
    }
  }

  login() {
    const scope = 'public+write+comment+upload';
    const state = 'bern';
    const url = `https://dribbble.com/oauth/authorize?client_id=${this.client_id}&scope=${scope}&state=${state}`;
    window.open(url, '_self');
  }

}
