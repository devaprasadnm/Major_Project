import { Injectable } from '@angular/core';

const niiBuffer = // Read the NII file as a buffer



@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }
  modelUnet =  "models/unet_atlas_traintest.pth";
  modelDunet = "models/dunet_atlas_traintest.pth"
  modelPiet = "models/spin_atlas_traintest.pth"

 canvas = document.createElement('canvas');


  model(name: string) {
    if (name === 'unet') {

      return this.modelUnet;
    } else if (name === 'dunet') {
      return this.modelDunet;
    } else if (name === 'piet') {
      return this.modelPiet;
    } 
  }
}
