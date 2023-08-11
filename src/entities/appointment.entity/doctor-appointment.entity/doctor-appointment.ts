import { Appointment } from "..";
import { User } from "../../user.entity";

export class DoctorAppointment extends Appointment {
    patient: User;

    constructor(other?: Partial<DoctorAppointment>) {
        super(other)
        this.patient = other?.patient || new User();

    }

    public static fromResponse(res: any): DoctorAppointment {
        return new DoctorAppointment({
            patient: User.fromResponse(res.patient), ...Appointment.fromResponse(res)
        });
    }
}
