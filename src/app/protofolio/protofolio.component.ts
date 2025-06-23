import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-protofolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './protofolio.component.html',
  styleUrl: './protofolio.component.css',
  
})
export class ProtofolioComponent {
images=[
  '/images/poert1.png',
  '/images/port2.png',
  '/images/port3.png',
   '/images/poert1 (copy).png',
  '/images/port2 (copy).png',
  '/images/port3 (copy).png',
  
];
zoomedImg:string | null =null;
toggleZoom(img:string|null):void{
  this.zoomedImg=img;
}


}
