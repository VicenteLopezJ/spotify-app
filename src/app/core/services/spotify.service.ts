import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
  }

  getNewRelease() {
    const headers = new HttpHeaders({
      'Authorization':
        'Bearer BQDg0SW5H3qZMjETCkT8aQwNkjemBDTxGopvWI6spt8zcCCFF6UykHuaR3AZGiVRKXbmRqRvjj8yXeVfbIEvrmUQUQd7qWqSFvQXfszAgoqUohqMSfsdY1HUjTRZhqNsP_gAYJp4o4U',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
   
  }

  getArtista(termino:string){
    const headers = new HttpHeaders({
      'Authorization':
        'Bearer BQDg0SW5H3qZMjETCkT8aQwNkjemBDTxGopvWI6spt8zcCCFF6UykHuaR3AZGiVRKXbmRqRvjj8yXeVfbIEvrmUQUQd7qWqSFvQXfszAgoqUohqMSfsdY1HUjTRZhqNsP_gAYJp4o4U',
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers });
  }
}
