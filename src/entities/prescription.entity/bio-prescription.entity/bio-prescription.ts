import { Biology } from "../../biology.entity/biology";

export interface IBioPrescription {
    id: string;
    note: string;
    biology: Biology;
}
export class BioPrescription implements IBioPrescription {
    id: string;
    note: string;
    biology: Biology;
    constructor(other?: Partial<IBioPrescription>) {
        this.id = other?.id || '';
        this.note = other?.note || '';
        this.biology = other?.biology || new Biology()
    }

    static fromResponse(res: any): BioPrescription {
        return new BioPrescription({
            id: res.id,
            note: res.note,
            biology: {
                id_BIO: res.bio ? res.bio.id_BIO : res.biology.id,
                element_Bio: res.bio ? res.bio.element_Bio : res.biology.element,
                norme_Bio: res.bio ? res.bio.norme_Bio : res.biology.norm,
                indication_Bio: res.bio ? res.bio.indication_Bio : res.biology.indication,
                param_Bio: res.bio ? res.bio.param_Bio : res.biology.param
            }
        })
    }
}
