import { IUser, User, UserRole } from "../";
import Speciality from "./speciality.entity";
import { DoctorSubSpeciality } from "./sub-speciality.entity";

interface IDoctor extends IUser {
    //educations: { title: string; description: string; startYear: number; endYear?: number | undefined; }[];
    //experiences: { title: string; description: string; startYear: number; endYear?: number | undefined; }[];
    //awards: { date: number; title: string; description: string; }[];
    //services: string[];
    //businessHours: Map<Day, { start: Time; end: Time; }[]>;
    //locations: IDoctorLocalization[];
    //reviews: IDoctorReview[];

    fixPhone: string;

    arabicFirstName: string;
    arabicLastName: string;
    arabicAddress: string;
    professionalCivility: string;
    arabicProfessionalCivility: string;


    speciality: Speciality;
    subSpecialities: Array<DoctorSubSpeciality>;

    biography: string;

    consultationActs: boolean;
    consultationVaccinations: boolean;
    consultationBiology: boolean;
    consultationRadiology: boolean;
    consultationRefraction: boolean;
    consultationLaser: boolean;
    consultationLens: boolean;

    prescriptionActs: boolean;
    prescriptionBiology: boolean;
    prescriptionRadiology: boolean;
    prescriptionRefraction: boolean;
    prescriptionLaser: boolean;
    prescriptionLens: boolean;

    hasCalender: boolean;
    hasCalenderUpToDate: boolean;

    cnam: string;

    printSpeciality: string;
    printArabicSpeciality: string;
    printAddress: string;
    printArabicAddress: string;
    printFullName: string;
    printArabicFullName: string;

}

export class Doctor extends User implements IDoctor {

    arabicFirstName: string;
    arabicLastName: string;

    arabicAddress: string;

    professionalCivility: string;
    arabicProfessionalCivility: string;


    speciality: Speciality;
    subSpecialities: Array<DoctorSubSpeciality> = [];

    fixPhone: string;

    biography: string;
    //educations: { title: string; description: string; startYear: number; endYear?: number | undefined; }[];
    //experiences: { title: string; description: string; startYear: number; endYear?: number | undefined; }[];
    //awards: { date: number; title: string; description: string; }[];
    //services: string[];
    //businessHours: Map<Day, { start: Time; end: Time; }[]>;
    //locations: IDoctorLocalization[];
    //reviews: IDoctorReview[];


    hasCalender: boolean;
    hasCalenderUpToDate: boolean;

    consultationActs: boolean;
    consultationVaccinations: boolean;
    consultationBiology: boolean;
    consultationRadiology: boolean;
    consultationRefraction: boolean;
    consultationLaser: boolean;
    consultationLens: boolean;

    prescriptionActs: boolean;
    prescriptionBiology: boolean;
    prescriptionRadiology: boolean;
    prescriptionRefraction: boolean;
    prescriptionLaser: boolean;
    prescriptionLens: boolean;
    cnam: string;

    printSpeciality: string;
    printArabicSpeciality: string;
    printAddress: string;
    printArabicAddress: string;
    printFullName: string;
    printArabicFullName: string;

    getArabicFullName(inverted?: boolean): string {
        return inverted ? this.arabicLastName + ' ' + this.arabicFirstName : this.arabicFirstName + ' ' + this.arabicLastName;
    }

    constructor(other?: Partial<IDoctor>) {
        super(other as User);
        this.arabicFirstName = other?.arabicFirstName || "";
        this.arabicLastName = other?.arabicLastName || "";
        this.professionalCivility = other?.professionalCivility || '';
        this.arabicProfessionalCivility = other?.arabicProfessionalCivility || '';
        this.speciality = other?.speciality || new Speciality();
        this.subSpecialities = other?.subSpecialities || [];
        this.fixPhone = other?.fixPhone || '';
        this.biography = other?.biography || '';

        this.consultationBiology = other?.consultationBiology || false;
        this.consultationActs = other?.consultationActs || false;
        this.consultationLaser = other?.consultationLaser || false;
        this.consultationRadiology = other?.consultationRadiology || false;
        this.consultationRefraction = other?.consultationRefraction || false;
        this.consultationVaccinations = other?.consultationVaccinations || false;
        this.consultationLens = other?.consultationLens || false;
        this.prescriptionActs = other?.prescriptionActs || false;
        this.prescriptionBiology = other?.prescriptionBiology || false;
        this.prescriptionLaser = other?.prescriptionLaser || false;
        this.prescriptionRadiology = other?.prescriptionRadiology || false;
        this.prescriptionRefraction = other?.prescriptionRefraction || false;
        this.prescriptionLens = other?.prescriptionLens || false;

        this.hasCalender = other?.hasCalender || false;
        this.hasCalenderUpToDate = other?.hasCalenderUpToDate || false;
        this.arabicAddress = other?.arabicAddress || "";
        this.cnam = other?.cnam || '';


        this.printSpeciality = other?.printSpeciality || "";
        this.printArabicSpeciality = other?.printArabicSpeciality || "";
        this.printAddress = other?.printAddress || "";
        this.printArabicAddress = other?.printArabicAddress || "";
        this.printFullName = other?.printFullName || "";
        this.printArabicFullName = other?.printArabicFullName || "";

        this.role = UserRole.DOCTOR;
    }

    public static fromResponse(res: any): Doctor {
        return new Doctor({
            fixPhone: res.fixPhone,
            arabicLastName: res.arabicLastName,
            arabicFirstName: res.arabicFirstName,
            arabicAddress: res.arabicAddress,
            professionalCivility: res.professionalCivility,
            arabicProfessionalCivility: res.arabicProfessionalCivility,
            biography: res.note,
            consultationActs: res.consultationActs,
            consultationBiology: res.consultationBiology,
            consultationLaser: res.consultationLaser,
            consultationVaccinations: res.consultationVaccinations,
            consultationLens: res.consultationLens,
            consultationRadiology: res.consultationRadiology,
            consultationRefraction: res.consultationRefraction,
            prescriptionActs: res.prescriptionActs,
            prescriptionBiology: res.prescriptionBiology,
            prescriptionLaser: res.prescriptionLaser,
            prescriptionLens: res.prescriptionLens,
            prescriptionRadiology: res.prescriptionRadiology,
            prescriptionRefraction: res.prescriptionRefraction,

            speciality: Speciality.fromResponse(res.speciality || res.specialite),
            subSpecialities: Array.from(res.subSpecialities || [], elm => DoctorSubSpeciality.fromResponse(elm)),
            hasCalender: res.hasCalender,
            hasCalenderUpToDate: res.hasCalenderUpToDate,
            cnam: res.cnam,

            printSpeciality: res.printSpeciality,
            printArabicSpeciality: res.printArabicSpeciality,
            printAddress: res.printAddress,
            printArabicAddress: res.printArabicAddress,
            printFullName: res.printFullName,
            printArabicFullName: res.printArabicFullName,
            ...User.fromResponse(res)
        })
    }
}