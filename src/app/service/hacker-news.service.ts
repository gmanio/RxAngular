import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HackerNewsService {

  constructor(private http: HttpClient) {
  }
}
