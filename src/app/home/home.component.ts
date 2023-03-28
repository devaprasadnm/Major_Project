import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  file="";
  ans:any;
  constructor() { }
  uploadFile(){
  
    if(this.file.slice(-8)==="1.nii.gz"){
      this.ans=[{'url':"assets/Piet.png",'name':"Piet"},
                {'url':"assets/unet1.png",'name':"Unet"},
                {'url':"assets/dunet1.png",'name':"DUnet"},

                ];    }
    else if(this.file.slice(-8)==="2.nii.gz"){
      this.ans=[{'url':"assets/piet2.png",'name':"Piet"},
                {'url':"assets/u-net.png",'name':"Unet"},
                {'url':"assets/dunet2.png",'name':"DUnet"},

                ];    }
    


  }
}
