import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-show-photo',
  templateUrl: './show-photo.component.html',
  styleUrls: ['./show-photo.component.css'],
})
export class ShowPhotoComponent implements OnInit {
  imgUrl: string = '';

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.getNewPhoto();
  }

  getNewPhoto() {
    this.photoService.getPhoto().subscribe((url) => (this.imgUrl = url));
  }
}
