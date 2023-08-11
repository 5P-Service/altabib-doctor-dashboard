import { MILLISECONDS_IN_HOUR, MILLISECONDS_IN_MINUTE } from "src/app/utils/date.util";
import { Act } from "../../act.entity/act";
import { DoctorAppointment } from "../../appointment.entity/doctor-appointment.entity/doctor-appointment";
import { Biology } from "../../biology.entity/biology";
import { ParametereSante } from "../../parametre-sante.entity/paramtere-sante";
import { Radiology } from "../../radiology.entity/radiology";
import { Vaccin } from "../../vaccin.entity/vaccin";
import { ConsultationMotif } from "../consultation-motif.entity/consultation-motif";
import * as moment from "moment";

export enum lentilleType {
  Souple,
  Torique,
  Rigide,
}

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
  constructor(other?: Partial<IRadiologyConsultationItem>) {
    this.id_consultation_radio = other?.id_consultation_radio || "";
    this.note_consultation_radio = other?.note_consultation_radio || "";
    this.radio = other?.radio || new Radiology();
    this.date_consultation_radio = other?.date_consultation_radio || new Date();
  }
  radio: Radiology;
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
    this.montant_consultation_acte = other?.montant_consultation_acte || 0;
    this.note_consultation_acte = other?.note_consultation_acte || "";
    this.act = other?.act || new Act();
  }
}

export interface ITags {
  id?: string;
  color?: string;
  text: string;
}
export class Tags implements ITags {
  id?: string;
  color?: string;
  text: string;
  constructor(other: Partial<ITags>) {
    (this.id = other?.id || ""), (this.color = other?.color || "");
    this.text = other?.text || "";
  }
}
export interface IConsultationOphtalmo {
  id: string;
  consultationDate: Date;
  assurance: string;
  assuranceMatricule: string;
  motifTags: Array<Tags>;
  consultationHeureDebut: number;
  // consultationHeureFin: Date;
  consultationHistoireMaladie: string;
  consultationExamenClinique: string;
  diagnosticTags: Array<Tags>;
  diagnostic: string;
  consultationExamenDemande: string;
  montant: number;
  appointment: DoctorAppointment;
  ophtalmo_RC: string; // Renseignement Clinique
  ophtalmo_Correction_OD: number; // Correction_Oeil_Droit
  ophtalmo_Correction_OG: number; // Correction_Oeil_Gauche

  ophtalmo_Remarque: string; // Remarques

  od_refraction_Sphere: number; // Œil Droit Refraction	Sphere
  od_refraction_Cylindre: number; // Œil Droit	Refraction	Cylindre
  od_refraction_Axe: number; // Œil Droit	Refraction	Axe

  og_refraction_Sphere: number; // Œil Gauche    Refraction	Sphere
  og_refraction_Cylindre: number; // Œil Gauche	Refraction	Cylindre
  og_refraction_Axe: number; // Œil Gauche	Refraction	Axe
  od_vl_avac_Sphere: number; // Œil Droit	Vision Loin	Avec Correction	Sphere
  od_vl_avac_Cylindre: number; // Œil Droit	Vision Loin	Avec Correction	Cylindre
  od_vl_avac_Axe: number; // Œil Droit	Vision Loin	Avec Correction	Axe
  od_vl_avac_Addition: number; // Œil Droit	Vision Loin	Avec Correction	Addition

  od_vp_avac_Sphere: number; // Œil Droit	Vision Près	Avec Correction	Sphere
  od_vp_avac_Cylindre: number; // Œil Droit	Vision Près	Avec Correction	Cylindre
  od_vp_avac_Axe: number; // Œil Droit	Vision Près	Avec Correction	Axe
  od_vp_avac_Addition: number; // Œil Droit	Vision Près	Avec Correction	Addition

  og_vl_avac_Sphere: number; // Œil Gauche	Vision Loin	Avec Correction	Sphere
  og_vl_avac_Cylindre: number; // Œil Gauche	Vision Loin	Avec Correction	Cylindre
  og_vl_avac_Axe: number; // Œil Gauche	Vision Loin	Avec Correction	Axe
  og_vl_avac_Addition: number; // Œil Gauche	Vision Loin	Avec Correction	Addition

