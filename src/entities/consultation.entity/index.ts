import { MILLISECONDS_IN_HOUR, MILLISECONDS_IN_MINUTE } from "src/app/utils/date.util";
import { Act } from "../act.entity/act";
import { DoctorAppointment } from "../appointment.entity/doctor-appointment.entity/doctor-appointment";
import { Biology } from "../biology.entity/biology";
import { ParametereSante } from "../parametre-sante.entity/paramtere-sante";
import { Radiology } from "../radiology.entity/radiology";
import { Vaccin } from "../vaccin.entity/vaccin";
import { ConsultationMotif } from "./consultation-motif.entity/consultation-motif";
import * as moment from "moment";

export enum consultationEtat {
  UNKNOWN,
  A_DISTANCE,
  EN_PRESENTIEL,
}

export interface IRadiologyConsultationItem {
  id_consultation_radio: string;
  radio: Radiology;
  note_consultation_radio: string;
  date_consultation_radio: Date;
}

export class RadiologyConsultationItem implements IRadiologyConsultationItem {
  id_consultation_radio: string;
  note_consultation_radio: string;
  date_consultation_radio: Date;
  radio: Radiology;

  constructor(other?: Partial<IRadiologyConsultationItem>) {
    this.id_consultation_radio = other?.id_consultation_radio || "";
    this.note_consultation_radio = other?.note_consultation_radio || "";
    this.radio = other?.radio || new Radiology();
    this.date_consultation_radio = other?.date_consultation_radio || new Date();
  }

  static fromResponse(res: any): RadiologyConsultationItem {
    return new RadiologyConsultationItem({
      id_consultation_radio: res.id_consultation_radio,
      note_consultation_radio: res.note_consultation_radio,
      radio: Radiology.fromResponse(res.radio),
      date_consultation_radio: res.date_consultation_radio
    })
  }
}

export interface IVaccinConsultationItem {
  id: string;
  date_consultation_vaccin: Date;
  note_consultation_vaccin: string;
  numLot_consultation_vaccin: string;
  vaccin: Vaccin;
}
export class VaccinConsultationItem implements IVaccinConsultationItem {
  id: string;
  date_consultation_vaccin: Date;
  note_consultation_vaccin: string;
  numLot_consultation_vaccin: string;
  vaccin: Vaccin;
  constructor(other?: Partial<IVaccinConsultationItem>) {
    (this.id = other?.id || ""),
      (this.date_consultation_vaccin =
        other?.date_consultation_vaccin || new Date()),
      (this.note_consultation_vaccin = other?.note_consultation_vaccin || ""),
      (this.numLot_consultation_vaccin =
        other?.numLot_consultation_vaccin || ""),
      (this.vaccin = other?.vaccin || new Vaccin());
  }
}
export interface IBiologyConsultationItem {
  id: string;
  note: string;
  biology: Biology;
  date: Date;
  value: string;
}
export class BiologyConsultationItem implements IBiologyConsultationItem {

  id: string;
  note: string;
  date: Date;
  constructor(other?: Partial<IBiologyConsultationItem>) {
    this.id = other?.id || "";
    this.note = other?.note || "";
    this.biology = other?.biology || new Biology();
    this.value = other?.value || "";
    this.date = other?.date || new Date();
  }
  biology: Biology;
  value: string;

  static fromResponse(res: any): BiologyConsultationItem {
    return new BiologyConsultationItem({
      id: res.id,
      note: res.note,
      biology: Biology.fromResponse(res.bio),
      value: res.value,
      date: res.date
    })
  }
}

export interface IActeConsultationItem {
  id_consultation_acte: string;
  montant_consultation_acte: Number;
  note_consultation_acte: string;
  date_consultation_acte: Date;
  act: Act;
}

export class ActeConsultationItem implements IActeConsultationItem {
  id_consultation_acte: string;
  montant_consultation_acte: Number;
  note_consultation_acte: string;
  date_consultation_acte: Date;
  act: Act;

  constructor(other?: Partial<IActeConsultationItem>) {
    this.date_consultation_acte = other?.date_consultation_acte || new Date();
    this.id_consultation_acte = other?.id_consultation_acte || "";
    this.montant_consultation_acte = other?.montant_consultation_acte || other?.act?.cnam_ACT_PRIX_U || 0;
    this.note_consultation_acte = other?.note_consultation_acte || "";
    this.act = other?.act || new Act();
  }
}

export interface IConsultationParametreSanteItem {
  id: string;
  parametre: ParametereSante;
  value: any;
}
export class DoctorParametereSante {
  id: string;
  target: ParametereSante;
  isPrescription: boolean;
  order: number;
  prescriptionName: string;
  activated: boolean;
  constructor(other?: Partial<DoctorParametereSante>) {
    this.target = other?.target || new ParametereSante();
    this.order = other?.order || 0;
    this.prescriptionName = other?.prescriptionName || "";
    this.isPrescription = other?.isPrescription || false;
    this.id = other?.id || "";
    this.activated = other?.activated || false;
  }

