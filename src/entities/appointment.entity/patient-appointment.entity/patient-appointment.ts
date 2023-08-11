import { Appointment } from "..";
import { Doctor } from "../../user.entity/doctor.entity";

export class PatientAppointment extends Appointment {
    doctor: Doctor;
    constructor(other?: Partial<PatientAppointment>) {
        super(other)
        this.doctor = other?.doctor || new Doctor();
    }

    static fromResponse(res: any) {
        return new PatientAppointment({
            doctor: Doctor.fromResponse(res.doctor), ...Appointment.fromResponse(res)
        });
    }
}
