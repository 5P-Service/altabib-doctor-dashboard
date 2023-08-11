import { IUser, User } from "..";
import { Doctor } from ".";

interface IDoctorSecretary extends IUser {
    doctor: Doctor;
}
export class DoctorSecretary extends User implements IDoctorSecretary {
    doctor: Doctor;
    constructor(other?: Partial<IDoctorSecretary>) {
        super(other as User);
        this.doctor = other?.doctor || new Doctor();
    }

    public static fromResponse(res: any): DoctorSecretary {
        return new DoctorSecretary({ doctor: res.doctor ? Doctor.fromResponse(res.doctor) : new Doctor(), ...User.fromResponse(res) });
    }
}