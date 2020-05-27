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
    Location: 'Main Church',
    Details: {
          Theme : 'Phil 2:10',
          Time : '9:00am - 7:30pm',
          Duration : '1 week',
          Host : 'Ap. Havardy J'
          }

  },
  {
    Title: 'Community Treatment',
    Date: '5th Sept - 23rd Sept',
    Location: 'Main Church',
    Details: {
        Theme : '',
        Time : '9:00am - 4:00pm',
        Duration : '18 days',
        Host : 'Ps. Green H'
         }
  },
   {
    Title: 'Baptism',
    Date: '7th Nov',
    Location: 'Lake Shores',
    Details: {
      Theme : 'Be a new man',
      Time : '11:00am - 2:00pm',
      Duration : '1 day',
      Host : ''
    }
  },
  {
    Title: 'Annual Conference',
    Date: '7th Dec - 13th Dec ',
    Location: 'Main Church',
    Details: {
        Theme : '',
        Time : '09:00am - 6:00pm',
        Duration : '1 week',
        Host : 'Ps. Green H'
    }
  }];

