import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyService } from '../../core/services/spotify.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './search.html',
  styles: ``
})
export class Search {

  artistas: any[] = [];
  constructor(private spotify: SpotifyService) {}

  buscar(termino:string) {
    console.log(termino);
    this.spotify.getArtista(termino)
    .subscribe((data : any) =>{
      console.log(data.artists.items);
      this.artistas = data.artists.items;
    })
  }
}
