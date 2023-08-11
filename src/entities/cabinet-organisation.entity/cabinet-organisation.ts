// import { IUser, User } from "../user.entity";
import { Doctor } from "../user.entity/doctor.entity";
import Speciality from "../user.entity/doctor.entity/speciality.entity";
import { DoctorSubSpeciality } from "../user.entity/doctor.entity/sub-speciality.entity";
export interface ICabinetOrganisation {
    id: string;
    name: string;
    biography: string;
    foundationYear: number;
    address: string;
    country: string;
    government: string;
    postalCode: number;
    gps_longitude: number;
    gps_altitude: number;
    photo: string;
    coverPhoto: string;
    website: string;
    mobilePhone1: string;
    mobilePhone2: string;
    fixPhone: string;
    fax: string;
    openingTime: string;
    closingTime: string;
    ownerVerified: boolean;
    state: number;
    arabicFirstName: string;
    arabicLastName: string;
    arabicAddress: string;
    email: string;
    professionalCivility: string;
    arabicProfessionalCivility: string;
    speciality:Speciality;
    subSpecialities:Array<DoctorSubSpeciality>;
    owner:Doctor | null
}
export class CabinetOrganisation implements ICabinetOrganisation {
    id: string;
    name: string;
    biography: string;
    foundationYear: number;
    address: string;
    country:string;
    government: string;
    postalCode: number;
    gps_longitude: number;
    gps_altitude: number;
    photo: string;
    coverPhoto: string;
    website: string;
    mobilePhone1: string;
    mobilePhone2: string;
    fixPhone: string;
    fax: string;
    openingTime: string;
    closingTime: string;
    ownerVerified: boolean;
    state: number;
    arabicFirstName: string;
    arabicLastName: string;
    arabicAddress: string;
    email: string;
    professionalCivility: string;
    arabicProfessionalCivility: string;
    owner: Doctor | null;

    constructor(other?: Partial<ICabinetOrganisation>) {
        this.id = other?.id || "";
        this.name = other?.name || "";
        this.biography = other?.biography || "";
        this.foundationYear = other?.foundationYear || 0;
        this.address = other?.address || "";
        this.country = other?.country || "";
        this.government = other?.government || "";
        this.postalCode= other?.postalCode || 0;
        this.gps_longitude= other?.gps_longitude || 0;
        this.gps_altitude= other?.gps_altitude || 0;
        this.photo= other?.photo || '';
        this.coverPhoto= other?.coverPhoto || '';
        this.website= other?.website || '';
        this.mobilePhone1 = other?.mobilePhone1 || "";
        this.mobilePhone2 = other?.mobilePhone2 || "";
        this.fixPhone = other?.fixPhone || "";
        this.fax = other?.fax || "";
        this.openingTime = other?.openingTime || "";
        this.closingTime = other?.closingTime || "";
        this.ownerVerified = other?.ownerVerified || false;
        this.state = other?.state || 0;
        this.arabicFirstName = other?.arabicFirstName || '';
        this.arabicLastName = other?.arabicLastName || '';
        this.arabicAddress = other?.arabicAddress || '';
        this.email = other?.email || '';
        this.professionalCivility = other?.professionalCivility || '';
        this.arabicProfessionalCivility = other?.arabicProfessionalCivility || '';
        this.owner = other?.owner || null;
       this.speciality = other?.speciality|| new Speciality();
       this.subSpecialities = other?.subSpecialities || [];
        // this.birthDate = other?.birthDate || new Date(0);
      
      }
  speciality: Speciality;
  subSpecialities: DoctorSubSpeciality[];
    
    //   mapping objet bac  strectur :
      static fromResponse(res: any):  CabinetOrganisation {
        return new  CabinetOrganisation({
          id: res.id,
          name: res.name,
          biography:res.biography,
          foundationYear: res.foundationYear,
          address: res.address,
          country:res.country,
          government: res.gouvernment,
          postalCode: res.popstalCode,
          gps_longitude: res.gps_longitude,
          gps_altitude: res.gps_altitude,
          photo: res.photo,
          coverPhoto:res.coverPhoto,
          website: res.website,
          mobilePhone1: res.mobilePhone1,
          mobilePhone2: res.mobilePhone2,
          fixPhone: res.fixPhone,
          fax: res.fax,
          openingTime: res.openingTime,
          closingTime: res.closingTime,
          ownerVerified: res.ownerVerified,
          state: res.state,
          arabicFirstName:res.arabicFirstName,
          arabicLastName: res.arabicLastName,
          arabicAddress: res.arabicAddress,
          email: res.email,
          professionalCivility:res.professionalCivility,
          arabicProfessionalCivility:res.arabicProfessionalCivility,
          speciality:Speciality.fromResponse(res.speciality),
          subSpecialities:Array.from(res.subSpecialities,e=>DoctorSubSpeciality.fromResponse(e)),
          // may be null
          owner:res.owner? Doctor.fromResponse(res.owner):null,
        })
      }
}
