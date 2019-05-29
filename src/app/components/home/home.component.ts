import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartels:any;
  populars:any;
  kids:any;

  constructor(private ps:PeliculasService) { 
    this.ps.getCartelera().subscribe((data)=> {
      
      this.cartels = data;
    });

    this.ps.getMostPopular().subscribe((data)=> this.populars = data);

    this.ps.getKidsPopular().subscribe((data)=> this.kids = data);

    
  }

  ngOnInit() {
  }

}
