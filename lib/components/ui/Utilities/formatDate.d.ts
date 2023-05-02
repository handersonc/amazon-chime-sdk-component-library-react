export interface DateOptions {
    weekday?: 'long' | 'short' | 'narrow';
    year?: 'numeric' | '2-digit';
    month?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit';
    day?: 'numeric' | '2-digit';
}
export declare const formatDate: (dateStr: string, locale?: string | undefined, dateOptions?: DateOptions | undefined, todayText?: string | undefined, yesterdayText?: string | undefined) => string;
