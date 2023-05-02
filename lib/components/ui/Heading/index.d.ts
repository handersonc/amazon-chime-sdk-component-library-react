import React, { ReactNode } from 'react';
import { BaseProps } from '../Base';
export declare type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export interface HeadingProps extends BaseProps {
    /** The children element(s) within a heading. */
    children: ReactNode | ReactNode[];
    /** The level of heading from 1 to 6. 1 defines the most important heading, 6 defines the least important heading. */
    level: HeadingLevel;
}
export declare const Heading: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLElement>>;
export default Heading;
