import { Radiology } from "../radiology.entity/radiology";
import { Doctor } from "../user.entity/doctor.entity";

export interface IBiology {
    id_BIO: number;
    param_Bio: string;
    norme_Bio: string;
    indication_Bio: string;
    element_Bio: string;
    doctor?: Doctor
}
export class Biology implements IBiology {

    id_BIO: number;
    param_Bio: string;
    norme_Bio: string;
    indication_Bio: string;
    element_Bio: string;
    doctor?: Doctor
    constructor(other?: Partial<IBiology>) {
        this.id_BIO = other?.id_BIO || 0;
        this.param_Bio = other?.param_Bio || '';
        this.element_Bio = other?.element_Bio || '';
        this.norme_Bio = other?.norme_Bio || '';
        this.indication_Bio = other?.indication_Bio || ' ';
        this.doctor = other?.doctor || new Doctor
    }

    static fromResponse(res: any): Biology {
        return new Biology({
            id_BIO: res.id_BIO || res.id,
            param_Bio: res.param_Bio || res.param,
            norme_Bio: res.norme_Bio || res.norm,
            indication_Bio: res.indication_Bio || res.indication ,
            element_Bio: res.element_Bio  || res.element,
            doctor: res.doctor
        })
    }
}