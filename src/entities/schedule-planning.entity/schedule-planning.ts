import { TimeBoarding } from "../time-boarding.entity/time-boarding";

export interface ISchedulePlanning {
    id: string;
    startDate: Date;
    endDate: Date;
    timeBoarding: TimeBoarding;
}
export class SchedulePlanning implements ISchedulePlanning {
    id: string;
    startDate: Date;
    endDate: Date;
    timeBoarding: TimeBoarding;
    constructor(other?: Partial<ISchedulePlanning>) {
        this.id = other?.id || '';
        this.startDate = other?.startDate || new Date(0);
        this.endDate = other?.endDate || new Date(0);
        this.timeBoarding = other?.timeBoarding || new TimeBoarding();
    }
}