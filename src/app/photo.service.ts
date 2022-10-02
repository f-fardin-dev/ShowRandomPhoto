import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http
      .get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization: `Client-ID ${environment.unsplashAccessKey}`,
        },
      })
      .pipe(map((res) => res?.urls?.regular));
  }
}
