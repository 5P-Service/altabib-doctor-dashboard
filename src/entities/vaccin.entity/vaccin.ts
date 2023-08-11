import { Doctor } from '../user.entity/doctor.entity/index';
export interface IVaccin {
    id_Vaccin: string,
    nom_Labo_Vaccin: string,
    nom_Vaccin: string,
    nom_commercial_Vaccin: string,
    note_Vaccin: string,
    doctor?: Doctor
}

export class Vaccin implements IVaccin {
    id_Vaccin: string;
    nom_Labo_Vaccin: string;
    nom_Vaccin: string;
    nom_commercial_Vaccin: string;
    note_Vaccin: string;
    doctor: Doctor
    constructor(other?: Partial<IVaccin>) {
        this.id_Vaccin = other?.id_Vaccin || '';
        this.nom_Labo_Vaccin = other?.nom_Labo_Vaccin || '';
        this.nom_Vaccin = other?.nom_Vaccin || '',
            this.nom_commercial_Vaccin = other?.nom_commercial_Vaccin || '',
            this.note_Vaccin = other?.note_Vaccin || '';
        this.doctor = other?.doctor || new Doctor
    }


    public static fromReponse(res: any): Vaccin {
        return res.doctor !== null ? new Vaccin({
            id_Vaccin: res.id_Vaccin,
            nom_commercial_Vaccin: res.nom_commercial_Vaccin,
            nom_Vaccin: res.nom_Vaccin,
            note_Vaccin: res.note_Vaccin,
            nom_Labo_Vaccin: res.nom_Labo_Vaccin,
            doctor: Doctor.fromResponse(res.doctor)
        }) : new Vaccin({
            id_Vaccin: res.id_Vaccin,
            nom_commercial_Vaccin: res.nom_commercial_Vaccin,
            nom_Vaccin: res.nom_Vaccin,
            note_Vaccin: res.note_Vaccin,
            nom_Labo_Vaccin: res.nom_Labo_Vaccin,
        })

    }
}

