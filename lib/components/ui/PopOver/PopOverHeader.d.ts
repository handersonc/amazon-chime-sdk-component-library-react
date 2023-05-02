import React, { FC, HTMLAttributes, ReactNode } from 'react';
import { BaseProps } from '../Base';
export interface PopOverHeaderProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'css'>, BaseProps {
    /** The title of the PopOver menu header. */
    title?: string;
    /** The subtitle of the PopOver menu header. */
    subtitle?: string | ReactNode;
    /** The source of the PopOver menu image. */
    imgSrc?: string;
}
export declare const PopOverHeader: FC<React.PropsWithChildren<PopOverHeaderProps>>;
export default PopOverHeader;
