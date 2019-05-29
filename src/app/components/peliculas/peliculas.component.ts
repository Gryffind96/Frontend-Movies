import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  movie:any;
  located:string;
  q:string;

  constructor(public ar:ActivatedRoute, public ps:PeliculasService) {
    this.ar.params.subscribe(p =>{
     
      this.ps.getMovie(p['id']).subscribe((data)=>{
       
        if (p['q']) {
          this.q = p['q'];
        }
        this.located = p['pag'];
        this.movie = data;
      })
    })
  }

  ngOnInit() {
  }

}