  og_vp_avac_Sphere: number; // Œil Gauche	Vision Près	Avec Correction	Sphere
  og_vp_avac_Cylindre: number; // Œil Gauche	Vision Près	Avec Correction	Cylindre
  og_vp_avac_Axe: number; // Œil Gauche	Vision Près	Avec Correction	Axe
  og_vp_avac_Addition: number; // Œil Gauche	Vision Près	Avec Correction	Addition

  lentille_Type: string; //Souple - Torique - Rigide

  od_lentille_RC: number;
  od_lentille_DC: number;
  od_lentille_Puissance: number;
  og_lentille_RC: number;
  og_lentille_DC: number;
  og_lentille_Puissance: number;
  exp_laser_1: boolean;
  exp_laser_2: boolean;
  exp_laser_3: boolean;
  exp_laser_4: boolean;
  exp_laser_5: boolean;
  exp_laser_6: boolean;
  exp_laser_7: boolean;
  exp_laser_8: boolean;
  exp_laser_9: boolean;
  exp_laser_10: boolean;
  exp_laser_11: boolean;
  exp_laser_12: boolean;
  exp_laser_13: boolean;
  exp_laser_14: boolean;
  exp_laser_15: boolean;
  exp_laser_16: boolean;
  exp_laser_17: boolean;
  exp_laser_18: boolean;
  exp_laser_19: boolean;
  exp_laser_20: boolean;
  exp_laser_21: boolean;
  exp_laser_22: boolean;
  exp_laser_23: boolean;
  exp_laser_24: boolean;
  exp_laser_25: boolean;

  montantRegle: string;
  note: string;
  parametresSante: Array<ConsultationOphtalmoParametreSanteItem>;
  radiologies: Array<IRadiologyConsultationItem>;
  biologies: Array<IBiologyConsultationItem>;
  vaccines: Array<IVaccinConsultationItem>;
  actes: Array<IActeConsultationItem>;
  lentille_remarque: string;
  lunette_remarque: string;
}

export interface IConsultationOphtalmoParametreSanteItem {
  id: string;
  parametre: ParametereSante;
  value: any;
  value_OD: any;
  value_OG: any;
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

  static fromResponse(res: {
    psmId: string;
    porder: number;
    pprescription: boolean;
    pprescriptionnom: string;
    param: {
      paramId: string;
      paramLibelle: string;
      paramUnite: string;
      paramFamille: string;
      paramType: string;
    };
    state: boolean;
  }): DoctorParametereSante {
    return new DoctorParametereSante({
      id: res.psmId,
      order: res.porder,
      isPrescription: res.pprescription,
      prescriptionName: res.pprescriptionnom,
      target: ParametereSante.fromResponse(res.param),
      activated: res.state,
    });
  }
}

export class ConsultationOphtalmoParametreSanteItem implements IConsultationOphtalmoParametreSanteItem {
  id: string;
  parametre: ParametereSante;
  value: any;
  value_OD: any;
  value_OG: any;
  constructor(other?: Partial<IConsultationOphtalmoParametreSanteItem>) {
    this.id = other?.id || "";
    this.parametre = other?.parametre || new ParametereSante();
    this.value =
      other?.value || [0, "", "", false][this.parametre.type];
    this.value_OD =
      other?.value_OD || [0, "", "", false][this.parametre.type];
    this.value_OG =
      other?.value_OG || [0, "", "", false][this.parametre.type];
  }
}

export class ConsultationOphtalmo implements IConsultationOphtalmo {
  id: string;
  consultationDate: Date;
  appointment: DoctorAppointment;
  assurance: string;
  motifTags: Array<ConsultationMotif>;
  assuranceMatricule: string;
  consultationHeureDebut: number;
  consultationHistoireMaladie: string;
  consultationExamenClinique: string;
  diagnosticTags: Array<Tags>;
  diagnostic: string;
  ophtalmo_RC: string; // Renseignement Clinique
  ophtalmo_Correction_OD: number; // Correction_Oeil_Droit
  ophtalmo_Correction_OG: number; // Correction_Oeil_Gauche

  ophtalmo_Remarque: string; // Remarques

  od_vl_avac_Sphere: number; // Œil Droit	Vision Loin	Avec Correction	Sphere
  od_vl_avac_Cylindre: number; // Œil Droit	Vision Loin	Avec Correction	Cylindre
  od_vl_avac_Axe: number; // Œil Droit	Vision Loin	Avec Correction	Axe
  od_vl_avac_Addition: number; // Œil Droit	Vision Loin	Avec Correction	Addition

