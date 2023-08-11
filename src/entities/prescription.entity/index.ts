import * as moment from 'moment';
import { Appointment } from '../appointment.entity';
import { Biology } from '../biology.entity/biology';
import { Medic } from '../medic.entity/medic';
import { Radiology } from '../radiology.entity/radiology';
import { BioPrescription } from './bio-prescription.entity/bio-prescription';
import { IMedicPrescription, MedicPrescription } from './medic-prescription.entity/medic-prescription';
import { RadioPrescription } from './radio-prescription.entity/radio-prescription';

export interface IPrescription {
    id: string;
    date: Date,
    medics: Array<MedicPrescription>;
    radiologies: Array<RadioPrescription>;
    biologies: Array<BioPrescription>;
    appointment: Appointment;
    substitution: IMedicPrescription[];
}


export class Prescription implements IPrescription {
    id: string;
    date: Date;
    medics: Array<MedicPrescription>;
    radiologies: Array<RadioPrescription>;
    biologies: Array<BioPrescription>;
    appointment: Appointment
    substitution: IMedicPrescription[];

    constructor(other?: Partial<IPrescription>) {
        this.date = other?.date || new Date(0);
        this.medics = other?.medics || [];
        this.radiologies = other?.radiologies || [];
        this.biologies = other?.biologies || [];
        this.id = other?.id || '';
        this.appointment = other?.appointment || new Appointment()
        this.substitution = other?.substitution || []
    }

    public static fromResponse(res: any): Prescription {
        return new Prescription({
            id: res.id || res.prescriptionId,
            date: new Date(res.date),
            medics: Array.from(res.medics || res.prescriptionMedicaments, (elm: any) => MedicPrescription.fromResponse(elm)),
            biologies: Array.from(res.biologies || res.prescriptionRadiologies, (elm: any) => BioPrescription.fromResponse(elm)),
            radiologies: Array.from(res.radiologies || res.prescriptionBiologies, (elm: any) => RadioPrescription.fromResponse(elm)),
            appointment: Appointment.fromResponse(res.appointment)
        });
    }

    get requestPayload(): any {
        return {
            date: moment(this.date).format('DD/MM/YYYY'),
            prescriptionMedicaments: Array.from(this.medics, item => {
                return {
                    prescriptionDuree: String(item.duration),
                    prescriptionNote: item.note,
                    prescriptionPosologie: item.posology,
                    medic: { idMedicament: item.medic.idMedicament }
                }
            }),
            prescriptionBiologies: Array.from(this.biologies, bio => {
                return {
                    note: bio.note,
                    bio: { id_BIO: String(bio.biology.id_BIO) }
                }
            }),
            prescriptionRadiologies: Array.from(this.radiologies, item => {
                return {
                    note: item.note, radio: { id_RADIO: String(item.radio.id_RADIO) }
                }
            })
        }
    }
}
