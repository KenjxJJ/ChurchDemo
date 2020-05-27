import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: string[]  = [
    '../../assets/img/img_11.jpg',
    '../../assets/img/img_12.jpg',
    '../../assets/img/img_13.jpg',
    '../../assets/img/img_14.jpg'
  ];

  constructor() { }


  ngOnInit() {
  }

}
