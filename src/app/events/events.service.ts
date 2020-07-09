import { Injectable } from '@angular/core';

@Injectable({
   providedIn : 'root'
})

export class EventService {
      getEvents(){
         return EVENTS;
      }
}

const EVENTS: any[] = [
  {
    Title: 'Annual General Conference',
    Date: '6th Apr - 13th Apr',
    Location: 'Online Church Platform',
    Details: {
          Theme : 'Phil 2:10',
          Time : '9:00am - 7:30pm',
          Duration : '1 week',
          Host : 'Ap. Havardy J - Healing Springs,UK'
          }

  },
  {
    Title: 'Community Treatment',
    Date: '5th Sept - 23rd Oct',
    Location: 'Selected Regions in the World',
    Details: {
        Theme : 'Psa 41:1-3',
        Time : '9:00am - 4:00pm',
        Duration : '48 days',
        Host : 'Ps. Jones'
         }
  },
   {
    Title: 'Baptism',
    Date: '7th Nov',
    Location: 'Lake Shores of Victoria',
    Details: {
      Theme : 'Be a new man',
      Time : '11:00am - 2:00pm',
      Duration : '1 day',
      Host : 'Ps. Jones'
    }
  },
  {
    Title: 'Annual Conference',
    Date: '7th Dec - 13th Dec ',
    Location: 'Online,  Kansas, US',
    Details: {
        Theme : '',
        Time : '09:00am - 6:00pm',
        Duration : '1 week',
        Host : 'Ps. Jones'
    }
  },
  {
    Title: 'Annual Worship Experience',
    Date: '6th Apr - 13th Apr',
    Location: 'Online Social Platforms',
    Details: {
          Theme : 'Psalms 96:9',
          Time : '5:00pm - 10:30pm',
          Duration : '1 week',
          Host : 'Sis. Rosylene & Br. Chris E'
          }

  }
];

