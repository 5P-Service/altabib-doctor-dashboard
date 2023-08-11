import { Prescription } from "..";
import { User } from "../../user.entity";

export class DoctorPrescription extends Prescription {
    patient: User;
    constructor(other?: Partial<DoctorPrescription>) {
        super(other)
        this.patient = other?.patient || new User()
    }

    public static fromResponse(res: any): DoctorPrescription {
        return new DoctorPrescription({
            patient: User.fromResponse(res.patient), ...Prescription.fromResponse(res)
        })
    }
}