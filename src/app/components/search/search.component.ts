import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  search:string = "";

  constructor(public ps:PeliculasService, private ar:ActivatedRoute) { 
    this.ar.params.subscribe(p => {
      
      if (p['text']) {
        this.search = p['text'];
        this.searchMovie();
      }
    })
  }

  ngOnInit() {
  }

  searchMovie(){
    if (this.search.length == 0) {
      return;
    }
    this.ps.searchMovie(this.search).subscribe(data => {
     
    })
  }

}