  static fromResponse(res: any): DoctorParametereSante {
    return new DoctorParametereSante({
      id: res.psmId,
      order: res.rangeIndex,
      isPrescription: res.pprescription,
      prescriptionName: res.pprescriptionnom,
      target: ParametereSante.fromResponse(res.param || new ParametereSante()),
      activated: res.state,
    });
  }
}

export class ConsultationParametreSanteItem
  implements IConsultationParametreSanteItem {
  id: string;
  parametre: ParametereSante;
  value: any;
  constructor(other?: Partial<IConsultationParametreSanteItem>) {
    this.id = other?.id || "";
    this.parametre = other?.parametre || new ParametereSante();
    this.value =
      other?.value || [null, 0, "", false][this.parametre.type];
  }

  static fromResponse(res: any) {
    const parametereSante: ParametereSante = ParametereSante.fromResponse(
      res.paramSante || new ParametereSante()
    );
    return new ConsultationParametreSanteItem({
      id: res.paramSanteValueId,
      parametre: parametereSante,
      value: [
        "",
        Number(res.value),
        res.value,
        res.value == "" || res.value == "false"
          ? false
          : res.value === "true"
            ? true
            : "",
      ][parametereSante.type],
    });
  }
}
export class Consultation {
  id: string;
  consultationDate: Date;
  assurance: string;
  assuranceMatricule: string;
  motifTags: Array<ConsultationMotif>;
  consultationHeureDebut: number;
  // consultationHeureFin: Date;
  consultationHistoireMaladie: string;
  consultationExamenClinique: string;
  diagnosticTags: Array<any>;
  diagnostic: string;
  consultationExamenDemande: string;
  montant: number;
  appointment: DoctorAppointment;

  montantRegle: string;
  note: string;
  parametresSante: Array<ConsultationParametreSanteItem>;
  radiologies: Array<IRadiologyConsultationItem>;
  biologies: Array<IBiologyConsultationItem>;
  vaccines: Array<IVaccinConsultationItem>;
  actes: Array<IActeConsultationItem>;


  constructor(other?: Partial<Consultation>) {


    this.id = other?.id || "";
    this.consultationDate = other?.consultationDate || new Date();
    this.consultationHeureDebut = other?.consultationHeureDebut || 0;
    // this.consultationHeureFin = other?.consultationHeureFin || new Date();
    this.assurance = other?.assurance || "";
    this.motifTags = other?.motifTags || Array<any>();
    this.assuranceMatricule = other?.assuranceMatricule || "";
    this.consultationHistoireMaladie = other?.consultationHistoireMaladie || "";
    this.consultationExamenClinique = other?.consultationExamenClinique || "";
    this.diagnosticTags = other?.diagnosticTags || Array<any>();
    (this.diagnostic = other?.diagnostic || ""),
      (this.montant = other?.montant || 0);
    this.montantRegle = other?.montantRegle || "0";
    this.consultationExamenDemande = other?.consultationExamenDemande || "";
    this.note = other?.note || "";
    this.radiologies = other?.radiologies || [];
    this.biologies = other?.biologies || [];
    this.vaccines = other?.vaccines || [];
    this.parametresSante = other?.parametresSante || [];
    this.appointment = other?.appointment || new DoctorAppointment();
    this.actes = other?.actes || [];

  }
  public static fromResponse(res: any): Consultation {
    return new Consultation({
      appointment: DoctorAppointment.fromResponse(res.appointment),
      id: res.consultationId,
      consultationDate: new Date(
        Number(String(res.consultationDate).split("/")[2]),
        Number(String(res.consultationDate).split("/")[1]) - 1,
        Number(String(res.consultationDate).split("/")[0])
      ),
      consultationHeureDebut: res.consultationHeureDebut ? (Number(res.consultationHeureDebut.split(':')[0] || 0) * MILLISECONDS_IN_HOUR) + (Number(res.consultationHeureDebut.split(':')[1] || 0) * MILLISECONDS_IN_MINUTE) : 0,
      // consultationHeureFin: new Date(res.consultationHeureFin),
      motifTags: res.motifTags,
      consultationHistoireMaladie: res.consultationHistoireMaladie,
      consultationExamenClinique: res.consultationExamenClinique,
      // diagnosticTags: res.diagnosticTags,
      diagnostic: res.diagnostic,
      consultationExamenDemande: res.consultationExamenDemande,
      assuranceMatricule: res.assuranceMatricule,
      assurance: res.assurance,
      montant: Number(res.montant),
      montantRegle: res.montantRegle,
      note: res.note,
      radiologies:
        Array.from(res.consultationRadiologies, (radio: any) => {
          return {
            id_consultation_radio: radio.id_consultation_radio,
            note_consultation_radio: radio.note_consultation_radio,
            date_consultation_radio: new Date(
              Number(String(radio.date_consultation_radio).split("/")[2]),
              Number(String(radio.date_consultation_radio).split("/")[1]) - 1,
              Number(String(radio.date_consultation_radio).split("/")[0])
            ),
            radio: radio.radio,
          };
        }) || "PAS RADIO",
      biologies: Array.from(res.consultationBiologies, (bio: any) => {
        return {
          id: bio.id_consultation_bio,
          date: new Date(
            Number(String(bio.date_consultation_bio).split("/")[2]),
            Number(String(bio.date_consultation_bio).split("/")[1]) - 1,
            Number(String(bio.date_consultation_bio).split("/")[0])
          ),
          note: bio.note_consultation_bio,
          value: bio.valeur_consultation_bio,
          biology: bio.bio,
        };
      }),
      vaccines: Array.from(res.consultationVaccins, (vacc: any) => {
        return {
          id: vacc.id_consultation_vaccin,
          date_consultation_vaccin: new Date(
            Number(String(vacc.date_consultation_vaccin).split("/")[2]),
            Number(String(vacc.date_consultation_vaccin).split("/")[1]) - 1,
            Number(String(vacc.date_consultation_vaccin).split("/")[0])
          ),
          note_consultation_vaccin: vacc.note_consultation_vaccin,
          numLot_consultation_vaccin: vacc.numLot_consultation_vaccin,
          vaccin: vacc.vaccin,
        };
      }),
      actes: Array.from(res.consultationActes, (acte: any) => {
        return {
          id_consultation_acte: acte.id_consultation_acte,
          date_consultation_acte: new Date(
            Number(String(acte.date_consultation_acte).split("/")[2]),
            Number(String(acte.date_consultation_acte).split("/")[1]) - 1,
            Number(String(acte.date_consultation_acte).split("/")[0])
          ),
          montant_consultation_acte: acte.montant_consultation_acte,
          act: acte.act,
          note_consultation_acte: acte.note_consultation_acte,
        };
      }),
      parametresSante: Array.from(res.paramSanteValue, (parametreSanteValue: any) => {
        let parametreSante: ParametereSante = ParametereSante.fromResponse(parametreSanteValue.paramSante)
        return {
          id: parametreSanteValue.paramSanteValueId,
          value: [Number, String, String, (v: string) => v.toLowerCase() === 'true', String][parametreSante.type](parametreSanteValue.value),
          parametre: parametreSante,
        };
      }),
    });
  }

