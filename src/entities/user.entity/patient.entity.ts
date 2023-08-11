import { IUser, User, UserCivility, EUserSocialCivility, UserGender, UserRole } from ".";

interface IPatient extends IUser {
    accompanyName: string,
    accompanyMobile: string;
    note: string;
    patientPays: string,
    patientAdress: string,
    patientGroupSanguin: string
}

export class Patient extends User implements IPatient {
    accompanyName: string;
    accompanyMobile: string;
    note: string;
    patientPays: string;
    patientAdress: string;
    patientGroupSanguin: string
    constructor(other?: Partial<IPatient>) {
        super(other);
        this.role = UserRole.PATIENT;
        this.accompanyName = other?.accompanyName || '';
        this.accompanyMobile = other?.accompanyMobile || '';
        this.note = other?.note || '';
        this.patientPays = other?.patientPays || '';
        this.patientAdress = other?.patientAdress || '';
        this.patientGroupSanguin = other?.patientGroupSanguin || ''
    }
}
