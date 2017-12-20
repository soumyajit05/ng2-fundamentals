import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs/RX';
import {IEvent} from './event-model';

@Injectable()
export class EventService {

    getEventsFood() {
        return `Food Service will be provided during events`;
    }

    getAllEvents():Observable<any> {
        let subject = new Subject<any>();
        setTimeout(() => { subject.next(this.events1); subject.complete() }, 10);
        // return this.events1;
        return subject;
    }

    getEventsById(id: number) {

        let event = this.events1.find(event => event.id === id);
        return event;
    }

    events1 = [
        {
            id: 1,
            startDate:  (`1st November, 2017`),
            endDate:  (`25th December, 2018`),
            cost: 250,
            startTime: ('8:00 am')
        },
        {
            id: 2,
            startDate: `1st January, 2017`,
            endDate: `25th February, 2018`,
            cost: `$150`,
            startTime: '10:00 am'
        },
        {
            id: 3,
            endDate: `4th October, 198`,
            startTime: '9:00 am'
        }
    ];
}
const events2:IEvent[] = [ // Using model for Type safety
    {
        id: 1,
        startDate:  new Date('5/4/2017'),
        endDate:  new Date(`12/25/2017`),
        cost: '$250',
        startTime: ('8:00 am')        
    },
    {
        id: 2,
        startDate:  new Date('1/1/2017'),
        endDate:  new Date(`2/2/2017`),
        cost: '$500',
        startTime: ('10:00 am')
    },
    {
        id: 1,
        startDate:  new Date('4/4/2017'),
        endDate:  new Date(`4/12/2017`),
        cost: '$100',
        startTime: ('9:00 am')
    }
];