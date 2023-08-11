
export enum TypeAttachment {
    OTHER,
    RADIOLOGY,
    BIOLOGY,
    REPORT
}
export interface IAttachment {
    id: string,
    fileName: string;
    description: string,
    type: TypeAttachment,
    date: Date,
    uri: string
}
export enum EFileConentType {
    UNKNOWN,
    IMAGE,
    VIDEO,
    TEXT,
    MSWORD,
    PDF,
    AUDIO,
}
export class Attachment implements IAttachment {
    id: string;
    fileName: string;
    description: string;
    type: TypeAttachment;
    date: Date;
    uri: string
    constructor(other?: Partial<IAttachment>) {
        this.id = other?.id || '';
        this.fileName = other?.fileName || '';
        this.description = other?.description || '';
        this.type = other?.type || TypeAttachment.OTHER;
        this.date = other?.date || new Date();
        this.uri = other?.uri || ''
    }

    public static fromReponse(response: any): Attachment {
        return new Attachment({
            id: response.id,
            fileName: response.fileName,
            description: response.description,
            type: response.type,
            date: new Date(response.date),
            uri: response.uri
        })
    }

    get extension(): string {
        return this.fileName.split('.').length > 1 ? this.fileName.split('.')[this.fileName.split('.').length - 1].toLowerCase().trim() : ''
    }
    get contentType(): EFileConentType {
        if ([
            "avif",
            "ase",
            "art",
            "bmp",
            "blp",
            "cd5",
            "cit",
            "cpt",
            "cr2",
            "cut",
            "dds",
            "dib",
            "djvu",
            "egt",
            "exif",
            "gif",
            "gpl",
            "grf",
            "icns",
            "ico",
            "iff",
            "jng",
            "jpeg",
            "jpg",
            "jfif",
            "jp2",
            "jps",
            "lbm",
            "max",
            "miff",
            "mng",
            "msp",
            "nef",
            "nitf",
            "ota",
            "pbm",
            "pc1",
            "pc2",
            "pc3",
            "pcf",
            "pcx",
            "pdn",
            "pgm",
            "PI1",
            "PI2",
            "PI3",
            "pict",
            "pct",
            "pnm",
            "pns",
            "ppm",
            "psb",
            "psd",
            "pdd",
            "psp",
            "px",
            "pxm",
            "pxr",
            "qfx",
            "raw",
            "rle",
            "sct",
            "sgi",
            "rgb",
            "int",
            "bw",
            "tga",
            "tiff",
            "tif",
            "vtf",
            "xbm",
            "xcf",
            "xpm",
            "3dv",
            "amf",
            "ai",
            "awg",
            "cgm",
            "cdr",
            "cmx",
            "dxf",
            "e2d",
            "egt",
            "eps",
            "fs",
            "gbr",
            "odg",
            "svg",
            "stl",
            "vrml",
            "x3d",
            "sxd",
            "v2d",
            "vnd",
            "wmf",
            "emf",
            "art",
            "xar",
            "png",
            "webp",
            "jxr",
            "hdp",
            "wdp",
            "cur",
            "ecw",
            "iff",
            "lbm",
            "liff",
            "nrrd",
            "pam",
            "pcx",
            "pgf",
            "sgi",
            "rgb",
            "rgba",
            "bw",
            "int",
            "inta",
            "sid",
            "ras",
            "sun",
            "tga",
            "heic",
            "heif"
        ].includes(this.extension)) return EFileConentType.IMAGE;
        else if ([
            "3g2",
            "3gp",
            "aaf",
            "asf",
            "avchd",
            "avi",
            "drc",
            "flv",
            "m2v",
            "m3u8",
            "m4p",
            "m4v",
            "mkv",
            "mng",
            "mov",
            "mp2",
            "mp4",
            "mpe",
            "mpeg",
            "mpg",
            "mpv",
            "mxf",
            "nsv",
            "ogg",
            "ogv",
            "qt",
            "rm",
            "rmvb",
            "roq",
            "svi",
            "vob",
            "webm",
            "wmv",
            "yuv"
        ].includes(this.extension)) return EFileConentType.VIDEO;
        else if ([
            "docx",
            "docm",
            "dotx",
            "dotm"
        ].includes(this.extension)) return EFileConentType.MSWORD;
        else if (this.extension == 'pdf') return EFileConentType.PDF;
        else if (this.extension == 'txt') return EFileConentType.TEXT;
        else return EFileConentType.UNKNOWN;
    }

}