import { Component } from "@angular/core";

@Component({
   selector: 'our-work',
   templateUrl: './our-work.component.html',
   styles :[
          ` main  {
              padding: 1.4rem;
          }
          span {
             font-weight: 600;
             font-style: italic;
          }`
   ]
})

export class OurWorkComponent {
    title = 'Our Work';
}