  get requestPayload(): any {
    const hours = Math.floor(this.consultationHeureDebut / MILLISECONDS_IN_HOUR);
    const minutes = Math.floor((this.consultationHeureDebut % MILLISECONDS_IN_HOUR) / MILLISECONDS_IN_MINUTE);
    return {
      consultationDate: moment(this.consultationDate).format('DD/MM/YYYY'),
      assurance: this.assurance,
      assuranceMatricule: this.assuranceMatricule,
      diagnostic: this.diagnostic,
      consultationExamenClinique: this.consultationExamenClinique,
      consultationExamenDemande: this.consultationExamenDemande,
      consultationHeureDebut: `${hours > 9 ? hours : ('0' + hours)}:${minutes > 9 ? minutes : ('0' + minutes)}`,
      consultationHistoireMaladie: this.consultationHistoireMaladie,
      motifTags: this.motifTags,
      montant: this.montant,
      montantRegle: this.montantRegle,
      note: this.note,
      consultationBiologies: Array.from(this.biologies, (bio) => {
        return {
          date_consultation_bio: moment(bio.date).format('DD/MM/YYYY'),
          note_consultation_bio: bio.note,
          valeur_consultation_bio: bio.value,
          bio: {
            id_BIO: bio.biology.id_BIO,
          },
        };
      }),
      consultationVaccins: Array.from(this.vaccines, (vaccin) => {
        return {
          date_consultation_vaccin: moment(vaccin.date_consultation_vaccin).format('DD/MM/YYYY'),
          note_consultation_vaccin: vaccin.note_consultation_vaccin,
          numLot_consultation_vaccin: vaccin.numLot_consultation_vaccin,
          vaccin: {
            id_Vaccin: vaccin.vaccin.id_Vaccin,
          },
        };
      }),
      consultationActes: Array.from(this.actes, (acte) => {
        return {
          date_consultation_acte: moment(acte.date_consultation_acte).format("DD/MM/YYYY"),
          montant_consultation_acte: acte.montant_consultation_acte,
          act: {
            id_Acte: acte.act.id_Acte,
          },
          note_consultation_acte: acte.note_consultation_acte
        };
      }),
      consultationRadiologies: Array.from(
        this.radiologies,
        (radio) => {
          return {
            note_consultation_radio: radio.note_consultation_radio,
            date_consultation_radio: moment(radio.date_consultation_radio).format("DD/MM/YYYY"),
            radio: { id_RADIO: radio.radio.id_RADIO },
          };
        }
      ),
      paramSanteValue: Array.from(this.parametresSante, (item) => {
        return {
          paramSante: {
            paramId: item.parametre.id,
          },

          value:
            item.parametre.type === 1
              ? moment(item.value).format('YYYY-MM-DD')
              : item.value,
        };
      })
    }
  }
}
