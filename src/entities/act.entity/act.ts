import { Doctor } from '../user.entity/doctor.entity/index';

export interface IAct {
    id_Acte: string;
    famille_Acte: string;
    desc_Acte: string;
    priseenCharge_Acte: string;
    confirmed: boolean,
    cnam_LET_COD: string,
    cnam_NAT_COD: string,
    cnam_TIT_DES: string,
    cnam_NAT_DES: string,
    cnam_ACT_APR: string,
    cnam_ACT_DES: string,
    cnam_REM_DES: string,
    cnam_CHP_DES: string,
    cnam_ART_DES: string,
    cnam_ACT_PRIX_U: number,
    cnam_SRM_COD: string,
    cnam_ACT_AHJ: string,
    cnam_SRM_DES: string,
    cnam_ACT_COD: string,
    cnam_REM_COD: string,
    act_LIB_USE: string,
    cnam_SAR_COD: string,
    cnam_CHP_COD: string,
    cnam_SAR_DES: string,
    cnam_ART_COD: string,
    cnam_COT_ACTM: number,
    cnam_TIT_COD: string,

}

export class Act implements IAct {
    id_Acte: string;
    famille_Acte: string;
    desc_Acte: string;
    priseenCharge_Acte: string;
    confirmed: boolean;

    cnam_LET_COD: string;
    cnam_NAT_COD: string;
    cnam_TIT_DES: string;
    cnam_NAT_DES: string;
    cnam_ACT_APR: string;
    cnam_ACT_DES: string;
    cnam_REM_DES: string;
    cnam_CHP_DES: string;
    cnam_ART_DES: string;
    cnam_ACT_PRIX_U: number;
    cnam_SRM_COD: string;
    cnam_ACT_AHJ: string;
    cnam_SRM_DES: string;
    cnam_ACT_COD: string;
    cnam_REM_COD: string;
    act_LIB_USE: string;
    cnam_SAR_COD: string;
    cnam_CHP_COD: string;
    cnam_SAR_DES: string;
    cnam_ART_COD: string;
    cnam_COT_ACTM: number;
    cnam_TIT_COD: string;

    constructor(other?: Partial<IAct>) {
        this.id_Acte = other?.id_Acte || "";
        this.famille_Acte = other?.famille_Acte || "";
        this.desc_Acte = other?.desc_Acte || '';
        this.priseenCharge_Acte = other?.priseenCharge_Acte || '';
        this.confirmed = other?.confirmed || false;

        this.cnam_LET_COD = other?.cnam_LET_COD || '';
        this.cnam_NAT_COD = other?.cnam_NAT_COD || '';
        this.cnam_TIT_DES = other?.cnam_TIT_DES || '';
        this.cnam_NAT_DES = other?.cnam_NAT_DES || '';
        this.cnam_ACT_APR = other?.cnam_ACT_APR || '';
        this.cnam_ACT_DES = other?.cnam_ACT_DES || '';
        this.cnam_REM_DES = other?.cnam_REM_DES || '';
        this.cnam_CHP_DES = other?.cnam_CHP_DES || '';
        this.cnam_ART_DES = other?.cnam_ART_DES || '';
        this.cnam_ACT_PRIX_U = other?.cnam_ACT_PRIX_U || 0;
        this.cnam_SRM_COD = other?.cnam_SRM_COD || '';
        this.cnam_ACT_AHJ = other?.cnam_ACT_AHJ || '';
        this.cnam_SRM_DES = other?.cnam_SRM_DES || '';
        this.cnam_ACT_COD = other?.cnam_ACT_COD || '';
        this.cnam_REM_COD = other?.cnam_REM_COD || '';
        this.act_LIB_USE = other?.act_LIB_USE || '';
        this.cnam_SAR_COD = other?.cnam_SAR_COD || '';
        this.cnam_CHP_COD = other?.cnam_CHP_COD || '';
        this.cnam_SAR_DES = other?.cnam_SAR_DES || '';
        this.cnam_ART_COD = other?.cnam_ART_COD || '';
        this.cnam_COT_ACTM = other?.cnam_COT_ACTM || 0;
        this.cnam_TIT_COD = other?.cnam_TIT_COD || '';

    }

    static fromResponse(res: any): Act {
        return new Act({
            id_Acte: res.id_Acte,
            famille_Acte: res.famille_Acte,
            desc_Acte: res.desc_Acte,
            priseenCharge_Acte: res.priseenCharge_Acte,
            confirmed: res.confirmed,


            cnam_LET_COD: res.cnam_LET_COD,
            cnam_NAT_COD: res.cnam_NAT_COD,
            cnam_TIT_DES: res.cnam_TIT_DES,
            cnam_NAT_DES: res.cnam_NAT_DES,
            cnam_ACT_APR: res.cnam_ACT_APR,
            cnam_ACT_DES: res.cnam_ACT_DES,
            cnam_REM_DES: res.cnam_REM_DES,
            cnam_CHP_DES: res.cnam_CHP_DES,
            cnam_ART_DES: res.cnam_ART_DES,
            cnam_ACT_PRIX_U: res.cnam_ACT_PRIX_U,
            cnam_SRM_COD: res.cnam_SRM_COD,
            cnam_ACT_AHJ: res.cnam_ACT_AHJ,
            cnam_SRM_DES: res.cnam_SRM_DES,
            cnam_ACT_COD: res.cnam_ACT_COD,
            cnam_REM_COD: res.cnam_REM_COD,
            act_LIB_USE: res.act_LIB_USE,
            cnam_SAR_COD: res.cnam_SAR_COD,
            cnam_CHP_COD: res.cnam_CHP_COD,
            cnam_SAR_DES: res.cnam_SAR_DES,
            cnam_ART_COD: res.cnam_ART_COD,
            cnam_COT_ACTM: res.cnam_COT_ACTM,
            cnam_TIT_COD: res.cnam_TIT_COD,
        })

    }
}

export interface IDoctorAct {
    id: string
    actes: Act;
    montant: number;
    state: boolean;
    own: boolean;


}

export class DoctorAct implements IDoctorAct {
    id: string;
    actes: Act;
    montant: number;
    state: boolean;
    own: boolean

    constructor(other?: Partial<IDoctorAct>) {
        this.id = other?.id || '';
        this.actes = other?.actes || new Act();
        this.montant = other?.montant || 0;
        this.state = other?.state || false;
        this.own = other?.own || false


    }


    public static fromResponse(res: any): DoctorAct {
        return new DoctorAct({
            id: res.id,
            state: res.isActivated,
            montant: res.price,
            actes: Act.fromResponse(res.act),
            own: res.own
        })

    }
}