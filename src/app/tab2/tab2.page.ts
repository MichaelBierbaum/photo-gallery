import { Component } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService,
              public actionSheetController: ActionSheetController) { }

  //when the user first navigates to Tab 2 (the Photo Gallery), 
  
  //all photos are loaded
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  //and displayed on the screen
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  public async showActionSheet(photo: UserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
          }
      }]
    });
    await actionSheet.present();
  }

}
