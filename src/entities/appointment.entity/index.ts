import { MILLISECONDS_IN_DAY, MILLISECONDS_IN_HOUR, MILLISECONDS_IN_MINUTE } from "src/app/utils/date.util"
import { EDalyTimeSlotLocation } from "../daly-time-slot.entity/daly-time-slot"

export enum EAppointmentState {
    PENDING,
    ACCEPTED,
    REJECTED,
    DONE
}

export enum EAppointmentHistoricalState {
    EXPIRED,
    ACTUAL,
    SNOOZED
}

export interface IAppointement {
    id: string;
    date: Date;
    startTime: number;
    duration: number;
    location: EDalyTimeSlotLocation;
    status: EAppointmentState;
    motif: string;
    isEmergency: boolean;
    hasPrescription: boolean;
    hasConsultation: boolean;
}


export class Appointment implements IAppointement {
    id: string;
    date: Date;
    startTime: number;
    duration: number;
    location: EDalyTimeSlotLocation;
    status: EAppointmentState;
    motif: string;
    isEmergency: boolean;
    hasPrescription: boolean;
    hasConsultation: boolean;
    historicalStatus: EAppointmentHistoricalState;
    get startDateTime(): Date { return new Date(new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate()).getTime() + this.startTime); }

    constructor(other?: Partial<Appointment>) {
        this.id = other?.id || '';
        this.date = other?.date || new Date(0);
        this.startTime = other?.startTime || 0;
        this.duration = other?.duration || 0;
        this.location = other?.location || EDalyTimeSlotLocation.ATSITE;
        this.motif = other?.motif || '';
        this.status = other?.status || EAppointmentState.PENDING;
        this.isEmergency = other?.isEmergency || false;
        this.hasConsultation = other?.hasConsultation || false;
        this.hasPrescription = other?.hasPrescription || false;
        this.historicalStatus = other?.historicalStatus || EAppointmentHistoricalState.EXPIRED;
    }

    get isOld(): boolean {
        return (this.date.getTime() + MILLISECONDS_IN_DAY - 1) <= new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime();
    }

    public static fromResponse(res: any): Appointment {
        return new Appointment({
            id: res.id,
            startTime: res.startTime,
            duration: res.duration,
            location: res.location,
            status: res.status,
            motif: res.motif,
            date: new Date(res.date),
            isEmergency: res.isEmergency,
            hasConsultation: res.hasConsultation,
            hasPrescription: res.hasPrescription,
            historicalStatus: res.historicalStatus
        });
    }
}