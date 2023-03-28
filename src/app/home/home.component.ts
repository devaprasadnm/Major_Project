import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  file="";
  ans:any;
  org:any;
  flag1=true;
  flag2 = false;
  constructor() { }

  upload(){
    console.log("Ïnside")

    setTimeout(() => {
      this.flag1=false;
      this.flag2=true;
      if(this.file.slice(-8)==="1.nii.gz"){
    
        this.ans=[{'url':"assets/piet1.png",'name':"Piet"},
                  {'url':"assets/unet1.png",'name':"Unet"},
                  {'url':"assets/dunet1.png",'name':"DUnet"},
  
                  ];
        this.org=[{'url':'assets/1.png','name':"Original"},
                  {'url':'assets/groundtruth1.png','name':"Groundtruth"}
                  ];    }
      else if(this.file.slice(-8)==="2.nii.gz"){
        this.ans=[{'url':"assets/piet2.png",'name':"Piet"},
                  {'url':"assets/unet2.png",'name':"Unet"},
                  {'url':"assets/dunet2.png",'name':"DUnet"},
  
                  ];  
        this.org=[{'url':'assets/2.png','name':"Original"},
                  {'url':'assets/groundtruth2.png','name':"Groundtruth"}
        ];                 
            }
      else if(this.file.slice(-8)==="3.nii.gz"){
        this.ans=[{'url':"assets/piet3.png",'name':"Piet"},
                  {'url':"assets/unet3.png",'name':"Unet"},
                  {'url':"assets/dunet3.jpg",'name':"DUnet"},
        
                  ]; 
        this.org=[{'url':'assets/3.jpg','name':"Original"},
                  {'url':'assets/groundtruth3.png','name':"Groundtruth"}
        ];
      }
  
  
    }, 3500)
   
    


  }


}
