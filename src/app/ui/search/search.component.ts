import {Component, EventEmitter, OnInit, Output, NgModule} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string;
  @Output() searchEvent = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    this.search = '';
  }

  onSearch() {
    this.searchEvent.emit(this.search);
  }
}
