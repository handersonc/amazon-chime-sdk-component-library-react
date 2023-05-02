import React, { RefObject } from 'react';
export declare type AspectRatio = 'r21by9' | 'r16by9' | 'r3by2' | 'r4by3' | 'r1by1' | 'r2by3' | 'r1by2' | 'slim';
export interface VideoGridProps extends React.HTMLAttributes<HTMLDivElement> {
    size: number;
}
export declare const useElementAspectRatio: (ref: RefObject<HTMLElement>) => AspectRatio | null;
export default useElementAspectRatio;
