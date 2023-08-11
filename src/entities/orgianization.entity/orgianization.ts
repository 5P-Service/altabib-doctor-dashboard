import { IUser, User } from "../user.entity";

export interface IOrgianization extends IUser{
  id:string;
  name: string;
  description: string;
  annee: number;
  address: string;
  government: string;
  ville: string;
  type:any;
  postalCode: string;
}

export class Orgianization extends User implements IOrgianization {
  id:string;
  name: string;
  description: string;
  annee: number;
  address: string;
  government: string;
  ville: string;
  type:any;
  postalCode: string;
  constructor(other: Partial<IOrgianization>) {
    super(other as User)
    this.id=other?.id||'';
    this.name = other?.name || "";
    this.description = other?.description || "";
    this.address = other?.address || "";
    this.annee = other?.annee || 0;
    this.government = other?.government || "";
    this.ville = other?.ville || "";
    this.postalCode = other?.postalCode || "";
    this.type = other?.type||""
  }
}
