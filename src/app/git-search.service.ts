import { GitSearch } from './git-search';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  cachedValues: Array<{
    [query: string]: GitSearch
  }> = [];
  constructor() { }

  gitSearch = (query: string) => {
    let promise = new Promise((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query]);
      }
      else {
        resolve("Placeholder");
      }
    })
    return promise;
  }
}
