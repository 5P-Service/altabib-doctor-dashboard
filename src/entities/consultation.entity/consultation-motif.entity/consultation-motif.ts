export interface IConsultationMotif {
    id: string;
    text: string;
    color: string;
}

export class ConsultationMotif {
    id: string;
    text: string;
    color: string;

    constructor(other?: Partial<IConsultationMotif>) {
        this.id = other?.id || '';
        this.text = other?.text || '';
        this.color = other?.color || '';
    }

    public static fromResponse(res: any): ConsultationMotif {
        return new ConsultationMotif({
            id: res.id,
            text: res.text,
            color: res.color
        })
    }
}
