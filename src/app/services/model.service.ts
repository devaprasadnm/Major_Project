import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }
  modelUnet =  "models/unet_atlas_traintest.pth";
  modelDunet = "models/dunet_atlas_traintest.pth"
  modelPiet = "models/spin_atlas_traintest.pth"

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
