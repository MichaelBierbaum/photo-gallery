import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';





@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService) { }

  //when the user first navigates to Tab 2 (the Photo Gallery), 
  
  //all photos are loaded
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  //and displayed on the screen
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

}