  od_refraction_Sphere: number; // Œil Droit Refraction	Sphere
  od_refraction_Cylindre: number; // Œil Droit	Refraction	Cylindre
  od_refraction_Axe: number; // Œil Droit	Refraction	Axe

  og_refraction_Sphere: number; // Œil Gauche    Refraction	Sphere
  og_refraction_Cylindre: number; // Œil Gauche	Refraction	Cylindre
  og_refraction_Axe: number;
  od_vp_avac_Sphere: number; // Œil Droit	Vision Près	Avec Correction	Sphere
  od_vp_avac_Cylindre: number; // Œil Droit	Vision Près	Avec Correction	Cylindre
  od_vp_avac_Axe: number; // Œil Droit	Vision Près	Avec Correction	Axe
  od_vp_avac_Addition: number; // Œil Droit	Vision Près	Avec Correction	Addition

  og_vl_avac_Sphere: number; // Œil Gauche	Vision Loin	Avec Correction	Sphere
  og_vl_avac_Cylindre: number; // Œil Gauche	Vision Loin	Avec Correction	Cylindre
  og_vl_avac_Axe: number; // Œil Gauche	Vision Loin	Avec Correction	Axe
  og_vl_avac_Addition: number; // Œil Gauche	Vision Loin	Avec Correction	Addition

  og_vp_avac_Sphere: number; // Œil Gauche	Vision Près	Avec Correction	Sphere
  og_vp_avac_Cylindre: number; // Œil Gauche	Vision Près	Avec Correction	Cylindre
  og_vp_avac_Axe: number; // Œil Gauche	Vision Près	Avec Correction	Axe
  og_vp_avac_Addition: number; // Œil Gauche	Vision Près	Avec Correction	Addition

  lentille_Type: string; //Souple - Torique - Rigide

  od_lentille_RC: number;
  od_lentille_DC: number;
  od_lentille_Puissance: number;
  og_lentille_RC: number;
  og_lentille_DC: number;
  og_lentille_Puissance: number;
  exp_laser_1: boolean;
  exp_laser_2: boolean;
  exp_laser_3: boolean;
  exp_laser_4: boolean;
  exp_laser_5: boolean;
  exp_laser_6: boolean;
  exp_laser_7: boolean;
  exp_laser_8: boolean;
  exp_laser_9: boolean;
  exp_laser_10: boolean;
  exp_laser_11: boolean;
  exp_laser_12: boolean;
  exp_laser_13: boolean;
  exp_laser_14: boolean;
  exp_laser_15: boolean;
  exp_laser_16: boolean;
  exp_laser_17: boolean;
  exp_laser_18: boolean;
  exp_laser_19: boolean;
  exp_laser_20: boolean;
  exp_laser_21: boolean;
  exp_laser_22: boolean;
  exp_laser_23: boolean;
  exp_laser_24: boolean;
  exp_laser_25: boolean;

  montant: number;
  consultationExamenDemande: string;
  montantRegle: string;
  note: string;
  radiologies: IRadiologyConsultationItem[];
  biologies: IBiologyConsultationItem[];
  vaccines: IVaccinConsultationItem[];
  actes: IActeConsultationItem[];
  parametresSante: Array<ConsultationOphtalmoParametreSanteItem>;

  lentille_remarque: string;
  lunette_remarque: string;

