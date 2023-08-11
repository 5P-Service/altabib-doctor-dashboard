
export enum EDalyTimeSlotLocation {
    ATSITE,
    ONLINE,
    BOTH
}

export interface IDalyTimeSlot {
    id: string,
    startTime: number,
    endTime: number,
    location: EDalyTimeSlotLocation,
    duration: number;
    private:boolean;
    dayIndex:number;
}

export class DalyTimeSlot implements IDalyTimeSlot {
    id: string;
    startTime: number;
    endTime: number;
    location: number;
    duration: number;
    dayIndex:number;
    private: boolean;
    constructor(other?: Partial<IDalyTimeSlot>) {
        this.id = other?.id || '';
        this.startTime = other?.startTime || 0;
        this.endTime = other?.endTime || 0;
        this.location = other?.location || 0;
        this.duration = other?.duration || 0;
        this.dayIndex=other?.dayIndex ||0;
        this.private=other?.private ||false
    }
}