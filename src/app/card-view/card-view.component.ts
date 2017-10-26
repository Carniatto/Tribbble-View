import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  @Input() data: any;
  @Input() tileGrid: any;

  @Output() itemSelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onItemSelect(item) {
    this.itemSelect.emit(item);
  }

}
