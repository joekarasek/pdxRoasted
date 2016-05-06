import { Component } from 'angular2/core';

@Component({
  selector: 'search-result-list',
  inputs: ['roasts'],
  templateUrl: 'app/search-result-list.component.html'
})
export class SearchResultListComponent {
  roasts: any[];

  constructor() {
    this.roasts = [];
  }
}
