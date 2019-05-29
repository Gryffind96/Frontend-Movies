import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = '57e78f31bdaf3919132c3ae5fbf21c8e';
  private urlLocalHost = 'https://api.themoviedb.org/3';
  
  movies:any[] = [];

  constructor(private _http: HttpClient) {}

  private getURL(request: string, language: string): string {
     return `${this.urlLocalHost}${request}&api_key=${this.apiKey}&language=${language}&callback=JSONP_CALLBACK`;
  }

  getCartelera(){

    let since = new Date();
    let until = new Date();
    until.setDate(until.getDate() + 7);

    let sincestr= `${since.getFullYear()}-${since.getMonth()+1}-${since.getDate()}`;
    let untilstr= `${until.getFullYear()}-${until.getMonth()+1}-${until.getDate()}`;

    const req = `/discover/movie?primary_release_date.gte=${sincestr}&primary_release_date.lte=${untilstr}`;

    return this._http.jsonp(this.getURL(req, 'es'), '').pipe(map(res => res['results'] ));
  }

  getMostPopular() {
    const request = '/discover/movie?sort_by=popularity.desc';
    return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map(res => res['results'] ));
  }

  getKidsPopular(){
    const request = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map(res => res['results'] ));
  }
  

  searchMovie(texto:string){
    const request = `/search/movie?query=${texto}&sort_by=popularity.desc`;
    return this._http.jsonp(this.getURL(request, 'es'), '').pipe(map(res => {
      this.movies = res['results'];
      return res['results'];
    } ));
  }

  getMovie(id:string){
    const req = `/movie/${id}?`
    return this._http.jsonp(this.getURL(req, 'es'), '').pipe(map(res => res ));
  }
}
