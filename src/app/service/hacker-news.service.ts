import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const Api = {
  NEWS: '/api/v0/news.json',
  NEWEST: '/api/v0/newest.json',
  ASK: '/api/v0/ask.json',
  SHOW: '/api/v0/show.json',
  JOBS: '/api/v0/jobs.json'
}

@Injectable()
export class HackerNewsService {

  constructor(private http: HttpClient) {
  }

  private request(sApi) {
    return this.http.get(`https://hnpwa.com${sApi}`);
  }

  public fetchNEWS() {
    return this.request(Api.NEWS);
  }

  public fetchNEWEST() {
    return this.request(Api.NEWEST);
  }

  public fetchASK() {
    return this.request(Api.NEWS);
  }

  public fetchSHOW() {
    return this.request(Api.SHOW);
  }

  public fetchJOBS() {
    return this.request(Api.JOBS);
  }
}
