import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { SpotifyAlbumApi } from '../../core/services/spotify-album-api';
import { Album } from '../../core/interfaces/spotify-response';
import { SpotifyService } from '../../core/services/spotify.service';

@Component({
  selector: 'app-album-page',
  standalone: true,       
  imports: [CommonModule], 
  templateUrl: './album-page.html',
  styles: ``,
})
export class AlbumPage implements OnInit {
  albumApi = inject(SpotifyAlbumApi);
  albums = signal<Album[]>([]);

  nuevasCanciones: any[] = [];

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewRelease().subscribe((data: any) => {
      console.log(data.albums.items);
      this.nuevasCanciones = data.albums.items;
    });
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.albumApi.getNewReleases().subscribe((res: any) => {
      console.log('albums:', res);
      this.albums.set(res.albums.items);
    });
  }
}
