import { User } from "../user.entity";

export enum TypeAttachment {
    OTHER,
    RADIOLOGY,
    BIOLOGY,
    RAPPORT
}
export interface IStorage {
    id: string;
    fileName: string;
    description: string;
    type: TypeAttachment;
    date: Date;
    downloadURL: number,
    size: number,
    owner: User
}
export class Storage implements IStorage {
    id: string;
    fileName: string;
    description: string;
    type: TypeAttachment;
    date: Date;
    downloadURL: number;
    size: number;
    owner: User
    constructor(other?: Partial<IStorage>) {
        this.id = other?.id || '';
        this.fileName = other?.fileName || '';
        this.description = other?.description || "";
        this.type = other?.type || TypeAttachment.OTHER;
        this.date = other?.date || new Date();
        this.downloadURL = other?.downloadURL || 0;
        this.size = other?.size || 0;
        this.owner = other?.owner || new User

    }

    public static fromReponse(response: any): Storage {
        return new Storage({
            id: response.id,
            size: response.fileSize,
            downloadURL: response.downloadURL,
            fileName: response.fileName,
            date: new Date(response.date),
            type: response.subject,
            description: response.description,
            owner: User.fromResponse(response.owner)
        })
    }
}
