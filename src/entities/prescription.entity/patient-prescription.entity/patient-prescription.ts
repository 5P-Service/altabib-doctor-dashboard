import { Appointment } from "../../appointment.entity";
import { Prescription } from "..";
import { Doctor } from "../../user.entity/doctor.entity";

export class PatientPrescription extends Prescription {
  doctor: Doctor;
  constructor(other?: Partial<PatientPrescription>) {
    super(other)
    this.doctor = other?.doctor || new Doctor()
  }

  public static fromResponse(res: any): PatientPrescription {
    return new PatientPrescription({
      doctor: res.doctor?Doctor.fromResponse(res.doctor):new Doctor(), ...Prescription.fromResponse(res)
    })
  }
}