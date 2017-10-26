import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss']
})
export class DetailModalComponent implements OnInit {
  @Input() modalContent: any;

  constructor() { }

  ngOnInit() {
  }

}
