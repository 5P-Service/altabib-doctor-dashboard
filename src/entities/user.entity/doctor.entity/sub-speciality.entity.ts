export interface IDoctorSubSpeciality {
    id?: string;
    label: string;
    color: string;
    doctorId?: string;
}

export class DoctorSubSpeciality implements IDoctorSubSpeciality {
    id: string | undefined;
    label: string;
    color: string;
    doctorId?: string | undefined;

    constructor(other?: Partial<IDoctorSubSpeciality>) {
        this.id = other?.id;
        this.label = other?.label || '';
        this.color = other?.color || '';
        this.doctorId = other?.doctorId;
    }

    public static fromResponse(res: any): DoctorSubSpeciality {
        return new DoctorSubSpeciality({
            id: res.id,
            label: res.text || res.label,
            color: res.color,
            doctorId: res.doctorId
        })
    }

}