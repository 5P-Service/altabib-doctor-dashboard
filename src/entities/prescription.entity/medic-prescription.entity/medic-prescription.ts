import { Medic } from "../../medic.entity/medic";

export interface IMedicPrescription {
    id: string,
    medic: Medic;
    duration: number;
    posology: string;
    note: string;
    substitutionMedicPrescription: Object
}

export class MedicPrescription implements IMedicPrescription {
    id: string;
    medic: Medic;
    duration: number;
    posology: string;
    note: string;
    substitutionMedicPrescription: any
    constructor(other?: Partial<MedicPrescription>) {
        this.id = other?.id || '';
        this.medic = other?.medic || new Medic();
        this.duration = other?.duration || 0;
        this.posology = other?.posology || '';
        this.note = other?.note || '';
        this.substitutionMedicPrescription = other?.substitutionMedicPrescription || null
    }


    public static fromResponse(res: any): MedicPrescription {
        return new MedicPrescription({
            id: res.id,
            medic: Medic.fromResponse(res.medic),
            duration: Number(res.duration || res.prescriptionDuree),
            note: res.note || res.prescriptionNote,
            posology: res.prescriptionPosologie || res.dosage,
            substitutionMedicPrescription: res.substitutionMedicPrescription
        })
    }
}
