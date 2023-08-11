import { MILLISECONDS_IN_MINUTE } from "src/app/utils/date.util";
import { EDalyTimeSlotLocation } from "../daly-time-slot.entity/daly-time-slot";

export interface IDoctorDisponibility {
    date: Date,
    startTime: number,
    duration: number,
    private:boolean,
    location: EDalyTimeSlotLocation
}

export class DoctorDisponibility implements IDoctorDisponibility {
    date: Date;
    startTime: number;
    duration: number;
    private:boolean;
    location: EDalyTimeSlotLocation;
    constructor(other?: Partial<IDoctorDisponibility>) {
        this.date = other?.date || new Date(0);
        this.startTime = other?.startTime || 0;
        this.duration = other?.duration || 0;
        this.private=other?.private||false;
        this.location = other?.location || EDalyTimeSlotLocation.ATSITE;
    }

    get endTime(): number {
        return this.startTime + (this.duration * MILLISECONDS_IN_MINUTE);
    }
    public static fromResponse(res: any): DoctorDisponibility {
        return new DoctorDisponibility({
            date: new Date(res.date),
            location: res.location,
            duration: res.duration,
            startTime: res.startTime,
            private:res.private
        });
    }

}