  constructor(other?: Partial<IConsultationOphtalmo>) {
    this.ophtalmo_RC = other?.ophtalmo_RC || "";
    this.lentille_Type = other?.lentille_Type || "";
    this.od_lentille_DC = other?.od_lentille_DC || 0;
    this.od_lentille_Puissance = other?.od_lentille_Puissance || 0;
    this.od_lentille_RC = other?.od_lentille_RC || 0;
    this.og_lentille_DC = other?.og_lentille_DC || 0;
    this.og_lentille_Puissance = other?.og_lentille_Puissance || 0;
    this.og_lentille_RC = other?.og_lentille_RC || 0;
    this.ophtalmo_Correction_OD = other?.ophtalmo_Correction_OD || 0;
    this.ophtalmo_Correction_OG = other?.ophtalmo_Correction_OG || 0;
    this.ophtalmo_Remarque = other?.ophtalmo_Remarque || "";
    this.ophtalmo_RC = other?.ophtalmo_RC || "";
    this.od_vl_avac_Addition = other?.od_vl_avac_Addition || 0;
    this.od_vl_avac_Sphere = other?.od_vl_avac_Sphere || 0;
    this.od_vl_avac_Cylindre = other?.od_vl_avac_Cylindre || 0;
    this.od_vl_avac_Axe = other?.od_vl_avac_Axe || 0;
    this.od_vl_avac_Sphere = other?.od_vl_avac_Sphere || 0;

    this.og_vl_avac_Addition = other?.og_vl_avac_Addition || 0;
    this.og_vl_avac_Axe = other?.og_vl_avac_Axe || 0;
    this.og_vl_avac_Cylindre = other?.og_vl_avac_Cylindre || 0;
    this.og_vl_avac_Sphere = other?.og_vl_avac_Sphere || 0;
    this.og_vp_avac_Addition = other?.og_vp_avac_Addition || 0;
    this.og_vp_avac_Axe = other?.og_vp_avac_Axe || 0;
    this.og_vp_avac_Cylindre = other?.og_vp_avac_Cylindre || 0;
    this.og_vp_avac_Sphere = other?.og_vp_avac_Sphere || 0;
    this.od_vp_avac_Addition = other?.od_vp_avac_Addition || 0;
    this.od_vp_avac_Axe = other?.od_vp_avac_Axe || 0;
    this.od_vp_avac_Cylindre = other?.od_vp_avac_Cylindre || 0;
    this.od_vp_avac_Sphere = other?.od_vp_avac_Sphere || 0;

    this.id = other?.id || "";
    this.consultationDate = new Date(other?.consultationDate || 0);
    this.consultationHeureDebut = other?.consultationHeureDebut || 0;
    // this.consultationHeureFin = other?.consultationHeureFin || new Date();
    this.assurance = other?.assurance || "";
    this.motifTags = other?.motifTags || new Array();
    this.assuranceMatricule = other?.assuranceMatricule || "";
    this.consultationHistoireMaladie = other?.consultationHistoireMaladie || "";
    this.consultationExamenClinique = other?.consultationExamenClinique || "";
    this.diagnosticTags = other?.diagnosticTags || Array<Tags>();
    this.diagnostic = other?.diagnostic || "";
    this.montant = other?.montant || 0;
    this.montantRegle = other?.montantRegle || "0";
    this.consultationExamenDemande = other?.consultationExamenDemande || "";
    this.note = other?.note || "";
    this.radiologies = other?.radiologies || [];
    this.biologies = other?.biologies || [];
    this.vaccines = other?.vaccines || [];
    this.parametresSante = other?.parametresSante || [];
    this.appointment = other?.appointment || new DoctorAppointment();
    this.actes = other?.actes || [];
    this.exp_laser_1 = other?.exp_laser_1 || false;
    this.exp_laser_2 = other?.exp_laser_2 || false;
    this.exp_laser_3 = other?.exp_laser_3 || false;
    this.exp_laser_4 = other?.exp_laser_4 || false;
    this.exp_laser_5 = other?.exp_laser_5 || false;
    this.exp_laser_6 = other?.exp_laser_6 || false;
    this.exp_laser_7 = other?.exp_laser_7 || false;
    this.exp_laser_8 = other?.exp_laser_8 || false;
    this.exp_laser_9 = other?.exp_laser_9 || false;
    this.exp_laser_10 = other?.exp_laser_10 || false;
    this.exp_laser_11 = other?.exp_laser_11 || false;
    this.exp_laser_12 = other?.exp_laser_12 || false;
    this.exp_laser_13 = other?.exp_laser_13 || false;
    this.exp_laser_14 = other?.exp_laser_14 || false;
    this.exp_laser_15 = other?.exp_laser_15 || false;
    this.exp_laser_16 = other?.exp_laser_16 || false;
    this.exp_laser_17 = other?.exp_laser_17 || false;
    this.exp_laser_18 = other?.exp_laser_18 || false;
    this.exp_laser_19 = other?.exp_laser_19 || false;
    this.exp_laser_20 = other?.exp_laser_20 || false;
    this.exp_laser_21 = other?.exp_laser_21 || false;
    this.exp_laser_22 = other?.exp_laser_22 || false;
    this.exp_laser_23 = other?.exp_laser_23 || false;
    this.exp_laser_24 = other?.exp_laser_24 || false;
    this.exp_laser_25 = other?.exp_laser_25 || false;
    this.od_refraction_Sphere = other?.od_refraction_Sphere || 0; // Œil Droit Refraction	Sphere
    this.od_refraction_Cylindre = other?.od_refraction_Cylindre || 0; // Œil Droit	Refraction	Cylindre
    this.od_refraction_Axe = other?.od_refraction_Axe || 0; // Œil Droit	Refraction	Axe

    this.og_refraction_Sphere = other?.og_refraction_Sphere || 0; // Œil Gauche    Refraction	Sphere
    this.og_refraction_Cylindre = other?.og_refraction_Cylindre || 0;
    this.og_refraction_Axe = other?.og_refraction_Axe || 0;


    this.lentille_remarque = other?.lentille_remarque || '';
    this.lunette_remarque = other?.lunette_remarque || '';
  }

