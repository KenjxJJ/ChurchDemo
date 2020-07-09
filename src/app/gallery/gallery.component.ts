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
        subHtml: `<h2>Bible Studies</h2>
              <p>The engaging online sessions every Mondays and Wednesdays.</p>`,
      },
      {
        src: '../../assets/img/gallery/img_16.jpg',
        thumb: '../../assets/img/gallery/img_16.jpg',
        subHtml: '<h2>Help the needy</h2><p> Contribute good to save and uplift the lives of the needy in Southern Sudan. </p>'
      }, {
        src: '../../assets/img/gallery/img_17.jpg',
        thumb: '../../assets/img/gallery/img_17.jpg',
        subHtml: '<h2>The Heavenly Sound</h2><p>The first live gospel concert in Chicago, United States 2010.</p>'
      }, {
        src: '../../assets/img/gallery/img_18.jpg',
        thumb: '../../assets/img/gallery/img_18.jpg',
        subHtml: `<h2>The Outreach</h2>
           <p> 2019 was a great joyous year in Masai-land, Kenya.</p>`
      },
      {
        src: '../../assets/img/gallery/img_20.jpg',
        thumb: '../../assets/img/gallery/img_20.jpg',
        subHtml: `<h2>Talent for good</h2><p>That's sister Roselyne ministering during online worship music.</p>`
      }]
  });
  }
}
