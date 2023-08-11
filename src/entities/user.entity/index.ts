import { MILLISECONDS_IN_DAY, MILLISECONDS_IN_MINUTE } from "src/app/utils/date.util";
import { Orgianization } from "../orgianization.entity/orgianization";
export enum EAccountStatus {
  ENABLED
}
export enum EGroupSanguin {
  A_PLUS,
  A_MOINS,
  B_PLUS,
  B_MOINS,
  AB_PLUS,
  AB_MOINS,
  O_PLUS,
  O_MOINS,

}

export enum UserRole {
  PATIENT,
  DOCTOR,
  DOCTOR_SECRETARY,
  PHARMACIST,
  ADMIN,
}
export enum UserGender {
  HOMME,
  FEMME,
}
export enum UserCivility {
  UNKNOWN,
  MD,
  M,
  DR,
  PR,
}
export enum EUserSocialCivility {
  SIGNLE,
  MARIED,
  DIVORCED,
}
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string | null;
  country: string;
  address: string;
  government: string,
  mobilePhone1: string;
  mobilePhone2: string;
  birthDate: Date;
  gender: UserGender;
  socialCivility: EUserSocialCivility;
  sanguineGroup: EGroupSanguin;
  assuranceType: string;
  assuranceName: string;
  assuranceReference: string;
  avatar: string;
  role: UserRole;
  password?: string;
  accessToken?: string;
  orgianization: Orgianization | null;
  accountStatus: EAccountStatus;
  isAccompaniment: boolean;
  enabled: boolean;
}

export class User implements IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string | null;
  country: string;
  address: string;
  government: string;
  mobilePhone1: string;
  mobilePhone2: string;
  birthDate: Date;
  gender: UserGender;
  socialCivility: EUserSocialCivility;
  sanguineGroup: EGroupSanguin;
  assuranceType: string;
  assuranceName: string;
  assuranceReference: string;
  avatar: string;
  role: UserRole;
  accessToken?: string | undefined;
  orgianization: Orgianization | null;
  accountStatus: EAccountStatus;
  isAccompaniment: boolean;
  enabled: boolean;

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


  constructor(other?: Partial<IUser>) {
    this.id = other?.id || "";
    this.firstName = other?.firstName || "";
    this.lastName = other?.lastName || "";
    this.email = other?.email || "";
    this.country = other?.country || "";
    this.address = other?.address || "";
    this.government = other?.government || "";
    this.mobilePhone1 = other?.mobilePhone1 || "";
    this.mobilePhone2 = other?.mobilePhone2 || "";
    this.birthDate = other?.birthDate || new Date(0);
    this.gender = other?.gender || UserGender.HOMME;
    this.socialCivility = other?.socialCivility || EUserSocialCivility.SIGNLE;
    this.sanguineGroup = other?.sanguineGroup || EGroupSanguin.A_PLUS;
    this.assuranceType = other?.assuranceType || "";
    this.assuranceName = other?.assuranceName || "";
    this.assuranceReference = other?.assuranceReference || "";

    this.avatar = other?.avatar || "";
    this.role = other?.role || UserRole.PATIENT;

    this.accessToken = other?.accessToken;
    this.orgianization = other?.orgianization || null;
    this.accountStatus = other?.accountStatus || EAccountStatus.ENABLED;
    this.isAccompaniment = other?.isAccompaniment || false;
    this.enabled = other?.enabled || false;
  }


  static fromResponse(res: any): User {
    return new User({
      id: res.id,
      firstName: res.firstName,
      lastName: res.lastName,
      email: res.email,
      country: res.country,
      address: res.address,
      government: res.government,
      mobilePhone1: res.mobilePhone1,
      mobilePhone2: res.mobilePhone2,
      birthDate: res.birthDate ? new Date(res.birthDate) : new Date(),
      gender: res.gender,
      socialCivility: res.socialCivility,
      sanguineGroup: res.sanguineGroup,
      avatar: res.avatar,
      role: ["User", "Medecin", "Secretary", 'Pharmacist', "Admin"].indexOf(res.role),
      assuranceType: res.assuranceType,
      assuranceName: res.assuranceName,
      assuranceReference: res.assuranceReference,

      orgianization: res.orgianization || null,
      accountStatus: res.accountStatus,
      isAccompaniment: res.isAccompaniment,
      enabled: res.enabled
    })
  }
}
  /*calculAge(age: Date): void {
let d = new Date(age);
this.age = new Date().getFullYear() - d.getFullYear();
var m = new Date().getMonth() - d.getMonth();
if (m < 0 || (m === 0 && new Date().getDate() < d.getDate())) {
this.age = this.age - 1;
}
}*/