  get dateTime(): Date {
    return new Date(new Date(this.consultationDate.getFullYear(), this.consultationDate.getMonth(), this.consultationDate.getDate()).getTime() + this.consultationHeureDebut)
  }
  public static formReponse(res: any): ConsultationOphtalmo {
    return new ConsultationOphtalmo({
      appointment: DoctorAppointment.fromResponse(res.appointment),
      id: res.consultationId,
      consultationDate: new Date(
        Number(String(res.consultationDate).split("/")[2]),
        Number(String(res.consultationDate).split("/")[1]) - 1,
        Number(String(res.consultationDate).split("/")[0])
      ),
      consultationHeureDebut: res.consultationHeureDebut ? (Number(res.consultationHeureDebut.split(':')[0] || 0) * MILLISECONDS_IN_HOUR) + (Number(res.consultationHeureDebut.split(':')[1] || 0) * MILLISECONDS_IN_MINUTE) : 0,
      motifTags: res.motifTags,
      consultationHistoireMaladie: res.consultationHistoireMaladie,
      consultationExamenClinique: res.consultationExamenClinique,
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
      ophtalmo_RC: res.ophtalmo_RC,
      lentille_Type: res.lentille_Type,
      od_lentille_DC: res.od_lentille_DC,
      od_lentille_Puissance: res.od_lentille_Puissance,
      od_lentille_RC: res.od_lentille_RC,
      og_lentille_DC: res.og_lentille_DC,
      og_lentille_Puissance: res.og_lentille_Puissance,
      og_lentille_RC: res.og_lentille_RC,
      ophtalmo_Correction_OD: res.ophtalmo_Correction_OD,
      ophtalmo_Correction_OG: res.ophtalmo_Correction_OG,
      ophtalmo_Remarque: res.ophtalmo_Remarque,

      od_vl_avac_Addition: res.od_vl_avac_Addition,
      od_vl_avac_Sphere: res.od_vl_avac_Sphere,
      od_vl_avac_Cylindre: res.od_vl_avac_Cylindre,
      od_vl_avac_Axe: res.od_vl_avac_Axe,
      og_vl_avac_Addition: res.og_vl_avac_Addition,
      og_vl_avac_Axe: res.og_vl_avac_Axe,
      og_vl_avac_Cylindre: res.og_vl_avac_Cylindre,
      og_vl_avac_Sphere: res.og_vl_avac_Sphere,
      og_vp_avac_Addition: res.og_vp_avac_Addition,
      og_vp_avac_Axe: res.og_vp_avac_Axe,
      og_vp_avac_Cylindre: res.og_vp_avac_Cylindre,
      og_vp_avac_Sphere: res.og_vp_avac_Sphere,
      od_vp_avac_Addition: res.od_vp_avac_Addition,
      od_vp_avac_Axe: res.od_vp_avac_Axe,
      od_vp_avac_Cylindre: res.od_vp_avac_Cylindre,
      od_vp_avac_Sphere: res.od_vp_avac_Sphere,

      exp_laser_1: res.exp_laser_1,
      exp_laser_2: res.exp_laser_2,
      exp_laser_3: res.exp_laser_3,
      exp_laser_4: res.exp_laser_4,
      exp_laser_5: res.exp_laser_5,
      exp_laser_6: res.exp_laser_6,
      exp_laser_7: res.exp_laser_7,
      exp_laser_8: res.exp_laser_8,
      exp_laser_9: res.exp_laser_9,
      exp_laser_10: res.exp_laser_10,
      exp_laser_11: res.exp_laser_11,
      exp_laser_12: res.exp_laser_12,
      exp_laser_13: res.exp_laser_13,
      exp_laser_14: res.exp_laser_14,
      exp_laser_15: res.exp_laser_15,
      exp_laser_16: res.exp_laser_16,
      exp_laser_17: res.exp_laser_17,
      exp_laser_18: res.exp_laser_18,
      exp_laser_19: res.exp_laser_19,
      exp_laser_20: res.exp_laser_20,
      exp_laser_21: res.exp_laser_21,
      exp_laser_22: res.exp_laser_22,
      exp_laser_23: res.exp_laser_23,
      exp_laser_24: res.exp_laser_24,
      exp_laser_25: res.exp_laser_25,
      od_refraction_Axe: res.od_refraction_Axe,
      od_refraction_Cylindre: res.od_refraction_Cylindre,
      od_refraction_Sphere: res.od_refraction_Sphere,
      og_refraction_Axe: res.og_refraction_Axe,
      og_refraction_Cylindre: res.og_refraction_Cylindre,
      og_refraction_Sphere: res.og_refraction_Sphere,
      parametresSante: Array.from(res.paramSanteValue, (parametreSanteValue: any) => {
        return {
          id: parametreSanteValue.paramSanteValueId,
          value: parametreSanteValue.value,
          value_OD: parametreSanteValue.value_OD,
          value_OG: parametreSanteValue.value_OG,
          parametre: ParametereSante.fromResponse(parametreSanteValue.paramSante),
        };
      }),
      lentille_remarque: res.lentille_remarque,
      lunette_remarque: res.lunette_remarque
    });
  }

