import { Biology } from "../../biology.entity/biology";
import { Radiology } from "../../radiology.entity/radiology";

export interface IRadioPrescription {
    id: string;
    note: string;
    radio: Radiology;
}

export class RadioPrescription implements IRadioPrescription {
    id: string;
    note: string;
    radio: Radiology;
    constructor(other?: Partial<IRadioPrescription>) {
        this.id = other?.id || '';
        this.note = other?.note || '';
        this.radio = other?.radio || new Radiology()
    }

    static fromResponse(res: any): RadioPrescription {
        return new RadioPrescription({
            id: res.id,
            note: res.note,
            radio: {
                id_RADIO: res.radio.id,
                type_Radio: res.radio.type,
                nom_Radio: res.radio.name,
                doctor: res.doctor,
                stringType: null as any
            }
        })
    }
}
