import { User } from "../user.entity";

 
export enum TypeOrgianization{
    null,
    CABINET,
    RADIOLOGY_CENTER,
    PHARMACY,
    CLINIC,
}


export interface IRole{
    id:string;
    orgianizationType:string,
    name:string,
    users:Array<User>
}
export class Role implements IRole {
    id: string;
    orgianizationType: string;
    name: string;
    users: User[];

    constructor(other:Partial<IRole>){
        this.id=other?.id||'';
        this.orgianizationType=other?.orgianizationType||'';
        this.name=other?.name||'';
        this.users=other?.users||[]
    }

    public static fromResponse(res:any):Role{
        return new Role({
            id:res.idRole,
            orgianizationType:res.organizationType,
            name:res.name,
            users:res.users

        })

    }
}
