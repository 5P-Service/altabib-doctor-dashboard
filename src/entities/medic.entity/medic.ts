import { Doctor } from "../user.entity/doctor.entity";

export interface IMedic {
    idMedicament: number,
    dosage: string,
    co: string,
    nom: string,
    presentation: string,
    nom_generique: string,
    labo: string,
    pays: string,
    amm: string,
    date_amm: string,
    g_p: string,
    details: string,
    medecin: Doctor,
    rcp: string,
    fiche_p:string,
    notice:string,

}

export class Medic implements IMedic {

    idMedicament: number;
    dosage: string;
    co: string;
    nom: string;
    presentation: string;
    nom_generique: string;
    labo: string;
    pays: string;
    amm: string;
    date_amm: string;
    g_p: string;
    details: string;
    medecin: Doctor;
    rcp: string;
    notice:string;
    fiche_p: string;
    constructor(other?: Partial<IMedic>) {
        this.idMedicament = other?.idMedicament || 0;
        this.dosage = other?.dosage || '';
        this.co = other?.co || '';
        this.nom = other?.nom || '';
        this.presentation = other?.presentation || '';
        this.nom_generique = other?.nom_generique || '';
        this.labo = other?.labo || '';
        this.pays = other?.pays || '';
        this.amm = other?.amm || '';
        this.date_amm = other?.date_amm || '';
        this.g_p = other?.g_p || '';
        this.details = other?.details || '';
        this.medecin = other?.medecin || new Doctor();
        this.rcp = other?.rcp || '';
        this.notice=other?.notice ||'';
        this.fiche_p=other?.fiche_p||''
    }


    static fromResponse(res: any): any {
        return new Medic({
            idMedicament: res.id,
            dosage: res.dosage,
            co: res.co,
            nom: res.nom,
            presentation: res.presentation,
            nom_generique: res.nom_generique,
            labo: res.labo,
            pays: res.country,
            amm: res.amm,
            date_amm: res.date_amm,
            g_p: res.g_p,
            details: res.details,
            rcp: res.rcp,
            notice:res.notice,
            fiche_p:res.fiche_p
        })
    }

}