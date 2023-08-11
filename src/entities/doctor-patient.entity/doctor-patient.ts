import * as moment from "moment";
import { EGroupSanguin, EUserSocialCivility, User, UserGender } from "../user.entity";

export interface IDoctorPatient {
  id: string;
  ref: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  mobilePhone1: string;
  mobilePhone2: string;
  birthDate: Date;
  avatar: string;
  appointments_amount: number;
  prescriptions_amount: number;
  consultations_amount: number;
  last_appointment?: Date;
  last_consultation?: Date;
  last_prescription?: Date;


  country: string;
  address: string;
  government: string;
  gender: UserGender;
  socialCivility: EUserSocialCivility;
  sanguineGroup: EGroupSanguin;
  assuranceType: string;
  assuranceName: string;
  assuranceReference: string;
  accompanist: User | null;
}
export class DoctorPatient implements IDoctorPatient {

  id: string;
  ref: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  mobilePhone1: string;
  mobilePhone2: string;
  birthDate: Date;
  avatar: string;
  appointments_amount: number;
  prescriptions_amount: number;
  consultations_amount: number;
  last_appointment?: Date;
  last_consultation?: Date;
  last_prescription?: Date;

  country: string;
  address: string;
  government: string;
  gender: UserGender;
  socialCivility: EUserSocialCivility;
  sanguineGroup!: EGroupSanguin;
  assuranceType!: string;
  assuranceName!: string;
  assuranceReference!: string;
  accompanist: User | null;

  get old(): number {
    let d = new Date(this.birthDate);
    let age = new Date().getFullYear() - d.getFullYear();
    var m = new Date().getMonth() - d.getMonth();
    if (m < 0 || (m === 0 && new Date().getDate() < d.getDate())) {
      age = age - 1;
    }
    return age;
  }

  getFullName(inverted?: boolean): string {
    return inverted ? this.lastName + ' ' + this.firstName : this.firstName + ' ' + this.lastName;
  }

  constructor(other?: Partial<IDoctorPatient>) {
    this.id = other?.id || '';
    this.ref = other?.ref || '';
    this.firstName = other?.firstName || '';
    this.lastName = other?.lastName || '';
    this.country = other?.country || '';
    this.address = other?.address || '';
    this.government = other?.government || '';
    this.gender = other?.gender || UserGender.HOMME;
    this.socialCivility = other?.socialCivility || EUserSocialCivility.SIGNLE;
    this.sanguineGroup = other?.sanguineGroup!;
    this.assuranceType = other?.assuranceType!;
    this.assuranceName = other?.assuranceName!;
    this.assuranceReference = other?.assuranceReference!;
    this.accompanist = other?.accompanist || null;
    this.role = other?.role || '';
    this.email = other?.email || '';
    this.mobilePhone1 = other?.mobilePhone1 || '';
    this.mobilePhone2 = other?.mobilePhone2 || '';
    this.birthDate = other?.birthDate || new Date();
    this.avatar = other?.avatar || '';
    this.appointments_amount = other?.appointments_amount || 0;
    this.consultations_amount = other?.consultations_amount || 0;
    this.prescriptions_amount = other?.prescriptions_amount || 0;
    this.last_appointment = other?.last_appointment;
    this.last_consultation = other?.last_consultation;
    this.last_prescription = other?.last_prescription;
  }



  public static fromResponse(res: any): DoctorPatient {
    return new DoctorPatient({
      id: res.id,
      firstName: res.firstName,
      lastName: res.lastName,
      role: res.role,
      email: res.email,
      mobilePhone1: res.mobilePhone1,
      mobilePhone2: res.mobilePhone2,
      birthDate: res.birthDate,
      avatar: res.avatar,
      appointments_amount: Number(res.appointmentsAmount),
      prescriptions_amount: Number(res.prescriptionsAmount),
      consultations_amount: Number(res.consultationsAmount),
      last_appointment: res.lastAppointment ? new Date(res.lastAppointment) : undefined,
      last_consultation: res.lastConsultation ? new Date(res.lastConsultation) : undefined,
      last_prescription: res.lastPrescription ? new Date(res.lastPrescription) : undefined,

      ref: res.ref,
      country: res.country,
      address: res.address,
      government: res.government,
      gender: res.gender,
      socialCivility: res.socialCivility,
      sanguineGroup: res.sanguineGroup,
      assuranceType: res.assuranceType,
      assuranceName: res.assuranceName,
      assuranceReference: res.assuranceReference,
      accompanist: res.accompanist ? User.fromResponse(res.accompanist) : null
    });
  }
}