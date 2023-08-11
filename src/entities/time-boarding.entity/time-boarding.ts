import { DalyTimeSlot } from "../daly-time-slot.entity/daly-time-slot";

export class TimeBoarding {
    id: string;
    title: string;
    dailyTimeSlots: Array<DalyTimeSlot>

    constructor(other?: Partial<TimeBoarding>) {
        this.id = other?.id || '';
        this.title = other?.title || '';
        this.dailyTimeSlots = other?.dailyTimeSlots || [];

    }

}