  get requestPayload(): any {
    return {
      consultationDate: moment(this.consultationDate).format(
        "DD/MM/YYYY"
      ),
      assurance: this.assurance,
      assuranceMatricule: this.assuranceMatricule,

      od_refraction_Sphere: this.od_refraction_Sphere, // Œil Droit Refraction	Sphere
      od_refraction_Cylindre: this.od_refraction_Cylindre, // Œil Droit	Refraction	Cylindre
      od_refraction_Axe: this.od_refraction_Axe, // Œil Droit	Refraction	Axe

      og_refraction_Sphere: this.og_refraction_Sphere, // Œil Gauche    Refraction	Sphere
      og_refraction_Cylindre: this.og_refraction_Cylindre, // Œil Gauche	Refraction	Cylindre
      og_refraction_Axe: this.og_refraction_Axe,

      ophtalmo_RC: this.ophtalmo_RC,
      ophtalmo_Correction_OD: this.ophtalmo_Correction_OD,
      ophtalmo_Correction_OG: this.ophtalmo_Correction_OG,

      ophtalmo_Remarque: this.ophtalmo_Remarque,

      od_vl_avac_Sphere: this.od_vl_avac_Sphere,
      od_vl_avac_Cylindre: this.od_vl_avac_Cylindre, // Œil Droit	Vision Loin	Avec Correction	Cylindre
      od_vl_avac_Axe: this.od_vl_avac_Axe, // Œil Droit	Vision Loin	Avec Correction	Axe
      od_vl_avac_Addition: this.od_vl_avac_Addition, // Œil Droit	Vision Loin	Avec Correction	Addition

      od_vp_avac_Sphere: this.od_vp_avac_Sphere, // Œil Droit	Vision Près	Avec Correction	Sphere
      od_vp_avac_Cylindre: this.od_vp_avac_Cylindre, // Œil Droit	Vision Près	Avec Correction	Cylindre
      od_vp_avac_Axe: this.od_vp_avac_Axe, // Œil Droit	Vision Près	Avec Correction	Axe
      od_vp_avac_Addition: this.od_vp_avac_Addition, // Œil Droit	Vision Près	Avec Correction	Addition

      og_vl_avac_Sphere: this.og_vl_avac_Sphere, // Œil Gauche	Vision Loin	Avec Correction	Sphere
      og_vl_avac_Cylindre: this.og_vl_avac_Cylindre, // Œil Gauche	Vision Loin	Avec Correction	Cylindre
      og_vl_avac_Axe: this.og_vl_avac_Axe, // Œil Gauche	Vision Loin	Avec Correction	Axe
      og_vl_avac_Addition: this.og_vl_avac_Addition, // Œil Gauche	Vision Loin	Avec Correction	Addition

      og_vp_avac_Sphere: this.og_vp_avac_Sphere, // Œil Gauche	Vision Près	Avec Correction	Sphere
      og_vp_avac_Cylindre: this.og_vp_avac_Cylindre, // Œil Gauche	Vision Près	Avec Correction	Cylindre
      og_vp_avac_Axe: this.og_vp_avac_Axe, // Œil Gauche	Vision Près	Avec Correction	Axe
      og_vp_avac_Addition: this.og_vp_avac_Addition, // Œil Gauche	Vision Près	Avec Correction	Addition

      lentille_Type: this.lentille_Type, //Souple - Torique - Rigide

      od_lentille_RC: this.od_lentille_RC,
      od_lentille_DC: this.od_lentille_DC,
      od_lentille_Puissance: this.od_lentille_Puissance,

      og_lentille_RC: this.og_lentille_RC,
      og_lentille_DC: this.og_lentille_DC,
      og_lentille_Puissance: this.og_lentille_Puissance,
      exp_laser_1: this.exp_laser_1,

      exp_laser_2: this.exp_laser_2,
      exp_laser_3: this.exp_laser_3,
      exp_laser_4: this.exp_laser_4,
      exp_laser_5: this.exp_laser_5,

      exp_laser_6: this.exp_laser_6,

      exp_laser_7: this.exp_laser_7,
      exp_laser_8: this.exp_laser_8,
      exp_laser_9: this.exp_laser_9,
      exp_laser_10: this.exp_laser_10,
      exp_laser_11: this.exp_laser_11,
      exp_laser_12: this.exp_laser_12,
      exp_laser_13: this.exp_laser_13,
      exp_laser_14: this.exp_laser_14,
      exp_laser_15: this.exp_laser_15,
      exp_laser_16: this.exp_laser_16,
      exp_laser_17: this.exp_laser_17,
      exp_laser_18: this.exp_laser_18,
      exp_laser_19: this.exp_laser_19,
      exp_laser_20: this.exp_laser_20,
      exp_laser_21: this.exp_laser_21,
      exp_laser_22: this.exp_laser_22,
      exp_laser_23: this.exp_laser_23,
      exp_laser_24: this.exp_laser_24,
      exp_laser_25: this.exp_laser_25,

      // diagnosticTags: consultation.diagnosticTags,
      diagnostic: this.diagnostic,
      consultationExamenClinique: this.consultationExamenClinique,
      consultationExamenDemande: this.consultationExamenDemande,
      consultationHeureDebut: moment(new Date(this.consultationHeureDebut)).format('HH:mm'),
      consultationHistoireMaladie: this.consultationHistoireMaladie,
      motifTags: this.motifTags,
      montant: this.montant,
      montantRegle: this.montantRegle,
      note: this.note,
      consultationBiologies: Array.from(this.biologies, (bio) => {
        return {
          date_consultation_bio: moment(bio.date).format("DD/MM/YYYY"),
          note_consultation_bio: bio.note,
          valeur_consultation_bio: bio.value,
          bio: {
            id_BIO: bio.biology.id_BIO,
          },
        };
      }),
      consultationVaccins: Array.from(this.vaccines, (vaccin) => {
        return {
          date_consultation_vaccin: moment(
            vaccin.date_consultation_vaccin
          ).format("DD/MM/YYYY"),
          note_consultation_vaccin: vaccin.note_consultation_vaccin,
          numLot_consultation_vaccin: vaccin.numLot_consultation_vaccin,
          vaccin: {
            id_Vaccin: vaccin.vaccin.id_Vaccin,
          },
        };
      }),
      consultationActes: Array.from(this.actes, (acte) => {
        return {
          date_consultation_acte: moment(
            acte.date_consultation_acte
          ).format("DD/MM/YYYY"),
          montant_consultation_acte: acte.montant_consultation_acte,
          act: {
            id_Acte: acte.act.id_Acte,
          },
          note_consultation_acte: acte.note_consultation_acte,
        };
      }),
      consultationRadiologies: Array.from(
        this.radiologies,
        (radio) => {
          return {
            note_consultation_radio: radio.note_consultation_radio,
            date_consultation_radio: moment(
              radio.date_consultation_radio
            ).format("DD/MM/YYYY"),
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
              ? moment(item.value).format("YYYY-MM-DD")
              : item.value,
          value_OD:
            item.parametre.type === 1
              ? moment(item.value_OD).format("YYYY-MM-DD")
              : item.value_OD,
          value_OG:
            item.parametre.type === 1
              ? moment(item.value_OG).format("YYYY-MM-DD")
              : item.value_OG,
        };
      }),
      lentille_remarque: this.lentille_remarque,
      lunette_remarque: this.lunette_remarque
    }
  }
}