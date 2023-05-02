import React, { FC } from 'react';
import { SvgProps } from '../Svg';
export declare type CautionVariant = 'default' | 'fill-warning' | 'fill-error';
export interface CautionProps extends SvgProps {
    /** toggle the range of visual variants */
    variant?: CautionVariant;
}
declare const Caution: FC<React.PropsWithChildren<CautionProps>>;
export default Caution;
