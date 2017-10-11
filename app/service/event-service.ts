import { Injectable } from "@angular/core";

@Injectable()
export class EventService {

    getEventsFood() {
        return `Food Service will be provided during events`;
    }

    getAllEvents() {
        return this.events1;
    }

    events1 = [
        {
            startDate: `1st November, 2017`,
            endDate: `25th December, 2018`,
            cost: `$250`,
            startTime: '8:00 am'
        },
        {
            startDate: `1st January, 2017`,
            endDate: `25th February, 2018`,
            cost: `$150`,
            startTime: '10:00 am'
        },
        {

            endDate: `4th October, 198`,
            startTime: '9:00 am'
        }
    ];

}