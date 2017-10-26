import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  small: any = false;

  @Output() gridChange = new EventEmitter();
  @Output() search = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSearch(query) {
    this.search.emit(query);
  }

  onGridChange() {
    this.small = !this.small;
    this.gridChange.emit(this.small);
  }

}
