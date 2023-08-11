import { Doctor } from "../user.entity/doctor.entity";

enum RadioType {
    scanner,
    radio,
    IRM,
    Endoscopique,
    Scintigraphie,
}

export interface IRadiology {
    id_RADIO: string;
    nom_Radio: string;
    type_Radio: RadioType | string;
    doctor: Doctor
}
export class Radiology implements IRadiology {

    id_RADIO: string;
    nom_Radio: string;
    type_Radio: RadioType | string;
    doctor: Doctor
    constructor(other?: Partial<IRadiology>) {
        this.id_RADIO = other?.id_RADIO || '';
        this.nom_Radio = other?.nom_Radio || '';
        this.type_Radio = other?.type_Radio || RadioType.radio || '';
        this.doctor = other?.doctor || new Doctor()
    }

    static fromResponse(res: any): Radiology {
        return new Radiology({
            id_RADIO: res.id,
            nom_Radio: res.name,
            type_Radio: ["scanner", "radio", "IRM", "Endoscopique", "Scintigraphie"][res.type],
            doctor: res.doctor
        })
    }

    stringType(): string {
        switch (this.type_Radio) {
            case RadioType.IRM: return 'IRM';
            case RadioType.Endoscopique: return 'Endoscopique';
            case RadioType.Scintigraphie: return 'Scintigraphie';
            case RadioType.scanner: return 'Scanner';
            default: return 'Radio';
        }
    }
}