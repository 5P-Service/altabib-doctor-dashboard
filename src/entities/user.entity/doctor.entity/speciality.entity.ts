export interface ISpeciality {
    id?: string;
    label: string;
    arabicName: string;
}

export default class Speciality implements ISpeciality {
    id?: string | undefined;
    label: string;
    arabicName: string;

    constructor(other?: Partial<ISpeciality>) {
        this.id = other?.id;
        this.label = other?.label || '';
        this.arabicName = other?.arabicName || '';

    }
    public static fromResponse(res: any): Speciality {
        return new Speciality({
            id: res.id || res.specialiteId,
            label: res.name || res.specialiteNom,
            arabicName: res.arabicName || res.specialiteNomarab
        })
    }
}