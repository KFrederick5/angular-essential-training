import { InjectionToken } from "@angular/core";

export const lookupListToken = new InjectionToken('lookupListToken');

export const lookupLists = {
    mediums: ['Movies', 'Series'],
    categories: ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Science Fiction', ]
  };