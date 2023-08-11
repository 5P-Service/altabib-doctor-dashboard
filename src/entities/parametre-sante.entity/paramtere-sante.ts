import * as moment from "moment";

export enum ParametreSanteType {
  NUMNBER,
  DATE,
  STRING,
  BOOLEEN,
  LIST
}
export interface IParameterSante {
  id: string;
  label: string;
  unit: string;
  group: string;
  idDoctor: string;
  state: boolean;
  type: ParametreSanteType;
  splitValues: string;
}

export class ParametereSante implements IParameterSante {
  id: string;
  label: string;
  unit: string;
  group: string;
  idDoctor: string;
  state: boolean;
  type: ParametreSanteType;
  splitValues: string;

  constructor(other?: Partial<IParameterSante>) {
    this.id = other?.id || "";
    this.label = other?.label || "";
    this.group = other?.group || "";
    this.type = other?.type || ParametreSanteType.STRING;
    this.unit = other?.unit || "";
    this.state = other?.state || false;
    this.idDoctor = other?.idDoctor || '';
    this.splitValues = other?.splitValues || '';

  }
  public static fromResponse(res: any): ParametereSante {
    return new ParametereSante({
      id: res.paramId,
      group: res.paramFamille,
      label: res.paramLibelle,
      type: ["numerique", "jour_mois_annee", "chaine_de_caractere", "oui_non", "liste_choix"].indexOf(
        res.paramType
      ),
      unit: res.paramUnite,
      state: res.state,
      idDoctor: res.psmId,
      splitValues: res.splitValues
    });
  }
}

export interface IDoctorParameterSante {
  id: string;
  label: string;
  group: string;
  type: string;
  unit: string;
  parametreSante: ParametereSante;
  enabled: boolean;
  order: number;
}
export class DoctorParameterSante implements IDoctorParameterSante {
  id: string;
  label: string;
  group: string;
  type: string;
  unit: string;
  parametreSante: ParametereSante;
  enabled: boolean;
  order: number;
  constructor(other?: Partial<IDoctorParameterSante>) {
    this.id = other?.id || '';
    this.label = other?.label || '';
    this.group = other?.group || '';
    this.type = other?.type || '';
    this.unit = other?.unit || '';
    this.parametreSante = other?.parametreSante || new ParametereSante();
    this.enabled = other?.enabled || false;
    this.order = other?.order || 0;
  }

  static fromResponse(res: any): DoctorParameterSante {
    return new DoctorParameterSante({
      id: res.id,
      label: res.label,
      group: res.group,
      type: res.type,
      unit: res.unit,
      parametreSante: ParametereSante.fromResponse(res.param),
      enabled: res.enabled,
      order: res.rangeIndex,
    });
  }
}