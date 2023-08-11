
export interface IAntecedent{
    familiaux:string,
    medicaux:string,
    chirugicaux:string,
    rhumato:string,
    pharmacie:string,
    intorerance:string,
    allergie:string
    familiauxAlert:Boolean,
    medicauxAlert:Boolean,
    chirugicauxAlert:Boolean,
    rhumatoAlert:Boolean,
    pharmacieAlert:Boolean,
    intoreranceAlert:Boolean,
    allergieAlert:Boolean
}
export class Antecedent implements IAntecedent {
    familiaux: string
    medicaux: string
    chirugicaux: string
    rhumato: string
    pharmacie: string
    intorerance: string
    allergie: string
    familiauxAlert: Boolean
    medicauxAlert: Boolean
    chirugicauxAlert: Boolean
    rhumatoAlert: Boolean
    pharmacieAlert: Boolean
    intoreranceAlert: Boolean
    allergieAlert: Boolean
    constructor(other:Partial< IAntecedent>){
        this.familiaux=other?.familiaux||'';
        this.medicaux=other?.medicaux||'';
        this.chirugicaux=other.chirugicaux||'';
        this.allergie=other?.allergie||'';
        this.rhumato=other?.rhumato||'';
        this.pharmacie=other?.pharmacie||'';
        this.intorerance=other?.intorerance||'';
        this.familiauxAlert=other?.familiauxAlert||false;
        this.pharmacieAlert=other?.pharmacieAlert||false;
        this.allergieAlert=other?.allergieAlert||false;
        this.intoreranceAlert=other?.intoreranceAlert||false;
        this.medicauxAlert=other?.medicauxAlert||false;
        this.chirugicauxAlert=other?.chirugicauxAlert||false;
        this.rhumatoAlert=other?.rhumatoAlert||false;
    }
    public static fromResponse(response: any): Antecedent {
        return new Antecedent(
            {
               familiaux:response.atcd_familiaux,
               medicaux:response.atcd_medicaux,
               chirugicaux:response.atcd_chirugicaux,
               allergie:response.atcd_allergie,
               pharmacie:response.atcd_pharmacie,
               intorerance:response.atcd_intorerance,
               rhumato:response.atcd_rhumato,
               allergieAlert:response.atcd_allergie_alert,
               rhumatoAlert:response.atcd_rhumato_alert,
               medicauxAlert:response.atcd_medicaux_alert,
               chirugicauxAlert:response.atcd_chirugicaux_alert,
               intoreranceAlert:response.atcd_intolerance_alert,
               pharmacieAlert:response.atcd_pharmacie_alert,
               familiauxAlert:response.atcd_familiaux_alert

            }
        );
    }
}
