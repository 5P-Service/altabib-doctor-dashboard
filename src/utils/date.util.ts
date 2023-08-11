export const MILLISECONDS_IN_SECOND = 1000;
export const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * 60;
export const MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * 60;
export const MILLISECONDS_IN_DAY = MILLISECONDS_IN_HOUR * 24;
export const MILLISECONDS_IN_YEAR = MILLISECONDS_IN_HOUR * 360;

export enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THEURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

interface ITime {
    H: number,
    M: number,
    S?: number
    meridiem: 'P' | 'A'
}
export class Time implements ITime {
    H: number;
    M: number;
    S: number;
    meridiem: "P" | "A";
    constructor(hours: number, minutes?: number, seconds?: number) {
        this.H = hours || 0;
        this.M = minutes || 0;
        this.S = seconds || 0;
        this.meridiem = (this.H >= 0 && this.H < 12) ? 'A' : 'P'
    }

    getTime(): number {
        return (this.S * 1000) + (this.M * 1000 * 60) + (this.H * 1000 * 60 * 60);
    }
    toString(): string {
        return `${this.H > 9 ? '0' : ''}${this.H}:${this.M > 9 ? '0' : ''}${this.M}` + (this.S > 0) ? `${this.S > 9 ? '0' : ''}${this.S}` : ' ' + this.meridiem;
    }

    getHour(): number { return this.H }
    getMinutes(): number { return this.M }
    getSeconds(): number { return this.S }
    getMeridiem(): 'P' | 'A' { return this.meridiem }
}

export function addDaysToDate(date: Date, days: number): Date {
    return new Date(date.getTime() + (MILLISECONDS_IN_DAY * days));
}

export function getDayDate(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getInsertionTimeBornes(pattern: Array<{ startTime: number, endTime: number }>, item: { startTime: number, endTime: number }): { before: { startTime: number, endTime: number } | null, after: { startTime: number, endTime: number } | null } | null {
    if (item.endTime <= item.startTime) return null;
    if (pattern.length == 0) return { before: null, after: null }
    else if (pattern.length == 1) return pattern[0].startTime > item.endTime ? { before: pattern[0], after: null } : (pattern[0].endTime < item.startTime ? { before: null, after: pattern[0] } : null)
    else {
        pattern = pattern.sort((a, b) => a.endTime - b.endTime);
        const beforeIndex = pattern.findIndex(e => e.startTime > item.endTime);
        if (beforeIndex == 0) return item.endTime < pattern[0].startTime ? { before: pattern[0], after: null } : null;
        else if (beforeIndex > 0) return pattern[beforeIndex - 1].endTime < item.startTime ? { before: pattern[beforeIndex], after: pattern[beforeIndex - 1] } : null;
        else return item.startTime > pattern[pattern.length - 1].endTime ? { before: null, after: pattern[pattern.length - 1] } : null;
    }
}
// 100-200 , 400-600 , 800-1000 ====> ( 0-50 ) , (250 - 350) , (650 - 750 ) , (1200-1400) , (300-500) ,  ( 500 - 700 )