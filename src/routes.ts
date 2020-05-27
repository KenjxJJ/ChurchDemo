import { Routes } from '@angular/router';
import { AboutComponent } from './app/about/about.component';
import { ContactUsComponent } from './app/contactUs/contact-us.component';
import { HomeComponent } from './app/home/home.component';
import { GalleryComponent } from './app/gallery/gallery.component';
import { EventsComponent } from './app/events/events.component';
import { OurWorkComponent } from './app/ourWork/our-work.component';

export  const appRoutes: Routes = [
     {
        path: 'about', component: AboutComponent
     },
     {
      path: 'our_work', component: OurWorkComponent
     },
     {
        path: 'contact_us', component: ContactUsComponent
     },
     {
       path: 'events', component:
            EventsComponent
     },
     {
        path: 'gallery', component: GalleryComponent
     },
     {
      path: 'home', component: HomeComponent
     },
     {
      path: ' ', redirectTo: '/home', pathMatch: 'full'
     },
     {
        path: '**', redirectTo: '/home', pathMatch: 'full'
     }
];
