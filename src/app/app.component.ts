import { PeliculasService } from './services/peliculas.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public ps:PeliculasService){
    //this.ps.getMostPopular()
    this.ps.searchMovie("wall-e")
      .subscribe( data => {});
  }
}
