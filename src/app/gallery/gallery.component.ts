import { Component, OnInit } from '@angular/core';

declare var lightGallery: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  ngOnInit(): void { }

  onClick() {
    lightGallery(document.getElementById('dynamic'), {
      dynamic: true,
      dynamicEl: [{
        src: '../../assets/img/gallery/img_15.jpg',
        thumb: '../../assets/img/gallery/img_15.jpg',
        subHtml: `<h2>Bible Study</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>`,
      },
      {
        src: '../../assets/img/gallery/img_16.jpg',
        thumb: '../../assets/img/gallery/img_16.jpg',
        subHtml: '<h2>Help the needy</h2><p> Dolores commodi eos voluptatibus.</p>'
      }, {
        src: '../../assets/img/gallery/img_17.jpg',
        thumb: '../../assets/img/gallery/img_17.jpg',
        subHtml: '<h2>The Heavenly Sound</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>'
      }, {
        src: '../../assets/img/gallery/img_18.jpg',
        thumb: '../../assets/img/gallery/img_18.jpg',
        subHtml: `<h2>The Outreach</h2>
           <p> Dolores commodi eos voluptatibus.</p>`
      },
      {
        src: '../../assets/img/gallery/img_20.jpg',
        thumb: '../../assets/img/gallery/img_20.jpg',
        subHtml: `<h2>Talent for good</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>`
      }]
  });
  }
}
